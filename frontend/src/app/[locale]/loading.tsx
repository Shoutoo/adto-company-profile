export default function RootLoading() {
  return (
    <div className="bg-background flex min-h-dvh items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        <div className="border-border flex h-16 w-16 animate-pulse items-center justify-center border bg-surface-secondary">
          <span className="text-foreground font-heading text-2xl font-bold uppercase tracking-widest">
            A
          </span>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-border relative h-1 w-24 overflow-hidden">
            <div className="absolute left-0 top-0 h-full w-1/3 animate-[shimmer_1.5s_infinite] bg-brand-600" />
          </div>
          <span className="text-muted-foreground mt-4 text-xs font-bold uppercase tracking-widest">
            Initializing System
          </span>
        </div>
      </div>
    </div>
  );
}
