import type { ReactNode } from "react";
import { Info, Lightbulb, AlertTriangle } from "lucide-react";
import type { CalloutType } from "../../data/articles/types";

interface CalloutProps {
  type?: CalloutType;
  title?: string;
  children: ReactNode;
}

const styles = {
  info: {
    container: "border-blue-200 bg-blue-50",
    icon: "text-blue-600",
    text: "text-blue-900",
    Icon: Info,
  },

  tip: {
    container: "border-emerald-200 bg-emerald-50",
    icon: "text-emerald-600",
    text: "text-emerald-900",
    Icon: Lightbulb,
  },

  warning: {
    container: "border-amber-200 bg-amber-50",
    icon: "text-amber-600",
    text: "text-amber-900",
    Icon: AlertTriangle,
  },
};

export default function Callout({
  type = "info",
  title,
  children,
}: CalloutProps) {
  const style = styles[type];
  const Icon = style.Icon;

  return (
    <div className={`my-6 rounded-xl border p-4 ${style.container}`}>
      <div className="flex items-start gap-3">
        <Icon size={19} className={`mt-0.5 shrink-0 ${style.icon}`} />

        <div>
          {title && (
            <h4 className={`text-sm font-semibold ${style.text}`}>{title}</h4>
          )}

          <div className={`mt-1 text-sm leading-6 ${style.text}`}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
