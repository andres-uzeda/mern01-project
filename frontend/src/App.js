import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navigation from './components/Navigation';
import CreateNote from './components/CreateNote';
import NoteList from './components/NoteList';
import CreateUser from './components/CreateUser';

function App() {
  return (
    <BrowserRouter>
        <Navigation />
        <div className="container p-4">
          <Routes>
            <Route path="/" element={<NoteList />} />
            <Route path="/edit/:id" element={<CreateNote />} />
            <Route path="/create" element={<CreateNote />} />
            <Route path="/user" element={<CreateUser />} />
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
