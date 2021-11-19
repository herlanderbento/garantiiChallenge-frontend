import { Container, Row, Col, Button } from "reactstrap";
import { Background, CardItem } from "./styles";
import { api } from "../../services/api";
import logo from "../../assets/book annotation.svg";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

interface UseParamsProps {
  id: string;
}

interface PostProps {
  name: string;
  email: string;
}

export function ShowPosts() {
  const { id } = useParams<UseParamsProps>();
  const { push } = useHistory();
  const [posts, setPosts] = useState<PostProps>();

  useEffect(() => {
    async function fetch() {
      try {
        const { data } = await api.get(`users/${id}`);
        setPosts(data);
      } catch (err) {
        console.error(err);
      }
    }
    fetch();
  }, [id]);

  return (
    <Background>
      <Container>
        <Row>
          <Col lg="10" sm="10" md="10">
            <CardItem>
              <div className="title">
                <img src={logo} className="logo" alt="logo" />
              </div>
              <div className="body">
                <h1>{posts?.name}</h1>
                <p>{posts?.email}</p>
              </div>
              <Col lg="3">
                <Button onClick={() => push("/home")}>Voltar</Button>
              </Col>
            </CardItem>
          </Col>
        </Row>
      </Container>
    </Background>
  );
}
