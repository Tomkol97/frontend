import React from "react";
import styled from "styled-components";
import { Send } from "@mui/icons-material";

const Container = styled.div`
  height: 45vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #fae8eb;
`;

const Title = styled.h1`
  margin-top: 0;
  text-align: center;
  font-size: 50px;
  letter-spacing: 0.7px;
  font-family: "Lora", serif;
  font-weight: 500;
  color: #b9a471;
`;
const Desc = styled.h4`
  margin-top: 0;
  font-family: "Open Sans", sans-serif;
  font-weight: 500;
  text-align: center;
  font-size: 20px;
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
`;
const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: #b9a471;
  color: white;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

const NewsLetter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>
        Zapisz się teraz i skorzystaj z rabatu 10% na ubrania z nowej kolekcji!
      </Desc>
      <InputContainer>
        <Input type="email" placeholder="Your email..."></Input>
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default NewsLetter;
