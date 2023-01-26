function Transactions({signedInUID}) {
    const [data, setData] = React.useState("");
  
    React.useEffect(() => {
      // fetch all accounts from API
      fetch(`/account/findOnesTransactions/${signedInUID}`)
      .then(response => response.json())
      .then(json => {
          try {
              console.log('JSON:', json);
              setData(JSON.stringify(json))
          } catch(err) {
              props.setStatus("Error: please try again later")
              console.log('err:', err);
          }
      });
    }, []);

  
    return (
      <>
        {/* <button onClick={handle}>Update all admin</button> */}
        <h5>All Data in Store:</h5>
        {data}
      </>
    );
  }
  