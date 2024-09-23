import { useState } from "react";
import { Button } from "../components/Button";
import { Categories } from "../components/Categories";
import { Header } from "../components/Header";
import { Menu } from "../components/Menu";
import { TableModal } from "../components/TableModal";
import { Text } from "../components/Text";
import { CategoriesContainer, Container, Footer, FooterContainer, MenuContainer } from "./styles";

export function Main() {
  const [isTableModalVisible, setIsTableModalVisible] = useState(false);
  const [selectedTable, setSelectedTable] = useState('');

  function handleSaveTable(table: string) {
    setSelectedTable(table);
  }

  return (
    <>
    <Container>
      <Header />
      <CategoriesContainer>
        <Categories>

        </Categories>
      </CategoriesContainer>
      <MenuContainer>
        <Menu>

        </Menu>
      </MenuContainer>
    </Container>
    <Footer>
      <FooterContainer>
        {!selectedTable && (
        <Button onPress={() => setIsTableModalVisible(true)}>
          <Text color="white" weight={600}>Adicionar Pedido</Text>
        </Button>
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
