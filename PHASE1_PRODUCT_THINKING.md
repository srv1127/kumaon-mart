# PHASE 1: PRODUCT THINKING
##  Grocery Web App - MVP Planning

---

## 1. MVP DEFINITION

### Customer Features (Must-Have)
- **Product Browsing**
  - View products by category
  - Search products
  - View product details (name, price, image, description)
  
- **Shopping Cart**
  - Add/remove items
  - Update quantities
  - View cart total
  
- **Checkout & Ordering**
  - Enter delivery address
  - Select payment method (start with Cash on Delivery only)
  - Place order
  - Receive order confirmation
  
- **Order Tracking**
  - View order status (Pending → Confirmed → Preparing → Out for Delivery → Delivered)
  - View order details (items, address, total)
  
- **Authentication**
  - Sign up (email, password, name, phone, address)
  - Login
  - Logout

### Customer Features (Nice-to-Have - Defer to Post-MVP)
- Product reviews/ratings
- Wishlist/favorites
- Multiple saved addresses
- Detailed order history
- Promo codes/discounts
- Real-time delivery tracking map
- Push notifications
- Social login (Google/Facebook)

### Admin Features (Day 1 - Essential)
- **Product Management**
  - Add new products (name, description, price, category, stock, image)
  - Edit existing products
  - Delete/deactivate products
  - Manage stock quantities
  
- **Order Management**
  - View all orders
  - Update order status
  - View order details (customer, items, address, payment)
  - Assign delivery (manual assignment for MVP)
  
- **Category Management**
  - Create categories
  - Edit/delete categories
  
- **Basic Dashboard**
  - Today's order count
  - Revenue summary (simple total)

### Admin Features (Defer to Post-MVP)
- Advanced analytics/reports
- Inventory alerts (low stock notifications)
- Bulk operations (bulk product upload)
- User management (view/edit customers)
- Delivery partner management (automated assignment)
- Financial reports
- Customer analytics

---

## 2. USER FLOWS (Step-by-Step)

### First-Time Customer Flow
1. **Land on Homepage**
   - Sees featured categories and products
   - Can browse without login

2. **Browse Products**
   - Clicks category or uses search
   - Views product listings

3. **View Product Details**
   - Clicks on product card
   - Sees product image, price, description
   - Selects quantity

4. **Add to Cart**
   - Clicks "Add to Cart"
   - Cart icon updates with item count

5. **Continue Shopping or Checkout**
   - Adds more items OR clicks "Go to Cart"

6. **View Cart**
   - Reviews items, quantities, subtotal
   - Can modify quantities or remove items

7. **Click "Proceed to Checkout"**
   - Redirected to login/signup (if not logged in)

8. **Sign Up**
   - Enters email, password, name, phone number, delivery address
   - Account created

9. **Return to Cart/Checkout**
   - Cart items preserved
   - Delivery address pre-filled

10. **Review Order Details**
    - Confirms delivery address
    - Sees order summary (items, quantities, total)

11. **Select Payment Method**
    - Chooses "Cash on Delivery" (only option for MVP)

12. **Place Order**
    - Clicks "Place Order"
    - Order created with status "Pending"

13. **Order Confirmation**
    - Sees confirmation page with order ID
    - Receives confirmation message
    - Can click "Track Order"

### Returning Customer Flow
1. **Login**
   - Enters email and password
   - Logged in successfully

2. **Browse/Search Products**
   - Uses search or browses categories
   - Adds items to cart

3. **Checkout**
   - Cart persists (stored in database)
   - Address pre-filled from profile
   - Places order quickly

4. **Track Order**
   - Views order status
   - Checks delivery timeline

### Admin: Adding a Product
1. **Login to Admin Panel**
   - Uses admin credentials
   - Redirected to admin dashboard

2. **Navigate to Products**
   - Clicks "Products" in sidebar/nav
   - Sees list of existing products

3. **Add New Product**
   - Clicks "Add New Product" button
   - Fills form:
     - Product name
     - Description
     - Price
     - Select category (dropdown)
     - Stock quantity
     - Upload product image
   - Clicks "Save"

4. **Product Created**
   - Product appears in products list
   - Product visible on customer-facing homepage

5. **Verify**
   - Checks customer app to confirm product is visible

### Admin: Handling an Order
1. **Login to Admin Panel**
   - Accesses admin dashboard

