import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarIcon, Plus } from "lucide-react";

interface CalendarEvent {
  date: Date;
  title: string;
  type: 'appointment' | 'deadline' | 'mood-check' | 'wellness';
}

export const WellnessCalendar = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [events] = useState<CalendarEvent[]>([
    { date: new Date(), title: "Daily Mood Check", type: "mood-check" },
    { date: new Date(Date.now() + 86400000), title: "Counseling Session", type: "appointment" },
    { date: new Date(Date.now() + 172800000), title: "Research Paper Due", type: "deadline" },
    { date: new Date(Date.now() + 259200000), title: "Meditation Workshop", type: "wellness" },
  ]);

  const getEventsForDate = (selectedDate: Date) => {
    return events.filter(event => 
      event.date.toDateString() === selectedDate.toDateString()
    );
  };

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'appointment': return 'bg-emerald-500';
      case 'deadline': return 'bg-red-500';
      case 'mood-check': return 'bg-blue-500';
      case 'wellness': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <Card className="p-6 bg-white/95 backdrop-blur-md border border-white/20">
      <div className="flex items-center gap-2 mb-4">
        <CalendarIcon className="h-6 w-6 text-primary" />
        <h2 className="text-2xl font-semibold text-primary">Wellness Calendar</h2>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
            modifiers={{
              hasEvent: events.map(event => event.date)
            }}
            modifiersStyles={{
              hasEvent: { 
                background: 'hsl(var(--primary))',
                color: 'hsl(var(--primary-foreground))',
                fontWeight: 'bold'
              }
            }}
          />
          
          <Button className="w-full mt-4" variant="outline">
            <Plus className="h-4 w-4 mr-2" />
            Add Event
          </Button>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-3">
            {date ? `Events for ${date.toLocaleDateString()}` : 'Select a date'}
          </h3>
          
          {date ? (
            <div className="space-y-3">
              {getEventsForDate(date).length > 0 ? (
                getEventsForDate(date).map((event, index) => (
                  <div key={index} className="p-3 rounded-lg border border-border bg-background">
                    <div className="flex items-center gap-2 mb-1">
                      <div className={`w-3 h-3 rounded-full ${getEventTypeColor(event.type)}`}></div>
                      <span className="font-medium">{event.title}</span>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {event.type.replace('-', ' ')}
                    </Badge>
                  </div>
                ))
              ) : (
                <p className="text-muted-foreground">No events scheduled for this date.</p>
              )}
            </div>
          ) : (
            <p className="text-muted-foreground">Select a date to view events.</p>
          )}
          
          <div className="mt-6">
            <h4 className="font-semibold mb-2">Upcoming Events</h4>
            <div className="space-y-2">
              {events.slice(0, 3).map((event, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <div className={`w-2 h-2 rounded-full ${getEventTypeColor(event.type)}`}></div>
                  <span>{event.title}</span>
                  <span className="text-muted-foreground">
                    {event.date.toLocaleDateString()}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};