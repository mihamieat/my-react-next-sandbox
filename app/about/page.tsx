"use client";
import { title } from "@/components/primitives";
import MyCard from "@/components/card";
import MyMusicPlayer from "@/components/musiplayer";
import MyCoverImage from "@/components/coverimage";

export default function AboutPage() {
  return (
    <div>
      <h1 className={title()}>About</h1>
      <div>
        <MyCard />
        <MyMusicPlayer />
        <MyCoverImage />
      </div>
    </div>
  );
}
