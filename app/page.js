import FullItenary from "./_components/FullItenary";
import Gallery from "./_components/Gallery";
import Hero from "./_components/Hero";
import ItenaryCost from "./_components/ItenaryCost";
import ItenaryOverview from "./_components/ItenaryOverview";

export default function Home() {
  return (
    <main>
      <Hero />
      <ItenaryOverview />
      <Gallery />

      <FullItenary />

      <ItenaryCost />
    </main>
  )
}