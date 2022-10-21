

import NavBar from './components/NavBar';
import { Routes, Route } from "react-router-dom";
import UseStae from './components/UseStae';
import Usefect from './components/Usefect';
import Ref from './components/Ref';
import Comp1 from './components/context/Comp1';

function App() {
  return (
    <div className="App">
      <div>
        <NavBar />

        <br />
        <Routes>
          <Route path="/" element={<UseStae />} />
          <Route path="useeffect" element={<Usefect />}></Route>
          <Route path="useref" element={<Ref />}></Route>
          <Route path="usecon" element={<Comp1 />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
