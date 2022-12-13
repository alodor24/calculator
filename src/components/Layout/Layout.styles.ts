import { Typography } from "@mui/material";
import styled from "styled-components";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { theme } from "../utils/theme";

export const Title = styled(Typography)`
  margin: 4rem 0 2rem 0 !important;
`;

export const Footer = styled.footer`
  margin-top: 3rem;
  text-align: center;
`;

export const FooterText = styled.span`
  color: ${theme.colors.grey[1]};
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IconCustom = styled(FavoriteIcon)`
  &.MuiSvgIcon-root {
    color: ${theme.colors.red[0]};
    font-size: 1.1rem;
    margin: 0 0.2rem;
  }
`;
