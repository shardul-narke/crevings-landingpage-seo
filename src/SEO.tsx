import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://crevings-landingpage.vercel.app';
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

type PageKey =
  | 'food'
  | 'delivery'
  | 'cities'
  | 'customerprivacypolicy'
  | 'roi-calculator';

interface SEOConfig {
  title: string;
  description: string;
  path: string;
  keywords?: string;
}

const SEO_MAP: Record<PageKey, SEOConfig> = {
  food: {
    title: 'Crevings – 0% Commission Food Delivery Platform for Restaurants',
    description:
      'Join Crevings, the fair food delivery platform with 0% commission. Go live in 2 minutes. Built for restaurants, cafes, cloud kitchens & home chefs in India.',
    path: '/',
    keywords:
      '0% commission food delivery, restaurant partner platform, food delivery India, cloud kitchen platform, zero commission delivery',
  },
  delivery: {
    title: 'Become a Crevings Delivery Partner | Flexible Hours & Instant Earnings',
    description:
      'Join Crevings as a delivery partner. Flexible working hours, transparent earnings and fast payouts. Start delivering in hours, not days.',
    path: '/delivery',
    keywords:
      'delivery partner jobs, food delivery rider, Crevings delivery partner, earn with delivery app',
  },
  cities: {
    title: 'Cities We Serve | Crevings Food Delivery Coverage',
    description:
      'See where Crevings is live and coming soon. Currently expanding across Uttar Pradesh, Bihar and more cities in India.',
    path: '/cities',
    keywords: 'Crevings cities, food delivery Prayagraj, food delivery Motihari',
  },
  customerprivacypolicy: {
    title: 'Consumer Privacy & Data Deletion Policy | Crevings',
    description:
      'Read Crevings Consumer Privacy and Data Deletion Policy. Learn how we collect, use and protect your personal data.',
    path: '/customerprivacypolicy',
  },
  'roi-calculator': {
    title: 'ROI Calculator | See How Much You Save with 0% Commission – Crevings',
    description:
      'Calculate your potential savings with Crevings 0% commission model compared to traditional food delivery platforms.',
    path: '/roi-calculator',
  },
};

interface SEOProps {
  page: string;
}

export default function SEO({ page }: SEOProps) {
  const config = SEO_MAP[page as PageKey] ?? SEO_MAP.food;
  const fullUrl = `${SITE_URL}${config.path === '/' ? '' : config.path}`;

  return (
    <Helmet>
      <title>{config.title}</title>
      <meta name="description" content={config.description} />
      {config.keywords && <meta name="keywords" content={config.keywords} />}
      <link rel="canonical" href={fullUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={config.title} />
      <meta property="og:description" content={config.description} />
      <meta property="og:image" content={DEFAULT_OG_IMAGE} />
      <meta property="og:site_name" content="Crevings" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={config.title} />
      <meta name="twitter:description" content={config.description} />
      <meta name="twitter:image" content={DEFAULT_OG_IMAGE} />
    </Helmet>
  );
}
