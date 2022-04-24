import styled from "styled-components";

export const ClientWrapper = styled.div`
  padding: 110px 0px 120px;
  background: url(${(props) => props.bg});
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  overflow: hidden;
  &&::before {
    content: "";
    background-color: #21d4fd26;
    background-image: linear-gradient(19deg, #21d4fd59 0%, #b721ffd9 100%);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export const ReviewCart = styled.div`
  background: #fff;
  margin: 2rem 0;
  border-radius: 5px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0px 30px 27px;
`;

export const ClientImage = styled.div`
  width: 70px;
  height: 70px;
  overflow: hidden;
  border-radius: 50%;
  position: relative;
  top: -30px;
  border: 5px solid #21d4fd59;
`;

export const Img = styled.img`
  max-width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 50%;
`;

export const Text = styled.p`
  font-size: 16px;
  color: #555;
  font-weight: 400;
  line-height: 1.625;
`;

export const Name = styled.h4`
  margin-top: 1.8rem;
  cursor: pointer;
`;

export const Span = styled.span`
  color: #555;
  font-size: 14px;
  font-weight: 600;
`;

export const Man = styled.div``;

export const Person = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  border: 5px solid #fff;
  width: 60px;
  height: 60px;
  top: 67px;
  left: -110px;
  margin-left: ${(props) => props.ml}rem;
  animation: shapeani1 ${(props) => props.sec}s linear infinite;
  transition-delay: ${(props) => props.delay}s;
  @keyframes shapeani1 {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
`;
