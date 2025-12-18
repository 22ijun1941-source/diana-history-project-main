import {StyledSection} from "../../../components/section/Section";
import SectionHeader from "../../../components/headers/SectionHeader";
import styled, {css} from 'styled-components';
import FlexWrapper from "../../../components/flexWrapper/FlexWrapper";
import {Container} from "../../../components/container/Container";
import {Button} from "../../../components/button/Button";
import theme from "../../../styles/Theme.Styled";

export const Contact = (props: { headerName: string }) => {
    return (
        <StyledSection id={props.headerName}>
            <Container>
                <SectionHeader text={props.headerName} mb={'62px'}/>
                <FlexWrapper justify={'center'} >
                    <StyledForm flexbox={true}>
                        <StyledField placeholder={'name'}/>
                        <StyledField placeholder={'subject'}/>
                        <StyledField placeholder={'message'} as={"textarea"}/>
                        <Button type={'submit'}>Send message</Button>
                    </StyledForm>
                </FlexWrapper>
            </Container>
        </StyledSection>
    );
};

type StyledFormProps = {
    flexbox: boolean,
}

const StyledForm = styled.form<StyledFormProps>`
  max-width: 540px;
  width: 100%;

  ${props => props.flexbox && css<StyledFormProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
  `
  }
  
  textarea {
    margin-bottom: 35px;
    height: 179px;
    resize: none;
  }

  input:not(:nth-last-child(1)) {
    margin-bottom: 16px;
    max-height: 32px;
    height: 100%;
  }
`

const StyledField = styled.input`
  width: 100%;

  border: 1px solid ${theme.colors.greyTwo};
  background-color: ${theme.backgroundColor.third};

  font-family: "Poppins", sans-serif;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.6px;
  padding: 0 15px;
  
  outline: 1px solid ${theme.colors.greyTwo}; 
  position: relative;
  &::placeholder {
    color: ${theme.colors.greyThree};
  }
`

