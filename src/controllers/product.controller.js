// product.controller.js

import productService from '../services/product.service.js';

const getAllProducts = async (req, res) => {
    const products = await productService.getAllProducts();
    if (!products || products.length === 0) {
        res.status(404).json({ message: 'No hay productos disponibles' });
    } else {
        res.status(200).json({ message: 'Lista de productos', payload: products });
    }
}

const getProductById = async (req, res) => {
    const { id } = req.params;
    const product = await productService.getProductById(id);
    if (!product) {
        res.status(404).json({ message: `Producto con ID: ${id} no encontrado` });
    } else {
        res.status(200).json({ message: `Producto con ID: ${id}`, payload: product });
    }
}

const addProduct = async (req, res) => {
    const product = req.body;
    if (!product || !product.name || !product.price) {
        res.status(400).json({ message: 'Datos del producto incompletos' });
    } else {
        const id = await productService.addProduct(product);
        res.status(201).json({ message: `Producto agregado exitosamente con ID: ${id}` });
    }
}

const deleteProduct = async (req, res) => {
    const { id } = req.params;
    const deletedId = await productService.deleteProduct(id);
    if (!deletedId) {
        res.status(404).json({ message: `Producto con ID: ${id} no encontrado` });
    } else {
        res.status(200).json({ message: `Producto con ID: ${id} eliminado exitosamente` });
    }
}

export default {
    getAllProducts, getProductById, addProduct, deleteProduct
};
