function Balance({signedInUID}){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState(''); 
  const [balance, setBalance] = React.useState('');   

  return (
    <Card
      bgcolor="info"
      header="Balance"
      status={status}
      body={show ?
        <BalanceForm setShow={setShow} signedInUID={signedInUID} setBalance={setBalance} setStatus={setStatus}/> :
        <BalanceMsg setShow={setShow} balance={balance} setStatus={setStatus}/>}
    />
  )

}

function BalanceMsg(props){
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  // {formatter.format(ctx.users[0].balance)}
  return(<>
    <h5>{formatter.format(props.balance)}</h5>
  </>);
}

function BalanceForm(props){

  function handle(){
    fetch(`/account/findOne/${props.signedInUID}`)
    .then(response => response.json())
    .then(json => {
        try {
            props.setShow(false);
            props.setBalance(json.balance);
            console.log('JSON:', json);
        } catch(err) {
            props.setStatus("Error: please try again later")
            console.log('err:', err);
        }
    });
  }

  return (<>

    <button type="submit" 
      className="btn btn-light" 
      onClick={handle}>
        Check Balance
    </button>

  </>);
}