"use client";
import { title } from "@/components/primitives";
import MyCard from "@/components/card";
import MyMusicPlayer from "@/components/musiplayer";
import MyCoverImage from "@/components/coverimage";

export default function CardsPage() {
  return (
    <div>
      <h1 className={title()}>Cards</h1>
      <div>
        <MyCard />
        <MyMusicPlayer />
        <MyCoverImage />
      </div>
    </div>
  );
}
