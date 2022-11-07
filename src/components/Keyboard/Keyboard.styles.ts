import { Button } from "@mui/material";
import styled from "styled-components";
import { theme } from "../utils/theme";

export const Wrapper = styled.div`
  height: 27rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

export const CustomButton = styled(Button)`
  &.MuiButtonBase-root {
    border-radius: 0;
    font-size: ${theme.fontSizes[1]};
    background-color: ${theme.colors.grey[0]};
    :hover {
      background-color: ${theme.colors.orange[0]};
    }

    &:first-child, &:nth-child(2), &:nth-child(3) {
      background-color: ${theme.colors.blue[0]};
      :hover {
        background-color: ${theme.colors.orange[0]};
      }
    }

    &:nth-child(4), &:nth-child(8), &:nth-child(12) {
      background-color: ${theme.colors.purple[1]};
      :hover {
        background-color: ${theme.colors.green[0]};
      }
    }

    &:nth-child(16) {
      grid-column-start: 4;
      grid-row-start: 4;
      grid-row-end: 6;
      z-index: 1;
      background-color: ${theme.colors.purple[0]};
      :hover {
        background-color: ${theme.colors.green[0]};
      }
    }

    &:last-child {
      background-color: ${theme.colors.black[0]};
      :hover {
        background-color: ${theme.colors.orange[0]};
      }
    }
  };
`;
