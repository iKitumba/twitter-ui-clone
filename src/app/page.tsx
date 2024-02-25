import { Rightbar } from "@/components/rightbar";
import { Sidebarmenu } from "@/components/sidebar-menu";
export default function Home() {
  return (
    <main className="max-w-[1260px] mx-auto min-h-screen flex gap-6 items-start">
      <Sidebarmenu />
      <article className="flex-1 bg-blue-400 min-h-[300vh]"></article>
      <Rightbar />
    </main>
  );
}
