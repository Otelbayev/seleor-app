import {Separator} from "@/components/ui/separator";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import {Button} from "@/components/ui/button"

const Page = () => {
  return <>

    <h1 className={"font-bold text-xl"}>Danger zone</h1>
    <Separator className={"my-3"}/>

    <div className={"flex flex-col space-y-0 bg-secondary p-4"}>
      <p className={"text-muted-foreground text-sm"}>
        Deleteing your acount wll remove all your data from servers. This action is irreeversible.
      </p>
      <Dialog>
        <DialogTrigger asChild>
          <Button className={"w-fit"} size={"sm"} variant={"destructive"}>
            Delete account
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <div className={"p-4 bg-secondary mt-4"}>
        <div className={"w-1/2"}></div>
      </div>

    </div>


  </>
}

export default Page