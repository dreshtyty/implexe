/* ═══════════════════════════════════════════════════════════════════════════
   IMPLEXE DESIGN — LOGIQUE APPLICATION & INTERACTIONS
   "Le style au service de notre culture" — Brazzaville, Congo
   ═══════════════════════════════════════════════════════════════════════════ */

/* ─── Catalogue Officiel Implexe Design ────────────────────────────────── */
const products = [
  /* ── Sacs & Cabas ──────────────────────────────────────────────────────── */
  {
    id: "sac-tote-orange",
    name: "Sac cabas solaire",
    category: "sacs",
    categoryLabel: "Cabas Wax",
    price: 8000,
    priceLabel: "8 000 FCFA",
    image: "assets/IMG-20261102-WA0149.jpg",
    position: "center center",
    description: "Un grand cabas généreux mariant simili-cuir orange solaire et motifs géométriques wax kente. Doublure intérieure résistante, parfait pour les journées actives et le quotidien.",
    action: "add",
    tag: "En stock",
    gallery: ["assets/IMG-20261102-WA0149.jpg", "assets/IMG-20261102-WA0143.jpg"]
  },
  {
    id: "sac-voyage",
    name: "Sac de voyage weekend",
    category: "sacs",
    categoryLabel: "Voyage & Week-end",
    price: 15000,
    priceLabel: "15 000 FCFA",
    image: "assets/IMG-20261102-WA0143.jpg",
    position: "center 60%",
    description: "Sac de voyage spacieux en wax floral éclatant. Confection robuste, poignées doublées et tressées pour un transport confortable pendant vos escapades.",
    action: "add",
    tag: "Artisanat",
    gallery: ["assets/IMG-20261102-WA0143.jpg"]
  },
  {
    id: "sac-personnalise-prefina",
    name: "Sac personnalisé brodé",
    category: "sacs",
    categoryLabel: "Sur Mesure",
    price: 12000,
    priceLabel: "12 000 à 15 000 FCFA",
    image: "assets/IMG-20261102-WA0151.jpg",
    position: "center 35%",
    description: "Modèle signature avec bandeau contrasté et broderie personnalisée de votre prénom ou initiales. Composez vos couleurs et votre tissu wax favori.",
    action: "custom",
    tag: "À composer",
    gallery: ["assets/IMG-20261102-WA0151.jpg", "assets/IMG-20261102-WA0152.jpg"]
  },
  {
    id: "sac-cuir-pagne",
    name: "Sac chaîne cuir & wax",
    category: "sacs",
    categoryLabel: "Sac de Ville",
    price: 10000,
    priceLabel: "10 000 FCFA",
    image: "assets/IMG-20261102-WA0155.jpg",
    position: "center center",
    description: "Une silhouette moderne associant texture croco noire et pagne wax aux teintes chaudes. Chaîne en métal noir fumé pour un porté épaule glamour.",
    action: "add",
    tag: "Coup de cœur",
    gallery: ["assets/IMG-20261102-WA0155.jpg", "assets/IMG-20261102-WA0157.jpg"]
  },
  {
    id: "sac-tressage",
    name: "Panier artisanal wax",
    category: "sacs",
    categoryLabel: "Panier Cabas",
    price: 10000,
    priceLabel: "10 000 FCFA",
    image: "assets/IMG-20261102-WA0159.jpg",
    position: "center center",
    description: "Cabas texturé noir avec poche ventrale en pagne wax solaire et bordures effilochées façon raphia. Finitions soignées issues de notre atelier brazzavillois.",
    action: "add",
    tag: "Édition limitée",
    gallery: ["assets/IMG-20261102-WA0159.jpg"]
  },
  {
    id: "sac-africa",
    name: "Tote bag carte d'Afrique",
    category: "sacs",
    categoryLabel: "Tote Bag Luxe",
    price: 12000,
    priceLabel: "12 000 FCFA",
    image: "assets/IMG-20261102-WA0157.jpg",
    position: "center 40%",
    description: "Tote bag structuré en toile noire intense arborant la carte de l'Afrique en patchwork wax. Porté avec fierté par les femmes actives et élégantes.",
    action: "add",
    tag: "Best-seller",
    gallery: ["assets/IMG-20261102-WA0157.jpg"]
  },

  /* ── Pochettes ────────────────────────────────────────────────────────── */
  {
    id: "pochette-wax-geometrique",
    name: "Pochette wax géométrique",
    category: "pochettes",
    categoryLabel: "Pochette Ronde",
    price: 5000,
    priceLabel: "5 000 FCFA",
    image: "assets/IMG-20261102-WA0144.jpg",
    position: "center center",
    description: "Pochette ronde originale en pagne graphique ocre, blanc et noir, rehaussée d'une bandoulière chaîne argentée amovible.",
    action: "add",
    tag: "En stock",
    gallery: ["assets/IMG-20261102-WA0144.jpg"]
  },
  {
    id: "pochette-verte",
    name: "Pochette enveloppe tie-dye",
    category: "pochettes",
    categoryLabel: "Pochette Enveloppe",
    price: 6000,
    priceLabel: "6 000 FCFA",
    image: "assets/IMG-20261102-WA0150.jpg",
    position: "center center",
    description: "Élégante pochette format enveloppe au rabat émeraude et corps en tissu tie-dye violet artisanal. Idéale pour les mariages et soirées.",
    action: "add",
    tag: "Cérémonie",
    gallery: ["assets/IMG-20261102-WA0150.jpg"]
  },
  {
    id: "pochettes-bandouliere",
    name: "Trio de pochettes d'art",
    category: "pochettes",
    categoryLabel: "Pochette Bandoulière",
    price: null,
    priceLabel: "Sur commande",
    image: "assets/IMG-20261102-WA0160.jpg",
    position: "center center",
    description: "Pochettes légères à bandoulière en pagne avec motifs traditionnels africains. Réalisables dans les coloris de votre tenue de cérémonie.",
    action: "quote",
    tag: "Sur mesure",
    gallery: ["assets/IMG-20261102-WA0160.jpg"]
  },

  /* ── Sandales & Mules ─────────────────────────────────────────────────── */
  {
    id: "sandales-pagne",
    name: "Sandales plates en wax",
    category: "sandales",
    categoryLabel: "Sandales d'été",
    price: 5000,
    priceLabel: "5 000 FCFA",
    image: "assets/IMG-20261102-WA0145.jpg",
    position: "center 65%",
    description: "Sandales plates légères et confortables habillées de pagne wax avec détail cauris dorés. Semelle résistante conçue pour la marche quotidienne.",
    action: "add",
    tag: "En stock",
    gallery: ["assets/IMG-20261102-WA0145.jpg"]
  },
  {
    id: "sandales-mules",
    name: "Mules à talon bloc wax",
    category: "sandales",
    categoryLabel: "Mules à Talon",
    price: 8000,
    priceLabel: "8 000 FCFA",
    image: "assets/IMG-20261102-WA0157.jpg",
    position: "center 85%",
    description: "Mules contemporaines avec talon bloc stable de 5 cm recouvert de tissu pagne wax coordonné. Élégance affirmée et grand confort.",
    action: "add",
    tag: "Créateur",
    gallery: ["assets/IMG-20261102-WA0157.jpg"]
  },

  /* ── Créations en Perles ──────────────────────────────────────────────── */
  {
    id: "sac-perles-blanc",
    name: "Sac de cérémonie perles ivoire",
    category: "bijoux",
    categoryLabel: "Sac en Perles",
    price: 15000,
    priceLabel: "15 000 FCFA",
    image: "assets/IMG-20261102-WA0153.jpg",
    position: "center center",
    description: "Pièce d'orfèvrerie artisanale entièrement tissée à la main en perles nacrées blanches et argentées. Poignée rigide en arche perlée, fermoir sécurisé.",
    action: "add",
    tag: "Prestige",
    gallery: ["assets/IMG-20261102-WA0153.jpg"]
  },
  {
    id: "sacs-perles-collection",
    name: "Gamme sacs perlés haute couture",
    category: "bijoux",
    categoryLabel: "Collection Perles",
    price: null,
    priceLabel: "Sur commande",
    image: "assets/IMG-20261102-WA0147.jpg",
    position: "center center",
    description: "Sacs de soirée en perles taillées déclinés en vert sauge, rose poudré, noir jais et améthyste. Choisissez vos teintes de perles avec notre atelier.",
    action: "quote",
    tag: "Sur mesure",
    gallery: ["assets/IMG-20261102-WA0147.jpg", "assets/IMG-20261102-WA0140.jpg"]
  },

  /* ── Ensembles Coordonnés ─────────────────────────────────────────────── */
  {
    id: "ensemble-sac-sandales",
    name: "Ensemble Sac & Sandales assorties",
    category: "ensembles",
    categoryLabel: "Duo Assorti",
    price: 13000,
    priceLabel: "13 000 FCFA",
    image: "assets/IMG-20261102-WA0139.jpg",
    position: "center center",
    description: "Le look complet coordonné : un sac à main structuré en pagne et sa paire de sandales aux motifs identiques. L'accord parfait sans fausse note.",
    action: "add",
    tag: "Duo parfait",
    gallery: ["assets/IMG-20261102-WA0139.jpg", "assets/IMG-20261102-WA0150.jpg"]
  },
  {
    id: "ensemble-bonnet-pochette",
    name: "Parure bonnet satin & pochette",
    category: "ensembles",
    categoryLabel: "Coffret Cadeau",
    price: null,
    priceLabel: "Sur commande",
    image: "assets/IMG-20261102-WA0158.jpg",
    position: "center center",
    description: "Coffret comprenant un bonnet de nuit soyeux doublé de satin, une pochette de sortie et ses sandales coordonnées en wax authentique.",
    action: "quote",
    tag: "Sur mesure",
    gallery: ["assets/IMG-20261102-WA0158.jpg"]
  },

  /* ── Maison & Objets ─────────────────────────────────────────────────── */
  {
    id: "set-de-table",
    name: "Service de table & housses wax",
    category: "deco",
    categoryLabel: "Art de la Table",
    price: 8000,
    priceLabel: "8 000 FCFA",
    image: "assets/IMG-20261102-WA0148.jpg",
    position: "center center",
    description: "Chemin de table, serviettes et housses de chaises coordonnées en tissu pagne africain. Habillez vos réceptions et déjeuners de chaleur et de couleur.",
    action: "add",
    tag: "Décoration",
    gallery: ["assets/IMG-20261102-WA0148.jpg"]
  },
  {
    id: "couvre-sieges",
    name: "Couvre-sièges auto en perles de bois",
    category: "deco",
    categoryLabel: "Confort & Auto",
    price: null,
    priceLabel: "Sur commande",
    image: "assets/IMG-20261102-WA0142.jpg",
    position: "center center",
    description: "Couvre-sièges auto ventilés confectionnés à la main avec des perles de bois naturel lustré. Offrent une assise aérée et un style unique à votre habitacle.",
    action: "quote",
    tag: "Sur mesure",
    gallery: ["assets/IMG-20261102-WA0142.jpg"]
  },
  {
    id: "carnets-pagne",
    name: "Carnets & papeterie en pagne",
    category: "deco",
    categoryLabel: "Papeterie Wax",
    price: 3500,
    priceLabel: "3 500 FCFA",
    image: "assets/IMG-20261102-WA0141.jpg",
    position: "center center",
    description: "Carnets de notes et cahiers reliés recouverts de tissu wax véritable avec crayon artisanal sculpté en bois. Cadeau raffiné et très utile.",
    action: "add",
    tag: "Idée cadeau",
    gallery: ["assets/IMG-20261102-WA0141.jpg"]
  }
];

