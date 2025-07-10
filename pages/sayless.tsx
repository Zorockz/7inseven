import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Copy, RotateCcw, Sparkles, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const tones = [
  {
    value: "passive-aggressive",
    label: "😒 Passive-Aggressive",
    description: "Hidden resentment or annoyance",
  },
  {
    value: "sarcastic",
    label: "🙄 Sarcastic",
    description: "Says one thing, means another",
  },
  {
    value: "flirty",
    label: "😉 Flirty",
    description: "Romantic or suggestive undertones",
  },
  {
    value: "dismissive",
    label: "🤷 Dismissive",
    description: "Brushing off or minimizing",
  },
  {
    value: "anxious",
    label: "😰 Anxious",
    description: "Worried or seeking reassurance",
  },
  {
    value: "manipulative",
    label: "🎭 Manipulative",
    description: "Trying to control or guilt-trip",
  },
  {
    value: "honest",
    label: "😊 Genuine",
    description: "Actually means what they say",
  },
  {
    value: "testing",
    label: "🧪 Testing",
    description: "Checking your reaction or interest",
  },
];

export default function SayLessPage() {
  const [inputText, setInputText] = useState("");
  const [selectedTone, setSelectedTone] = useState("");
  const [decoded, setDecoded] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleDecode = async () => {
    if (!inputText.trim()) {
      toast({
        title: "Hold up! 🤔",
        description: "Drop some text first so I can decode it for you.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      const mockResponse = generateMockResponse(inputText, selectedTone);
      setDecoded(mockResponse);
      setIsLoading(false);
    }, 2000);
  };

  const generateMockResponse = (text: string, tone: string) => {
    const responses = {
      "passive-aggressive": `They're annoyed but won't say it directly. This is their way of expressing frustration while maintaining plausible deniability.`,
      sarcastic: `The opposite of what they're literally saying. They're being sarcastic to make a point or show their real feelings.`,
      flirty: `There's romantic interest here. They're testing the waters to see if you're interested too.`,
      dismissive: `They're not taking this seriously and want to move on from the topic. Your concerns aren't their priority right now.`,
      anxious: `They're worried and need reassurance. Behind the casual words, they're actually quite concerned about the situation.`,
      manipulative: `They're trying to get you to do something by making you feel guilty or responsible. Classic manipulation tactic.`,
      testing: `They're gauging your interest or reaction. This is a test to see how much you care or what you'll do.`,
    };
    return (
      responses[tone as keyof typeof responses] ||
      `Based on the context and typical communication patterns, they likely mean something different from the surface message. The subtext suggests there are unspoken feelings or intentions here.`
    );
  };

  const handleReset = () => {
    setInputText("");
    setSelectedTone("");
    setDecoded("");
  };

  const handleCopy = async () => {
    if (decoded) {
      await navigator.clipboard.writeText(decoded);
      toast({
        title: "Copied! 📋",
        description: "The decoded message is now in your clipboard.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-soft">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <MessageSquare className="w-8 h-8 text-primary" />
            <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              SayLess
            </h1>
          </div>
          <p className="text-muted-foreground text-lg">
            Decode what they <em>really</em> meant to say
          </p>
          <Badge variant="secondary" className="mt-2">
            ✨ AI-Powered Message Decoder
          </Badge>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Input Section */}
          <Card className="shadow-card border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                The Message You Received
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <Textarea
                placeholder={`Paste the message here...\ne.g., 'You can come if you want, idc' or 'Sure, whatever works for you'`}
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="min-h-32 resize-none border-0 bg-muted/50 focus:bg-background transition-colors"
              />

              <div className="space-y-3">
                <label className="text-sm font-medium">
                  Detected Tone (Optional)
                </label>
                <Select value={selectedTone} onValueChange={setSelectedTone}>
                  <SelectTrigger className="border-0 bg-muted/50">
                    <SelectValue placeholder="Select the vibe you're getting..." />
                  </SelectTrigger>
                  <SelectContent>
                    {tones.map((tone) => (
                      <SelectItem key={tone.value} value={tone.value}>
                        <div className="flex flex-col">
                          <span>{tone.label}</span>
                          <span className="text-xs text-muted-foreground">
                            {tone.description}
                          </span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex gap-3">
                <Button
                  onClick={handleDecode}
                  disabled={isLoading}
                  variant="default"
                  size="lg"
                  className="flex-1"
                >
                  {isLoading ? (
                    <>
                      <Sparkles className="w-4 h-4 animate-spin" />
                      Decoding...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      Decode It
                    </>
                  )}
                </Button>
                <Button onClick={handleReset} variant="outline" size="lg">
                  <RotateCcw className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Output Section */}
          <Card className="shadow-card border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />
                What They Actually Meant
              </CardTitle>
            </CardHeader>
            <CardContent>
              {decoded ? (
                <div className="space-y-4">
                  <div className="p-6 bg-gradient-secondary rounded-lg border border-border/50">
                    <p className="text-foreground leading-relaxed">{decoded}</p>
                  </div>
                  <div className="flex gap-3">
                    <Button
                      onClick={handleCopy}
                      variant="secondary"
                      className="flex-1"
                    >
                      <Copy className="w-4 h-4" />
                      Copy Translation
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4 opacity-20">
                    <MessageSquare className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-muted-foreground">
                    {inputText
                      ? "Ready to decode! Hit the button."
                      : "Paste a message to get started."}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-muted-foreground">
          <p className="text-sm">
            🤖 Powered by AI • Decode the unspoken • Read between the lines
          </p>
        </div>
      </div>
    </div>
  );
}
