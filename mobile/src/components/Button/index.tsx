import { Text } from "../Text";
import { Container } from "./styles";

interface ContainerProps {
  background?: string,
  radius?: number,
  children: JSX.Element|JSX.Element[],
  onPress: () => void;
  disabled?: boolean
}

export function Button({ background, radius, children, onPress, disabled }: ContainerProps) {
  return (
    <Container disabled={disabled} onPress={onPress} background={background} radius={radius}>
      {children}
    </Container>
  )
}