/* ─── Gestion de l'état persistant (localStorage) ──────────────────────── */
const storageKey = "implexe-cart-v2";
const favoritesKey = "implexe-favorites-v2";
let cart = safeRead(storageKey, []);
let favorites = safeRead(favoritesKey, []);
let activeFilter = "all";
let searchQuery = "";
let toastTimer;
let lastOrder = null;

/* ─── Cache des éléments DOM ───────────────────────────────────────────── */
const el = {
  grid: document.querySelector("[data-product-grid]"),
  cartDrawer: document.querySelector("[data-cart-drawer]"),
  cartItems: document.querySelector("[data-cart-items]"),
  cartCount: document.querySelector("[data-cart-count]"),
  cartTotal: document.querySelector("[data-cart-total]"),
  checkoutTotal: document.querySelector("[data-checkout-total]"),
  favoritesCount: document.querySelector("[data-favorites-count]"),
  backdrop: document.querySelector("[data-backdrop]"),
  toast: document.querySelector("[data-toast]"),
  productDialog: document.querySelector("[data-product-dialog]"),
  customDialog: document.querySelector("[data-custom-dialog]"),
  checkoutDialog: document.querySelector("[data-checkout-dialog]"),
  successDialog: document.querySelector("[data-success-dialog]"),
  customTotal: document.querySelector("[data-custom-total]"),
  customPrice: document.querySelector("[data-custom-price]")
};

