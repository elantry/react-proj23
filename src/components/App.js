import React, { useState, useEffect } from "react";
import { uuid } from "uuidv4";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetail from "./ContactDetail";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchresult, setSearchresult] = useState([]);
  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== " ") {
      const newContactList = contacts.filter((contact) => {
        return Object.values(contact)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchresult(newContactList);
    } else {
      setSearchresult(contacts);
    }
  };
  const addContactHandler = (contact) => {
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) {
      return setContacts(retriveContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Header />
      <Router>
        <Routes>
          <Route
            path="/add"
            element={<AddContact addContactHandler={addContactHandler} />}
          ></Route>
          <Route
            path="/"
            element={
              <ContactList
                contacts={searchresult < 1 ? contacts : searchresult}
                getContactId={removeContactHandler}
                term={searchTerm}
                seachkeyword={searchHandler}
              />
            }
          />
          <Route path="/contact/:id" element={<ContactDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
