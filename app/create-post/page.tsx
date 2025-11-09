"use client";

import { createPost } from "@/actions/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useRef, useState } from "react";
import { toast } from "sonner";

export default function CreatePost() {
  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);

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
    } else {
      toast.error("Error saving to database.");
    }
  };

  return (
    <div className="h-full min-h-screen w-screen flex justify-center items-center">
      <form action={createPost} className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <Label htmlFor="title" className="text-xl uppercase font-semibold">
            Title
          </Label>
          <Input
            ref={titleRef}
            required
            type="text"
            id="title"
            name="title"
            placeholder="Input the title..."
            className="w-[50vw] h-12 text-2xl"
          />
        </div>
        <div className="flex flex-col gap-4">
          <Label htmlFor="content" className="text-xl uppercase font-semibold">
            Content
          </Label>
          <Textarea
            ref={contentRef}
            required
            id="content"
            name="content"
            placeholder="Input content here"
            className="h-[300px] resize-none overflow-scroll"
          />
        </div>
        <div className="flex flex-col gap-4">
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
            className="w-[50vw] h-12 text-2xl"
          />
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
