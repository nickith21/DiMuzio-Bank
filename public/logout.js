function Logout() {
  function logout(history) {
    auth.signOut();
    history.push("/");
  }
  return (
    <>
      <Route
        render={({ history }) => (
          <button
            type="submit"
            className="btn btn-light"
            onClick={() => {
              logout(history);
            }}
          >
            Logout
          </button>
        )}
      />
    </>
  );
}
