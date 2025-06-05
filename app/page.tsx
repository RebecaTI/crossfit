import FindUs from "@/components/FindUs";
import JoinUs from "@/components/JoinUs";
import Hero from "@/components/Hero";
import PowerQuote from "@/components/PowerQuote";
import { HealthGoal } from "@/components/HealthGoal";

export default function Home() {
  return (
    <div className="  background-page">
      <Hero />
      <PowerQuote />
      <HealthGoal />
      <JoinUs />
      <FindUs />
    </div>
  );
}
