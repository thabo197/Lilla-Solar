import { Sun, type LucideIcon } from "lucide-react";

export function GradientPlaceholder({
  from,
  to,
  icon: Icon = Sun,
  className = "",
  label,
}: {
  from: string;
  to: string;
  icon?: LucideIcon;
  className?: string;
  label?: string;
}) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden ${className}`}
      style={{
        backgroundImage: `linear-gradient(135deg, ${from} 0%, ${to} 100%)`,
      }}
      role="img"
      aria-label={label ?? "Solar equipment placeholder image"}
    >
      {/* faint concentric rings to suggest a panel/sun motif without being literal */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full border border-white/60" />
        <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full border border-white/60" />
      </div>
      <Icon className="h-10 w-10 text-white/85" strokeWidth={1.5} />
    </div>
  );
}
