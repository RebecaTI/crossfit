import FindUs from "@/components/FindUs";
import JoinUs from "@/components/JoinUs";
import PowerQuote from "@/components/PowerQuote";
import { HealthGoal } from "@/components/HealthGoal";
import HeroSection from "@/components/hero";

export default function Home() {
  return (
    <div className="  background-page">
      <HeroSection />
      <PowerQuote />
      <HealthGoal />
      <JoinUs />
      <FindUs />
    </div>
  );
}
