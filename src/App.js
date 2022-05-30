import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./pages/profile/Profile";
import Location from "./pages/location/Location";
import Item from "./pages/item/Item";
import Login from "./pages/login/Login";
import HomeProp from "./pages/home-proprietario/Home-prop";
import Espacos from "./pages/espacos/Espacos";
import ListItens from "./pages/listItens/ListItens";
function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
                <Routes>
                    <Route path="/">
                        <Route index element={<Home />}></Route>
                    </Route>
                    <Route path="/item" element={<Item />}>
                        <Route element={<Item />}></Route>
                    </Route>
                    <Route path="/perfil" element={<Profile />}>
                        <Route element={<Profile />}></Route>
                    </Route>
                    <Route path="/alugar" element={<Location />}>
                        <Route element={<Location />}></Route>
                    </Route>
                    <Route path="/logar" element={<Login />}>
                        <Route element={<Login />}></Route>
                    </Route>
                    <Route path="/home" element={<HomeProp />}>
                        <Route element={<HomeProp />}></Route>
                    </Route>
                    <Route path="/espacos" element={<Espacos />}>
                        <Route element={<Espacos />}></Route>
                    </Route>

                    <Route path='/listItens' element={<ListItens />}>
                        <Route element={<ListItens />}></Route>
                    </Route>
                </Routes>
            </BrowserRouter> */}
    </div>
  );
}

export default App;
