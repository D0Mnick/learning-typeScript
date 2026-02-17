type StatusProps = {
  status: "loading" | "success" | "error";
};

function Status({ status }: StatusProps) {
  let message;

  if (status === "loading") {
    message = "Loading...";
  } else if (status === "success") {
    message = "Data fetched successfully!";
  } else if (status === "error") {
    message = "Error fetching data.";
  }

  return (
    <div>
      <h2>{status}</h2>
      <h2>data fetched successfully</h2>
      <h2>Error fetching data</h2>
    </div>
  );
}

export default Status;
