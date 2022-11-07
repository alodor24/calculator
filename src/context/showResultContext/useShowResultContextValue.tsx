import { useState } from "react";

const useShowResultContextValue = () => {
  const [firstValue, setFirstValue] = useState<number>(0);
  const [secondValue, setSecondValue] = useState<number>(0);
  const [option, setOption] = useState<boolean>(false);
  const [result, setResult] = useState<number>(0);
  
  return {
    firstValue,
    setFirstValue,
    secondValue,
    setSecondValue,
    option,
    setOption,
    result,
    setResult,
  };
};

export default useShowResultContextValue;
