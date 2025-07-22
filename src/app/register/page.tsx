import { RegisterForm } from '@/components/auth/RegisterForm';
import { BookHeart } from 'lucide-react';

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-background p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
            <div className="flex justify-center items-center mb-6">
                <BookHeart className="h-12 w-12 text-primary" />
            </div>
          <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground">
            Create an Account
          </h1>
          <p className="mt-4 text-muted-foreground">
            Join the Ukhuwah Connect community today.
          </p>
        </div>
        <RegisterForm />
      </div>
    </div>
  );
}
