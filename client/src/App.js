import './App.css';
import AddContact from './component/AddContact';
import ContactList from './component/ContactList';
import NavBar from './component/NavBar';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  return (
    <Router>
    <div className="App">
      <NavBar />
    <Routes>
      <Route exac path="/" element={<ContactList />}></Route>
      <Route exac path="/contactlist" element={<ContactList />}></Route>
      <Route exac path="/addcontact" element={<AddContact />}></Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
