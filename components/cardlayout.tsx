import { Card, CardContent, CardHeader } from "./ui/card";
import { Label } from "./ui/label";
import Link from "next/link";

interface CardLayoutProps {
  id: string;
  title: string;
  content: string;
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
      <div className="w-full h-full flex items-center justify-center">
        No cards available
      </div>
    );
  }

  return (
    <div className="w-full h-full p-4">
      <main className="w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {cards.map((card) => (
          <Card
            key={card.id}
            className="min-h-[200px] transition-transform hover:scale-[1.02] flex flex-col"
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
            </CardContent>
          </Card>
        ))}
      </main>
    </div>
  );
}
