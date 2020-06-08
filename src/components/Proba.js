import React, { useState, useEffect } from "react";
import { addPerson, deletePerson } from "./../store/action";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import { authenticate, down } from "./../store/action";

export const Proba = () => {
  const [state, setState] = useState([]);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deletePerson(id));
  };
  const handleDown = () => {
    dispatch(down());
  };
  const statePerson = (state) => state.person;
  const person = useSelector(statePerson);
  const addPersonHandle = () => {
    setState([...person]);
  };

  return (
    <div>
      {person.map((user) => (
        <div
          onClick={() => {
            handleDelete(user.id);
          }}
          key={user.id}
        >
          <h1>{user.name}</h1>
          <p>{user.id}</p>
        </div>
      ))}
      <button onClick={addPersonHandle}>Person</button>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={({ email, password }) => {
          dispatch(authenticate({ email, password }));
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,

          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={values.email}
            />

            <input
              type="password"
              name="password"
              onChange={handleChange}
              value={values.password}
            />

            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
      <button onClick={handleDown}>Down</button>
    </div>
  );
};
