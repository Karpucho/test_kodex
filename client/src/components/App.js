import { Routes, Route, BrowserRouter } from 'react-router-dom'
import AllSingers from './AllSingers/AllSingers';
import AllSongs from './AllSongs/AllSongs';
import NavBar from './NavBar/NavBar';


function App() {
  return (
   <BrowserRouter>
    <div className="App">
      <NavBar />
        <Routes>
          <Route path="/singers" element={<AllSingers />} />
          <Route path="/songs" element={<AllSongs />} />
        </Routes>
    </div>
   </BrowserRouter>
  );
}

export default App;
