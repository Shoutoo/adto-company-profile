import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const contentType = 'image/png';
export const size = { width: 1200, height: 630 };

/**
 * Default Open Graph image for the site.
 * Rendered as an edge function using @vercel/og.
 */
export default function OgImage() {
  return new ImageResponse(
    <div
      style={{
        background: 'linear-gradient(135deg, #0a0a0f 0%, #1e1b4b 50%, #0a0a0f 100%)',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'system-ui, sans-serif',
        padding: '80px',
        position: 'relative',
      }}
    >
      {/* Background grid pattern */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(circle at 25px 25px, rgba(99,102,241,0.15) 2%, transparent 0%)',
          backgroundSize: '50px 50px',
        }}
      />

      {/* Logo placeholder */}
      <div
        style={{
          width: 80,
          height: 80,
          borderRadius: 16,
          background: 'linear-gradient(135deg, #3b82f6, #6366f1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 32,
          fontSize: 40,
          fontWeight: 900,
          color: 'white',
        }}
      >
        A
      </div>

      {/* Company name */}
      <div
        style={{
          fontSize: 48,
          fontWeight: 800,
          color: 'white',
          textAlign: 'center',
          lineHeight: 1.2,
          marginBottom: 16,
          letterSpacing: '-0.02em',
        }}
      >
        PT Adto Cipta Usaha Mandiri
      </div>

      {/* Tagline */}
      <div
        style={{
          fontSize: 24,
          color: 'rgba(255,255,255,0.7)',
          textAlign: 'center',
          marginBottom: 40,
        }}
      >
        Building Excellence, Delivering Trust.
      </div>

      {/* Services pill */}
      <div
        style={{
          display: 'flex',
          gap: 12,
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {['Construction', 'Engineering', 'Procurement', 'Consulting'].map((s) => (
          <div
            key={s}
            style={{
              padding: '8px 20px',
              borderRadius: 100,
              border: '1px solid rgba(99,102,241,0.5)',
              color: 'rgba(255,255,255,0.8)',
              fontSize: 16,
              background: 'rgba(99,102,241,0.1)',
            }}
          >
            {s}
          </div>
        ))}
      </div>

      {/* Bottom URL */}
      <div
        style={{
          position: 'absolute',
          bottom: 40,
          fontSize: 16,
          color: 'rgba(255,255,255,0.4)',
        }}
      >
        www.adtociptausahamandiri.co.id
      </div>
    </div>,
    { ...size }
  );
}
