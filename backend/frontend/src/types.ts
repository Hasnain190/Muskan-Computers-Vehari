export interface Product {
    id: number;
    name: string;
    image: string;
    image_1: string;
    image_2: string;
    image_3: string;
    brand: string;
    description: string;
    rating: number | null;
    price: string;
    countInStock: number;
    createdAt: string;
    user: number;
    category: number;
}

export interface Category {
    id: number,
    category: string;

}

export interface User {
    id?: number;
    _id?: number;
    username?: string;
    email?: string;
    password?: string;
    name?: string;
    isAdmin?: boolean;
    token?: string;
}

export interface CartItem {
    product: number;
    quantity: number;
}

export interface Cart {
    cartItems: CartItem[];


}