import styled from "styled-components";

export const CalculadoraContainer = styled.main`
  max-width: 22.25rem;
  //height: 35.37rem;

  background-color: ${(props) => props.theme["background-calculator"]};

  margin: 1rem auto;
  padding: 2rem;

  border-radius: 48px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
    0px 188px 52px rgba(0, 0, 0, 0.01), 0px 120px 48px rgba(0, 0, 0, 0.04),
    0px 68px 41px rgba(0, 0, 0, 0.15), 0px 30px 30px rgba(0, 0, 0, 0.26),
    0px 8px 17px rgba(0, 0, 0, 0.29), inset 0px 6px 8px rgba(255, 255, 255, 0.1),
    inset 0px -4px 5px rgba(0, 0, 0, 0.22);
`;

export const VisorCalculo = styled.div`

  width: 100%;
  padding-inline: 1rem;

  display: flex;
  flex-direction: row-reverse;
  align-items: flex-end;
  justify-content: space-between;
  overflow-wrap: break-word;

  > #operations {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;

    #currentOperation {
      display: flex;
      align-items: flex-start;
      flex-wrap: wrap;
      overflow-wrap: break-word;
      text-overflow: clip;
    }

    #previousOperation {
      overflow-wrap: break-word;
      min-height: 0.7rem;
    }

    > div {
      font-size: 1.25rem;
      line-height: 1.75rem;
      color: ${(props) => props.theme["color-numbers-calculate"]};
    }

    > #total {
      width: 100%;
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
      align-items: baseline;
      font-size: 2.25rem;
      line-height: 3.15rem;
      color: ${(props) => props.theme["color-general-operator"]};

      > span {
        font-size: 1.5rem;
      }
    }
  }
`;

export const TecladoDiv = styled.form`
  // background-color: red;
  width: 18.25rem;

  display: grid;
  gap: 0.75rem;
  grid-template-columns: repeat(4, 1fr);

  > button {
    line-height: 28.44px;
    font-size: 1.5rem;
  }
`;

export const Teclas = styled.button`
  width: 4rem;
  height: 4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  border: none;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
    0px 188px 52px rgba(0, 0, 0, 0.01), 0px 120px 48px rgba(0, 0, 0, 0.04),
    0px 68px 41px rgba(0, 0, 0, 0.15), 0px 30px 30px rgba(0, 0, 0, 0.26),
    0px 8px 17px rgba(0, 0, 0, 0.29), inset 0px 6px 8px rgba(255, 255, 255, 0.1),
    inset 0px -4px 5px rgba(0, 0, 0, 0.22);

  background-color: ${(props) => props.theme["background-calculator"]};
  color: ${(props) => props.theme["color-general-operator"]};
`;
