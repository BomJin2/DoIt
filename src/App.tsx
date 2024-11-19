import { BrowserRouter, Route, Routes } from "react-router-dom";

/** 우리가 만든 페이지 컴포넌트 */
import HomePage from "./views/Home";
import Bookmark from "./views/Bookmark";
import { Toaster } from "./components/ui/toaster";
import { Provider } from "jotai";

const App = () => {
  return (
    <>
      <Provider>
        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<HomePage />}></Route>
            <Route path="/search/:id" element={<HomePage />}></Route>
            <Route path={"/bookmark"} element={<Bookmark />}></Route>
          </Routes>
          <Toaster />
        </BrowserRouter>
      </Provider>
    </>
  );
};
export default App;
