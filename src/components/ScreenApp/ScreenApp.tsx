import useShowResultContext from '../../context/showResultContext/useShowResultContext';
import * as SC from './ScreenApp.styles';

const ScreenApp = () => {
  const { firstValue, secondValue, option } = useShowResultContext();

  return (
    <SC.Wrapper>
      {
        option 
        ? <span>{ secondValue.length ? secondValue : 0}</span>
        : <span>{ firstValue.length ? firstValue : 0}</span>
      }
    </SC.Wrapper>
  )
}

export default ScreenApp;
