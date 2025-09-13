import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { X, Bell, Heart, Calendar } from "lucide-react";

const notifications = [
  {
    id: 1,
    type: "wellness",
    icon: Heart,
    title: "Daily Check-in Reminder",
    message: "How are you feeling today? Take a moment to track your mood.",
    action: "Check In",
  },
  {
    id: 2,
    type: "calendar",
    icon: Calendar,
    title: "Upcoming Appointment",
    message: "You have a counseling session tomorrow at 2:00 PM.",
    action: "View Details",
  },
  {
    id: 3,
    type: "general",
    icon: Bell,
    title: "Wellness Tip",
    message: "Take 5 deep breaths to reduce stress and anxiety.",
    action: "Try Now",
  },
];

export const NotificationBanner = () => {
  const [currentNotification, setCurrentNotification] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNotification((prev) => (prev + 1) % notifications.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  const notification = notifications[currentNotification];
  const Icon = notification.icon;

  return (
    <Card className="fixed top-20 left-4 right-4 z-40 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 backdrop-blur-sm border-emerald-500/20 animate-fade-in">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-3">
          <div className="p-2 rounded-full bg-emerald-500/20">
            <Icon className="h-4 w-4 text-emerald-400" />
          </div>
          <div>
            <h4 className="font-medium text-sm text-foreground">{notification.title}</h4>
            <p className="text-xs text-muted-foreground">{notification.message}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button size="sm" variant="ghost" className="text-xs h-7">
            {notification.action}
          </Button>
          <Button
            size="sm"
            variant="ghost"
            onClick={() => setIsVisible(false)}
            className="h-7 w-7 p-0"
          >
            <X className="h-3 w-3" />
          </Button>
        </div>
      </div>
      <div className="h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-b-lg" />
    </Card>
  );
};