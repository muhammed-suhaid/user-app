import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddUser from './components/AddUser';
import DeleteUser from './components/DeleteUser';
import SearchUser from './components/SearchUser';
import ViewUser from './components/ViewUser';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ViewUser />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/search-user" element={<SearchUser />} />
          <Route path="/delete-user" element={<DeleteUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
