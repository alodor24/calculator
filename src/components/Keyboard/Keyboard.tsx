import { useState } from "react";
import useShowResultContext from "../../context/showResultContext/useShowResultContext";
import { calculator, calculatorPorcentage, calculatorSquareRoot } from "../../utils/helpers";
import { ARITHMETIC_OPERATORS, Buttons, NUMERIC_PANEL } from "./constants";
import * as SC from './Keyboard.styles';

const Keyboard = () => {
  const { firstValue, setFirstValue, secondValue, setSecondValue, option, setOption, setResult } = useShowResultContext();
  const [operator, setOperator] = useState<string>('');

  const specialOptions = {
    'AC': () => {
      setFirstValue([]);
      setSecondValue([]);
      setOption(false);
      setResult(0);
      setOperator('');
    },
    '=': () => {
      if (firstValue.length && secondValue.length) {
        const result = calculator(operator, firstValue, secondValue);
        setResult(result);
        setOption(false);
        setFirstValue(result.toString().split(''));
        setSecondValue([]);
        setOperator('');
      }
    },
    '√': () => {
      if (firstValue.length) {
        const result = calculatorSquareRoot(firstValue);
        setResult(result);
        setFirstValue(result.toString().split(''));
      }
    },
    '%': () => {
      if (firstValue.length) {
        const result = calculatorPorcentage(firstValue);
        setResult(result);
        setFirstValue(result.toString().split(''));
      }
    },
  };

  const handleClick = (value: string) => {
    if (NUMERIC_PANEL.includes(value)) {
      if (!option) {
        setFirstValue([...firstValue, value]);
      } else {
        setSecondValue([...secondValue, value]);
      }
    }

    if (value === '.') {
      if (!option) {
        if (!firstValue.includes(value)) {
          setFirstValue([...firstValue, value]);
        }
      } else {
        if (!secondValue.includes(value)) {
          setSecondValue([...secondValue, value]);
        }
      }
    }

    if (ARITHMETIC_OPERATORS.includes(value)) {
      if (firstValue.length) {
        setOption(true);
        setOperator(value);
      }
    }

    specialOptions[value as keyof typeof specialOptions]();
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
