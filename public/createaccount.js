function CreateAccount() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");

  return (
    <>
      <span>
        Already have an account? <Link to="/login/">Login</Link>
      </span>
      <br />
      <br />
      <Card
        bgcolor="primary"
        header="Create Account"
        status={status}
        body={
          show ? (
            <CreateForm setShow={setShow} />
          ) : (
            <CreateMsg setShow={setShow} />
          )
        }
      />
    </>
  );
}

function CreateMsg(props) {
  return (
    <>
      <h5>Success</h5>
      <button
        type="submit"
        className="btn btn-light"
        onClick={() => props.setShow(true)} 
      >
        Add another account
      </button>
    </>
  );
}

function CreateForm(props) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function createWithFirebase(history) {
    // signup
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        console.log(userCredential);
        return userCredential;
      })
      .then((userCredential) => {
        console.log(name, email, password);
         const url = `/account/create/${name}/${email}/${password}/${userCredential.user.uid}`;
        (async () => {
          var res = await fetch(url);
          var data = await res.json();
          console.log(data);
        })();
        props.setShow(false);
      })
      .then(() => {
        alert("Successfully created an account!");
      })
      .then(() => {
        history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      Name
      <br />
      <input
        type="input"
        className="form-control"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.currentTarget.value)}
      />
      <br />
      Email address
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
              createWithFirebase(history);
            }}
          >
            Create Account
          </button>
        )}
      />
    </>
  );
}
