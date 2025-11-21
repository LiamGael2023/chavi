// Estado de la aplicación
const appState = {
    currentPage: 'home',
    cart: [],
    searchTerm: '',
    selectedCategory: 'Todos',
    currentBill: null,
    showPaymentForm: false,
    paymentSuccess: false
};

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

function initializeApp() {
    setupNavigation();
    setupCart();
    renderPage();
}

// ==================== NAVEGACIÓN ====================
function setupNavigation() {
    // Botones de navegación desktop
    const navButtons = document.querySelectorAll('.nav-btn:not(.mobile-nav-btn)');
    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const page = btn.dataset.page;
            navigateTo(page);
        });
    });

    // Botones de navegación mobile
    const mobileNavButtons = document.querySelectorAll('.mobile-nav-btn');
    mobileNavButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const page = btn.dataset.page;
            navigateTo(page);
            toggleMobileMenu();
        });
    });

    // Toggle menú móvil
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }
}

function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobileNav');
    if (mobileNav) {
        mobileNav.classList.toggle('show');
    }
}

function navigateTo(page) {
    appState.currentPage = page;

    // Actualizar botones activos
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.page === page) {
            btn.classList.add('active');
        }
    });

    // Scroll al inicio
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Renderizar página
    renderPage();
}

// ==================== RENDERIZADO DE PÁGINAS ====================
function renderPage() {
    const mainContent = document.getElementById('mainContent');

    switch(appState.currentPage) {
        case 'home':
            mainContent.innerHTML = renderHomePage();
            break;
        case 'shop':
            mainContent.innerHTML = renderShopPage();
            setupShopFilters();
            break;
        case 'bills':
            mainContent.innerHTML = renderBillsPage();
            setupBillsPage();
            break;
    }
}

// ==================== PÁGINA DE INICIO ====================
function renderHomePage() {
    return `
        <div class="hero-section">
            <div class="decorative-blob blob-1"></div>
            <div class="decorative-blob blob-2"></div>

            <div class="container">
                <h1 class="hero-title">Bienvenido a Chavi</h1>
                <p class="hero-description">
                    Tu plataforma todo-en-uno para compras online y pagos de servicios
                </p>
                <div class="hero-buttons">
                    <button class="btn btn-primary" onclick="navigateTo('shop')">
                        <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                            <line x1="3" y1="6" x2="21" y2="6"/>
                            <path d="M16 10a4 4 0 0 1-8 0"/>
                        </svg>
                        Explorar Tienda
                        <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="9 18 15 12 9 6"/>
                        </svg>
                    </button>
                    <button class="btn btn-secondary" onclick="navigateTo('bills')">
                        <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
                        </svg>
                        Pagar Recibos
                        <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="9 18 15 12 9 6"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <div class="features-section">
            <div class="container">
                <h2 class="section-title">¿Por qué elegir Chavi?</h2>

                <div class="features-grid">
                    ${renderFeatureCard('store', 'Tienda Virtual', 'Amplio catálogo de productos tecnológicos de última generación con los mejores precios del mercado.', 'linear-gradient(to right, #22c55e, #eab308)')}
                    ${renderFeatureCard('droplet', 'Pago de Recibos', 'Paga tus recibos de agua de forma rápida y segura desde la comodidad de tu hogar.', 'linear-gradient(to right, #22c55e, #84cc16)')}
                    ${renderFeatureCard('shield', '100% Seguro', 'Todas tus transacciones están protegidas con tecnología de encriptación de última generación.', 'linear-gradient(to right, #16a34a, #15803d)')}
                    ${renderFeatureCard('zap', 'Procesamiento Rápido', 'Procesos optimizados para que completes tus compras y pagos en segundos.', 'linear-gradient(to right, #84cc16, #65a30d)')}
                    ${renderFeatureCard('credit-card', 'Múltiples Métodos de Pago', 'Acepta tarjetas de crédito, débito y transferencias bancarias.', 'linear-gradient(to right, #eab308, #f97316)')}
                    ${renderFeatureCard('trending-up', 'Ofertas Exclusivas', 'Accede a promociones y descuentos especiales para nuestros usuarios.', 'linear-gradient(to right, #a3e635, #22c55e)')}
                </div>
            </div>
        </div>

        <div class="container">
            <div class="glass-effect" style="border-radius: 1.5rem; padding: 3rem; text-align: center; max-width: 896px; margin: 5rem auto;">
                <h2 style="font-size: 2.5rem; font-weight: bold; color: white; margin-bottom: 1rem;">
                    ¿Listo para comenzar?
                </h2>
                <p style="font-size: 1.25rem; color: var(--gray-300); margin-bottom: 2rem;">
                    Únete a miles de usuarios que ya disfrutan de nuestros servicios
                </p>
                <button class="btn btn-primary" onclick="navigateTo('shop')">
                    Comenzar Ahora
                </button>
            </div>
        </div>
    `;
}

