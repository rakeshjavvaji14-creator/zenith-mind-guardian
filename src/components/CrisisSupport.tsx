import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const crisisResources = [
  { title: "Call 988 - Suicide & Crisis Lifeline", action: "tel:988", icon: "📞" },
  { title: "Emergency Services - 911", action: "tel:911", icon: "🚨" },
  { title: "Text Crisis Line", action: "#", icon: "💬" },
  { title: "Connect to Campus Counselor Now", action: "#", icon: "👨‍⚕️" },
];

export const CrisisSupport = () => {
  const { toast } = useToast();

  const handleResourceClick = (title: string) => {
    if (title.includes("Text")) {
      toast({
        title: "Text Crisis Support",
        description: "Text 'HELLO' to 741741 for immediate support.",
      });
    } else if (title.includes("Campus")) {
      toast({
        title: "Connecting to Counselor",
        description: "Redirecting you to campus mental health services.",
      });
    }
  };

  return (
    <Card className="glass border-white/20 shadow-lg hover:shadow-emerald-500/25 transition-all duration-300">
      <CardHeader>
        <CardTitle className="text-emerald-600 flex items-center gap-2">
          🛡️ Enhanced Safety Network
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4 mb-4">
          <h3 className="font-semibold text-red-800 mb-3">Immediate Crisis Resources</h3>
          <div className="space-y-2">
            {crisisResources.map((resource, index) => (
              <Button
                key={index}
                variant="outline"
                className="w-full justify-start text-red-700 border-red-300 hover:bg-red-50 hover:border-red-400 transition-all duration-300"
                onClick={() => handleResourceClick(resource.title)}
                asChild={resource.action.startsWith("tel:")}
              >
                {resource.action.startsWith("tel:") ? (
                  <a href={resource.action} className="flex items-center gap-2">
                    <span>{resource.icon}</span>
                    <span>{resource.title}</span>
                  </a>
                ) : (
                  <div className="flex items-center gap-2">
                    <span>{resource.icon}</span>
                    <span>{resource.title}</span>
                  </div>
                )}
              </Button>
            ))}
          </div>
        </div>

        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
          <h4 className="font-semibold text-emerald-800 mb-2">Campus Wellness Team</h4>
          <p className="text-emerald-700 mb-2">
            <strong>Dr. Sarah Johnson</strong> - Available Mon-Fri, 9am-5pm
          </p>
          <p className="text-emerald-700 mb-3">
            <strong>24/7 Support:</strong> Always available through our AI companion
          </p>
          <Button
            variant="wellness"
            className="w-full"
            onClick={() =>
              toast({
                title: "Appointment Scheduled",
                description: "You'll receive a confirmation email shortly.",
              })
            }
          >
            Schedule Appointment
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};