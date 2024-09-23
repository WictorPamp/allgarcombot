import { styled } from "styled-components";

export const Board = styled.div`
  padding: 16px;
  border: 1px solid rgba(240, 240, 240, 0.4);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  background: #f3f3f3;

  > header {
    padding: 8px;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

export const OrdersContainer = styled.div`
  display:flex;
  flex-direction: column;
  width: 100%;
  margin-top: 24px;

  button {
    background: #fff;
    border: 1px solid rgba(240, 240, 240, 0.4);
    border-radius: 8px;
    height: 128px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;
    outline: none;

    strong {
      font-weight: 500;
    }

    span {
      color:#666;
      font-size: 14px;
    }

    & + button {
      margin-top: 24px;
    }
  }
`;
