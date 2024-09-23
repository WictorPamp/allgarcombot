import { Button } from "../Button";
import { Text } from "../Text";
import { Container, Content, OrderHeader, Table } from "./styles";

interface HeaderProps {
  selectedTable: string;
  onCancelOrder: () => void;
}

export function Header ({ selectedTable, onCancelOrder }: HeaderProps) {
  return (
    <Container>
      {!selectedTable && (
        <>
          <Text size={14} opacity={0.9}>Bem vindo(a) ao</Text>
          <Text size={24} weight="700">Garçom<Text size={24}>BOT</Text></Text>
        </>
      )}

      {selectedTable && (
        <Content>
          <OrderHeader>
            <Text weight="600" size={24}>Pedido</Text>
            <Button onPress={() => onCancelOrder('')} style={{ paddingRight: 0 }} background="transparent"><Text color="#D73035" weight="600" size={14}>cancelar pedido</Text></Button>
          </OrderHeader>
          <Table>
            <Text color="#666">Mesa {selectedTable}</Text>
          </Table>
        </Content>
      )}
    </Container>
  )
}
