import type { LucideIcon } from 'lucide-react';

type TrustItemProps = {
  icon: LucideIcon;
  stat: string;
  label: string;
};

export function TrustItem({ icon: Icon, stat, label }: TrustItemProps) {
  return (
    <div className="bg-white shadow-card rounded-[10px] px-3.5 py-2.5 flex items-center gap-3 min-w-0">
      <div className="flex-shrink-0 text-brand-primary">
        <Icon size={20} strokeWidth={2} />
      </div>
      <div className="min-w-0">
        <div className="font-display font-bold text-[15px] leading-none text-neutral-900 truncate">
          {stat}
        </div>
        <div className="font-body text-[11px] text-neutral-500 mt-0.5 truncate">{label}</div>
      </div>
    </div>
  );
}
