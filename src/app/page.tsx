//For routing in Nextjs it needs to be in the app folder 
//page.tsx in app folder is the home page or '/'
//but page.tsx in folder 'scale'in the app folder  will be '/scale'
//and page.tsx in folder 'team' in folder 'scale'in the app folder will be '/scale/team'
//the name of a folder with page.tsx will be the name of the route and page.tsx will have whats in that route

import homeImg from "/public/home.jpg"; // '/public' is shorcut for the public directory
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <Hero imgData={homeImg} imgAlt="car factory" title="Professional Cloud Hosting" />
  );
};

