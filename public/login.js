function Login() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");

  return (
    <>
      <span>
        Need an account? <Link to="/createaccount/">Create Account</Link>
      </span>
      <br />
      <br />
      <Card
        bgcolor="secondary"
        header="Login"
        status={status}
        body={
          show ? (
            <LoginForm setShow={setShow} setStatus={setStatus} />
          ) : (
            <LoginMsg setShow={setShow} setStatus={setStatus} />
          )
        }
      />
    </>
  );
}

function LoginMsg(props) {
  return (
    <>
      <h5>Success</h5>
      <button
        type="submit"
        className="btn btn-light"
        onClick={() => props.setShow(true)}
      >
        Authenticate again
      </button>
    </>
  );
}

function LoginForm(props) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function loginWithFirebase(history) {
    // login
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        console.log(userCredential);
        return userCredential;
      })
      .then(() => {
        fetch(`/account/login/${email}/${password}`)
          .then((response) => response.text())
          .then((text) => {
            try {
              const data = JSON.parse(text);
              props.setStatus("");
              props.setShow(false);
              console.log("JSON:", data);
            } catch (err) {
              props.setStatus(text);
              console.log("err:", text);
            }
          });
      })
      .then(() => {
        history.push("/");
      })
      .catch((error) => {
        fetch(`/account/login/${email}/${password}`)
          .then((response) => response.text())
          .then((text) => {
            try {
              const data = JSON.parse(text);
              props.setStatus("");
              props.setShow(false);
              console.log("JSON:", data);
            } catch (err) {
              props.setStatus(text);
              console.log("err:", text);
            }
          });
      });
  }

  function handleGoogleSignIn(history) {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
        // setDisplay("none")
      })
      .then(() => {
        history.push("/");
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  }

  return (
    <>
      Email
      <br />
      <input
        type="input"
        className="form-control"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.currentTarget.value)}
      />
      <br />
      Password
      <br />
      <input
        type="password"
        className="form-control"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.currentTarget.value)}
      />
      <br />
      <Route
        render={({ history }) => (
          <button
            type="submit"
            className="btn btn-light"
            onClick={() => {
              loginWithFirebase(history);
            }}
          >
            Login
          </button>
        )}
      />
      <br />
      <br />
      <Route
        render={({ history }) => (
          <button
            type="submit"
            className="btn btn-light"
            onClick={() => {
              handleGoogleSignIn(history);
            }}
          >
            <img src="google-logo.png" className="img-fluid" style={{height:25, padding:1}} alt="Responsive image"/>
            Login with Google
          </button>
        )}
      />
    </>
  );
}
