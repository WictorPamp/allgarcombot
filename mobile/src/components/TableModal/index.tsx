import { Modal, TouchableOpacity } from "react-native";
import { Text } from "../Text";
import { Form, Header, Input, ModalBody, Overlay } from "./styles";
import { Close } from "../Icons/Close";
import { Button } from "../Button";
import { isAndroid } from "../../utils/isAndroid";
import { useState } from "react";

interface TableModalProps {
  visible: boolean;
  onClose: () => void;
  onSave: (table: string) => void;
}

export function TableModal({ visible, onClose, onSave }: TableModalProps) {
  const [table, setTable] = useState('');

  function handleSave() {
    onSave(table);
    onClose();
    setTable('');
  }

  return (
    <Modal
    visible={visible}
    transparent
    animationType="fade"
  >
      <Overlay behavior={isAndroid ? 'height' : 'padding'}>
        <ModalBody>
          <Header>
            <Text weight="600">Informe a mesa</Text>
            <TouchableOpacity onPress={onClose}>
              <Close color="#666"/>
            </TouchableOpacity>
          </Header>

          <Form>
            <Input
              placeholder="Número da mesa"
              placeholderTextColor="#666"
              keyboardType="number-pad"
              onChangeText={setTable}
            />

            <Button disabled={table.length === 0} onPress={handleSave}>
              <Text weight="600" color="white">Salvar</Text>
            </Button>
          </Form>
        </ModalBody>
      </Overlay>
      </Modal>
  )
}
