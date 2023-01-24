function AllData() {
  const [data, setData] = React.useState("");

  React.useEffect(() => {
    // fetch all accounts from API
    fetch("/account/all")
      .then((response) => response.json())
      .then((data) => {
        setData(JSON.stringify(data));
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
      <h5>All Data in Store:</h5>
      {data}
    </>
  );
}