2. **View Orders**
   - Clicks "Orders" in navigation
   - Sees list of orders (new orders highlighted/at top)
   - Orders sorted by date (newest first)

3. **View Order Details**
   - Clicks on order
   - Sees:
     - Customer name, phone, address
     - Order items (products, quantities, prices)
     - Total amount
     - Payment method
     - Order status

4. **Update Order Status**
   - Changes status from "Pending" to "Confirmed"
   - Status updates to "Preparing" when kitchen/warehouse starts
   - Status updates to "Out for Delivery" when dispatched
   - (Optional) Assigns delivery partner manually (for MVP)

5. **Mark as Delivered**
   - Updates status to "Delivered" when customer receives
   - Order marked complete

---

## 3. CORE SCREENS (Frontend)

### Customer-Facing Screens

1. **Homepage/Landing Page**
   - **Purpose**: First impression, showcase categories and products
   - **Key Elements**:
     - Header (logo, search bar, cart icon with count, login button)
     - Featured categories grid
     - Popular/new products grid
     - Footer (basic info)

2. **Product Listing Page**
   - **Purpose**: Show products with filtering/search
   - **Key Elements**:
     - Search bar
     - Category sidebar/filters
     - Product cards (image, name, price, "Add to Cart" button)
     - Sorting options (price, name - optional for MVP)
     - Pagination or "Load More" button

3. **Product Detail Page**
   - **Purpose**: Detailed product information
   - **Key Elements**:
     - Large product image
     - Product name
     - Price
     - Description
     - Quantity selector (1, 2, 3...)
     - "Add to Cart" button
     - Back button

4. **Shopping Cart Page**
   - **Purpose**: Review cart before checkout
   - **Key Elements**:
     - List of cart items (product image, name, price, quantity controls, remove button)
     - Subtotal calculation
     - Delivery fee (if applicable)
     - Total amount
     - "Continue Shopping" button
     - "Proceed to Checkout" button

5. **Checkout Page**
   - **Purpose**: Collect delivery info and payment method
   - **Key Elements**:
     - Delivery address form (or use saved address)
     - Payment method selection (COD only for MVP)
     - Order summary (items, quantities, subtotal, total)
     - "Place Order" button
     - Back to cart button

6. **Order Confirmation Page**
   - **Purpose**: Confirm order placement
   - **Key Elements**:
     - Success message
     - Order ID/number
     - Estimated delivery time
     - Order summary
     - "Track Order" button
     - "Continue Shopping" button

7. **Order Tracking Page**
   - **Purpose**: Show order status and details
   - **Key Elements**:
     - Order status timeline (visual indicator)
     - Order details (items, quantities, prices)
     - Delivery address
     - Estimated delivery time
     - Order ID

8. **Login/Signup Page**
   - **Purpose**: User authentication
   - **Key Elements**:
     - Login form (email, password, "Login" button)
     - Signup form (name, email, password, phone, address, "Sign Up" button)
     - Toggle between login/signup
     - "Forgot Password" link (basic - can defer implementation)

9. **User Profile Page** (Minimal for MVP)
   - **Purpose**: View and edit basic user info
   - **Key Elements**:
     - User name, email, phone (view only or editable)
     - Delivery address (editable)
     - "Edit" button
     - Logout button

### Admin Screens

1. **Admin Login Page**
   - **Purpose**: Secure admin access
   - **Key Elements**:
     - Admin login form (separate from customer login)
     - Email and password fields

2. **Admin Dashboard**
   - **Purpose**: Overview of key metrics
   - **Key Elements**:
     - Today's orders count
     - Today's revenue
     - Recent orders list (last 5-10 orders)
     - Quick links to Products, Orders, Categories

3. **Products Management Page**
   - **Purpose**: List and manage all products
   - **Key Elements**:
     - Products table/list (name, category, price, stock, actions)
     - "Add New Product" button
     - Edit/Delete buttons for each product
     - Search/filter products
     - Status indicators (in stock/out of stock)

4. **Add/Edit Product Page**
   - **Purpose**: Create or modify product
   - **Key Elements**:
     - Product form:
       - Name (text input)
       - Description (textarea)
       - Price (number input)
       - Category (dropdown)
       - Stock quantity (number input)
       - Image upload (file input)
     - "Save" and "Cancel" buttons
     - Form validation messages

