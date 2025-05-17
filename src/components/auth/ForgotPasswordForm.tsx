// components/auth/ForgotPasswordForm.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const forgotPasswordSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
});

type ForgotPasswordValues = z.infer<typeof forgotPasswordSchema>;

export default function ForgotPasswordForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const form = useForm<ForgotPasswordValues>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(data: ForgotPasswordValues) {
    // In a real application, you would send this data to your password reset API
    console.log(data);
    setIsSubmitted(true);
  }

  if (isSubmitted) {
    return (
      <div className="space-y-6">
        <Link 
          href="/sign-in" 
          className="flex items-center text-gray-600 hover:text-gray-900 mb-4"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          <span className="text-sm">Back to sign in</span>
        </Link>
        
        <div className="text-center">
          <h1 className="text-2xl font-semibold tracking-tight">Check your email</h1>
          <p className="text-sm text-gray-500 mt-2">
            We've sent a password reset link to your email address. Please check your inbox.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Link 
        href="/sign-in" 
        className="flex items-center text-gray-600 hover:text-gray-900 mb-4"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        <span className="text-sm">Back to sign in</span>
      </Link>
      
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Forgot Password?</h1>
        <p className="text-sm text-gray-500 mt-2">
          Enter your email address and we'll send you a link to reset your password.
        </p>
      </div>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email address</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="hello@example.com" 
                    type="email" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button type="submit" className="w-full bg-indigo-900 hover:bg-indigo-800">
            Reset Password
          </Button>
        </form>
      </Form>
    </div>
  );
}