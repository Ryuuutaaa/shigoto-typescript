import "./App.css";
import Great from "./components/Great";
// import InputState from "./components/InputState";
// import ShigotoEffectAndState from "./components/ShigotoEffectAndState";
// import { useContext } from "react";
// import { ProfileContext } from "./lib/profileContext";
// import EffectComponent from "./components/useEffectTest";
// import RefComponent from "./components/useRefTest";
// import ConditionalComponent from "./components/ConditionalComponent";

// import TanstackExample from "./components/TanstackExample";

function App() {
  // const context = useContext(ProfileContext);

  return (
    <div>
      <Great name="Rafi Akmal Widikta" umur={18} ttl="cilacap" hobi="basket" />
    </div>
  );
}

export default App;
