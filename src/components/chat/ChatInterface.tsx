'use client';

import * as React from 'react';
import { chatConversations, users } from '@/lib/data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Send, ArrowLeft, Search, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { Card } from '../ui/card';
import { ScrollArea } from '../ui/scroll-area';

type Message = {
  from: string;
  text: string;
  timestamp: string;
};

type Conversation = {
  id: string;
  withUserId: string;
  messages: Message[];
  unread: number;
};

export function ChatInterface() {
  const [selectedConversation, setSelectedConversation] = React.useState<Conversation | null>(null);
  const isMobile = useIsMobile();
  
  React.useEffect(() => {
    if (!isMobile && !selectedConversation) {
      setSelectedConversation(chatConversations[0]);
    }
  }, [isMobile, selectedConversation]);

  const handleSelectConversation = (conversation: Conversation) => {
    setSelectedConversation(conversation);
  };

  const handleBackToList = () => {
    setSelectedConversation(null);
  };
  
  const ConversationList = ({ onSelect }: { onSelect: (convo: Conversation) => void }) => (
    <Card className={cn(
        "h-full flex-col w-full md:w-1/3 md:flex",
        isMobile && selectedConversation ? 'hidden' : 'flex'
    )}>
        <div className="p-4 border-b">
            <h1 className="font-headline text-2xl font-bold tracking-tight mb-4">
                Messages
            </h1>
            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search messages..." className="pl-9" />
            </div>
        </div>
        <ScrollArea className="flex-1">
            <div className="p-2">
            {chatConversations.map((convo) => {
              const user = users[convo.withUserId as keyof typeof users];
              const lastMessage = convo.messages[convo.messages.length - 1];
              return (
                  <div
                    key={convo.id}
                    onClick={() => onSelect(convo)}
                    className={cn(
                        'flex cursor-pointer items-center gap-3 rounded-lg p-3 hover:bg-muted',
                        selectedConversation?.id === convo.id && 'bg-muted'
                    )}
                  >
                    <Avatar>
                        <AvatarImage src={user.avatar} alt={user.name} />
                        <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 overflow-hidden">
                        <p className="font-semibold truncate">{user.name}</p>
                        <p className="text-sm text-muted-foreground truncate">{lastMessage?.text}</p>
                    </div>
                    {convo.unread > 0 && (
                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-accent text-xs text-accent-foreground">
                          {convo.unread}
                        </div>
                    )}
                  </div>
              );
            })}
            </div>
        </ScrollArea>
    </Card>
  );

  const ChatWindow = ({ conversation, onBack }: { conversation: Conversation; onBack: () => void; }) => {
    const otherUser = users[conversation.withUserId as keyof typeof users];
    return (
        <Card className="h-full flex-col w-full md:flex-1 flex">
            <div className="flex items-center gap-4 border-b p-4">
              {isMobile && (
                  <Button variant="ghost" size="icon" onClick={onBack}>
                    <ArrowLeft />
                  </Button>
              )}
              <Avatar>
                  <AvatarImage src={otherUser.avatar} alt={otherUser.name} />
                  <AvatarFallback>{otherUser.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <h2 className="font-semibold">{otherUser.name}</h2>
            </div>
            <ScrollArea className="flex-1 p-4">
                <div className="space-y-4">
                    {conversation.messages.map((msg, index) => (
                    <div
                        key={index}
                        className={cn('flex items-end gap-2', msg.from === 'user-1' ? 'justify-end' : 'justify-start')}
                    >
                        {msg.from !== 'user-1' && <Avatar className="h-6 w-6"><AvatarImage src={otherUser.avatar} /></Avatar>}
                        <div
                        className={cn(
                            'max-w-[80%] rounded-lg px-3 py-2',
                            msg.from === 'user-1'
                            ? 'bg-accent text-accent-foreground'
                            : 'bg-muted'
                        )}
                        >
                        <p className="text-sm">{msg.text}</p>
                        </div>
                    </div>
                    ))}
                </div>
            </ScrollArea>
            <div className="border-t p-4">
              <form className="flex items-center gap-2">
                  <Input placeholder="Type a message..." />
                  <Button type="submit" size="icon" className="bg-accent text-accent-foreground shrink-0">
                    <Send className="h-4 w-4" />
                  </Button>
              </form>
            </div>
        </Card>
    );
  };
  
  const EmptyChatState = () => (
     <div className="h-full hidden md:flex flex-1 flex-col items-center justify-center text-muted-foreground bg-card rounded-lg">
        <MessageSquare className="h-12 w-12 mb-4" />
        <p>Select a conversation to start chatting</p>
    </div>
  )

  return (
    <div className="flex h-full w-full gap-4">
        <ConversationList onSelect={handleSelectConversation} />
        
        {isMobile ? (
           selectedConversation && <ChatWindow conversation={selectedConversation} onBack={handleBackToList} />
        ) : (
          selectedConversation ? <ChatWindow conversation={selectedConversation} onBack={handleBackToList}/> : <EmptyChatState />
        )}
    </div>
  );
}
