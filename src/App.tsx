import React, { useState, useEffect } from 'react';
import { Product, CartItem, CustomizationState } from './types';
import { FEATURED_PRODUCTS } from './data/mockData';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { CategoryPage } from './pages/CategoryPage';
import { BulkQuotePage } from './pages/BulkQuotePage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { BlogPage } from './pages/BlogPage';
import { ProductCustomizerModal } from './components/ProductCustomizerModal';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { AccountModal } from './components/AccountModal';
import { TrackOrderModal } from './components/TrackOrderModal';
import { MobileBottomNav } from './components/MobileBottomNav';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  // Navigation Router State
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [categoryParam, setCategoryParam] = useState<string>('mugs');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // E-commerce state
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [addedProductId, setAddedProductId] = useState<string | null>(null);

  // Modals state
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);
  const [customizingProduct, setCustomizingProduct] = useState<Product | null>(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isAccountModalOpen, setIsAccountModalOpen] = useState(false);
  const [isTrackOrderOpen, setIsTrackOrderOpen] = useState(false);

  // Scroll to top and update document title for SEO when page changes
  const handleNavigatePage = (page: string, param?: string) => {
    setCurrentPage(page);
    if (param) {
      setCategoryParam(param);
      setSelectedCategory(param);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // SEO Dynamic Titles
    const titleMap: Record<string, string> = {
      home: 'Printify.pk | Custom Printing, Personalized Gifts & Corporate Giveaways Pakistan',
      shop: 'All Products Catalog | Custom Printed Mugs, T-Shirts & Keychains - Printify.pk',
      category: `Custom ${param ? param.toUpperCase() : 'Items'} Printing | Printify.pk Pakistan`,
      'bulk-quote': 'Bulk & Corporate Wholesale Printing Quotations | Printify.pk',
      about: 'About Us & Printing Factory Lahore | Printify.pk',
      contact: 'Contact Customer Support & Offices | Printify.pk',
      blog: 'Custom Printing Guides & Gifting Articles | Printify.pk Blog',
    };

    if (titleMap[page]) {
      document.title = titleMap[page];
    }
  };

  // Quick Add to Cart
  const handleQuickAddToCart = (product: Product) => {
    const cartId = `${product.id}-${Date.now()}`;
    const customization: CustomizationState = {
      productId: product.id,
      productName: product.name,
      basePrice: product.price,
      selectedColor: product.availableColors[0] || '#FFFFFF',
      customText: 'Custom Print',
      textColor: '#0B192C',
      fontFamily: 'sans-serif',
      textSize: 18,
      textPosition: { x: 50, y: 50 },
      uploadedLogoUrl: null,
      specialInstructions: '',
      quantity: 1,
      side: 'front',
    };

    const newItem: CartItem = {
      cartId,
      product,
      customization,
      unitPrice: product.price,
      quantity: 1,
      totalPrice: product.price,
    };

    setCartItems((prev) => [...prev, newItem]);
    setAddedProductId(product.id);
    setTimeout(() => setAddedProductId(null), 2000);
  };

  // Add Customized Item from Live Studio Modal
  const handleAddCustomizedToCart = (item: { product: Product; customization: CustomizationState; totalPrice: number }) => {
    const cartId = `${item.product.id}-${Date.now()}`;
    const newItem: CartItem = {
      cartId,
      product: item.product,
      customization: item.customization,
      unitPrice: item.totalPrice / item.customization.quantity,
      quantity: item.customization.quantity,
      totalPrice: item.totalPrice,
    };

    setCartItems((prev) => [...prev, newItem]);
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (cartId: string, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveCartItem(cartId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.cartId === cartId) {
          const unit = item.unitPrice;
          return {
            ...item,
            quantity: newQty,
            totalPrice: unit * newQty,
          };
        }
        return item;
      })
    );
  };

  const handleRemoveCartItem = (cartId: string) => {
    setCartItems((prev) => prev.filter((i) => i.cartId !== cartId));
  };

  const handleOpenCustomizer = (productCategory?: string) => {
    if (productCategory) {
      const match = FEATURED_PRODUCTS.find((p) => p.category === productCategory) || FEATURED_PRODUCTS[0];
      setCustomizingProduct(match);
    } else {
      setCustomizingProduct(FEATURED_PRODUCTS[0]);
    }
    setIsCustomizerOpen(true);
  };

  const handleOpenCustomizerWithProduct = (product: Product) => {
    setCustomizingProduct(product);
    setIsCustomizerOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-amber-300 selection:text-slate-900 flex flex-col justify-between pb-16 md:pb-0">
      
      {/* Header Navigation */}
      <Header
        cartItems={cartItems}
        currentPage={currentPage}
        onNavigatePage={handleNavigatePage}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenCustomizer={() => handleOpenCustomizer()}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onOpenAccountModal={() => setIsAccountModalOpen(true)}
        onOpenTrackOrderModal={() => setIsTrackOrderOpen(true)}
      />

      {/* Main Page Content Router */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            products={FEATURED_PRODUCTS}
            selectedCategory={selectedCategory}
            onSelectCategory={(catId) => setSelectedCategory(catId)}
            onAddToCart={handleQuickAddToCart}
            onLaunchCustomizerWithProduct={handleOpenCustomizerWithProduct}
            onLaunchCustomizer={handleOpenCustomizer}
            onNavigatePage={handleNavigatePage}
            addedProductId={addedProductId}
          />
        )}

        {currentPage === 'shop' && (
          <ShopPage
            products={FEATURED_PRODUCTS}
            initialCategory={selectedCategory}
            onAddToCart={handleQuickAddToCart}
            onLaunchCustomizerWithProduct={handleOpenCustomizerWithProduct}
            onNavigatePage={handleNavigatePage}
            addedProductId={addedProductId}
          />
        )}

        {currentPage === 'category' && (
          <CategoryPage
            categorySlug={categoryParam}
            products={FEATURED_PRODUCTS}
            onAddToCart={handleQuickAddToCart}
            onLaunchCustomizerWithProduct={handleOpenCustomizerWithProduct}
            onNavigatePage={handleNavigatePage}
            addedProductId={addedProductId}
          />
        )}

        {currentPage === 'bulk-quote' && (
          <BulkQuotePage onNavigatePage={handleNavigatePage} />
        )}

        {currentPage === 'about' && (
          <AboutPage onNavigatePage={handleNavigatePage} />
        )}

        {currentPage === 'contact' && (
          <ContactPage onNavigatePage={handleNavigatePage} />
        )}

        {currentPage === 'blog' && (
          <BlogPage onNavigatePage={handleNavigatePage} />
        )}
      </main>

      {/* Footer Navigation */}
      <Footer
        onNavigatePage={handleNavigatePage}
        onOpenTrackOrderModal={() => setIsTrackOrderOpen(true)}
      />

      {/* Mobile Floating Navigation Bar */}
      <MobileBottomNav
        cartItems={cartItems}
        currentPage={currentPage}
        onNavigatePage={handleNavigatePage}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenCustomizer={() => handleOpenCustomizer()}
        onOpenTrackOrder={() => setIsTrackOrderOpen(true)}
      />

      {/* Floating WhatsApp Live Chat Widget */}
      <FloatingWhatsApp />

      {/* Modals & Slide-over Drawers */}
      <ProductCustomizerModal
        isOpen={isCustomizerOpen}
        onClose={() => setIsCustomizerOpen(false)}
        product={customizingProduct}
        onAddToCart={handleAddCustomizedToCart}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveCartItem}
        onProceedToCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cartItems={cartItems}
        onOrderSuccess={() => {
          setCartItems([]);
        }}
      />

      <AccountModal
        isOpen={isAccountModalOpen}
        onClose={() => setIsAccountModalOpen(false)}
      />

      <TrackOrderModal
        isOpen={isTrackOrderOpen}
        onClose={() => setIsTrackOrderOpen(false)}
      />

    </div>
  );
}
