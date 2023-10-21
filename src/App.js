import "./App.css";
import ListPalettes from "./ListPaletts";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="p-8">
        <ListPalettes />
      </div>
    </Provider>
  );
}

export default App;
