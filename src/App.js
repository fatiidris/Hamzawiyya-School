import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './Pages/Home';
import Nursery from './Pages/Nursery';
import Primary from './Pages/Primary';
import TermsCon from './Pages/TermsCon';
import Admission from './Pages/Admission';
import Secondary from './Pages/Secondary';
import Islamiyyah from './Pages/Islamiyyah';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/Login" element={<Home />} />
        <Route path="/Nursery" element={<Nursery />} />
        <Route path="/Primary" element={<Primary />} />
        <Route path="/Secondary" element={<Secondary />} />
        <Route path="/Islamiyyah" element={<Islamiyyah />} />
        <Route path="/TermsCon" element={<TermsCon />} />
        <Route path="/Admission" element={<Admission/>} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
