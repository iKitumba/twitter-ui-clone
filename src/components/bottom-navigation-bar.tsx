import { House } from "@phosphor-icons/react/dist/ssr";
import { BellIcon, Mail, NotebookPen, Search } from "lucide-react";
import Link from "next/link";
import React from "react";

export const BottomNavigationBar = () => {
  return (
    <div className="hidden max-[600px]:flex items-center gap-2 justify-between px-6 fixed bottom-0 left-0 right-0 h-14 w-full bg-zinc-950">
      <Link href={"#"}>
        <House size={24} weight="fill" />
      </Link>
      <Link href={"#"}>
        <Search size={24} />
      </Link>
      <Link href={"#"}>
        <BellIcon size={24} />
      </Link>
      <Link href={"#"}>
        <Mail size={24} />
      </Link>

      <Link
        href={"/"}
        className="hidden absolute shadow-lg -top-[6rem] right-6 items-center w-14 h-14 justify-center mt-4 bg-twitter hover:bg-twitterhover rounded-full gap-5 p-3 text-gray-300 2xl:self-start max-[600px]:flex"
      >
        <NotebookPen size={24} className="flex 2xl:hidden" />
      </Link>
    </div>
  );
};
