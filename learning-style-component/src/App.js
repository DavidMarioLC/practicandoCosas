import styled from "styled-components";

const Title = styled.h1`
  font-size: 2rem;
  color: #fff;
  background: #f0a500;
`;

const Wrapper = styled.section`
  max-width: 900px;
  padding: 0.5rem 1rem;
  margin: 0 auto;
`;

const WrapperButtons = styled.div`
  display: flex;
  gap: 2rem;
`;

const Button = styled.button`
  border: none;
  border: 2px solid ${({ outline }) => (outline ? "#f0a500" : "transparent")};
  border-radius: 0.5rem;
  width: ${({ size }) => (size ? `${size}rem` : " fit-content")};

  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: #fff;
  background: ${({ primary }) => (primary ? "#334756" : "transparent")};
`;

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Title>I'm the title.</Title>
        <WrapperButtons>
          <Button as="a" href="#mypage" primary>
            Primary
          </Button>
          <Button size={8} primary>
            Primary
          </Button>
          <Button outline>Outline</Button>
          <Button size={8} outline>
            Outline
          </Button>
        </WrapperButtons>
      </Wrapper>
    </div>
  );
}

export default App;
