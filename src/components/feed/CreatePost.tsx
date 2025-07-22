'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { users } from '@/lib/data';
import { Image as ImageIcon, Video, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function CreatePost() {
  const { toast } = useToast();
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const content = formData.get('content');
    if (content && content.toString().trim().length > 0) {
      console.log('New Post:', content);
      toast({
        title: "Post Created",
        description: "Your ceramah has been shared.",
      });
      // Here you would typically call an API to create the post
      (event.target as HTMLFormElement).reset();
    }
  };

  return (
    <Card className="overflow-hidden shadow-md">
      <CardContent className="p-4">
        <form onSubmit={handleSubmit}>
          <div className="flex gap-4">
            <Avatar>
              <AvatarImage src={users['user-1'].avatar} alt={users['user-1'].name} />
              <AvatarFallback>{users['user-1'].name.charAt(0)}</AvatarFallback>
            </Avatar>
            <Textarea
              name="content"
              placeholder="Share your thoughts, Ustaz..."
              className="flex-1 resize-none border-0 bg-transparent p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
              rows={3}
            />
          </div>
          <div className="mt-4 flex items-center justify-between">
            <div className="flex gap-2 text-muted-foreground">
              <Button variant="ghost" size="icon" type="button">
                <ImageIcon className="h-5 w-5" />
                <span className="sr-only">Add Image</span>
              </Button>
              <Button variant="ghost" size="icon" type="button">
                <Video className="h-5 w-5" />
                <span className="sr-only">Add Video</span>
              </Button>
            </div>
            <Button type="submit" size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Send className="mr-2 h-4 w-4" />
              Post
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