/* ─── Utilitaires ──────────────────────────────────────────────────────── */
function safeRead(key, fallback) {
  try {
    const saved = JSON.parse(localStorage.getItem(key));
    return Array.isArray(saved) ? saved : fallback;
  } catch {
    return fallback;
  }
}

function saveState() {
  try {
    localStorage.setItem(storageKey, JSON.stringify(cart));
    localStorage.setItem(favoritesKey, JSON.stringify(favorites));
  } catch {
    // Si l'espace de stockage est restreint, l'application continue sans bloquer
  }
}

function money(amount) {
  return `${new Intl.NumberFormat("fr-FR").format(amount)} FCFA`;
}

function escapeHtml(val) {
  return String(val).replace(/[&<>'"]/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#039;", '"': "&quot;"
  }[c]));
}

function productFromId(id) {
  return products.find((p) => p.id === id);
}

/* ─── Rendu des Produits ───────────────────────────────────────────────── */
function renderProducts() {
  const visible = products.filter((p) => {
    const matchesFilter = activeFilter === "all" || p.category === activeFilter;
    const matchesSearch = `${p.name} ${p.categoryLabel} ${p.description}`.toLowerCase().includes(searchQuery);
    return matchesFilter && matchesSearch;
  });

  if (!visible.length) {
    el.grid.innerHTML = `
      <div class="no-results">
        <p style="font-size: 2rem; margin-bottom: 0.5rem">🔍</p>
        <p><strong>Aucune création trouvée</strong> pour « ${escapeHtml(searchQuery || activeFilter)} »</p>
        <button class="button button-outline" style="margin-top: 1rem" type="button" onclick="resetFilters()">Voir tout le catalogue</button>
      </div>`;
    return;
  }

  el.grid.innerHTML = visible.map((p) => {
    const isFav = favorites.includes(p.id);
    return `
      <article class="product-card">
        <div class="product-image">
          <img src="${p.image}" style="object-position:${p.position}" alt="${escapeHtml(p.name)} - Implexe Design" loading="lazy" />
          <span class="product-tag">${p.tag}</span>
          <button class="favorite ${isFav ? "is-favorite" : ""}" type="button" data-favorite="${p.id}" aria-label="${isFav ? "Retirer" : "Ajouter"} ${escapeHtml(p.name)} aux favoris" title="Ajouter aux favoris">
            ${isFav ? "♥" : "♡"}
          </button>
        </div>

        <div class="product-info">
          <div class="product-meta">
            <span>${p.categoryLabel}</span>
            <button class="product-action-link" type="button" data-view="${p.id}">Détails ↗</button>
          </div>

          <h3>${escapeHtml(p.name)}</h3>
          <p class="product-description-short">${escapeHtml(p.description)}</p>

          <div class="product-buy">
            <span class="product-price">${p.priceLabel}</span>
            ${actionButton(p)}
          </div>
        </div>
      </article>
    `;
  }).join("");
}

