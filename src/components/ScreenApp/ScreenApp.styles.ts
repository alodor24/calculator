import { Paper } from '@mui/material';
import styled from 'styled-components';
import { fontSizes } from '../utils/theme';

export const Wrapper = styled(Paper)`
  &.MuiPaper-root {
    transition: none;
    box-shadow: none;
    border-radius: 0.4rem 0.4rem 0 0;
    padding: 1rem;
    text-align: right;
    font-size: ${fontSizes[0]};
    white-space: nowrap;
    text-overflow: clip; 
  };

  span {
    display: block;
    overflow: hidden;
  };
`;
