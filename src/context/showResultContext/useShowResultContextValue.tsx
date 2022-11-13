import { useState } from "react";

const useShowResultContextValue = () => {
  const [firstValue, setFirstValue] = useState<Array<string>>([]);
  const [secondValue, setSecondValue] = useState<Array<string>>([]);
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
