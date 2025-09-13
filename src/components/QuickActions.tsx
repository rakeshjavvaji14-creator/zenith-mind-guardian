import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const quickActions = [
  { icon: "🫁", title: "Breathing", subtitle: "Exercise", action: "startBreathingExercise" },
  { icon: "🎵", title: "Calming", subtitle: "Sounds", action: "playCalm" },
  { icon: "📝", title: "Quick", subtitle: "Journal", action: "openJournal" },
  { icon: "💬", title: "Talk to", subtitle: "Someone", action: "connectSupport" },
  { icon: "📚", title: "Campus", subtitle: "Resources", action: "viewResources" },
  { icon: "📅", title: "Schedule", subtitle: "Counseling", action: "scheduleMeeting" },
];

export const QuickActions = () => {
  const { toast } = useToast();

  const handleAction = (action: string, title: string) => {
    toast({
      title: `${title} activated!`,
      description: "Taking care of your wellness is important. Keep going!",
    });
  };

  return (
    <Card className="glass border-white/20 shadow-lg hover:shadow-emerald-500/25 transition-all duration-300">
      <CardHeader>
        <CardTitle className="text-emerald-600 flex items-center gap-2">
          ⚡ Quick Actions
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {quickActions.map((action) => (
            <Button
              key={action.action}
              variant="glass"
              className="h-20 flex flex-col items-center justify-center p-4 text-gray-700 bg-emerald-50/50 hover:bg-emerald-100/50 border border-emerald-200/50"
              onClick={() => handleAction(action.action, action.title)}
            >
              <span className="text-2xl mb-1">{action.icon}</span>
              <div className="text-center">
                <div className="text-xs font-medium">{action.title}</div>
                <div className="text-xs">{action.subtitle}</div>
              </div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};