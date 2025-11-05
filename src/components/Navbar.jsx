import { ShieldCheck, QrCode, FileText } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-40 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-indigo-600 flex items-center justify-center text-white shadow-sm">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <span className="font-semibold text-lg">Izin Membawa Barang</span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
            <a href="#features" className="hover:text-slate-900 transition-colors">Fitur</a>
            <a href="#workflow" className="hover:text-slate-900 transition-colors">Alur</a>
            <a href="#roles" className="hover:text-slate-900 transition-colors">Peran</a>
          </nav>

          <div className="flex items-center gap-2">
            <button className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-3.5 py-2 text-sm font-medium text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <QrCode className="h-4 w-4" />
              Scan QR
            </button>
            <button className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-3.5 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <FileText className="h-4 w-4" />
              Buat Izin
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
