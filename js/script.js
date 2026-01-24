// Инициализация EmailJS (замените на свои данные)
// Раскомментируйте и замените на ваш публичный ключ EmailJS:
emailjs.init("8fzgorCZriaixUv9X");

// Языковые настройки
let currentLang = localStorage.getItem('language') || 'ru';

const translations = {
    ru: {
        nav: {
            about: "О нас",
            howToOrder: "Как заказать",
            catalog: "Каталоги"
        },
        banner: {
            title1: "Изысканные ароматы для вас",
            text1: "Откройте мир премиальной парфюмерии",
            title2: "Уникальные композиции",
            text2: "Каждый аромат рассказывает свою историю",
            title3: "Премиальное качество",
            text3: "Только оригинальная продукция от ведущих брендов"
        },
        about: {
            text: "Мы предлагаем широкий ассортимент премиальной парфюмерии от ведущих мировых брендов. Наша коллекция включает как классические, так и современные ароматы для мужчин, женщин и унисекс варианты. Каждый продукт проходит тщательную проверку на подлинность, чтобы гарантировать вам только оригинальное качество."
        },
        howToOrder: {
            title: "Как заказать",
            subtitle: "Всего три простых шага к покупке:",
            step1: {
                title: "Нажмите «Заказать»",
                text: "на понравившемся товаре."
            },
            step2: {
                title: "Оставьте контакты.",
                text: "В появившемся окне введите имя и телефон. Мы гарантируем конфиденциальность ваших данных."
            },
            step3: {
                title: "Мы на связи!",
                text: "Наш сотрудник перезвонит или напишет вам, чтобы подтвердить заказ и ответить на вопросы."
            }
        },
        catalog: {
            title: "Каталог",
            searchPlaceholder: "Поиск по названию товара...",
            filters: "Фильтры по категориям",
            all: "Все",
            male: "Мужской",
            female: "Женский",
            unisex: "Унисекс",
            popularBrands: "Популярные бренды",
            noProducts: "Товары не найдены"
        },
        order: {
            title: "Оформление заказа",
            name: "Ваше имя",
            phone: "Телефон",
            submit: "Отправить заказ",
            success: "Спасибо за заказ, наш сотрудник свяжется с вами в ближайший момент"
        },
        product: {
            order: "Заказать",
            loadMore: "Загрузить еще"
        },
        footer: {
            contacts: "Контакты",
            phone: "Телефон:",
            address: "Адрес",
            workingHours: "Режим работы: Пн-Вс 10:00 - 22:00",
            social: "Социальные сети",
            rights: "Все права защищены."
        }
    },
    en: {
        nav: {
            about: "About Us",
            howToOrder: "How to Order",
            catalog: "Catalog"
        },
        banner: {
            title1: "Exquisite Fragrances for You",
            text1: "Discover the world of premium perfumery",
            title2: "Unique Compositions",
            text2: "Each fragrance tells its own story",
            title3: "Premium Quality",
            text3: "Only original products from leading brands"
        },
        about: {
            text: "We offer a wide range of premium perfumery from leading world brands. Our collection includes both classic and modern fragrances for men, women, and unisex options. Each product undergoes thorough authenticity verification to guarantee you only original quality."
        },
        howToOrder: {
            title: "How to Order",
            subtitle: "Just three simple steps to purchase:",
            step1: {
                title: "Click 'Order'",
                text: "on the product you like."
            },
            step2: {
                title: "Leave your contacts.",
                text: "In the pop-up window, enter your name and phone number. We guarantee the confidentiality of your data."
            },
            step3: {
                title: "We're in touch!",
                text: "Our employee will call or write to you to confirm the order and answer questions."
            }
        },
        catalog: {
            title: "Catalog",
            searchPlaceholder: "Search by product name...",
            filters: "Category Filters",
            all: "All",
            male: "Male",
            female: "Female",
            unisex: "Unisex",
            popularBrands: "Popular Brands",
            noProducts: "Products not found"
        },
        order: {
            title: "Place Order",
            name: "Your Name",
            phone: "Phone",
            submit: "Submit Order",
            success: "Thank you for your order, our employee will contact you shortly"
        },
        product: {
            order: "Order",
            loadMore: "Load More"
        },
        footer: {
            contacts: "Contacts",
            phone: "Phone:",
            address: "Address",
            workingHours: "Working Hours: Mon-Sun 10:00 - 22:00",
            social: "Social Networks",
            rights: "All rights reserved."
        }
    }
};

