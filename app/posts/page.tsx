import CardLayout from "@/components/cardlayout";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { prisma } from "@/lib/prisma";
import { auth, currentUser } from "@clerk/nextjs/server";
import { PlusCircleIcon } from "lucide-react";
import Link from "next/link";

export default async function UserPosts() {
  const { isAuthenticated } = await auth();

  if (!isAuthenticated) {
    return (
      <div className="w-full h-full flex items-center justify-center pt-8">
        <Label className="text-xl flex items-center flex-col gap-4">
          No posts from you yet...{" "}
          <Button variant={"outline"}>
            <Link href="/create-post">Create a post</Link>
          </Button>
        </Label>
      </div>
    );
  }

  const user = await currentUser();
  const userPosts = await prisma.post.findMany({
    where: {
      postedBy: user?.fullName || "",
    },
  });

  return (
    <div className="h-screen w-screen flex flex-col justify-center gap-6">
      <div className="flex flex-row justify-between items-center md:px-6 pl-5">
        <Label className="md:text-2xl text-lg font-extrabold pt-6 uppercase ">
          Your Posts
        </Label>
        <Button variant="ghost" className="mt-6 h-8">
          <Link href={"/create-post"}>
            <PlusCircleIcon></PlusCircleIcon>
          </Link>
        </Button>
      </div>
      <main
        className={`w-full h-full ${
          userPosts.length === 0 ? "pt-4" : "flex justify-center items-center"
        }`}
      >
        <CardLayout cards={userPosts}></CardLayout>
      </main>
    </div>
  );
}
