import CardLayout from "@/components/cardlayout";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Popover, PopoverTrigger } from "@/components/ui/popover";
import { prisma } from "@/lib/prisma";
import { PlusCircleIcon } from "lucide-react";
import Link from "next/link";

export default async function Home() {
  const posts = await prisma.post.findMany();

  return (
    <div className="h-screen w-screen flex flex-col justify-center gap-6">
      <div className="flex flex-row justify-between items-center md:px-6 pl-5">
        <Label className="md:text-2xl text-lg font-extrabold pt-6 uppercase ">
          All Posts
        </Label>
        <Button variant="ghost" className="mt-6 h-8">
          <Link href={"/create-post"}>
            <PlusCircleIcon></PlusCircleIcon>
          </Link>
        </Button>
      </div>
      <main
        className={`w-full h-full ${
          posts.length === 0 ? "" : "flex justify-center items-center"
        }`}
      >
        <CardLayout cards={posts}></CardLayout>
      </main>
    </div>
  );
}
