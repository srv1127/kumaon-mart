# PHASE 2 - TASK 1: FRONTEND ARCHITECTURE
## Blinkit-like Grocery Web App - React + TypeScript + Tailwind

---

## PREREQUISITES & DEPENDENCIES

### Already Installed
- ✅ React 19.2.0
- ✅ TypeScript 5.9.3
- ✅ Redux Toolkit 2.11.2
- ✅ React Redux 9.2.0
- ✅ Tailwind CSS 4.1.18
- ✅ Vite 7.2.4

### Need to Install
- ⚠️ **@tanstack/react-query** (for server state management)
- ⚠️ **react-router-dom** (for routing)
- ⚠️ **axios** or **fetch** wrapper (for API calls)

---

## 1. FOLDER STRUCTURE

```
src/
├── app/                          # App-level configuration
│   ├── store/
│   │   ├── index.ts             # Redux store configuration
│   │   ├── hooks.ts             # Typed Redux hooks (useAppDispatch, useAppSelector)
│   │   └── rootReducer.ts       # Combined reducers
│   ├── queryClient.ts           # React Query client configuration
│   └── router.tsx               # React Router configuration & routes
│
├── features/                     # Feature-based modules (business logic)
│   ├── auth/
│   │   ├── components/          # Auth-specific components
│   │   │   ├── LoginForm.tsx
│   │   │   └── SignupForm.tsx
│   │   ├── hooks/               # Feature-specific hooks
│   │   │   ├── useAuth.ts       # Custom auth hook
│   │   │   └── useLogin.ts
│   │   ├── services/            # Feature-specific API calls
│   │   │   └── authService.ts
│   │   └── slice/               # Redux slices
│   │       └── authSlice.ts
│   │
│   ├── products/
│   │   ├── components/
│   │   │   ├── ProductFilters.tsx
│   │   │   └── ProductList.tsx
│   │   ├── hooks/
│   │   │   ├── useProducts.ts
│   │   │   └── useProduct.ts
│   │   └── services/
│   │       └── productService.ts
│   │
│   ├── cart/
│   │   ├── components/
│   │   │   └── CartSummary.tsx
│   │   ├── hooks/
│   │   │   └── useCart.ts
│   │   ├── services/
│   │   │   └── cartService.ts
│   │   └── slice/
│   │       └── cartSlice.ts
│   │
│   ├── orders/
│   │   ├── components/
│   │   │   ├── OrderCard.tsx
│   │   │   └── OrderStatusTimeline.tsx
│   │   ├── hooks/
│   │   │   ├── useOrders.ts
│   │   │   └── useOrder.ts
│   │   └── services/
│   │       └── orderService.ts
│   │
│   └── admin/
│       ├── products/
│       │   ├── components/
│       │   │   └── ProductForm.tsx
│       │   └── services/
│       │       └── adminProductService.ts
│       ├── orders/
│       │   ├── components/
│       │   │   └── OrderStatusSelector.tsx
│       │   └── services/
│       │       └── adminOrderService.ts
│       └── dashboard/
│           └── services/
│               └── dashboardService.ts
│
├── pages/                        # Page-level components (routes)
│   ├── customer/
│   │   ├── HomePage.tsx
│   │   ├── ProductListingPage.tsx
│   │   ├── ProductDetailPage.tsx
│   │   ├── CartPage.tsx
│   │   ├── CheckoutPage.tsx
│   │   ├── OrderConfirmationPage.tsx
│   │   ├── OrderTrackingPage.tsx
│   │   ├── LoginPage.tsx
│   │   └── ProfilePage.tsx
│   │
│   └── admin/
│       ├── AdminLoginPage.tsx
│       ├── AdminDashboardPage.tsx
│       ├── AdminProductsPage.tsx
│       ├── AdminProductFormPage.tsx
│       ├── AdminOrdersPage.tsx
│       ├── AdminOrderDetailPage.tsx
│       └── AdminCategoriesPage.tsx
│
├── components/                   # Shared/reusable components
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Layout.tsx
│   │   └── AdminLayout.tsx
│   │
│   ├── ui/                       # Basic UI primitives
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Modal.tsx
│   │   ├── Loader.tsx
│   │   ├── Skeleton.tsx
│   │   ├── Toast.tsx
│   │   └── Dropdown.tsx
│   │
│   ├── product/
│   │   ├── ProductCard.tsx      # Reusable product card
│   │   └── ProductGrid.tsx      # Grid layout for products
│   │
│   ├── cart/
│   │   ├── CartItem.tsx         # Single cart item row
│   │   └── CartIcon.tsx         # Header cart icon with badge
│   │
│   └── order/
│       ├── OrderSummary.tsx
│       └── OrderItemRow.tsx
│
├── services/                     # API service layer
│   ├── api/
│   │   ├── client.ts            # Axios instance with interceptors
│   │   ├── endpoints.ts         # API endpoint constants
│   │   └── types.ts             # API request/response types
│   │
│   └── storage/
│       ├── localStorage.ts      # LocalStorage helpers
│       └── tokenStorage.ts      # Token storage utilities
│
├── hooks/                        # Shared custom hooks
│   ├── useDebounce.ts
│   ├── useLocalStorage.ts
│   └── useAuthGuard.ts          # Route protection hook
│
├── utils/                        # Utility functions
│   ├── formatters.ts            # Price formatting, date formatting
│   ├── validators.ts            # Form validation helpers
│   ├── constants.ts             # App-wide constants
│   └── helpers.ts               # General helper functions
│
├── types/                        # TypeScript type definitions
│   ├── index.ts                 # Re-export all types
│   ├── product.types.ts
│   ├── order.types.ts
│   ├── user.types.ts
│   ├── cart.types.ts
│   └── api.types.ts
│
├── assets/                       # Static assets
│   ├── images/
│   └── icons/
│
├── App.tsx                       # Root app component
├── main.tsx                      # Entry point
└── index.css                     # Global styles + Tailwind imports
```

