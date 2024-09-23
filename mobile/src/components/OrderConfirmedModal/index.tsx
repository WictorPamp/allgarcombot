import { Modal } from "react-native";
import { Container } from "./style";
import { CheckCircle } from "../Icons/CheckCircle";
import { Button } from "../Button";
import { Text } from "../Text";

interface OrderConfirmedModalProps {
  visible: boolean;
  onOk: () => void;
}

export function OrderConfirmedModal({ visible, onOk }: OrderConfirmedModalProps) {
  return (
    <Modal
      visible={visible}
      animationType="fade"
    >
      <Container>
        <CheckCircle />
        <Text style={{ marginVertical: 5 }} size={20} weight="600" color="#fff">Pedido confirmado</Text>
        <Text color="#fff" opacity={0.9}>O pedido já entrou na fila de produção.</Text>
        <Button onPress={onOk} style={{ marginTop: 24 }} background="#fff" radius={100}>
          <Text weight="600" size={14} color="#3065D7">Ok</Text>
        </Button>
      </Container>
    </Modal>
  )
}
