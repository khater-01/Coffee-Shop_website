/* ═══════════════════════════════════════════
   BRUNÉE — Interactive Menu & Cart System
   ═══════════════════════════════════════════ */

// ── Full Menu Data from Brunée PDF ──
const MENU = {
  hot: [
    { name: 'Espresso', price: 80 },
    { name: 'Double Espresso', price: 95 },
    { name: 'Americano', price: 95 },
    { name: 'Cortado', price: 105 },
    { name: 'Cappuccino', price: 115 },
    { name: 'Flat White', price: 120 },
    { name: 'Latte', price: 125 },
    { name: 'Spanish Latte', price: 130 },
    { name: 'Caramel Macchiato', price: 120 },
    { name: 'Mocha', price: 120 },
    { name: 'White Mocha', price: 135 },
    { name: 'Salted Caramel', price: 120 },
    { name: 'Hot Chocolate', price: 155 },
  ],
  iced: [
    { name: 'Iced Coffee', price: 120 },
    { name: 'Iced Spanish Latte', price: 130 },
    { name: 'Iced Pistachio Latte', price: 140 },
    { name: 'Iced Caramel Macchiato', price: 120 },
    { name: 'Iced Mocha', price: 120 },
    { name: 'Iced White Mocha', price: 135 },
    { name: 'Iced Salted Caramel', price: 120 },
  ],
  frappe: [
    { name: 'Vanilla Frappe', price: 110 },
    { name: 'Caramel Frappe', price: 120 },
    { name: 'Salted Caramel Frappe', price: 120 },
    { name: 'Blueberry Frappe', price: 120 },
    { name: 'Chocolate Frappe', price: 130 },
    { name: 'White Mocha Frappe', price: 130 },
  ],
  matcha: [
    { name: 'Hot Matcha Latte', price: 135 },
    { name: 'Iced Matcha Latte', price: 135 },
    { name: 'Matcha Frappe', price: 135 },
  ],
  milkshake: [
    { name: 'Vanilla Milkshake', price: 105 },
    { name: 'Caramel Milkshake', price: 110 },
    { name: 'Mango Milkshake', price: 115 },
    { name: 'Strawberry Milkshake', price: 115 },
    { name: 'Blueberry Milkshake', price: 115 },
    { name: 'Lotus Milkshake', price: 120 },
    { name: 'Oreo Milkshake', price: 120 },
    { name: 'Coffee Milkshake', price: 120 },
  ],
  smoothie: [
    { name: 'Passion Fruit Smoothie', price: 95 },
    { name: 'Strawberry Smoothie', price: 95 },
    { name: 'Blueberry Smoothie', price: 95 },
  ],
  mojito: [
    { name: 'Classic Mojito', price: 95 },
    { name: 'Honey Lemon Mojito', price: 100 },
    { name: 'Passion Fruit Mojito', price: 110 },
    { name: 'Strawberry Mojito', price: 110 },
    { name: 'Blueberry Mojito', price: 110 },
    { name: 'Coconut Mojito', price: 110 },
  ],
  bakery: [
    { name: 'Plain Croissant', price: 75 },
    { name: 'Apple Pie', price: 100 },
    { name: 'Pain au Suisse (Chocolate Nutella)', price: 115 },
    { name: 'Pain au Suisse (Dark Chocolate)', price: 120 },
    { name: 'Crème Brûlée Danish', price: 120 },
    { name: 'Mixed Berries Long', price: 125 },
  ],
  pastry: [
    { name: 'Chocolate Brownie', price: 85 },
    { name: 'Cookies (3 pcs)', price: 75 },
    { name: 'Cinnamon Roll', price: 95 },
    { name: 'Banana Bread', price: 85 },
    { name: 'Matilda Croissant', price: 130 },
    { name: 'Lotus Cheesecake', price: 140 },
  ],
  savory: [
    { name: 'Turkey Focaccia', price: 125, desc: 'Turkey, Honey Mustard, OakLeaf Lettuce' },
    { name: 'Roast Beef Focaccia', price: 140, desc: 'Roast Beef, White Cheddar, Lettuce, Onion BBQ' },
    { name: 'Chicken Pesto Panini', price: 130, desc: 'Grilled Chicken, Pesto, Mozzarella' },
  ],
  drinks: [
    { name: 'Water', price: 15 },
    { name: 'Red Bull', price: 90 },
    { name: 'Pepsi', price: 35 },
    { name: 'Fresh Orange Juice', price: 85 },
    { name: 'Lemonade', price: 75 },
  ],
};

