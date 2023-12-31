import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  position: relative;
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 414px;
  height: 736px;

  border: 1px solid #000;
  background: #fff;
  margin: 0px auto;
`;

const Logo = styled.div`
  position: relative;
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 259px;
  height: 80px;
  flex-shrink: 0;

  margin-top: 2px;
  margin-bottom: 20px;
`;

const Graybox = styled.div`
  position: relative;
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 343px;
  height: 505px;

  border-radius: 20px;
  border: 1px solid #fff;
  background: rgba(125, 125, 125, 0);
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.25);

  margin-top: 10px;
`;

const LoginTitle = styled.div`
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 25px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  width: 130px;
  height: 38px;
  flex-shrink: 0;

  margin-top: 25px;
`;

const Line = styled.div`
  width: 110px;
  height: 4px;

  background: #225a00;

  margin-bottom: 10px;
`;

const Content = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 10px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;

  margin-left: 12px;
`;

const Form = styled.input`
  position: relative;

  width: 258px;
  height: 58px;
  flex-shrink: 0;

  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background: #fff;

  margin-bottom: 15px;
`;
const IDForm = Form;
const PWForm = Form;

const Loginbtn = styled.div`
  position: relative;

  margin-top: 20px;
`;

const Login = () => {
  const handleLoginBtnClick = () => {};

  const [id, setID] = useState("");
  const [pw, setPW] = useState("");

  const handleID = (event) => {
    setID(event.target.value);
  };
  const handlePW = (event) => {
    setPW(event.target.value);
  };

  return (
    <Container>
      <Logo>
        <img
          src={`${process.env.PUBLIC_URL}/images/logo.png`}
          alt="logo"
          width="250px"
        />
      </Logo>
      <Graybox>
        <LoginTitle>로그인</LoginTitle>
        <Line></Line>
        <Content>
          <IDForm
            type="text"
            value={id}
            onChange={handleID}
            placeholder="아이디"
          ></IDForm>
          <PWForm
            type="password"
            value={pw}
            onChange={handlePW}
            placeholder="비밀번호"
          ></PWForm>
        </Content>

        <Loginbtn onClick={handleLoginBtnClick}>
          <img
            src={`${process.env.PUBLIC_URL}/images/loginbtn.png`}
            alt="loginbtn"
            width="110px"
          />
        </Loginbtn>
      </Graybox>
    </Container>
  );
};

export default Login;
