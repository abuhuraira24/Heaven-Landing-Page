import styled from "styled-components";

import { Swiper } from "swiper/react";

export const DealSection = styled.div`
  background: url(${(props) => props.bg});
  padding: 110px 0px 120px;
  position: relative;
  background-position: center;
  background-size: cover;
  &::before {
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

export const DealItems = styled.div`
  width: 700px;
  background: #fff;
  margin: auto;
  display: flex;
  padding: 2rem 3rem;
  border: 10px solid #4158d0a6;
  /* justify-content: center;
  align-items: center; */
  @media (max-width: 768px) {
    width: 400px;
  }
  @media (max-width: 468px) {
    max-width: 100%;
  }
`;

export const LeftArea = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const RighttArea = styled.div`
  width: 60%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Item = styled.div`
  display: flex;
  @media (max-width: 768px) {
    display: block;
  }
`;

export const Image = styled.img`
  max-width: 60%;
`;

export const Stars = styled.div`
  display: flex;
  margin-bottom: 1rem;
  svg {
    color: #f9bd22;
  }
`;

export const H4 = styled.h3`
  font-weight: 500;
  margin-bottom: 1rem;
`;

export const Text = styled.p`
  margin-bottom: 1rem;
`;

export const Price = styled.span`
  background-image: linear-gradient(55deg, #0250c5 0%, #d43f8d 100%);
  font-size: 25px;
  line-height: 30px;
  font-weight: 800;
  background-image: linear-gradient(55deg, #0250c5 0%, #d43f8d 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const DateCount = styled.div`
  margin: 2rem 0;
  display: flex;
`;

export const Span = styled.span`
  display: flex;
  flex-direction: column;
  font-weight: 500;
  box-shadow: 0px 3px 10px rgb(0 0 0 / 10%);
  padding: 8px 20px;
  border-radius: 3px;
  margin-right: 1rem;
`;

export const Small = styled.small``;
