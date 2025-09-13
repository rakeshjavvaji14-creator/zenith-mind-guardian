import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProgressRing } from "@/components/ProgressRing";
import { Calendar, Heart, Brain, Moon } from "lucide-react";

export const WellnessStats = () => {
  const stats = [
    {
      title: "Mood Score",
      value: 78,
      icon: Heart,
      color: "hsl(var(--wellness-primary))",
      description: "7-day average",
    },
    {
      title: "Stress Level",
      value: 34,
      icon: Brain,
      color: "hsl(var(--wellness-accent))",
      description: "Lower is better",
      inverted: true,
    },
    {
      title: "Sleep Quality",
      value: 85,
      icon: Moon,
      color: "hsl(var(--accent))",
      description: "Last night",
    },
    {
      title: "Check-ins",
      value: 90,
      icon: Calendar,
      color: "hsl(var(--wellness-secondary))",
      description: "This month",
    },
  ];

  return (
    <Card className="bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200">
      <CardHeader>
        <CardTitle className="text-emerald-800 flex items-center gap-2">
          📊 Wellness Dashboard
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            const displayValue = stat.inverted ? 100 - stat.value : stat.value;
            
            return (
              <div key={stat.title} className="text-center space-y-2">
                <ProgressRing
                  progress={stat.value}
                  color={stat.color}
                  size={80}
                  strokeWidth={6}
                >
                  <div className="flex flex-col items-center">
                    <Icon className="h-4 w-4 text-emerald-600 mb-1" />
                    <span className="text-lg font-bold text-emerald-800">
                      {displayValue}%
                    </span>
                  </div>
                </ProgressRing>
                <div>
                  <h4 className="font-medium text-sm text-emerald-800">{stat.title}</h4>
                  <p className="text-xs text-emerald-600">{stat.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-6 p-4 bg-emerald-100 rounded-lg">
          <p className="text-sm text-emerald-800 text-center font-medium">
            🎯 Great progress this week! Keep up the daily check-ins.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};