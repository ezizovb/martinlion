// Инициализация EmailJS (замените на свои данные)
// Раскомментируйте и замените на ваш публичный ключ EmailJS:
emailjs.init("8fzgorCZriaixUv9X");

// Языковые настройки
let currentLang = localStorage.getItem("language") || "ru";

const translations = {
  ru: {
    nav: {
      about: "О нас",
      howToOrder: "Как заказать",
      catalog: "Каталоги",
    },
    banner: {
      title1: "Изысканные ароматы для вас",
      text1: "Откройте мир премиальной парфюмерии",
      title2: "Уникальные композиции",
      text2: "Каждый аромат рассказывает свою историю",
      title3: "Премиальное качество",
      text3: "Продукция от ведущих брендов",
    },
    about: {
      text: "Мы подготовили специальную коллекцию ароматов, собирая различные ароматы из каждого уголка мира. Для обеспечение максимальн прочного аромата мы отстаивали запах в специальных цистернах, в течение длительного времени. Приготовьтесь испытать новый парфгом!",
    },
    howToOrder: {
      title: "Как заказать",
      subtitle: "Всего три простых шага к покупке:",
      step1: {
        title: "Нажмите «Заказать»",
        text: "на понравившемся товаре.",
      },
      step2: {
        title: "Оставьте контакты.",
        text: "В появившемся окне введите имя и телефон. Мы гарантируем конфиденциальность ваших данных.",
      },
      step3: {
        title: "Мы на связи!",
        text: "Наш сотрудник перезвонит или напишет вам, чтобы подтвердить заказ и ответить на вопросы.",
      },
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
      noProducts: "Товары не найдены",
    },
    order: {
      title: "Оформление заказа",
      name: "Ваше имя",
      phone: "Телефон",
      submit: "Отправить заказ",
      success:
        "Спасибо за заказ, наш сотрудник свяжется с вами в ближайший момент",
      description: {
        before:
          "Любимый аромат в новом исполнении. Мастерски воссозданная композиция, вдохновленная ",
        after: ". Идентичные ноты, безупречная стойкость.",
      },
    },
    product: {
      order: "Заказать",
      loadMore: "Загрузить еще",
    },
    footer: {
      contacts: "Контакты",
      phone: "Телефон: +993(64)374964",
      address: "Адрес",
      workingHours: "Режим работы: Пн-Вс 10:00 - 22:00",
      social: "Социальные сети",
      rights: "Все права защищены.",
    },
  },
  en: {
    nav: {
      about: "Biz barada",
      howToOrder: "Nädip sargyt bermeli",
      catalog: "Katalog",
    },
    banner: {
      title1: "Siziň üçin nepis atyrlar",
      text1: "Premium atyrlar dünýäsini açyň",
      title2: "Üýtgeşik kompozisiýalar",
      text2: "Her bir atyr öz hekaýasyny aýdýar",
      title3: "Ýokary hilli",
      text3: "Diňe öňdebaryjy brendlerden original önümler",
    },
    about: {
      text: "Biz dünýäniň her bir künjeginden dürli ysly atyrlary ýygnap, ýörite atyr kolleksiýasyny taýýarladyk. Ysynyň mümkin boldugyça uzak wagtlap saklanmagy üçin, atyrlar ýörite gaplarda uzak wagtlap saklandy. Täze parfýumy duýmana taýýar boluň!",
    },
    howToOrder: {
      title: "Nädip sargyt bermeli",
      subtitle: "Satyn almak üçin bary-ýogy üç ýönekeý ädim:",
      step1: {
        title: '"Sargyt et" düwmesine basyň',
        text: "halaýan önümiňiziň üstünde.",
      },
      step2: {
        title: "Habarlaşmak üçin maglumatlaryňyzy giriziň.",
        text: "Açylan penjirede adyňyzy we telefon belgiňizi giriziň. Biz maglumatlaryňyzyň gizlinligini kepillendirýäris.",
      },
      step3: {
        title: "Biz siziň bilen habarlaşarys!",
        text: "Işgärimiz sargydy tassyklaýar we soraglaryňyza jogap bermek üçin size jaň eder ýa-da ýazar.",
      },
    },
    catalog: {
      title: "Katalog",
      searchPlaceholder: "Önümiň ady boýunça gözleg...",
      filters: "Kategoriýa süzgüçleri",
      all: "Hemmesi",
      male: "Erkekler üçin",
      female: "Zenanlar üçin",
      unisex: "Uniseks",
      popularBrands: "Meşhur brendler",
      noProducts: "Önüm tapylmady",
    },
    order: {
      title: "Sargyt bermek",
      name: "Siziň adyňyz",
      phone: "Telefon:",
      submit: "Sargydy iber",
      success:
        "Sargydyňyz üçin sag boluň, işgärimiz ýakyn wagtda siziň bilen habarlaşar",
      description: {
        before:
          "Täze görnüşde söýgüli atyr. Ustalyk bilen döredilen kompozisiýa,  ",
        after: ". -dan ylham alynyp. Deňi ýok notalar.",
      },
    },
    product: {
      order: "Sargyt et",
      loadMore: "Has köp ýükle",
    },
    footer: {
      contacts: "Habarlaşmak",
      phone: "Telefon: +993(64)374964",
      address: "Salgy",
      workingHours: "Iş wagty: Duş-Ýek 10:00 - 22:00",
      social: "Sosial torlar",
      rights: "Ähli hukuklar goralan.",
    },
  },
};