function renderFeatureCard(icon, title, description, gradient) {
    const icons = {
        'store': '<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>',
        'droplet': '<path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>',
        'shield': '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
        'zap': '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
        'credit-card': '<rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/>',
        'trending-up': '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>'
    };

    return `
        <div class="feature-card">
            <div class="feature-icon" style="background: ${gradient};">
                <svg width="32" height="32" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    ${icons[icon]}
                </svg>
            </div>
            <h3 class="feature-title">${title}</h3>
            <p class="feature-description">${description}</p>
        </div>
    `;
}

// ==================== PÁGINA DE TIENDA ====================
function renderShopPage() {
    const categories = ['Todos', ...new Set(products.map(p => p.category))];

    return `
        <div class="container">
            <div class="animate-fade-in">
                <h1 class="page-title">
                    Nuestra <span class="gradient-text">Tienda</span>
                </h1>
                <p class="page-subtitle">
                    Descubre los mejores productos tecnológicos
                </p>
            </div>

            <div class="shop-filters">
                <div class="search-container">
                    <svg class="search-icon" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="11" cy="11" r="8"/>
                        <path d="m21 21-4.35-4.35"/>
                    </svg>
                    <input
                        type="text"
                        class="search-input"
                        id="searchInput"
                        placeholder="Buscar productos..."
                        value="${appState.searchTerm}"
                    />
                </div>

                <div class="category-filters">
                    <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
                        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
                    </svg>
                    ${categories.map(cat => `
                        <button
                            class="category-btn ${appState.selectedCategory === cat ? 'active' : ''}"
                            data-category="${cat}"
                        >
                            ${cat}
                        </button>
                    `).join('')}
                </div>
            </div>

            <div id="productsContainer">
                ${renderProducts()}
            </div>
        </div>
    `;
}

function renderProducts() {
    const filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(appState.searchTerm.toLowerCase()) ||
                            product.description.toLowerCase().includes(appState.searchTerm.toLowerCase());
        const matchesCategory = appState.selectedCategory === 'Todos' || product.category === appState.selectedCategory;
        return matchesSearch && matchesCategory;
    });

    if (filteredProducts.length === 0) {
        return `
            <div class="no-products">
                <div class="no-products-icon">No se encontraron productos</div>
                <p>Intenta con otros términos de búsqueda</p>
            </div>
        `;
    }

    return `
        <div class="products-grid">
            ${filteredProducts.map(product => renderProductCard(product)).join('')}
        </div>
        <div class="products-count">
            Mostrando ${filteredProducts.length} de ${products.length} productos
        </div>
    `;
}

function renderProductCard(product) {
    return `
        <div class="product-card">
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}" class="product-image" />
                <div class="product-stock">
                    <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                    </svg>
                    ${product.stock} disponibles
                </div>
            </div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-footer">
                    <div class="product-price">$${product.price.toFixed(2)}</div>
                    <button
                        class="add-to-cart-btn"
                        onclick="addToCart(${product.id})"
                        ${product.stock === 0 ? 'disabled' : ''}
                    >
                        <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="9" cy="21" r="1"/>
                            <circle cx="20" cy="21" r="1"/>
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                        </svg>
                        Agregar
                    </button>
                </div>
            </div>
        </div>
    `;
}

function setupShopFilters() {
    // Búsqueda
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            appState.searchTerm = e.target.value;
            updateProducts();
        });
    }

    // Categorías
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            appState.selectedCategory = btn.dataset.category;
            categoryButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            updateProducts();
        });
    });
}