function actionButton(p) {
  if (p.action === "add") {
    return `<button class="product-action" type="button" data-add="${p.id}">Ajouter</button>`;
  }
  if (p.action === "custom") {
    return `<button class="product-action" type="button" data-open-custom>Composer</button>`;
  }
  return `<button class="product-action" type="button" data-quote="${p.id}">Sur devis</button>`;
}

window.resetFilters = function() {
  activeFilter = "all";
  searchQuery = "";
  const searchInput = document.querySelector("[data-search]");
  if (searchInput) searchInput.value = "";
  document.querySelectorAll("[data-filter]").forEach((b) => b.classList.toggle("is-active", b.dataset.filter === "all"));
  renderProducts();
};

/* ─── Panier d'achat ───────────────────────────────────────────────────── */
function addToCart(product, options = {}) {
  const itemId = options.cartId || product.id;
  const existing = cart.find((item) => item.id === itemId);
  
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      id: itemId,
      productId: product.id,
      name: options.name || product.name,
      price: options.price ?? product.price,
      image: product.image,
      position: product.position,
      details: options.details || "",
      quantity: 1
    });
  }

  saveState();
  renderCart();
  showToast(`✦ « ${options.name || product.name} » ajouté à votre sac.`);
}

function renderCart() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (el.cartCount) el.cartCount.textContent = count;
  if (el.cartTotal) el.cartTotal.textContent = money(total);
  if (el.checkoutTotal) el.checkoutTotal.textContent = money(total);

  if (!cart.length) {
    el.cartItems.innerHTML = `
      <div class="empty-cart">
        <div class="empty-cart-icon">👜</div>
        <p style="font-size: 1.1rem; font-weight: 700; color: var(--dark); margin-bottom: 0.4rem">Votre sac est encore vide</p>
        <p style="font-size: 0.85rem">Découvrez notre collection d'accessoires façonnés avec passion.</p>
        <a class="button button-outline" href="#collections" style="margin-top: 1rem" data-close-cart>Voir la boutique</a>
      </div>`;
    return;
  }

  el.cartItems.innerHTML = cart.map((item) => `
    <article class="cart-item">
      <img src="${item.image}" style="object-position:${item.position}" alt="" />
      <div class="cart-item-info">
        <h4 class="cart-item-title">${escapeHtml(item.name)}</h4>
        ${item.details ? `<p class="cart-item-details">${escapeHtml(item.details)}</p>` : ""}
        
        <div class="cart-item-bottom">
          <div class="quantity-control" aria-label="Quantité de ${escapeHtml(item.name)}">
            <button type="button" data-quantity="${item.id}" data-step="-1" aria-label="Diminuer la quantité">−</button>
            <span>${item.quantity}</span>
            <button type="button" data-quantity="${item.id}" data-step="1" aria-label="Augmenter la quantité">+</button>
          </div>
          <b class="cart-item-price">${money(item.price * item.quantity)}</b>
        </div>

        <button class="remove-item" type="button" data-remove="${item.id}">Retirer</button>
      </div>
    </article>
  `).join("");
}

function updateQuantity(itemId, step) {
  const item = cart.find((i) => i.id === itemId);
  if (!item) return;
  item.quantity += step;
  if (item.quantity < 1) {
    cart = cart.filter((i) => i.id !== itemId);
  }
  saveState();
  renderCart();
}

function removeItem(itemId) {
  cart = cart.filter((i) => i.id !== itemId);
  saveState();
  renderCart();
  showToast("Création retirée du sac.");
}

/* ─── Favoris ──────────────────────────────────────────────────────────── */
function renderFavoriteCount() {
  if (!el.favoritesCount) return;
  el.favoritesCount.textContent = favorites.length;
  el.favoritesCount.classList.toggle("is-hidden", favorites.length === 0);
}

function toggleFavorite(productId) {
  const p = productFromId(productId);
  if (favorites.includes(productId)) {
    favorites = favorites.filter((id) => id !== productId);
    showToast(`Retiré des favoris.`);
  } else {
    favorites.push(productId);
    showToast(`♥ « ${p?.name || 'Création'} » ajouté à vos favoris.`);
  }
  saveState();
  renderFavoriteCount();
  renderProducts();
}

