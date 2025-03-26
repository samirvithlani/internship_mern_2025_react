import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link class="nav-link" to="/home">
                Home 
              </Link>
            </li>
            <li class="nav-item">
            <Link class="nav-link" to="/movies">
                movies
              </Link>
            </li>
            
            <li class="nav-item">
            <Link class="nav-link" to="/formdemo1">
                form demo 1
              </Link>
            </li>
            <li class="nav-item">
            <Link class="nav-link" to="/formdemo2">
                form demo 2
              </Link>
            </li>
            <li class="nav-item">
            <Link class="nav-link" to="/formdemo3">
                form demo 3
              </Link>
            </li>
            <li class="nav-item">
            <Link class="nav-link" to="/formdemo4">
                form demo 4
              </Link>
            </li>
            <li class="nav-item">
            <Link class="nav-link" to="/formdemo5">
                form demo 5
              </Link>
            </li>
            <li class="nav-item">
            <Link class="nav-link" to="/login">
                login
              </Link>
            </li>
            <li class="nav-item">
            <Link class="nav-link" to="/userList">
                userList
              </Link>
            </li>
            <li class="nav-item">
            <Link class="nav-link" to="/postdemo1">
                post demo 1
              </Link>
            </li>
            <li class="nav-item">
            <Link class="nav-link" to="/postdemo2">
                post demo 2
              </Link>
            </li>
            <li class="nav-item">
            <Link class="nav-link" to="/useeffectdemo">
                use effect
              </Link>
            </li>
            {/* <li class="nav-item">
            <Link class="nav-link" to="/formdemo6">
                formdemo6
              </Link>
            </li>
            <li class="nav-item">
            <Link class="nav-link" to="/formdemo7">
                formdemo7
              </Link>
            </li>
            <li class="nav-item">
            <Link class="nav-link" to="/apidemo1">
                apidemo1
              </Link>
            </li>
            <li class="nav-item">
            <Link class="nav-link" to="/searchmovie">
                searchmovie
              </Link>
            </li> */}
            <li class="nav-item">
            <Link class="nav-link" to="/searchmovie">
                searchmovie
              </Link>
            </li>
            <li class="nav-item">
            <Link class="nav-link" to="/studentcomp">
                Student comp
              </Link>
            </li>
            <li class="nav-item">
            <Link class="nav-link" to="/comp1">
                Comp1
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
