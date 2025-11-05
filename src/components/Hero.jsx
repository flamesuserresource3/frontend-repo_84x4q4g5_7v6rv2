import { ArrowRight, ShieldCheck } from "lucide-react";
import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 to-white" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white px-3 py-1 text-indigo-700 text-xs font-medium shadow-sm">
              <ShieldCheck className="h-4 w-4" />
              Keamanan & Kepatuhan Terjaga
            </div>
            <h1 className="mt-4 text-3xl sm:text-5xl font-bold tracking-tight text-slate-900">
              Aplikasi Izin Membawa Barang untuk proses yang cepat, aman, dan terdokumentasi
            </h1>
            <p className="mt-4 text-slate-600 text-base sm:text-lg">
              Ajukan izin, lakukan approval, cetak dengan QR, dan verifikasi di lapangan. Semua
              tercatat otomatis dalam audit trail.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <button className="inline-flex items-center gap-2 rounded-md bg-slate-900 px-4 py-2.5 text-sm font-medium text-white shadow hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-500">
                Mulai Ajukan
                <ArrowRight className="h-4 w-4" />
              </button>
              <a href="#features" className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50">
                Lihat Fitur
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-xl border bg-white shadow-sm overflow-hidden">
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-white/30 to-transparent" />
              <Spline
                scene="https://prod.spline.design/4HIlOdlXYYkZW66z/scene.splinecode"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-lg bg-indigo-50 border border-indigo-100 p-4 flex flex-col justify-center">
                <p className="text-sm font-semibold text-indigo-900">Approval Cepat</p>
                <p className="text-xs text-indigo-700 mt-1">Supervisor menyetujui/menolak secara real-time.</p>
              </div>
              <div className="rounded-lg bg-emerald-50 border border-emerald-100 p-4 flex flex-col justify-center">
                <p className="text-sm font-semibold text-emerald-900">Verifikasi QR</p>
                <p className="text-xs text-emerald-700 mt-1">Security memindai QR untuk validasi izin.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
