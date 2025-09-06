
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-primary", className)}
    >
      <rect width="40" height="40" rx="8" fill="currentColor" />
      <path
        d="M12 29L20 23L28 29"
        stroke="hsl(var(--primary-foreground))"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.5 21.5L20 17L27.5 21.5L20 26L12.5 21.5Z"
        stroke="hsl(var(--primary-foreground))"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <line
        x1="20"
        y1="17"
        x2="20"
        y2="12"
        stroke="hsl(var(--primary-foreground))"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="25"
        y1="12"
        x2="15"
        y2="12"
        stroke="hsl(var(--primary-foreground))"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}


export function GraduationCapIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.084a1 1 0 0 0 0 1.838l8.57 3.908a2 2 0 0 0 1.66 0z" />
      <path d="M22 10v6" />
      <path d="M6 12v5a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-5" />
    </svg>
  );
}
