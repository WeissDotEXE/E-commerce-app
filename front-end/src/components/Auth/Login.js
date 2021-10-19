import { useRef, Fragment, useState } from "react";
import Form from "../UI/Form";
import styles from "../Styles/Auth.module.scss";
import Navbar from "../UI/Navbar";
import Button from "../UI/Button";

const Login = () => {
  const inputEmailRef = useRef();
  const inputPasswordRef = useRef();
  const [errorMessage, setErrorMessage] = useState(null);

  const submitHandler = async (event) => {
    event.preventDefault();

    const email = inputEmailRef.current.value;
    const password = inputPasswordRef.current.value;
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
  };

  return (
    <Fragment>
      <Navbar />
      <div className={styles.authForm}>
        <h1>Login</h1>
        <p>{errorMessage}</p>
        <Form onSubmit={submitHandler}>
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
          <Button type="submit">Register</Button>
        </Form>
      </div>
    </Fragment>
  );
};

export default Login;
