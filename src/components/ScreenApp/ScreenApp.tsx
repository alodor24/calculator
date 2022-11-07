import useShowResultContext from '../../context/showResultContext/useShowResultContext';
import * as SC from './ScreenApp.styles';

const ScreenApp = () => {
  const { firstValue, secondValue, result } = useShowResultContext();

  return (
    <SC.Wrapper>
      <span>{ firstValue }</span>
    </SC.Wrapper>
  )
}

export default ScreenApp;
