const SUPABASE_URL = "https://mpatvhzhxvuxvovoaqjo.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1wYXR2aHpoeHZ1eHZvdm9hcWpvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE0ODU0NDUsImV4cCI6MjA2NzA2MTQ0NX0.-E8yqGxvbFqwevgHxEEyQ00fTjByWtZTC-CB9kZ9zMI"; // anon public key buraya

const headers = {
  "apikey": SUPABASE_KEY,
  "Authorization": `Bearer ${SUPABASE_KEY}`,
  "Content-Type": "application/json"
};
function selectType(type) {
  const form = document.getElementById("kayitFormu");
  form.style.display = "block";

  if (type === "esnaf") {
    form.innerHTML = `
      <h2>Esnaf Kaydı</h2>
      <input type="text" placeholder="Dükkan Adı" required><br>
      <input type="text" placeholder="Konum" required><br>
      <input type="text" placeholder="Paket Türü" required><br>
      <input type="tel" placeholder="Telefon" required><br>
      <input type="password" placeholder="Şifre" required><br>
      <button type="submit">Kaydol</button>
    `;
  } else if (type === "kurye") {
    form.innerHTML = `
      <h2>Kurye Kaydı</h2>
      <input type="text" placeholder="Ad Soyad" required><br>
      <input type="tel" placeholder="Telefon" required><br>
      <input type="text" placeholder="Motor Bilgisi" required><br>
      <input type="password" placeholder="Şifre" required><br>
      <button type="submit">Kaydol</button>
    `;
  }
}
function kaydetEsnaf() {
  const inputs = document.querySelectorAll("#kayitFormu input");
  const veri = {
    dukan_adi: inputs[0].value,
    konum: inputs[1].value,
    paket_turu: inputs[2].value,
    telefon: inputs[3].value,
    sifre: inputs[4].value
  };

  fetch(`${SUPABASE_URL}/rest/v1/esnaflar`, {
    method: "POST",
    headers,
    body: JSON.stringify(veri)
  })
  .then(res => {
    if (res.ok) {
      alert("Esnaf kaydı başarılı!");
    } else {
      alert("Esnaf kaydı başarısız!");
    }
  });

  return false;
}

function kaydetKurye() {
  const inputs = document.querySelectorAll("#kayitFormu input");
  const veri = {
    isim: inputs[0].value,
    telefon: inputs[1].value,
    motor_bilgisi: inputs[2].value,
    sifre: inputs[3].value
  };

  fetch(`${SUPABASE_URL}/rest/v1/kuryeler`, {
    method: "POST",
    headers,
    body: JSON.stringify(veri)
  })
  .then(res => {
    if (res.ok) {
      alert("Kurye kaydı başarılı!");
    } else {
      alert("Kurye kaydı başarısız!");
    }
  });

  return false;
}
