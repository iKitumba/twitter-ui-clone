"use client";
import React from "react";

export type ITweet = {
  id: string;
  comments: number;
  shares: number;
  likes: number;
  content: string;
};

type TweetContextProps = {
  tweets: ITweet[];
  handleTweet: (text: string) => void;
};

export const TweetContext = React.createContext<TweetContextProps>(
  {} as TweetContextProps
);

type TweetContextProviderProps = {
  children: React.ReactNode;
};

const INITIAL_TWEETS = [
  {
    id: Math.random().toString(36).slice(2),
    comments: 102,
    shares: 12,
    likes: 96,
    content:
      "Já estamos chegando a 100k inscritos. Então resolvi criar uma série nova exclusiva para membros, falando sobre os bastidores do canal. Esse é o piloto, onde eu conto sobre os desafios dos primeiros meses, monetização e publicidade.",
  },
  {
    id: Math.random().toString(36).slice(2),
    comments: 102,
    shares: 12,
    likes: 96,
    content:
      "Já estamos chegando a 100k inscritos. Então resolvi criar uma série nova exclusiva para membros, falando sobre os bastidores do canal. Esse é o piloto, onde eu conto sobre os desafios dos primeiros meses, monetização e publicidade.",
  },
  {
    id: Math.random().toString(36).slice(2),
    comments: 102,
    shares: 12,
    likes: 96,
    content:
      "Já estamos chegando a 100k inscritos. Então resolvi criar uma série nova exclusiva para membros, falando sobre os bastidores do canal. Esse é o piloto, onde eu conto sobre os desafios dos primeiros meses, monetização e publicidade.",
  },
  {
    id: Math.random().toString(36).slice(2),
    comments: 102,
    shares: 12,
    likes: 96,
    content:
      "Já estamos chegando a 100k inscritos. Então resolvi criar uma série nova exclusiva para membros, falando sobre os bastidores do canal. Esse é o piloto, onde eu conto sobre os desafios dos primeiros meses, monetização e publicidade.",
  },
  {
    id: Math.random().toString(36).slice(2),
    comments: 102,
    shares: 12,
    likes: 96,
    content:
      "Já estamos chegando a 100k inscritos. Então resolvi criar uma série nova exclusiva para membros, falando sobre os bastidores do canal. Esse é o piloto, onde eu conto sobre os desafios dos primeiros meses, monetização e publicidade.",
  },
  {
    id: Math.random().toString(36).slice(2),
    comments: 102,
    shares: 12,
    likes: 96,
    content:
      "Já estamos chegando a 100k inscritos. Então resolvi criar uma série nova exclusiva para membros, falando sobre os bastidores do canal. Esse é o piloto, onde eu conto sobre os desafios dos primeiros meses, monetização e publicidade.",
  },
  {
    id: Math.random().toString(36).slice(2),
    comments: 102,
    shares: 12,
    likes: 96,
    content:
      "Já estamos chegando a 100k inscritos. Então resolvi criar uma série nova exclusiva para membros, falando sobre os bastidores do canal. Esse é o piloto, onde eu conto sobre os desafios dos primeiros meses, monetização e publicidade.",
  },
  {
    id: Math.random().toString(36).slice(2),
    comments: 102,
    shares: 12,
    likes: 96,
    content:
      "Já estamos chegando a 100k inscritos. Então resolvi criar uma série nova exclusiva para membros, falando sobre os bastidores do canal. Esse é o piloto, onde eu conto sobre os desafios dos primeiros meses, monetização e publicidade.",
  },
  {
    id: Math.random().toString(36).slice(2),
    comments: 102,
    shares: 12,
    likes: 96,
    content:
      "Já estamos chegando a 100k inscritos. Então resolvi criar uma série nova exclusiva para membros, falando sobre os bastidores do canal. Esse é o piloto, onde eu conto sobre os desafios dos primeiros meses, monetização e publicidade.",
  },
  {
    id: Math.random().toString(36).slice(2),
    comments: 102,
    shares: 12,
    likes: 96,
    content:
      "Já estamos chegando a 100k inscritos. Então resolvi criar uma série nova exclusiva para membros, falando sobre os bastidores do canal. Esse é o piloto, onde eu conto sobre os desafios dos primeiros meses, monetização e publicidade.",
  },
  {
    id: Math.random().toString(36).slice(2),
    comments: 102,
    shares: 12,
    likes: 96,
    content:
      "Já estamos chegando a 100k inscritos. Então resolvi criar uma série nova exclusiva para membros, falando sobre os bastidores do canal. Esse é o piloto, onde eu conto sobre os desafios dos primeiros meses, monetização e publicidade.",
  },
];

export const TweetContextProvider = (props: TweetContextProviderProps) => {
  const [tweets, setTweets] = React.useState<ITweet[]>(INITIAL_TWEETS);

  const generateRandomId = () => {
    return Math.random().toString(36).slice(2);
  };

  const generateRandomIntNumber = () => {
    return Math.ceil(Math.random() * 200);
  };

  const handleTweet = (text: string) => {
    setTweets((prev) => [
      ...prev,
      {
        comments: 0,
        content: text,
        id: generateRandomId(),
        likes: generateRandomIntNumber(),
        shares: generateRandomIntNumber(),
      },
    ]);
  };

  const value = {
    tweets,
    handleTweet,
  };

  return (
    <TweetContext.Provider value={value}>
      {props.children}
    </TweetContext.Provider>
  );
};
