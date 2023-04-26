import styled from "styled-components";
import {
  FacebookOutlined,
  Instagram,
  Room,
  Phone,
  MailOutline,
} from "@mui/icons-material";

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 40px;
`;

const Logo = styled.div`
  font-size: 45px;
  font-weight: bold;
  font-family: "Sacramento", cursive;
`;
const Desc = styled.p`
  margin: 20px 0;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
`;
const Center = styled.div`
  flex: 1;
  padding: 40px;
`;
const Title = styled.h3`
  font-size: 25px;
  font-weight: 500;
  margin-bottom: 40px;
  margin-top: 0px;
`;
const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
`;
const Right = styled.div`
  flex: 1;
  padding: 40px;
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Mary Look</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non minima
          reiciendis tempora aspernatur esse iste. Vitae voluptatibus error,
          natus ipsam, quo quaerat nemo perferendis ad at tenetur, accusantium
          minus dolores!
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <FacebookOutlined />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Terms</ListItem>
          <ListItem>Lista</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> Sierpow 12, Ozorkow
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} />
          +48 123 456 789
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} />
          mary.look@gmail.com
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
