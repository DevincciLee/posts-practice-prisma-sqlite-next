"use client";

import Link from "next/link";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import {
  SignedIn,
  SignedOut,
  SignOutButton,
  UserAvatar,
  UserButton,
} from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";

export default function Navbar() {
  const { isLoaded, isSignedIn, user } = useUser();
  const navLinks = [
    { id: 1, title: "Home", link: "/" },
    { id: 2, title: "My Posts", link: "/posts" },
  ];

  if (!isLoaded || !isSignedIn) {
    return (
      <nav className="sticky top-0 max-w-screen z-49 w-full h-18 bg-white shadow flex justify-around items-center text-black">
        <Link href="/" className="hover:text-green-600">
          <Label className="text-xl font-extrabold uppercase">
            Post Template
          </Label>
        </Link>
        <div className="md:flex hidden flex-row gap-8">
          {navLinks.map((nav) => (
            <Link key={nav.id} href={nav.link} className="hover:text-green-600">
              <Label className="text-lg font-extrabold uppercase">
                {nav.title}
              </Label>
            </Link>
          ))}
        </div>
        <div className="md:flex hidden flex-row gap-2">
          <SignedOut>
            <Button>
              <Link href="/sign-in">
                <Label className="uppercase font-bold">Sign In</Label>
              </Link>
            </Button>
            <Button variant="outline">
              <Link href="/sign-up">
                <Label className="uppercase font-bold">Sign Up</Label>
              </Link>
            </Button>
          </SignedOut>
        </div>

        {/* Mobile Navigation*/}
        <div className="flex items-center md:hidden z-50">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost">
                <Menu></Menu>
              </Button>
            </SheetTrigger>
            <SheetContent className="md:hidden">
              <SheetHeader>
                <SheetTitle>
                  <Link href="/">
                    <Label className="text-xl font-extrabold uppercase">
                      Post Template
                    </Label>
                  </Link>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col px-4 gap-5 text-black md:hidden">
                {navLinks.map((nav) => (
                  <Link
                    key={nav.id}
                    href={nav.link}
                    className="border-b w-full"
                  >
                    <Label className="text-md font-extrabold uppercase pb-6">
                      {nav.title}
                    </Label>
                  </Link>
                ))}
              </div>
              <SheetFooter>
                <div className="md:hidden flex flex-col gap-2 text-black">
                  <Button>
                    <Link href="/sign-in">
                      <Label className="uppercase font-bold">Sign In</Label>
                    </Link>
                  </Button>
                  <Button variant="outline">
                    <Link href="/sign-up">
                      <Label className="uppercase font-bold">Sign Up</Label>
                    </Link>
                  </Button>
                </div>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    );
  }

  return (
    <nav className="sticky top-0 max-w-screen w-full h-18 bg-white/30 backdrop-blur-none shadow flex justify-around items-center z-50 text-black">
      <Link href="/" className="hover:text-green-600">
        <Label className="text-xl font-extrabold uppercase">
          Post Template
        </Label>
      </Link>
      <div className="md:flex hidden flex-row gap-8">
        {navLinks.map((nav) => (
          <Link key={nav.id} href={nav.link} className="hover:text-green-600">
            <Label className="text-lg font-extrabold uppercase">
              {nav.title}
            </Label>
          </Link>
        ))}
      </div>
      <div className="md:flex hidden flex-row gap-2">
        <SignedIn>
          <div className="flex justify-center items-center gap-4">
            <div>
              <Label className="uppercase font-bold">{user.fullName}</Label>
            </div>
            <UserButton></UserButton>
          </div>
        </SignedIn>
      </div>

      {/* Mobile Navigation*/}
      <div className="flex items-center md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant={"outline"}>
              <Menu></Menu>
            </Button>
          </SheetTrigger>
          <SheetContent className="md:hidden">
            <SheetHeader>
              <SheetTitle>
                <Link href="/">
                  <Label className="text-xl font-extrabold uppercase">
                    Post Template
                  </Label>
                </Link>
              </SheetTitle>
            </SheetHeader>
            <div className="flex flex-col px-4 gap-5 text-black md:hidden">
              {navLinks.map((nav) => (
                <Link key={nav.id} href={nav.link} className="border-b">
                  <Label className="text-md font-extrabold uppercase pb-6">
                    {nav.title}
                  </Label>
                </Link>
              ))}
            </div>
            <SheetFooter className="flex flex-row justify-around items-center">
              <div className="md:hidden flex flex-row gap-2 items-center text-black">
                <UserAvatar></UserAvatar>
                <Label className="uppercase font-semibold">
                  {user.fullName}
                </Label>
              </div>
              <div>
                <SignOutButton>
                  <Button variant="default">Sign Out</Button>
                </SignOutButton>
              </div>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
