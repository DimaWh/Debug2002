document.addEventListener('DOMContentLoaded', function() {
  const phones = [
    {
      id: "iphone15",
      name: "iPhone 15",
      image: "https://darwin.md/media/563540/conversions/darwin-apple-iphone-15-128-gb-black-314388-preview-webp.png",
      specs: [
        "Procesor: A16 Bionic (4nm)",
        "RAM: 6GB LPDDR5",
        "Stocare: 128GB/256GB NVMe",
        "Ecran: 6.1\" Super Retina XDR",
        "Camere: 48MP + 12MP",
        "Baterie: 3349 mAh (20 ore video)",
        "Rezistență: IP68",
        "Sistem: iOS 17"
      ],
      buyLink: "https://darwin.md/apple-iphone-15-128-gb-single-sim-5g-black.html"
    },
    {
      id: "iphone14",
      name: "iPhone 14",
      image: "https://iplanet.one/cdn/shop/files/iPhone_14_Blue_PDP_Image_Position-1A__WWEN.jpg?v=1691142210&width=1920",
      specs: [
        "Procesor: A15 Bionic (5nm)",
        "RAM: 6GB LPDDR4X",
        "Stocare: 128GB/256GB/512GB",
        "Ecran: 6.1\" Super Retina XDR",
        "Camere: 12MP dual",
        "Baterie: 3279 mAh (20 ore video)",
        "Rezistență: IP68",
        "Sistem: iOS 16"
      ],
      buyLink: "https://darwin.md/apple-iphone-14-6-gb-256-gb-single-sim-5g-midnight.html"
    },
    {
      id: "iphone13",
      name: "iPhone 13",
      image: "https://m.media-amazon.com/images/I/71MKNCEgE6L.jpg",
      specs: [
        "Procesor: A15 Bionic (5nm)",
        "RAM: 4GB LPDDR4X",
        "Stocare: 128GB/256GB/512GB",
        "Ecran: 6.1\" Super Retina XDR",
        "Camere: 12MP dual",
        "Baterie: 3227 mAh (19 ore video)",
        "Rezistență: IP68",
        "Sistem: iOS 15"
      ],
      buyLink: "https://darwin.md/apple-iphone-13-4-gb-128-gb-midnight.html"
    },
    {
      id: "samsung24",
      name: "Samsung Galaxy S24",
      image: "https://image-us.samsung.com/us/smartphones/galaxy-s24/all-gallery/01_E1_OnlineExclusive_SapphireBlue_Lockup_1600x1200.jpg?$default-400-jpg$",
      specs: [
        "Procesor: Exynos 2400",
        "RAM: 8GB LPDDR5X",
        "Stocare: 128GB/256GB",
        "Ecran: 6.2\" Dynamic AMOLED",
        "Camere: 50MP + 12MP + 10MP",
        "Baterie: 4000 mAh",
        "Rezistență: IP68",
        "Sistem: Android 14"
      ],
      buyLink: "https://darwin.md/smartphone-samsung-galaxy-s24-fe-s721-8-gb-256-gb-dual-sim-5g-blue.html"
    },
    {
      id: "samsungA55",
      name: "Samsung Galaxy A55",
      image: "https://img.global.news.samsung.com/uk/wp-content/uploads/2024/03/Galaxy-A55-5G-and-A35-5G_main2.jpg",
      specs: [
        "Procesor: Exynos 1480",
        "RAM: 8GB LPDDR5",
        "Stocare: 128GB/256GB",
        "Ecran: 6.6\" Super AMOLED",
        "Camere: 50MP + 12MP + 5MP",
        "Baterie: 5000 mAh",
        "Rezistență: IP67",
        "Sistem: Android 14"
      ],
      buyLink: "https://darwin.md/samsung-galaxy-a55-a556-8-gb-128-gb-dual-sim-5g-awesome-ice-blue.html"
    },
    {
      id: "pixel8",
      name: "Google Pixel 8",
      image: "https://lh3.googleusercontent.com/KaLIFYVg9298b8jv33H3pagRaAz4lCQxrQz-goMEsiTuCmUf2Ood9ktkzgjpotkMuRcAMimOV2RfN7vBZVmnInf5wcwUNsRZpw",
      specs: [
        "Procesor: Tensor G3",
        "RAM: 8GB LPDDR5",
        "Stocare: 128GB/256GB",
        "Ecran: 6.2\" OLED",
        "Camere: 50MP + 12MP",
        "Baterie: 4575 mAh",
        "Rezistență: IP68",
        "Sistem: Android 14"
      ],
      buyLink: "https://darwin.md/google-pixel-8-pro-8-gb-128-gb-single-sim-5gobsidian-black.html"
    }
  ];

  function renderCatalog() {
    const catalog = document.querySelector('.phone-catalog');
    const detailsContainer = document.querySelector('.catalog-section');

    catalog.innerHTML = '<h3>Catalog Telefoane</h3>';
    detailsContainer.querySelectorAll('.phone-details').forEach(el => el.remove());

    phones.forEach(phone => {
      const phoneItem = document.createElement('div');
      phoneItem.className = 'phone-item';
      phoneItem.dataset.phone = phone.id;
      phoneItem.innerHTML = `
        <img src="${phone.image}" alt="${phone.name}" loading="lazy">
        <span>${phone.name}</span>
      `;
      catalog.appendChild(phoneItem);

      const details = document.createElement('div');
      details.className = 'phone-details';
      details.id = `${phone.id}-details`;
      details.innerHTML = `
        <h3>${phone.name}</h3>
        <div class="phone-details-specs">
          <ul class="features-list">
            ${phone.specs.map(spec => `<li>${spec}</li>`).join('')}
          </ul>
          <a href="${phone.buyLink}" class="buy-btn" target="_blank">Cumpără acum</a>
        </div>
      `;
      detailsContainer.appendChild(details);
    });

    initEvents();
    loadLastSelection();
  }

  function showPhoneDetails(phoneId) {
    const details = document.getElementById(`${phoneId}-details`);
    if (!details) return;

    document.querySelectorAll('.phone-details').forEach(d => d.classList.remove('active'));
    details.classList.add('active');

    document.querySelectorAll('.phone-item').forEach(item => {
      item.classList.remove('active');
      if (item.dataset.phone === phoneId) item.classList.add('active');
    });

    localStorage.setItem('lastViewedPhone', phoneId);
  }

  function initEvents() {
    document.querySelectorAll('.phone-item').forEach(item => {
      item.addEventListener('click', function() {
        showPhoneDetails(this.dataset.phone);
      });
    });

    const form = document.querySelector('.contact-form form');
    if (form) {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = {
          name: this.querySelector('input[type="text"]').value,
          email: this.querySelector('input[type="email"]').value,
          message: this.querySelector('textarea').value
        };
        localStorage.setItem('contactFormData', JSON.stringify(formData));
        alert('Mesaj salvat! Vei fi contactat în curând.');
        this.reset();
      });

      const savedData = localStorage.getItem('contactFormData');
      if (savedData) {
        const data = JSON.parse(savedData);
        form.querySelector('input[type="text"]').value = data.name || '';
        form.querySelector('input[type="email"]').value = data.email || '';
        form.querySelector('textarea').value = data.message || '';
      }
    }
  }

  function loadLastSelection() {
    const lastPhone = localStorage.getItem('lastViewedPhone');
    if (lastPhone) {
      showPhoneDetails(lastPhone);
    } else if (phones.length > 0) {
      showPhoneDetails(phones[0].id);
    }
  }

  renderCatalog();
  console.log('Salut, lume!');
});