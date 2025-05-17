// app/admin/shop/page.tsx
import { ShopList } from '@/components/admin/ShopList';

export default function AdminShopPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">All Shops</h1>
      </div>
      <ShopList />
    </div>
  );
}