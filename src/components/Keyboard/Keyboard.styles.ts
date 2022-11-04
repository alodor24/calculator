import { Button } from "@mui/material";
import styled from "styled-components";
import { colors, fontSizes } from "../utils/theme";

export const Wrapper = styled.div`
  height: 27rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

export const CustomButton = styled(Button)`
  &.MuiButtonBase-root {
    border-radius: 0;
    font-size: ${fontSizes[1]};
    background-color: ${colors.grey[0]};
    :hover {
      background-color: ${colors.orange[0]};
    }

    &:first-child, &:nth-child(2), &:nth-child(3) {
      background-color: ${colors.blue[0]};
      :hover {
        background-color: ${colors.orange[0]};
      }
    }

    &:nth-child(4), &:nth-child(8), &:nth-child(12) {
      background-color: ${colors.purple[1]};
      :hover {
        background-color: ${colors.green[0]};
      }
    }

    &:nth-child(16) {
      grid-column-start: 4;
      grid-row-start: 4;
      grid-row-end: 6;
      z-index: 1;
      background-color: ${colors.purple[0]};
      :hover {
        background-color: ${colors.green[0]};
      }
    }

    &:last-child {
      background-color: ${colors.black[0]};
      :hover {
        background-color: ${colors.orange[0]};
      }
    }
  };
`;
