import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
const AddContact = (props) => {
  const { addContactHandler } = props;
  const [state, setState] = useState({
    name: "",
    email: "",
  });
  let navigate = useNavigate();
  const add = (e) => {
    e.preventDefault();
    if (state.name === "" || state.email === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    addContactHandler(state);
    setState({ name: "", email: "" });
    navigate("/");
  };

  return (
    <div className="ui main">
      <h2>Add Contact</h2>

      <form to="/" className="ui form" onSubmit={add}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={state.name}
            onChange={(e) => setState({ ...state, name: e.target.value })}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={state.email}
            onChange={(e) => setState({ ...state, email: e.target.value })}
          />
        </div>

        <button type="submit" className="ui button blue">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddContact;
