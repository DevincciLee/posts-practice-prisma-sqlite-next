import CardLayout from "@/components/cardlayout";
import { prisma } from "@/lib/prisma";

export default async function Home() {
  const posts = await prisma.post.findMany();

  return (
    <div className="h-screen w-screen">
      <main
        className={`w-full h-full ${
          posts.length === 0 ? "pt-4" : "flex justify-center items-center"
        }`}
      >
        <CardLayout cards={posts}></CardLayout>
      </main>
    </div>
  );
}
