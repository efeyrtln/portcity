document.addEventListener("DOMContentLoaded", () => {
  alert("PortCity Tanıtım Sitesine Hoş Geldiniz");

  // Menü etkileşimleri
  document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("mouseover", () => {
      link.style.color = "#00b4d8";
    });

    link.addEventListener("mouseout", () => {
      link.style.color = "";
    });

    link.addEventListener("click", () => {
      document.querySelectorAll("nav a").forEach(a => a.classList.remove("active"));
      link.classList.add("active");
    });
  });

  // Tema değiştir
  const themeBtn = document.getElementById("themeBtn");
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      document.body.classList.toggle("theme-dark");
    });
  }

  // Beğeni sayacı
  let likes = 0;
  const likeBtn = document.getElementById("likeBtn");
  if (likeBtn) {
    likeBtn.addEventListener("click", () => {
      likes++;
      document.getElementById("likeCount").textContent = likes;
    });
  }

  // Görsel büyütme
  const img = document.getElementById("mainImage");
  if (img) {
    img.addEventListener("click", () => {
      img.classList.toggle("large");
    });
  }

  // Aktivite listesi
  const activities = [
    "Tekne Turu",
    "Dalış Deneyimi",
    "Marina Restoranları",
    "Gün Batımı Yürüyüşü"
  ];

  const list = document.getElementById("activityList");
  if (list) {
    activities.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;

      const info = document.createElement("div");
      info.className = "activity-info";
      info.textContent = "→ PortCity koylarını keşfedin";

      li.addEventListener("mouseover", () => info.style.display = "block");
      li.addEventListener("mouseout", () => info.style.display = "none");

      li.appendChild(info);
      list.appendChild(li);
    });
  }

  // Form kontrol
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      if (!name || !email || !message) {
        alert("Lütfen tüm alanları doldurun");
      } else {
        alert("Mesajınız başarıyla gönderildi");
        form.reset();
      }
    });
  }
});
