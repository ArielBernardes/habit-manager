import "./App.css";
import Routes from "./Routes";
import { Toaster } from "react-hot-toast";
import GlobalStyle from "./styles/Global";

function App() {
  return (
    <>
      <GlobalStyle />
      <div>
        <Toaster />
      </div>
      <Routes />
    </>
  );
}

export default App;
