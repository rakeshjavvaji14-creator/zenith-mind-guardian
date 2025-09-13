import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const deadlines = [
  { task: "Research Paper", dueDate: "Due in 3 days", stress: "high", emoji: "😰" },
  { task: "Math Assignment", dueDate: "Due in 1 week", stress: "medium", emoji: "😐" },
  { task: "Group Project", dueDate: "Due in 2 weeks", stress: "low", emoji: "😊" },
];

const getStressColor = (stress: string) => {
  switch (stress) {
    case "high":
      return "border-red-400 bg-red-50";
    case "medium":
      return "border-yellow-400 bg-yellow-50";
    case "low":
      return "border-green-400 bg-green-50";
    default:
      return "border-gray-400 bg-gray-50";
  }
};

export const AcademicStress = () => {
  return (
    <Card className="glass border-white/20 shadow-lg hover:shadow-emerald-500/25 transition-all duration-300">
      <CardHeader>
        <CardTitle className="text-emerald-600 flex items-center gap-2">
          📚 Academic Stress Monitor
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-4 mb-4">
          <h3 className="font-semibold text-lg mb-4">Upcoming Deadlines & Stress Prediction</h3>
          <div className="space-y-3">
            {deadlines.map((deadline, index) => (
              <div
                key={index}
                className={`flex justify-between items-center p-3 rounded-lg border-l-4 ${getStressColor(deadline.stress)}`}
              >
                <div>
                  <div className="font-medium">{deadline.task}</div>
                  <div className="text-sm text-gray-600">{deadline.dueDate}</div>
                </div>
                <div className="text-2xl">{deadline.emoji}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <div className="flex items-start gap-2">
            <span className="text-xl">🤖</span>
            <div>
              <strong className="text-amber-800">AI Recommendation:</strong>
              <p className="text-amber-700 mt-1">
                High stress detected for tomorrow. Consider breaking your research paper into smaller tasks and scheduling a study break.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};