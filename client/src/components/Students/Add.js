import { useState } from "react";
import { useFormFields } from "../../utilities/useFormFields";
import "../../styles/form.css";

const AddForm = () => {
  // States for registration
  const [fields, handleFieldChange] = useFormFields({
    id: "",
    firstName: "",
    lastName: "",
    age: "",
    nationality: "",
  });

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      fields.firstName === "" ||
      fields.lastName === "" ||
      fields.id === null ||
      fields.age === null ||
      fields.nationality === ""
    ) {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
      fetch("/students/add", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
      fields.id = "";
      fields.firstName = "";
      fields.lastName = "";
      fields.age = "";
      fields.nationality = "";
    }
  };

  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h1>User {fields.firstName} successfully registered!!</h1>
      </div>
    );
  };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <h1>Please enter all the fields</h1>
      </div>
    );
  };

  return (
    <div className="form">
      <div className="form-header">
        <h1>Student Registration</h1>
      </div>

      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>

      <form>
        {/* Labels and inputs for form data */}
        <label className="label">ID</label>
        <input
          onChange={handleFieldChange}
          className="input"
          id="id"
          name="id"
          value={fields.id}
          type="number"
          required
        />

        <label className="label">First Name</label>
        <input
          onChange={handleFieldChange}
          className="input"
          id="firstName"
          name="firstName"
          value={fields.firstName}
          type="text"
          required
        />

        <label className="label">Last Name</label>
        <input
          onChange={handleFieldChange}
          id="lastName"
          className="input"
          name="lastName"
          value={fields.lastName}
          type="text"
          required
        />

        <label className="label">Age</label>
        <input
          onChange={handleFieldChange}
          className="input"
          id="age"
          name="age"
          value={fields.age}
          type="number"
          required
        />

        <label className="label">Nationality</label>
        <input
          onChange={handleFieldChange}
          className="input"
          id="nationality"
          name="nationality"
          value={fields.nationality}
          type="text"
          required
        />

        <button onClick={handleSubmit} className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddForm;
