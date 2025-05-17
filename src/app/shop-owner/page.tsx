// app/shop-owner/page.tsx
import { redirect } from 'next/navigation';

export default function ShopOwnerPage() {
  // Redirect to dashboard by default
  redirect('/shop-owner/dashboard');
}