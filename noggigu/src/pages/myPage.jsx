import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 414px;
  height: 736px;

  margin: 0px auto;

  border: 1px solid #000;
  background: #fff;
`;

const TopBox = styled.div`
  margin-top: 10px;
  padding-left: 290px;
`;
const Button = styled.button`
  border: none;
  background-color: #ffffff00;

  color: #000;
  font-family: Inter;
  font-size: 9.389px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  text-decoration-line: underline;
`;

const Top = () => {
  return (
    <TopBox>
      <Button>로그아웃</Button>
      <Button>마이페이지</Button>
    </TopBox>
  );
};

const TitleBox = styled.div`
  margin-top: 15px;
  padding-left: 80px;
`;

const SmallTitle = styled.div`
  height: 70px;
  margin-top: 35px;

  padding-left: 150px;

  color: #000;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const Line = styled.div`
  width: 161px;
  height: 3px;

  margin-top: 8px;
  margin-left: -25px;

  background: #358700;
`;
const AboutLevel = styled.span`
  margin-left: -20px;
  margin-right: 20px;

  color: #000;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const AboutName = styled.span`
  margin-left: -20px;
  margin-right: 20px;

  color: #000;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const AboutNim = styled.span`
  margin-left: -20px;
  margin-right: 20px;

  color: #000;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const MiddleBox = styled.div`
  height: 220px;

  margin-top: 20px;
  padding-left: 15px;
`;
const MiddleTitle = styled.div`
  padding-left: 10px;
  color: #000;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const MiddleContent = styled.div`
  width: 345px;
  height: 162px;

  margin-top: 20px;
  margin-left: 12px;
  padding: 8px;

  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 0px 3px 0px rgba(23, 58, 0, 0.6);

  color: #0c0c0c;
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const LikeBox = styled.div`
  height: 230px;
`;

const ListText = styled.div`
  margin-top: 24px;
  padding-left: 20px;

  color: #000;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
const ListBox = styled.div`
  background-color: coral;
  height: 180px;
  width: 370px;

  margin-left: 23px;
  margin-top: 15px;
`;

const Page = () => {
  return (
    <Container>
      <Top />
      <TitleBox>
        <img src="/img/title.png" />
      </TitleBox>

      <SmallTitle>
        마이페이지
        <Line></Line>
        <AboutLevel>행복한 농부, </AboutLevel>
        <AboutName>정민지</AboutName>
        <AboutNim>님</AboutNim>
      </SmallTitle>

      <MiddleBox>
        <MiddleTitle>
          <img src="/img/pen.png" style={{ width: "15px" }} />
          작성한 글
        </MiddleTitle>
        <MiddleContent>
          {" "}
          농기구
          <br />
          1.농기구 대여합니다. 오늘까지만 대여할게요.
          <br />
          2.6월 30일까지 대여합니다. 가져가세요.
        </MiddleContent>
      </MiddleBox>

      <LikeBox>
        <ListText>
          <img src="/img/heart.png" style={{ width: "18px" }} />
          관심목록
        </ListText>
        <ListBox></ListBox>
      </LikeBox>
    </Container>
  );
};

export default Page;
