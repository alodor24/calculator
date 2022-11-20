import useShowResultContext from '../../context/showResultContext/useShowResultContext';
import { REFERENCIAL_NUMBERS } from '../../utils/constants';
import * as SC from './ScreenApp.styles';

const ScreenApp = () => {
  const { firstValue, secondValue, option } = useShowResultContext();

  return (
    <SC.Wrapper>
      {
        option 
        ? <span>{ secondValue.length 
          ? secondValue.slice(REFERENCIAL_NUMBERS.characterInitial, REFERENCIAL_NUMBERS.characterNumbers) 
          : REFERENCIAL_NUMBERS.characterInitial}
          </span>
        : <span>{ firstValue.length 
          ? firstValue.slice(REFERENCIAL_NUMBERS.characterInitial, REFERENCIAL_NUMBERS.characterNumbers) 
          : REFERENCIAL_NUMBERS.characterInitial}
          </span>
      }
    </SC.Wrapper>
  )
}

export default ScreenApp;
