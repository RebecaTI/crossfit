import FindUs from "@/components/FindUs";
import JoinUs from "@/components/JoinUs";
import Hero from "@/components/Hero";
import PowerQuote from "@/components/PowerQuote";

export default function Home() {
  return (
    <div className=" min-h-screen min-w-screen background-page">
      <Hero />
      <PowerQuote />
      <JoinUs />
      <FindUs />
    </div>
  );
}
