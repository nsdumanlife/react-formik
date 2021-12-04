import "./App.css";
import { Formik } from "formik";

function App() {
  return (
    <div className="App">
      <Formik
        initialValues={{
          name: "",
          surname: "",
          email: "",
          gender: "",
          country: "",
          hobbies: [],
        }}
        validate={(values) => {
          const errors = {};

          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));

            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name : </label>
            <input
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
            {errors.name && touched.name && errors.name}
            <br />
            <br />

            <label htmlFor="surname">Surname : </label>
            <input
              name="surname"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.surname}
            />
            {errors.surname && touched.surname && errors.surname}
            <br />
            <br />

            <label htmlFor="email">Email : </label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && errors.email}
            <br />
            <br />

            <span>Male</span>
            <input
              type="radio"
              name="gender"
              onChange={handleChange}
              value="male"
            />
            <br />
            <br />

            <span>Female</span>
            <input
              type="radio"
              name="gender"
              onChange={handleChange}
              value="female"
            />
            <br />
            <br />

            <select name="country" id="country" onChange={handleChange}>
              <option value="TR">Turkey</option>
              <option value="USA">USA</option>
              <option value="NL">Holland</option>
            </select>
            <br />
            <br />

            <input
              type="checkbox"
              name="hobbies"
              onChange={handleChange}
              value="football"
            />
            <span>Football</span>
            <br />
            <input
              type="checkbox"
              name="hobbies"
              onChange={handleChange}
              value="music"
            />
            <span>Music</span>
            <br />
            <input
              type="checkbox"
              name="hobbies"
              onChange={handleChange}
              value="coding"
            />
            <span>Coding</span>
            <br />
            <br />

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
            <br />
            <br />

            {JSON.stringify(values)}
          </form>
        )}
      </Formik>
    </div>
  );
}

export default App;
