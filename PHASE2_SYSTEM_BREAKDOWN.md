# PHASE 2: SYSTEM BREAKDOWN
##  Grocery Web App - Technical Architecture

---

## 1. SCREENS TO FEATURES MAPPING

### Customer-Facing Screens

#### 1. Homepage/Landing Page
**Data Needs:**
- Categories list (all active categories with imageUrl)
- Featured/popular products (limited set, e.g., 12-20 products)
- Cart item count (if user logged in)

**User Actions:**
- Click category → navigate to product listing
- Click product card → navigate to product detail
- Click search bar → navigate to product listing with search
- Click cart icon → navigate to cart page
- Click login → navigate to login page

---

#### 2. Product Listing Page
**Data Needs:**
- Products list (filtered by category or search query)
- Categories list (for sidebar filter)
- Pagination metadata (total count, current page)
- Cart items (to show if product already in cart)

**User Actions:**
- Select category filter → filter products
- Enter search query → filter products by name/description
- Click product card → navigate to product detail
- Click "Add to Cart" → add product to cart
- Click pagination/load more → load more products
- Update quantity and add to cart

---

#### 3. Product Detail Page
**Data Needs:**
- Single product details (all product fields)
- Current quantity in cart (if already added)
- Product stock availability

**User Actions:**
- Select quantity (1, 2, 3...)
- Click "Add to Cart" → add/update cart item
- Click back → navigate back
- Click cart icon → navigate to cart

---

#### 4. Shopping Cart Page
**Data Needs:**
- Cart items (products with details: name, price, image)
- Quantities for each item
- Subtotal calculation
- Delivery fee (if applicable)
- Total amount
- Product stock status (to validate availability)

**User Actions:**
- Increase quantity → update cart item quantity
- Decrease quantity → update cart item quantity
- Remove item → delete cart item
- Click "Continue Shopping" → navigate to homepage
- Click "Proceed to Checkout" → navigate to checkout (requires login)

---

#### 5. Checkout Page
**Data Needs:**
- Cart items (same as cart page)
- User's default address (pre-filled if logged in)
- Order summary (items, subtotal, delivery fee, total)
- Payment methods (COD only for MVP)

**User Actions:**
- Enter/edit delivery address
- Select payment method (COD)
- Click "Place Order" → create order
- Click back → navigate to cart

---

#### 6. Order Confirmation Page
**Data Needs:**
- Order ID/number
- Order details (items, quantities, prices)
- Delivery address
- Estimated delivery time
- Order status

**User Actions:**
- Click "Track Order" → navigate to order tracking
- Click "Continue Shopping" → navigate to homepage

---

#### 7. Order Tracking Page
**Data Needs:**
- Order details (all order fields)
- Order items with prices
- Delivery address
- Order status timeline
- Estimated delivery time
- Order history (optional - just current order for MVP)

**User Actions:**
- View order status (read-only for customer)
- Click "View Details" → expand order details

---

#### 8. Login/Signup Page
**Data Needs:**
- None (just form state)

**User Actions:**
- Enter email/password → login
- Fill signup form (name, email, password, phone, address) → create account
- Toggle between login/signup forms
- Click "Forgot Password" → (deferred for MVP)

---

#### 9. User Profile Page
**Data Needs:**
- User details (name, email, phone)
- Default address

**User Actions:**
- Edit name → update user
- Edit phone → update user
- Edit address → update user address
- Click logout → logout and redirect to homepage

---

### Admin Screens

#### 1. Admin Login Page
**Data Needs:**
- None (just form state)

**User Actions:**
- Enter admin credentials → login as admin
- Redirect to admin dashboard on success

---

#### 2. Admin Dashboard
**Data Needs:**
- Today's order count
- Today's revenue (sum of all orders placed today)
- Recent orders list (last 5-10 orders with basic info)

**User Actions:**
- Click "View All Orders" → navigate to orders management
- Click "Products" → navigate to products management
- Click "Categories" → navigate to categories management
- Click recent order → navigate to order details

---

#### 3. Products Management Page
**Data Needs:**
- All products list (with pagination)
- Product details (name, category, price, stock, status)
- Categories list (for filtering)
- Search/filter criteria

**User Actions:**
- Search products → filter products
- Filter by category → filter products
- Click "Add New Product" → navigate to add product page
- Click "Edit" → navigate to edit product page
- Click "Delete" → delete/deactivate product
- View product status (in stock/out of stock)

