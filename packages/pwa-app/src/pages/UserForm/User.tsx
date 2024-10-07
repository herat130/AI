import { useFormik } from "formik";

const validate = (values: Record<string, string | string[]>) => {
  const errors: Record<string, string | string[]> = {};
  // if (!values.firstName) {
  //   errors.firstName = 'Required';
  // } else if (values.firstName.length > 15) {
  //   errors.firstName = 'Must be 15 characters or less';
  // }

  if (!values.lastname) {
    errors.lastname = "Required";
  } else if (values.lastname.length > 5) {
    errors.lastname = "Must be 5 characters or less";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email as string)
  ) {
    errors.email = "Invalid email address";
  }

  return errors;
};

export default function User() {
  const formik = useFormik({
    initialValues: {
      name: "",
      lastname: "",
      email: "",
      carryDevices: ["headphones"],
      gender: "male",
      age: "",
      country: "india",
    },
    validate,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="formik-form">
      <h2>Formik Form</h2>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="type your name..."
        />
        <br />
        <label htmlFor="lastname">Last Name</label>
        <input
          type="text"
          id="lastname"
          name="lastname"
          value={formik.values.lastname}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="type your last name..."
        />
        <br />
        <label htmlFor="age">Age</label>
        <input
          type="number"
          min={1}
          max={100}
          id="age"
          name="age"
          value={formik.values.age}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="type your last name..."
        />
        <br />
        {formik.touched.lastname && formik.errors.lastname ? (
          <div className="error-msg">{formik.errors.lastname}</div>
        ) : null}
        <br />
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        <br />
        {formik.touched.email && formik.errors.email ? (
          <div className="error-msg">{formik.errors.email}</div>
        ) : null}
        <br />
        <label>
          <input
            onChange={formik.handleChange}
            type="checkbox"
            value="Mobile"
            name="carryDevices"
          />
          Mobile
        </label>
        <br />
        <label>
          <input
            onChange={formik.handleChange}
            type="checkbox"
            value="Laptop"
            name="carryDevices"
          />
          Laptop
        </label>
        <br />
        <label>
          <input
            onChange={formik.handleChange}
            type="checkbox"
            value="Kindle"
            name="carryDevices"
          />
          Kindle
        </label>
        <br />
        <label>
          <input
            onChange={formik.handleChange}
            checked={formik.values.carryDevices.includes("headphones")}
            type="checkbox"
            value="headphones"
            name="carryDevices"
          />
          headphones
        </label>
        <br />
        <h5>Gender</h5>
        <label htmlFor="gendermale">
          <input
            onChange={formik.handleChange}
            type="radio"
            id="gendermale"
            name="gender"
            checked={formik.values.gender === "male"}
            value="male"
          />
          Male
        </label>
        <label htmlFor="genderfemale">
          <input
            onChange={formik.handleChange}
            type="radio"
            id="genderfemale"
            name="gender"
            value="female"
            checked={formik.values.gender === "female"}
          />
          Female
        </label>
        <br />
        <label htmlFor="country">Country</label>
        <br />
        <select
          name="country"
          id="country"
          onChange={formik.handleChange}
          value={formik.values.country}
        >
          <option value="-1">please select</option>
          <option value="india">India</option>
          <option value="usa">USA</option>
        </select>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
