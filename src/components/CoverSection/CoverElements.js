import styled from "styled-components";

export const CoverWrapper = styled.div`
  background: url(${(props) => props.bg});
  background-position: center;
  background-size: cover;
  position: relative;
  height: 787px;
  ::before {
    content: "";
    background-color: #21d4fd26;
    background-image: linear-gradient(19deg, #21d4fd59 0%, #b721ffd9 100%);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  @media (max-width: 991px) {
    height: 900px;
  }
`;
export const CoverContainer = styled.div`
  max-width: 1140px;
  height: 720px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1200px) {
    padding: 0 4rem;
  }
`;

export const CoverContent = styled.div`
  z-index: 9;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10rem;
  height: 720px;

  @media (max-width: 991px) {
    flex-direction: column-reverse;
  }
`;

export const CoverH3 = styled.h1`
  font-size: 44px;
  color: #fff;
  font-weight: 700;
  margin-bottom: 2rem;
  @media (max-width: 468px) {
    font-size: 34px;
  }
`;

export const CoverP = styled.p`
  color: #fff;
  margin-bottom: 2rem;
`;

export const Text = styled.div`
  max-width: 480px;
`;

export const CoverImage = styled.div`
  @media (max-width: 991px) {
    margin-top: 4rem;
  }
  img {
    animation: shapeani3 5s linear infinite;
  }
  @keyframes shapeani3 {
    0% {
      transform: translateY(15px);
    }
    50% {
      transform: translateY(-15px);
    }
    100% {
      transform: translateY(15px);
    }
  }
`;
export const Image = styled.img`
  max-width: 60%;
  margin-left: 10rem;
  @media (max-width: 991px) {
    max-width: 45%;
  }
  @media (max-width: 468px) {
    max-width: 66%;
    margin-left: 2rem;
  }
`;

export const ButtonWrapper = styled.div``;

export const Button = styled.button`
  background: #fff;
  color: #0250c5;
  padding: 1rem 2rem;
  border-radius: 5px;
  position: relative;
  z-index: 9;
  width: 150px;
  transition-delay: 2s;
  transition: width 2s;
  cursor: pointer;
`;
