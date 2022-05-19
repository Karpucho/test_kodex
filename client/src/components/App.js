import { Routes, Route, BrowserRouter } from 'react-router-dom'
import AllSingers from './AllSingers/AllSingers';
import AllSongs from './AllSongs/AllSongs';
import EditSinger from './EditSinger/EditSinger';
import NavBar from './NavBar/NavBar';
import NewSinger from './NewSinger/NewSinger';
import NewSong from './NewSong/NewSong';

function App() {
  return (
   <BrowserRouter>
    <div className="App">
      <NavBar />
        <Routes>
          <Route path="/singers" element={<AllSingers />} />
          <Route path="/singers/new" element={<NewSinger />} />
          <Route path="/singers/edit/:id" element={<EditSinger />} />

          <Route path="/songs" element={<AllSongs />} />
          <Route path="/songs/new" element={<NewSong />} />
        </Routes>
    </div>
   </BrowserRouter>
  );
}

export default App;
