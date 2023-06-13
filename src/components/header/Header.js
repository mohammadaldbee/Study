import classes from "./Header.module.css";
import icon from "../assest/icon.png";
import User from "../Users/User";
import Users from "../Users/Users";

const Header = () => {
  return (
    <div className={classes.header}>
      <nav class="navbar navbar-expand-lg navbar-light  ">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src={icon} />
          </a>
          <button
            class="navbar-toggler bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse " id="navbarSupportedContent">
            <form class="d-flex mt-1">
              <div class="form-group has-search">
                <span
                  class={`fa fa-search form-control-feedback ps-2   ${classes.searchIcon}`}
                ></span>
                <input
                  type="text"
                  class="form-control ps-4 "
                  placeholder="search"
                  style={{
                    background: "#191e2e",
                    color: "white !important",
                    border: "none",
                  }}
                />
              </div>
            </form>

            <ul class="navbar-nav ms-auto  mb-2 mb-lg-0">
              <li class="nav-item me-3">
                <a
                  class={`nav-link ${classes.navColor}`}
                  aria-current="page"
                  href="#"
                >
                  Career Library
                </a>
              </li>
              <li class="nav-item me-3">
                <a class={`nav-link ${classes.navColor}`} href="#">
                  Major Library
                </a>
              </li>
              <li class="nav-item me-3 pe-3">
                <a class={`nav-link ${classes.navColor}`} href="#">
                  School Library
                </a>
              </li>{" "}
              <li class="nav-item  me-0 ">
                <a class={`nav-link ${classes.navColor}`} href="#">
                  <i class="fa fa-bell"></i>
                </a>
              </li>
              <li class="nav-item  me-0 ">
                <a class={`nav-link ${classes.navColor}`} href="#">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSULaV2mYVR2fsd7BEHvbZnz0UBuUzq_Wdz6Q&usqp=CAU"
                    width={15}
                    height={15}
                    style={{ borderRadius: "20px" }}
                  />
                </a>
              </li>
              <Users />
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Header;
