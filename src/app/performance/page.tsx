import performanceImg from "/public/performance.jpg"; // '/public' is shorcut for the public directory
import Hero from "@/components/Hero";

export default function PerformancePage() {
  return (
    <Hero imgData={performanceImg} imgAlt="welding" title="We serve high performance applications" />
  );
};
