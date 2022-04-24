import styled from "styled-components";

export const SubscribeWrappper = styled.div`
  padding: 110px 0px 120px;
  background: url(${(props) => props.bg});
  background-size: cover;
  background-position: revers;
  background-repeat: no-repeat;
`;

export const SubscribeBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  height: 60px;
  border-radius: 50px;
  border: 1px solid rgba(212, 63, 141, 0.1);
  padding: 0px 30px;
  background: none;
  color: #242424;
  background: #fff;
  box-shadow: 0px 0px 28px 2px rgb(0 0 0 / 10%);
`;

export const Buton = styled.button`
  position: absolute;
  right: 0;
  background-image: linear-gradient(19deg, #21d4fdfa 0%, #b721ffd9 100%);
  cursor: pointer;
  height: ${(props) => props.h}%;
  border-radius: ${(props) => props.radius}px;
  padding: 0 2rem;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
`;

export const Span = styled.span`
  display: block;
  text-align: center;
  margin-top: 4rem;
  margin-bottom: 2rem;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
`;

export const StoreBtn = styled.button`
  background-image: linear-gradient(19deg, #21d4fdfa 0%, #b721ffd9 100%);
  cursor: pointer;
  height: ${(props) => props.h}%;
  border-radius: ${(props) => props.radius}px;
  padding: 0 2rem;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  padding: 18px 30px;
  margin: 4px 5px;
  svg {
    margin-right: 1rem;
  }
`;
