import React from "react";
import { Link } from "react-router-dom";

export const SideBar = () => {
  return (
    <div className=" bg-dark text-light sidebar" style={{ width: "250px" }}>
      <div className="mt-4 text-center mb-5">Admin</div>
      <hr />
      <div>
        <ul className="list-unstyled " style={{ marginLeft: "1rem" }}>
          <li>
            <Link className="nav-link" to="/dashboard">
              Dashboard
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/books">
              Books
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/clients">
              Clients
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/history">
              History
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/signup">
              Add Admin
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
