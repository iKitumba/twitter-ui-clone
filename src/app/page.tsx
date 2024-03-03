import { BottomNavigationBar } from "@/components/bottom-navigation-bar";
import { Rightbar } from "@/components/rightbar";
import { Sidebarmenu } from "@/components/sidebar-menu";
import { Tweet } from "@/components/tweet";
import {
  Gift,
  ImageIcon,
  LayoutList,
  MapPin,
  NotebookPen,
  Settings,
  Smile,
} from "lucide-react";
import Image from "next/image";

const textAreaIcons = [
  {
    icon: <ImageIcon size={20} />,
  },
  {
    icon: <Gift size={20} />,
  },
  {
    icon: <LayoutList size={20} />,
  },
  {
    icon: <Smile size={20} />,
  },
  {
    icon: <NotebookPen size={20} />,
  },
  {
    icon: <MapPin size={20} />,
  },
];

export default function Home() {
  return (
    <main className="max-w-[1260px] mx-auto min-h-screen flex gap-6 items-start justify-evenly">
      <Sidebarmenu />
      <article className="flex-1 min-h-[300vh] border-x border-separator max-w-[600px]">
        <header className="flex items-center justify-between gap-3 border-b border-separator">
          <div className="flex-1 flex">
            <button className="flex-1 px-4 py-6 max-[600px]:py-4 hover:bg-zinc-900 font-bold text-sm text-zinc-300 transition-all hover:text-gray-400">
              For you
            </button>
            <button className="flex-1 px-4 py-6 max-[600px]:py-4 hover:bg-zinc-900 font-normal text-sm text-gray-400 transition-all hover:text-gray-400">
              Following
            </button>
          </div>
          <button className="rounded-full w-11 h-11 text-gray-50 hover:bg-zinc-800 p-3 mr-3 flex items-center justify-center">
            <Settings size={24} />
          </button>
        </header>

        <div className="flex gap-2 items-start mt-5 px-4 max-[600px]:hidden">
          <Image
            src={"https://github.com/iKitumba.png"}
            width={52}
            height={52}
            alt="Profile picture"
            className="rounded-full object-cover"
          />
          <div className="flex flex-col gap-2 flex-1">
            <textarea
              className="resize-y p-3 border-none outline-none bg-transparent placeholder:text-xl placeholder:font-normal placeholder:text-gray-400 text-xl text-gray-50 font-medium"
              placeholder="Whats happening?"
            ></textarea>
            <div className="flex items-center justify-between gap-4 flex-wrap border-t border-separator py-2">
              <div className="flex items-center gap-1">
                {textAreaIcons.map((item, index) => (
                  <button
                    className="w-8 h-8 rounded-full text-twitter hover:bg-gray-900 flex items-center justify-center transition-all"
                    key={index}
                  >
                    {item.icon}
                  </button>
                ))}
              </div>
              <button className="h-10 px-6 bg-twitter rounded-full flex items-center justify-center font-bold text-gray-200 hover:bg-twitterhover">
                Tweet
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col pb-16">
          {Array.from({ length: 10 }).map((item, index) => (
            <Tweet key={index} />
          ))}
        </div>
      </article>
      <Rightbar />

      <BottomNavigationBar />
    </main>
  );
}