---

## 2. SCREEN BREAKDOWN INTO COMPONENTS

### Customer Pages

#### HomePage
```
HomePage
├── Layout (shared)
│   └── Header (shared)
│       ├── SearchBar (shared)
│       └── CartIcon (shared)
├── CategoryGrid
│   └── CategoryCard (reusable)
├── FeaturedProducts
│   └── ProductCard (shared) × N
└── Footer (shared)
```

**Components:**
- `HomePage` - Page container
- `CategoryGrid` - Feature component (feature/categories)
- `CategoryCard` - Reusable UI component (components/category/CategoryCard.tsx)
- `FeaturedProducts` - Feature component (feature/products/components/FeaturedProducts.tsx)

---

#### ProductListingPage
```
ProductListingPage
├── Layout (shared)
│   └── Header (shared)
├── ProductFilters (feature/products)
│   └── CategoryFilter
├── ProductList (feature/products)
│   └── ProductCard (shared) × N
└── Pagination (shared/ui)
```

**Components:**
- `ProductListingPage` - Page container
- `ProductFilters` - Feature component (feature/products/components/ProductFilters.tsx)
- `ProductList` - Feature component (feature/products/components/ProductList.tsx)
- `Pagination` - Shared UI component (components/ui/Pagination.tsx)

---

#### ProductDetailPage
```
ProductDetailPage
├── Layout (shared)
│   └── Header (shared)
├── ProductImage
├── ProductInfo
│   ├── ProductName
│   ├── ProductPrice
│   ├── ProductDescription
│   ├── StockIndicator
│   ├── QuantitySelector (shared/ui)
│   └── AddToCartButton
└── BackButton (shared/ui)
```

**Components:**
- `ProductDetailPage` - Page container
- `ProductImage` - Feature component (feature/products/components/ProductImage.tsx)
- `ProductInfo` - Feature component (feature/products/components/ProductInfo.tsx)
- `QuantitySelector` - Shared UI component (components/ui/QuantitySelector.tsx)

---

#### CartPage
```
CartPage
├── Layout (shared)
│   └── Header (shared)
├── CartHeader
├── CartItemsList
│   └── CartItem (shared) × N
│       ├── ProductImage
│       ├── ProductInfo
│       ├── QuantityControls (shared/ui)
│       └── RemoveButton
├── CartSummary (feature/cart)
│   ├── SubtotalRow
│   ├── DeliveryFeeRow
│   └── TotalRow
└── CheckoutButton
```

