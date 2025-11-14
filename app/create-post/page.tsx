"use client";

import { createPost } from "@/actions/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SignedIn, useUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { useRef, useState } from "react";
import { toast } from "sonner";

export default function CreatePost() {
  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  const handleSubmit = () => {
    const titleLength = titleRef.current?.value.length ?? 0;
    const contentLength = contentRef.current?.value.length ?? 0;
    const nameLength = nameRef.current?.value.length ?? 0;

    // Example validation
    if (titleLength > 0 && contentLength > 0 && nameLength > 0) {
      toast.promise<{ name: string }>(
        () =>
          new Promise((resolve) =>
            setTimeout(() => resolve({ name: "Post" }), 2000)
          ),
        {
          loading: "Loading...",
          success: (data) => `${data.name} submitted successfully.`,
          error: "Error",
        }
      );
      setTimeout(redirect("/"), 3000);
    } else {
      toast.error("Error saving to database.");
    }
  };

  return (
    <div className="h-full md:pt-[13vh] pt-8 w-screen flex justify-center items-center">
      <form action={createPost} className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <Label
            htmlFor="title"
            className="md:text-xl text-lg uppercase font-semibold"
          >
            Title
          </Label>
          <Input
            ref={titleRef}
            required
            type="text"
            id="title"
            name="title"
            placeholder="Input the title..."
            className="md:w-[50vw] w-[80vw] h-12 text-sm md:text-xl"
          />
        </div>
        <div className="flex flex-col gap-4">
          <Label
            htmlFor="content"
            className="md:text-xl text-lg uppercase font-semibold"
          >
            Content
          </Label>
          <Textarea
            ref={contentRef}
            required
            id="content"
            name="content"
            placeholder="Input content here"
            className="h-[300px] resize-none overflow-scroll md:text-xl text-sm"
          />
        </div>
        <div className="flex flex-col gap-4">
          <SignedIn>
            <Label htmlFor="name" className="text-xl uppercase font-semibold">
              Name
            </Label>
            <Input
              ref={nameRef}
              required
              type="text"
              id="name"
              name="postedBy"
              placeholder="Input your name..."
              className="md:w-[50vw] w-[80vw] h-12 md:text-xl text-sm"
              value={user.fullName ?? ""}
              readOnly
            ></Input>
          </SignedIn>
        </div>
        <div>
          <Button onClick={handleSubmit} className="w-full z-50">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
