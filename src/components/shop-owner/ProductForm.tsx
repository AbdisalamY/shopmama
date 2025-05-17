import { useState } from 'react';
import { Save, Store, MapPin, Building, Hash, Phone, Upload } from 'lucide-react';

interface ShopInformationProps {
  initialData?: ShopFormData;
  onSave?: (data: ShopFormData) => void;
  isEditing?: boolean;
}

interface ShopFormData {
  shopName: string;
  city: string;
  industry: string;
  mall: string;
  shopNumber: string;
  whatsappBusiness: string;
  logo?: File | string;
}

export default function ShopInformation({ initialData, onSave, isEditing = false }: ShopInformationProps) {
  const [formData, setFormData] = useState<ShopFormData>({
    shopName: initialData?.shopName || '',
    city: initialData?.city || '',
    industry: initialData?.industry || '',
    mall: initialData?.mall || '',
    shopNumber: initialData?.shopNumber || '',
    whatsappBusiness: initialData?.whatsappBusiness || '',
    logo: initialData?.logo || undefined
  });

  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (field: keyof ShopFormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const handleLogoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        logo: file
      }));
      
      // Create preview
      const reader = new FileReader();
      reader.onload = (e) => {
        setLogoPreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.shopName.trim()) newErrors.shopName = 'Shop name is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.industry.trim()) newErrors.industry = 'Industry is required';
    if (!formData.mall.trim()) newErrors.mall = 'Mall is required';
    if (!formData.shopNumber.trim()) newErrors.shopNumber = 'Shop number is required';
    if (!formData.whatsappBusiness.trim()) newErrors.whatsappBusiness = 'WhatsApp business number is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      onSave?.(formData);
    }
  };

  const industries = [
    'Fashion & Apparel',
    'Electronics',
    'Food & Beverages',
    'Beauty & Personal Care',
    'Home & Garden',
    'Sports & Outdoors',
    'Books & Media',
    'Health & Pharmacy',
    'Automotive',
    'Other'
  ];

  return (
    <div className="p-6 bg-white">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Shop Information</h1>
        <button
          onClick={handleSubmit}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
        >
          <Save size={16} />
          Save Information
        </button>
      </div>

      {/* Shop Logo Section */}
      <div className="flex items-center gap-4 mb-8 p-4 bg-gray-50 rounded-lg">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center overflow-hidden">
          {logoPreview ? (
            <img src={logoPreview} alt="Logo preview" className="w-full h-full object-cover rounded-full" />
          ) : formData.logo && typeof formData.logo === 'string' ? (
            <img src={formData.logo} alt="Shop logo" className="w-full h-full object-cover rounded-full" />
          ) : (
            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">YR</span>
            </div>
          )}
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-lg text-gray-800">YVES ROCHER</h3>
          <p className="text-sm text-gray-600">Boutique, France</p>
        </div>
        <div>
          <input
            type="file"
            id="logo-upload"
            accept="image/*"
            onChange={handleLogoUpload}
            className="hidden"
          />
          <label
            htmlFor="logo-upload"
            className="px-4 py-2 bg-white border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors flex items-center gap-2"
          >
            <Upload size={16} />
            Upload Logo
          </label>
        </div>
      </div>

      {/* Form Fields Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Shop Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Shop Name</label>
          <div className="flex items-center gap-2">
            <Store size={16} className="text-gray-500" />
            <input
              type="text"
              value={formData.shopName}
              onChange={(e) => handleInputChange('shopName', e.target.value)}
              className={`flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.shopName ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Fashion Hub"
            />
          </div>
          {errors.shopName && <p className="text-red-500 text-xs mt-1">{errors.shopName}</p>}
        </div>

        {/* City */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-gray-500" />
            <input
              type="text"
              value={formData.city}
              onChange={(e) => handleInputChange('city', e.target.value)}
              className={`flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.city ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="New York"
            />
          </div>
          {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
        </div>

        {/* Industry */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Industry</label>
          <select
            value={formData.industry}
            onChange={(e) => handleInputChange('industry', e.target.value)}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.industry ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            <option value="">Select Industry</option>
            {industries.map((industry) => (
              <option key={industry} value={industry}>
                {industry}
              </option>
            ))}
          </select>
          {errors.industry && <p className="text-red-500 text-xs mt-1">{errors.industry}</p>}
        </div>

        {/* Mall */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Mall</label>
          <div className="flex items-center gap-2">
            <Building size={16} className="text-gray-500" />
            <input
              type="text"
              value={formData.mall}
              onChange={(e) => handleInputChange('mall', e.target.value)}
              className={`flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.mall ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Central Mall"
            />
          </div>
          {errors.mall && <p className="text-red-500 text-xs mt-1">{errors.mall}</p>}
        </div>

        {/* Shop Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Shop Number</label>
          <div className="flex items-center gap-2">
            <Hash size={16} className="text-gray-500" />
            <input
              type="text"
              value={formData.shopNumber}
              onChange={(e) => handleInputChange('shopNumber', e.target.value)}
              className={`flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.shopNumber ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="123"
            />
          </div>
          {errors.shopNumber && <p className="text-red-500 text-xs mt-1">{errors.shopNumber}</p>}
        </div>

        {/* WhatsApp Business */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">WhatsApp Business</label>
          <div className="flex items-center gap-2">
            <Phone size={16} className="text-gray-500" />
            <input
              type="tel"
              value={formData.whatsappBusiness}
              onChange={(e) => handleInputChange('whatsappBusiness', e.target.value)}
              className={`flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.whatsappBusiness ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="+254 799374937"
            />
          </div>
          {errors.whatsappBusiness && <p className="text-red-500 text-xs mt-1">{errors.whatsappBusiness}</p>}
        </div>
      </div>
    </div>
  );
}