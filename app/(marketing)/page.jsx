import HomeContent from './HomeContent'
import JsonLd from '@/components/JsonLd'
import { pageMetadata, breadcrumbLd } from '@/lib/site'

export const metadata = pageMetadata({
  title: 'Car2Fix | Auto Repair Shop in Newark & Linden, NJ',
  description:
    'Family-owned auto repair in Newark & Linden, NJ. ASE & I-CAR certified. Mechanical repairs, collision work, free estimates.',
  path: '/',
  ogImage: '/og-home.jpg',
  ogAlt: 'Car2Fix — Auto Repair Shop in Newark & Linden, NJ',
})

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbLd([['Home', '/']])} />
      <HomeContent />
    </>
  )
}
