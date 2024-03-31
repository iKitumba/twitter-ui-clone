import { ITweet } from "@/contexts/TweetContext";
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

type TweetProps = {
  data: ITweet;
};

export const Tweet = (props: TweetProps) => {
  const tweetStats = [
    {
      icon: (
        <MessageCircle
          size={20}
          className="max-[600px]:w-4 max-[600px]:min-w-4"
        />
      ),
      number: props.data.comments,
    },
    {
      icon: (
        <Repeat2 size={20} className="max-[600px]:w-4 max-[600px]:min-w-4" />
      ),
      number: props.data.shares,
    },
    {
      icon: <Heart size={20} className="max-[600px]:w-4 max-[600px]:min-w-4" />,
      number: props.data.likes,
    },
    {
      icon: (
        <BarChart2 size={20} className="max-[600px]:w-4 max-[600px]:min-w-4" />
      ),
      number: 284,
    },
  ];

  return (
    <div className="flex w-full gap-2 items-start p-4 pb-0  border-y border-separator">
      <Link href={"/iamcardib"}>
        <Image
          src={
            "https://pbs.twimg.com/profile_images/1767309806073704448/biHbGkLx_400x400.jpg"
          }
          width={52}
          height={52}
          alt="Profile picture"
          className="rounded-full object-cover max-[600px]:w-10"
        />
      </Link>
      <div className="flex flex-col gap-1 flex-1">
        <p className="flex items-center gap-1 line-clamp-1 text-base">
          <strong className="text-gray-200">Cardi B</strong>
          <span className="text-gray-400 font-normal">@iamcardib</span>
        </p>
        <div className="text-base font-normal text-gray-200 line-clamp-5">
          {props.data.content}
        </div>
        <Link href={"/"} className="text-twitter mb-2">
          See more
        </Link>
        <Image
          src="https://pbs.twimg.com/media/GJO-pqsaEAAVz39?format=jpg&name=large"
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
