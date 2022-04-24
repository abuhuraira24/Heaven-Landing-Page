import styled from "styled-components";

export const FooterWrapper = styled.div`
  background: url(${(props) => props.bg});
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  padding: 110px 0px 0px;
  &&::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    background-image: linear-gradient(55deg, #0250c5 0%, #d43f8d 100%);
    opacity: 0.9;
  }
`;

export const SocialIcons = styled.ul`
  display: flex;
  justify-content: center;
`;

export const Li = styled.li`
  margin: 0 1rem;
`;
export const Link = styled.a`
  font-size: 14px;
  width: 35px;
  height: 35px;
  display: inline-block;
  border-radius: 50%;
  text-align: center;
  line-height: 36px;
  margin: 0px 3px;
  color: #fff;
  box-shadow: 0px 5px 15px rgb(0 0 0 / 18%);
  transition: all 0.3s ease-in;
  background: ${(props) => props.bg};
  cursor: pointer;
  svg {
  }
`;

export const Hr = styled.hr`
  margin-top: 2rem;
`;

export const CopyRight = styled.div`
  z-index: 9;
  text-align: center;
  padding: 1rem;
`;