---

#### 4. Add/Edit Product Page
**Data Needs:**
- Categories list (for dropdown)
- Product details (if editing - pre-fill form)
- Existing product image (if editing)

**User Actions:**
- Fill product form → create/update product
- Upload image → upload file
- Click "Save" → create/update product
- Click "Cancel" → navigate back to products list

---

#### 5. Orders Management Page
**Data Needs:**
- All orders list (with pagination)
- Order details (ID, customer, date, status, total)
- Status filter criteria
- Search criteria

**User Actions:**
- Filter by status → filter orders
- Search by order ID/customer name → filter orders
- Click order → view order details
- Update order status → change order status
- Sort orders (by date, amount)

---

#### 6. Order Details Page/Modal (Admin)
**Data Needs:**
- Full order details (all order fields)
- Customer information (name, phone, email)
- Order items (products, quantities, prices)
- Delivery address
- Payment information
- Order status history (optional for MVP)

**User Actions:**
- Update order status → change status
- View customer details
- View order items
- Navigate back to orders list

---

#### 7. Categories Management Page
**Data Needs:**
- All categories list
- Category details (name, product count, image)
- Product count per category (for display)

**User Actions:**
- Click "Add Category" → show add category form
- Click "Edit" → edit category
- Click "Delete" → delete category (check if products exist)
- Upload category image

---

## 2. FEATURES TO API ENDPOINTS MAPPING

### Authentication APIs

| Feature | Endpoint | Method | Auth Required | Role | Description |
|---------|----------|--------|---------------|------|-------------|
| Customer Signup | `/api/auth/signup` | POST | No | Customer | Create new customer account |
| Customer Login | `/api/auth/login` | POST | No | Customer | Login customer, return JWT token |
| Admin Login | `/api/admin/auth/login` | POST | No | Admin | Login admin, return JWT token |
| Logout | `/api/auth/logout` | POST | Yes | Both | Logout user (invalidate token) |
| Get Current User | `/api/auth/me` | GET | Yes | Both | Get current logged-in user details |

### Category APIs

| Feature | Endpoint | Method | Auth Required | Role | Description |
|---------|----------|--------|---------------|------|-------------|
| Get All Categories | `/api/categories` | GET | No | Public | Get all active categories |
| Get Category by ID | `/api/categories/:id` | GET | No | Public | Get single category details |
| Create Category | `/api/admin/categories` | POST | Yes | Admin | Admin creates new category |
| Update Category | `/api/admin/categories/:id` | PUT | Yes | Admin | Admin updates category |
| Delete Category | `/api/admin/categories/:id` | DELETE | Yes | Admin | Admin deletes category (soft delete) |

### Product APIs

| Feature | Endpoint | Method | Auth Required | Role | Description |
|---------|----------|--------|---------------|------|-------------|
| Get Products | `/api/products` | GET | No | Public | Get products (with filters: category, search, pagination) |
| Get Product by ID | `/api/products/:id` | GET | No | Public | Get single product details |
| Create Product | `/api/admin/products` | POST | Yes | Admin | Admin creates new product |
| Update Product | `/api/admin/products/:id` | PUT | Yes | Admin | Admin updates product |
| Delete Product | `/api/admin/products/:id` | DELETE | Yes | Admin | Admin deletes product (soft delete) |
| Upload Product Image | `/api/admin/products/:id/image` | POST | Yes | Admin | Admin uploads product image |

### Cart APIs

| Feature | Endpoint | Method | Auth Required | Role | Description |
|---------|----------|--------|---------------|------|-------------|
| Get Cart | `/api/cart` | GET | Yes | Customer | Get user's cart items |
| Add to Cart | `/api/cart` | POST | Yes | Customer | Add product to cart (or update quantity) |
| Update Cart Item | `/api/cart/:itemId` | PUT | Yes | Customer | Update cart item quantity |
| Remove from Cart | `/api/cart/:itemId` | DELETE | Yes | Customer | Remove item from cart |
| Clear Cart | `/api/cart` | DELETE | Yes | Customer | Clear all cart items |

**Note**: For guest users (not logged in), store cart in localStorage. Sync to backend on login.

### Order APIs