function updateProducts() {
    const container = document.getElementById('productsContainer');
    if (container) {
        container.innerHTML = renderProducts();
    }
}

// ==================== PÁGINA DE RECIBOS ====================
function renderBillsPage() {
    return `
        <div class="container">
            <div class="bills-header">
                <div class="bills-icon">
                    <svg width="40" height="40" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
                    </svg>
                </div>
                <h1 class="page-title">
                    Pago de <span class="gradient-text">Recibos de Agua</span>
                </h1>
                <p class="page-subtitle">
                    Consulta y paga tu recibo de agua de forma rápida y segura
                </p>
            </div>

            <div class="bill-search-card">
                <h2 class="bill-search-title">
                    <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="11" cy="11" r="8"/>
                        <path d="m21 21-4.35-4.35"/>
                    </svg>
                    Consultar Recibo
                </h2>
                <form class="bill-search-form" id="billSearchForm">
                    <input
                        type="text"
                        class="bill-input"
                        id="accountNumberInput"
                        placeholder="Ingresa tu número de cuenta"
                        required
                    />
                    <button type="submit" class="bill-search-btn" id="searchBillBtn">
                        <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="11" cy="11" r="8"/>
                            <path d="m21 21-4.35-4.35"/>
                        </svg>
                        Buscar
                    </button>
                </form>
                <div class="bill-examples">
                    <p>Cuentas de ejemplo para probar:</p>
                    <div class="example-accounts">
                        <button class="example-btn" onclick="fillAccountNumber('123456')">123456</button>
                        <button class="example-btn" onclick="fillAccountNumber('789012')">789012</button>
                    </div>
                </div>
            </div>

            <div id="billResultContainer"></div>
        </div>
    `;
}

function setupBillsPage() {
    const form = document.getElementById('billSearchForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            searchBill();
        });
    }
}

function fillAccountNumber(number) {
    const input = document.getElementById('accountNumberInput');
    if (input) {
        input.value = number;
    }
}

function searchBill() {
    const input = document.getElementById('accountNumberInput');
    const accountNumber = input.value.trim();
    const btn = document.getElementById('searchBillBtn');

    if (!accountNumber) return;

    // Simular búsqueda
    btn.disabled = true;
    btn.innerHTML = `
        <span class="spinner"></span>
        Buscando...
    `;

    setTimeout(() => {
        const bill = mockBills[accountNumber];
        appState.currentBill = bill || null;
        appState.showPaymentForm = false;
        appState.paymentSuccess = false;

        const container = document.getElementById('billResultContainer');
        if (container) {
            if (bill) {
                container.innerHTML = renderBillDetails(bill);
            } else {
                container.innerHTML = renderBillNotFound(accountNumber);
            }
        }

        btn.disabled = false;
        btn.innerHTML = `
            <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.35-4.35"/>
            </svg>
            Buscar
        `;
    }, 1000);
}

function renderBillDetails(bill) {
    if (appState.paymentSuccess) {
        return `
            <div class="success-card">
                <div class="success-icon">
                    <svg width="40" height="40" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="20 6 9 17 4 12"/>
                    </svg>
                </div>
                <h3 class="success-title">¡Pago Exitoso!</h3>
                <p class="success-message">Tu recibo de agua ha sido pagado correctamente</p>
                <div class="success-amount">
                    <p>Monto pagado: $${bill.amount.toFixed(2)}</p>
                </div>
            </div>
        `;
    }

    return `
        <div class="bill-details-card">
            <h2 class="bill-details-title">Detalles del Recibo</h2>

            <div>
                <div class="bill-detail-row">
                    <span class="bill-detail-label">Cliente:</span>
                    <span class="bill-detail-value">${bill.clientName}</span>
                </div>
                <div class="bill-detail-row">
                    <span class="bill-detail-label">Dirección:</span>
                    <span class="bill-detail-value">${bill.address}</span>
                </div>
                <div class="bill-detail-row">
                    <span class="bill-detail-label">Período:</span>
                    <span class="bill-detail-value">${bill.period}</span>
                </div>
                <div class="bill-detail-row">
                    <span class="bill-detail-label">Consumo:</span>
                    <span class="bill-detail-value">${bill.consumption} m³</span>
                </div>
                <div class="bill-detail-row">
                    <span class="bill-detail-label">
                        <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                            <line x1="16" y1="2" x2="16" y2="6"/>
                            <line x1="8" y1="2" x2="8" y2="6"/>
                            <line x1="3" y1="10" x2="21" y2="10"/>
                        </svg>
                        Fecha de vencimiento:
                    </span>
                    <span class="bill-detail-value">${bill.dueDate}</span>
                </div>
                <div class="bill-total">
                    <span class="bill-total-label">
                        <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="12" y1="1" x2="12" y2="23"/>
                            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                        </svg>
                        Total a pagar:
                    </span>
                    <span class="bill-total-amount">$${bill.amount.toFixed(2)}</span>
                </div>
            </div>

            ${appState.showPaymentForm ? renderPaymentForm(bill) : `
                <button class="proceed-payment-btn" onclick="showPaymentForm()">
                    <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
                        <line x1="1" y1="10" x2="23" y2="10"/>
                    </svg>
                    Proceder al Pago
                </button>
            `}
        </div>
    `;
}

