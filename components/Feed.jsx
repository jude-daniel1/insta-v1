import MiniProfile from "./MiniProfile";
import Posts from "./Posts";
import Stories from "./Stories";
import Suggestions from "./Suggestions";
import { useSession } from "next-auth/react";

const style = {
  first: "grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto",
  second: "grid grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto",
};

export default function Feed() {
  const { data: session } = useSession();
  return (
    <main className={session ? style.first : style.second}>
      <section className="md:col-span-2">
        {/* stories */}
        <Stories />
        {/* post */}
        <Posts />
      </section>
      <section className={`hidden md:inline-grid  md:col-span-1`}>
        <div className="fixed w-[380px]">
          {/* Mini Profile */}
          <MiniProfile />
          {/* suggestion */}
          <Suggestions />
        </div>
      </section>
    </main>
  );
}
