'use client';

import * as React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Heart, MessageCircle, Share2, Sparkles, Loader2 } from 'lucide-react';
import { users } from '@/lib/data';
import { getCeramahSummary } from '@/app/actions';
import { CommentSection } from './CommentSection';

type Comment = {
  id: string;
  authorId: string;
  text: string;
};

type CeramahPostProps = {
  post: {
    id: string;
    authorId: string;
    timestamp: string;
    content: string;
    imageUrl?: string;
    dataAiHint?: string;
    likes: number;
    comments: Comment[];
  };
};

export function CeramahPost({ post }: CeramahPostProps) {
  const author = users[post.authorId as keyof typeof users];
  const [isLiked, setIsLiked] = React.useState(false);
  const [likes, setLikes] = React.useState(post.likes);
  const [summary, setSummary] = React.useState<string | null>(null);
  const [isSummarizing, setIsSummarizing] = React.useState(false);
  const [showComments, setShowComments] = React.useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
  };

  const handleSummarize = async () => {
    if (summary) {
        setSummary(null);
        return;
    }
    setIsSummarizing(true);
    const result = await getCeramahSummary(post.content);
    setSummary(result);
    setIsSummarizing(false);
  };

  return (
    <Card className="overflow-hidden shadow-md">
      <CardHeader className="flex flex-row items-center gap-4 p-4">
        <Avatar>
          <AvatarImage src={author.avatar} alt={author.name} />
          <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <p className="font-semibold">{author.name}</p>
          <p className="text-xs text-muted-foreground">{post.timestamp}</p>
        </div>
      </CardHeader>
      <CardContent className="space-y-4 p-4 pt-0">
        <p className="whitespace-pre-wrap">{post.content}</p>
        {post.imageUrl && (
          <div className="relative aspect-video w-full overflow-hidden rounded-lg">
            <Image
              src={post.imageUrl}
              alt="Ceramah content"
              fill
              className="object-cover"
              data-ai-hint={post.dataAiHint}
            />
          </div>
        )}
        {summary && (
            <div className="rounded-lg border border-primary/20 bg-primary/10 p-3 text-sm">
                <p className="font-bold text-primary-foreground mb-1">AI Summary</p>
                <p className="text-primary-foreground/80">{summary}</p>
            </div>
        )}
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-2 p-4 pt-0">
        <div className="flex w-full items-center justify-between text-sm text-muted-foreground">
            <div>{likes} Likes</div>
            <div>{post.comments.length} Comments</div>
        </div>
        <div className="grid w-full grid-cols-4 gap-1 border-t pt-2">
          <Button variant="ghost" onClick={handleLike} className="flex items-center gap-2">
            <Heart className={`h-5 w-5 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
            <span>Like</span>
          </Button>
          <Button variant="ghost" onClick={() => setShowComments(!showComments)} className="flex items-center gap-2">
            <MessageCircle className="h-5 w-5" />
            <span>Comment</span>
          </Button>
          <Button variant="ghost" className="flex items-center gap-2">
            <Share2 className="h-5 w-5" />
            <span>Share</span>
          </Button>
          <Button variant="ghost" onClick={handleSummarize} disabled={isSummarizing} className="flex items-center gap-2">
             {isSummarizing ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              <Sparkles className="h-5 w-5" />
            )}
            <span>{summary ? 'Hide' : 'Summary'}</span>
          </Button>
        </div>
        {showComments && <CommentSection comments={post.comments} />}
      </CardFooter>
    </Card>
  );
}