function renderPaymentForm(bill) {
    return `
        <form class="payment-form" id="paymentForm">
            <h3 class="payment-form-title">
                <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
                    <line x1="1" y1="10" x2="23" y2="10"/>
                </svg>
                Información de Pago
            </h3>

            <div class="form-group">
                <label class="form-label">Número de tarjeta</label>
                <input
                    type="text"
                    class="form-input"
                    placeholder="1234 5678 9012 3456"
                    maxlength="19"
                    required
                />
            </div>

            <div class="form-group">
                <label class="form-label">Nombre en la tarjeta</label>
                <input
                    type="text"
                    class="form-input"
                    placeholder="NOMBRE APELLIDO"
                    required
                />
            </div>

            <div class="form-row">
                <div class="form-group">
                    <label class="form-label">Fecha de expiración</label>
                    <input
                        type="text"
                        class="form-input"
                        placeholder="MM/AA"
                        maxlength="5"
                        required
                    />
                </div>
                <div class="form-group">
                    <label class="form-label">CVV</label>
                    <input
                        type="text"
                        class="form-input"
                        placeholder="123"
                        maxlength="3"
                        required
                    />
                </div>
            </div>

            <div class="form-actions">
                <button type="button" class="cancel-btn" onclick="hidePaymentForm()">
                    Cancelar
                </button>
                <button type="submit" class="pay-btn">
                    Pagar $${bill.amount.toFixed(2)}
                </button>
            </div>
        </form>
    `;
}

function renderBillNotFound(accountNumber) {
    return `
        <div class="error-card">
            <svg class="error-icon" width="64" height="64" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="8" x2="12" y2="12"/>
                <line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
            <h3 class="error-title">Recibo no encontrado</h3>
            <p class="error-message">
                No se encontró un recibo con el número de cuenta:
                <span class="error-account">${accountNumber}</span>
            </p>
            <p class="error-subtitle">Verifica el número e intenta nuevamente</p>
        </div>
    `;
}

function showPaymentForm() {
    appState.showPaymentForm = true;
    const container = document.getElementById('billResultContainer');
    if (container && appState.currentBill) {
        container.innerHTML = renderBillDetails(appState.currentBill);

        const form = document.getElementById('paymentForm');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                processPayment();
            });
        }
    }
}

function hidePaymentForm() {
    appState.showPaymentForm = false;
    const container = document.getElementById('billResultContainer');
    if (container && appState.currentBill) {
        container.innerHTML = renderBillDetails(appState.currentBill);
    }
}

function processPayment() {
    appState.paymentSuccess = true;
    const container = document.getElementById('billResultContainer');
    if (container && appState.currentBill) {
        container.innerHTML = renderBillDetails(appState.currentBill);
    }

    // Reset después de 3 segundos
    setTimeout(() => {
        appState.currentBill = null;
        appState.showPaymentForm = false;
        appState.paymentSuccess = false;
        document.getElementById('accountNumberInput').value = '';
        const container = document.getElementById('billResultContainer');
        if (container) {
            container.innerHTML = '';
        }
    }, 3000);
}

