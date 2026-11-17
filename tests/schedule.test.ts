import { describe, expect, it } from "vitest";
import { addDays, expand, isoWeekday, localDate, localTime, weekStart, zonedToUtc, type ScheduleEvent } from "@/features/schedule/occurrences";

const weekly: ScheduleEvent = {
  id: "e1",
  classId: "c1",
  startsOn: "2026-11-16", // Monday
  localTime: "18:00",
  timeZone: "Asia/Almaty",
  durationMin: 60,
  weekdays: [1, 4], // Mon, Thu
  until: null,
};

describe("dates", () => {
  it("weekdays, weeks, adding days", () => {
    expect(isoWeekday("2026-11-16")).toBe(1);
    expect(isoWeekday("2026-11-22")).toBe(7);
    expect(weekStart("2026-11-19")).toBe("2026-11-16");
    expect(addDays("2026-12-31", 1)).toBe("2027-01-01");
  });

  it("a local time in a zone is the right moment, also around daylight saving", () => {
    expect(zonedToUtc("2026-11-16", "18:00", "Asia/Almaty").toISOString()).toBe("2026-11-16T13:00:00.000Z");
    // Berlin: winter +1, summer +2 (clocks change on 2026-03-29)
    expect(zonedToUtc("2026-03-28", "18:00", "Europe/Berlin").toISOString()).toBe("2026-03-28T17:00:00.000Z");
    expect(zonedToUtc("2026-03-30", "18:00", "Europe/Berlin").toISOString()).toBe("2026-03-30T16:00:00.000Z");
  });

  it("shows a moment in the viewer's zone", () => {
    const at = new Date("2026-11-16T13:00:00Z");
    expect(localTime(at, "Asia/Almaty")).toBe("18:00");
    expect(localTime(at, "Europe/Moscow")).toBe("16:00");
    expect(localDate(new Date("2026-11-16T22:30:00Z"), "Asia/Almaty")).toBe("2026-11-17");
  });
});

describe("expanding the schedule", () => {
  it("a weekly series on Mon and Thu", () => {
    const got = expand([weekly], [], new Date("2026-11-16T00:00:00Z"), new Date("2026-11-30T00:00:00Z"));
    expect(got.map((o) => o.occursOn)).toEqual(["2026-11-16", "2026-11-19", "2026-11-23", "2026-11-26"]);
    expect(got[0].end.getTime() - got[0].start.getTime()).toBe(3_600_000);
    expect(got.every((o) => o.repeating)).toBe(true);
  });

  it("stays at 18:00 local across a clock change", () => {
    const berlin = { ...weekly, timeZone: "Europe/Berlin", startsOn: "2026-03-23", weekdays: [1] };
    const got = expand([berlin], [], new Date("2026-03-20T00:00:00Z"), new Date("2026-04-07T00:00:00Z"));
    expect(got.map((o) => localTime(o.start, "Europe/Berlin"))).toEqual(["18:00", "18:00", "18:00"]);
  });

  it("not before the start, not after 'until'", () => {
    const got = expand([{ ...weekly, until: "2026-11-23" }], [], new Date("2026-11-01T00:00:00Z"), new Date("2026-12-31T00:00:00Z"));
    expect(got.map((o) => o.occursOn)).toEqual(["2026-11-16", "2026-11-19", "2026-11-23"]);
  });

  it("one lesson", () => {
    const once = { ...weekly, weekdays: null, startsOn: "2026-11-20" };
    expect(expand([once], [], new Date("2026-11-01T00:00:00Z"), new Date("2026-12-01T00:00:00Z")).map((o) => o.occursOn)).toEqual(["2026-11-20"]);
    expect(expand([once], [], new Date("2026-11-21T00:00:00Z"), new Date("2026-12-01T00:00:00Z"))).toEqual([]);
  });

  it("one date moved or cancelled, the rest unchanged", () => {
    const got = expand(
      [weekly],
      [
        { eventId: "e1", occursOn: "2026-11-19", cancelled: true, movedTo: null, durationMin: null },
        { eventId: "e1", occursOn: "2026-11-23", cancelled: false, movedTo: "2026-11-24T14:00:00Z", durationMin: 90 },
      ],
      new Date("2026-11-16T00:00:00Z"),
      new Date("2026-11-27T00:00:00Z"),
    );
    expect(got.map((o) => [o.occursOn, o.start.toISOString(), o.moved])).toEqual([
      ["2026-11-16", "2026-11-16T13:00:00.000Z", false],
      ["2026-11-23", "2026-11-24T14:00:00.000Z", true],
      ["2026-11-26", "2026-11-26T13:00:00.000Z", false],
    ]);
    expect(got[1].end.toISOString()).toBe("2026-11-24T15:30:00.000Z");
  });
});
