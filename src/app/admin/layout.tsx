// app/admin/layout.tsx
import UnifiedSidebar from '@/components/common/UnifiedSidebar';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // In a real app, you'd get this from your auth context or API
  const userInfo = {
    name: 'Admin',
    role: 'System Admin',
    avatar: '/api/placeholder/40/40'
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <UnifiedSidebar 
        userType="admin" 
        userInfo={userInfo}
        showBadge={true}
        badgeText="Sokoo"
      />
      <main className="flex-1 overflow-y-auto ml-64">
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}