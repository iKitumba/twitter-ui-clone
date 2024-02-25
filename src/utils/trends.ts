interface TwitterTrend {
  name: string;
  category: string;
  tweetVolume: number;
}

export const twitterTrends: TwitterTrend[] = [
  { name: "#typescript", category: "Programming", tweetVolume: 1500 },
  { name: "#javascript", category: "Programming", tweetVolume: 2500 },
  { name: "#reactjs", category: "Programming", tweetVolume: 1800 },
  { name: "#angular", category: "Programming", tweetVolume: 900 },
  { name: "#NodeJS", category: "Programming", tweetVolume: 1200 },
  { name: "#climatechange", category: "Environment", tweetVolume: 3000 },
  { name: "#covid19", category: "Health", tweetVolume: 5000 },
  { name: "#crypto", category: "Finance", tweetVolume: 2200 },
];

export function formatTweetVolume(tweetVolume: number): string {
  const formatter = new Intl.NumberFormat("en", {
    notation: "compact",
    compactDisplay: "short",
  });
  return formatter.format(tweetVolume);
}
