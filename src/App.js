import "./App.css";
import styled from "styled-components";
import { useState } from "react";

const Container = styled.div``;

const Box = styled.div`
  padding: 10px;
  border: 4px solid #fff;
  margin: 6px;
  p {
    border-bottom: 4px solid #fff;
    padding: 10px;
    text-align: center;
    width: 100%;
  }
  height: 60vh;
`;

const Status = styled(Box)`
  width: 20vw;
`;

const Inventory = styled(Box)`
  width: 26vw;
`;

const Training = styled(Box)`
  width: calc(50vw - 80px);
`;

const Map = styled(Box)`
  border: 4px solid #fff;
  width: 100vw;
  height: 30vh;
`;

const Alvo = styled.div`
  background: red;
  color: white;
  cursor: pointer;
  padding: 10px;
  width: 40px;
  position: relative;
  top: ${({ alvoPos }) => alvoPos.top};
  left: ${({ alvoPos }) => alvoPos.left};
`;

const ClickArea = styled.div`
  width: 100%;
  height: 100%;
`;

function App() {
  const [training, setTraining] = useState();
  const [alvoPos, setAlvoPos] = useState();
  const [alvoCount, setAlvoCount] = useState(0);

  let [health, strength, defence, agility, magic] = [10, 5, 5, 5, 10];

  function respawAlvo() {
    setAlvoPos({
      top: `${Math.random() * 80}%`,
      left: `${Math.random() * 80}%`,
    });
  }

  function alvoClicado() {
    setAlvoCount(alvoCount + 1);
    respawAlvo();
  }

  function onTreinar() {
    setTraining(true);
    respawAlvo();
  }

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <Status>
        <p>Status</p>
        hero
        <br />
        health: {health}
        <br />
        strength: {strength}
        <br />
        defence: {defence}
        <br />
        agility: {agility}
        <br />
        magic: {magic}
      </Status>
      <Inventory>
        <p>Inventory</p>
      </Inventory>
      <Training>
        <p>Training / Battle</p>
        <button disabled={training} onClick={onTreinar}>
          treinar
        </button>
        {(alvoCount && <span>cliques: {alvoCount}</span>) || ""}
        <ClickArea>
          {training && (
            <Alvo alvoPos={alvoPos} onClick={alvoClicado}>
              alvo
            </Alvo>
          )}
        </ClickArea>
      </Training>
      <Map>
        <p>Map</p>
      </Map>
    </div>
  );
}

export default App;