**Components:**
- `CartPage` - Page container
- `CartItemsList` - Feature component (feature/cart/components/CartItemsList.tsx)
- `CartItem` - Shared component (components/cart/CartItem.tsx)
- `CartSummary` - Feature component (feature/cart/components/CartSummary.tsx)
- `QuantityControls` - Shared UI component (components/ui/QuantityControls.tsx)

---

#### CheckoutPage
```
CheckoutPage
├── Layout (shared)
│   └── Header (shared)
├── CheckoutForm
│   ├── AddressSection
│   │   └── AddressForm (shared/ui)
│   ├── PaymentSection
│   │   └── PaymentMethodSelector
│   └── OrderSummary (shared/order)
│       ├── OrderItemsList
│       └── PriceBreakdown
└── PlaceOrderButton
```

**Components:**
- `CheckoutPage` - Page container
- `CheckoutForm` - Feature component (feature/orders/components/CheckoutForm.tsx)
- `AddressForm` - Shared UI component (components/ui/AddressForm.tsx)
- `OrderSummary` - Shared component (components/order/OrderSummary.tsx)

---

#### OrderConfirmationPage
```
OrderConfirmationPage
├── Layout (shared)
│   └── Header (shared)
├── SuccessIcon
├── ConfirmationMessage
├── OrderDetails
│   ├── OrderId
│   ├── EstimatedDelivery
│   └── OrderSummary (shared/order)
└── ActionButtons
    ├── TrackOrderButton
    └── ContinueShoppingButton
```

**Components:**
- `OrderConfirmationPage` - Page container
- `OrderDetails` - Feature component (feature/orders/components/OrderDetails.tsx)

---

#### OrderTrackingPage
```
OrderTrackingPage
├── Layout (shared)
│   └── Header (shared)
├── OrderHeader
│   ├── OrderId
│   └── OrderDate
├── OrderStatusTimeline (feature/orders)
├── OrderItemsList
│   └── OrderItemRow (shared/order) × N
├── DeliveryAddress
└── EstimatedDelivery
```

**Components:**
- `OrderTrackingPage` - Page container
- `OrderStatusTimeline` - Feature component (feature/orders/components/OrderStatusTimeline.tsx)
- `OrderItemRow` - Shared component (components/order/OrderItemRow.tsx)

---

#### LoginPage
```
LoginPage
├── Layout (shared)
│   └── Header (shared)
└── AuthContainer
    ├── Tabs (shared/ui)
    │   ├── LoginTab
    │   └── SignupTab
    ├── LoginForm (feature/auth)
    └── SignupForm (feature/auth)
```

**Components:**
- `LoginPage` - Page container
- `AuthContainer` - Feature component (feature/auth/components/AuthContainer.tsx)
- `LoginForm` - Feature component (feature/auth/components/LoginForm.tsx)
- `SignupForm` - Feature component (feature/auth/components/SignupForm.tsx)

---

#### ProfilePage
```
ProfilePage
├── Layout (shared)
│   └── Header (shared)
├── ProfileHeader
└── ProfileForm
    ├── NameField (shared/ui/Input)
    ├── EmailField (shared/ui/Input)
    ├── PhoneField (shared/ui/Input)
    └── AddressField (shared/ui/Input)
```

**Components:**
- `ProfilePage` - Page container
- `ProfileForm` - Feature component (feature/auth/components/ProfileForm.tsx)

---

### Admin Pages

#### AdminDashboardPage
```
AdminDashboardPage
├── AdminLayout (shared/layout)
│   └── AdminSidebar (shared/layout)
├── StatsGrid
│   ├── StatCard (shared/ui) × 2
│   │   ├── OrdersCountCard
│   │   └── RevenueCard
├── RecentOrdersTable (feature/admin/orders)
│   └── OrderRow (shared/admin)
└── QuickActions
```

