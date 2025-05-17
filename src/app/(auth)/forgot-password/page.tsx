// app/(auth)/forgot-password/page.tsx
import ForgotPasswordForm from "@/components/auth/ForgotPasswordForm";
import AuthLayout from "@/components/auth/AuthLayout";

export const metadata = {
  title: "Forgot Password | Teke Teke",
  description: "Reset your Teke Teke account password",
};

export default function ForgotPasswordPage() {
  return (
    <AuthLayout>
      <ForgotPasswordForm />
    </AuthLayout>
  );
}