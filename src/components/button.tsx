import React from "react";

type ButtonProps = {
  children: React.ReactNode;
};

export const Button = (props: ButtonProps) => {
  return (
    <button className="py-2 px-4 rounded-full bg-zinc-50 text-zinc-800 text-xs hover:bg-zinc-200 font-bold">
      {props.children}
    </button>
  );
};
