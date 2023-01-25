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
            className="btn btn-primary btn-lg px-4"
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
