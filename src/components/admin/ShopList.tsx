// components/admin/ShopList.tsx
'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, MoreVertical, Info, Trash2 } from 'lucide-react';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';

interface Shop {
  id: number;
  name: string;
  industry: string;
  status: 'Active' | 'Inactive';
  joinDate: string;
}

// Mock data - replace with actual data fetching
const mockShops: Shop[] = [
  {
    id: 1,
    name: 'Fashion Hub',
    industry: 'Apparel',
    status: 'Active',
    joinDate: '2024-01-15'
  },
  {
    id: 2,
    name: 'Scent & Co',
    industry: 'Fragrance',
    status: 'Inactive',
    joinDate: '2024-02-20'
  },
  {
    id: 3,
    name: 'Beauty Palace',
    industry: 'Cosmetics',
    status: 'Active',
    joinDate: '2024-03-10'
  },
  {
    id: 4,
    name: 'Shoe Store',
    industry: 'Shoes',
    status: 'Active',
    joinDate: '2024-04-05'
  }
];

const industries = [
  { value: 'all', label: 'All Industries' },
  { value: 'apparel', label: 'Apparel' },
  { value: 'cosmetics', label: 'Cosmetics' },
  { value: 'fragrance', label: 'Fragrance' },
  { value: 'shoes', label: 'Shoes' },
];

export function ShopList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [industryFilter, setIndustryFilter] = useState('all');
  const [shops] = useState<Shop[]>(mockShops);

  const filteredShops = shops.filter(shop => {
    const matchesSearch = shop.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesIndustry = industryFilter === 'all' || 
      shop.industry.toLowerCase() === industryFilter.toLowerCase();
    return matchesSearch && matchesIndustry;
  });

  return (
    <div className="space-y-6">
      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <Input
                  placeholder="Search shops..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-full sm:w-80"
                />
              </div>
              <Select value={industryFilter} onValueChange={setIndustryFilter}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {industries.map((industry) => (
                    <SelectItem key={industry.value} value={industry.value}>
                      {industry.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Shops Table */}
      <Card>
        <CardHeader>
          <CardTitle>Shops Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="pb-3 text-left font-medium text-gray-500">Shop Name</th>
                  <th className="pb-3 text-left font-medium text-gray-500">Industry</th>
                  <th className="pb-3 text-left font-medium text-gray-500">Status</th>
                  <th className="pb-3 text-left font-medium text-gray-500">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredShops.map((shop) => (
                  <tr key={shop.id} className="border-b last:border-0">
                    <td className="py-4 font-medium">{shop.name}</td>
                    <td className="py-4 text-gray-600">{shop.industry}</td>
                    <td className="py-4">
                      <Badge 
                        variant={shop.status === 'Active' ? 'default' : 'secondary'}
                        className={shop.status === 'Active' 
                          ? 'bg-green-100 text-green-800 hover:bg-green-200' 
                          : 'bg-red-100 text-red-800 hover:bg-red-200'
                        }
                      >
                        {shop.status}
                      </Badge>
                    </td>
                    <td className="py-4">
                      <div className="flex items-center space-x-2">
                        <Button size="sm" variant="outline">
                          <Info className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button size="sm" variant="outline">
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>View Details</DropdownMenuItem>
                            <DropdownMenuItem>Edit Shop</DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">
                              Delete Shop
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 flex items-center justify-between text-sm text-gray-500">
            <span>Showing {filteredShops.length} of {shops.length} shops</span>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">Previous</Button>
              <Button variant="default" size="sm">Next</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}



