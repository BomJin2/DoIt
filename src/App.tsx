import { BrowserRouter, Route, Routes } from "react-router-dom";

/** 우리가 만든 페이지 컴포넌트 */
import HomePage from "./views/Home";
import Bookmark from "./views/Bookmark";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<HomePage />}></Route>
          <Route path={"/bookmark"} element={<Bookmark />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
