// src/app/shop/page.tsx
"use client";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import CategoryNav from "@/components/home/CategoryNav";
import HeroSection from "@/components/home/HeroSection";
import ShopsGrid from "@/components/home/ShopsGrid";

const categories = [
  "Fashion", "Electronics", "Cosmetics", "Shoes", "Home & Kitchen", "Groceries", "Jewelry", "Toys"
];

const shops = [
  {
    id: 1,
    name: "Fashion Hub",
    location: "Central Mall, Nairobi",
    mall: "Central Mall",
    shopNumber: "A12",
    phone: "+254 700 123456",
    logo: "/logos/sample-logo.png",
    category: "Fashion",
    status: "Active"
  },
  {
    id: 2,
    name: "Tech World",
    location: "Garden City Mall, Nairobi",
    mall: "Garden City Mall",
    shopNumber: "B34",
    phone: "+254 711 654321",
    logo: "/logos/sample-logo2.png",
    category: "Electronics",
    status: "Active"
  }
  // Add more mock shops as needed
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        <CategoryNav categories={categories} />
        <HeroSection />
        <ShopsGrid 
          shops={shops} 
          title="Featured Shops" 
          emptyMessage="No shops found."
        />
      </main>
      <Footer />
    </div>
  );
}