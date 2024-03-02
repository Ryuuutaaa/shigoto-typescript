import React from "react";

type isStatusProps = {
  status: "loading" | "success" | "error";
};

const Status = (props: isStatusProps) => {
  let massage;

  if (props.status === "loading") {
    massage = "Loadingg.....";
  } else if (props.status === "success") {
    massage = "Thiss successs";
  } else if (props.status === "error") {
    massage = "Try againn";
  }
  return (
    <div>
      <h2>{massage}</h2>
    </div>
  );
};

export default Status;
