import { createContext } from "react";

export type ShowResultData = {
  firstValue: string[];
  setFirstValue: React.Dispatch<React.SetStateAction<string[]>>;
  secondValue: string[];
  setSecondValue: React.Dispatch<React.SetStateAction<string[]>>;
  option: boolean;
  setOption: React.Dispatch<React.SetStateAction<boolean>>;
  result: number;
  setResult: React.Dispatch<React.SetStateAction<number>>;
};

const ShowResultContext = createContext<ShowResultData | undefined>(undefined);

export default ShowResultContext;
