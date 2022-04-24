import React from 'react';
import {Button, ButtonWrapper, CoverContainer, CoverContent, CoverH3, CoverImage, CoverP, CoverWrapper,Image,Text} from "../CoverSection/CoverElements"
import bg from "../../assets/images/cover.jpg"
import w4 from "../../assets/images/w4.png"

const CoverSection = () => {
    return (
        <>
         <CoverWrapper bg={bg}>
             <CoverContainer>
                <CoverContent>
                    <Text>
                        <CoverH3>
                        Best digital watch for your daily life
                        </CoverH3>
                        <CoverP>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, minus ut itaque molestiae sint iste cumque incidunt quam explicabo dolorem. 
                        </CoverP>
                        <ButtonWrapper>
                            <Button>Buy Now</Button>
                        </ButtonWrapper>
                    </Text>
                    <CoverImage>
                        <Image src={w4} />
                    </CoverImage>
                </CoverContent>
             </CoverContainer>
         </CoverWrapper>
        </>
    );
}


export default CoverSection;