import React, { useState, useEffect } from "react";
import axios from "../utils/axios";
import { Button, Input } from "../components";
import {
  StyledTitle,
  MainContainer,
  StyledBody,
  Form,
  FlexBox,
  StyledLink,
} from "../components/StyledElements";
import { useNavigate } from "react-router-dom";

const Login = ({ props }) => {
  const navigate = useNavigate();

  // Login
  const _login = async (e) => {
    const { username, password } = state;
    try {
      const response = await axios.post("/api/user/login", {
        username,
        password,
      });
      console.log(response);
      navigate("/untitled");
      return response;
    } catch (error) {
      console.log(error.response.data.detail, state);
      return false;
    }
  };

  // state
  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  return (
    <MainContainer>
      <FlexBox
        width="600px"
        height="600px"
        background="#fff"
        rad="8px"
        shadow="2px 4px 12px rgb(0 0 0 / 8%)"
        align="center"
        just="center"
        direction="column"
      >
        <StyledTitle align="center" margin="0 0 40px 0">
          Login
        </StyledTitle>
        <Form method="POST" direction="column">
          <Input
            type="email"
            id="username"
            placeholder="이메일"
            value={state.username}
            onChange={handleChange}
          />

          <Input
            type="password"
            id="password"
            value={state.password}
            onChange={handleChange}
            placeholder="비밀번호"
          />

          <Button type="button" onClick={_login} title="로그인" width="300px" />
        </Form>
        <FlexBox direction="column" align="center">
          <FlexBox margin="0 0 20px 0">
            <StyledBody>
              계정을 잊으셨나요? <StyledLink to="/register">ID찾기</StyledLink>
              또는 <StyledLink to="/register">비밀번호찾기</StyledLink>
            </StyledBody>
          </FlexBox>
          <FlexBox>
            <StyledBody>
              아직 회원이 아니신가요?{" "}
              <StyledLink to="/register">회원가입.</StyledLink>
            </StyledBody>
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </MainContainer>
  );
};

export default Login;