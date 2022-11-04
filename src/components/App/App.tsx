import { Grid } from "@mui/material";
import Keyboard from "../Keyboard";
import Layout from "../Layout";
import ScreenApp from "../ScreenApp";
import * as SC from './App.styles';

const App = () => {
  return (
    <Layout>
      <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={6} md={4}>
          <SC.Wrapper>
            <ScreenApp />
            <Keyboard />
          </SC.Wrapper>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default App;
