import styled from "styled-components";

export const About = styled.div`
  background: #fff;
`;

export const AboutContainer = styled.div`
  max-width: 1140px;
  margin: auto;
  padding: 110px 0px 120px;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const Col = styled.div`
  max-width: 33.33%;
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export const Title = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;
`;

export const AboutH1 = styled.h1`
  margin-bottom: 1rem;
`;

export const AboutH6 = styled.h6`
  max-width: 650px;
  margin: 0 auto;
  color: #555;
  font-weight: 400;
  line-height: 1.625;
  @media (max-width: 668px) {
    max-width: 400px;
  }
`;

export const AboutCart = styled.div`
  text-align: center;
  margin-bottom: 30px;
  background: #fff;
  box-shadow: 5px 5px 20px 0px rgb(0 0 0 / 10%);
  border-radius: 30px 0px 30px 0px;
  padding: 27px 25px 35px;
`;

export const CartIcon = styled.span`
  svg {
    color: #4287f5;
    font-size: 36px;
  }
`;
export const CartH4 = styled.h4`
  font-size: 24px;
  margin: 9px 0px 22px;
  color: #242424;
  font-weight: 500;
`;
export const CartP = styled.p`
  font-size: 16px;
  color: #555;
  font-weight: 400;
  line-height: 1.625;
`;

export const BestWayWrapper = styled.div`
  padding: 110px 0px 120px;
  background: #f7f9ff;
`;

export const Image = styled.div`
  display: ${(props) => (props.center ? "flex" : "block")};
  justify-content: ${(props) => (props.center ? "center" : "center")};
  align-items: ${(props) => (props.center ? "center" : "center")};

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

export const Img = styled.img`
  max-width: 70%;
  margin-bottom: 2rem;
  @media (max-width: 991px) {
    max-width: 40%;
    margin-bottom: 2rem;
  }
`;

export const BestWayCart = styled.div`
  margin-top: 4rem;
`;
