var provider = new firebase.auth.GoogleAuthProvider();

function routeAuthentication(props) {

  function callUnauthenticatedRoute() {
    (async () => {
      let response = await fetch("/unauthenticatedRoute");
      let text = await response.text();
      console.log("response", response);
      console.log("text", text);
    })();
    console.log("Calling Unauth Route");
  }

  function callAuthenticatedRoute() {
    try {
      auth.currentUser
        .getIdToken()
        .then((idToken) => {
          console.log("idToken:", idToken);

          (async () => {
            let response = await fetch("/authenticatedRoute", {
              method: "GET",
              headers: {
                Authorization: idToken,
                Name: "Nick"
              },
            });
            // await for response
            let text = await response.text();
            console.log("you are authenticated!");
            // writing to console
            console.log("response:", response);
            // write
            console.log("text:", text);
          })();
        })
        .catch((e) => {
          console.log("e:", e);
        });
    } catch (error) {
      console.log("you are not authenticated!");
    }
    console.log("Calling Auth Route");
  }

  return (
    <>
      <button
        type="submit"
        className="btn btn-light"
        onClick={callUnauthenticatedRoute}
      >
        Call Route Not Requiring Login
      </button>
      <button
        type="submit"
        className="btn btn-light"
        onClick={callAuthenticatedRoute}
      >
        Call Route Requiring Login
      </button>
    </>
  );
}
