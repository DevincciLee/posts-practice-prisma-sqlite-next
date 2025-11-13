"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createPost(formData: FormData) {
  await prisma.post.create({
    data: {
      title: formData.get("title") as string,
      content: formData.get("content") as string,
      postedBy: formData.get("postedBy") as string,
    },
  });

  // Revalidate pages to refresh the database cache
  revalidatePath("/");
  revalidatePath("/posts");
}