| Feature | Endpoint | Method | Auth Required | Role | Description |
|---------|----------|--------|---------------|------|-------------|
| Create Order | `/api/orders` | POST | Yes | Customer | Create new order from cart |
| Get My Orders | `/api/orders` | GET | Yes | Customer | Get current user's orders |
| Get Order by ID | `/api/orders/:id` | GET | Yes | Customer | Get single order details (own orders only) |
| Get All Orders | `/api/admin/orders` | GET | Yes | Admin | Get all orders (with filters) |
| Get Order by ID (Admin) | `/api/admin/orders/:id` | GET | Yes | Admin | Get order details (any order) |
| Update Order Status | `/api/admin/orders/:id/status` | PATCH | Yes | Admin | Admin updates order status |

### User APIs

| Feature | Endpoint | Method | Auth Required | Role | Description |
|---------|----------|--------|---------------|------|-------------|
| Get User Profile | `/api/users/me` | GET | Yes | Customer | Get current user profile |
| Update User Profile | `/api/users/me` | PUT | Yes | Customer | Update user profile (name, phone, address) |

### Admin Dashboard APIs

| Feature | Endpoint | Method | Auth Required | Role | Description |
|---------|----------|--------|---------------|------|-------------|
| Get Dashboard Stats | `/api/admin/dashboard` | GET | Yes | Admin | Get today's orders count, revenue, recent orders |

---

## 3. STATE OWNERSHIP (Frontend)

### Redux Store (Global Client State)

**Use Redux for:**
- **Authentication State**
  - Current user (user object, token)
  - Is authenticated (boolean)
  - User role (customer/admin)
  - Login/logout actions
  
- **Cart State** (for logged-in users)
  - Cart items array
  - Cart total
  - Cart item count
  - Add/remove/update cart actions
  
- **UI State (Global)**
  - Sidebar open/closed
  - Modal open/closed states
  - Toast/notification messages
  - Loading states (global loader)

**Why Redux:**
- Auth state needed across all components
- Cart state needed in header, cart page, checkout
- Shared UI state across app

---

### React Query (Server State / Caching)

**Use React Query for:**
- **Products Data**
  - Products list (with filters)
  - Single product details
  - Categories list
  - Auto-refetch on window focus (optional)
  - Cache invalidation on product updates (admin)
  
- **Orders Data**
  - User's orders list
  - Single order details
  - Admin orders list
  - Cache invalidation on status updates
  
- **Categories Data**
  - Categories list (cached, rarely changes)
  
- **Dashboard Data (Admin)**
  - Dashboard stats
  - Recent orders
  - Refetch every 30-60 seconds for real-time feel

**Why React Query:**
- Server data that needs caching
- Automatic refetching capabilities
- Background updates
- Optimistic updates for better UX
- Handles loading/error states automatically

---

### Local Component State

**Use Local State for:**
- **Form Inputs**
  - Login form (email, password)
  - Signup form (all fields)
  - Product form (admin)
  - Address form (checkout)
  - Search input
  - Quantity selectors
  
- **UI State (Component-specific)**
  - Dropdown open/closed
  - Modal open/closed (if only used in one component)
  - Tab selection
  - Pagination page number
  - Filter selections (before applying)
  - Toggle login/signup form
  
- **Temporary State**
  - Selected product image preview
  - File upload preview
  - Form validation errors (before submission)
  - Loading states (component-specific)

**Why Local State:**
- Only used within single component
- No need to share across components
- Simpler than Redux/React Query
- Form state is temporary

---

### Hybrid Approach (Cart)

**Special Case: Cart State**
- **Guest Users**: Store in localStorage (browser storage)
- **Logged-in Users**: Store in Redux + sync with backend
- **On Login**: Merge localStorage cart with backend cart (handle conflicts)
- **Cart Sync**: After login, sync localStorage cart to backend, then use Redux

---

## 4. ERROR & EDGE CASES

### Out of Stock Scenarios

#### Case 1: Product Goes Out of Stock After Adding to Cart
**Scenario:** User adds product to cart, product stock becomes 0, user tries to checkout.

**Handling:**
- **Backend**: Validate stock before order creation
- **Frontend**: Show warning on cart page if item out of stock
- **Action**: Remove out-of-stock items from cart, show notification
- **Message**: "Some items are out of stock and have been removed from your cart"

#### Case 2: Quantity Exceeds Available Stock
**Scenario:** User increases quantity in cart beyond available stock.

**Handling:**
- **Backend**: Validate quantity <= stock when updating cart
- **Frontend**: Disable quantity increase button if at max stock
- **Validation**: Show error if user tries to set quantity > stock
- **Message**: "Only X items available in stock"

