# Panduan Deployment Render (Manual Web Service)

Dokumen ini berisi panduan teknis langkah demi langkah untuk melakukan deployment aplikasi **PT Adto Cipta Usaha Mandiri** ke Render tanpa menggunakan Blueprint, melainkan dengan membuat dua Web Service secara manual.

---

## 1. Deploy Frontend (Next.js)

Render mendukung Node.js secara native, sehingga Anda tidak perlu menggunakan Docker untuk Frontend.

*   **Tipe Service**: Web Service
*   **Environment**: `Node`
*   **Root Directory**: `frontend`
*   **Build Command**: `npm install && npm run build`
*   **Start Command**: `npm start`
*   **Auto-Deploy**: Yes

### Environment Variables (Frontend)
Tambahkan variabel berikut pada tab *Environment* di dashboard Render:
| Key | Value (Contoh) |
| :--- | :--- |
| `NODE_ENV` | `production` |
| `NEXT_PUBLIC_API_URL` | `https://adto-backend.onrender.com/api` (Ganti dengan URL backend Anda nanti) |
| `NEXT_PUBLIC_APP_URL` | `https://adto-frontend.onrender.com` (Ganti dengan URL frontend Anda) |

---

## 2. Deploy Backend (Laravel API)

Render **tidak memiliki environment native untuk PHP**. Oleh karena itu, kita **wajib menggunakan Docker** untuk mendeploy Backend (menggunakan `Dockerfile` khusus Render yang sudah saya buatkan sebelumnya, yang berisi gabungan Nginx dan PHP-FPM).

*   **Tipe Service**: Web Service
*   **Environment**: `Docker`
*   **Root Directory**: `.` (Biarkan kosong atau isi dengan root project)
*   **Dockerfile Path**: `docker/render/Dockerfile.backend`
*   **Auto-Deploy**: Yes

> [!NOTE]
> File `docker/render/Dockerfile.backend` ini akan secara otomatis menjalankan perintah `composer install`, `php artisan optimize`, dan `php artisan migrate --force` setiap kali aplikasi di-deploy (melalui `entrypoint.sh`).

### Environment Variables (Backend)
Tambahkan variabel berikut pada tab *Environment* di dashboard Render:
| Key | Value (Contoh) |
| :--- | :--- |
| `APP_NAME` | `PT Adto Cipta Usaha Mandiri` |
| `APP_ENV` | `production` |
| `APP_DEBUG` | `false` |
| `APP_URL` | `https://adto-backend.onrender.com` (Ganti sesuai URL web service backend) |
| `FRONTEND_URL` | `https://adto-frontend.onrender.com` (Ganti sesuai URL web service frontend) |
| `APP_KEY` | *(Generate via `php artisan key:generate` di lokal lalu paste ke sini)* |
| `JWT_SECRET` | *(Generate secret key untuk otentikasi API)* |

---

## 3. Menghubungkan Database Eksternal

Karena Render Free tidak menyediakan Managed MySQL, Anda harus menggunakan layanan pihak ketiga seperti **Aiven**, **PlanetScale**, atau **TiDB Serverless**. Setelah Anda membuat database di sana, masukkan detailnya ke Web Service Backend:

| Key | Penjelasan |
| :--- | :--- |
| `DB_CONNECTION` | `mysql` |
| `DB_HOST` | *(URL host dari layanan DB eksternal Anda)* |
| `DB_PORT` | `3306` (atau port dari provider) |
| `DB_DATABASE` | *(Nama database)* |
| `DB_USERNAME` | *(Username database)* |
| `DB_PASSWORD` | *(Password database)* |

*(Catatan: Jangan mengubah `database.php`. Cukup masukkan variabel di atas melalui dashboard Render, karena konfigurasi Laravel sudah dinamis menggunakan `env()`).*

---

## 4. Konfigurasi Redis (Opsional / Fallback)

Jika Anda tidak menggunakan Redis (karena keterbatasan paket Free), Anda dapat melakukan fallback dengan cara mengatur Environment Variables pada **Backend** sebagai berikut:

| Key | Value | Efek |
| :--- | :--- | :--- |
| `CACHE_STORE` | `file` | Menyimpan cache di disk container (hilang saat restart, namun aman untuk Free) |
| `SESSION_DRIVER` | `file` | Menyimpan sesi sementara di disk |
| `QUEUE_CONNECTION` | `sync` | Mengeksekusi antrean langsung tanpa worker eksternal |

Jika Anda membuat instans **Free Redis** di Render, cukup ubah kembali ketiga value di atas menjadi `redis` dan tambahkan `REDIS_URL` dengan *Internal Connection String* yang diberikan oleh Render.

---

## 5. Validasi Menghubungkan Frontend dan Backend

1. **Deploy Backend terlebih dahulu** (Pastikan database sudah terhubung dan migrasi berhasil jalan otomatis via Docker entrypoint).
2. Salin URL backend yang diberikan oleh Render (misal: `https://adto-backend.onrender.com`).
3. **Deploy Frontend**, masukkan URL backend tersebut ke variabel `NEXT_PUBLIC_API_URL` dengan tambahan `/api` di ujungnya.
4. Jika API URL backend berubah, pastikan Anda menekan tombol **Manual Deploy -> Clear build cache & deploy** pada Frontend agar Next.js di-*build* ulang dengan variabel terbaru.
