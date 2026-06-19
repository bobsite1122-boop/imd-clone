import { ImageResponse } from 'next/og'
import { siteName } from '@/lib/seo/site'

export const runtime = 'edge'
export const alt = `${siteName} — Medical Education Subscription`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0e3b77',
          padding: '60px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              color: '#ffffff',
              letterSpacing: '-0.02em',
              marginBottom: 24,
            }}
          >
            iMD App PK
          </div>
          <div
            style={{
              fontSize: 32,
              fontWeight: 500,
              color: 'rgba(255,255,255,0.85)',
              maxWidth: 800,
              lineHeight: 1.4,
            }}
          >
            Premium Medical Education Subscription for USMLE, AMC, PLAB and More
          </div>
          <div
            style={{
              marginTop: 40,
              fontSize: 22,
              fontWeight: 600,
              color: 'rgba(255,255,255,0.7)',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
            }}
          >
            45,000+ Medical Resources
          </div>
        </div>
      </div>
    ),
    { ...size },
  )
}