5. **Orders Management Page**
   - **Purpose**: View and manage all orders
   - **Key Elements**:
     - Orders table/list (order ID, customer, date, status, total, actions)
     - Filter by status (dropdown)
     - Click order to view details
     - Status update dropdown for each order
     - Search orders by order ID or customer name

6. **Order Details Page/Modal** (for Admin)
   - **Purpose**: Detailed order view for admin actions
   - **Key Elements**:
     - Customer information (name, phone, email)
     - Delivery address
     - Order items table (product, quantity, price)
     - Order total
     - Current status
     - Status update dropdown
     - Payment method and status
     - Timestamps (order date, status updates)

7. **Categories Management Page**
   - **Purpose**: Manage product categories
   - **Key Elements**:
     - Categories list (name, product count, actions)
     - "Add Category" button
     - Edit/Delete buttons
     - Category form (name, optional image)

---

## 4. CORE ENTITIES (Essential Fields Only)

### Product
- `id` - Unique identifier
- `name` - Product name
- `description` - Product description (text)
- `price` - Price (decimal/float)
- `categoryId` - Foreign key to Category
- `stockQuantity` - Available stock (integer)
- `imageUrl` - Product image URL/path (single image for MVP)
- `isActive` - Boolean (for soft delete/hiding products)
- `createdAt` - Timestamp
- `updatedAt` - Timestamp

### Category
- `id` - Unique identifier
- `name` - Category name
- `slug` - URL-friendly name (optional but recommended)
- `imageUrl` - Category icon/image (optional)
- `isActive` - Boolean
- `createdAt` - Timestamp
- `updatedAt` - Timestamp

### User
- `id` - Unique identifier
- `email` - Email address (unique)
- `password` - Hashed password
- `name` - User's full name
- `phone` - Phone number
- `role` - Enum: 'customer' | 'admin'
- `defaultAddress` - JSON/text (street, city, pincode, landmark) - simple format for MVP
- `createdAt` - Timestamp
- `updatedAt` - Timestamp

### Cart / CartItem
**Note**: For MVP, use simple approach:
- `id` - Unique identifier
- `userId` - Foreign key to User (for logged-in users)
- `productId` - Foreign key to Product
- `quantity` - Integer
- `createdAt` - Timestamp
- `updatedAt` - Timestamp

**Alternative**: Store cart in localStorage for guest users, database for logged-in users.

### Order
- `id` - Unique identifier (can format as order number like ORD001234)
- `userId` - Foreign key to User
- `totalAmount` - Total order amount (decimal)
- `deliveryAddress` - JSON/text (snapshot at order time - address might change)
- `status` - Enum: 'pending' | 'confirmed' | 'preparing' | 'out_for_delivery' | 'delivered' | 'cancelled'
- `paymentMethod` - String ('COD' for MVP)
- `paymentStatus` - Enum: 'pending' | 'paid' | 'failed'
- `deliveryPartnerId` - Foreign key (nullable - for future use)
- `orderDate` - Timestamp
- `estimatedDeliveryTime` - Timestamp (nullable)
- `createdAt` - Timestamp
- `updatedAt` - Timestamp

### OrderItem
- `id` - Unique identifier
- `orderId` - Foreign key to Order
- `productId` - Foreign key to Product
- `quantity` - Integer
- `priceAtOrderTime` - Price snapshot (decimal) - **Important**: Product price might change, so store price at order time
- `createdAt` - Timestamp

### DeliveryPartner (Optional for MVP - Can Defer)
- `id` - Unique identifier
- `name` - Partner name
- `phone` - Contact number
- `vehicleNumber` - Vehicle identifier (optional)
- `isAvailable` - Boolean
- `createdAt` - Timestamp
- `updatedAt` - Timestamp

**Note**: For MVP, you can skip DeliveryPartner entity and handle delivery manually. Add this only if you plan to automate order assignment.

---

## 5. NON-FUNCTIONAL REQUIREMENTS

### Performance Expectations
- **Page Load Time**: < 3 seconds on 3G connection
- **Product Listing**: Load 20-30 products initially, implement pagination or "Load More"
- **Search Response**: < 1 second for search results
- **Image Optimization**: Compress product images (target < 200KB each), use lazy loading
- **Database Queries**: Optimize to avoid N+1 queries, use indexes on foreign keys and frequently searched fields
- **Cart Operations**: Add/remove items should feel instant (< 500ms)

