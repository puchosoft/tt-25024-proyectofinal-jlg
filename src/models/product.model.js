// product.model.js

import { db } from '../config/ddbb.js';
import { collection, getDocs, getDoc, addDoc, deleteDoc, doc } from 'firebase/firestore';

const productsCollection = collection(db, 'products');

const getAllProducts = async () => {
    const snapshot = await getDocs(productsCollection);
    const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return data;
}

const getProductById = async (id) => {
    const productDoc = await getDoc(doc(productsCollection, id));
    return productDoc.data();
}

const addProduct = async (product) => {
    const docRef = await addDoc(productsCollection, product);
    return docRef.id;
}

const deleteProduct = async (id) => {
    const docRef = doc(productsCollection, id);
    const product = await getDoc(docRef);
    if (product.exists()) {
        await deleteDoc(docRef);
        return id;
    }
    else {
        return null;
    }
}

export default {
    getAllProducts, getProductById, addProduct, deleteProduct
};