// Professional SVG icons for each menu category
const ICONS = {
  hot: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><line x1="6" y1="2" x2="6" y2="4"/><line x1="10" y1="2" x2="10" y2="4"/><line x1="14" y1="2" x2="14" y2="4"/></svg>`,
  iced: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2l1.5 18h5L16 2"/><path d="M7 6h10"/><path d="M9 10h6"/><line x1="12" y1="2" x2="12" y2="6"/><circle cx="12" cy="14" r="1.5" fill="currentColor" stroke="none" opacity=".4"/></svg>`,
  frappe: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3l1 17h6l1-17"/><path d="M7 7h10"/><path d="M12 1v2"/><path d="M9 1h6"/><circle cx="10.5" cy="12" r="1" fill="currentColor" stroke="none" opacity=".3"/><circle cx="13.5" cy="14" r="1" fill="currentColor" stroke="none" opacity=".3"/><circle cx="11" cy="16" r=".8" fill="currentColor" stroke="none" opacity=".3"/></svg>`,
  matcha: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3c-4.97 0-9 2.69-9 6v1c0 3.31 4.03 6 9 6s9-2.69 9-6V9c0-3.31-4.03-6-9-6z"/><path d="M3 9c0 3.31 4.03 6 9 6s9-2.69 9-6"/><path d="M7 19l-2 3"/><path d="M17 19l2 3"/></svg>`,
  milkshake: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6l1 14h6l1-14"/><ellipse cx="12" cy="6" rx="5" ry="2"/><path d="M7 6c0-2.5 2.24-4 5-4s5 1.5 5 4"/><line x1="12" y1="2" x2="18" y2="1"/></svg>`,
  smoothie: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 4l1.5 16h5L16 4"/><path d="M6 4h12"/><line x1="14" y1="1" x2="12" y2="4"/><circle cx="11" cy="10" r="1.5" fill="currentColor" stroke="none" opacity=".3"/><circle cx="13" cy="13" r="1.2" fill="currentColor" stroke="none" opacity=".3"/></svg>`,
  mojito: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 4l1 16h6l1-16"/><path d="M7 4h10"/><line x1="15" y1="1" x2="13" y2="4"/><path d="M10 7c1-1 3-1 4 0"/><path d="M9 9c.5 1 2.5 2 4 .5"/><circle cx="11" cy="14" r=".8" fill="currentColor" stroke="none" opacity=".4"/><circle cx="13" cy="16" r=".8" fill="currentColor" stroke="none" opacity=".4"/></svg>`,
  bakery: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5C3 15 3 12 5 10c1.5-1.5 4-2 6-1"/><path d="M19.5 16.5C21 15 21 12 19 10c-1.5-1.5-4-2-6-1"/><path d="M12 9c-1-3 1-6 1-6s3 2 2 6"/><ellipse cx="12" cy="18" rx="8" ry="3"/></svg>`,
  pastry: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 20h18"/><path d="M5 20v-4a7 7 0 0 1 14 0v4"/><path d="M8 12a4 4 0 0 1 8 0"/><circle cx="12" cy="9" r="1" fill="currentColor" stroke="none" opacity=".4"/><circle cx="10" cy="11" r=".7" fill="currentColor" stroke="none" opacity=".3"/><circle cx="14" cy="11" r=".7" fill="currentColor" stroke="none" opacity=".3"/></svg>`,
  savory: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 11h16"/><path d="M4 13h16"/><path d="M3 11c0-3 4-5 9-5s9 2 9 5"/><path d="M3 13c0 3 4 5 9 5s9-2 9-5"/><path d="M6 11V9"/><path d="M18 11V9"/></svg>`,
  drinks: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2h8l-1 18H9L8 2z"/><path d="M7 6h10"/><path d="M9 10h6"/><circle cx="12" cy="14" r="1.5" fill="currentColor" stroke="none" opacity=".2"/></svg>`,
};

