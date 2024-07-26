"use client";

import React from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { title } from "@/components/primitives";
import MyMusicPlayer from "@/components/musiplayer";
import MyCard from "@/components/card";
import MyCoverImage from "@/components/coverimage";

export default function App() {
  return (
    <div className="flex w-full flex-col">
      <h1 className={title()}>Tabs</h1>
      <Tabs aria-label="Options">
        <Tab key="photos" title="Photos">
          <Card>
            <CardBody>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </CardBody>
          </Card>
          <MyCard />
        </Tab>
        <Tab key="music" title="Music">
          <MyMusicPlayer />
        </Tab>
        <Tab key="videos" title="Videos">
          <MyCoverImage />
          <Card>
            <CardBody>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}
