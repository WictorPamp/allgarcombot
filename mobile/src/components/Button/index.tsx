import { ActivityIndicator } from "react-native";
import { Container } from "./styles";

interface ContainerProps {
  style?: {},
  background?: string,
  radius?: number,
  children: JSX.Element|JSX.Element[],
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
}

export function Button({ style, background, radius, children, onPress, disabled, loading }: ContainerProps) {
  return (
    <Container style={style} disabled={disabled || loading} onPress={onPress} background={background} radius={radius}>
      {!loading && (
        children
      )}

      {loading && (
        <ActivityIndicator />
      )}
    </Container>
  )
}
