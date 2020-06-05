import React from "react";
import { Link } from "react-router-dom";
import { Container, Content } from "./styles";
import { FiLogIn } from "react-icons/fi";

const Home = () => {
  return (
    <Container>
      <Content>
        <header>
          <img src={require("../../assets/logo.svg")} alt="Ecoleta" />
        </header>

        <main>
          <h1>Seu marketplace de coleta de resíduos</h1>
          <p>
            Ajudamos pessoas a encontrarem pontos de coletas de froma eficiente.
          </p>
          <Link to="/create-point">
            <span>
              <FiLogIn />
            </span>
            <strong>Cadastre um ponto de coleta</strong>
          </Link>
        </main>
      </Content>
    </Container>
  );
};

export default Home;
