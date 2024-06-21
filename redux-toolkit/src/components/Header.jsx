import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { toogleTheme } from "../redux/slices/counterSlice";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <header className="mb-3 p-4">
      <div className="container d-flex justify-content-between align-items-center">
        <Link className="fs-3 text-danger">TOOLKIT</Link>
        <nav className="d-flex align-items-center gap-3">
          <NavLink to={"/"}>Sayac</NavLink>
          <NavLink to={"/crud"}>CRUD</NavLink>
          <button
            onClick={() => dispatch(toogleTheme())}
            className="btn btn-primary"
          >
            Tema Degis
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
