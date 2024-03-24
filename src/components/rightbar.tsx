import { formatTweetVolume, twitterTrends } from "@/utils/trends";
import { DotsThree } from "@phosphor-icons/react/dist/ssr";
import { Search, Settings } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "./button";

export const RightBar = () => {
  return (
    <div className="min-h-screen w-[360px] sticky top-0 right-0 py-3 pr-6 hidden flex-col gap-4 lg:flex">
      <label className="flex items-center gap-2 h-12 bg-zinc-900 rounded-full py-2 px-4">
        <Search size={16} className="text-gray-400" />
        <input
          type="search"
          className="flex-1 h-full border-none bg-transparent outline-none placeholder:font-normal"
          placeholder="Search"
        />
      </label>

      <section className="bg-zinc-900 rounded-3xl py-4 flex flex-col gap-2">
        <header className="flex items-center px-4 justify-between text-gray-200">
          <h2 className="text-xl font-extrabold">Trends for you</h2>
          <button>
            <Settings size={20} />
          </button>
        </header>

        {twitterTrends.map((item, index) => (
          <button
            key={index}
            className="flex flex-col px-4 py-2 hover:bg-zinc-800"
          >
            <div className="w-full flex items-center gap-2 justify-between">
              <span className="line-clamp-1 text-xs text-gray-400 font-normal">
                {item.category} Trending in Angola
              </span>
              <DotsThree size={20} />
            </div>
            <strong className="text-base font-bold">{item.name}</strong>
            <span className="line-clamp-1 text-xs text-gray-400 font-normal">
              {formatTweetVolume(item.tweetVolume)} posts
            </span>
          </button>
        ))}
      </section>

      <section className="bg-zinc-900 rounded-3xl py-4 flex flex-col gap-2">
        <header className="flex items-center px-3 justify-between text-gray-200">
          <h2 className="text-xl font-extrabold">Who to follow</h2>
        </header>

        {[1, 2, 3].map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between px-4 py-1 hover:bg-zinc-800 cursor-pointer"
          >
            <div className="flex gap-1 items-center">
              <Image
                src={
                  "https://pbs.twimg.com/profile_images/1767309806073704448/biHbGkLx_400x400.jpg"
                }
                width={52}
                height={52}
                alt="Profile picture"
                className="rounded-full object-cover"
              />
              <div className="flex flex-col">
                <strong className="text-zinc-100 text-sm font-bold line-clamp-1">
                  Cardi B
                </strong>
                <span className="text-zinc-400 text-sm font-normal line-clamp-1">
                  @iamcardib
                </span>
              </div>
            </div>
            <Button>Follow</Button>
          </div>
        ))}
      </section>
    </div>
  );
};
