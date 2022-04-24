import { Cart, Img, ProductWrapper, Image, Ul, Li, Prices, H5, Small, ProductTitle,ProductBody } from "./ProductElements";
import { Container, Row, Col, Title,TitleH1,TitleH6} from "../Utils/Elements";
import w1 from "../../assets/images/w1.png"
import { FaStar } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../Products/swipper.css"

import { useEffect,useState } from "react";
// import required modules
import { Pagination } from "swiper";


const Products = () => {

    const [show, setShow] = useState(3)

    const productHandler = () => {
       console.log(window.outerWidth)
       
       if(window.outerWidth < 768){
           setShow(1)
       }else{
           setShow(3)
       }

    }
    useEffect(() => {
        productHandler()
    })
    window.addEventListener('resize', productHandler)
    
    return (
        <ProductWrapper id="products">
            <Container>
                <Row>
                    <Col w="100">
                        <Title>
                         <TitleH1>
                         Our Awesome Products
                         </TitleH1>
                         <TitleH6>
                         Prepared is me marianne pleasure likewise debating. Wonder an unable except better stairs do ye admire. His secure called esteem praise.
                         </TitleH6>
                        </Title>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col>
                    <Swiper 
                      modules={[Pagination]} 
                      className="mySwiper"
                      spaceBetween={50}
                      slidesPerView={show}
                      >
                        <SwiperSlide>
                        <Cart>
                            <Image>
                                <Img src={w1} alt="w1"/>
                            </Image>
                            <ProductBody>
                            <Ul>
                                <Li>
                                    <FaStar />
                                </Li>
                                <Li>
                                    <FaStar />
                                </Li>
                                <Li>
                                    <FaStar />
                                </Li>
                                <Li>
                                    <FaStar />
                                </Li>
                                <Li>
                                    <FaStar />
                                </Li>
                            </Ul>
                            <Prices>
                                <H5>$135</H5>
                                <Small> $193</Small>
                            </Prices>
                            <ProductTitle>
                            Prolab Blue
                            </ProductTitle>
                            </ProductBody>
                        </Cart>
                        </SwiperSlide>
                        <SwiperSlide>
                        <Cart>
                            <Image>
                                <Img src={w1} alt="w1"/>
                            </Image>
                            <Ul>
                                <Li>
                                    <FaStar />
                                </Li>
                                <Li>
                                    <FaStar />
                                </Li>
                                <Li>
                                    <FaStar />
                                </Li>
                                <Li>
                                    <FaStar />
                                </Li>
                                <Li>
                                    <FaStar />
                                </Li>
                            </Ul>
                            <Prices>
                                <H5>$135</H5>
                                <Small> $193</Small>
                            </Prices>
                            <ProductTitle>
                            Prolab Blue
                            </ProductTitle>
                        </Cart>
                        </SwiperSlide>
                        <SwiperSlide>
                        <Cart>
                            <Image>
                                <Img src={w1} alt="w1"/>
                            </Image>
                            <Ul>
                                <Li>
                                    <FaStar />
                                </Li>
                                <Li>
                                    <FaStar />
                                </Li>
                                <Li>
                                    <FaStar />
                                </Li>
                                <Li>
                                    <FaStar />
                                </Li>
                                <Li>
                                    <FaStar />
                                </Li>
                            </Ul>
                            <Prices>
                                <H5>$135</H5>
                                <Small> $193</Small>
                            </Prices>
                            <ProductTitle>
                            Prolab Blue
                            </ProductTitle>
                        </Cart>
                        </SwiperSlide>
                        <SwiperSlide>
                        <Cart>
                            <Image>
                                <Img src={w1} alt="w1"/>
                            </Image>
                            <Ul>
                                <Li>
                                    <FaStar />
                                </Li>
                                <Li>
                                    <FaStar />
                                </Li>
                                <Li>
                                    <FaStar />
                                </Li>
                                <Li>
                                    <FaStar />
                                </Li>
                                <Li>
                                    <FaStar />
                                </Li>
                            </Ul>
                            <Prices>
                                <H5>$135</H5>
                                <Small> $193</Small>
                            </Prices>
                            <ProductTitle>
                            Prolab Blue
                            </ProductTitle>
                        </Cart>
                        </SwiperSlide>
                        <SwiperSlide>
                        <Cart>
                            <Image>
                                <Img src={w1} alt="w1"/>
                            </Image>
                            <Ul>
                                <Li>
                                    <FaStar />
                                </Li>
                                <Li>
                                    <FaStar />
                                </Li>
                                <Li>
                                    <FaStar />
                                </Li>
                                <Li>
                                    <FaStar />
                                </Li>
                                <Li>
                                    <FaStar />
                                </Li>
                            </Ul>
                            <Prices>
                                <H5>$135</H5>
                                <Small> $193</Small>
                            </Prices>
                            <ProductTitle>
                            Prolab Blue
                            </ProductTitle>
                        </Cart>
                        </SwiperSlide>
                    </Swiper>
                    </Col>
                </Row>
            </Container>
        </ProductWrapper>
    );
}

export default Products;