const SUPABASE_URL = "https://xxxxxxxx.supabase.co";
const SUPABASE_KEY = "ey..."; // anon public key buraya

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
