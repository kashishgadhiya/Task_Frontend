
import React from "react";

const VideoCard = ({ title, link }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden w-full max-w-sm">
      <div className="relative">
        <iframe
          className="w-full h-48"
          src={`https://www.youtube.com/embed/${link}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">{title}</h3>
        <button className="px-5 py-2 border-2 border-orange-500 text-orange-500 font-semibold rounded-full hover:bg-orange-500 hover:text-white transition-colors duration-200 cursor-pointer">
          Get Quote
        </button>
      </div>
    </div>
  );
};

export default VideoCard;
