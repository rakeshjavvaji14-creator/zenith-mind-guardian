import { EmergencyButton } from "@/components/EmergencyButton";
import { MoodTracker } from "@/components/MoodTracker";
import { QuickActions } from "@/components/QuickActions";
import { AIChat } from "@/components/AIChat";
import { AcademicStress } from "@/components/AcademicStress";
import { CrisisSupport } from "@/components/CrisisSupport";
import { PrivacyControls } from "@/components/PrivacyControls";
import { WellnessCalendar } from "@/components/WellnessCalendar";

const Index = () => {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <EmergencyButton />
      
      {/* Header */}
      <header className="bg-gradient-to-r from-emerald-500/95 to-emerald-600/95 backdrop-blur-md text-white p-8 text-center border-b border-white/20 relative">
        <h1 className="text-4xl md:text-5xl font-bold mb-2 text-shadow-lg">
          AI Student Wellness Platform
        </h1>
        <p className="text-lg md:text-xl opacity-90 mb-4">
          Your comprehensive companion for mental health, wellness tracking, and peer support
        </p>
        <div className="inline-block bg-white/15 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
          {today}
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto p-4 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {/* Quick Actions - Full Width */}
          <div className="lg:col-span-2 xl:col-span-3">
            <QuickActions />
          </div>

          {/* Mood Tracker */}
          <MoodTracker />

          {/* Academic Stress */}
          <AcademicStress />

          {/* Crisis Support */}
          <CrisisSupport />

          {/* AI Chat */}
          <AIChat />

          {/* Privacy Controls */}
          <PrivacyControls />

          {/* Wellness Calendar - Full Width */}
          <div className="lg:col-span-2 xl:col-span-3">
            <WellnessCalendar />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
