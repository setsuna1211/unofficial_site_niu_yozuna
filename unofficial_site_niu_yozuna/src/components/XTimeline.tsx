"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";

declare global {
  interface Window {
    twttr?: {
      widgets: {
        load: () => void;
      };
    };
  }
}

interface TwitterTimelineProps {
  target: string;
}

export default function TwitterTimeline({ target }: TwitterTimelineProps) {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.twttr && window.twttr.widgets) {
      window.twttr.widgets.load();
    }
  }, []);

  return (
    <div className="flex justify-center my-4">
      <div ref={timelineRef} className="max-w-[500px] w-full">
        <a
          className="twitter-timeline"
          data-theme="light"
          data-width="500"
          data-height="600"
          href={`https://twitter.com/${target}`}
        >
          Tweets by niu_yozuna
        </a>
      </div>

      {/* Twitter の埋め込みスクリプトをロード */}
      <Script
        src="https://platform.twitter.com/widgets.js"
        strategy="lazyOnload"
        onLoad={() => {
          if (window.twttr && window.twttr.widgets) {
            window.twttr.widgets.load();
          }
        }}
      />
    </div>
  );
}
