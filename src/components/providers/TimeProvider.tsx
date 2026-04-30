import { useEffect, useState, type ReactNode } from "react";
import { TimeContext } from "./TimeContext";

type TimeProviderProps = {
  children: ReactNode;
};

export const TimeProvider = ({ children }: TimeProviderProps) => {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const interval = window.setInterval(() => {
      setNow(Date.now());
    }, 60_000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <TimeContext.Provider value={{ now }}>{children}</TimeContext.Provider>
  );
};
