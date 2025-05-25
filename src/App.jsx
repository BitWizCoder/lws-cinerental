import Page from "./Page";
import { MovieContext, ThemeContext } from "./context";
import { useReducer } from "react";
import { cartReducer, initialState } from "./reducers/CartReducer";

function App() {
  // const [darkMode, setDarkMode] = useState(false);

  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <>
      <ThemeContext.Provider value={{}}>
        <MovieContext.Provider value={{ state, dispatch }}>
          <Page />
        </MovieContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
