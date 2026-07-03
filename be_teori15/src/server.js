import app from "./app.js";
import sequelize from "./config/database.js";

const PORT = process.env.PORT || 3000;

sequelize
  .authenticate()
  .then(() => console.log("Koneksi database berhasil"))
  .catch((err) => console.error("Gagal konek ke database:", err.message));

app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});