#### Case 3: Stock Depletes During Checkout
**Scenario:** User on checkout page, product stock becomes 0 before order placement.

**Handling:**
- **Backend**: Final stock check when creating order
- **Response**: Return error if stock insufficient
- **Frontend**: Show error, redirect to cart, remove out-of-stock items
- **Message**: "Some items are no longer available. Please review your cart."

---

### Product Deactivation Scenarios

#### Case 1: Product Deactivated While in Cart
**Scenario:** Admin deactivates product that exists in user's cart.

**Handling:**
- **Backend**: Filter out inactive products when fetching cart
- **Frontend**: Show notification if cart items removed
- **Action**: Remove inactive products from cart display
- **Message**: "Some products are no longer available"

#### Case 2: Deactivated Product in Existing Order
**Scenario:** Admin deactivates product that was already ordered.

**Handling:**
- **Backend**: Show product details in orders (even if deactivated)
- **Frontend**: Display order items normally (historical data)
- **Note**: Orders are historical records, don't filter deactivated products

---

### Cart Merge on Login

#### Case 1: Guest Cart + User Cart Merge
**Scenario:** User adds items as guest, then logs in (has existing cart in database).

**Handling:**
- **Strategy**: Merge both carts (localStorage + backend)
- **Logic**: 
  - If same product exists in both: Use higher quantity or sum quantities
  - If different products: Combine both
- **Backend**: Accept cart items array, replace user's cart
- **Frontend**: Send localStorage cart to backend on login success
- **API**: `POST /api/cart/merge` or include in login response

#### Case 2: Conflicting Quantities
**Scenario:** Guest cart has Product A (qty: 3), user cart has Product A (qty: 2).

**Options:**
- **Option A**: Use maximum quantity (qty: 3)
- **Option B**: Sum quantities (qty: 5) - check stock limit
- **Option C**: Ask user which to keep (complex, defer for MVP)
- **Recommendation**: Option A (use maximum) - simpler, less confusing

---

### Order Status Mismatch

#### Case 1: Admin Updates Status, Customer View Stale
**Scenario:** Admin changes order status, customer still sees old status.

**Handling:**
- **React Query**: Auto-refetch order status every 30 seconds
- **Alternative**: WebSocket for real-time updates (defer for MVP)
- **Fallback**: Manual refresh button
- **UX**: Show "Last updated: X seconds ago"

#### Case 2: Invalid Status Transition
**Scenario:** Admin tries to change status from "Delivered" to "Preparing".

**Handling:**
- **Backend**: Validate status transitions (state machine)
- **Valid Transitions:**
  - pending → confirmed
  - confirmed → preparing
  - preparing → out_for_delivery
  - out_for_delivery → delivered
  - Any → cancelled (with restrictions)
- **Frontend**: Disable invalid status options in dropdown
- **Error**: Return 400 Bad Request with clear message

#### Case 3: Order Cancelled After Payment
**Scenario:** Order cancelled but payment already processed (future payment methods).

**Handling:**
- **For MVP (COD)**: No issue - payment not received yet
- **Future**: Implement refund logic when adding online payments
- **Status**: Keep "cancelled" status, track refund status separately

---

### Authentication & Authorization Errors

#### Case 1: Token Expired During Session
**Scenario:** User's JWT token expires while using app.

**Handling:**
- **Backend**: Return 401 Unauthorized
- **Frontend**: Clear Redux auth state, redirect to login
- **UX**: Show "Session expired, please login again"
- **Prevention**: Refresh token mechanism (optional for MVP)

#### Case 2: Customer Accesses Admin Route
**Scenario:** Customer tries to access `/admin/dashboard`.

**Handling:**
- **Backend**: Check role in middleware, return 403 Forbidden
- **Frontend**: Route guard, redirect to homepage if not admin
- **UX**: Show "Access denied" message

#### Case 3: Unauthorized API Call
**Scenario:** User makes API call without valid token.

**Handling:**
- **Backend**: Return 401 Unauthorized
- **Frontend**: Clear auth state, redirect to login
- **Error Handler**: Global error handler catches 401, handles logout

---

### Data Validation Errors

#### Case 1: Invalid Product Data on Create/Update
**Scenario:** Admin submits product form with negative price or empty name.

