import { useContext } from "react";
import ShowResultContext from ".";

const useShowResultContext = () => {
  const appContext = useContext(ShowResultContext);

  if (!appContext) {
    throw new Error('useShowResultContext must be used within the ShowResultContext.Provider');
  }

  return appContext;
};

export default useShowResultContext;
