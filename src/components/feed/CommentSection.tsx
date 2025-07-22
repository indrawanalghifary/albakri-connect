'use client';

import * as React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { users } from '@/lib/data';
import { Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

type Comment = {
  id: string;
  authorId: string;
  text: string;
};

type CommentSectionProps = {
  comments: Comment[];
};

export function CommentSection({ comments: initialComments }: CommentSectionProps) {
  const [comments, setComments] = React.useState(initialComments);
  const [newComment, setNewComment] = React.useState('');
  const { toast } = useToast();

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      const newCommentData = {
        id: `c-${Date.now()}`,
        authorId: 'user-1', // Mocking current user
        text: newComment,
      };
      setComments([...comments, newCommentData]);
      setNewComment('');
      toast({
        title: "Comment Posted",
      });
    }
  };

  return (
    <div className="w-full space-y-4 pt-4">
      <div className="space-y-4">
        {comments.map((comment) => {
          const author = users[comment.authorId as keyof typeof users];
          return (
            <div key={comment.id} className="flex items-start gap-3">
              <Avatar className="h-8 w-8">
                <AvatarImage src={author.avatar} alt={author.name} />
                <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-1 rounded-lg bg-muted p-3 text-sm">
                <p className="font-semibold">{author.name}</p>
                <p>{comment.text}</p>
              </div>
            </div>
          );
        })}
      </div>
      <form onSubmit={handleCommentSubmit} className="flex w-full items-center gap-2">
        <Avatar className="h-8 w-8">
            <AvatarImage src={users['user-1'].avatar} />
            <AvatarFallback>{users['user-1'].name.charAt(0)}</AvatarFallback>
        </Avatar>
        <Input
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a comment..."
          className="flex-1"
        />
        <Button type="submit" size="icon" variant="ghost">
          <Send className="h-5 w-5" />
        </Button>
      </form>
    </div>
  );
}