function showFavorites() {
  if (!favorites.length) {
    showToast("Vous n'avez pas encore de favoris. Cliquez sur le cœur pour en ajouter !");
    return;
  }
  activeFilter = "all";
  searchQuery = "";
  const searchInput = document.querySelector("[data-search]");
  if (searchInput) searchInput.value = "";
  document.querySelectorAll("[data-filter]").forEach((b) => b.classList.toggle("is-active", b.dataset.filter === "all"));

  const favoriteProducts = products.filter((p) => favorites.includes(p.id));
  el.grid.innerHTML = favoriteProducts.map((p) => `
    <article class="product-card">
      <div class="product-image">
        <img src="${p.image}" style="object-position:${p.position}" alt="${escapeHtml(p.name)}" loading="lazy" />
        <span class="product-tag" style="background:var(--orange)">Favori</span>
        <button class="favorite is-favorite" type="button" data-favorite="${p.id}" aria-label="Retirer des favoris">♥</button>
      </div>
      <div class="product-info">
        <div class="product-meta"><span>${p.categoryLabel}</span><button class="product-action-link" type="button" data-view="${p.id}">Détails ↗</button></div>
        <h3>${escapeHtml(p.name)}</h3>
        <p class="product-description-short">${escapeHtml(p.description)}</p>
        <div class="product-buy"><span class="product-price">${p.priceLabel}</span>${actionButton(p)}</div>
      </div>
    </article>
  `).join("");

  document.querySelector("#collections")?.scrollIntoView({ behavior: "smooth" });
  showToast(`Affichage de vos ${favorites.length} création(s) favorite(s).`);
}

/* ─── Tiroir & Modales ─────────────────────────────────────────────────── */
function openCart() {
  if (!el.cartDrawer) return;
  el.cartDrawer.classList.add("is-open");
  el.cartDrawer.setAttribute("aria-hidden", "false");
  el.backdrop.classList.add("is-visible");
  document.body.classList.add("no-scroll");
}

function closeCart() {
  if (!el.cartDrawer) return;
  el.cartDrawer.classList.remove("is-open");
  el.cartDrawer.setAttribute("aria-hidden", "true");
  el.backdrop.classList.remove("is-visible");
  document.body.classList.remove("no-scroll");
}

function openDialog(dialog) {
  if (!dialog) return;
  if (typeof dialog.showModal === "function") {
    dialog.showModal();
  } else {
    dialog.setAttribute("open", "");
  }
}

function closeDialog(dialog) {
  if (dialog?.open) dialog.close();
}

function openProductDialog(productId) {
  const p = productFromId(productId);
  if (!p) return;

  const galleryHtml = (p.gallery && p.gallery.length > 1)
    ? p.gallery.map((src, i) => `
        <img class="gallery-thumb ${i === 0 ? 'is-active' : ''}" src="${src}" data-gallery-src="${src}" alt="Vignette ${i + 1}" />
      `).join("")
    : "";

  el.productDialog.innerHTML = `
    <button class="close-button quick-view-close" type="button" data-close-product aria-label="Fermer la vue produit">×</button>
    <div class="quick-view">
      <div class="quick-view-image">
        <img class="quick-view-main-img" src="${p.image}" style="object-position:${p.position}" alt="${escapeHtml(p.name)} - Implexe Design" />
        ${galleryHtml ? `<div class="gallery-thumbs">${galleryHtml}</div>` : ""}
      </div>
      <div class="quick-view-copy">
        <p class="eyebrow">${p.categoryLabel}</p>
        <h2 id="product-dialog-title">${escapeHtml(p.name)}</h2>
        <p>${escapeHtml(p.description)}</p>
        
        <div style="margin: 1rem 0; font-size: 0.82rem; color: var(--dark-muted)">
          <p style="margin: 0.3rem 0">✦ <strong>Atelier :</strong> Confectionné à Brazzaville, Congo</p>
          <p style="margin: 0.3rem 0">✦ <strong>Matières :</strong> Pagne wax 100% coton & finitions nobles</p>
        </div>

        <div class="quick-view-bottom">
          <p class="quick-view-price">${p.priceLabel}</p>
          ${p.action === "add" ? `<button class="button button-primary button-block" type="button" data-add="${p.id}" data-close-product>Ajouter à mon sac</button>` : ""}
          ${p.action === "custom" ? `<button class="button button-primary button-block" type="button" data-open-custom data-close-product>Composer ce sac</button>` : ""}
          ${p.action === "quote" ? `<button class="button button-whatsapp button-block" type="button" data-quote="${p.id}" data-close-product>Demander un devis sur WhatsApp</button>` : ""}
        </div>
      </div>
    </div>
  `;

  openDialog(el.productDialog);
}

function openCustomDialog() {
  closeDialog(el.productDialog);
  updateCustomTotal();
  openDialog(el.customDialog);
}

