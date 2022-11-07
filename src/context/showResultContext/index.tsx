import { createContext } from "react";

export type ShowResultData = {
  firstValue: number;
  setFirstValue: React.Dispatch<React.SetStateAction<number>>;
  secondValue: number;
  setSecondValue: React.Dispatch<React.SetStateAction<number>>;
  option: boolean;
  setOption: React.Dispatch<React.SetStateAction<boolean>>;
  result: number;
  setResult: React.Dispatch<React.SetStateAction<number>>;
};

const ShowResultContext = createContext<ShowResultData | undefined>(undefined);

export default ShowResultContext;
