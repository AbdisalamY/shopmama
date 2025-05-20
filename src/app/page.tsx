// src/app/shop/page.tsx
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ShopIndexPage() {
  const router = useRouter();
  
  // Redirect to the dashboard page
  useEffect(() => {
    router.push('/shop/dashboard');
  }, [router]);
  
  return (
    <div className="flex items-center justify-center min-h-[70vh]">
      <div className="animate-pulse">Loading...</div>
    </div>
  );
}