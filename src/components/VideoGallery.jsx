
import React from "react";
import VideoCard from "./VideoCard";

const videoList = [
  {
    title: "Video Title 1",
    link: "4xTM8m4dIiQ", // YouTube Video ID
  },
  {
    title: "Video Title 2",
    link: "4xTM8m4dIiQ",
  },
  {
    title: "Video Title 3",
    link: "4xTM8m4dIiQ",
  },
  {
    title: "Video Title 4",
    link: "4xTM8m4dIiQ",
  },
  {
    title: "Video Title 5",
    link: "4xTM8m4dIiQ",
  },
  {
    title: "Video Title 6",
    link: "4xTM8m4dIiQ",
  },
  {
    title: "Video Title 7",
    link: "4xTM8m4dIiQ",
  },
  {
    title: "Video Title 8",
    link: "4xTM8m4dIiQ",
  },
];

const VideoGallery = () => {
  return (
    <section className="py-16 px-4 sm:px-8 lg:px-20 bg-white">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
        Product Videos
      </h2>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center">
        {videoList.map((video, idx) => (
          <VideoCard key={idx} title={video.title} link={video.link} />
        ))}
      </div>
    </section>
  );
};

export default VideoGallery;
