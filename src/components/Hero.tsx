//called hero because if image is the background its called a hero image

import Image from "next/image"; //next will take an img and resize it depending on the size of the screen also will prevent layout shift watch video 11. in nextjs course in udemy to explain
import type { StaticImageData } from "next/image"; //next has library of types


interface HeroProps {
  imgData: StaticImageData; //img file in /public
  imgAlt: string;
  title: string
};

export default function Hero( props: HeroProps){
  return (
    <div className="relative h-screen">
        <div className="absolute -z-10 inset-0">
          <Image 
            src={props.imgData}
            alt={props.imgAlt}
            fill
            style={{ objectFit: 'cover'  }} 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900" />
        </div>
        <div className="pt-48 flex justify-center items-center">
            <h1 className="text-white text-6xl">{props.title}</h1>
        </div>
    </div>
  );
};

// fill prop in image is fill the whole background with this image as possible
// inset-0 also means expand and fill up the whole page as possible
// <div className="absolute inset-0 bg-gradient-to-r from-slate-900" /> this adds blurring affect in the image background (gradient from left to right)


