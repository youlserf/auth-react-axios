import Router from "./routes";

function App() {
  return (
    <div
      style={{
        minHeight: "100hv",
        color: "white",
        paddingTop: "5rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Router />
    </div>
  );
}

export default App;
