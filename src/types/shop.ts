// src/types/shop.ts
export interface Shop {
    id: number;
    name: string;
    location: string;
    mall: string;
    shopNumber: string;
    phone: string;
    logo: string;
    category?: string;
    description?: string;
    whatsapp?: string;
    email?: string;
    website?: string;
    openingHours?: string;
    status?: 'active' | 'inactive';
  }
  
  export interface ShopOwner {
    id: number;
    name: string;
    email: string;
    phone: string;
    shopId: number;
  }
  
  export interface Category {
    id: number;
    name: string;
    description?: string;
    icon?: string;
  }