**Components:**
- `AdminDashboardPage` - Page container
- `AdminLayout` - Shared layout (components/layout/AdminLayout.tsx)
- `AdminSidebar` - Shared layout (components/layout/AdminSidebar.tsx)
- `StatsGrid` - Feature component (feature/admin/dashboard/components/StatsGrid.tsx)
- `StatCard` - Shared UI component (components/ui/StatCard.tsx)

---

#### AdminProductsPage
```
AdminProductsPage
├── AdminLayout (shared/layout)
├── PageHeader
│   ├── Title
│   └── AddProductButton
├── ProductsTable (feature/admin/products)
│   ├── TableHeader
│   └── ProductRow × N
│       ├── ProductInfo
│       ├── StatusBadge (shared/ui)
│       └── ActionButtons
└── Pagination (shared/ui)
```

**Components:**
- `AdminProductsPage` - Page container
- `ProductsTable` - Feature component (feature/admin/products/components/ProductsTable.tsx)
- `ProductRow` - Feature component (feature/admin/products/components/ProductRow.tsx)

---

#### AdminProductFormPage
```
AdminProductFormPage
├── AdminLayout (shared/layout)
├── PageHeader
└── ProductForm (feature/admin/products)
    ├── NameInput (shared/ui/Input)
    ├── DescriptionTextarea (shared/ui/Textarea)
    ├── PriceInput (shared/ui/Input)
    ├── CategorySelect (shared/ui/Select)
    ├── StockInput (shared/ui/Input)
    ├── ImageUpload (shared/ui/ImageUpload)
    └── FormActions
        ├── SaveButton (shared/ui/Button)
        └── CancelButton (shared/ui/Button)
```

**Components:**
- `AdminProductFormPage` - Page container
- `ProductForm` - Feature component (feature/admin/products/components/ProductForm.tsx)

---

#### AdminOrdersPage
```
AdminOrdersPage
├── AdminLayout (shared/layout)
├── PageHeader
├── FiltersBar
│   ├── StatusFilter (shared/ui/Select)
│   └── SearchInput (shared/ui/Input)
├── OrdersTable (feature/admin/orders)
│   ├── TableHeader
│   └── OrderRow × N
│       ├── OrderInfo
│       ├── CustomerInfo
│       ├── StatusBadge (shared/ui)
│       └── ViewButton
└── Pagination (shared/ui)
```

**Components:**
- `AdminOrdersPage` - Page container
- `OrdersTable` - Feature component (feature/admin/orders/components/OrdersTable.tsx)
- `OrderRow` - Feature component (feature/admin/orders/components/OrderRow.tsx)

---

#### AdminOrderDetailPage
```
AdminOrderDetailPage
├── AdminLayout (shared/layout)
├── PageHeader
│   ├── OrderId
│   └── BackButton
├── OrderInfoGrid
│   ├── CustomerSection
│   ├── DeliveryAddressSection
│   └── PaymentInfoSection
├── OrderItemsTable
│   └── OrderItemRow (shared/order) × N
├── StatusSection
│   └── StatusSelector (feature/admin/orders)
└── ActionButtons
```

**Components:**
- `AdminOrderDetailPage` - Page container
- `StatusSelector` - Feature component (feature/admin/orders/components/StatusSelector.tsx)

---

#### AdminCategoriesPage
```
AdminCategoriesPage
├── AdminLayout (shared/layout)
├── PageHeader
│   └── AddCategoryButton
├── CategoriesGrid
│   └── CategoryCard (shared) × N
│       ├── CategoryInfo
│       └── ActionButtons
└── CategoryModal (shared/ui/Modal)
    └── CategoryForm
```

**Components:**
- `AdminCategoriesPage` - Page container
- `CategoriesGrid` - Feature component (feature/admin/categories/components/CategoriesGrid.tsx)

---

## 3. SHARED COMPONENTS

### Layout Components

#### Header
**Location:** `components/layout/Header.tsx`

**Props:**
- No props (reads from Redux/React Query)

**Responsibilities:**
- Display logo
- Show search bar
- Display cart icon with item count (from Redux)
- Show login/profile button (from Redux auth)
- Handle navigation