### Security Basics
- **Password Hashing**: Use bcrypt or similar (never store plain text passwords)
- **Authentication**: JWT tokens or session-based authentication
- **Input Validation**: Validate all user inputs (prevent SQL injection, XSS attacks)
- **HTTPS**: Required in production
- **Admin Route Protection**: Restrict admin pages (role-based access control)
- **Rate Limiting**: Prevent brute force attacks on login (basic implementation)
- **Sensitive Data**: Never log passwords or payment details
- **CSRF Protection**: Implement CSRF tokens for state-changing operations

### Scalability Assumptions
- **Initial Scale**: Support 100-500 concurrent users
- **Database**: Start with single database (PostgreSQL/MySQL), can scale to read replicas later
- **File Storage**: Start with local/server storage, migrate to S3/Cloud Storage when needed
- **Caching**: Add Redis for session/cart data when traffic increases (optional for MVP)
- **CDN**: Use CDN for images in production (optional for MVP)
- **Horizontal Scaling**: Design stateless API to allow multiple server instances later

---

## 6. COMMON BEGINNER MISTAKES TO AVOID

### Product Thinking Mistakes
- ❌ **Over-engineering**: Adding features like recommendation engine, advanced analytics, multi-vendor support before validating core flow
- ❌ **Ignoring mobile**: Not testing on mobile devices (Blinkit is mobile-first)
- ❌ **Complex authentication**: Adding OAuth, 2FA, email verification before getting basic flow working
- ❌ **Too many payment methods**: Starting with COD only is fine, add cards/UPI later
- ❌ **Perfect design first**: Spending weeks on design instead of getting working MVP

### Technical Mistakes
- ❌ **No image optimization**: Uploading large images causes slow page loads
- ❌ **Missing error handling**: Not handling cases like "out of stock", "payment failed", "network error"
- ❌ **Hardcoding values**: Hardcoding delivery fees, tax rates, categories in code instead of database
- ❌ **No input validation**: Allowing negative quantities, invalid prices, empty fields
- ❌ **Ignoring edge cases**: What if cart item goes out of stock? What if order is placed but payment fails?
- ❌ **No data validation**: Not checking if product exists before adding to cart

### User Experience Mistakes
- ❌ **Confusing navigation**: Too many clicks to reach cart/checkout
- ❌ **No loading states**: Users don't know if action is processing (button clicks, form submissions)
- ❌ **Poor error messages**: Generic errors like "Error occurred" instead of "Product out of stock"
- ❌ **Cart not persistent**: Cart disappearing on page refresh (use localStorage or backend)
- ❌ **No order confirmation**: User doesn't know if order was placed successfully
- ❌ **Unclear status**: Order status messages not clear to customers

### Business Logic Mistakes
- ❌ **Price changes**: Product price changes after adding to cart (should snapshot price in OrderItem)
- ❌ **Stock management**: Not checking stock availability before allowing checkout
- ❌ **Order status flow**: Allowing invalid status jumps (e.g., "Pending" → "Delivered" skipping intermediate steps)
- ❌ **Delivery address**: Not validating address format/pincode
- ❌ **Quantity limits**: Not enforcing maximum order quantity based on stock

### Data Modeling Mistakes
- ❌ **Over-normalization**: Too many tables for MVP (e.g., separate Address table when simple JSON works)
- ❌ **Missing indexes**: Not indexing foreign keys and frequently queried fields (userId, productId, orderId)
- ❌ **No soft deletes**: Hard deleting products/orders makes data recovery impossible
- ❌ **Missing timestamps**: Not tracking createdAt/updatedAt makes debugging hard
- ❌ **Wrong data types**: Using string for price instead of decimal, integer for phone instead of string

### Development Process Mistakes
- ❌ **Building everything at once**: Should build and test one feature at a time
- ❌ **No testing**: Not testing critical flows (checkout, order placement)
- ❌ **Ignoring feedback**: Not getting real user feedback early
- ❌ **Premature optimization**: Optimizing before measuring actual performance issues

---

## NEXT STEPS (After Phase 1)

Once Product Thinking is complete, proceed to:

1. **Phase 2**: Database Design (ER diagrams, table schemas, relationships)
2. **Phase 3**: API Design (REST endpoints, request/response formats)
3. **Phase 4**: Frontend Architecture (component structure, state management)
4. **Phase 5**: Development (start building)

---

**Remember**: MVP means Minimum Viable Product. Focus on getting a working version with core features, then iterate based on real user feedback.

