import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { users } from '@/lib/data';
import { LogOut, Mail, User, Shield } from 'lucide-react';
import Link from 'next/link';

export default function ProfilePage() {
  const currentUser = users['user-1'];

  return (
    <div className="space-y-6">
       <h1 className="font-headline text-3xl font-bold tracking-tight md:hidden">
        My Profile
      </h1>
      <Card className="shadow-md">
        <CardHeader className="items-center text-center">
            <Avatar className="h-24 w-24 mb-4">
              <AvatarImage src={currentUser.avatar} alt={currentUser.name} />
              <AvatarFallback className="text-3xl">{currentUser.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <CardTitle className="font-headline text-2xl">{currentUser.name}</CardTitle>
            <p className="text-muted-foreground">{currentUser.isUstaz ? "Ustaz" : "Jemaah"}</p>
        </CardHeader>
        <CardContent className="space-y-4">
            <div className="flex items-center text-sm">
                <User className="mr-3 h-5 w-5 text-muted-foreground"/>
                <span>{currentUser.name}</span>
            </div>
            <div className="flex items-center text-sm">
                <Mail className="mr-3 h-5 w-5 text-muted-foreground"/>
                <span>ustaz.abdullah@email.com</span>
            </div>
            <div className="flex items-center text-sm">
                <Shield className="mr-3 h-5 w-5 text-muted-foreground"/>
                <span>{currentUser.isUstaz ? "Admin Role" : "Member Role"}</span>
            </div>
        </CardContent>
      </Card>

      <Card className="shadow-md">
        <CardContent className="p-4">
          <Link href="/" passHref>
            <Button variant="destructive" className="w-full">
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
