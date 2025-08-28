
import { PropsWithChildren } from "react";

export default function Pill({ children }: PropsWithChildren) {
  return (
    <span className="rounded-xl bg-[var(--brow)] w-[180px] h-[100px] border mb-24 border-white/15 px-3 py-2 text-sm flex items-center justify-center text-center">
      {children}
    </span>
  );
}
