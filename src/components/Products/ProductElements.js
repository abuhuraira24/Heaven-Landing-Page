import styled from "styled-components";

export const ProductWrapper = styled.div`
  padding: 110px 0px 120px;
`;
export const Cart = styled.div`
  background: rgba(2, 80, 197, 0.05);
  padding-bottom: 2rem;
  position: relative;
`;

export const Image = styled.div`
  background: rgba(212, 63, 141, 0.2);
  padding: 2rem;
  overflow: hidden;
`;

export const Img = styled.img`
  width: 100%;
`;

export const ProductBody = styled.div``;
export const Ul = styled.ul`
  padding: 1rem;
  display: flex;
  justify-content: center;
`;
export const Li = styled.li`
  display: inline-block;
  color: #56eb00;
  svg {
    margin: 0 4px;
  }
`;

export const Prices = styled.div`
  display: flex;
  justify-content: center;
`;
export const H5 = styled.h5`
  margin-right: 1rem;
  background-image: linear-gradient(55deg, #0250c5 0%, #d43f8d 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 26px;
`;
export const Small = styled.small`
  line-height: 44px;
`;

export const ProductTitle = styled.h4`
  font-size: 20px;
  line-height: 30px;
  font-weight: 600;
  text-align: center;
`;

export const Links = styled.div`
  position: absolute;
  top: 101%;
  left: 0;
  text-align: center;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease-in;
  display: flex;
  justify-content: center;
  align-items: center;
`;
