function NavBar({ loggedOut, loggedIn, signedInEmail, admin }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        DiMuzio Bank
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          {loggedOut && (
            <li className="nav-item">
              <a className="nav-link" href="#/CreateAccount/">
                Create Account
              </a>
            </li>
          )}
          {loggedOut && (
            <li className="nav-item">
              <a className="nav-link" href="#/login/">
                Login
              </a>
            </li>
          )}
          {/* {loggedIn && (
            <li className="nav-item">
              <a className="nav-link" href="#/routeAuthentication/">
                Route Authentication
              </a>
            </li>
          )}
          {loggedIn && (
            <li className="nav-item">
              <a className="nav-link" href="#/modal/">
                Modal
              </a>
            </li>
          )} */}
          {loggedIn && (
            <li className="nav-item">
              <a className="nav-link" href="#/deposit/">
                Deposit
              </a>
            </li>
          )}
          {loggedIn && (
            <li className="nav-item">
              <a className="nav-link" href="#/withdraw/">
                Withdraw
              </a>
            </li>
          )}
          {loggedIn && (
            <li className="nav-item">
              <a className="nav-link" href="#/balance/">
                Balance
              </a>
            </li>
          )}
          {admin && (
            <li className="nav-item">
              <a className="nav-link" href="#/alldata/">
                AllData
              </a>
            </li>
          )}
          {loggedIn && (
            <li className="nav-item">
              <a className="nav-link" href="#/logout/">
                Logout
              </a>
            </li>
          )}
        </ul>
        {loggedIn && (
          <button className="btn btn-outline-success ml-auto" type="submit">
            {signedInEmail}
          </button>
        )}
      </div>
    </nav>
  );
}
