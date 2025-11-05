import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Workflow from "./components/Workflow";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Workflow />

        {/* Roles preview section (anchor for navbar) */}
        <section id="roles" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Peran Pengguna</h2>
              <p className="mt-2 text-slate-600">Empat peran inti dengan akses yang jelas dan terukur.</p>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-xl border bg-slate-50 p-5">
                <p className="font-semibold">Superadmin</p>
                <p className="mt-1 text-sm text-slate-600">Kelola user, section, hak akses, dan laporan.</p>
              </div>
              <div className="rounded-xl border bg-slate-50 p-5">
                <p className="font-semibold">User (Pemohon)</p>
                <p className="mt-1 text-sm text-slate-600">Ajukan izin dan pantau statusnya.</p>
              </div>
              <div className="rounded-xl border bg-slate-50 p-5">
                <p className="font-semibold">Pengawas</p>
                <p className="mt-1 text-sm text-slate-600">Verifikasi & beri persetujuan/penolakan.</p>
              </div>
              <div className="rounded-xl border bg-slate-50 p-5">
                <p className="font-semibold">Security</p>
                <p className="mt-1 text-sm text-slate-600">Pindai QR dan tandai verifikasi lapangan.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-sm text-slate-600 flex items-center justify-between">
          <p>© {new Date().getFullYear()} Izin Membawa Barang. All rights reserved.</p>
          <p className="hidden sm:block">Didesain untuk kecepatan, keamanan, dan kepatuhan operasional.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
