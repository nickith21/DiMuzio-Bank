function Spa() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [loggedOut, setLoggedOut] = React.useState(true);
  const [signedInEmail, setSignedInEmail] = React.useState("");
  const [signedInUID, setSignedInUID] = React.useState("");
  const [admin, setAdmin] = React.useState(false);

  auth.onAuthStateChanged((user) => {
    if (user) {
      setLoggedIn(true);
      setLoggedOut(false);
      setSignedInEmail(user.email);
      setSignedInUID(user.uid);
      fetch(`/account/findOne/${user.uid}`)
        .then((response) => response.json())
        .then((json) => {
          try {
            if (json.admin) {
              setAdmin(true);
            }
          } catch (err) {
            props.setStatus("Error: please try again later");
          }
        })
        .catch((err) => {
          console.log("There was an error inside of onAuthChanged");
        });
    } else {
      setLoggedIn(false);
      setLoggedOut(true);
      setSignedInEmail("");
      setSignedInUID("");
      setAdmin(false);
    }
  });

  return (
    <HashRouter>
      <div>
        <NavBar
          loggedIn={loggedIn}
          loggedOut={loggedOut}
          signedInEmail={signedInEmail}
          admin={admin}
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
            <Route path="/transactions/" render={() => <Transactions signedInUID={signedInUID} />} />
            <Route
              path="/account/"
              render={() => (
                <Account
                  signedInEmail={signedInEmail}
                  signedInUID={signedInUID}
                />
              )}
            />
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
