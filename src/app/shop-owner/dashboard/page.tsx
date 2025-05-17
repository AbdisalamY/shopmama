// app/shop-owner/dashboard/page.tsx
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Edit } from 'lucide-react';

export default function ShopOwnerDashboard() {
  // In a real app, this would come from an API or auth context
  const shopInfo = {
    name: 'YVES ROCHER',
    subtitle: 'Boutique Rocher',
    logo: '/api/placeholder/100/100',
    details: {
      shopName: 'Fashion Hub',
      industry: 'Apparel',
      shopNumber: '123',
      city: 'New York',
      mall: 'Central Mall',
      whatsapp: '+254 793748937'
    }
  };

  return (
    <div className="space-y-8">
      {/* Header with Badge and Edit Button */}
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <div className="flex items-center gap-4">
            <h1 className="text-3xl font-bold">Shop Information</h1>
            <Badge variant="outline" className="text-blue-600 border-blue-600">
              Sokoo
            </Badge>
          </div>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
          <Edit className="h-4 w-4 mr-2" />
          Edit Information
        </Button>
      </div>

      {/* Shop Information Card */}
      <Card className="max-w-4xl">
        <CardHeader>
          <CardTitle className="text-xl">Shop Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-start space-x-6">
            {/* Shop Logo Section */}
            <div className="flex-shrink-0 text-center">
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-2">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">YR</span>
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-lg">{shopInfo.name}</h3>
                <p className="text-sm text-blue-600">{shopInfo.subtitle}</p>
              </div>
            </div>

            {/* Shop Details Grid */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                    Shop Name
                  </label>
                  <p className="text-lg font-semibold text-gray-900 mt-1">
                    {shopInfo.details.shopName}
                  </p>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                    Industry
                  </label>
                  <p className="text-lg font-semibold text-gray-900 mt-1">
                    {shopInfo.details.industry}
                  </p>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                    Shop Number
                  </label>
                  <p className="text-lg font-semibold text-gray-900 mt-1">
                    {shopInfo.details.shopNumber}
                  </p>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                    City
                  </label>
                  <p className="text-lg font-semibold text-gray-900 mt-1">
                    {shopInfo.details.city}
                  </p>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                    Mall
                  </label>
                  <p className="text-lg font-semibold text-gray-900 mt-1">
                    {shopInfo.details.mall}
                  </p>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                    WhatsApp Business
                  </label>
                  <p className="text-lg font-semibold text-gray-900 mt-1">
                    {shopInfo.details.whatsapp}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions Grid (Optional) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <Card className="hover:shadow-lg transition-shadow cursor-pointer border-2 border-transparent hover:border-blue-200">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Edit className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Update Info</h3>
            <p className="text-gray-600 text-sm">
              Modify your shop details and contact information
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer border-2 border-transparent hover:border-green-200">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2">Add Products</h3>
            <p className="text-gray-600 text-sm">
              Upload new products to your shop catalog
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer border-2 border-transparent hover:border-purple-200">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 00-2-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2">View Analytics</h3>
            <p className="text-gray-600 text-sm">
              Check your shop performance and statistics
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}