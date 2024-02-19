import Layout from "./components/Layout/Layout";
import {Route, Routes} from "react-router-dom";
import Foods from "./container/Foods/Foods";
import MealForm from "./components/MealForm/MealForm";

function App() {

  return (
    <Layout>
      <Routes>
        <Route path={"/"} element={(<Foods/>)}/>
        <Route path={"/add"} element={(<MealForm/>)}/>
        <Route path={"/edit/:id"} element={(<MealForm/>)}/>
        <Route path={"*"} element={(<h1>Not found</h1>)}/>
      </Routes>
    </Layout>
  );
}

export default App;
