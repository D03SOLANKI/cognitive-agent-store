
import { useEffect, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  User, 
  Settings, 
  CreditCard, 
  ShieldCheck, 
  Bell, 
  Package, 
  LogOut,
  Save
} from 'lucide-react';

const Profile = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || 'account';
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [profileData, setProfileData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phoneNumber: '+1 (555) 123-4567',
    country: 'United States',
    address: '123 AI Street',
    city: 'San Francisco',
    state: 'CA',
    zipCode: '94105'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Profile information updated successfully!");
  };

  const handleSignOut = () => {
    toast.success("You have been signed out successfully!");
    // In a real app, you would clear authentication state here
    setTimeout(() => {
      navigate('/');
    }, 1500);
  };

  // Navigate to a different tab
  const navigateToTab = (tab: string) => {
    navigate(`/profile?tab=${tab}`);
  };

  const orders = [
    {
      id: "ORD-12345",
      date: "June 15, 2023",
      status: "Completed",
      total: 79.98,
      items: 2
    },
    {
      id: "ORD-12346",
      date: "May 28, 2023",
      status: "Completed",
      total: 59.99,
      items: 1
    },
    {
      id: "ORD-12347",
      date: "May 10, 2023",
      status: "Completed",
      total: 24.99,
      items: 1
    }
  ];

  const paymentMethods = [
    {
      id: 1,
      type: "Visa",
      number: "•••• •••• •••• 4567",
      expires: "12/25",
      default: true
    },
    {
      id: 2,
      type: "Mastercard",
      number: "•••• •••• •••• 8901",
      expires: "09/24",
      default: false
    }
  ];

  // View order details
  const viewOrderDetails = (orderId: string) => {
    toast.info(`Viewing details for order ${orderId}`);
    // In a real app, you would navigate to the order details page or show a modal
  };

  // Handle payment method actions
  const editPaymentMethod = (id: number) => {
    toast.info(`Editing payment method #${id}`);
    // In a real app, you would show a modal to edit the payment method
  };

  const removePaymentMethod = (id: number) => {
    toast.success(`Payment method #${id} has been removed`);
    // In a real app, you would remove the payment method from the state/database
  };

  const addPaymentMethod = () => {
    toast.info("Adding a new payment method");
    // In a real app, you would show a modal to add a new payment method
  };

  // Handle security actions
  const changePassword = () => {
    toast.info("Changing password");
    // In a real app, you would show a modal to change the password
  };

  const enableTwoFactorAuth = () => {
    toast.info("Enabling two-factor authentication");
    // In a real app, you would show a modal to enable 2FA
  };

  const signOutAllDevices = () => {
    toast.success("Signed out from all devices");
    // In a real app, you would sign out from all devices
  };

  // Handle notification preferences
  const saveNotificationPreferences = () => {
    toast.success("Notification preferences saved");
    // In a real app, you would save the notification preferences
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <Link to="/" className="text-blue-600 hover:text-blue-800 flex items-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
            <h1 className="text-3xl font-bold mb-3">Your Profile</h1>
            <p className="text-slate-600">
              Manage your account information, orders, and preferences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16">
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 sticky top-24">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <User className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="font-bold text-lg">{profileData.firstName} {profileData.lastName}</h2>
                    <p className="text-sm text-slate-600">{profileData.email}</p>
                  </div>
                </div>
                
                <div className="space-y-1">
                  <TabsList className="grid grid-cols-1 h-auto">
                    <TabsTrigger 
                      value="account" 
                      className="justify-start py-3"
                      onClick={() => navigateToTab('account')}
                      data-state={activeTab === 'account' ? 'active' : ''}
                    >
                      <User className="h-4 w-4 mr-2" />
                      Account
                    </TabsTrigger>
                    <TabsTrigger 
                      value="orders" 
                      className="justify-start py-3"
                      onClick={() => navigateToTab('orders')}
                      data-state={activeTab === 'orders' ? 'active' : ''}
                    >
                      <Package className="h-4 w-4 mr-2" />
                      Orders
                    </TabsTrigger>
                    <TabsTrigger 
                      value="payment" 
                      className="justify-start py-3"
                      onClick={() => navigateToTab('payment')}
                      data-state={activeTab === 'payment' ? 'active' : ''}
                    >
                      <CreditCard className="h-4 w-4 mr-2" />
                      Payment Methods
                    </TabsTrigger>
                    <TabsTrigger 
                      value="security" 
                      className="justify-start py-3"
                      onClick={() => navigateToTab('security')}
                      data-state={activeTab === 'security' ? 'active' : ''}
                    >
                      <ShieldCheck className="h-4 w-4 mr-2" />
                      Security
                    </TabsTrigger>
                    <TabsTrigger 
                      value="notifications" 
                      className="justify-start py-3"
                      onClick={() => navigateToTab('notifications')}
                      data-state={activeTab === 'notifications' ? 'active' : ''}
                    >
                      <Bell className="h-4 w-4 mr-2" />
                      Notifications
                    </TabsTrigger>
                  </TabsList>
                </div>
                
                <div className="mt-6 pt-6 border-t border-slate-200">
                  <Button 
                    variant="outline" 
                    className="w-full gap-2 text-slate-600"
                    onClick={handleSignOut}
                  >
                    <LogOut className="h-4 w-4" />
                    Sign Out
                  </Button>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Tabs value={activeTab} className="w-full">
                <TabsContent value="account" className="space-y-6">
                  <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                    <div className="p-6 border-b border-slate-200">
                      <h2 className="text-xl font-bold flex items-center">
                        <Settings className="mr-2 h-5 w-5" />
                        Account Information
                      </h2>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="p-6 space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input 
                            id="firstName" 
                            name="firstName" 
                            value={profileData.firstName} 
                            onChange={handleInputChange} 
                            required 
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input 
                            id="lastName" 
                            name="lastName" 
                            value={profileData.lastName} 
                            onChange={handleInputChange} 
                            required 
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input 
                            id="email" 
                            name="email" 
                            type="email" 
                            value={profileData.email} 
                            onChange={handleInputChange} 
                            required 
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="phoneNumber">Phone Number</Label>
                          <Input 
                            id="phoneNumber" 
                            name="phoneNumber" 
                            value={profileData.phoneNumber} 
                            onChange={handleInputChange} 
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="country">Country</Label>
                        <Input 
                          id="country" 
                          name="country" 
                          value={profileData.country} 
                          onChange={handleInputChange} 
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="address">Address</Label>
                        <Input 
                          id="address" 
                          name="address" 
                          value={profileData.address} 
                          onChange={handleInputChange} 
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="city">City</Label>
                          <Input 
                            id="city" 
                            name="city" 
                            value={profileData.city} 
                            onChange={handleInputChange} 
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="state">State/Province</Label>
                          <Input 
                            id="state" 
                            name="state" 
                            value={profileData.state} 
                            onChange={handleInputChange} 
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="zipCode">ZIP/Postal Code</Label>
                          <Input 
                            id="zipCode" 
                            name="zipCode" 
                            value={profileData.zipCode} 
                            onChange={handleInputChange} 
                          />
                        </div>
                      </div>
                      
                      <div className="flex justify-end">
                        <Button type="submit" className="gap-2">
                          <Save className="h-4 w-4" />
                          Save Changes
                        </Button>
                      </div>
                    </form>
                  </div>
                </TabsContent>
                
                <TabsContent value="orders">
                  <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                    <div className="p-6 border-b border-slate-200">
                      <h2 className="text-xl font-bold flex items-center">
                        <Package className="mr-2 h-5 w-5" />
                        Order History
                      </h2>
                    </div>
                    
                    <div className="divide-y divide-slate-200">
                      {orders.length > 0 ? (
                        orders.map((order) => (
                          <div key={order.id} className="p-6">
                            <div className="flex flex-wrap justify-between items-start gap-4 mb-3">
                              <div>
                                <h3 className="font-semibold">{order.id}</h3>
                                <p className="text-sm text-slate-500">{order.date}</p>
                              </div>
                              <div className="bg-green-100 px-3 py-1 rounded-full text-green-800 text-sm font-medium">
                                {order.status}
                              </div>
                            </div>
                            <div className="flex flex-wrap justify-between items-center">
                              <div className="text-sm text-slate-600">
                                {order.items} {order.items === 1 ? 'item' : 'items'} • ${order.total.toFixed(2)}
                              </div>
                              <Button 
                                variant="outline" 
                                size="sm"
                                onClick={() => viewOrderDetails(order.id)}
                              >
                                View Details
                              </Button>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="p-8 text-center">
                          <p className="text-slate-600 mb-4">You don't have any orders yet.</p>
                          <Button asChild>
                            <Link to="/">Browse AI Agents</Link>
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="payment">
                  <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                    <div className="p-6 border-b border-slate-200">
                      <h2 className="text-xl font-bold flex items-center">
                        <CreditCard className="mr-2 h-5 w-5" />
                        Payment Methods
                      </h2>
                    </div>
                    
                    <div className="p-6">
                      <div className="space-y-4 mb-6">
                        {paymentMethods.map((method) => (
                          <div 
                            key={method.id} 
                            className={`border rounded-lg p-4 flex justify-between items-center ${
                              method.default ? 'border-blue-200 bg-blue-50' : 'border-slate-200'
                            }`}
                          >
                            <div className="flex items-center">
                              <div className="mr-4 text-2xl">
                                {method.type === 'Visa' ? '💳' : '💳'}
                              </div>
                              <div>
                                <h3 className="font-semibold">{method.type}</h3>
                                <p className="text-sm text-slate-600">
                                  {method.number} • Expires {method.expires}
                                </p>
                                {method.default && (
                                  <span className="text-xs text-blue-600 font-medium">Default</span>
                                )}
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <Button 
                                variant="outline" 
                                size="sm"
                                onClick={() => editPaymentMethod(method.id)}
                              >
                                Edit
                              </Button>
                              {!method.default && (
                                <Button 
                                  variant="outline" 
                                  size="sm"
                                  onClick={() => removePaymentMethod(method.id)}
                                >
                                  Remove
                                </Button>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <Button onClick={addPaymentMethod}>Add Payment Method</Button>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="security">
                  <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                    <div className="p-6 border-b border-slate-200">
                      <h2 className="text-xl font-bold flex items-center">
                        <ShieldCheck className="mr-2 h-5 w-5" />
                        Security Settings
                      </h2>
                    </div>
                    
                    <div className="p-6 space-y-6">
                      <div>
                        <h3 className="font-semibold mb-4">Password</h3>
                        <Button onClick={changePassword}>Change Password</Button>
                      </div>
                      
                      <div className="pt-6 border-t border-slate-200">
                        <h3 className="font-semibold mb-4">Two-Factor Authentication</h3>
                        <p className="text-slate-600 mb-4">
                          Add an extra layer of security to your account by enabling two-factor authentication.
                        </p>
                        <Button 
                          variant="outline"
                          onClick={enableTwoFactorAuth}
                        >
                          Enable Two-Factor Authentication
                        </Button>
                      </div>
                      
                      <div className="pt-6 border-t border-slate-200">
                        <h3 className="font-semibold mb-4">Login Sessions</h3>
                        <p className="text-slate-600 mb-4">
                          You're currently logged in on 1 device.
                        </p>
                        <Button 
                          variant="outline" 
                          className="text-red-600 border-red-200 hover:bg-red-50 hover:text-red-700"
                          onClick={signOutAllDevices}
                        >
                          Sign Out of All Devices
                        </Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="notifications">
                  <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                    <div className="p-6 border-b border-slate-200">
                      <h2 className="text-xl font-bold flex items-center">
                        <Bell className="mr-2 h-5 w-5" />
                        Notification Settings
                      </h2>
                    </div>
                    
                    <div className="p-6">
                      <div className="space-y-6">
                        <div>
                          <h3 className="font-semibold mb-4">Email Notifications</h3>
                          <ul className="space-y-4">
                            {[
                              { id: 'orders', label: 'Order updates and receipts' },
                              { id: 'promos', label: 'Promotions and discounts' },
                              { id: 'news', label: 'New AI agents and feature updates' },
                              { id: 'blog', label: 'Blog posts and articles' }
                            ].map((item) => (
                              <li key={item.id} className="flex items-center justify-between">
                                <span>{item.label}</span>
                                <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer">
                                  <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-5"></span>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="pt-6 border-t border-slate-200">
                          <h3 className="font-semibold mb-4">Push Notifications</h3>
                          <p className="text-slate-600 mb-4">
                            Receive push notifications on your devices when important updates occur.
                          </p>
                          <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer">
                            <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-1"></span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-6 pt-6 border-t border-slate-200 flex justify-end">
                        <Button onClick={saveNotificationPreferences}>Save Preferences</Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </motion.div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Profile;
