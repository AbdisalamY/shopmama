// components/common/UnifiedSidebar.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { 
  LayoutDashboard, 
  Store, 
  Users, 
  Settings, 
  LogOut,
  Info,
  Package,
  ShoppingCart,
  BarChart3
} from 'lucide-react';

export type UserType = 'admin' | 'shop-owner';

interface NavigationItem {
  name: string;
  href: string;
  icon: any;
  userTypes: UserType[];
}

const navigationItems: NavigationItem[] = [
  // Admin Navigation
  {
    name: 'Dashboard',
    href: '/admin/dashboard',
    icon: LayoutDashboard,
    userTypes: ['admin']
  },
  {
    name: 'Shops',
    href: '/admin/shop',
    icon: Store,
    userTypes: ['admin']
  },
  {
    name: 'Users',
    href: '/admin/users',
    icon: Users,
    userTypes: ['admin']
  },
  {
    name: 'Settings',
    href: '/admin/settings',
    icon: Settings,
    userTypes: ['admin']
  },
  // Shop Owner Navigation
  {
    name: 'Shop Information',
    href: '/shop-owner/dashboard',
    icon: Info,
    userTypes: ['shop-owner']
  },
  {
    name: 'Products',
    href: '/shop-owner/products',
    icon: Package,
    userTypes: ['shop-owner']
  },
  {
    name: 'Orders',
    href: '/shop-owner/orders',
    icon: ShoppingCart,
    userTypes: ['shop-owner']
  },
  {
    name: 'Analytics',
    href: '/shop-owner/analytics',
    icon: BarChart3,
    userTypes: ['shop-owner']
  },
  {
    name: 'Settings',
    href: '/shop-owner/settings',
    icon: Settings,
    userTypes: ['shop-owner']
  }
];

interface UserInfo {
  name: string;
  role: string;
  avatar?: string;
  shopName?: string;
}

interface UnifiedSidebarProps {
  userType: UserType;
  userInfo?: UserInfo;
  showBadge?: boolean;
  badgeText?: string;
}

export function UnifiedSidebar({ 
  userType, 
  userInfo,
  showBadge = false,
  badgeText = "Sokoo"
}: UnifiedSidebarProps) {
  const pathname = usePathname();

  // Filter navigation items based on user type
  const filteredNavigation = navigationItems.filter(item => 
    item.userTypes.includes(userType)
  );

  // Get theme configuration based on user type
  const getThemeConfig = () => {
    switch (userType) {
      case 'admin':
        return {
          primary: 'bg-blue-600 text-white hover:bg-blue-700',
          headerText: 'text-blue-600',
          title: 'Admin',
          defaultName: 'Admin',
          defaultRole: 'System Admin',
          defaultAvatar: 'A'
        };
      case 'shop-owner':
        return {
          primary: 'bg-green-600 text-white hover:bg-green-700',
          headerText: 'text-green-600',
          title: userInfo?.name && userInfo.name !== 'Welcome user' ? 'shop owner' : 'shop owner',
          defaultName: 'Welcome user',
          defaultRole: 'Partner Dashboard',
          defaultAvatar: 'SO'
        };
      default:
        return {
          primary: 'bg-gray-600 text-white hover:bg-gray-700',
          headerText: 'text-gray-600',
          title: 'User',
          defaultName: 'User',
          defaultRole: 'User',
          defaultAvatar: 'U'
        };
    }
  };

  const theme = getThemeConfig();

  // Get user display info
  const displayName = userInfo?.name || theme.defaultName;
  const displayRole = userInfo?.role || theme.defaultRole;
  const avatarFallback = userInfo?.name ? 
    userInfo.name.split(' ').map(n => n[0]).join('').toUpperCase() : 
    theme.defaultAvatar;

  return (
    <div className="fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg">
      <div className="flex h-full flex-col">
        {/* Header */}
        <div className="flex h-16 items-center border-b px-6 justify-between">
          <span className={cn("text-xl font-semibold capitalize", theme.headerText)}>
            {theme.title}
          </span>
          {showBadge && (
            <Badge variant="outline" className="text-blue-600">
              {badgeText}
            </Badge>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-2 p-4">
          {filteredNavigation.map((item) => {
            const IconComponent = item.icon;
            const isActive = pathname.startsWith(item.href);
            
            return (
              <Link key={item.name} href={item.href}>
                <Button
                  variant={isActive ? "default" : "ghost"}
                  className={cn(
                    "w-full justify-start gap-3",
                    isActive && theme.primary
                  )}
                >
                  <IconComponent className="h-5 w-5" />
                  {item.name}
                </Button>
              </Link>
            );
          })}
        </nav>

        {/* User Profile */}
        <div className="border-t p-4">
          <div className="flex items-center space-x-3">
            <Avatar>
              <AvatarImage src={userInfo?.avatar || "/api/placeholder/40/40"} />
              <AvatarFallback className="bg-gray-100 text-gray-600">
                {avatarFallback}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">
                {displayName}
              </p>
              <p className="text-xs text-gray-500 truncate">
                {displayRole}
              </p>
              {userType === 'shop-owner' && userInfo?.shopName && (
                <p className="text-xs text-gray-400 truncate">{userInfo.shopName}</p>
              )}
            </div>
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="flex-shrink-0"
            >
              <Link href="/auth/login">
                <LogOut className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UnifiedSidebar;