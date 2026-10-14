"use client";

import { useState, useEffect } from "react";

export interface LiveTimeState {
  mounted: boolean;
  timeString: string; // e.g. "1:33 AM"
  fullDisplay: string; // e.g. "1:33 AM GMT+6 (Night)"
  period: "Morning" | "Afternoon" | "Evening" | "Night";
  isDaytime: boolean;
  hour: number;
}

export function useLiveTime(timeZone: string = "Asia/Dhaka"): LiveTimeState {
  const [state, setState] = useState<LiveTimeState>({
    mounted: false,
    timeString: "00:00 AM",
    fullDisplay: "12:00 PM GMT+6 (Afternoon)",
    period: "Afternoon",
    isDaytime: true,
    hour: 12,
  });

  useEffect(() => {
    function update() {
      try {
        const now = new Date();
        const timeFormatter = new Intl.DateTimeFormat("en-US", {
          timeZone,
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        });

        const hour24Formatter = new Intl.DateTimeFormat("en-US", {
          timeZone,
          hour: "numeric",
          hour12: false,
        });

        const timeStr = timeFormatter.format(now);
        const hour24 = parseInt(hour24Formatter.format(now), 10);

        let period: "Morning" | "Afternoon" | "Evening" | "Night" = "Morning";
        if (hour24 >= 5 && hour24 < 12) {
          period = "Morning";
        } else if (hour24 >= 12 && hour24 < 17) {
          period = "Afternoon";
        } else if (hour24 >= 17 && hour24 < 21) {
          period = "Evening";
        } else {
          period = "Night";
        }

        const isDaytime = hour24 >= 6 && hour24 < 18;
        const fullDisplay = `${timeStr} GMT+6 (${period})`;

        setState({
          mounted: true,
          timeString: timeStr,
          fullDisplay,
          period,
          isDaytime,
          hour: hour24,
        });
      } catch {
        setState((prev) => ({ ...prev, mounted: true }));
      }
    }

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [timeZone]);

  return state;
}
