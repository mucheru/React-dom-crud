import { Routes, Route } from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import Layout from './component/shared/Layout';
import AllFruits from './component/shared/pages/AllFruits';
import AddFruits from './component/shared/pages/AddFruits';
import UpdateFruit from "./component/shared/pages/UpdateFruit";


function App() {
  return (

    <Layout>
      <Routes>
        <Route path="/" element={<AllFruits/>}/>
        <Route path="/add-fruit" element={<AddFruits />}></Route>
        <Route path="/update-fruit/:id" element={<UpdateFruit />}></Route>

        

      </Routes>

    </Layout>

  
  );
}

export default App;
