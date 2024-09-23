import styled from "styled-components/native";

interface ContainerProps {
  background?: string,
  radius?: number,
}


export const Container = styled.TouchableOpacity<ContainerProps>`
  background: ${({disabled, background}) => disabled ? '#ccc' : (background || '#3065D7')};
  border-radius: ${({radius}) => radius ? `${radius}px` : '10px'};
  padding: 14px 24px;
  align-items: center;
  justify-content: center;
`;
