import { Container } from "@mui/material";
import * as SC from './Layout.styles';

type Props = {
  children: React.ReactElement;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Container maxWidth="lg">
      <SC.Title variant="h3" align="center">
        Calculator React Project
      </SC.Title>
      { children }
    </Container>
  )
}

export default Layout;
