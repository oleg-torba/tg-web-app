import { useEffect } from "react";
import "./App.css";
const TG = window.Telegram.WebApp;

function App() {
  useEffect(() => {});
  const onClose = () => {
    TG.close();
  };
  return (
    <div className="App">
      <button onClick={onClose}>Закрити</button>
    </div>
  );
}

export default App;
