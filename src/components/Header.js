function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-danger">
        <div className="container-fluid">
          <a className="navbar-brand">
            <img
              style={{ width: "52px" }}
              src="LYM_blue_transparent.png"
              className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
              alt=""
            />
          </a>
          <button
            className="navbar-toggler fs-16"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link text-white" aria-current="page">
                  Home
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-white"
                  id="navbarScrollingDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Projects
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarScrollingDropdown"
                >
                  <li>
                    <a className="dropdown-item fs-14">To do list</a>
                  </li>
                  <li>
                    <a className="dropdown-item fs-14">Ecommerce</a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item fs-14">Something else here</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <form className="d-flex">
            <input
              className="form-control form-control-sm me-2 fs-14"
              type="search"
              placeholder="Search Project"
              aria-label="Search"
            />
            <button
              className="btn btn-sm btn-light fs-16 text-dark"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default Header;
