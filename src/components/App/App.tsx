import { Grid, Paper } from "@mui/material";
import Layout from "../Layout";
import * as SC from './App.styles';

const App = () => {
  return (
    <Layout>
      <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={8} md={6}>
          <SC.Wrapper>
            <p>hello world</p>
          </SC.Wrapper>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default App;
