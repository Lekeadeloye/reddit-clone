import { createContext } from "react";

export type TimeContextValue = {
  now: number;
};

export const TimeContext = createContext<TimeContextValue | null>(null);
