import React from "react";
import TweetCard from "./TweetCard";

const Contents = () => {
  return (
    <div className=" w-[800px] h-screen ml-72 border-r border-gray-200 relative max-lg:ml-16  max-lg: mr-5">
      <div className="h-[76px] w-[50rem] fixed bg-white">
        <div className="px-4 text-lg font-semibold ">Home</div>
      </div>
      <TweetCard />
      <TweetCard />
    </div>
  );
};

export default Contents;
