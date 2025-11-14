import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Label } from "./ui/label";
import Link from "next/link";

interface CardLayoutProps {
  id: string;
  title: string;
  content: string;
  postedBy: string;
}

interface CardLayoutComponentProps {
  cards: CardLayoutProps[];
}

let MAX_CONTENT_LENGTH = 250;

const truncateText = (text: string) => {
  if (text.length <= MAX_CONTENT_LENGTH) return text;
  return text.slice(0, MAX_CONTENT_LENGTH) + "...";
};

export default function CardLayout({ cards }: CardLayoutComponentProps) {
  if (!cards || cards.length === 0) {
    return (
      <div className="w-full h-full flex items-center justify-center pt-8">
        <Label className="text-xl flex items-center flex-col gap-4">
          No posts available yet....{" "}
          <Button variant={"outline"}>
            <Link href="/create-post">Create a post</Link>
          </Button>
        </Label>
      </div>
    );
  }

  return (
    <div className="w-full h-full p-4">
      <main className="w-full h-full grid grid-cols-1 md:grid-rows-3 lg:grid-rows-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {cards.map((card) => (
          <Card
            key={card.id}
            className="max-h-[250px] transition-transform hover:scale-[1.02] flex flex-col"
          >
            <CardHeader className="w-full text-center">
              <h2 className="text-lg font-semibold">{card.title}</h2>
            </CardHeader>
            <CardContent className="w-full text-justify">
              <Label
                className={`text-sm text-gray-600 flex justify-center items-center flex-col md:${(MAX_CONTENT_LENGTH = 250)} ${(MAX_CONTENT_LENGTH = 100)}`}
              >
                {truncateText(card.content)}
                {card.content.length > MAX_CONTENT_LENGTH && (
                  <Link
                    href={`/posts/${card.id}`}
                    className="block mt-2 text-blue-600 hover:underline"
                  >
                    See more
                  </Link>
                )}
              </Label>
              <CardFooter className="flex justify-center items-center text-gray-400 pt-8">
                <Label>Posted by: {card.postedBy}</Label>
              </CardFooter>
            </CardContent>
          </Card>
        ))}
      </main>
    </div>
  );
}
