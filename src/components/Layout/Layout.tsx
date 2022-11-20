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
      <SC.Footer>
        <SC.FooterText>Made with <SC.IconCustom /> by alodor</SC.FooterText>
      </SC.Footer>
    </Container>
  )
}

export default Layout;
