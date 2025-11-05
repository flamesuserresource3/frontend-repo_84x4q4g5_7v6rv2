import { ShieldCheck, QrCode, FileText, Users, History, Printer, TrendingUp } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Approval Terstruktur",
    desc: "Alur persetujuan oleh Pengawas sesuai section, lengkap dengan catatan dan status."
  },
  {
    icon: QrCode,
    title: "QR Code Unik",
    desc: "Setiap izin yang disetujui otomatis memiliki QR untuk verifikasi lapangan."
  },
  {
    icon: FileText,
    title: "Cetak Surat Izin",
    desc: "Format siap cetak dengan logo, detail izin, tanda tangan digital, dan QR."
  },
  {
    icon: Users,
    title: "Role & Akses",
    desc: "Superadmin, User, Pengawas, dan Security dengan akses masing-masing."
  },
  {
    icon: History,
    title: "Audit Trail Lengkap",
    desc: "Histori login, approval, dan verifikasi tercatat otomatis."
  },
  {
    icon: TrendingUp,
    title: "Laporan & Statistik",
    desc: "Filter per periode/section/status dan ekspor ke Excel/PDF."
  },
  {
    icon: Printer,
    title: "Siap Operasional",
    desc: "Didesain untuk proses di lapangan: cepat, ringkas, dan mobile-friendly."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Fitur Utama</h2>
          <p className="mt-2 text-slate-600">Semua yang Anda perlukan untuk memastikan izin barang tercatat, aman, dan terverifikasi.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, idx) => (
            <div key={idx} className="group rounded-xl border bg-white p-5 shadow-sm hover:shadow transition-shadow">
              <div className="h-10 w-10 rounded-md bg-indigo-600 text-white grid place-items-center shadow-sm">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
