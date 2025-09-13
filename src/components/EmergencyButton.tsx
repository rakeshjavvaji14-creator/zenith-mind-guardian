import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export const EmergencyButton = () => {
  const { toast } = useToast();

  const triggerEmergency = () => {
    toast({
      title: "🆘 Emergency Support Activated",
      description: "Connecting you to immediate help. Stay safe.",
      variant: "destructive",
    });
  };

  return (
    <Button
      variant="emergency"
      size="sm"
      className="fixed top-4 right-4 z-50 rounded-full shadow-2xl"
      onClick={triggerEmergency}
    >
      🆘 Emergency Help
    </Button>
  );
};