import './globals.css'
import { DM_Sans, Outfit } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-outfit',
  display: 'swap',
})

const SITE_URL = 'https://www.car2fix.com'
const GTM_ID = 'GTM-TJ5WSTFT'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Car2Fix — Quality Auto Repairs in Newark & Linden, NJ',
    template: '%s | Car2Fix',
  },
  description:
    'Family-owned auto repair shops in Newark and Linden, NJ. Certified mechanical repairs, collision and body work, free estimates. Lifetime warranty on body repairs.',
  authors: [{ name: 'Car2Fix' }],
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: 'website',
    siteName: 'Car2Fix',
    title: 'Car2Fix — Quality Auto Repairs in Newark & Linden, NJ',
    description:
      'Family-owned auto repair shops in Newark and Linden, NJ. Certified mechanical repairs, collision and body work, free estimates.',
    url: SITE_URL,
    locale: 'en_US',
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'Car2Fix' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Car2Fix — Quality Auto Repairs in Newark & Linden, NJ',
    description:
      'Family-owned auto repair shops in Newark and Linden, NJ. Certified mechanical and body work, free estimates.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  manifest: '/site.webmanifest',
  other: {
    'geo.region': 'US-NJ',
    'geo.placename': 'Newark, New Jersey',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#111827',
}

const organizationLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Car2Fix',
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  telephone: '+1-607-251-1509',
  sameAs: [],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+1-607-251-1509',
      contactType: 'customer service',
      areaServed: 'US-NJ',
      availableLanguage: ['English'],
    },
  ],
  subOrganization: [
    {
      '@type': 'AutoRepair',
      name: 'Car2Fix — Mechanical Shop',
      telephone: '+1-607-251-1509',
      url: `${SITE_URL}/mech-shop`,
      address: {
        '@type': 'PostalAddress',
        streetAddress: '408 Carnegie Ave',
        addressLocality: 'Newark',
        addressRegion: 'NJ',
        postalCode: '07114',
        addressCountry: 'US',
      },
    },
    {
      '@type': 'AutoBodyShop',
      name: 'Car2Fix — Body Shop',
      telephone: '+1-607-251-1509',
      url: `${SITE_URL}/body-shop`,
      address: {
        '@type': 'PostalAddress',
        streetAddress: '1420 E Elizabeth Ave',
        addressLocality: 'Linden',
        addressRegion: 'NJ',
        postalCode: '07036',
        addressCountry: 'US',
      },
    },
  ],
}

const darkModeBootstrap = `
(function(){try{var s=localStorage.getItem('darkMode');var d=s!==null?JSON.parse(s):window.matchMedia('(prefers-color-scheme: dark)').matches;if(d)document.documentElement.classList.add('dark');}catch(e){}})();
`

const gtmSnippet = `
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');
`

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${outfit.variable}`}>
      <head>
        {/* Google Tag Manager — placed as high in <head> as possible, per GTM install spec */}
        <script dangerouslySetInnerHTML={{ __html: gtmSnippet }} />
        {/* End Google Tag Manager */}
        <script dangerouslySetInnerHTML={{ __html: darkModeBootstrap }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
        />
      </head>
      <body className="font-body antialiased">
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
