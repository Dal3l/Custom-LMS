"use client";

import { AudioLines, Image as ImageIcon, Plus, Trash2, Type } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import type { ExerciseEditorProps } from "../../client-types";
import { mediaUrl } from "../../media";
import { MediaDropzone } from "../../media-dropzone";
import { AudioPlayer } from "../audio/viewer";
import { buildMatching, emptyPair, MAX_PAIRS, type Left, type MatchingContent, type MatchingKey } from "./schema";

type Pair = MatchingKey["pairs"][number];
const KINDS: { kind: Left["kind"]; Icon: typeof Type }[] = [
  { kind: "text", Icon: Type },
  { kind: "image", Icon: ImageIcon },
  { kind: "audio", Icon: AudioLines },
];
const emptyLeft = (kind: Left["kind"]): Left =>
  kind === "text" ? { kind, text: "" } : kind === "image" ? { kind, image: null } : { kind, file: null };

export function MatchingEditor({ value, onChange }: ExerciseEditorProps<MatchingContent, MatchingKey>) {
  const t = useTranslations("exercises.matching");
  const key = value.key!;
  const emit = (pairs: Pair[]) => onChange(buildMatching({ ...key, pairs }));
  const patch = (id: string, p: Partial<Pair>) => emit(key.pairs.map((x) => (x.id === id ? { ...x, ...p } : x)));

  return (
    <div className="flex flex-col gap-2">
      <ol className="flex flex-col gap-2">
        {key.pairs.map((pair, i) => (
          <li key={pair.id} className="flex flex-col gap-2 rounded-lg border p-2 sm:flex-row sm:items-start">
            <div className="flex min-w-0 flex-1 flex-col gap-1.5">
              <div className="flex items-center gap-1">
                <span className="w-5 text-sm font-medium tabular-nums text-muted-foreground">{i + 1}.</span>
                {KINDS.map(({ kind, Icon }) => (
                  <Button
                    key={kind}
                    type="button"
                    size="icon"
                    variant={pair.left.kind === kind ? "secondary" : "ghost"}
                    className={cn("size-7", pair.left.kind === kind && "text-primary")}
                    aria-pressed={pair.left.kind === kind}
                    aria-label={t(`kind.${kind}`)}
                    title={t(`kind.${kind}`)}
                    onClick={() => pair.left.kind !== kind && patch(pair.id, { left: emptyLeft(kind) })}
                  >
                    <Icon aria-hidden="true" />
                  </Button>
                ))}
              </div>
              {pair.left.kind === "text" && (
                <Input
                  value={pair.left.text}
                  onChange={(e) => patch(pair.id, { left: { kind: "text", text: e.target.value.slice(0, 300) } })}
                  placeholder={t("leftPlaceholder")}
                  aria-label={t("left", { n: i + 1 })}
                />
              )}
              {pair.left.kind === "image" &&
                (pair.left.image ? (
                  <div className="flex items-center gap-2">
                    <Image
                      src={mediaUrl(pair.left.image.path)}
                      alt={pair.left.image.name}
                      width={pair.left.image.width ?? 200}
                      height={pair.left.image.height ?? 150}
                      unoptimized
                      className="h-16 w-auto rounded-md border object-contain"
                    />
                    <Button type="button" variant="ghost" size="sm" onClick={() => patch(pair.id, { left: emptyLeft("image") })}>
                      {t("replace")}
                    </Button>
                  </div>
                ) : (
                  <MediaDropzone kind="image" compact onUploaded={([img]) => img && patch(pair.id, { left: { kind: "image", image: img } })} />
                ))}
              {pair.left.kind === "audio" &&
                (pair.left.file ? (
                  <div className="flex flex-col gap-1">
                    <AudioPlayer file={pair.left.file} />
                    <Button type="button" variant="ghost" size="sm" className="w-fit" onClick={() => patch(pair.id, { left: emptyLeft("audio") })}>
                      {t("replace")}
                    </Button>
                  </div>
                ) : (
                  <MediaDropzone kind="audio" compact onUploaded={([f]) => f && patch(pair.id, { left: { kind: "audio", file: f } })} />
                ))}
            </div>
            <span className="hidden self-center text-muted-foreground sm:block" aria-hidden="true">
              —
            </span>
            <div className="flex items-start gap-1 sm:flex-1 sm:pt-8">
              <Input
                value={pair.right}
                onChange={(e) => patch(pair.id, { right: e.target.value.slice(0, 300) })}
                placeholder={t("rightPlaceholder")}
                aria-label={t("right", { n: i + 1 })}
              />
              {key.pairs.length > 2 && (
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="size-8 shrink-0"
                  aria-label={t("removePair", { n: i + 1 })}
                  onClick={() => emit(key.pairs.filter((x) => x.id !== pair.id))}
                >
                  <Trash2 aria-hidden="true" />
                </Button>
              )}
            </div>
          </li>
        ))}
      </ol>
      {key.pairs.length < MAX_PAIRS && (
        <Button type="button" variant="outline" size="sm" className="w-fit" onClick={() => emit([...key.pairs, emptyPair()])}>
          <Plus aria-hidden="true" />
          {t("addPair")}
        </Button>
      )}
    </div>
  );
}
