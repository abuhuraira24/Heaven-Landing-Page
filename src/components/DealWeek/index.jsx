import { DealSection,DealItems, LeftArea, RighttArea, Item, Image, Stars, H4, Text ,Price, DateCount, Span, Small} from "./DealWeek";

import {Container, Col,Title,TitleH1,TitleH6, Button} from "../Utils/Elements"

import w1 from "../../assets/images/w1.png"

import { MdStarRate } from "react-icons/md";

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import deal from "../../assets/images/dealbg.jpg"

const DealWeekSection = () => {
    return (
        <DealSection bg={deal}>
            <Container direction="column">
                <Col w="100">
                 <Title>
                   <TitleH1 color="#fff">
                     Deal Of The Week
                   </TitleH1>
                   <TitleH6 color="#fff">
                     Prepared is me marianne pleasure likewise debating. Wonder an unable except better stairs do ye admire. His secure called esteem praise.
                   </TitleH6>
                 </Title>
                </Col>
                <Col w="100" center="false">
                    <DealItems>
                      
                       <Swiper spaceBetween={50}>
                         <SwiperSlide>
                             <Item>
                                <LeftArea>
                                  <Image  src={w1} alt="w1" />
                                </LeftArea>
                                <RighttArea>
                                <Stars>
                                     <MdStarRate />
                                     <MdStarRate />
                                     <MdStarRate />
                                     <MdStarRate />
                                     <MdStarRate />
                                   </Stars>
                                   <H4>Smart Watch (blue)</H4>
                                   <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 

                                   </Text>

                                   <Price>$50</Price>
                                   <DateCount>
                                       <Span>
                                           00
                                           <Small>
                                               Days
                                           </Small>
                                        </Span>
                                        <Span>
                                           00
                                           <Small>
                                               Hours
                                           </Small>
                                        </Span>
                                        <Span>
                                           00
                                           <Small>
                                               Min
                                           </Small>
                                        </Span>
                                        <Span>
                                           00
                                           <Small>
                                               Sec
                                           </Small>
                                        </Span>
                                        
                                   </DateCount>
                                   <Button>Buy Now</Button>
                                </RighttArea>
                             </Item>
                         </SwiperSlide>
                         
                         <SwiperSlide>
                             <Item>
                                <LeftArea>
                                  <Image  src={w1} alt="w1" />
                                </LeftArea>
                                <RighttArea>
                                <Stars>
                                     <MdStarRate />
                                     <MdStarRate />
                                     <MdStarRate />
                                     <MdStarRate />
                                     <MdStarRate />
                                   </Stars>
                                   <H4>Smart Watch (blue)</H4>
                                   <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 

                                   </Text>

                                   <Price>$50</Price>
                                   <DateCount>
                                       <Span>
                                           00
                                           <Small>
                                               Days
                                           </Small>
                                        </Span>
                                        <Span>
                                           00
                                           <Small>
                                               Hours
                                           </Small>
                                        </Span>
                                        <Span>
                                           00
                                           <Small>
                                               Min
                                           </Small>
                                        </Span>
                                        <Span>
                                           00
                                           <Small>
                                               Sec
                                           </Small>
                                        </Span>
                                        
                                   </DateCount>
                                   <Button>Buy Now</Button>
                                </RighttArea>
                             </Item>
                         </SwiperSlide>
                       </Swiper>
                       
                       
                    </DealItems>
                </Col>
    
            </Container>
        </DealSection>
    );
}



export default DealWeekSection;