import CardLayout from "@/components/cardlayout";

export default function Home() {
  return (
    <div className="h-full w-screen">
      <main className="w-full h-full flex justify-center items-center">
        <CardLayout
          cards={[
            {
              id: "1",
              title: "Card 1",
              content: "This is the content of card 1.",
            },
            {
              id: "2",
              title: "Card 2",
              content: "This is the content of card 2.",
            },
            {
              id: "3",
              title: "Card 3",
              content: "This is the content of card 3.",
            },
            {
              id: "4",
              title: "Card 4",
              content: "This is the content of card 4.",
            },
            {
              id: "5",
              title: "Card 5",
              content:
                "This is the content of card 5. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            },
            {
              id: "6",
              title: "Card 6",
              content: "This is the content of card 6.",
            },
            {
              id: "7",
              title: "Card 7",
              content: "This is the content of card 7.",
            },
            {
              id: "8",
              title: "Card 8",
              content: "This is the content of card 8.",
            },
            {
              id: "9",
              title: "Card 9",
              content: "This is the content of card 9.",
            },
            {
              id: "10",
              title: "Card 10",
              content: "This is the content of card 10.",
            },
          ]}
        ></CardLayout>
      </main>
    </div>
  );
}
