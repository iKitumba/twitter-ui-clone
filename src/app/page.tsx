import { PublishForm } from "@/components/publish-form";
import { Tweet } from "@/components/tweet";
import { Settings } from "lucide-react";

export default function Home() {
  return (
    <>
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

      <PublishForm />

      <div className="flex flex-col pb-16">
        {Array.from({ length: 10 }).map((item, index) => (
          <Tweet key={index} />
        ))}
      </div>
    </>
  );
}
