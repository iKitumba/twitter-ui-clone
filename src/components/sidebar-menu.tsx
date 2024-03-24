import { DotsThree, House, TwitterLogo } from "@phosphor-icons/react/dist/ssr";
import {
  Bell,
  Bookmark,
  CircleEllipsis,
  HashIcon,
  Mail,
  NotebookPen,
  NotepadText,
  User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
export const SidebarMenu = () => {
  return (
    <aside className="min-h-screen sticky top-0 left-0 2xl:w-64 w-20 py-3 2xl:px-6 pl-3 flex flex-col justify-between max-[600px]:hidden">
      <div className="flex flex-col">
        <Link
          href={"/"}
          className="flex items-center min-w-10 min-h-10 hover:bg-zinc-900 rounded-full gap-5 p-3 text-gray-300"
        >
          <TwitterLogo weight="fill" size={32} className="min-w-8 min-h-8" />
        </Link>
        <Link
          href={"/"}
          className="flex items-center min-w-10 min-h-10 hover:bg-zinc-900 rounded-full gap-5 p-3 text-gray-300"
        >
          <House weight="fill" size={24} className="min-w-6 min-h-6" />
          <span className="hidden 2xl:flex">Home</span>
        </Link>
        <Link
          href={"/"}
          className="flex items-center min-w-10 min-h-10 hover:bg-zinc-900 rounded-full gap-5 p-3 text-gray-300"
        >
          <HashIcon size={24} className="min-w-6 min-h-6" />
          <span className="hidden 2xl:flex">Explore</span>
        </Link>
        <Link
          href={"/"}
          className="flex items-center min-w-10 min-h-10 hover:bg-zinc-900 rounded-full gap-5 p-3 text-gray-300"
        >
          <Bell size={24} className="min-w-6 min-h-6" />
          <span className="hidden 2xl:flex">Notification</span>
        </Link>
        <Link
          href={"/"}
          className="flex items-center min-w-10 min-h-10 hover:bg-zinc-900 rounded-full gap-5 p-3 text-gray-300"
        >
          <Mail size={24} className="min-w-6 min-h-6" />
          <span className="hidden 2xl:flex">Messages</span>
        </Link>
        <Link
          href={"/"}
          className="flex items-center min-w-10 min-h-10 hover:bg-zinc-900 rounded-full gap-5 p-3 text-gray-300"
        >
          <Bookmark size={24} className="min-w-6 min-h-6" />
          <span className="hidden 2xl:flex">Bookmarks</span>
        </Link>
        <Link
          href={"/"}
          className="flex items-center min-w-10 min-h-10 hover:bg-zinc-900 rounded-full gap-5 p-3 text-gray-300"
        >
          <NotepadText size={24} className="min-w-6 min-h-6" />
          <span className="hidden 2xl:flex">Lists</span>
        </Link>
        <Link
          href={"/"}
          className="flex items-center min-w-10 min-h-10 hover:bg-zinc-900 rounded-full gap-5 p-3 text-gray-300"
        >
          <User size={24} className="min-w-6 min-h-6" />
          <span className="hidden 2xl:flex">Profile</span>
        </Link>
        <Link
          href={"/"}
          className="flex items-center min-w-10 min-h-10 hover:bg-zinc-900 rounded-full gap-5 p-3 text-gray-300"
        >
          <CircleEllipsis size={24} className="min-w-6 min-h-6" />
          <span className="hidden 2xl:flex">More</span>
        </Link>
        <Link
          href={"/"}
          className="flex items-center w-14 h-14 justify-center mt-4 bg-twitter hover:bg-twitterhover rounded-full gap-5 p-3 text-gray-300 2xl:self-start 2xl:min-w-full"
        >
          <NotebookPen size={24} className="flex 2xl:hidden" />
          <span className="hidden 2xl:flex">Tweet</span>
        </Link>
      </div>
      <footer className="flex items-center justify-between">
        <div className="flex gap-1 items-center">
          <Image
            src={"https://github.com/iKitumba.png"}
            width={52}
            height={52}
            alt="Profile picture"
            className="rounded-full object-cover min-w-10 min-h10"
          />
          <div className="hidden flex-col 2xl:flex">
            <strong className="text-zinc-100 text-sm font-bold line-clamp-1">
              Alberto Kitumba
            </strong>
            <span className="text-zinc-400 text-sm font-normal line-clamp-1">
              @iKitumba
            </span>
          </div>
        </div>
        <button className="p-2 rounded-full hover:bg-zinc-800 hidden 2xl:flex">
          <DotsThree weight="bold" size={20} />
        </button>
      </footer>
    </aside>
  );
};
