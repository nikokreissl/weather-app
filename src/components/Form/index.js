import React from "react";
import "./Form.css";

export default function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const activityName = data["activity-name"];
    const activityCheckbox = data.checkbox === "on";
    onAddActivity(activityName, activityCheckbox);

    event.target.reset();
    event.target["activity-name"].focus();
  }

  return (
    <>
      <h2>Add new activity:</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="activity-name">Name</label>
        <input type="text" name="activity-name" id="activity-name" />
        <label htmlFor="checkbox">
          {" "}
          Good-weather activity:
          <input type="checkbox" name="checkbox" id="checkbox" />
        </label>

        <button>Submit</button>
      </form>
    </>
  );
}
