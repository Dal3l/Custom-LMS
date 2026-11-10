import { notFound } from "next/navigation";

// Any unknown path inside a locale shows the localized 404 page.
export default function CatchAll() {
  notFound();
}
