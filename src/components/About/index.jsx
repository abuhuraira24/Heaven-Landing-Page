import React from 'react';
import { About, AboutContainer,Row,Col,Title,AboutH1,AboutH6, AboutCart,CartIcon, CartH4, CartP } from './AboutElements';
import { AiFillSignal } from "react-icons/ai";
const AboutSection = () => {
    return (
        <About id="about">
            <AboutContainer>
                <Title>
                    <AboutH1>Why Prolab Is Best</AboutH1>
                    <AboutH6>
                    Prepared is me marianne pleasure likewise debating. Wonder an unable except better stairs do ye admire. His secure called esteem praise.
                    </AboutH6>
                </Title>
   
               <Row>
               <Col>
                  <AboutCart>
                      <CartIcon>
                          <AiFillSignal />
                      </CartIcon>
                     <CartH4>Interactive Design</CartH4>
                     <CartP>
                        Viewing hastily or written dearest elderly up weather. direction so sweetness, Donec dearest justo eget felis.
                     </CartP>
                  </AboutCart>
                </Col>
                <Col>
                  <AboutCart>
                     <CartIcon>
                          <AiFillSignal />
                     </CartIcon>
                     <CartH4>Interactive Design</CartH4>
                     <CartP>
                        Viewing hastily or written dearest elderly up weather. direction so sweetness, Donec dearest justo eget felis.
                     </CartP>
                  </AboutCart>
                </Col>
                <Col>
                  <AboutCart>
                     <CartIcon>
                          <AiFillSignal />
                     </CartIcon>
                     <CartH4>Interactive Design</CartH4>
                     <CartP>
                        Viewing hastily or written dearest elderly up weather. direction so sweetness, Donec dearest justo eget felis.
                     </CartP>
                  </AboutCart>
                </Col>
                <Col>
                  <AboutCart>
                      <CartIcon>
                          <AiFillSignal />
                      </CartIcon>
                     <CartH4>Interactive Design</CartH4>
                     <CartP>
                        Viewing hastily or written dearest elderly up weather. direction so sweetness, Donec dearest justo eget felis.
                     </CartP>
                  </AboutCart>
                </Col>
                <Col>
                  <AboutCart>
                     <CartIcon>
                          <AiFillSignal />
                     </CartIcon>
                     <CartH4>Interactive Design</CartH4>
                     <CartP>
                        Viewing hastily or written dearest elderly up weather. direction so sweetness, Donec dearest justo eget felis.
                     </CartP>
                  </AboutCart>
                </Col>
                <Col>
                  <AboutCart>
                     <CartIcon>
                          <AiFillSignal />
                     </CartIcon>
                     <CartH4>Interactive Design</CartH4>
                     <CartP>
                        Viewing hastily or written dearest elderly up weather. direction so sweetness, Donec dearest justo eget felis.
                     </CartP>
                  </AboutCart>
                </Col>
               </Row>
            </AboutContainer>
        </About>
    );
}



export default AboutSection;