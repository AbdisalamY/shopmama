// src/app/shop/layout.tsx
import { ShopLayout } from '@/components/layouts/ShopLayout';

export default function ShopRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ShopLayout>{children}</ShopLayout>;
}