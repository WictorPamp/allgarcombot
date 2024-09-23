import path from 'node:path';
import { Router } from 'express';
import multer from 'multer';

import { listCategories } from './app/useCases/categories/listCategories';
import { createCategory } from './app/useCases/categories/createCategory';
import { listProducts } from './app/useCases/products/listProducts';
import { createProduct } from './app/useCases/products/createProduct';
import { listProductsByCategory } from './app/useCases/categories/listProductsByCategory';
import { listOrders } from './app/useCases/orders/listOrders';
import { createOrder } from './app/useCases/orders/createOrder';
import { changeOrderStatus } from './app/useCases/orders/changeOrderStatus';
import { deleteOrder } from './app/useCases/orders/deleteOrder';
import { deleteProducts } from './app/useCases/products/deleteProducts';

export const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, '..', 'uploads'));
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`)
    }
  }),
});

// Categorias
// Lista todas
router.get('/categories', listCategories);

// Criar
router.post('/categories', createCategory);

// Produtos
// Lista todos
router.get('/products', listProducts);

// Criar
router.post('/products', upload.single('image'), createProduct);

// Deletar
router.delete('/products/:productId', deleteProducts);

// Buscar Produtos por Categoria
router.get('/categories/:categoryId/products', listProductsByCategory);

// Pedidos
// Lista
router.get('/orders', listOrders);

// Criar
router.post('/orders', createOrder);

// Altera status do pedido
router.patch('/orders/:orderId', changeOrderStatus);

// Cancela pedido
router.delete('/orders/:orderId', deleteOrder);
