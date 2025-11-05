import { LogIn, FilePlus2, CheckCircle2, Stamp, QrCode, ShieldCheck } from "lucide-react";

const steps = [
  {
    icon: LogIn,
    title: "Login",
    desc: "Pengguna masuk sesuai peran. Semua login tercatat otomatis.",
  },
  {
    icon: FilePlus2,
    title: "Pengajuan Izin",
    desc: "User mengisi detail barang, tujuan, dan waktu keluar/masuk.",
  },
  {
    icon: Stamp,
    title: "Approval Pengawas",
    desc: "Pengawas menyetujui/menolak dengan catatan. Jika disetujui, status menjadi Approved.",
  },
  {
    icon: QrCode,
    title: "Cetak dengan QR",
    desc: "Surat izin siap cetak dengan QR unik untuk verifikasi lapangan.",
  },
  {
    icon: ShieldCheck,
    title: "Verifikasi Security",
    desc: "Security memindai QR dan menandai status menjadi Verified.",
  },
  {
    icon: CheckCircle2,
    title: "Selesai",
    desc: "Semua aktivitas tersimpan dalam audit trail dan siap dilaporkan.",
  },
];

export default function Workflow() {
  return (
    <section id="workflow" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Alur Kerja</h2>
          <p className="mt-2 text-slate-600">Dirancang untuk efisiensi dari pengajuan hingga verifikasi lapangan.</p>
        </div>

        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, idx) => (
            <li key={idx} className="relative rounded-xl border bg-white p-5 shadow-sm">
              <div className="absolute -top-3 -left-3 h-10 w-10 rounded-lg bg-indigo-600 text-white grid place-items-center shadow-md">
                <s.icon className="h-5 w-5" />
              </div>
              <div className="pl-2">
                <p className="font-semibold text-slate-900">{idx + 1}. {s.title}</p>
                <p className="mt-1 text-sm text-slate-600">{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
