import useShowResultContext from "../../context/showResultContext/useShowResultContext";
import { ARITHMETIC_OPERATORS, Buttons, NUMERIC_PANEL } from "./constants";
import * as SC from './Keyboard.styles';

const Keyboard = () => {
  const { firstValue, setFirstValue, secondValue, setSecondValue, option, setOption, setResult } = useShowResultContext();

  const handleClick = (value?: string) => {
    if (value && NUMERIC_PANEL.includes(value)) {
      if (!option) {
        setFirstValue([...firstValue, value]);
      } else {
        setSecondValue([...secondValue, value]);
      }
    }

    if (value && ARITHMETIC_OPERATORS.includes(value)) {
      if (firstValue.length) {
        setOption(true);
      }
    }

    if (value === 'AC') {
      setFirstValue([]);
      setSecondValue([]);
      setOption(false);
      setResult(0);
    }

    if (value === '=') {
      if (firstValue.length && secondValue.length) {
        const result = parseFloat(firstValue.join('')) / parseFloat(secondValue.join(''));
        setResult(result);
        setOption(!option);
        setFirstValue([result.toString()]);
        setSecondValue([]);
      }
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
