import { FlatList, Modal } from "react-native";
import { Text } from "../Text";
import { Product } from "../../types/Product";
import { CloseButton, Footer, FooterContainer, Header, Image, Ingredient, IngredientsContainer, ModalBody, PriceContainer } from "./styles";
import { Close } from "../Icons/Close";
import { formatCurrancy } from "../../utils/formatCurrency";
import { Button } from "../Button";

interface ProductModalProps {
  visible: boolean;
  setIsModalVisible: () => void;
  product: null | Product;
  onAddToCart: (product: Product) => void;
}

export function ProductModal({ visible, setIsModalVisible, product, onAddToCart }:ProductModalProps) {
  if(!product) return null;

  function handleAddToCart(product: Product) {
    onAddToCart(product);
    setIsModalVisible();
  }

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={setIsModalVisible}
    >
      <Image
        source={{
          uri: `http://192.168.15.163:3001/uploads/${product.imagePath}`
        }}
      >
        <CloseButton onPress={setIsModalVisible}>
          <Close/>
        </CloseButton>
      </Image>
      <ModalBody>
        <Header>
          <Text weight="600" size={24}>{product.name}</Text>
          <Text color="#666" style={{marginTop: 8}}>{product.description}</Text>
        </Header>

        {product.ingredients.length > 0 && (
          <IngredientsContainer>
            <Text weight="600" color="#666">Ingredientes</Text>

            <FlatList
              style={{marginTop: 16}}
              data={product.ingredients}
              keyExtractor={ingredient => ingredient._id}
              showsVerticalScrollIndicator={false}
              renderItem={({item: ingredient}) => (
                <Ingredient>
                  <Text>{ingredient.icon}</Text>
                  <Text style={{ marginLeft: 20 }} color="#666" size={14}>{ingredient.name}</Text>
                </Ingredient>
              )}
            />
          </IngredientsContainer>
        )}

      </ModalBody>
      <Footer>
        <FooterContainer>
          <PriceContainer>
            <Text cor="#666">Preço</Text>
            <Text size={20} weight="600">{formatCurrancy(product.price)}</Text>
          </PriceContainer>
          <Button onPress={() => handleAddToCart(product)}>
            <Text color="#fff">Adicionar ao pedido</Text>
          </Button>
        </FooterContainer>
      </Footer>
    </Modal>
  )
}
