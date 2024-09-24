import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { Categories } from "../components/Categories";
import { Header } from "../components/Header";
import { Menu } from "../components/Menu";
import { TableModal } from "../components/TableModal";
import { Text } from "../components/Text";
import { CategoriesContainer, CenteredContainer, Container, Footer, FooterContainer, MenuContainer } from "./styles";
import { Cart } from "../components/Cart";
import { CartItem } from "../types/CartItem";
import { Product } from "../types/Product";
import { ActivityIndicator } from "react-native";
import { Empty } from "../components/Icons/Empty";
import { Category } from "../types/Category";
import { api } from '../utils/api';

export function Main() {
  const [isTableModalVisible, setIsTableModalVisible] = useState(false);
  const [selectedTable, setSelectedTable] = useState('');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [listProducts, setListProducts] = useState<Product[]>([]);
  const [listCategories, setListCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isLoadingProducts, setIsLoadingProducts] = useState(false);

  useEffect(() => {

    Promise.all([
      api.get('/categories'),
      api.get('/products'),
    ])
    .then(([categoriesresponse, productsResponse]) => {
      setListCategories(categoriesresponse.data);
      setListProducts(productsResponse.data);
      setIsLoading(false);
    });
  }, []);

  async function handleSelectCategory(categoryId: string) {
    setIsLoadingProducts(true);
    const route = categoryId ? `/categories/${categoryId}/products` : '/products';
    const { data } = await api.get(route);
    setSelectedCategory(categoryId);
    setListProducts(data);
    setIsLoadingProducts(false);
  }

  function handleSaveTable(table: string) {
    if(!table) {
      setCartItems([]);
    }
    setSelectedTable(table);
  }

  function handleAddToCart(product: Product, unlikesum: boolean) {
    if(!selectedTable) {
      setIsTableModalVisible(true);
    }

    setCartItems((prevState) => {
      const itemIndex = prevState.findIndex(cartItem => cartItem.product._id === product._id);
      const newCartItems = [...prevState];
      const item = itemIndex < 0 ? null : newCartItems[itemIndex];

      if(itemIndex < 0) {
        if(!unlikesum) {
          newCartItems.push(
            {
              quantity: 1,
              product,
            }
          );
        }
      }else {
        if(unlikesum) {
          if(item?.quantity <= 1) {
            newCartItems.splice(itemIndex, 1);
          }else {
            newCartItems[itemIndex] = {
              ...item,
              quantity: item?.quantity-1,
            }
          }
        }else {
          newCartItems[itemIndex] = {
            ...item,
            quantity: item?.quantity+1
          }
        }
      }

      return newCartItems;
    });
  }

  return (
    <>
    <Container>
      <Header
        selectedTable={selectedTable}
        onCancelOrder={handleSaveTable}
      />

      {isLoading && (
        <CenteredContainer>
          <ActivityIndicator color="#3065D7" size="large" />
        </CenteredContainer>
      )}

      {!isLoading && (
        <>
          <CategoriesContainer>
          <Categories onSelectCategory={handleSelectCategory}  categories={listCategories}>

          </Categories>
        </CategoriesContainer>

        {isLoadingProducts ? (
          <CenteredContainer>
            <ActivityIndicator color="#3065D7" size="large" />
          </CenteredContainer>
        ) : (
          <>
            {listProducts.length > 0 ? (
              <>
                <MenuContainer>
                  <Menu  products={listProducts} onAddToCart={handleAddToCart}>
                  </Menu>
                    </MenuContainer>
              </>
            ) : (
              <>
                <CenteredContainer>
                  <Empty />
                  <Text color="#666" style={{marginTop: 24}}>Nenhum produto encontrado.</Text>
                </CenteredContainer>
              </>
            )}
          </>
        )}
        </>
      )}

    </Container>
    <Footer>
      <FooterContainer>
        {!selectedTable && (
        <Button disabled={isLoading} onPress={() => setIsTableModalVisible(true)}>
          <Text color="white" weight={600}>Adicionar Pedido</Text>
        </Button>
        )}
        {selectedTable && (
          <Cart selectedTable={selectedTable} handleSaveTable={handleSaveTable} handleSelectCategory={handleSelectCategory} onAddToCart={handleAddToCart} cartItems={cartItems}/>
        )}
      </FooterContainer>
    </Footer>
    <TableModal
      onClose={() => setIsTableModalVisible(false)}
      visible={isTableModalVisible}
      onSave={handleSaveTable}
    />
    </>
  )
}
