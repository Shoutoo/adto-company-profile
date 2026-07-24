import Image from 'next/image';

export default function RootLoading() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center overflow-hidden bg-navy relative">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF5A00]/10 blur-[100px] animate-pulse" />
      
      <div className="relative z-10 flex flex-col items-center gap-10">
        <div className="relative flex h-24 w-24 items-center justify-center">
          {/* Outer rotating ring */}
          <div className="absolute inset-0 rounded-full border-[3px] border-white/5 border-t-[#FF5A00] animate-spin" />
          
          <div className="relative flex h-14 w-14 items-center justify-center animate-pulse">
            <Image
              src="/logo-icon.svg"
              alt="Loading ADTO"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
        
        <div className="flex flex-col items-center gap-4">
          <div className="relative h-0.5 w-32 overflow-hidden rounded-full bg-white/10">
            <div className="absolute left-0 top-0 h-full w-1/3 animate-[shimmer_1.5s_infinite] bg-[#FF5A00]" />
          </div>
          <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-white/50">
            Loading Experience
          </span>
        </div>
      </div>
    </div>
  );
}
