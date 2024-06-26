import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "../ui/Sidebar";
import Main from "../ui/Main";
import styled from "styled-components";

const StyleContainer = styled(Container)`
  padding-left: 0;
`;

function HomePage() {
  return (
    <StyleContainer fluid={true} className="bg-light">
      <Row>
        <Col xl={2}>
          <Sidebar />
        </Col>
        <Col xl={10}>
          <Main />
        </Col>
      </Row>
    </StyleContainer>
  );
}

export default HomePage;
