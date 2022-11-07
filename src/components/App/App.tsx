import { Grid } from "@mui/material";
import ShowResultContext from "../../context/showResultContext";
import useShowResultContextValue from "../../context/showResultContext/useShowResultContextValue";
import Keyboard from "../Keyboard";
import Layout from "../Layout";
import ScreenApp from "../ScreenApp";
import * as SC from './App.styles';

const App = () => {
  const showResultContextValue = useShowResultContextValue();

  return (
    <Layout>
      <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={6} md={4}>
          <SC.Wrapper>
            <ShowResultContext.Provider value={showResultContextValue}>
              <ScreenApp />
              <Keyboard />
            </ShowResultContext.Provider>
          </SC.Wrapper>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default App;
