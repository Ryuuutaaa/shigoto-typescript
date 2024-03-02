import "./App.css";
import Great from "./components/Great";
import ListPerson from "./components/ListPerson";
import Person from "./components/Person";
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

  const isPersonName = {
    first: "Hirarito",
    last: "Ryutaaa",
  };

  const isListPerson = [
    {
      first: "Mahiru",
      last: "Shinaa",
    },
    {
      first: "Nakano",
      last: "Itsuki",
    },
    {
      first: "Usnida",
      last: "Faradila",
    },
  ];

  return (
    <div>
      <Great name="Rafi Akmal Widikta" isMassage={10} isLogined={false} />
      <Person name={isPersonName} />
      <ListPerson names={isListPerson} />
    </div>
  );
}

export default App;
