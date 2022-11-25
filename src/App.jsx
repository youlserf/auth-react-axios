import theme from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import Router from "./routes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          height: "100hv",
          backgroundColor: "orange",
          color: "white",
          justifyContent: "center",
          flexDirection: "column",
          padding: 4,
        }}
      >
        <Router />
      </div>
    </ThemeProvider>
  );
}

export default App;