function updateCustomTotal() {
  if (el.customPrice && el.customTotal) {
    el.customTotal.textContent = money(Number(el.customPrice.value));
  }
}

function openCheckout() {
  if (!cart.length) {
    showToast("Veuillez d'abord ajouter une création à votre sac.");
    return;
  }
  closeCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  if (el.checkoutTotal) el.checkoutTotal.textContent = money(total);
  openDialog(el.checkoutDialog);
}

function openQuote(productId) {
  const p = productFromId(productId);
  if (!p) return;
  const msg = `Bonjour Implexe Design, je souhaite obtenir un devis pour la création « ${p.name} » (${p.categoryLabel}). Pouvez-vous m'indiquer les disponibilités et le délai de confection ?`;
  window.open(`https://wa.me/242066727637?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
}

function showToast(message) {
  clearTimeout(toastTimer);
  el.toast.textContent = message;
  el.toast.classList.add("is-visible");
  toastTimer = setTimeout(() => {
    el.toast.classList.remove("is-visible");
  }, 3400);
}

/* ─── Génération du bon de commande WhatsApp ───────────────────────────── */
function buildWhatsAppOrder(order) {
  const itemsText = order.items.map((i) => 
    `• ${i.quantity} × ${i.name} — ${money(i.price * i.quantity)}${i.details ? `\n  (Détails : ${i.details})` : ""}`
  ).join("\n\n");

  return `Bonjour Implexe Design, je confirme ma commande sur votre site.\n\n` +
    `🔖 *RÉFÉRENCE :* ${order.reference}\n\n` +
    `🛍️ *ARTICLES CHOISIS :*\n${itemsText}\n\n` +
    `💰 *TOTAL À REGLER :* ${money(order.total)}\n` +
    `💳 *MODE DE PAIEMENT :* ${order.payment}\n\n` +
    `👤 *CLIENT :* ${order.customerName}\n` +
    `📞 *TÉLÉPHONE :* ${order.phone}\n` +
    `📍 *LIEU DE LIVRAISON :* ${order.address}\n\n` +
    `Merci de me confirmer la prise en charge et le créneau de remise !`;
}

/* ─── Gestionnaire global d'événements (Delegation) ────────────────────── */
document.addEventListener("click", (e) => {
  // Clic sur l'arrière-plan du tiroir
  if (e.target.matches("[data-backdrop]")) {
    closeCart();
    return;
  }

  // Switcher d'image dans la galerie de la modale produit
  if (e.target.matches("[data-gallery-src]")) {
    const mainImg = el.productDialog.querySelector(".quick-view-main-img");
    if (mainImg) mainImg.src = e.target.dataset.gallerySrc;
    el.productDialog.querySelectorAll(".gallery-thumb").forEach((t) => {
      t.classList.toggle("is-active", t === e.target);
    });
    return;
  }

  const target = e.target.closest("button, a");
  if (!target) return;

  // Actions du panier
  if (target.matches("[data-open-cart]")) openCart();
  if (target.matches("[data-close-cart]")) closeCart();

  // QR Code Atelier
  if (target.matches("[data-open-qr]")) {
    const qrDialog = document.querySelector("[data-qr-dialog]");
    if (qrDialog) openDialog(qrDialog);
  }

  // Impression Bon de Commande (PDF)
  if (target.matches("[data-print-order]")) {
    if (lastOrder) {
      printOrderReceipt(lastOrder);
    } else {
      const savedOrder = safeRead("implexe-last-order-v2", null);
      if (savedOrder) printOrderReceipt(savedOrder);
      else showToast("Aucun bon de commande récent à imprimer.");
    }
  }

  // Favoris
  if (target.matches("[data-open-favorites]")) showFavorites();
  if (target.dataset.favorite) toggleFavorite(target.dataset.favorite);

  // Filtres
  if (target.dataset.filter) {
    activeFilter = target.dataset.filter;
    document.querySelectorAll("[data-filter]").forEach((b) => {
      b.classList.toggle("is-active", b === target);
    });
    renderProducts();
  }

  // Ajout au panier & Détails
  if (target.dataset.add) {
    const product = productFromId(target.dataset.add);
    if (product) addToCart(product);
  }
  if (target.dataset.view) openProductDialog(target.dataset.view);

  // Personnalisation sur mesure
  if (target.matches("[data-open-custom]")) openCustomDialog();

  // Devis direct WhatsApp
  if (target.dataset.quote) openQuote(target.dataset.quote);

  // Quantités dans le panier
  if (target.dataset.quantity) {
    updateQuantity(target.dataset.quantity, Number(target.dataset.step));
  }
  if (target.dataset.remove) removeItem(target.dataset.remove);

  // Passer commande
  if (target.matches("[data-open-checkout]")) openCheckout();

  // Fermeture des modales
  if (target.matches("[data-close-dialog]")) {
    closeDialog(target.closest("dialog"));
  }
  if (target.matches("[data-close-product]")) {
    closeDialog(el.productDialog);
  }
});

/* ─── Barre de recherche en temps réel ─────────────────────────────────── */
const searchInput = document.querySelector("[data-search]");
if (searchInput) {
  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value.trim().toLowerCase();
    renderProducts();
  });
}

/* ─── Changement de prix dans le formulaire sur-mesure ────────────────── */
if (el.customPrice) {
  el.customPrice.addEventListener("change", updateCustomTotal);
}

/* ─── Soumission du formulaire sur-mesure ──────────────────────────────── */
const customForm = document.querySelector("[data-custom-form]");
if (customForm) {
  customForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const price = Number(data.get("formula"));
    const formulaName = price === 15000 ? "Sac personnalisé élaboré" : "Sac personnalisé classique";
    const details = `${data.get("fabric")} · Nuances : ${data.get("colors")} · Finition : ${data.get("detail")}${data.get("note") ? ` · Broderie : ${data.get("note")}` : ""}`;
    const source = productFromId("sac-personnalise-prefina");
    const cartId = `custom-${Date.now()}`;

    addToCart(source, { cartId, name: formulaName, price, details });
    e.currentTarget.reset();
    updateCustomTotal();
    closeDialog(el.customDialog);
    openCart();
  });
}

/* ─── Soumission du formulaire de commande (Checkout) ─────────────────── */
const checkoutForm = document.querySelector("[data-checkout-form]");
if (checkoutForm) {
  checkoutForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!cart.length) return;

    const data = new FormData(e.currentTarget);
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    lastOrder = {
      reference: `IMP-${String(Date.now()).slice(-6)}`,
      customerName: data.get("customerName"),
      phone: data.get("phone"),
      email: data.get("email"),
      address: data.get("address"),
      payment: data.get("payment"),
      items: [...cart],
      total
    };

    localStorage.setItem("implexe-last-order-v2", JSON.stringify(lastOrder));

    const successNameEl = document.querySelector("[data-success-name]");
    const successMsgEl = document.querySelector("[data-success-message]");
    const waLinkEl = document.querySelector("[data-whatsapp-order]");

    if (successNameEl) successNameEl.textContent = data.get("customerName").split(" ")[0];
    if (successMsgEl) successMsgEl.textContent = `Votre commande ${lastOrder.reference} d'un montant de ${money(total)} a été enregistrée. Cliquez ci-dessous pour transmettre automatiquement la confirmation à notre atelier sur WhatsApp.`;
    if (waLinkEl) waLinkEl.href = `https://wa.me/242066727637?text=${encodeURIComponent(buildWhatsAppOrder(lastOrder))}`;

    cart = [];
    saveState();
    renderCart();
    e.currentTarget.reset();
    closeDialog(el.checkoutDialog);
    openDialog(el.successDialog);
  });
}

