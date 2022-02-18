import React, { useRef } from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";
const ContactList = (props) => {
  const deleteConactHandler = (id) => {
    props.getContactId(id);
  };
  const searchref = useRef("");
  const getsearchterm = () => {
    props.seachkeyword(searchref.current.value);
  };

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHander={deleteConactHandler}
        key={contact.id}
      />
    );
  });
  return (
    <div className="main">
      <div className="addbut">
        <h2>Contact List</h2>

        <Link to="/add">
          {" "}
          <button className="ui blue button">Add Contact</button>
        </Link>
      </div>
      <div className="ui search">
        <div className="ui icon input">
          <input
            ref={searchref}
            searchref
            type="text"
            placeholder="Search Contacts"
            className="prompt"
            value={props.term}
            onChange={getsearchterm}
          />
          <i className="search icon"></i>
        </div>
      </div>
      <div className="ui celled list">{renderContactList}</div>
    </div>
  );
};

export default ContactList;
