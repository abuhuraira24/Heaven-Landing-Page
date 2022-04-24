import { Container, Row, Col } from "../Utils/Elements";
import { BestWayWrapper,Image, Img, AboutH1, BestWayCart, CartIcon, CartP, CartH4} from "./AboutElements";
import { AiFillSignal } from "react-icons/ai";
const BestWay = () => {
    return (
        <BestWayWrapper>
            <Container margin='true'>
                <Row>
                    <Col w="50" md="991">
                        <Image  center='true'>
                          <Img src={require('../../assets/images/w2.png')} alt="w4" />
                        </Image>
                    </Col>
                    <Col w="50" md="991">
                        <AboutH1>
                        A Watch Can Make Your Life Easy and Fast.
                        </AboutH1>

                      <Row>
                          <Col w="50" sm="414">
                            <BestWayCart>
                                <CartIcon>
                                <AiFillSignal />
                                </CartIcon>
                                <CartH4>Interactive Design</CartH4>
                                    <CartP>
                                        Viewing hastily or written dearest elderly up weather. direction so sweetness, Donec dearest justo eget felis.
                                </CartP>
                            </BestWayCart>
                          </Col>
                          <Col w="50" sm="414">
                            <BestWayCart>
                                <CartIcon>
                                <AiFillSignal />
                                </CartIcon>
                                <CartH4>Interactive Design</CartH4>
                                    <CartP>
                                        Viewing hastily or written dearest elderly up weather. direction so sweetness, Donec dearest justo eget felis.
                                </CartP>
                            </BestWayCart>
                          </Col>
                          <Col w="50" sm="414">
                            <BestWayCart>
                                <CartIcon>
                                <AiFillSignal />
                                </CartIcon>
                                <CartH4>Interactive Design</CartH4>
                                    <CartP>
                                        Viewing hastily or written dearest elderly up weather. direction so sweetness, Donec dearest justo eget felis.
                                </CartP>
                            </BestWayCart>
                          </Col>
                          <Col w="50" sm="414">
                            <BestWayCart>
                                <CartIcon>
                                <AiFillSignal />
                                </CartIcon>
                                <CartH4>Interactive Design</CartH4>
                                    <CartP>
                                        Viewing hastily or written dearest elderly up weather. direction so sweetness, Donec dearest justo eget felis.
                                </CartP>
                            </BestWayCart>
                          </Col>
                      </Row>
                    </Col>
                </Row>

            </Container>
            <Container>
                <Row direction="true">
                    <Col w="50" md="991">
                        <Image  center='true'>
                          <Img src={require('../../assets/images/w1.png')} alt="w4" />
                        </Image>
                    </Col>
                    <Col w="50" md="991">
                        <AboutH1>
                        A Watch Can Make Your Life Easy and Fast.
                        </AboutH1>

                      <Row>
                          <Col w="50" sm="414">
                            <BestWayCart>
                                <CartIcon>
                                <AiFillSignal />
                                </CartIcon>
                                <CartH4>Interactive Design</CartH4>
                                    <CartP>
                                        Viewing hastily or written dearest elderly up weather. direction so sweetness, Donec dearest justo eget felis.
                                </CartP>
                            </BestWayCart>
                          </Col>
                          <Col w="50" sm="414">
                            <BestWayCart>
                                <CartIcon>
                                <AiFillSignal />
                                </CartIcon>
                                <CartH4>Interactive Design</CartH4>
                                    <CartP>
                                        Viewing hastily or written dearest elderly up weather. direction so sweetness, Donec dearest justo eget felis.
                                </CartP>
                            </BestWayCart>
                          </Col>
                          <Col w="50" sm="414">
                            <BestWayCart>
                                <CartIcon>
                                <AiFillSignal />
                                </CartIcon>
                                <CartH4>Interactive Design</CartH4>
                                    <CartP>
                                        Viewing hastily or written dearest elderly up weather. direction so sweetness, Donec dearest justo eget felis.
                                </CartP>
                            </BestWayCart>
                          </Col>
                          <Col w="50" sm="414">
                            <BestWayCart>
                                <CartIcon>
                                <AiFillSignal />
                                </CartIcon>
                                <CartH4>Interactive Design</CartH4>
                                    <CartP>
                                        Viewing hastily or written dearest elderly up weather. direction so sweetness, Donec dearest justo eget felis.
                                </CartP>
                            </BestWayCart>
                          </Col>
                      </Row>
                    </Col>
                </Row>

            </Container>
        </BestWayWrapper>
    );
}

export default BestWay;