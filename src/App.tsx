import store from "./redux";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StoreCart, StoreGreetings, StoreProducts } from "./pages";
import { theme } from "./theme/theme";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./theme/global";
import FontStyle from "./base/fonts/fonts";
const allRoutes = {
  path: "/",
  cart: "/cart",
  greetings: "/greetings",
};
function App() {
  return (
    <ThemeProvider theme={theme}>
      <FontStyle />
      <GlobalStyles />
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path={allRoutes.path} element={<StoreProducts />} />
            <Route path={allRoutes.cart} element={<StoreCart />} />
            <Route path={allRoutes.greetings} element={<StoreGreetings />} />
          </Routes>
        </Router>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
