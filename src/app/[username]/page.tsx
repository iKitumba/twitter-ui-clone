"use client";
import React from "react";
import { Button } from "@/components/button";
import { DotsThree, SealCheck } from "@phosphor-icons/react/dist/ssr";
import { ArrowLeft, CalendarDays, Link2, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Tweet } from "@/components/tweet";
import { TweetContext } from "@/contexts/TweetContext";
import { useRouter } from "next/navigation";

type ProfilePageProps = {
  params: {
    username: string;
  };
};

const tabs = ["Posts", "Respostas", "Destaques", "Midia", "Curtidas"];

const ProfilePage = (props: ProfilePageProps) => {
  const [activeTab, setActiveTab] = React.useState(0);
  const { tweets } = React.useContext(TweetContext);
  const router = useRouter();

  return (
    <div className="flex flex-col">
      <header className="flex items-center w-full gap-4 h-14 bg-zinc-950 px-3 sticky top-0">
        <button
          onClick={() => router.back()}
          className="h-10 w-10 rounded-full transition-all flex items-center justify-center hover:bg-zinc-900"
        >
          <ArrowLeft size={20} />
        </button>
        <div className="flex flex-col">
          <strong className="font-black text-base">Cardi B</strong>
          <span className="font-normal text-sm text-zinc-400">32,2k posts</span>
        </div>
      </header>
      <div>
        <Image
          src={
            "https://pbs.twimg.com/profile_banners/866953267/1710194486/1500x500"
          }
          alt=""
          width={1500}
          height={500}
        />
        <div className="flex items-end justify-between -mt-16 px-3">
          <Image
            src={
              "https://pbs.twimg.com/profile_images/1767309806073704448/biHbGkLx_400x400.jpg"
            }
            alt=""
            width={134}
            height={134}
            className="rounded-full border-4 border-zinc-950 object-cover"
          />

          <div className="flex items-center gap-2 mb-6">
            <button className="h-8 w-8 flex items-center justify-center rounded-full border border-zinc-600 hover:bg-zinc-900">
              <DotsThree weight="bold" size={24} />
            </button>
            <Button>Follow</Button>
          </div>
        </div>

        <div className="flex flex-col gap-3 my-4 px-3">
          <div className="flex flex-col">
            <strong className="flex items-center gap-2">
              Cardi B{" "}
              <SealCheck className="text-twitter" size={24} weight="fill" />
            </strong>
            <span className="text-sm text-zinc-400">iamcardib</span>
          </div>
          <p className="text-base font-normal">Mrs.DANGEROUS</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-sm text-zinc-400 font-normal">
              <MapPin size={16} />
              In your mind rent free
            </span>
            <Link
              className="flex items-center gap-1 text-sm text-twitter font-normal"
              href={"#"}
            >
              <Link2 size={16} className="text-zinc-400" />
              Cardib.lnk.to/miami
            </Link>
          </div>
          <p className="flex items-center gap-1 text-sm text-zinc-400 font-normal -mt-3">
            <CalendarDays size={16} /> Ingressou em outubro de 2012
          </p>
          <div className="flex items-center gap-6">
            <p className="flex items-center gap-1 text-sm">
              <strong className="font-bold text-zinc-50">5</strong>
              <span className="text-zinc-400 font-normal"> Seguindo</span>
            </p>
            <p className="flex items-center gap-1 text-sm">
              <strong className="font-bold text-zinc-50">33,5 mi</strong>
              <span className="text-zinc-400 font-normal"> seguidores</span>
            </p>
          </div>

          <p className="text-zinc-400 font-normal text-xs">
            Não é seguido por ninguém que você segue
          </p>
        </div>
      </div>

      <section className="w-full flex flex-col gap-3">
        <header className="overflow-x-auto flex items-center flex-wrap max-w-full justify-between gap-2">
          {tabs.map((item, index) => (
            <button
              onClick={() => setActiveTab(index)}
              className={`p-3 hover:bg-zinc-900 text-base w-fit flex items-center justify-center ${
                activeTab === index
                  ? "text-zinc-50 font-bold border-b-[3px] border-twitter"
                  : "text-zinc-400 font-normal"
              }`}
              key={item}
            >
              {item}
            </button>
          ))}
        </header>

        <div className="flex flex-col">
          {tweets.map((item) => (
            <Tweet data={item} key={item.id} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProfilePage;
