function Deposit({ signedInUID }) {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");

  return (
    <Card
      bgcolor="warning"
      header="Deposit"
      status={status}
      body={
        show ? (
          <DepositForm
            setShow={setShow}
            signedInUID={signedInUID}
            setStatus={setStatus}
          />
        ) : (
          <DepositMsg setShow={setShow} setStatus={setStatus} />
        )
      }
    />
  );
}

function DepositMsg(props) {
  return (
    <>
      <h5>Success</h5>
      <button
        type="submit"
        className="btn btn-light"
        onClick={() => {
          props.setShow(true);
          props.setStatus("");
        }}
      >
        Deposit again
      </button>
    </>
  );
}

function DepositForm(props) {
  const [amount, setAmount] = React.useState("");

  function handle() {
    console.log("depo handler uid:", props.signedInUID);

    const urlAddTransaction = `/account/addTransaction/Deposit/${props.signedInUID}/${amount}`;
    (async () => {
      var res = await fetch(urlAddTransaction);
      var data = await res.json();
      console.log(data);
    })();

    fetch(`/account/update/${props.signedInUID}/${amount}`)
      .then((response) => response.text())
      .then((text) => {
        try {
          // const data = JSON.parse(text);
          // props.setStatus(JSON.stringify(data.value));
          props.setShow(false);
          // console.log('JSON:', data);
        } catch (err) {
          props.setStatus("Deposit failed");
          console.log("err:", text);
        }
      });
  }

  return (
    <>
      Amount
      <br />
      <input
        type="number"
        className="form-control"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.currentTarget.value)}
      />
      <br />
      <button type="submit" className="btn btn-light" onClick={handle}>
        Deposit
      </button>
    </>
  );
}
