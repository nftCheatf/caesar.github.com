import React from 'react';
import { runningTextData } from '../data/mock';

const RunningBanner = () => {
  return (
    <div className="bg-red-600 text-white py-2 overflow-hidden relative">
      <div className="animate-marquee whitespace-nowrap">
        <span className="mx-8 font-bold">
          🔥 {runningTextData[0]} 🔥
        </span>
        <span className="mx-8 font-bold">
          ⏳ {runningTextData[1]} ⏳
        </span>
        <span className="mx-8 font-bold">
          🔥 {runningTextData[0]} 🔥
        </span>
        <span className="mx-8 font-bold">
          ⏳ {runningTextData[1]} ⏳
        </span>
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translate3d(100%, 0, 0); }
          100% { transform: translate3d(-100%, 0, 0); }
        }
        .animate-marquee {
          animation: marquee 15s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default RunningBanner;