function Spa() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [loggedOut, setLoggedOut] = React.useState(true);
  const [signedInEmail, setSignedInEmail] = React.useState("");
  const [signedInUID, setSignedInUID] = React.useState("");

  auth.onAuthStateChanged((user) => {
    if (user) {
      setLoggedIn(true);
      setLoggedOut(false);
      setSignedInEmail(user.email);
      setSignedInUID(user.uid);
      console.log("auth changed uid:", signedInUID);
    } else {
      setLoggedIn(false);
      setLoggedOut(true);
      setSignedInEmail("");
      setSignedInUID("");
    }
  });

  return (
    <HashRouter>
      <div>
        <NavBar
          loggedIn={loggedIn}
          loggedOut={loggedOut}
          signedInEmail={signedInEmail}
        />
        <UserContext.Provider
          value={{
            users: [
              {
                name: "abel",
                email: "abel@mit.edu",
                password: "secret",
                balance: 100,
              },
            ],
          }}
        >
          <div className="container" style={{ padding: "20px" }}>
            <Route path="/" exact component={Home} />
            <Route path="/CreateAccount/" component={CreateAccount} />
            <Route path="/login/" component={Login} />
            <Route
              path="/routeAuthentication/"
              component={routeAuthentication}
            />
            <Route path="/logout/" component={Logout} />
            <Route path="/modal/" component={Modal} />
            <Route
              path="/deposit/"
              render={() => <Deposit signedInUID={signedInUID} />}
            />
            <Route
              path="/withdraw/"
              render={() => <Withdraw signedInUID={signedInUID} />}
            />
            <Route
              path="/balance/"
              render={() => <Balance signedInUID={signedInUID} />}
            />
            {/* <Route path="/transactions/" component={Transactions} /> */}
            <Route path="/alldata/" component={AllData} />
          </div>
        </UserContext.Provider>
      </div>
    </HashRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Spa />);
