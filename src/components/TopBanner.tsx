import { Gift } from "lucide-react";
import { Button } from "./ui/button";

const TopBanner = () => {
  return (
    <div className="gradient-primary py-2 px-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2 text-primary-foreground">
          <Gift className="h-5 w-5" />
          <span className="text-sm font-medium">
            Festive Season offers from PhD Assistance!
          </span>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-none"
        >
          🎁 New Year 🎁
        </Button>
      </div>
    </div>
  );
};

export default TopBanner;