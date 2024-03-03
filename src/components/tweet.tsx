import {
  BarChart2,
  Bookmark,
  Heart,
  MessageCircle,
  Repeat2,
  Share,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const tweetStats = [
  {
    icon: (
      <MessageCircle
        size={20}
        className="max-[600px]:w-4 max-[600px]:min-w-4"
      />
    ),
    number: 242,
  },
  {
    icon: <Repeat2 size={20} className="max-[600px]:w-4 max-[600px]:min-w-4" />,
    number: 92,
  },
  {
    icon: <Heart size={20} className="max-[600px]:w-4 max-[600px]:min-w-4" />,
    number: 927,
  },
  {
    icon: (
      <BarChart2 size={20} className="max-[600px]:w-4 max-[600px]:min-w-4" />
    ),
    number: 284,
  },
];

export const Tweet = () => {
  return (
    <div className="flex w-full gap-2 items-start p-4 pb-0  border-y border-separator">
      <Image
        src={"https://github.com/iKitumba.png"}
        width={52}
        height={52}
        alt="Profile picture"
        className="rounded-full object-cover max-[600px]:w-10"
      />
      <div className="flex flex-col gap-1 flex-1">
        <p className="flex items-center gap-1 line-clamp-1 text-base">
          <strong className="text-gray-200">Alberto Kitumba</strong>
          <span className="text-gray-400 font-normal">@ikitumba</span>
        </p>
        <div className="text-base font-normal text-gray-200 line-clamp-5">
          Já estamos chegando a 100k inscritos. Então resolvi criar uma série
          nova exclusiva para membros, falando sobre os bastidores do canal.
          Esse é o piloto, onde eu conto sobre os desafios dos primeiros meses,
          monetização e publicidade.
        </div>
        <Link href={"/"} className="text-twitter mb-2">
          See more
        </Link>
        <Image
          src="https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          width={600}
          height={400}
          className="w-full aspect-video object-cover border border-separator rounded-2xl"
          alt=""
        />
        <div className="flex items-center gap-1 justify-between my-3">
          <div className="flex flex-1 gap-1 justify-between">
            {tweetStats.map((item, index) => (
              <button
                className="flex items-center gap-1 text-gray-400 hover:text-twitter py-2"
                key={index}
              >
                {item.icon}{" "}
                <span className="font-normal text-sm max-[600px]:text-xs">
                  {item.number}
                </span>
              </button>
            ))}
          </div>
          <div className="flex items-center gap-1">
            <button className="flex items-center gap-1 text-gray-400 hover:text-twitter p-2">
              <Bookmark
                size={20}
                className="max-[600px]:w-4 max-[600px]:min-w-4"
              />
            </button>
            <button className="flex items-center gap-1 text-gray-400 hover:text-twitter p-2">
              <Share
                size={20}
                className="max-[600px]:w-4 max-[600px]:min-w-4"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
