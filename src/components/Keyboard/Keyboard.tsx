import { Button } from "@mui/material";
import { Buttons } from "./constants";
import * as SC from './Keyboard.styles';

const Keyboard = () => {
  return (
    <SC.Wrapper>
      {Buttons.map(item => (
        <SC.CustomButton key={item.id} variant="contained">
          {item.text}
        </SC.CustomButton>
      ))}
    </SC.Wrapper>
  )
}

export default Keyboard;
