import { ChatInterface } from '@/components/chat/ChatInterface';

export default function ChatPage() {
  return (
    <div className="h-[calc(100vh-10rem)] md:h-[calc(100vh-8rem)]">
      <h1 className="font-headline text-2xl md:text-3xl font-bold tracking-tight md:hidden mb-4">
        Messages
      </h1>
      <ChatInterface />
    </div>
  );
}
