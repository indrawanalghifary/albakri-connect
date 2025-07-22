import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BellRing, Calendar, MapPin, User } from 'lucide-react';
import { pengajianSchedules } from '@/lib/data';

export default function SchedulePage() {
  return (
    <div className="space-y-6">
      <h1 className="font-headline text-2xl md:text-3xl font-bold tracking-tight md:hidden">
        Pengajian Schedule
      </h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {pengajianSchedules.map((item) => (
          <Card key={item.id} className="flex flex-col justify-between shadow-md">
            <CardHeader>
              <CardTitle className="font-headline text-xl">{item.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center text-sm text-muted-foreground">
                <User className="mr-2 h-4 w-4" />
                <span>{item.ustaz}</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="mr-2 h-4 w-4" />
                <span>{item.date}</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="mr-2 h-4 w-4" />
                <span>{item.location}</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                <BellRing className="mr-2 h-4 w-4" />
                Set Reminder
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
