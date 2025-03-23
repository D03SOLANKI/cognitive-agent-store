
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from '@/hooks/use-toast';
import SocialLoginButtons from '@/components/auth/SocialLoginButtons';
import PasswordStrengthMeter from '@/components/auth/PasswordStrengthMeter';

const buyerSignUpSchema = z.object({
  fullName: z.string().min(2, { message: 'Full name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  phoneNumber: z.string().optional(),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters' })
    .regex(/[A-Z]/, { message: 'Password must contain at least one uppercase letter' })
    .regex(/[a-z]/, { message: 'Password must contain at least one lowercase letter' })
    .regex(/[0-9]/, { message: 'Password must contain at least one number' }),
  confirmPassword: z.string(),
  paymentPreference: z.string().optional(),
  agreeTerms: z.literal(true, {
    errorMap: () => ({ message: 'You must agree to the terms and conditions' }),
  }),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword'],
});

const sellerSignUpSchema = z.object({
  fullName: z.string().min(2, { message: 'Name/Brand name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  phoneNumber: z.string().optional(),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters' })
    .regex(/[A-Z]/, { message: 'Password must contain at least one uppercase letter' })
    .regex(/[a-z]/, { message: 'Password must contain at least one lowercase letter' })
    .regex(/[0-9]/, { message: 'Password must contain at least one number' }),
  confirmPassword: z.string(),
  accountType: z.enum(['individual', 'company'], { 
    required_error: 'Please select an account type', 
  }),
  businessVerification: z.string().optional(),
  bankDetails: z.string().optional(),
  agreeTerms: z.literal(true, {
    errorMap: () => ({ message: 'You must agree to the seller terms and conditions' }),
  }),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword'],
});

type BuyerSignUpFormValues = z.infer<typeof buyerSignUpSchema>;
type SellerSignUpFormValues = z.infer<typeof sellerSignUpSchema>;

