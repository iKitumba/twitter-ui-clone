import { Sidebarmenu } from "@/components/sidebar-menu";

export default function Home() {
  return (
    <main className="max-w-[1260px] mx-automin-h-screen flex gap-6 items-start">
      <Sidebarmenu />
      <article className="flex-1 bg-blue-400 min-h-[300vh]"></article>
      <div className="min-h-screen w-80 bg-teal-500 sticky top-0 right-0"></div>
    </main>
  );
}
