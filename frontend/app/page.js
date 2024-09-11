import FeedBack from "@/components/Home/FeedBack/FeedBack";
import Hero from "@/components/Home/Hero/Hero";
import Recommended from "@/components/Home/Recommended/Recommended";
import Specials from "@/components/Home/Specials/Specials";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <Hero />
      {/* Specials */}
      <Specials />
      {/* Recommended */}
      <Recommended />
      {/* FeedBacks */}
      <FeedBack />
    </main>
  );
}