// ==================== CARRITO ====================
function setupCart() {
    const cartBtn = document.getElementById('cartBtn');
    const closeCartBtn = document.getElementById('closeCartBtn');
    const cartOverlay = document.getElementById('cartOverlay');

    if (cartBtn) {
        cartBtn.addEventListener('click', openCart);
    }

    if (closeCartBtn) {
        closeCartBtn.addEventListener('click', closeCart);
    }

    if (cartOverlay) {
        cartOverlay.addEventListener('click', closeCart);
    }
}

function openCart() {
    const sidebar = document.getElementById('cartSidebar');
    const overlay = document.getElementById('cartOverlay');

    if (sidebar) sidebar.classList.add('show');
    if (overlay) overlay.classList.add('show');

    renderCart();
}

function closeCart() {
    const sidebar = document.getElementById('cartSidebar');
    const overlay = document.getElementById('cartOverlay');

    if (sidebar) sidebar.classList.remove('show');
    if (overlay) overlay.classList.remove('show');
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product || product.stock === 0) return;

    const existingItem = appState.cart.find(item => item.id === productId);

    if (existingItem) {
        if (existingItem.quantity < product.stock) {
            existingItem.quantity++;
        }
    } else {
        appState.cart.push({ ...product, quantity: 1 });
    }

    updateCartBadge();

    // Mostrar carrito brevemente
    openCart();
    setTimeout(() => {
        closeCart();
    }, 2000);
}

function updateCartQuantity(productId, quantity) {
    const item = appState.cart.find(item => item.id === productId);
    if (item) {
        item.quantity = Math.max(1, Math.min(quantity, item.stock));
        renderCart();
        updateCartBadge();
    }
}

function removeFromCart(productId) {
    appState.cart = appState.cart.filter(item => item.id !== productId);
    renderCart();
    updateCartBadge();
}

function updateCartBadge() {
    const badge = document.getElementById('cartBadge');
    const count = appState.cart.reduce((sum, item) => sum + item.quantity, 0);

    if (badge) {
        badge.textContent = count;
        if (count === 0) {
            badge.classList.add('hidden');
        } else {
            badge.classList.remove('hidden');
        }
    }
}

function renderCart() {
    const cartItemsContainer = document.getElementById('cartItems');
    const cartFooterContainer = document.getElementById('cartFooter');

    if (!cartItemsContainer || !cartFooterContainer) return;

    if (appState.cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="cart-empty">
                <svg width="64" height="64" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="9" cy="21" r="1"/>
                    <circle cx="20" cy="21" r="1"/>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                </svg>
                <p>Tu carrito está vacío</p>
                <p class="subtitle">Agrega productos para comenzar</p>
            </div>
        `;
        cartFooterContainer.innerHTML = '';
        return;
    }

    cartItemsContainer.innerHTML = appState.cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-content">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image" />
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                    <div class="cart-item-controls">
                        <button class="qty-btn" onclick="updateCartQuantity(${item.id}, ${item.quantity - 1})">
                            <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
                                <line x1="5" y1="12" x2="19" y2="12"/>
                            </svg>
                        </button>
                        <span class="qty-display">${item.quantity}</span>
                        <button class="qty-btn" onclick="updateCartQuantity(${item.id}, ${item.quantity + 1})">
                            <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
                                <line x1="12" y1="5" x2="12" y2="19"/>
                                <line x1="5" y1="12" x2="19" y2="12"/>
                            </svg>
                        </button>
                        <button class="remove-btn" onclick="removeFromCart(${item.id})">
                            <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
                                <polyline points="3 6 5 6 21 6"/>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div class="cart-item-subtotal">
                <span>Subtotal: </span>
                <span>$${(item.price * item.quantity).toFixed(2)}</span>
            </div>
        </div>
    `).join('');

    const total = appState.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    cartFooterContainer.innerHTML = `
        <div class="cart-total">
            <span>Total:</span>
            <span>$${total.toFixed(2)}</span>
        </div>
        <button class="checkout-btn">
            Proceder al Pago
        </button>
    `;
}

// Inicializar badge del carrito
updateCartBadge();
