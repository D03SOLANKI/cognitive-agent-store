
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { supabase } from '@/integrations/supabase/client';
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
import { useToast } from '@/hooks/use-toast';
import PasswordStrengthMeter from '@/components/auth/PasswordStrengthMeter';

const resetPasswordSchema = z.object({
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters' })
    .regex(/[A-Z]/, { message: 'Password must contain at least one uppercase letter' })
    .regex(/[a-z]/, { message: 'Password must contain at least one lowercase letter' })
    .regex(/[0-9]/, { message: 'Password must contain at least one number' }),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword'],
});

type ResetPasswordFormValues = z.infer<typeof resetPasswordSchema>;

const ResetPassword = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [isValidHash, setIsValidHash] = useState(false);

  const form = useForm<ResetPasswordFormValues>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });

  const password = form.watch('password');

  // Check if the URL contains a valid hash for password reset
  useEffect(() => {
    const checkHash = async () => {
      const hash = window.location.hash.substring(1);
      if (!hash) {
        toast({
          variant: 'destructive',
          title: 'Invalid reset link',
          description: 'Please request a new password reset link.',
        });
        setTimeout(() => navigate('/signin'), 2000);
        return;
      }

      // The hash should contain type=recovery in the URL
      const params = new URLSearchParams(hash);
      const type = params.get('type');
      
      if (type !== 'recovery') {
        toast({
          variant: 'destructive',
          title: 'Invalid reset link',
          description: 'Please request a new password reset link.',
        });
        setTimeout(() => navigate('/signin'), 2000);
        return;
      }

      setIsValidHash(true);
    };

    checkHash();
  }, [navigate, toast]);

  const onSubmit = async (values: ResetPasswordFormValues) => {
    if (!isValidHash) {
      toast({
        variant: 'destructive',
        title: 'Invalid reset link',
        description: 'Please request a new password reset link.',
      });
      navigate('/signin');
      return;
    }

    try {
      setIsLoading(true);
      
      const { error } = await supabase.auth.updateUser({
        password: values.password,
      });

      if (error) throw error;

      toast({
        title: 'Password reset successful',
        description: 'Your password has been reset. You can now sign in with your new password.',
      });

      navigate('/signin');
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'Password reset failed',
        description: error.message,
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (!isValidHash) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Invalid Reset Link</h2>
          <p className="mt-2 text-sm text-gray-600">Redirecting to sign in page...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Reset your password
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Enter a new password for your account
          </p>
        </div>

        <div className="mt-8 space-y-6 bg-white p-8 shadow sm:rounded-lg">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>New Password</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Create a new password" 
                        type="password" 
                        autoComplete="new-password"
                        {...field} 
                      />
                    </FormControl>
                    <PasswordStrengthMeter password={password} />
                    <FormDescription>
                      Password must have at least 8 characters, including uppercase, lowercase, and a number.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Confirm your new password" 
                        type="password" 
                        autoComplete="new-password"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
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
                    Resetting password...
                  </>
                ) : (
                  'Reset Password'
                )}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
