import { LoginForm } from '@/components/auth/LoginForm';
import { BookHeart } from 'lucide-react';

export default function LoginPage() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-background p-4">
      <div className="w-full max-w-sm space-y-6 md:max-w-md">
        <div className="text-center">
            <div className="flex justify-center items-center mb-6">
                <BookHeart className="h-12 w-12 text-primary" />
            </div>
            <h1 className="font-headline text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                Welcome to Ukhuwah Connect
            </h1>
            <p className="mt-4 text-muted-foreground">
                Sign in to connect with your community.
            </p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
