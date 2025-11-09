"use server";

import prisma from "@/lib/prisma";

export async function createPost(formData: FormData) {
  await prisma.post.create({
    data: {
      title: formData.get("title") as string,
      content: formData.get("content") as string,
      postedBy: formData.get("postedBy") as string,
    },
  });
}
