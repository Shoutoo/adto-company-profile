'use client';

import dynamic from 'next/dynamic';

export const DynamicLocationMap = dynamic(
  () => import('./location-map'),
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 flex items-center justify-center bg-slate-50">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-brand-600 border-t-transparent" />
      </div>
    ),
  }
);
