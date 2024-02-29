import "./App.css";
import InputState from "./components/InputState";
import ShigotoEffectAndState from "./components/ShigotoEffectAndState";
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
      {/* <ConditionalComponent method="UPDATE" />
      <ConditionalComponent method="CREATE" />
      <EffectComponent />
      <RefComponent />
      <TanstackExample /> */}
      {/* <ShigotoEffectAndState /> */}
      <InputState />
    </div>
  );
}

export default App;