**State:**
- Search query (local state)
- Mobile menu open/closed (local state)

**Dependencies:**
- Redux: `cart.itemCount`, `auth.isAuthenticated`, `auth.user`
- React Query: None

---

#### Footer
**Location:** `components/layout/Footer.tsx`

**Props:**
- None

**Responsibilities:**
- Display footer links
- Copyright information

---

#### Layout
**Location:** `components/layout/Layout.tsx`

**Props:**
- `children: React.ReactNode`

**Responsibilities:**
- Wrap customer pages
- Provide Header and Footer
- Handle page-level layout

---

#### AdminLayout
**Location:** `components/layout/AdminLayout.tsx`

**Props:**
- `children: React.ReactNode`

**Responsibilities:**
- Wrap admin pages
- Provide AdminSidebar
- Handle admin page layout
- Route protection (admin only)

---

### UI Primitives

#### Button
**Location:** `components/ui/Button.tsx`

**Props:**
- `variant: 'primary' | 'secondary' | 'outline' | 'danger'`
- `size: 'sm' | 'md' | 'lg'`
- `disabled: boolean`
- `loading: boolean`
- `onClick: () => void`
- `children: React.ReactNode`
- `type: 'button' | 'submit'`

**Responsibilities:**
- Consistent button styling
- Loading state
- Disabled state
- Variant-based styling

**Memoization:** Not needed (primitive component)

---

#### ProductCard
**Location:** `components/product/ProductCard.tsx`

**Props:**
- `product: Product`
- `onAddToCart: (productId: number, quantity: number) => void`
- `isInCart: boolean` (optional)
- `cartQuantity: number` (optional)

**Responsibilities:**
- Display product image, name, price
- Show "Add to Cart" button
- Handle add to cart action
- Show stock status

**Memoization:** ✅ **YES** - Memoize with `React.memo` (prevent re-render when parent re-renders but product data unchanged)

**Dependencies:**
- Redux: Cart state (to check if in cart)

---

#### CartItem
**Location:** `components/cart/CartItem.tsx`

**Props:**
- `item: CartItem` (product + quantity)
- `onUpdateQuantity: (itemId: number, quantity: number) => void`
- `onRemove: (itemId: number) => void`

**Responsibilities:**
- Display cart item details
- Quantity controls (increase/decrease)
- Remove button
- Calculate item subtotal

**Memoization:** ✅ **YES** - Memoize with `React.memo` (prevents re-render when other cart items change)

**Dependencies:**
- Redux: None (receives all data via props)

---

#### Modal
**Location:** `components/ui/Modal.tsx`

**Props:**
- `isOpen: boolean`
- `onClose: () => void`
- `title?: string`
- `children: React.ReactNode`
- `size?: 'sm' | 'md' | 'lg' | 'xl'`

**Responsibilities:**
- Display modal overlay
- Handle close on backdrop click
- Handle close on escape key
- Scrollable content area

**State:**
- None (controlled component)

---

#### Loader
**Location:** `components/ui/Loader.tsx`

**Props:**
- `size?: 'sm' | 'md' | 'lg'`
- `fullScreen?: boolean`

**Responsibilities:**
- Display loading spinner
- Full-screen or inline loading

---

#### Skeleton
**Location:** `components/ui/Skeleton.tsx`

**Props:**
- `width?: string`
- `height?: string`
- `variant?: 'text' | 'circular' | 'rectangular'`

**Responsibilities:**
- Display loading placeholder
- Used while data is fetching (React Query loading state)

---

### Additional Shared Components

#### CartIcon
**Location:** `components/cart/CartIcon.tsx`

**Props:**
- None (reads from Redux)

**Responsibilities:**
- Display cart icon with badge count
- Navigate to cart page on click

**Dependencies:**
- Redux: `cart.itemCount`

**Memoization:** ✅ **YES** - Memoize (only re-render when cart count changes)

---

#### OrderSummary
**Location:** `components/order/OrderSummary.tsx`

**Props:**
- `items: OrderItem[]`
- `subtotal: number`
- `deliveryFee?: number`
- `total: number`

**Responsibilities:**
- Display order items list
- Show price breakdown
- Calculate and display totals