// ── Cart State ──
let cart = [];

// ── DOM References ──
const menuGrid = document.getElementById('menuGrid');
const menuTabs = document.getElementById('menuTabs');
const cartDrawer = document.getElementById('cartDrawer');
const cartOverlay = document.getElementById('cartOverlay');
const cartItems = document.getElementById('cartItems');
const cartEmpty = document.getElementById('cartEmpty');
const cartFooter = document.getElementById('cartFooter');
const cartTotal = document.getElementById('cartTotal');
const cartBadge = document.getElementById('cartBadge');
const toast = document.getElementById('toast');
const toastText = document.getElementById('toastText');

// ══════════════ MENU RENDERING ══════════════
function renderMenu(category) {
  const items = MENU[category];
  if (!items) return;
  const icon = ICONS[category] || '☕';

  menuGrid.style.opacity = '0';
  menuGrid.style.transform = 'translateY(12px)';

  setTimeout(() => {
    menuGrid.innerHTML = items.map((item, i) => `
      <div class="menu-item fade-up" style="animation-delay:${i * 40}ms" data-name="${item.name}" data-price="${item.price}">
        <div class="menu-item-left">
          <div class="menu-item-icon">${icon}</div>
          <div>
            <div class="menu-item-name">${item.name}</div>
            ${item.desc ? `<div class="menu-item-desc">${item.desc}</div>` : ''}
          </div>
        </div>
        <div class="menu-item-right">
          <span class="menu-item-price">${item.price} EGP</span>
          <button class="btn-add" aria-label="Add ${item.name}">+</button>
        </div>
      </div>
    `).join('');

    menuGrid.style.opacity = '1';
    menuGrid.style.transform = 'translateY(0)';

    // Re-observe fade-ups
    menuGrid.querySelectorAll('.fade-up').forEach(el => {
      el.classList.add('visible');
    });

    // Attach add-to-cart events
    menuGrid.querySelectorAll('.menu-item').forEach(item => {
      const addBtn = item.querySelector('.btn-add');
      const addHandler = (e) => {
        e.stopPropagation();
        addToCart(item.dataset.name, parseInt(item.dataset.price));
        addBtn.classList.remove('added');
        void addBtn.offsetWidth;
        addBtn.classList.add('added');
      };
      addBtn.addEventListener('click', addHandler);
      item.addEventListener('click', addHandler);
    });
  }, 200);
}

// ── Tab switching ──
menuTabs.addEventListener('click', e => {
  if (e.target.tagName !== 'BUTTON') return;
  menuTabs.querySelectorAll('button').forEach(b => b.classList.remove('active'));
  e.target.classList.add('active');
  renderMenu(e.target.dataset.cat);
});

// Initial render
renderMenu('hot');

// ══════════════ CART SYSTEM ══════════════
function addToCart(name, price) {
  const existing = cart.find(item => item.name === name);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ name, price, qty: 1 });
  }
  updateCartUI();
  showToast(`${name} added!`);
}

function removeFromCart(name) {
  cart = cart.filter(item => item.name !== name);
  updateCartUI();
}

function updateQty(name, delta) {
  const item = cart.find(i => i.name === name);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(name);
    return;
  }
  updateCartUI();
}

