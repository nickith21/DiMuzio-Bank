function Transactions({signedInUID}) {
    const [data, setData] = React.useState("");
  
    React.useEffect(() => {
      // fetch all accounts from API
      fetch(`/account/findOnesTransactions/${signedInUID}`)
      .then(response => response.json())
      .then(json => {
          try {
              if (json.transactions) {
                const transactions = json.transactions;
                const rows = transactions.map((transaction, index) => {
                  const date = new Date(transaction.date)
                  const formattedDate = date.toLocaleString('en-US')
                  return (
                    <>
                      <tr key={index}>
                        <th scope="row">{transaction.type}</th>
                        <th>{formattedDate}</th>
                        <th>{transaction.amount}</th>
                      </tr>
                    </>
                  );
                });
                setData(rows);
              } else {
                props.setStatus("No transaction yet")
              }
          } catch(err) {
              props.setStatus("Error: please try again later")
              console.log('err:', err);
          }
      });
    }, []);

  
    return (
      <>
        <h5>Transactions</h5>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Type</th>
            <th scope="col">Date</th>
            <th scope="col">Amount</th>
          </tr>
        </thead>
        <tbody>{data}</tbody>
      </table>
      </>
    );
  }
  