/* ─── Formulaire de contact ────────────────────────────────────────────── */
const contactForm = document.querySelector("[data-contact-form]");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = `Demande depuis le site web Implexe — ${data.get("name")}`;
    const body = `Bonjour Marina et l'atelier Implexe Design,\r\n\r\n${data.get("message")}\r\n\r\nCordialement,\r\n${data.get("name")}\r\nContact : ${data.get("email")}`;
    window.location.href = `mailto:mariombou2016@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    e.currentTarget.reset();
    showToast("Votre messagerie s'ouvre avec le message prêt à l'envoi.");
  });
}

/* ─── Menu Mobile (Burger) ─────────────────────────────────────────────── */
const menuBtn = document.querySelector(".menu-button");
const mainNav = document.querySelector(".main-nav");

if (menuBtn && mainNav) {
  menuBtn.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("is-open");
    menuBtn.setAttribute("aria-expanded", String(isOpen));
    menuBtn.setAttribute("aria-label", isOpen ? "Fermer le menu" : "Ouvrir le menu");
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("is-open");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });
}

/* ─── Fermeture des modales avec clic externe & touche Échap ───────────── */
document.querySelectorAll("dialog").forEach((dialog) => {
  dialog.addEventListener("click", (e) => {
    const rect = dialog.getBoundingClientRect();
    const isOutside = e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom;
    if (isOutside) dialog.close();
  });
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeCart();
    document.querySelectorAll("dialog[open]").forEach((d) => d.close());
  }
});

/* ─── Scroll Reveal (Animations d'apparition) ──────────────────────────── */
if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal").forEach((elem) => revealObserver.observe(elem));
} else {
  document.querySelectorAll(".reveal").forEach((elem) => elem.classList.add("is-visible"));
}

/* ─── Bon de Commande / Facturette Imprimable (PDF) ────────────────────── */
function printOrderReceipt(order) {
  if (!order) return;
  const receiptEl = document.getElementById("printable-receipt");
  if (!receiptEl) return;

  const itemsHtml = order.items.map((i) => `
    <tr>
      <td style="padding: 10px 8px; border-bottom: 1px solid #e0e0e0; vertical-align: top;">
        <strong>${escapeHtml(i.name)}</strong>
        ${i.details ? `<br><small style="color:#666; font-size:11px;">${escapeHtml(i.details)}</small>` : ""}
      </td>
      <td style="padding: 10px 8px; border-bottom: 1px solid #e0e0e0; text-align: center; vertical-align: top;">${i.quantity}</td>
      <td style="padding: 10px 8px; border-bottom: 1px solid #e0e0e0; text-align: right; vertical-align: top;">${money(i.price)}</td>
      <td style="padding: 10px 8px; border-bottom: 1px solid #e0e0e0; text-align: right; font-weight: bold; vertical-align: top;">${money(i.price * i.quantity)}</td>
    </tr>
  `).join("");

  receiptEl.innerHTML = `
    <div style="max-width: 680px; margin: 0 auto; padding: 25px; border: 2px solid #14151a; border-radius: 8px; font-family: 'Plus Jakarta Sans', Arial, sans-serif; color: #14151a;">
      <div style="display: flex; justify-content: space-between; align-items: flex-start; border-bottom: 2px solid #e8590c; padding-bottom: 16px; margin-bottom: 20px;">
        <div>
          <h1 style="margin: 0; font-size: 26px; font-family: Georgia, serif; letter-spacing: 0.5px;">IMPLEXE DESIGN</h1>
          <p style="margin: 4px 0 0; font-size: 13px; color: #e8590c; font-weight: bold; text-transform: uppercase;">Le style au service de notre culture</p>
          <p style="margin: 4px 0 0; font-size: 12px; color: #555;">Atelier d'Artisanat & Confection · Brazzaville, Congo<br>Tél / WhatsApp : +242 06 672 76 37 · mariombou2016@gmail.com</p>
        </div>
        <div style="text-align: right;">
          <span style="display: inline-block; background: #e8590c; color: #fff; padding: 4px 10px; border-radius: 4px; font-size: 12px; font-weight: bold;">BON DE COMMANDE</span>
          <p style="margin: 6px 0 0; font-size: 14px; font-weight: bold; color: #14151a;">${escapeHtml(order.reference)}</p>
          <p style="margin: 2px 0 0; font-size: 12px; color: #777;">Date : ${new Date().toLocaleDateString("fr-FR")}</p>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 24px; background: #fbf9f5; border: 1px solid #ede5d8; padding: 14px; border-radius: 6px; font-size: 13px; line-height: 1.5;">
        <div>
          <strong style="color: #e8590c; text-transform: uppercase; font-size: 11px;">Destinataire :</strong><br>
          <span style="font-size: 14px; font-weight: bold;">${escapeHtml(order.customerName)}</span><br>
          📞 ${escapeHtml(order.phone)}<br>
          ${order.email ? `✉️ ${escapeHtml(order.email)}` : ""}
        </div>
        <div>
          <strong style="color: #e8590c; text-transform: uppercase; font-size: 11px;">Modalités :</strong><br>
          📍 <strong>Livraison :</strong> ${escapeHtml(order.address)}<br>
          💳 <strong>Règlement :</strong> ${escapeHtml(order.payment)}
        </div>
      </div>

      <table style="width: 100%; border-collapse: collapse; font-size: 13px; margin-bottom: 20px;">
        <thead>
          <tr style="background: #14151a; color: #fff;">
            <th style="padding: 10px 8px; text-align: left; font-size: 12px; text-transform: uppercase;">Article & Détails</th>
            <th style="padding: 10px 8px; text-align: center; font-size: 12px; text-transform: uppercase;">Qté</th>
            <th style="padding: 10px 8px; text-align: right; font-size: 12px; text-transform: uppercase;">Prix Unitaire</th>
            <th style="padding: 10px 8px; text-align: right; font-size: 12px; text-transform: uppercase;">Sous-total</th>
          </tr>
        </thead>
        <tbody>
          ${itemsHtml}
        </tbody>
        <tfoot>
          <tr style="background: #fbf9f5;">
            <td colspan="3" style="padding: 14px 8px; text-align: right; font-weight: bold; font-size: 15px; border-top: 2px solid #14151a;">TOTAL COMMANDE :</td>
            <td style="padding: 14px 8px; text-align: right; font-weight: bold; font-size: 18px; color: #e8590c; border-top: 2px solid #14151a;">${money(order.total)}</td>
          </tr>
        </tfoot>
      </table>

      <div style="border-top: 1px dashed #ccc; padding-top: 16px; font-size: 11px; color: #666; text-align: center; line-height: 1.5;">
        <p style="margin: 0; font-weight: bold; color: #14151a;">✦ Merci d'encourager la création et l'artisanat congolais ! ✦</p>
        <p style="margin: 4px 0 0;">Implexe Design · Promotrice Marina Omboumbou · Brazzaville, République du Congo</p>
      </div>
    </div>
  `;

  window.print();
}

/* ─── PWA & Service Worker ─────────────────────────────────────────────── */
if ("serviceWorker" in navigator && (window.location.protocol === "https:" || window.location.hostname === "localhost")) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  });
}

/* ─── Initialisation ───────────────────────────────────────────────────── */
const yearEl = document.querySelector("[data-year]");
if (yearEl) yearEl.textContent = new Date().getFullYear();

renderProducts();
renderCart();
renderFavoriteCount();