function updateCartUI() {
  const totalItems = cart.reduce((s, i) => s + i.qty, 0);
  const totalPrice = cart.reduce((s, i) => s + i.price * i.qty, 0);

  // Badge
  cartBadge.textContent = totalItems;
  cartBadge.classList.remove('bounce');
  void cartBadge.offsetWidth;
  cartBadge.classList.add('bounce');

  if (cart.length === 0) {
    cartEmpty.style.display = 'block';
    cartFooter.style.display = 'none';
    // Clear cart items except empty message
    const existingItems = cartItems.querySelectorAll('.cart-item');
    existingItems.forEach(el => el.remove());
  } else {
    cartEmpty.style.display = 'none';
    cartFooter.style.display = 'block';
    cartTotal.textContent = totalPrice + ' EGP';

    // Rebuild items
    const existingItems = cartItems.querySelectorAll('.cart-item');
    existingItems.forEach(el => el.remove());

    cart.forEach(item => {
      const div = document.createElement('div');
      div.className = 'cart-item';
      div.innerHTML = `
        <div class="cart-item-info">
          <h4>${item.name}</h4>
          <span class="cart-item-price">${item.price} EGP each</span>
        </div>
        <div class="cart-qty">
          <button class="qty-minus" data-name="${item.name}">−</button>
          <span>${item.qty}</span>
          <button class="qty-plus" data-name="${item.name}">+</button>
        </div>
      `;
      cartItems.appendChild(div);
    });

    // Attach qty events
    cartItems.querySelectorAll('.qty-minus').forEach(btn => {
      btn.addEventListener('click', () => updateQty(btn.dataset.name, -1));
    });
    cartItems.querySelectorAll('.qty-plus').forEach(btn => {
      btn.addEventListener('click', () => updateQty(btn.dataset.name, 1));
    });
  }
}

// ── Cart open/close ──
document.getElementById('cartToggle').addEventListener('click', () => {
  cartDrawer.classList.add('open');
  cartOverlay.classList.add('open');
});
document.getElementById('cartClose').addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);
function closeCart() {
  cartDrawer.classList.remove('open');
  cartOverlay.classList.remove('open');
}

// ── Checkout ──
document.getElementById('btnCheckout').addEventListener('click', () => {
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  showToast(`Order placed! Total: ${total} EGP 🎉`);
  cart = [];
  updateCartUI();
  setTimeout(closeCart, 800);
});

// ══════════════ TOAST ══════════════
let toastTimeout;
function showToast(msg) {
  clearTimeout(toastTimeout);
  toastText.textContent = msg;
  toast.classList.add('show');
  toastTimeout = setTimeout(() => toast.classList.remove('show'), 2500);
}

// ══════════════ NAVBAR ══════════════
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// ── Mobile menu ──
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  const spans = hamburger.querySelectorAll('span');
  if (navLinks.classList.contains('open')) {
    spans[0].style.transform = 'rotate(45deg) translate(5px,5px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(5px,-5px)';
  } else {
    spans[0].style.transform = '';
    spans[1].style.opacity = '';
    spans[2].style.transform = '';
  }
});
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
  });
});

// ── Active section tracking ──
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 200) current = sec.getAttribute('id');
  });
  navLinks.querySelectorAll('a').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
});

// ── Fade-up observer ──
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
  });
}, { threshold: 0.15 });
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// ── Best sellers card add-to-cart ──
document.querySelectorAll('.btn-order').forEach(btn => {
  btn.addEventListener('click', () => {
    addToCart(btn.dataset.name, parseInt(btn.dataset.price));
  });
});

// ── Carousel arrows (visual bounce) ──
['prodPrev','prodNext','testPrev','testNext'].forEach(id => {
  const btn = document.getElementById(id);
  if (btn) btn.addEventListener('click', () => {
    btn.style.transform = 'translateY(-50%) scale(.92)';
    setTimeout(() => { btn.style.transform = ''; }, 150);
  });
});
