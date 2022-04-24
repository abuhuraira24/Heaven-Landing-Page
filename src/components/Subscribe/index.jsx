import { Buton, Buttons, Input, Span, StoreBtn, SubscribeBar, SubscribeWrappper } from "./SubscribeElements";

import {Container, Row, Col, Title, TitleH1, TitleH6} from "../Utils/Elements"

import { FaGooglePlay,FaApple } from "react-icons/fa";

import map from "../Subscribe/map.png"

const Subscriber = () => {
    return (
        <SubscribeWrappper bg={map}>
            <Container>
                <Row>
                    <Col w="100">
                        <Title>
                            <TitleH1>Subscribe To Get Updates</TitleH1>
                            <TitleH6>
                            Prepared is me marianne pleasure likewise debating. Wonder an unable except better stairs do ye admire. His secure called esteem praise.
                            </TitleH6>
                        </Title>
                    </Col>
                </Row>
                <Row>
                    <Col w="22" mdnone="true"></Col>
                    <Col w="56" md="100">
                     <SubscribeBar>
                        <Input type="email" placeholder="Your email address..." />
                        <Buton radius="50" h="84">Subscribe</Buton>
                     </SubscribeBar>
                     <Span>Download Our App from</Span>
                     <Buttons>
                         <StoreBtn>
                             <FaGooglePlay />
                             Play Store
                         </StoreBtn>
                         <StoreBtn>
                             <FaApple />
                          App Store  
                         </StoreBtn>
                     </Buttons>
                    </Col>
                    <Col w="22" mdnone="true"></Col>
                </Row>
            </Container>
        </SubscribeWrappper>
    );
}


export default Subscriber;