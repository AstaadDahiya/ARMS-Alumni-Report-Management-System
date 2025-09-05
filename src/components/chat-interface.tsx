"use client";

import { useState, useRef, useEffect, type FormEvent } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getCareerGuidance } from "@/app/actions/ai";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { Bot, SendHorizontal, User, Sparkles } from "lucide-react";

interface Message {
  id: number;
  role: 'user' | 'assistant';
  content: string;
}

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: 'assistant',
      content: "Hello! I'm your AI career guidance assistant. How can I help you today? Feel free to ask about career paths, skills, or industries based on our alumni data.",
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now(),
      role: 'user',
      content: input,
    };
    setMessages(prev => [...prev, userMessage]);
setInput('');
    setIsLoading(true);

    const result = await getCareerGuidance(input);
    
    setIsLoading(false);

    if (result.error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: result.error,
      });
      // Optionally remove the user message or add an error message to the chat
    } else if (result.response) {
      const assistantMessage: Message = {
        id: Date.now() + 1,
        role: 'assistant',
        content: result.response,
      };
      setMessages(prev => [...prev, assistantMessage]);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <ScrollArea className="flex-grow pr-4" ref={scrollAreaRef}>
        <div className="space-y-6">
          {messages.map((message) => (
            <div key={message.id} className={cn("flex items-start gap-4", message.role === 'user' && 'justify-end')}>
              {message.role === 'assistant' && (
                 <Avatar className="h-9 w-9 border-2 border-amber-300 bg-amber-100 text-amber-500">
                  <AvatarFallback><Sparkles className="h-5 w-5"/></AvatarFallback>
                </Avatar>
              )}
              <div className={cn("max-w-[80%] rounded-xl p-4 text-sm", 
                message.role === 'user' 
                ? "bg-primary text-primary-foreground" 
                : "bg-muted")}>
                <p className="whitespace-pre-wrap leading-relaxed">{message.content}</p>
              </div>
              {message.role === 'user' && (
                <Avatar className="h-9 w-9">
                   <AvatarImage src="https://picsum.photos/id/433/40/40" alt="Admin" data-ai-hint="user avatar"/>
                  <AvatarFallback><User /></AvatarFallback>
                </Avatar>
              )}
            </div>
          ))}
          {isLoading && (
            <div className="flex items-start gap-4">
              <Avatar className="h-9 w-9 border-2 border-amber-300 bg-amber-100 text-amber-500">
                <AvatarFallback><Sparkles className="h-5 w-5"/></AvatarFallback>
              </Avatar>
              <div className="max-w-[75%] rounded-xl p-3 text-sm bg-muted">
                <div className="flex items-center justify-center gap-2 p-2">
                  <span className="h-2 w-2 bg-foreground/50 rounded-full animate-pulse delay-0"></span>
                  <span className="h-2 w-2 bg-foreground/50 rounded-full animate-pulse delay-200"></span>
                  <span className="h-2 w-2 bg-foreground/50 rounded-full animate-pulse delay-400"></span>
                </div>
              </div>
            </div>
          )}
        </div>
      </ScrollArea>
      <div className="mt-auto pt-4">
        <form onSubmit={handleSubmit} className="w-full flex items-center gap-3 relative">
           <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about careers, skills, or industries..."
            className="flex-1 resize-none pr-12 text-base rounded-full"
            rows={1}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSubmit(e as any);
              }
            }}
          />
          <Button type="submit" size="icon" className="absolute right-1.5 rounded-full" disabled={isLoading || !input.trim()}>
            <SendHorizontal className="h-5 w-5" />
            <span className="sr-only">Send message</span>
          </Button>
        </form>
      </div>
    </div>
  );
}
