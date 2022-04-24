import { ClientImage, ClientWrapper, Img, Man, Name, Person, ReviewCart, Span, Text } from "./ClientElements";

import {Container, Row, Col, Title, TitleH1, TitleH6} from "../Utils/Elements"

import bg from "../Client/bg.jpg"
import one from "../Client/1.jpg"
import two from "../Client/2.jpg"
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import client from "../Client/client.jpg"

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Clients = () => {
    return (
        <ClientWrapper bg={bg} id="tstimonial">
             <Container>
                 <Row>
                     <Col w="100">
                         <Title>
                         <TitleH1 color="#fff">Our Clients Say </TitleH1>
                         <TitleH6 color="#fff">
                           Prepared is me marianne pleasure likewise debating. Wonder an unable except better stairs do ye admire. His secure called esteem praise.
                         </TitleH6>
                         </Title>
                     </Col>
                 </Row>
                 <Row>
                     <Col w="25" sm="0" none={true}>
                        <Man>
                            <Person ml="4" sec="3.2" delay="22">
                                <Img src={client}/>
                            </Person>
                            <Person sec="3.5" delay="14">
                                <Img src={one}/>
                            </Person>
                            <Person ml="4" sec="3.1" delay="8">
                                <Img src={two}/>
                            </Person>
                        </Man>
                     </Col>
                     <Col w="50" sm="100">
                     <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={50}
                        slidesPerView={1}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                        >
                        <SwiperSlide>
                            <ReviewCart>
                               <ClientImage>
                                   <Img src={client} alt="Abu Huraira"/>
                               </ClientImage>
                               <Text>
                                    Do play they miss give so up. Words to up style of since world. Way own uncommonly travelling now
                                    acceptance bed compliment solicitude. We leaf to snug on no need.
                               </Text>
                               <Name>Abu Huraira</Name>
                               <Span>CEO of Me</Span>
                            </ReviewCart>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ReviewCart>
                               <ClientImage>
                                   <Img src={two} alt="Natasha li"/>
                               </ClientImage>
                               <Text>
                                    Do play they miss give so up. Words to up style of since world. Way own uncommonly travelling now
                                    acceptance bed compliment solicitude. We leaf to snug on no need.
                               </Text>
                               <Name> Natasha li</Name>
                               <Span>CEO of Facebook</Span>
                            </ReviewCart>
                        </SwiperSlide>
                        
                     </Swiper>

                     </Col>
                     <Col w="25" sm="0" none={true}>
                     <Man>
                            <Person ml="4"  sec="3" delay="16">
                                <Img src={client}/>
                            </Person>
                            <Person ml="8" sec="3.5" delay="8">
                                <Img src={two}/>
                            </Person>
                            <Person ml="4" sec="3" delay="26">
                                <Img src={one}/>
                            </Person>
                        </Man>
                     </Col>
                 </Row>
             </Container>

        </ClientWrapper>
    );
}


export default Clients;