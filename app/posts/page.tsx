import CardLayout from "@/components/cardlayout";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { prisma } from "@/lib/prisma";
import { auth, currentUser } from "@clerk/nextjs/server";
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
  const posts = await prisma.post.findMany({
    where: {
      postedBy: user?.fullName || "",
    },
  });

  return (
    <div className="h-screen w-screen">
      <main
        className={`w-full h-full ${
          posts.length === 0 ? "pt-4" : "flex justify-center items-center"
        }`}
      >
        <CardLayout cards={posts}></CardLayout>
      </main>
    </div>
  );
}
