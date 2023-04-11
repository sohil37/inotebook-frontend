import React from "react";

function Alert(props) {
  const { type, title, message } = props.alertData;

  return (
    <div
      className={`alert alert-${type} alert-dismissible fade show`}
      role="alert">
      <strong>{title}:</strong> {message}
    </div>
  );
}

export default Alert;
