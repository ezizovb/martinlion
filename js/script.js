// Инициализация EmailJS (замените на свои данные)
// Раскомментируйте и замените на ваш публичный ключ EmailJS:
// emailjs.init("YOUR_PUBLIC_KEY");

// Данные
let products = [];
let filteredProducts = [];
let currentCategory = "all";
let currentSearch = "";
let displayedProducts = 6; // Количество товаров на странице
let currentDisplayed = 0;

// DOM элементы
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const filterBtn = document.getElementById("filterBtn");
const filterContent = document.getElementById("filterContent");
const searchInput = document.getElementById("searchInput");
const productsGrid = document.getElementById("productsGrid");
const emptyState = document.getElementById("emptyState");
const brandsGrid = document.getElementById("brandsGrid");
const orderModal = document.getElementById("orderModal");
const modalClose = document.getElementById("modalClose");
const orderForm = document.getElementById("orderForm");
const bannerSlider = document.getElementById("bannerSlider");
const indicators = document.querySelectorAll(".indicator");

// Загрузка данных
async function loadData() {
  try {
    const response = await fetch("data.json");
    const data = await response.json();
    products = data.products;
    filteredProducts = products;
    renderBrands(data.brands);
    renderProducts(products, true);
  } catch (error) {
    console.error("Ошибка загрузки данных:", error);
    productsGrid.innerHTML =
      '<p style="text-align: center; color: #7F8C8D;">Ошибка загрузки данных. Пожалуйста, обновите страницу.</p>';
  }
}

// Рендер брендов
function renderBrands(brands) {
  brandsGrid.innerHTML = "";
  brands.forEach((brand) => {
    const brandItem = document.createElement("div");
    brandItem.className = "brand-item";
    brandItem.textContent = brand.name;
    brandItem.addEventListener("click", () => filterByBrand(brand.name));
    brandsGrid.appendChild(brandItem);
  });
}

// Фильтрация по бренду
function filterByBrand(brandName) {
  currentSearch = "";
  searchInput.value = "";
  const filtered = products.filter(
    (product) =>
      product.brand.toLowerCase() === brandName.toLowerCase() &&
      (currentCategory === "all" || product.category === currentCategory)
  );
  filteredProducts = filtered;
  renderProducts(filtered, true);
  updateFilterButtons();
}

// Рендер товаров
function renderProducts(productsToRender, reset = false) {
  if (reset) {
    productsGrid.innerHTML = "";
    currentDisplayed = 0;
  }

  if (productsToRender.length === 0) {
    emptyState.style.display = "block";
    productsGrid.style.display = "none";
    hideLoadMoreButton();
    return;
  }

  emptyState.style.display = "none";
  productsGrid.style.display = "grid";

  // Показываем товары порциями
  const productsToShow = productsToRender.slice(
    currentDisplayed,
    currentDisplayed + displayedProducts
  );

  productsToShow.forEach((product) => {
    const productCard = createProductCard(product);
    productsGrid.appendChild(productCard);
  });

  currentDisplayed += productsToShow.length;

  // Показываем/скрываем кнопку "Загрузить еще"
  if (currentDisplayed >= productsToRender.length) {
    hideLoadMoreButton();
  } else {
    showLoadMoreButton();
  }
}

// Загрузка еще товаров
function loadMoreProducts() {
  renderProducts(filteredProducts, false);
}

// Показать кнопку "Загрузить еще"
function showLoadMoreButton() {
  let loadMoreBtn = document.getElementById("loadMoreBtn");
  if (!loadMoreBtn) {
    loadMoreBtn = document.createElement("button");
    loadMoreBtn.id = "loadMoreBtn";
    loadMoreBtn.className = "load-more-btn";
    loadMoreBtn.textContent = "Загрузить еще";
    loadMoreBtn.addEventListener("click", loadMoreProducts);
    const catalogSection = document.getElementById("catalog");
    const container = catalogSection.querySelector(".container");
    container.appendChild(loadMoreBtn);
  }
  loadMoreBtn.style.display = "block";
}

// Скрыть кнопку "Загрузить еще"
function hideLoadMoreButton() {
  const loadMoreBtn = document.getElementById("loadMoreBtn");
  if (loadMoreBtn) {
    loadMoreBtn.style.display = "none";
  }
}

// Создание карточки товара
function createProductCard(product) {
  const card = document.createElement("div");
  card.className = "product-card";

  const image = document.createElement("div");
  image.className = "product-image";
  if (product.image) {
    const img = document.createElement("img");
    img.src = product.image;
    img.alt = product.name;
    img.style.width = "100%";
    img.style.height = "100%";
    img.style.objectFit = "cover";
    image.appendChild(img);
  } else {
    image.textContent = "Изображение";
  }

  const info = document.createElement("div");
  info.className = "product-info";

  const name = document.createElement("div");
  name.className = "product-name";
  name.textContent = product.name;

  const id = document.createElement("div");
  id.className = "product-id";
  id.textContent = `ID: ${product.id}`;

  const description = document.createElement("div");
  description.className = "product-description";
  description.textContent = product.description;

  const orderBtn = document.createElement("button");
  orderBtn.className = "order-btn";
  orderBtn.textContent = "Заказать";
  orderBtn.addEventListener("click", () => openOrderModal(product));

  info.appendChild(name);
  info.appendChild(id);
  info.appendChild(description);
  info.appendChild(orderBtn);

  card.appendChild(image);
  card.appendChild(info);

  return card;
}

