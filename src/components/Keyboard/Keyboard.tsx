import useShowResultContext from "../../context/showResultContext/useShowResultContext";
import { Buttons } from "./constants";
import * as SC from './Keyboard.styles';

const Keyboard = () => {
  const { firstValue, setFirstValue, secondValue, setSecondValue, option, setOption, setResult } = useShowResultContext();

  const handleClick = (value?: string | number) => {
    if (value === 1 || value === 2) {
      if (!option) {
        setFirstValue(value);
      } else {
        setSecondValue(value);
      }
    }

    if (value === '+') {
      setOption(!option);
    }

    if (value === '=') {
      const result = firstValue + secondValue;
      setResult(result);
      setOption(!option);
      setFirstValue(result);
    }
  };

  return (
    <SC.Wrapper>
      {Buttons.map(item => (
        <SC.CustomButton key={item.id} variant="contained" onClick={() => handleClick(item.value)}>
          {item.text}
        </SC.CustomButton>
      ))}
    </SC.Wrapper>
  )
}

export default Keyboard;
