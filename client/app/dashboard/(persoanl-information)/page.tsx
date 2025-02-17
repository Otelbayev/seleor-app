import { Separator } from "@/components/ui/separator";
import { Banknote, Heart, Shuffle } from "lucide-react";
import EditInformation from "../_components/edit-information";


const PersonalInformation = () => {
  return (
    <div>
      <h1 className="font-semibold text-xl">Personal Information</h1>
      <Separator className="my-3" />
      <EditInformation />
      <div className="grid grid-cols-3 gap-4">
        <div className="border-2 p-2 flex justify-center flex-col space-y-2 items-center shadow-md hover:animate-pulse transition-all cursor-pointer">
          <Shuffle size={50} />
          <div className="text-center">
            <div className="text-4xl font-bold">4</div>
            <p>Oreders</p>
          </div>
        </div>
        <div className="border-2 p-2 flex justify-center flex-col space-y-2 items-center shadow-md hover:animate-pulse transition-all cursor-pointer">
          <Banknote size={50} />
          <div className="text-center">
            <div className="text-4xl font-bold">4</div>
            <p>Payments</p>
          </div>
        </div>
        <div className="border-2 p-2 flex justify-center flex-col space-y-2 items-center shadow-md hover:animate-pulse transition-all cursor-pointer">
          <Heart size={50} />
          <div className="text-center">
            <div className="text-4xl font-bold">4</div>
            <p>Watch list</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
