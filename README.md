

# E-commerce Application (MERN Stack)

## Project Overview

This project is a full-featured e-commerce application developed using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It includes a backend API for handling data and user authentication, and a frontend interface for both users and administrators. 

## Key Features

### User Authentication
- Secure JWT-based authentication for login and registration.
- Role-based access control to differentiate between users and admin.

### Product Management
- CRUD operations for products with support for image uploads using GridFS in MongoDB.
- Product rating and purchase tracking.

### Category Management
- CRUD operations for product categories.
- Image upload and management using GridFS.

### Order Management
- Order placement, tracking, and management.
- Admin controls to update order statuses and view order details.


### Admin Panel
- Admin dashboard for managing products, categories, and orders.
- Real-time data display and updates using React.js state management.
- Secure admin-only access with JWT authentication.

## Technologies Used

### Frontend
- React.js
- Material-UI
- Axios
- React Router

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- Multer and GridFS
- JWT

### DevOps
- Nodemon
- Dotenv for environment configuration

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
   ```

2. **Install dependencies:**
   ```bash
   npm install
   cd client
   npm install
   cd ..
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory and add the following variables:
   ```env
   PORT=5000
   MONGO_URI=your_mongo_uri
   JWT_SECRET=your_jwt_secret
   STRIPE_SECRET_KEY=your_stripe_secret_key
   ```

4. **Run the application:**
   ```bash
   npm run dev
   ```

## Usage

- **User Features:**
  - Register and log in to the application.
  - Browse and search for products.
  - Add products to the cart and proceed to checkout.
  - Place orders and make payments via Stripe.



## API Endpoints

### User Authentication
- `POST /api/users/register`
- `POST /api/users/login`

### Products
- `GET /api/products`
- `POST /api/products` (admin only)
- `PUT /api/products/:id` (admin only)
- `DELETE /api/products/:id` (admin only)

### Categories
- `GET /api/categories`
- `POST /api/categories` (admin only)
- `PUT /api/categories/:id` (admin only)
- `DELETE /api/categories/:id` (admin only)

### Orders
- `GET /api/orders` (admin only)
- `POST /api/orders`
- `PUT /api/orders/:id` (admin only)
- `DELETE /api/orders/:id` (admin only)

## Challenges and Solutions

- **File Storage:** Implemented GridFS for efficient and scalable file storage directly in MongoDB, overcoming issues with traditional file system storage.
- **Security:** Ensured secure authentication and authorization using JWT, protecting sensitive endpoints and data.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.


## Contact

For any questions or feedback, please contact muskanafzal2022@gmail.com.

