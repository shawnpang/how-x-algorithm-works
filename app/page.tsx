import Hero from "@/app/components/sections/Hero";
import SixtySeconds from "@/app/components/sections/SixtySeconds";
import CandidateSources from "@/app/components/sections/CandidateSources";
import Funnel from "@/app/components/sections/Funnel";
import Filters from "@/app/components/sections/Filters";
import NineteenReactions from "@/app/components/sections/NineteenReactions";
import BoostsVsDemotes from "@/app/components/sections/BoostsVsDemotes";
import SpecialRules from "@/app/components/sections/SpecialRules";
import CreatorTakeaways from "@/app/components/sections/CreatorTakeaways";
import MythBusting from "@/app/components/sections/MythBusting";
import Footer from "@/app/components/sections/Footer";

/* DESIGN: ONE-PAGER COMPOSITION — sections render top-to-bottom in narrative order.
   Visuals are intentionally minimal; each section carries its own DESIGN annotation. */

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <SixtySeconds />
      <CandidateSources />
      <Funnel />
      <Filters />
      <NineteenReactions />
      <BoostsVsDemotes />
      <SpecialRules />
      <CreatorTakeaways />
      <MythBusting />
      <Footer />
    </main>
  );
}
