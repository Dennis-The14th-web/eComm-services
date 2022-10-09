const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Category {
        _id: _id
        name: String
    }

    type Product {
        _id: _id
        name: String
        description: String
        image: String
        quality: Int
        price: Float
        category: Category
    }

    type Order {
        _id: ID
        purchaseDate: String
        products: [Product]
    }

    type User {
        _id: _id
        firstName: String
        lastName: String
        email: String
        orders: [Order]
    }

    type Checkout {
        session: ID
    }

    type Auth {
        token: _id
        user: User
    }

    type Query {
        categories: [Category]
        products(category: ID, name: String): [Product]
        product(_id: ID!): Product
        user: User
        order(_id: ID!): Order
        Checkout(products: [ID]!): Checkout
    }

    type Mutation {
        addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
        addOrder(products: [ID]!); Order
        updateUser(firstName: String, lastName: String, email: String, password: String): User
        updateProduct(_id: ID!, quantity: Int!): Product
        login(email: String!, password: String!) Auth
    }
`;

module.exports = typeDefs;