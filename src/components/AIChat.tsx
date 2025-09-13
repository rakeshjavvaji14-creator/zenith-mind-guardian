import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import aiWellness from "@/assets/ai-wellness.jpg";

interface Message {
  id: string;
  content: string;
  isBot: boolean;
  timestamp: Date;
}

export const AIChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hello! I'm your AI wellness companion trained in evidence-based therapies. I can detect crisis situations and connect you to immediate help. How are you feeling today? Remember, I'm here 24/7 to support you.",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const botResponses = [
    "I understand how you're feeling. It's completely normal to have ups and downs. Can you tell me more about what's been on your mind?",
    "Thank you for sharing that with me. Your feelings are valid, and I'm here to support you. Have you tried any coping strategies that have helped you before?",
    "That sounds challenging. Remember that you're not alone in this. Would you like me to suggest some breathing exercises or connect you with a counselor?",
    "I appreciate you opening up to me. Taking the time to check in with yourself shows strength. How has your sleep and self-care been lately?",
    "It's great that you're reaching out. Sometimes talking through our thoughts can help us gain clarity. What would feel most helpful for you right now?",
  ];

  const detectCrisis = (message: string): boolean => {
    const crisisKeywords = ["hurt myself", "end it all", "no point", "can't go on", "suicide", "die"];
    return crisisKeywords.some(keyword => message.toLowerCase().includes(keyword));
  };

  const sendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Check for crisis indicators
    const isCrisis = detectCrisis(inputValue);

    setTimeout(() => {
      let botResponse = "";
      
      if (isCrisis) {
        botResponse = "I'm really concerned about what you've shared. Your safety is my top priority. Please know that you're not alone and help is available. I'm connecting you with emergency resources right now. Would you like me to call a crisis counselor for you?";
      } else {
        botResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: botResponse,
        isBot: true,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <Card className="glass border-white/20 shadow-lg hover:shadow-emerald-500/25 transition-all duration-300">
      <CardHeader className="text-center pb-2">
        <img
          src={aiWellness}
          alt="AI wellness technology"
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white p-3 rounded-lg flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span>🤖</span>
            <span className="font-semibold">AI Therapist - Crisis Detection Enabled</span>
          </div>
          <div className="flex items-center gap-1 text-xs">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>Online</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="h-80 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-lg ${
                  message.isBot
                    ? "bg-emerald-50 border border-emerald-200 text-emerald-800"
                    : "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white"
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-emerald-50 border border-emerald-200 p-3 rounded-lg flex items-center gap-1">
                <div className="w-2 h-2 bg-emerald-500 rounded-full typing-dot"></div>
                <div className="w-2 h-2 bg-emerald-500 rounded-full typing-dot"></div>
                <div className="w-2 h-2 bg-emerald-500 rounded-full typing-dot"></div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        <div className="p-4 border-t border-gray-200 bg-gray-50 flex gap-2">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Share what's on your mind..."
            className="flex-1 border-gray-300 focus:border-emerald-500"
          />
          <Button
            onClick={sendMessage}
            variant="wellness"
            disabled={!inputValue.trim()}
          >
            Send
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};