import reliabilityImg from "/public/reliability.jpg"; // '/public' is shorcut for the public directory
import Hero from "@/components/Hero";

export default function ReliabilityPage() {
  return (
    <Hero imgData={reliabilityImg} imgAlt="man welding" title="We make reliable products" />
  );
};