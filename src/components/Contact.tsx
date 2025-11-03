export default function Contact() {
	return (
		<section id="contact" className="space-y-6">
			<h3 className="text-sm uppercase tracking-wider font-medium text-zinc-500 dark:text-zinc-300">
				Contact
			</h3>

			<p className="text-zinc-800 dark:text-zinc-200">
				Jika ingin berdiskusi, bekerja sama dalam proyek, atau membutuhkan informasi terkait pemrograman berbasis framework,
				silakan hubungi saya melalui kontak di bawah ini.
			</p>

			<div className="flex gap-x-6 mt-6 flex-col md:flex-row gap-y-3">

				{/* ✅ Gmail Direct */}
				<a
					href="https://mail.google.com/mail/u/0/#search/dillasardilla387%40gmail.com"
					target="_blank"
					className="flex items-center gap-x-2.5 group transition-all duration-300 hover:scale-110 hover:-translate-y-[2px]"
				>
					<svg
						width="28"
						height="22"
						viewBox="0 0 48 48"
						className="transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(255,0,0,0.4)] group-hover:rotate-2"
					>
						<path fill="#EA4335" d="M4 12v24c0 2.2 1.8 4 4 4h6V20L4 12z" />
						<path fill="#34A853" d="M44 12v24c0 2.2-1.8 4-4 4h-6V20l10-8z" />
						<path fill="#FBBC05" d="M4 12l20 16 20-16-20-8-20 8z" />
						<path fill="#4285F4" d="M30 40H18V26l12 10V40z" />
					</svg>
					<span className="text-zinc-600 dark:text-zinc-300 group-hover:text-red-600 transition font-medium">
						dillasardilla387@gmail.com
					</span>
				</a>

				{/* ✅ YouTube */}
				<a
					href="https://www.youtube.com/@sardilla05"
					target="_blank"
					className="flex items-center gap-x-2.5 group transition-all duration-300 hover:scale-110 hover:-translate-y-[2px]"
				>
					<svg
						width="26"
						height="26"
						viewBox="0 0 24 24"
						className="transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(255,0,0,0.5)] group-hover:-rotate-2"
					>
						<path fill="#FF0000" d="M19.6 7.2c-.2-.8-.8-1.4-1.6-1.6C16.4 5.2 12 5.2 12 5.2s-4.4 0-6 .4c-.8.2-1.4.8-1.6 1.6C4 8.8 4 12 4 12s0 3.2.4 4.8c.2.8.8 1.4 1.6 1.6 1.6.4 6 .4 6 .4s4.4 0 6-.4c.8-.2 1.4-.8 1.6-1.6.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8z"/>
						<path fill="#FFF" d="M10 15.5v-7l6 3.5-6 3.5z"/>
					</svg>
					<span className="text-zinc-600 dark:text-zinc-300 group-hover:text-red-500 transition font-medium">
						YouTube
					</span>
				</a>

				{/* ✅ Instagram Original */}
				<a
					href="https://www.instagram.com/sardilllaaaaaaa?igsh=MXhsNzVyejB3ejB5Zw=="
					target="_blank"
					className="flex items-center gap-x-2.5 group transition-all duration-300 hover:scale-110 hover:-translate-y-[2px]"
				>
					<svg
						width="26"
						height="26"
						viewBox="0 0 24 24"
						className="transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(255,0,150,0.5)] group-hover:rotate-1"
					>
						<path fill="#E1306C" d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.8-.9a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z"/>
					</svg>
					<span className="text-zinc-600 dark:text-zinc-300 group-hover:text-pink-500 transition font-medium">
						Instagram
					</span>
				</a>
			</div>
		</section>
	);
}