// Функция переключения языка
function switchLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("language", lang);
  document.documentElement.lang = lang;

  // Обновляем текст переключателя
  const langSwitchers = document.querySelectorAll(".lang-switcher");
  langSwitchers.forEach((switcher) => {
    switcher.textContent = lang === "ru" ? "TM" : "RU";
  });

  // Обновляем все элементы с data-i18n
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    const keys = key.split(".");
    let value = translations[lang];
    for (const k of keys) {
      value = value[k];
    }
    if (value) {
      element.textContent = value;
    }
  });

  // Обновляем placeholder
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.getAttribute("data-i18n-placeholder");
    const keys = key.split(".");
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

  // Обновляем описание в модальном окне заказа
  updateOrderModalDescription();
}

// Обновление динамического контента
function updateDynamicContent() {
  const orderBtns = document.querySelectorAll(".order-btn");
  orderBtns.forEach((btn) => {
    btn.textContent = translations[currentLang].product.order;
  });

  const loadMoreBtn = document.getElementById("loadMoreBtn");
  if (loadMoreBtn) {
    loadMoreBtn.textContent = translations[currentLang].product.loadMore;
  }
}

// Обновление описания в модальном окне заказа
function updateOrderModalDescription() {
  const descriptionElement = document.querySelector(
    ".order-modal-description p",
  );
  const productNameElement = document.getElementById("orderProductName");

  if (descriptionElement && productNameElement) {
    const productName = productNameElement.textContent;
    const translations_obj = translations[currentLang].order.description;

    // Обновляем текст, сохраняя имя товара
    descriptionElement.innerHTML =
      translations_obj.before +
      `<span class="order-modal-product-name" id="orderProductName">${productName}</span>` +
      translations_obj.after;
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

  // Цена товара
  const priceValue =
    typeof product.price === "number" && !isNaN(product.price)
      ? product.price
      : 150;
  const price = document.createElement("div");
  price.className = "product-price";
  price.textContent = `${priceValue} TMT`;

  const orderBtn = document.createElement("button");
  orderBtn.className = "order-btn";
  orderBtn.textContent = translations[currentLang].product.order;
  orderBtn.addEventListener("click", () => openOrderModal(product));

  info.appendChild(name);
  info.appendChild(id);
  info.appendChild(description);
  info.appendChild(price);
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

// Изображения для модального окна по категориям
// Замените пути на ваши изображения для каждой категории
const orderModalImages = {
  male: "./martinlion_male.png", // Изображение для мужской категории
  female: "./martinlion_female.png", // Изображение для женской категории
  unisex: "./martinlion_unisex.png", // Изображение для унисекс категории
};

// Открытие модального окна заказа
function openOrderModal(product) {
  document.getElementById("productId").value = product.id;

  // Устанавливаем имя товара и обновляем описание
  const productNameElement = document.getElementById("orderProductName");
  const descriptionElement = document.querySelector(
    ".order-modal-description p",
  );

  if (productNameElement && descriptionElement) {
    const translations_obj = translations[currentLang].order.description;
    productNameElement.textContent = product.name;

    // Обновляем текст описания с учетом текущего языка
    descriptionElement.innerHTML =
      translations_obj.before +
      `<span class="order-modal-product-name" id="orderProductName">${product.name}</span>` +
      translations_obj.after;
  }

  // Устанавливаем изображение в зависимости от категории
  const productImageElement = document.getElementById("orderProductImage");
  if (productImageElement) {
    const imagePath =
      orderModalImages[product.category] || orderModalImages.male; // Fallback на male если категория не найдена
    productImageElement.src = imagePath;
    productImageElement.alt = product.name;

    // Обработка ошибки загрузки изображения
    productImageElement.onerror = function () {
      console.warn(
        `Изображение не найдено: ${imagePath}. Пожалуйста, добавьте изображение для категории "${product.category}"`,
      );
    };
  }

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

    // Закрываем модальное окно через 9 секунды
    setTimeout(() => {
      closeOrderModal();
    }, 9000);
  } catch (error) {
    console.error("Ошибка отправки:", error);
    alert(
      currentLang === "ru"
        ? "Произошла ошибка при отправке заказа. Пожалуйста, попробуйте позже или свяжитесь с нами напрямую."
        : "Sargydyňyzy ibermekde näsazlyk ýüze çykdy.   Soňra ýene synanyşyň ýa-da göni bize ýüz tutuň.",
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
    const newLang = currentLang === "ru" ? "en" : "ru";
    switchLanguage(newLang);
  });
}

if (mobileLangSwitcher) {
  mobileLangSwitcher.addEventListener("click", () => {
    const newLang = currentLang === "ru" ? "en" : "ru";
    switchLanguage(newLang);
  });
}

// Инициализация
loadData();
switchLanguage(currentLang); // Применяем сохраненный язык

document.getElementById("current-year").textContent = new Date().getFullYear();