**Handling:**
- **Frontend**: Client-side validation before submit
- **Backend**: Server-side validation (never trust frontend)
- **Errors**: Return 400 with field-specific error messages
- **Display**: Show errors next to relevant form fields

#### Case 2: Duplicate Email on Signup
**Scenario:** User tries to signup with existing email.

**Handling:**
- **Backend**: Check email uniqueness, return 409 Conflict
- **Frontend**: Show error message
- **Message**: "Email already exists. Please login instead."

#### Case 3: Invalid Address Format
**Scenario:** User enters invalid pincode or incomplete address.

**Handling:**
- **Frontend**: Basic validation (required fields, pincode format)
- **Backend**: Validate address completeness
- **Error**: Return 400 with specific field errors
- **UX**: Highlight invalid fields

---

### Network & System Errors

#### Case 1: Network Failure During Order Placement
**Scenario:** User clicks "Place Order", network request fails.

**Handling:**
- **Frontend**: Show error message, keep user on checkout page
- **Retry**: Offer "Retry" button
- **State**: Don't clear cart (order not confirmed)
- **Message**: "Network error. Please check your connection and try again."

#### Case 2: Server Error (500) on Critical Operation
**Scenario:** Server error when fetching products or creating order.

**Handling:**
- **Backend**: Log error, return 500 with generic message
- **Frontend**: Show user-friendly error message
- **Fallback**: Show cached data if available (React Query)
- **Message**: "Something went wrong. Please try again later."

#### Case 3: Slow Network / Timeout
**Scenario:** API requests take too long, user gets frustrated.

**Handling:**
- **Backend**: Set reasonable timeout (5-10 seconds)
- **Frontend**: Show loading indicators
- **Timeout**: Show timeout error after 10 seconds
- **UX**: Allow cancellation of long-running requests

---

### Business Logic Edge Cases

#### Case 1: Empty Cart Checkout Attempt
**Scenario:** User tries to checkout with empty cart.

**Handling:**
- **Frontend**: Disable "Proceed to Checkout" button if cart empty
- **Backend**: Validate cart not empty before order creation
- **Error**: Return 400 "Cart is empty"

#### Case 2: Category Deletion with Products
**Scenario:** Admin tries to delete category that has products.

**Handling:**
- **Backend**: Check if category has products before deletion
- **Options**: 
  - Soft delete (set isActive = false)
  - Prevent deletion, show error
- **Recommendation**: Soft delete, don't allow hard delete if products exist
- **Message**: "Cannot delete category with products. Deactivate instead."

#### Case 3: Order Modification After Confirmation
**Scenario:** User wants to modify order after it's confirmed.

**Handling:**
- **Business Rule**: Orders cannot be modified after "confirmed" status
- **Frontend**: Don't show edit options after confirmation
- **Alternative**: Allow cancellation (status → cancelled) if not yet preparing
- **Message**: "Order cannot be modified. Please contact support to cancel."

---

## SUMMARY: STATE MANAGEMENT DECISIONS

### Redux Store Structure
```
{
  auth: {
    user: null | UserObject,
    token: null | string,
    isAuthenticated: boolean,
    role: 'customer' | 'admin' | null
  },
  cart: {
    items: CartItem[],
    total: number,
    itemCount: number
  },
  ui: {
    sidebarOpen: boolean,
    notifications: Notification[]
  }
}
```

### React Query Keys (for caching)
- `['products', filters]` - Products list
- `['product', id]` - Single product
- `['categories']` - Categories list
- `['orders']` - User orders
- `['order', id]` - Single order
- `['admin', 'orders', filters]` - Admin orders
- `['admin', 'dashboard']` - Dashboard stats

### Local State Examples
- Login form: `useState` for email/password
- Product form: `useState` for form fields
- Search input: `useState` for search query
- Modal: `useState` for open/closed
- Quantity selector: `useState` for selected quantity

---

## NEXT STEPS (After Phase 2)

1. **Phase 3**: Database Design (table schemas, relationships, indexes)
2. **Phase 4**: API Design Details (request/response formats, validation rules)
3. **Phase 5**: Frontend Component Structure
4. **Phase 6**: Development (start coding)

---

**Key Takeaways:**
- Redux for global client state (auth, cart)
- React Query for server state (products, orders, categories)
- Local state for forms and UI toggles
- Always validate on backend, never trust frontend
- Handle edge cases gracefully with user-friendly messages

