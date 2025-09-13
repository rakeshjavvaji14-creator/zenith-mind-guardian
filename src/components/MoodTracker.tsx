import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { useToast } from "@/hooks/use-toast";
import meditationHero from "@/assets/meditation-hero.jpg";

const moodOptions = [
  { emoji: "🤩", mood: "Excellent", score: 5, title: "Excellent" },
  { emoji: "😊", mood: "Happy", score: 4, title: "Happy" },
  { emoji: "😐", mood: "Okay", score: 3, title: "Okay" },
  { emoji: "😢", mood: "Sad", score: 2, title: "Sad" },
  { emoji: "😣", mood: "Stressed", score: 2, title: "Stressed" },
  { emoji: "😰", mood: "Anxious", score: 2, title: "Anxious" },
  { emoji: "😠", mood: "Angry", score: 1, title: "Angry" },
];

export const MoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState<string>("");
  const [note, setNote] = useState("");
  const [energy, setEnergy] = useState([5]);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedMood) {
      toast({
        title: "Please select your mood",
        description: "Choose how you're feeling today to continue.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "✨ Mood check-in complete!",
      description: "Your AI companion is analyzing patterns to provide personalized insights.",
    });

    // Reset form
    setSelectedMood("");
    setNote("");
    setEnergy([5]);
  };

  return (
    <Card className="glass border-white/20 shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 transform hover:-translate-y-1">
      <CardHeader className="text-center">
        <img
          src={meditationHero}
          alt="Peaceful meditation"
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <CardTitle className="text-emerald-600 flex items-center justify-center gap-2">
          🎯 AI-Enhanced Mood Check-In
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label className="text-base font-semibold mb-4 block">
              How are you feeling today?
            </Label>
            <div className="flex flex-wrap justify-center gap-3 mb-4">
              {moodOptions.map((option) => (
                <Button
                  key={option.mood}
                  type="button"
                  variant={selectedMood === option.mood ? "wellness" : "mood"}
                  size="icon"
                  className="text-2xl h-16 w-16 rounded-full"
                  title={option.title}
                  onClick={() => setSelectedMood(option.mood)}
                >
                  {option.emoji}
                </Button>
              ))}
            </div>
          </div>

          <div>
            <Label htmlFor="note" className="text-base font-semibold">
              AI-Personalized Journal Prompt:
            </Label>
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mb-3 italic text-emerald-800">
              What three things brought you joy or satisfaction today, no matter how small?
            </div>
            <Textarea
              id="note"
              placeholder="Your AI companion analyzes patterns to provide personalized insights..."
              value={note}
              onChange={(e) => setNote(e.target.value)}
              rows={4}
              className="resize-none"
            />
          </div>

          <div>
            <Label className="text-base font-semibold mb-2 block">
              Energy Level: {energy[0]}/10
            </Label>
            <Slider
              value={energy}
              onValueChange={setEnergy}
              max={10}
              min={1}
              step={1}
              className="mb-2"
            />
            <div className="flex justify-between text-sm text-gray-600">
              <span>Drained</span>
              <span>Energized</span>
            </div>
          </div>

          <Button type="submit" variant="wellness" className="w-full">
            Submit Check-In & Get AI Insights
          </Button>
        </form>

        {/* Mood Chart */}
        <div className="mt-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-4 text-center">
          <h3 className="font-semibold text-lg mb-2">Your 7-Day Mood Pattern</h3>
          <p className="text-emerald-600 font-medium">📈 Trending upward this week!</p>
          <div className="h-20 bg-gradient-to-r from-red-400 via-yellow-400 to-emerald-400 rounded-lg my-3 opacity-30"></div>
          <p className="text-sm text-gray-600">
            AI noticed you feel better after morning exercises
          </p>
        </div>
      </CardContent>
    </Card>
  );
};