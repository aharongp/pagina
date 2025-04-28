import { useState, useEffect } from 'react';

interface TimerProps {
  initialHours: number;
}

export function Timer({ initialHours }: TimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    hours: initialHours,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(current => {
        const totalSeconds = current.hours * 3600 + current.minutes * 60 + current.seconds - 1;
        
        if (totalSeconds < 0) {
          clearInterval(timer);
          return { hours: 0, minutes: 0, seconds: 0 };
        }

        return {
          hours: Math.floor(totalSeconds / 3600),
          minutes: Math.floor((totalSeconds % 3600) / 60),
          seconds: totalSeconds % 60
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center gap-4 text-[#d5aaaa] font-mono">
      <div className="flex flex-col items-center">
        <span className="text-2xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</span>
        <span className="text-xs">HOURS</span>
      </div>
      <span className="text-2xl font-bold">:</span>
      <div className="flex flex-col items-center">
        <span className="text-2xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</span>
        <span className="text-xs">MINUTES</span>
      </div>
      <span className="text-2xl font-bold">:</span>
      <div className="flex flex-col items-center">
        <span className="text-2xl font-bold">{String(timeLeft.seconds).padStart(2, '0')}</span>
        <span className="text-xs">SECONDS</span>
      </div>
    </div>
  );
}