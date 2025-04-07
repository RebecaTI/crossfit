import Events from "@/components/Home";
import FindUs from "@/components/FindUs";
import JoinUs from "@/components/JoinUs";

export default function Home() {
  return (
    <div className=" min-h-screen min-w-screen background-page">
      <Events />
      <JoinUs />
      <FindUs />
    </div>
  );
}
