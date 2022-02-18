import React from "react";
import { Link, useLocation } from "react-router-dom";

import matthew from "../images/matthew.png";

const ContactDetail = (props) => {
  const location = useLocation();
  const { contact } = location.state;
  const { name, email } = contact;

  return (
    <div className="main">
      <div className="ui link cards">
        <div className="card">
          <div className="image">
            <img src={matthew} alt="" />
          </div>
          <div className="content">
            <div className="header">{name}</div>

            <div className="description">{email}</div>
          </div>
        </div>
      </div>
      <Link to="/">
        <div className="ui button blue center">Back to contact list</div>
      </Link>
    </div>
  );
};

export default ContactDetail;