const SignUp = () => {
  const { signUp } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<'buyer' | 'seller'>('buyer');

  const buyerForm = useForm<BuyerSignUpFormValues>({
    resolver: zodResolver(buyerSignUpSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phoneNumber: '',
      password: '',
      confirmPassword: '',
      paymentPreference: '',
      agreeTerms: false as unknown as true,
    },
  });

  const sellerForm = useForm<SellerSignUpFormValues>({
    resolver: zodResolver(sellerSignUpSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phoneNumber: '',
      password: '',
      confirmPassword: '',
      accountType: 'individual',
      businessVerification: '',
      bankDetails: '',
      agreeTerms: false as unknown as true,
    },
  });

  const buyerPassword = buyerForm.watch('password');
  const sellerPassword = sellerForm.watch('password');

  const handleBuyerSubmit = async (values: BuyerSignUpFormValues) => {
    try {
      setIsLoading(true);
      // Save additional data in user metadata
      const metadata = {
        full_name: values.fullName,
        phone_number: values.phoneNumber,
        payment_preference: values.paymentPreference,
        user_type: 'buyer',
      };
      
      await signUp(values.email, values.password, values.fullName, 'buyer');
      
      toast({
        title: 'Account created',
        description: 'Please check your email to verify your account.',
      });
      
      navigate('/signin');
    } catch (error) {
      // Error handling done in the AuthContext
    } finally {
      setIsLoading(false);
    }
  };

  const handleSellerSubmit = async (values: SellerSignUpFormValues) => {
    try {
      setIsLoading(true);
      // Save additional data in user metadata
      const metadata = {
        full_name: values.fullName,
        phone_number: values.phoneNumber,
        account_type: values.accountType,
        business_verification: values.businessVerification,
        bank_details: values.bankDetails,
        user_type: 'developer',
      };
      
      await signUp(values.email, values.password, values.fullName, 'developer');
      
      toast({
        title: 'Seller account created',
        description: 'Please check your email to verify your account.',
      });
      
      navigate('/signin');
    } catch (error) {
      // Error handling done in the AuthContext
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Already have an account?{' '}
            <Link
              to="/signin"
              className="font-medium text-primary hover:text-primary/90"
            >
              Sign in
            </Link>
          </p>
        </div>

        <div className="mt-8 bg-white p-8 shadow sm:rounded-lg">
          <Tabs 
            value={activeTab} 
            onValueChange={(value) => setActiveTab(value as 'buyer' | 'seller')}
            className="space-y-6"
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="buyer">Sign Up as Buyer</TabsTrigger>
              <TabsTrigger value="seller">Sign Up as Seller</TabsTrigger>
            </TabsList>

            <TabsContent value="buyer" className="space-y-6">
              <SocialLoginButtons />
              
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    Or register with email
                  </span>
                </div>
              </div>
              
              <Form {...buyerForm}>
                <form onSubmit={buyerForm.handleSubmit(handleBuyerSubmit)} className="space-y-6">
                  <FormField
                    control={buyerForm.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your full name" 
                            autoComplete="name"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={buyerForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your email" 
                            type="email" 
                            autoComplete="email"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={buyerForm.control}
                    name="phoneNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number (Optional)</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your phone number" 
                            type="tel" 
                            autoComplete="tel"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={buyerForm.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Create a password" 
                            type="password" 
                            autoComplete="new-password"
                            {...field} 
                          />
                        </FormControl>
                        <PasswordStrengthMeter password={buyerPassword} />
                        <FormDescription>
                          Password must have at least 8 characters, including uppercase, lowercase, and a number.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={buyerForm.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Confirm Password</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Confirm your password" 
                            type="password" 
                            autoComplete="new-password"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={buyerForm.control}
                    name="paymentPreference"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Payment Preferences (Optional)</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select payment method" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="credit_card">Credit Card</SelectItem>
                            <SelectItem value="paypal">PayPal</SelectItem>
                            <SelectItem value="crypto">Cryptocurrency</SelectItem>
                            <SelectItem value="bank_transfer">Bank Transfer</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={buyerForm.control}
                    name="agreeTerms"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="text-sm font-normal">
                            I agree to the{' '}
                            <Link
                              to="/terms"
                              className="text-primary hover:text-primary/90"
                              target="_blank"
                            >
                              Terms of Service
                            </Link>{' '}
                            and{' '}
                            <Link
                              to="/privacy"
                              className="text-primary hover:text-primary/90"
                              target="_blank"
                            >
                              Privacy Policy
                            </Link>
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent"></span>
                        Creating account...
                      </>
                    ) : (
                      'Sign up as Buyer'
                    )}
                  </Button>
                </form>
              </Form>
            </TabsContent>
            
            <TabsContent value="seller" className="space-y-6">
              <SocialLoginButtons />
              
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    Or register with email
                  </span>
                </div>
              </div>
              
              <Form {...sellerForm}>
                <form onSubmit={sellerForm.handleSubmit(handleSellerSubmit)} className="space-y-6">
                  <FormField
                    control={sellerForm.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name / Brand Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your name or brand name" 
                            autoComplete="name"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={sellerForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your email" 
                            type="email" 
                            autoComplete="email"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={sellerForm.control}
                    name="phoneNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your phone number" 
                            type="tel" 
                            autoComplete="tel"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={sellerForm.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Create a password" 
                            type="password" 
                            autoComplete="new-password"
                            {...field} 
                          />
                        </FormControl>
                        <PasswordStrengthMeter password={sellerPassword} />
                        <FormDescription>
                          Password must have at least 8 characters, including uppercase, lowercase, and a number.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={sellerForm.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Confirm Password</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Confirm your password" 
                            type="password" 
                            autoComplete="new-password"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={sellerForm.control}
                    name="accountType"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel>Account Type</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-1"
                          >
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="individual" />
                              </FormControl>
                              <FormLabel className="font-normal cursor-pointer">
                                Individual Developer
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="company" />
                              </FormControl>
                              <FormLabel className="font-normal cursor-pointer">
                                Company / Organization
                              </FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {sellerForm.watch('accountType') === 'company' && (
                    <FormField
                      control={sellerForm.control}
                      name="businessVerification"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Business Verification</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Business ID or Registration Number" 
                              {...field} 
                            />
                          </FormControl>
                          <FormDescription>
                            Enter your business registration ID or tax number for verification purposes.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}

                  <FormField
                    control={sellerForm.control}
                    name="bankDetails"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Bank Account / Payment Details</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Bank account number or payment details" 
                            {...field} 
                          />
                        </FormControl>
                        <FormDescription>
                          Enter your bank account or payment details to receive payments for your AI agents.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={sellerForm.control}
                    name="agreeTerms"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="text-sm font-normal">
                            I agree to the{' '}
                            <Link
                              to="/terms"
                              className="text-primary hover:text-primary/90"
                              target="_blank"
                            >
                              Seller Terms of Service
                            </Link>{' '}
                            and{' '}
                            <Link
                              to="/privacy"
                              className="text-primary hover:text-primary/90"
                              target="_blank"
                            >
                              Privacy Policy
                            </Link>
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent"></span>
                        Creating seller account...
                      </>
                    ) : (
                      'Sign up as Seller'
                    )}
                  </Button>
                </form>
              </Form>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
