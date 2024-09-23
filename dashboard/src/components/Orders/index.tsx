import { OrderBoard } from "./OrdersBoard";
import { Container } from "./styles";
import { orders } from '../../mocks/orders';

export function Orders() {
  return (
    <Container>
      <OrderBoard
        icon="🕐"
        title="Fila de espera"
        orders={orders}
      />
      <OrderBoard
        icon="🧑‍🍳"
        title="Em preparação"
        orders={[]}
      />
      <OrderBoard
        icon="✅"
        title="Finalizado"
        orders={[]}
      />
    </Container>
  );
}
