"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Edit2 } from "lucide-react";
import React, { useState } from "react";
import FullNameForm from "./full-name-form";
import EmailForm from "./email-form";

const EditInformation = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="w-full h-52 bg-secondary flex justify-center items-center">
        <div className="relative">
          <Avatar className="size-32">
            <AvatarFallback className="bg-primary text-white text-6xl">
              JO
            </AvatarFallback>
          </Avatar>
          <Dialog>
            <DialogTrigger asChild>
              <Button
                className="absolute right-0 bottom-0 rounded-full border border-primary"
                variant={"secondary"}
                size="icon"
              >
                <Edit2 />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle />
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="my-3 px-4 bg-secondary">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <div className="flex flex-col space-y-0">
                <div className="font-bold">Full Name</div>
                <div className="text-muted-foreground">Jasurbek O'telbayev</div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <FullNameForm />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              <div className="flex flex-col space-y-0">
                <div className="font-bold">Email</div>
                <div className="text-muted-foreground">
                  jasurdev1604@gmail.com
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <EmailForm />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
};

export default EditInformation;
