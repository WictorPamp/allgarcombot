import { useState } from "react";
import { Order } from "../../../types/Order";
import { OrderModal } from "../OrdersModal";
import { Board, OrdersContainer } from "./styles";

interface OrdersBoardProps {
  icon: string;
  title: string;
  orders: Order[];
}

export function OrderBoard(props: OrdersBoardProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<null | Order>(null);
  function handleOpenModal(order: Order) {
    setIsModalVisible(true);
    setSelectedOrder(order);
  }

  function handleCloseModal() {
    setIsModalVisible(false);
    setSelectedOrder(null);
  }
  return (
    <Board>
      <OrderModal onClose={handleCloseModal} visible={isModalVisible} order={selectedOrder}/>
    <header>
      <span>{props.icon}</span>
      <strong>{props.title}</strong>
      <span>({props.orders.length})</span>
    </header>
    <OrdersContainer>
      {props.orders.map((order) => (
        <button type="button" key={order._id} onClick={() => handleOpenModal(order)}>
          <strong>Mesa {order.table}</strong>
          <span>{order.products.length} itens</span>
        </button>
      ))}
    </OrdersContainer>
  </Board>
  )
}
