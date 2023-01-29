function AllData() {
  const [data, setData] = React.useState("");

  React.useEffect(() => {
    // fetch all accounts from API
    fetch("/account/all")
      .then((response) => response.json())
      .then((data) => {
        const rows = data.map((user, index) => {
          const id = user["_id"].toString()
          const adminStatus = user.admin ? "Yes" : "No"
          return (
            <>
              <tr key={id}>
                <th scope="row">{id}</th>
                <th>{user.name}</th>
                <th>{user.email}</th>
                <th>{user.balance}</th>
                <th>{adminStatus}</th>
              </tr>
            </>
          );
        });
        setData(rows);
        // stringified data = [{"_id":"TNJ3jgidEwNw54X6KuxUV3NW9b13","name":"nick","email":"ndd243@gmail.com","password":"secret","balance":50,"admin":true},{"_id":"0nyou5IkvRfqpYQHZhhPrfE7HIv2","name":"Sam","email":"sam@bc.edu","password":"secret","balance":0,"admin":false},{"_id":"UwxxiuQ6JUV2AsszJOvEjHRPKk13","name":"Monkey","email":"fijos@gjiosd.co","password":"GIopdsop","balance":0,"admin":false},{"_id":"PXKTfCOEehSu5hOZp6QkLvBF92g2","name":"Sammy","email":"sammy@bc.edu","password":"secret","balance":0,"admin":false},{"_id":"NXHgNZuMj8gwcFeTbiDExg99HUB3","name":"Charles","email":"chaz@mit.edu","password":"secret","balance":50,"admin":false}]
      });
  }, []);

//   const handle = () => {
//     fetch("/account/updateMany")
//       .then((response) => response.json())
//       .then((data) => {
//       });
//   };

  return (
    <>
      {/* <button onClick={handle}>Update all admin</button> */}
      <h5>All Data in Store</h5>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Account ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Balance</th>
            <th scope="col">Admin</th>
          </tr>
        </thead>
        <tbody>{data}</tbody>
      </table>
    </>
  );
}

function OldComponent() {
  const userCtxVal = {users:[{name:'abel',email:'abel@mit.edu',password:'secret',balance:balance}]}

  const ctx = React.useContext(UserContext);
  const users = ctx.users;
  const rows = users.map((user, index) => {
    return (
      <>
        <tr key={index}>
          <th scope="row">{index}</th>
          <th>{user.name}</th>
          <th>{user.email}</th>
          <th>{user.balance}</th>
        </tr>
      </>
    );
  });
  return (
    <>
      <h5>All Data in Store</h5>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Balance</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </>
  );
}

