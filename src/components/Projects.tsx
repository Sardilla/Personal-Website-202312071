"use client";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      img: "/cake dilla.jpg",
      title: "Cake & Pastry Product Showcase 🍰✨",
      date: "Created at October 2025",
      desc: "Website katalog cake & pastry dengan tampilan modern untuk memudahkan pelanggan memilih berbagai menu kue favorit. Dilengkapi fitur keranjang belanja dan detail harga.",
      link: "http://localhost/Delicia-by-Dilla",
      tags: [
        { name: "UI Design 🎨", color: "bg-pink-200 text-pink-800 dark:bg-pink-400 dark:text-white" },
        { name: "Web App 💻", color: "bg-purple-200 text-purple-800 dark:bg-purple-400 dark:text-white" },
        { name: "Portfolio 🗂️", color: "bg-yellow-200 text-yellow-800 dark:bg-yellow-400 dark:text-white" },
      ],
    },
    {
      img: "/PT sardilla.jpg",
      title: "Company Profile — PT Sardilla 🏢✨",
      date: "Created at Juni 2025",
      desc: "Website profil perusahaan modern yang menampilkan informasi bisnis, data perusahaan, lokasi, serta daftar produk & layanan PT Sardilla.",
      tags: [
        { name: "Bootstrap", color: "bg-blue-200 text-blue-800 dark:bg-blue-500 dark:text-white" },
        { name: "Company Profile", color: "bg-gray-200 text-gray-800 dark:bg-gray-500 dark:text-white" },
      ],
    },
    {
      img: "/electronics.jpg",
      title: "Dilla Electronics Store ⚡🛒",
      date: "Created at Juli 2025",
      desc: "Website e-commerce untuk toko elektronik dengan fitur kategori, promo, testimoni, blog, dan login pengguna.",
      link: "http://localhost:3000/index.html",
      tags: [
        { name: "React / Next.js ⚛️", color: "bg-blue-200 text-blue-800 dark:bg-blue-500 dark:text-white" },
        { name: "Tailwind CSS 🎨", color: "bg-indigo-200 text-indigo-800 dark:bg-indigo-500 dark:text-white" },
      ],
    },
    {
      img: "/toko-elektronik-cepat.jpg",
      title: "Online Furniture Catalog 🛋️✨",
      date: "Created at November 2025",
      desc: "Website katalog furniture minimalis dengan tampilan elegan, fitur filter kategori, wishlist, dan preview ruang menggunakan AR.",
      link: "http://localhost/Modul%204/tugas_javascript.html",
      tags: [
        { name: "Next.js ⚛️", color: "bg-green-200 text-green-800 dark:bg-green-500 dark:text-white" },
        { name: "UI/UX Modern 🖌️", color: "bg-yellow-200 text-yellow-800 dark:bg-yellow-500 dark:text-white" },
        { name: "E-commerce 🛍️", color: "bg-orange-200 text-orange-800 dark:bg-orange-500 dark:text-white" },
      ],
    },
  ];

  return (
    <section id="projects" className="space-y-4">
      <h3 className="text-3xl font-bold text-zinc-800 dark:text-zinc-100">
        Projects
      </h3>
      <p className="text-sm text-zinc-600 dark:text-zinc-300">
        Discover my journey through various creative and technical works.
      </p>

      {projects.map((project, i) => (
        <div
          key={i}
          onClick={() => project.link && window.open(project.link, "_blank")}
          className={`
            flex flex-col md:flex-row gap-8 border rounded-3xl p-5 dark:border-zinc-700 
            bg-white dark:bg-zinc-900 transition-all duration-300 
            hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)] hover:scale-[1.01] active:scale-[0.98]
            ${project.link ? "cursor-pointer" : "cursor-default"}
            relative group
          `}
        >
          {project.link && (
            <div className="absolute top-2 right-4 text-xs opacity-0 group-hover:opacity-100 transition bg-black/70 text-white px-2 py-1 rounded-full">
              🔗 Visit Website
            </div>
          )}

          <div className="w-full md:w-[650px] rounded-2xl overflow-hidden border bg-zinc-50 dark:bg-zinc-800 p-2">
            <div className="aspect-[4/2.1] w-full flex items-center justify-center rounded-xl overflow-hidden">
              <Image
                src={project.img}
                alt={project.title}
                width={1600}
                height={900}
                className="object-contain w-full h-full group-hover:scale-[1.03] transition duration-500"
              />
            </div>
          </div>

          <div className="w-full">
            <h2 className="text-2xl font-bold dark:text-white">{project.title}</h2>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-2">{project.date}</p>
            <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed mb-3">
              {project.desc}
            </p>

            <div className="flex gap-2 text-xs flex-wrap">
              {project.tags.map((tag, t) => (
                <span key={t} className={`px-2 py-1 rounded-full ${tag.color}`}>
                  {tag.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
