import { CopyRight, FooterWrapper, Hr, Li, Link, SocialIcons } from "./FooterElements";

import {Col, Container, Row, Title, TitleH1, TitleH6} from "../Utils/Elements"
import { FaFacebook,FaGooglePlus,FaDribbble } from "react-icons/fa";
import bg from "../Footer/foot.jpg"

const Footer = () => {
    return (
        <FooterWrapper bg={bg}>
          <Container>
            <Row>
                <Col w="50" mlauto="auto">
                  <Title>
                      <TitleH1 color="#fff">.HEAVEN</TitleH1>
                      <TitleH6 color="#fff">
                      Conveying or northward offending admitting perfectly my. Colonel gravity get thought fat smiling add but.
                      </TitleH6>
                  </Title>

                  <SocialIcons>
                      <Li>
                          <Link  bg="#0069f7">
                            <FaFacebook />
                          </Link>
                      </Li>
                      <Li>
                          <Link bg="#d1062c">
                            <FaGooglePlus />
                          </Link>
                      </Li>
                      <Li>
                          <Link bg="#f7007a">
                            <FaDribbble />
                          </Link>
                      </Li>
                  </SocialIcons>
                </Col>
            </Row>
          </Container>
          <Hr />

         <Container>
             <Row>
                 <Col w="100">
                 <CopyRight>
                    <TitleH6 color="#fff">
                    Copyright © 2020. All rights reserved by GeniusDevs
                    </TitleH6>
                 </CopyRight>
                 </Col>
             </Row>
         </Container>
       </FooterWrapper>
    );
}


export default Footer;