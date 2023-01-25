function Account({ signedInEmail, signedInUID }) {
  const [loggedInName, setLoggedInName] = React.useState();
  const [balance, setBalance] = React.useState();
  const [numOfTransactions, setNumOfTransactions] = React.useState();

  React.useEffect(() => {
    // fetch all accounts from API
    fetch(`/account/findOne/${signedInUID}`)
      .then((response) => response.json())
      .then((json) => {
        function capitalizeName(name) {
          return name.replace(/\b(\w)/g, (s) => s.toUpperCase());
        }
        const properName = capitalizeName(json.name);
        try {
          setLoggedInName(properName);
          setBalance(json.balance);
          console.log("JSON:", json);
        } catch (err) {
          props.setStatus("Error: please try again later");
          console.log("err:", err);
        }
      });
  }, []);
  return (
    <>
      <main>
        <h1>Account Information</h1>
        <ul class="list-group">
          <li class="list-group-item">{loggedInName}</li>
          <li class="list-group-item">{signedInEmail}</li>
          <li class="list-group-item">{balance}</li>
          <li class="list-group-item"># of Transactions</li>
        </ul>
        <hr class="col-3 col-md-2 mb-5" />
        <Logout />
      </main>
    </>
  );
}
