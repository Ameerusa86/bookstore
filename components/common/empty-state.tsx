import Link from "next/link";
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";

type EmptyStateProps = {
  title: string;
  description: string;
  icon?: ReactNode;
  actionLabel?: string;
  actionHref?: string;
};

export function EmptyState({
  title,
  description,
  icon,
  actionLabel,
  actionHref,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-border/80 bg-card/70 px-6 py-14 text-center shadow-sm">
      {icon && (
        <div className="mb-4 rounded-full bg-muted/70 p-4 text-muted-foreground">
          {icon}
        </div>
      )}

      <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>
      <p className="mt-2 max-w-md text-sm text-muted-foreground">
        {description}
      </p>

      {actionLabel && actionHref && (
        <Button asChild className="mt-6 shadow-sm">
          <Link href={actionHref}>{actionLabel}</Link>
        </Button>
      )}
    </div>
  );
}
