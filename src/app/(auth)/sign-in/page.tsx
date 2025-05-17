// app/(auth)/sign-in/page.tsx
import SignInForm from "@/components/auth/SignInForm";
import AuthLayout from "@/components/auth/AuthLayout";

export const metadata = {
  title: "Sign in | Teke Teke",
  description: "Sign in to your Teke Teke account",
};

export default function SignInPage() {
  return (
    <AuthLayout>
      <SignInForm />
    </AuthLayout>
  );
}