**Memoization:** ✅ **YES** - Memoize (prevent re-render if props unchanged)

---

#### OrderItemRow
**Location:** `components/order/OrderItemRow.tsx`

**Props:**
- `item: OrderItem`
- `product: Product` (optional, if available)

**Responsibilities:**
- Display order item (product name, quantity, price)
- Show product image if available

**Memoization:** ✅ **YES** - Memoize

---

## 4. RENDER FLOW & MEMOIZATION

### Cart Update Scenario

#### What Happens When Cart Updates:

1. **User Action:** Click "Add to Cart" on ProductCard
2. **Action Dispatched:** `addToCart({ productId, quantity })` → Redux
3. **Redux State Updates:** `cart.items`, `cart.total`, `cart.itemCount` update
4. **Components Re-render:**

   **✅ WILL Re-render:**
   - `CartIcon` (subscribed to `cart.itemCount`)
   - `CartPage` (if currently viewing)
   - `CartItemsList` (subscribed to `cart.items`)
   - `CartSummary` (subscribed to `cart.total`)
   - All `CartItem` components (because `cart.items` changed)
   - `Header` (contains `CartIcon`)
   - `CheckoutPage` (if on checkout, subscribed to cart)

   **❌ Will NOT Re-render:**
   - `HomePage` (not subscribed to cart)
   - `ProductListingPage` (not subscribed to cart)
   - `ProductDetailPage` (not subscribed to cart)
   - Other `ProductCard` components (memoized, props didn't change)
   - `Footer` (not subscribed to cart)

5. **Memoization Benefits:**
   - `ProductCard` components not in viewport don't re-render (memoized)
   - `CartItem` components re-render only if their specific item changed (memoized with proper comparison)

---

### Product List Update Scenario

#### What Happens When Products Load:

1. **React Query Fetch:** `useProducts()` fetches products
2. **Loading State:** `isLoading = true`
3. **Components Render:**
   - `ProductListingPage` shows `Skeleton` components
   - `ProductList` renders skeletons
4. **Data Arrives:** React Query updates cache
5. **Components Re-render:**
   - `ProductList` receives products array
   - Maps over products, renders `ProductCard` for each
   - Each `ProductCard` is memoized (won't re-render unless product data changes)

6. **If Filters Change:**
   - New query key → React Query fetches new data
   - Only `ProductList` and `ProductCard` components re-render
   - `Header`, `Footer`, `ProductFilters` don't re-render (unless they have local state changes)

---

### Memoization Strategy

#### Components to Memoize with `React.memo`:

1. **ProductCard**
   - Reason: Rendered many times in lists
   - Comparison: Shallow compare product object
   - Benefit: Prevents re-render when parent re-renders but product unchanged

2. **CartItem**
   - Reason: Multiple items in cart
   - Comparison: Compare item.id and item.quantity
   - Benefit: Only re-renders when that specific item changes

3. **CartIcon**
   - Reason: In header, parent might re-render frequently
   - Comparison: Only `cart.itemCount`
   - Benefit: Only re-renders when count changes

4. **OrderSummary**
   - Reason: Used in multiple places
   - Comparison: Shallow compare items array and price values
   - Benefit: Prevents unnecessary re-renders

5. **OrderItemRow**
   - Reason: Multiple items in order
   - Comparison: Compare item object
   - Benefit: Only re-renders when that item changes

#### Components NOT to Memoize:

1. **Button, Input, Modal** (UI primitives)
   - Reason: Simple components, memoization overhead not worth it

2. **Page Components** (HomePage, CartPage, etc.)
   - Reason: Re-render infrequently, contain complex logic

3. **Forms** (LoginForm, SignupForm)
   - Reason: Have local state, re-render on user input (expected)

---

### useMemo & useCallback Usage

#### useMemo:
- **Cart Total Calculation:** Memoize total calculation in `CartSummary`
  ```typescript
  const total = useMemo(() => {
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [items]);
  ```

- **Filtered Products:** Memoize filtered product list in `ProductList`
  ```typescript
  const filteredProducts = useMemo(() => {
    return products.filter(/* filter logic */);
  }, [products, filters]);
  ```

#### useCallback:
- **Event Handlers Passed to Memoized Children:**
  - `onAddToCart` in `ProductCard`
  - `onUpdateQuantity`, `onRemove` in `CartItem`
  
  ```typescript
  const handleAddToCart = useCallback((productId: number, quantity: number) => {
    dispatch(addToCart({ productId, quantity }));
  }, [dispatch]);
  ```

---

## 5. DATA FLOW

### Flow 1: API → React Query → Components (Server Data)

#### Example: Loading Products on ProductListingPage

```
1. Component Mounts:
   ProductListingPage
   └── Calls: useProducts({ categoryId, search })

2. React Query:
   ├── Checks cache (query key: ['products', { categoryId, search }])
   ├── If cached: Returns cached data
   └── If not cached:
       ├── Sets isLoading = true
       ├── Calls: productService.getProducts({ categoryId, search })
       ├── Receives: API response
       ├── Updates cache
       └── Sets isLoading = false, data = products

3. Component Receives:
   ├── data: Product[]
   ├── isLoading: boolean
   ├── error: Error | null
   └── refetch: () => void

4. Component Renders:
   ├── If isLoading: Show Skeleton
   ├── If error: Show ErrorMessage
   └── If data: Render ProductList → ProductCard × N
```

#### Example: Updating Product (Admin)

```
1. User Action:
   AdminProductFormPage
   └── Submit form → productService.updateProduct(id, data)

2. Mutation (React Query):
   ├── Calls: API endpoint (PUT /api/admin/products/:id)
   ├── On Success:
   │   ├── Invalidates: ['products'] cache
   │   ├── Invalidates: ['product', id] cache
   │   └── Triggers refetch of products list
   └── Components automatically re-render with fresh data
```

---

### Flow 2: UI → Redux → Backend (Client State)

#### Example: Adding Item to Cart

```
1. User Action:
   ProductCard
   └── Click "Add to Cart"
       └── Calls: handleAddToCart(productId, quantity)

2. Redux Action:
   ├── Dispatch: addToCart({ productId, quantity })
   └── Redux Thunk (if using async):
       ├── Optimistic update: Update Redux state immediately
       ├── Call: cartService.addToCart(productId, quantity)
       ├── On Success: Confirm state
       └── On Error: Revert optimistic update, show error

3. Redux State Updates:
   ├── cart.items: [...items, newItem]
   ├── cart.total: Recalculated
   └── cart.itemCount: items.length

4. Components Re-render:
   ├── CartIcon (subscribed to cart.itemCount)
   ├── CartPage (if viewing)
   └── CartItemsList (subscribed to cart.items)

5. Backend Sync:
   └── API call happens in background (Redux Thunk)
       └── POST /api/cart
```

#### Example: User Login

```
1. User Action:
   LoginForm
   └── Submit form
       └── Calls: handleLogin(email, password)

2. Redux Action:
   ├── Dispatch: loginStart()
   ├── Call: authService.login(email, password)
   ├── Receive: { user, token }
   ├── Dispatch: loginSuccess({ user, token })
   └── Store token in localStorage

3. Redux State Updates:
   ├── auth.user: user object
   ├── auth.token: token string
   ├── auth.isAuthenticated: true
   └── auth.role: user.role

4. Components Re-render:
   ├── Header (shows user name, logout button)
   ├── Protected routes (allow access)
   └── LoginPage (redirects to home)

5. Cart Sync (if guest cart exists):
   └── Merge localStorage cart with backend cart
       └── Dispatch: syncCart(localStorageCart)
```

---

### Flow 3: Hybrid Flow (Cart - Guest → Logged In)

#### Guest User Adds to Cart:

```
1. User Action (Not logged in):
   ProductCard
   └── Click "Add to Cart"

2. Local Storage:
   ├── Read: localStorage.getItem('cart')
   ├── Update: Add item to cart array
   └── Write: localStorage.setItem('cart', updatedCart)

3. Local State (if using):
   └── Update local cart state (not Redux)

4. Components:
   └── CartIcon reads from localStorage (or local state)
```

#### User Logs In:

```
1. Login Success:
   └── Redux: loginSuccess({ user, token })

2. Cart Merge:
   ├── Read: localStorage.getItem('cart') → guestCart
   ├── Fetch: cartService.getCart() → userCart
   ├── Merge: Combine guestCart + userCart
   ├── Sync: cartService.syncCart(mergedCart)
   └── Clear: localStorage.removeItem('cart')

3. Redux State:
   └── Dispatch: setCart(mergedCart)

4. Components:
   └── Cart now uses Redux state (not localStorage)
```

---

### Data Flow Summary Table

| Data Type | Source | Store | Flow Direction | Update Trigger |
|-----------|--------|-------|----------------|----------------|
| Products | API | React Query Cache | API → React Query → Components | User action (filter, search) |
| Categories | API | React Query Cache | API → React Query → Components | On mount, cache invalidation |
| User Auth | API → Redux | Redux Store | UI → Redux → API → Redux → Components | Login/logout actions |
| Cart (logged in) | API → Redux | Redux Store | UI → Redux → API → Redux → Components | Add/remove/update actions |
| Cart (guest) | LocalStorage | LocalStorage | UI → LocalStorage → Components | Add/remove actions |
| Orders | API | React Query Cache | API → React Query → Components | Fetch on mount, refetch on status change |
| Admin Products | API | React Query Cache | API → React Query → Components | CRUD operations with cache invalidation |

---

## TYPE DEFINITIONS STRUCTURE

### Type Files Organization

```
types/
├── index.ts                 # Re-export all types
├── product.types.ts         # Product, Category types
├── order.types.ts           # Order, OrderItem types
├── user.types.ts            # User, Auth types
├── cart.types.ts            # CartItem type
└── api.types.ts             # API request/response types
```

### Key Types (Examples - not code, just structure)

**product.types.ts:**
- `Product` - id, name, description, price, categoryId, stockQuantity, imageUrl, isActive, timestamps
- `Category` - id, name, slug, imageUrl, isActive, timestamps
- `ProductFilters` - categoryId, search, page, limit

**cart.types.ts:**
- `CartItem` - id, productId, product (Product), quantity
- `Cart` - items (CartItem[]), total, itemCount

**order.types.ts:**
- `Order` - id, userId, totalAmount, deliveryAddress, status, paymentMethod, paymentStatus, timestamps
- `OrderItem` - id, orderId, productId, quantity, priceAtOrderTime
- `OrderStatus` - enum: 'pending' | 'confirmed' | 'preparing' | 'out_for_delivery' | 'delivered' | 'cancelled'

**user.types.ts:**
- `User` - id, email, name, phone, role, defaultAddress, timestamps
- `AuthState` - user, token, isAuthenticated, role
- `LoginCredentials` - email, password
- `SignupData` - email, password, name, phone, address

**api.types.ts:**
- `ApiResponse<T>` - success, data, message
- `ApiError` - message, code, errors
- `PaginationMeta` - page, limit, total, totalPages

---

## NEXT STEPS

1. **Install Missing Dependencies:**
   - `@tanstack/react-query`
   - `react-router-dom`
   - `axios` (or use fetch)

2. **Create Folder Structure:**
   - Create all folders as defined above
   - Set up basic files (store, router, queryClient)

3. **Set Up Type Definitions:**
   - Create type files
   - Define all TypeScript interfaces

4. **Create Shared Components:**
   - Start with UI primitives (Button, Input, Modal)
   - Then layout components (Header, Footer, Layout)

5. **Set Up Routing:**
   - Configure React Router
   - Add route guards (auth, admin)

6. **Implement State Management:**
   - Set up Redux slices (auth, cart, ui)
   - Configure React Query client
   - Create API service layer

---

**Key Takeaways:**
- Feature-based folder structure for scalability
- Shared components in `components/` for reusability
- React Query for server state (products, orders, categories)
- Redux for client state (auth, cart, UI)
- Memoize expensive list components (ProductCard, CartItem)
- Use useMemo/useCallback strategically for performance
- Clear separation of concerns (pages → features → components → services)

