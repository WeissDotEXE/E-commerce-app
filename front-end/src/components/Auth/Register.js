import { Fragment, useRef, useState } from "react";
import Button from "../UI/Button";
import Form from "../UI/Form";
import Navbar from "../UI/Navbar";

import styles from '../Styles/Auth.module.scss';

const Register = () => {
  const inputEmailRef = useRef();
  const inputPasswordRef = useRef();
  const inputPasswordConfRef = useRef();
  const inputNameRef = useRef();
  const [errorMessage, setErrorMessage] = useState(null);

  const submitHandler = async (event) => {
    event.preventDefault();
    const name = inputNameRef.current.value;
    const email = inputEmailRef.current.value;
    const password = inputPasswordRef.current.value;
    const confirmPassword = inputPasswordConfRef.current.value;
    if (password === confirmPassword) {
      try {
        const response = await fetch("link", {
          method: "POST",
          body: {
            email,
            password,
          },
          headers: {
            "Content-Type": "application.json",
          },
        });
        const data = response.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    } else {
      setErrorMessage("Passwords are not the same");
    }
  };

  return (
    <Fragment>
      <Navbar />
      <div className={styles.authForm}>
          <h1>Register</h1>
          <p>{errorMessage}</p>
      <Form onSubmit={submitHandler}>
        <label id={styles.name}>Name</label>
        <input type="text" ref={inputNameRef} />
        <label>E-mail</label>
        <input
          type="email"
          required
          placeholder="test@gmail.com"
          ref={inputEmailRef}
        />
        <label>Password</label>
        <input
          type="password"
          required
          placeholder="password"
          ref={inputPasswordRef}
        />
        <label>Confirm Password</label>
        <input
          type="password"
          required
          placeholder="Confirm password"
          ref={inputPasswordConfRef}
        />
        <Button type="submit">Register</Button>
      </Form>
      
      </div>
      
    </Fragment>
  );
};

export default Register;
