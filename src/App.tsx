import "./App.css";
import FormLayout from "./components/FormLayout/FormLayout";
import Modal from "react-modal";

Modal.setAppElement("#root");

function App() {
  return (
    <main>
      <FormLayout />
    </main>
  );
}

export default App;
