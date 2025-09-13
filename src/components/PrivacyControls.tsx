import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";

interface PrivacySetting {
  id: string;
  title: string;
  description: string;
  enabled: boolean;
}

export const PrivacyControls = () => {
  const { toast } = useToast();
  const [settings, setSettings] = useState<PrivacySetting[]>([
    {
      id: "academic",
      title: "Share mood data with academic advisors",
      description: "Help them understand your academic performance patterns",
      enabled: false,
    },
    {
      id: "anonymous",
      title: "Anonymous community insights",
      description: "Contribute to anonymized wellness research",
      enabled: true,
    },
    {
      id: "emergency",
      title: "Emergency contact alerts",
      description: "Allow platform to contact trusted persons in crisis",
      enabled: true,
    },
  ]);

  const toggleSetting = (id: string) => {
    setSettings(prev =>
      prev.map(setting =>
        setting.id === id ? { ...setting, enabled: !setting.enabled } : setting
      )
    );
    toast({
      title: "Privacy setting updated",
      description: "Your preferences have been saved securely.",
    });
  };

  const exportData = () => {
    toast({
      title: "Data Export Initiated",
      description: "Your data export will be ready for download shortly.",
    });
  };

  return (
    <Card className="glass border-white/20 shadow-lg hover:shadow-emerald-500/25 transition-all duration-300">
      <CardHeader>
        <CardTitle className="text-emerald-600 flex items-center gap-2">
          🔒 Privacy & Data Control
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="bg-slate-50 rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-slate-800 mb-2">Your Data, Your Control</h3>
          <p className="text-slate-700">
            All data is encrypted and FERPA/HIPAA compliant. You control what's shared and with whom.
          </p>
        </div>

        <div className="space-y-4 mb-6">
          {settings.map((setting) => (
            <div
              key={setting.id}
              className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-emerald-300 transition-colors"
            >
              <div className="flex-1">
                <div className="font-medium text-gray-900">{setting.title}</div>
                <div className="text-sm text-gray-600 mt-1">{setting.description}</div>
              </div>
              <Switch
                checked={setting.enabled}
                onCheckedChange={() => toggleSetting(setting.id)}
                className="ml-4"
              />
            </div>
          ))}
        </div>

        <Button
          variant="outline"
          className="w-full border-emerald-300 text-emerald-700 hover:bg-emerald-50"
          onClick={exportData}
        >
          📥 Download My Data
        </Button>
      </CardContent>
    </Card>
  );
};