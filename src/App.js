import Container from "@mui/material/Container";
import { ThemeProvider, createTheme, styled } from "@mui/material/styles";

import Posts from "./components/Posts";
import AppBar from "./components/AppBar";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

const AppContainer = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
}));

const ContentContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
}));

function App() {
  // TODO Move post fetching logic here

  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        {/* TODO pass setData function here */}
        <AppBar />
        <ContentContainer>
          {/* TODO pass fetched data to posts here */}
          <Posts />
        </ContentContainer>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
