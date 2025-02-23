import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { EllipsisVertical } from "lucide-react";

const OrderActions = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button size="icon" className="size-6" variant="outline">
          <EllipsisVertical />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-40 p-1" side="right">
        <div className="flex flex-col space-y-0">
          <Button size="sm" className="justify-start">
            1. Confirm order
          </Button>
          <Button size="sm" className="justify-start">
            2. Start delivery
          </Button>
          <Button size="sm" className="justify-start">
            3. Delivery in proccess
          </Button>
          <Button size="sm" className="justify-start">
            4. Mark as deivered
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default OrderActions;
