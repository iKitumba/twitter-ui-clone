import {
  Gift,
  ImageIcon,
  LayoutList,
  MapPin,
  NotebookPen,
  Smile,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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

export const PublishForm = () => {
  return (
    <div className="flex gap-2 items-start mt-5 px-4 max-[600px]:hidden">
      <Link href={"/iamcardib"}>
        <Image
          src={
            "https://pbs.twimg.com/profile_images/1767309806073704448/biHbGkLx_400x400.jpg"
          }
          width={52}
          height={52}
          alt="Profile picture"
          className="rounded-full object-cover"
        />
      </Link>
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
  );
};
