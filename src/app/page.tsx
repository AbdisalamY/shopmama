import CategoryNav from '@/components/home/CategoryNav';
import HeroSection from '@/components/home/HeroSection';
import ShopsGrid from '@/components/home/ShopsGrid';
import { Shop } from '@/types/shop';

// Mock data - in a real app, this would come from an API or database
const shops: Shop[] = [
  {
    id: 1,
    name: 'Glamour Beauty',
    location: 'Central Mall',
    mall: 'Central Mall',
    shopNumber: 'CM-101',
    phone: '+254 123 456 789',
    logo: '/api/placeholder/100/100',
    category: 'Cosmetics',
    status: 'active'
  },
  {
    id: 2,
    name: 'Shoe Haven',
    location: 'Westgate Mall',
    mall: 'Westgate Mall',
    shopNumber: 'WG-205',
    phone: '+254 987 654 321',
    logo: '/api/placeholder/100/100',
    category: 'Shoes',
    status: 'active'
  },
  {
    id: 3,
    name: 'Fashion Hub',
    location: 'Village Market',
    mall: 'Village Market',
    shopNumber: 'VM-301',
    phone: '+254 555 123 456',
    logo: '/api/placeholder/100/100',
    category: 'Apparel',
    status: 'active'
  },
  {
    id: 4,
    name: 'Tech World',
    location: 'Junction Mall',
    mall: 'Junction Mall',
    shopNumber: 'JM-150',
    phone: '+254 777 888 999',
    logo: '/api/placeholder/100/100',
    category: 'Electronics',
    status: 'active'
  },
  {
    id: 5,
    name: 'Scent & Co',
    location: 'Sarit Centre',
    mall: 'Sarit Centre',
    shopNumber: 'SC-250',
    phone: '+254 444 555 666',
    logo: '/api/placeholder/100/100',
    category: 'Fragrance',
    status: 'active'
  }
];

// Mock categories
const categories = [
  'All',
  'Fashion',
  'Electronics',
  'Beauty',
  'Sports',
  'Home & Garden'
];

export default function HomePage() {
  return (
    <div className="flex flex-col items-center pt-20">
      {/* Category Navigation */}
      <CategoryNav categories={categories} />
      
      {/* Hero Section with Search */}
      <HeroSection />
      
      {/* Shop Listings - Now properly passing shops as props */}
      <ShopsGrid 
        shops={shops} 
        title="Featured Shops"
        emptyMessage="No shops available. Please check back later."
      />
    </div>
  );
}
