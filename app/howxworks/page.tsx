import Hero from "@/app/howxworks/_components/sections/Hero";
import SixtySecond from "@/app/howxworks/_components/sections/SixtySecond";
import Buckets from "@/app/howxworks/_components/sections/Buckets";
import Funnel from "@/app/howxworks/_components/sections/Funnel";
import Filters from "@/app/howxworks/_components/sections/Filters";
import Signals from "@/app/howxworks/_components/sections/Signals";
import ScoreSim from "@/app/howxworks/_components/sections/ScoreSim";
import Diversity from "@/app/howxworks/_components/sections/Diversity";
import Journey from "@/app/howxworks/_components/sections/Journey";
import FeedReRank from "@/app/howxworks/_components/sections/FeedReRank";
import Scorecard from "@/app/howxworks/_components/sections/Scorecard";
import Myths from "@/app/howxworks/_components/sections/Myths";
import SiteFooter from "@/app/howxworks/_components/sections/SiteFooter";

export default function Home() {
  return (
    <>
      <Hero />
      <SixtySecond />
      <Buckets />
      <Funnel />
      <Filters />
      <Signals />
      <ScoreSim />
      <Diversity />
      <Journey />
      <FeedReRank />
      <Scorecard />
      <Myths />
      <SiteFooter />
    </>
  );
}
