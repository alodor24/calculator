export const calculator = (operator: string, firstValue: string[], secondValue: string[]): number => {
  const parseFirstValue = parseFloat(firstValue.join(''));
  const parseSecondValue = parseFloat(secondValue.join(''));

  const operatorOptions = {
    '+': () => parseFirstValue + parseSecondValue,
    '-': () => parseFirstValue - parseSecondValue,
    '*': () => parseFirstValue * parseSecondValue,
    '/': () => parseFirstValue / parseSecondValue,
  };

  return operatorOptions[operator as keyof typeof operatorOptions]();
};

export const calculatorSquareRoot = (firstValue: string[]): number => {
  const parseValue = parseFloat(firstValue.join(''));
  return Math.sqrt(parseValue);
};
