import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";
import { loginAuth, registerAuth } from "../store/actions/authAction";

const Auth = (props) => {
  const {
    isAuthenticated,
    isLoading,
    // errors,
    message,
  } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = () => {
    setIsLogin(!isLogin)
  }

  const userLogin = () => {
    const user = { username, password };
    dispatch(loginAuth(user));
  };

  const userRegister = () => {
    const user = { email, password, username };
    dispatch(registerAuth(user));
  };

  if (isAuthenticated) {
    return <Redirect to="/checklist" />;
  }
  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col lg="4">
          <Form>
            <h1 className="text-center text-primary font-weight-bold mb-3">
              {!isLogin ? "Register" : "Login"}
            </h1>
            {!isLogin && (
              <FormGroup>
                <Label className=" text-primary font-weight-bold">Email</Label>
                <Input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </FormGroup>
            )}

            <FormGroup>
              <Label className=" text-primary font-weight-bold">Username</Label>
              <Input
                type="text"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label className=" text-primary font-weight-bold">Password</Label>
              <Input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </FormGroup>
            <div className=" d-flex justify-content-center">
              <Button
                onClick={isLogin ? userLogin : userRegister}
                className="w-100 bg-primary font-weight-bold"
              >
                {isLoading ? "Loading..." : " Submit"}
              </Button>
            </div>
            <div>
              {message && (
                <p className="text-danger text-center mt-2">{message}</p>
              )}
            </div>
          </Form>
          {!isLogin ? (
            <p className="mt-4 ">
              Sudah punya akun?
              <span
                className="text-primary font-weight-bold"
                onClick={register}
                style={{ cursor: "pointer" }}
              >
                {" "}
                login
              </span>
            </p>
          ) : (
            <p className="mt-4 ">
              Belum punya akun?
              <span
                className="text-primary font-weight-bold"
                onClick={register}
                style={{ cursor: "pointer" }}
              >
                {" "}
                register
              </span>
            </p>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Auth;