// Функция переключения языка
function switchLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
    
    // Обновляем текст переключателя
    const langSwitchers = document.querySelectorAll('.lang-switcher');
    langSwitchers.forEach(switcher => {
        switcher.textContent = lang === 'ru' ? 'EN' : 'RU';
    });
    
    // Обновляем все элементы с data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const keys = key.split('.');
        let value = translations[lang];
        for (const k of keys) {
            value = value[k];
        }
        if (value) {
            element.textContent = value;
        }
    });
    
    // Обновляем placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        const keys = key.split('.');
        let value = translations[lang];
        for (const k of keys) {
            value = value[k];
        }
        if (value) {
            element.placeholder = value;
        }
    });
    
    // Обновляем динамически созданные элементы
    updateDynamicContent();
}

// Обновление динамического контента
function updateDynamicContent() {
    const orderBtns = document.querySelectorAll('.order-btn');
    orderBtns.forEach(btn => {
        btn.textContent = translations[currentLang].product.order;
    });
    
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (loadMoreBtn) {
        loadMoreBtn.textContent = translations[currentLang].product.loadMore;
    }
}

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
      (currentCategory === "all" || product.category === currentCategory),
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
    currentDisplayed + displayedProducts,
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
    loadMoreBtn.textContent = translations[currentLang].product.loadMore;
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
  orderBtn.textContent = translations[currentLang].product.order;
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
        product.description.toLowerCase().includes(currentSearch),
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
      (product) => product.category === currentCategory,
    );
  }

  if (currentSearch) {
    filtered = filtered.filter(
      (product) =>
        product.name.toLowerCase().includes(currentSearch) ||
        product.description.toLowerCase().includes(currentSearch) ||
        product.brand.toLowerCase().includes(currentSearch),
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
  // Скрываем сообщение об успехе при открытии
  const successMessage = document.getElementById("successMessage");
  if (successMessage) {
    successMessage.style.display = "none";
  }
  // Сбрасываем форму
  orderForm.reset();
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
    customerPhone: document.getElementById("customerPhone").value,
  };

  const product = products.find((p) => p.id === formData.productId);
  const successMessage = document.getElementById("successMessage");

  try {
    // Замените на ваши данные EmailJS
    // Раскомментируйте и настройте после регистрации на emailjs.com:

    await emailjs.send(
      "service_6y8s7nk", // Замените на ваш Service ID
      "template_ot4mi4f", // Замените на ваш Template ID
      {
        product_id: formData.productId,
        product_name: product ? product.name : "Неизвестный товар",
        customer_name: formData.customerName,
        customer_phone: formData.customerPhone,
        message: `Новый заказ: ${product ? product.name : "Неизвестный товар"} (ID: ${formData.productId})`,
      },
    );

    // Временная заглушка для тестирования (удалите после настройки EmailJS)
    console.log("Заказ:", {
      productId: formData.productId,
      productName: product ? product.name : "Неизвестный товар",
      customerName: formData.customerName,
      customerPhone: formData.customerPhone,
    });

    // Показываем сообщение об успехе
    if (successMessage) {
      successMessage.style.display = "block";
      // Прокручиваем к сообщению
      successMessage.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }

    // Закрываем модальное окно через 3 секунды
    setTimeout(() => {
      closeOrderModal();
    }, 3000);
  } catch (error) {
    console.error("Ошибка отправки:", error);
    alert(
      currentLang === 'ru' 
        ? "Произошла ошибка при отправке заказа. Пожалуйста, попробуйте позже или свяжитесь с нами напрямую."
        : "An error occurred while submitting the order. Please try again later or contact us directly.",
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

// Обработчики переключения языка
const langSwitcher = document.getElementById("langSwitcher");
const mobileLangSwitcher = document.getElementById("mobileLangSwitcher");

if (langSwitcher) {
  langSwitcher.addEventListener("click", () => {
    const newLang = currentLang === 'ru' ? 'en' : 'ru';
    switchLanguage(newLang);
  });
}

if (mobileLangSwitcher) {
  mobileLangSwitcher.addEventListener("click", () => {
    const newLang = currentLang === 'ru' ? 'en' : 'ru';
    switchLanguage(newLang);
  });
}

// Инициализация
loadData();
switchLanguage(currentLang); // Применяем сохраненный язык

document.getElementById("current-year").textContent = new Date().getFullYear();
