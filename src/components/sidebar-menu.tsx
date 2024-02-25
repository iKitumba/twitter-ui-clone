import { DotsThree, House, TwitterLogo } from "@phosphor-icons/react/dist/ssr";
import {
  Bell,
  Bookmark,
  CircleEllipsis,
  HashIcon,
  Mail,
  NotepadText,
  User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
export const Sidebarmenu = () => {
  return (
    <aside className="min-h-screen sticky top-0 left-0 w-64 py-3 px-6 flex flex-col justify-between">
      <div className="flex flex-col">
        <Link
          href={"/"}
          className="flex items-center hover:bg-zinc-900 rounded-full gap-5 p-3 text-gray-300"
        >
          <TwitterLogo weight="fill" size={32} />
        </Link>
        <Link
          href={"/"}
          className="flex items-center hover:bg-zinc-900 rounded-full gap-5 p-3 text-gray-300"
        >
          <House weight="fill" size={24} />
          <span>Home</span>
        </Link>
        <Link
          href={"/"}
          className="flex items-center hover:bg-zinc-900 rounded-full gap-5 p-3 text-gray-300"
        >
          <HashIcon size={24} />
          <span>Explore</span>
        </Link>
        <Link
          href={"/"}
          className="flex items-center hover:bg-zinc-900 rounded-full gap-5 p-3 text-gray-300"
        >
          <Bell size={24} />
          <span>Notification</span>
        </Link>
        <Link
          href={"/"}
          className="flex items-center hover:bg-zinc-900 rounded-full gap-5 p-3 text-gray-300"
        >
          <Mail size={24} />
          <span>Messages</span>
        </Link>
        <Link
          href={"/"}
          className="flex items-center hover:bg-zinc-900 rounded-full gap-5 p-3 text-gray-300"
        >
          <Bookmark size={24} />
          <span>Bookmarks</span>
        </Link>
        <Link
          href={"/"}
          className="flex items-center hover:bg-zinc-900 rounded-full gap-5 p-3 text-gray-300"
        >
          <NotepadText size={24} />
          <span>Lists</span>
        </Link>
        <Link
          href={"/"}
          className="flex items-center hover:bg-zinc-900 rounded-full gap-5 p-3 text-gray-300"
        >
          <User size={24} />
          <span>Profile</span>
        </Link>
        <Link
          href={"/"}
          className="flex items-center hover:bg-zinc-900 rounded-full gap-5 p-3 text-gray-300"
        >
          <CircleEllipsis size={24} />
          <span>More</span>
        </Link>
        <Link
          href={"/"}
          className="flex items-center justify-center mt-4 bg-twitter hover:bg-twitterhover rounded-full gap-5 p-3 text-gray-300"
        >
          Tweet
        </Link>
      </div>
      <footer className="flex items-center justify-between">
        <div className="flex gap-1">
          <Image
            src={"https://github.com/iKitumba.png"}
            width={52}
            height={52}
            alt="Profile picture"
            className="rounded-full object-cover"
          />
          <div className="flex flex-col">
            <strong className="text-zinc-100 text-base font-bold line-clamp-1">
              Alberto Kitumba
            </strong>
            <span className="text-zinc-300 text-base line-clamp-1">
              @iKitumba
            </span>
          </div>
        </div>
        <button className="p-2 rounded-full hover:bg-zinc-800">
          <DotsThree weight="bold" size={20} />
        </button>
      </footer>
    </aside>
  );
};
