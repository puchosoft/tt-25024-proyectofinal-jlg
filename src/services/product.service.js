// product.service.js

import productModel from '../models/product.model.js';

const getAllProducts = async () => {
    return await productModel.getAllProducts();
}

const getProductById = async (id) => {
    return await productModel.getProductById(id);
}

const addProduct = async(product) => {
    return await productModel.addProduct(product);
}

const deleteProduct = async (id) => {
    return await productModel.deleteProduct(id);
}

export default {
    getAllProducts,
    getProductById,
    addProduct,
    deleteProduct
};
