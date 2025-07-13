import { useState } from "react";
import { Clock, Mail, Send, Shield, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { timeCapsuleService } from "@/lib/timeCapsuleService";

const WhisperedTimeCapsule = () => {
  const [message, setMessage] = useState("");
  const [emails, setEmails] = useState(["", "", ""]);
  const [selectedYears, setSelectedYears] = useState<number | null>(null);
  const [isSending, setIsSending] = useState(false);
  const { toast } = useToast();

  const timeOptions = [
    { years: 1, label: "1 Year", description: "A year from now" },
    { years: 5, label: "5 Years", description: "Half a decade ahead" },
    { years: 10, label: "10 Years", description: "A full decade later" }
  ];

  const handleEmailChange = (index: number, value: string) => {
    const newEmails = [...emails];
    newEmails[index] = value;
    setEmails(newEmails);
  };

  const handleSendCapsule = async () => {
    console.log('🔄 Button clicked!');
    console.log('📝 Message:', message);
    console.log('📅 Selected years:', selectedYears);
    console.log('📧 Emails:', emails);
    
    // Set loading state
    setIsSending(true);
    
    if (!message.trim()) {
      setIsSending(false);
      toast({
        title: "Message required",
        description: "Please write a message for your future self.",
        variant: "destructive"
      });
      return;
    }

    if (!selectedYears) {
      setIsSending(false);
      toast({
        title: "Select delivery time",
        description: "Choose when you want to receive this message.",
        variant: "destructive"
      });
      return;
    }

    const validEmails = emails.filter(email => email.trim());
    if (validEmails.length === 0) {
      setIsSending(false);
      toast({
        title: "Email required",
        description: "Add at least one email address.",
        variant: "destructive"
      });
      return;
    }

    try {
      console.log('🔄 Starting time capsule creation...');
      console.log('📧 Emails:', validEmails);
      console.log('💬 Message:', message.trim());
      console.log('📅 Years:', selectedYears);

      // Calculate delivery date
      const deliveryDate = new Date();
      deliveryDate.setFullYear(deliveryDate.getFullYear() + selectedYears);
      console.log('📅 Delivery date:', deliveryDate);

      // Create time capsule in Firebase
      console.log('🔥 Calling Firebase service...');
      const capsuleId = await timeCapsuleService.createTimeCapsule({
        message: message.trim(),
        emails: validEmails,
        deliveryDate: deliveryDate
      });
      console.log('✅ Time capsule created with ID:', capsuleId);

      console.log('🔥 Firebase configured: true');

      // Show success message
      toast({
        title: "Time capsule created! 🚀",
        description: `Your message will be delivered in ${selectedYears} year${selectedYears > 1 ? 's' : ''}.`,
      });

      // Keep loading state for animation, then reload
      setTimeout(() => {
        setIsSending(false);
        window.location.reload();
      }, 1500); // Show loading animation for 1.5 seconds

    } catch (error) {
      console.error('❌ Error creating time capsule:', error);
      setIsSending(false);
      toast({
        title: "Error creating time capsule",
        description: error instanceof Error ? error.message : "Please try again later.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-soft">
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center shadow-medium">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-foreground">TimeSend</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Send a message to your future self or loved ones. A digital time capsule that delivers your thoughts across time.
          </p>
        </div>

        {/* Main Form */}
        <div className="max-w-2xl mx-auto space-y-8">
          
          {/* Message Input */}
          <Card className="p-8 shadow-medium border-0 bg-card/80 backdrop-blur-sm">
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-gradient-warm flex items-center justify-center">
                  <Send className="w-4 h-4 text-foreground" />
                </div>
                <h2 className="text-2xl font-semibold text-foreground">Your Message</h2>
              </div>
              
              <Label htmlFor="message" className="text-base font-medium">
                What would you like to say?
              </Label>
              <Textarea
                id="message"
                placeholder="Dear future me... or write to someone special about your hopes, dreams, or just how you're feeling today."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="min-h-[200px] text-base leading-relaxed resize-none border-0 bg-background/50 focus:bg-background shadow-soft"
                maxLength={2000}
              />
              <div className="text-right text-sm text-muted-foreground">
                {message.length}/2000 characters
              </div>
            </div>
          </Card>

          {/* Time Selection */}
          <Card className="p-8 shadow-medium border-0 bg-card/80 backdrop-blur-sm">
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-gradient-mystical flex items-center justify-center">
                  <Calendar className="w-4 h-4 text-white" />
                </div>
                <h2 className="text-2xl font-semibold text-foreground">Delivery Time</h2>
              </div>
              
              <div className="grid gap-4">
                {timeOptions.map((option) => (
                  <button
                    key={option.years}
                    onClick={() => setSelectedYears(option.years)}
                    className={`p-6 rounded-lg text-left transition-all duration-200 border-2 ${
                      selectedYears === option.years
                        ? 'border-primary bg-primary/5 shadow-medium scale-105'
                        : 'border-border bg-background/50 hover:border-primary/50 hover:bg-primary/5'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">{option.label}</h3>
                        <p className="text-muted-foreground">{option.description}</p>
                      </div>
                      <div className={`w-4 h-4 rounded-full border-2 ${
                        selectedYears === option.years ? 'border-primary bg-primary' : 'border-muted-foreground'
                      }`} />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </Card>

          {/* Email Recipients */}
          <Card className="p-8 shadow-medium border-0 bg-card/80 backdrop-blur-sm">
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-gradient-warm flex items-center justify-center">
                  <Mail className="w-4 h-4 text-foreground" />
                </div>
                <h2 className="text-2xl font-semibold text-foreground">Recipients</h2>
              </div>
              
              <div className="space-y-4">
                <Label className="text-base font-medium">
                  Who should receive this message? (1-3 email addresses)
                </Label>
                {emails.map((email, index) => (
                  <div key={index}>
                    <Input
                      type="email"
                      placeholder={index === 0 ? "your.email@example.com (required)" : "friend@example.com (optional)"}
                      value={email}
                      onChange={(e) => handleEmailChange(index, e.target.value)}
                      className="border-0 bg-background/50 focus:bg-background shadow-soft"
                      required={index === 0}
                    />
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Security Notice */}
          <Card className="p-6 shadow-soft border-0 bg-accent/10 backdrop-blur-sm">
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <div className="text-sm text-muted-foreground">
                <p className="font-medium text-foreground mb-1">Your message is secure</p>
                <p>Messages are encrypted and stored safely. They'll only be sent on your chosen delivery date.</p>
              </div>
            </div>
          </Card>

          {/* Send Button */}
          <div className="text-center">
            <Button
              onClick={handleSendCapsule}
              size="lg"
              className="px-12 py-6 text-lg font-semibold transition-all duration-300"
              disabled={!message.trim() || !selectedYears || isSending}
            >
              {isSending ? (
                <>
                  <div className="w-5 h-5 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Message Sent!
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Send to the Future
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhisperedTimeCapsule; 