// Фильтрация по категории
function filterByCategory(category) {
  currentCategory = category;
  currentSearch = searchInput.value.toLowerCase();

  let filtered = products;

  if (category !== "all") {
    filtered = filtered.filter((product) => product.category === category);
  }

  if (currentSearch) {
    filtered = filtered.filter(
      (product) =>
        product.name.toLowerCase().includes(currentSearch) ||
        product.description.toLowerCase().includes(currentSearch)
    );
  }

  filteredProducts = filtered;
  renderProducts(filtered, true);
  updateFilterButtons();
}

// Поиск
function handleSearch() {
  currentSearch = searchInput.value.toLowerCase();

  let filtered = products;

  if (currentCategory !== "all") {
    filtered = filtered.filter(
      (product) => product.category === currentCategory
    );
  }

  if (currentSearch) {
    filtered = filtered.filter(
      (product) =>
        product.name.toLowerCase().includes(currentSearch) ||
        product.description.toLowerCase().includes(currentSearch) ||
        product.brand.toLowerCase().includes(currentSearch)
    );
  }

  filteredProducts = filtered;
  renderProducts(filtered, true);
}

// Обновление активных кнопок фильтров
function updateFilterButtons() {
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    if (btn.dataset.category === currentCategory) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
}

// Открытие модального окна заказа
function openOrderModal(product) {
  document.getElementById("productId").value = product.id;
  orderModal.classList.add("active");
  document.body.style.overflow = "hidden";
}

// Закрытие модального окна
function closeOrderModal() {
  orderModal.classList.remove("active");
  document.body.style.overflow = "auto";
  orderForm.reset();
}

// Отправка заказа
async function submitOrder(event) {
  event.preventDefault();

  const formData = {
    productId: document.getElementById("productId").value,
    customerName: document.getElementById("customerName").value,
    customerEmail: document.getElementById("customerEmail").value,
    customerPhone: document.getElementById("customerPhone").value,
  };

  const product = products.find((p) => p.id === formData.productId);

  try {
    // Замените на ваши данные EmailJS
    // Раскомментируйте и настройте после регистрации на emailjs.com:
    /*
        await emailjs.send(
            'YOUR_SERVICE_ID',    // Замените на ваш Service ID
            'YOUR_TEMPLATE_ID',  // Замените на ваш Template ID
            {
                product_id: formData.productId,
                product_name: product ? product.name : 'Неизвестный товар',
                customer_name: formData.customerName,
                customer_email: formData.customerEmail,
                customer_phone: formData.customerPhone,
                message: `Новый заказ: ${product ? product.name : 'Неизвестный товар'} (ID: ${formData.productId})`
            }
        );
        */

    // Временная заглушка для тестирования (удалите после настройки EmailJS)
    console.log("Заказ:", {
      productId: formData.productId,
      productName: product ? product.name : "Неизвестный товар",
      customerName: formData.customerName,
      customerEmail: formData.customerEmail,
      customerPhone: formData.customerPhone,
    });

    alert("Заказ успешно отправлен! Мы свяжемся с вами в ближайшее время.");
    closeOrderModal();
  } catch (error) {
    console.error("Ошибка отправки:", error);
    alert(
      "Произошла ошибка при отправке заказа. Пожалуйста, попробуйте позже или свяжитесь с нами напрямую."
    );
  }
}

// Слайдер баннеров
let currentSlide = 0;
const slides = document.querySelectorAll(".banner-slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    indicators[i].classList.remove("active");
  });

  slides[index].classList.add("active");
  indicators[index].classList.add("active");
  currentSlide = index;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Автоматическая смена слайдов
setInterval(nextSlide, 5000);

// Обработчики событий
if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    mobileMenu.classList.toggle("active");
    mobileMenuBtn.classList.toggle("active");
  });

  // Закрытие меню при клике вне его
  document.addEventListener("click", (e) => {
    if (mobileMenu && mobileMenu.classList.contains("active")) {
      if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        mobileMenu.classList.remove("active");
        mobileMenuBtn.classList.remove("active");
      }
    }
  });

  // Закрытие меню при клике на ссылку
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");
  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
      mobileMenuBtn.classList.remove("active");
    });
  });
}

filterBtn.addEventListener("click", () => {
  filterContent.classList.toggle("active");
  filterBtn.classList.toggle("active");
});

document.querySelectorAll(".filter-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const category = btn.dataset.category;
    filterByCategory(category);
  });
});

searchInput.addEventListener("input", handleSearch);

modalClose.addEventListener("click", closeOrderModal);

orderModal.addEventListener("click", (e) => {
  if (e.target === orderModal) {
    closeOrderModal();
  }
});

orderForm.addEventListener("submit", submitOrder);

indicators.forEach((indicator, index) => {
  indicator.addEventListener("click", () => {
    showSlide(index);
  });
});

// Плавная прокрутка
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Фиксированный header при скролле
let lastScroll = 0;
let ticking = false;
const header = document.getElementById("header");

function updateHeader() {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

  lastScroll = currentScroll;
  ticking = false;
}

window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(updateHeader);
    ticking = true;
  }
});

// Инициализация
loadData();

document.getElementById("current-year").textContent = new Date().getFullYear();
