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

export default function Navbar() {
  const navLinks = [
    { id: 1, title: "Home", link: "/" },
    { id: 2, title: "My Posts", link: "/posts" },
    { id: 3, title: "Create a Post", link: "/create-post" },
  ];

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
        <Button>
          <Label className="uppercase font-bold">Sign In</Label>
        </Button>
        <Button variant="outline">
          <Label className="uppercase font-bold">Sign Up</Label>
        </Button>
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
            <SheetFooter>
              <div className="md:hidden flex flex-col gap-2 text-black">
                <Button>
                  <Label className="uppercase font-bold">Sign In</Label>
                </Button>
                <Button variant="outline">
                  <Label className="uppercase font-bold">Sign Up</Label>
                </Button>
              </div>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
