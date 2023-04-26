import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  justify-content: center;
  display: flex;
  font-weight: 500;
  align-items: center;
`;

const Announcement = () => {
  return <Container>PROMOCJA! 20% NA WSZYSTKIE T-SHIRTY!</Container>;
};

export default Announcement;
