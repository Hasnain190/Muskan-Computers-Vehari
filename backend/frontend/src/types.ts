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
    phone?: string;

    password?: string;
    name?: string;
    isAdmin?: boolean;
    token?: string;
}

export interface CartItem {
    product: number | Product;
    quantity: number;
}

export interface Cart {
    cartItems: CartItem[];


}

export interface ShippingAddress {
    address: string;
    city: string;
    postalCode: string;
    country: string;
}

export interface OrderItem {
    product: number;
    quantity: number;
    price: number;
}

export interface Order {
    paymentMethod: string;
    taxPrice: number;
    shippingPrice: number;
    totalPrice: number;
    shippingAddress: ShippingAddress;
    orderItems: OrderItem[];
}