import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Target, Coffee, Shield, Sparkles, Send } from "lucide-react";

const tones = [
  {
    id: "blunt",
    name: "Blunt",
    icon: Target,
    description: "Brutally honest, no sugarcoating",
    color: "bg-red-500",
  },
  {
    id: "chill",
    name: "Chill",
    icon: Coffee,
    description: "Laid-back and thoughtful",
    color: "bg-blue-500",
  },
  {
    id: "street",
    name: "Street",
    icon: Shield,
    description: "Real, slangy, tough-love",
    color: "bg-orange-500",
  },
  {
    id: "spiritual",
    name: "Spiritual",
    icon: Sparkles,
    description: "Wise, deep, reflective",
    color: "bg-purple-500",
  },
];

const RealTalk = () => {
  const [userInput, setUserInput] = useState("");
  const [selectedTone, setSelectedTone] = useState("chill");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  // Removed: const [method, setMethod] = useState<'POST' | 'GET'>('POST');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    setIsLoading(true);
    setResponse("");

    try {
      // Always use POST
      const res = await fetch("/api/realtalk", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ input: userInput, tone: selectedTone }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Unknown error");
      setResponse(data.reply || data.message);
    } catch (error: unknown) {
      setResponse(
        "Sorry, I couldn't process your request right now. Please try again.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  const selectedToneData = tones.find((t) => t.id === selectedTone);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card className="bg-white/90 backdrop-blur-sm p-6 rounded-3xl shadow-2xl">
          <div className="text-center mb-6">
            <div className="text-2xl mb-2">💡</div>
            <h1 className="text-2xl font-bold text-gray-800 mb-1">
              RealTalk GPT
            </h1>
            <p className="text-gray-600 text-sm">Get real advice, no fluff</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label
                htmlFor="problem"
                className="text-sm font-medium text-gray-700 mb-2 block"
              >
                What's on your mind?
              </Label>
              <Textarea
                id="problem"
                placeholder="Tell me what's bothering you or what you need advice on..."
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                className="min-h-[120px] resize-none rounded-2xl border-2 border-gray-200 focus:border-primary"
                required
              />
            </div>

            <div>
              <Label className="text-sm font-medium text-gray-700 mb-3 block">
                How do you want the advice?
              </Label>
              <RadioGroup value={selectedTone} onValueChange={setSelectedTone}>
                <div className="grid grid-cols-2 gap-3">
                  {tones.map((tone) => {
                    const Icon = tone.icon;
                    return (
                      <div key={tone.id} className="relative">
                        <RadioGroupItem
                          value={tone.id}
                          id={tone.id}
                          className="peer sr-only"
                        />
                        <Label
                          htmlFor={tone.id}
                          className={`flex flex-col items-center p-4 rounded-2xl border-2 cursor-pointer transition-all
                            ${
                              selectedTone === tone.id
                                ? "border-primary bg-primary/10 shadow-md"
                                : "border-gray-200 hover:border-gray-300"
                            }`}
                        >
                          <div
                            className={`p-2 rounded-full ${tone.color} mb-2`}
                          >
                            <Icon className="w-4 h-4 text-white" />
                          </div>
                          <span className="font-medium text-sm text-gray-800">
                            {tone.name}
                          </span>
                          <span className="text-xs text-gray-500 text-center mt-1">
                            {tone.description}
                          </span>
                        </Label>
                      </div>
                    );
                  })}
                </div>
              </RadioGroup>
            </div>

            {/* Method selector */}
            {/* Removed radio buttons for POST/GET method */}

            <Button
              type="submit"
              disabled={isLoading || !userInput.trim()}
              className="w-full bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white font-medium py-3 rounded-2xl transition-all disabled:opacity-50"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Getting advice...
                </div>
              ) : (
                <div className="flex items-center justify-center">
                  <Send className="w-4 h-4 mr-2" />
                  Get Real Advice
                </div>
              )}
            </Button>
          </form>

          {response && (
            <div className="mt-6 p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl">
              <div className="flex items-center mb-2">
                {selectedToneData && (
                  <div
                    className={`p-2 rounded-full ${selectedToneData.color} mr-3`}
                  >
                    <selectedToneData.icon className="w-4 h-4 text-white" />
                  </div>
                )}
                <span className="font-medium text-gray-800 capitalize">
                  {selectedTone} Advice
                </span>
              </div>
              <p className="text-gray-700 leading-relaxed">{response}</p>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default RealTalk;
