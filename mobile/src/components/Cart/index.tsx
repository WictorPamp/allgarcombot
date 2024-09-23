import { FlatList, TouchableOpacity } from "react-native";
import { CartItem } from "../../types/CartItem";
import { Actions, Image, Item, ProductContainer, ProductDetails, QuantityContainer, Summary, TotalContainer } from "./styles";
import { Text } from "../Text";
import { formatCurrancy } from "../../utils/formatCurrency";
import { PlusCircle } from "../Icons/PlusCircle";
import { MinusCircle } from "../Icons/MinusCircle";
import { Button } from "../Button";
import { Product } from "../../types/Product";
import { OrderConfirmedModal } from "../OrderConfirmedModal";
import { useState } from "react";

interface CartProps {
  cartItems: CartItem[];
  onAddToCart: (product: Product, unlikesum: boolean) => void;
  handleSaveTable: (table: string) => void;
}

export function Cart({ cartItems, onAddToCart, handleSaveTable }: CartProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const total = cartItems.reduce((acc, cartItem) => {
    return acc + cartItem.quantity * cartItem.product.price;
  }, 0);

  function handleConfirmOrder() {
    setIsModalVisible(true);
    setLoading(true);
  }

  function handleOk() {
    setIsModalVisible(false);
    handleSaveTable('');
  }

  return (
    <>
    <OrderConfirmedModal
      visible={isModalVisible}
      onOk={() => handleOk()}
    />
    {cartItems.length > 0 && (
      <FlatList
      style={{marginBottom: 20, maxHeight: 140}}
      data={cartItems}
      keyExtractor={cartItem => cartItem.product._id}
      showsVerticalScrollIndicator={false}
      renderItem={({item: cartItem}) => (
        <Item>
          <ProductContainer>
            <Image
            source={{
              uri: `http://192.168.15.163:3001/uploads/${cartItem.product.imagePath}`
            }}
            />

            <QuantityContainer>
              <Text size={14} color="#666">{cartItem.quantity}x</Text>
            </QuantityContainer>

            <ProductDetails>
              <Text size={14} weight="600">{cartItem.product.name}</Text>
              <Text style={{marginTop: 4}} size={14} cor="#666">{formatCurrancy(cartItem.product.price)}</Text>
            </ProductDetails>
          </ProductContainer>
          <Actions>
            <TouchableOpacity onPress={() => onAddToCart(cartItem.product, false)} style={{marginRight: 2, paddingHorizontal: 5 }}>
              <PlusCircle />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onAddToCart(cartItem.product, true)}>
              <MinusCircle />
            </TouchableOpacity>
          </Actions>
        </Item>
      )}
      />
    )}
    <Summary>
    <TotalContainer>
    {cartItems.length > 0 ? (
      <>
      <Text color="#666">Total</Text>
      <Text weight="600" size={20}>{formatCurrancy(total)}</Text>
      </>
    ) : (
      <>
      <Text color="#666">Seu carrinho está vazio.</Text>
      </>
    )}

    </TotalContainer>
    <Button
    onPress={() => handleConfirmOrder()}
    disabled={cartItems.length === 0}
    loading={loading}
    >
    <Text color="#fff" weight="600">Confirmar Pedido</Text>
    </Button>
    </Summary>
    </>
  );
}
