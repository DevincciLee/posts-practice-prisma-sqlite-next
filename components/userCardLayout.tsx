"use client";

import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Label } from "./ui/label";
import Link from "next/link";
import prisma from "@/lib/prisma";

let MAX_CONTENT_LENGTH = 250;

const truncateText = (text: string) => {
  if (text.length <= MAX_CONTENT_LENGTH) return text;
  return text.slice(0, MAX_CONTENT_LENGTH) + "...";
};

export default async function UserCardLayout({
  fullName,
}: {
  fullName: string;
}) {
  const userPosts = await prisma.post.findMany({
    where: {
      postedBy: fullName || "",
    },
  });

  if (userPosts.length === 0) {
    return (
      <div className="flex w-screen h-screen justify-center items-center">
        <Label>No posts by this user currently... add your post here</Label>
        <Label>
          <Link href="/create-post">Create your first post</Link>
        </Label>
      </div>
    );
  }

  return (
    <div className="w-full h-full p-4">
      <main className="w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {userPosts.map((posts) => (
          <Card
            key={posts.id}
            className="max-h-[250px] transition-transform hover:scale-[1.02] flex flex-col"
          >
            <CardHeader className="w-full text-center">
              <h2 className="text-lg font-semibold">{posts.title}</h2>
            </CardHeader>
            <CardContent className="w-full text-justify">
              <Label
                className={`text-sm text-gray-600 flex justify-center items-center flex-col md:${(MAX_CONTENT_LENGTH = 250)} ${(MAX_CONTENT_LENGTH = 100)}`}
              >
                {truncateText(posts.content)}
                {posts.content.length > MAX_CONTENT_LENGTH && (
                  <Link
                    href={`/posts/${posts.id}`}
                    className="block mt-2 text-blue-600 hover:underline"
                  >
                    See more
                  </Link>
                )}
              </Label>
              <CardFooter className="flex justify-center items-center text-gray-400 pt-8">
                <Label>Posted by: {posts.postedBy}</Label>
              </CardFooter>
            </CardContent>
          </Card>
        ))}
      </main>
    </div>
  );
}
