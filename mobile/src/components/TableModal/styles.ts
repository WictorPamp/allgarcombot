import styled from "styled-components/native";

export const Overlay = styled.KeyboardAvoidingView`
  background: rgba(0, 0, 0, 0.6);
  align-items: stretch;
  flex: 1;
  justify-content: center;
  padding: 0 24px;
`;

export const ModalBody = styled.View`
  background: #fff;
  border-radius: 8px;
  padding: 24px;
  width: 100%;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Form = styled.View`
  margin-top: 32px;
`;

export const Input = styled.TextInput`
  padding: 16px;
  border: 1px solid rgba(204,204, 204, 0.5);
  border-radius: 8px;
  margin-bottom: 18px;
`;
