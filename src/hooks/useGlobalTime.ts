import { useContext } from "react";
import { TimeContext } from "@/components/providers/TimeContext";

export const useGlobalTime = () => {
  const context = useContext(TimeContext);

  if (!context) {
    throw new Error("useGlobalTime must be used within a TimeProvider");
  }

  return context.now;
};
