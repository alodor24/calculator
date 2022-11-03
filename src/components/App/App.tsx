import { Grid } from "@mui/material";
import Layout from "../Layout";
import ScreenApp from "../ScreenApp";
import * as SC from './App.styles';

const App = () => {
  return (
    <Layout>
      <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={7} md={5}>
          <SC.Wrapper>
            <ScreenApp />
          </SC.Wrapper>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default App;
