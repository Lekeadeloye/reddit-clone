import { formatTimeAgoFromNow } from "@/utils";
import { useGlobalTime } from "./useGlobalTime";

export const useTimeAgo = (epochSeconds: number) => {
  const now = useGlobalTime();

  return formatTimeAgoFromNow(epochSeconds, now);
};
