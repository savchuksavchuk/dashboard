import { useState } from "react";
import "./App.scss";
import { AdminPanel } from "./components/AdminPanel/AdminPanel";
import { ContextProvider } from "./context/context";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ContextProvider>
      <div className="App">
        <AdminPanel />
      </div>
    </ContextProvider>
  );
}

export default App;
