"use client";

import { Lock } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link, usePathname } from "@/i18n/navigation";

// When access has ended, every page except the allowed ones shows this screen
// instead. Nothing is deleted: after payment everything is back.
const ALLOWED: Record<"teacher" | "student", string[]> = {
  teacher: ["/billing", "/profile", "/admin"],
  student: ["/profile"],
};

export function AccessGate({
  blocked,
  role,
  children,
}: {
  blocked: boolean;
  role: "teacher" | "student";
  children: React.ReactNode;
}) {
  const t = useTranslations("billing");
  const pathname = usePathname();
  const allowed = ALLOWED[role].some((p) => pathname === p || pathname.startsWith(`${p}/`));
  if (!blocked || allowed) return <>{children}</>;

  return (
    <Card className="mx-auto mt-8 max-w-lg rounded-2xl">
      <CardContent className="flex flex-col items-center gap-4 py-6 text-center">
        <span className="flex size-12 items-center justify-center rounded-full bg-accent text-primary">
          <Lock className="size-6" aria-hidden="true" />
        </span>
        <h1 className="text-xl font-semibold">{t(role === "teacher" ? "blockedTitle" : "studentBlockedTitle")}</h1>
        <p className="text-muted-foreground">{t(role === "teacher" ? "blockedText" : "studentBlockedText")}</p>
        {role === "teacher" && (
          <Button asChild size="lg">
            <Link href="/billing">{t("choosePlan")}</Link>
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
