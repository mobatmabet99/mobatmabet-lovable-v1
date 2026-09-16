import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Instagram, MessageCircle, ShieldCheck, Sparkles, Truck } from "lucide-react";

import collectionGrid from "@/assets/collection-grid.jpg";
import customerPortraits from "@/assets/customer-portraits.jpg";
import heroEditorial from "@/assets/hero-editorial.jpg";
import lookbookAccessories from "@/assets/lookbook-accessories.jpg";
import lookbookStreet from "@/assets/lookbook-street.jpg";
import lookbookTexture from "@/assets/lookbook-texture.jpg";
import promoStack from "@/assets/promo-stack.jpg";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "mobatmabet Store | Fashion & Apparel Premium" },
      { name: "description", content: "Temukan koleksi fashion premium mobatmabet Store, promo terbatas, lookbook terbaru, dan layanan belanja cepat via WhatsApp." },
      { property: "og:title", content: "mobatmabet Store | Fashion & Apparel Premium" },
      { property: "og:description", content: "Koleksi fashion modern yang ringan dipakai dan meninggalkan kesan." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const products = [
  { name: "Rajut Cloud Knit", type: "Rajut premium", price: "Rp 420K", position: "object-left-top" },
  { name: "Celana Lume Wide", type: "Wide leg", price: "Rp 350K", position: "object-right-top" },
  { name: "Tote Glaze", type: "Aksesori", price: "Rp 180K", position: "object-left-bottom" },
  { name: "Jaket Aero Shell", type: "Outerwear", price: "Rp 520K", position: "object-right-bottom" },
];

const testimonials = [
  { quote: "Kualitasnya benar-benar terasa. Rajutnya lembut dan warnanya persis seperti di foto.", name: "Nadia R.", city: "Jakarta", position: "object-left" },
  { quote: "Jaket Aero nyaman dipakai seharian. Kemasannya rapi dan sampai jauh lebih cepat dari perkiraan.", name: "Baskoro A.", city: "Bandung", position: "object-center" },
  { quote: "Gaya minimal yang tetap standout. Celana Lume Wide langsung jadi favorit baru saya.", name: "Sari M.", city: "Surabaya", position: "object-right" },
];

function Index() {
  return (
    <main className="scene min-h-screen overflow-hidden font-sans text-foreground">
      <header className="relative z-20 px-4 pt-4 sm:px-6 sm:pt-6">
        <nav className="glass mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 sm:px-5" aria-label="Navigasi utama">
          <a href="#top" className="flex items-center gap-2.5" aria-label="mobatmabet Store">
            <span className="grid size-9 place-items-center rounded-xl bg-primary font-display text-sm font-bold text-primary-foreground">M</span>
            <span className="font-display text-lg font-semibold">mobatmabet</span>
            <span className="hidden rounded-full bg-accent-soft px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-accent sm:inline">Store</span>
          </a>
          <div className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
            <a href="#koleksi" className="transition-colors hover:text-foreground">Koleksi</a>
            <a href="#lookbook" className="transition-colors hover:text-foreground">Lookbook</a>
            <a href="#promo" className="transition-colors hover:text-foreground">Promo</a>
            <a href="#tentang" className="transition-colors hover:text-foreground">Tentang</a>
          </div>
          <Button asChild className="h-10 rounded-xl px-4 shadow-none">
            <a href="#koleksi">Belanja</a>
          </Button>
        </nav>
      </header>

      <section id="top" className="relative px-4 pb-10 pt-12 sm:px-6 lg:pt-14">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="glass-soft inline-flex rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent">Drop 07 · Koleksi Musim</span>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.02] sm:text-6xl md:text-7xl">
              Pakai cahaya,<br /><span className="title-shimmer italic">tinggal kesan.</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">Apparel dan aksesori premium untuk gaya yang tenang namun tegas. Ringan di kulit, abadi di lemari.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="h-12 rounded-xl px-6 shadow-none"><a href="#koleksi">Belanja Koleksi <ArrowRight /></a></Button>
              <Button asChild variant="outline" size="lg" className="glass-soft h-12 rounded-xl border-transparent px-6 shadow-none"><a href="#lookbook">Lihat Lookbook</a></Button>
            </div>
            <div className="mt-9 flex flex-wrap gap-8">
              {[["120+", "Item pilihan"], ["4.9/5", "Rating pembeli"], ["48 jam", "Pengiriman"]].map(([value, label]) => (
                <div key={label}><div className="font-display text-2xl font-semibold">{value}</div><div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div></div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="glass relative rounded-3xl p-3">
              <img src={heroEditorial} alt="Model mengenakan koleksi rajut premium mobatmabet Store" width={1088} height={1328} fetchPriority="high" className="aspect-[4/5] w-full rounded-2xl object-cover" />
              <div className="glass-soft absolute -bottom-4 left-4 rounded-2xl px-4 py-3 sm:-left-4 sm:bottom-8">
                <div className="text-[10px] font-semibold uppercase tracking-widest text-accent">Terbaru</div>
                <div className="text-sm font-semibold">Jaket Oversized Aero</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="promo" className="scroll-mt-6 px-4 py-8 sm:px-6">
        <div className="glass mx-auto max-w-6xl overflow-hidden rounded-3xl">
          <div className="grid md:grid-cols-3">
            <div className="flex flex-col justify-between gap-5 p-7 sm:p-9 md:col-span-2">
              <div className="flex flex-wrap items-center gap-3"><span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold uppercase tracking-widest text-accent">Promo terbatas</span><span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Berakhir 2 hari lagi</span></div>
              <div><h2 className="font-display text-4xl font-semibold md:text-5xl">Diskon hingga 30%</h2><p className="mt-3 max-w-md text-muted-foreground">untuk seluruh koleksi unggulan. Gunakan kode <strong className="text-foreground">MOBAT30</strong> sebelum stok habis.</p></div>
              <Button asChild className="h-12 w-fit rounded-xl bg-accent px-6 text-accent-foreground shadow-none hover:bg-accent/90"><a href="#kontak">Klaim Sekarang <ArrowRight /></a></Button>
            </div>
            <img src={promoStack} alt="Tumpukan pakaian premium untuk promo terbatas" width={816} height={816} loading="lazy" className="aspect-square h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section id="koleksi" className="scroll-mt-6 px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-7 flex items-end justify-between"><div><span className="eyebrow">Belanja</span><h2 className="mt-2 font-display text-4xl font-semibold">Koleksi Unggulan</h2></div><a href="#kontak" className="hidden text-sm font-semibold text-muted-foreground hover:text-foreground sm:block">Lihat semua →</a></div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => <article key={product.name} className="glass-soft group rounded-2xl p-3">
              <div className="aspect-[4/5] overflow-hidden rounded-xl"><img src={collectionGrid} alt={product.name} width={1600} height={1200} loading="lazy" className={`h-[200%] w-[200%] max-w-none object-cover transition-transform duration-500 group-hover:scale-[2.04] ${product.position}`} /></div>
              <div className="px-1.5 pt-3"><div className="flex items-start justify-between gap-2"><h3 className="text-sm font-semibold">{product.name}</h3><span className="shrink-0 text-sm font-semibold text-accent">{product.price}</span></div><p className="mt-1 text-xs text-muted-foreground">{product.type}</p></div>
            </article>)}
          </div>
        </div>
      </section>

      <section id="lookbook" className="scroll-mt-6 px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-6xl"><span className="eyebrow">Lookbook</span><h2 className="mt-2 font-display text-4xl font-semibold">Momen Gaya</h2>
          <div className="mt-7 grid gap-5 md:grid-cols-3">
            {[[lookbookStreet, "Gaya streetwear berlapis dalam warna netral"], [lookbookTexture, "Detail tekstur kain premium"], [lookbookAccessories, "Aksesori koleksi mobatmabet Store"]].map(([src, alt], index) => <figure key={alt} className={index === 1 ? "md:mt-10" : ""}><img src={src} alt={alt} width={1088} height={1328} loading="lazy" className="aspect-[3/4] w-full rounded-3xl object-cover" /></figure>)}
          </div>
        </div>
      </section>

      <section id="tentang" className="scroll-mt-6 px-4 py-12 sm:px-6">
        <div className="glass mx-auto max-w-6xl rounded-3xl p-7 sm:p-10 md:p-12"><span className="eyebrow">Nilai Brand</span><h2 className="mt-2 max-w-xl font-display text-4xl font-semibold">Dibuat dengan niat, dipakai dengan tenang.</h2>
          <div className="mt-9 grid gap-6 md:grid-cols-3">
            {[[Sparkles, "Kualitas Bahan", "Kain terpilih yang lembut, tahan lama, dan nyaman dipakai setiap hari."], [Truck, "Pengiriman Cepat", "Pesanan diperiksa dan dikirim dengan cepat ke seluruh Indonesia."], [ShieldCheck, "Jaminan Original", "Setiap produk dijamin original dan melalui pemeriksaan kualitas."]].map(([Icon, title, copy]) => { const ValueIcon = Icon as typeof Sparkles; return <article key={String(title)} className="glass-soft rounded-2xl p-6"><ValueIcon className="size-5 text-accent" /><h3 className="mt-4 font-display text-xl font-semibold">{String(title)}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{String(copy)}</p></article>; })}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-6xl"><span className="eyebrow">Testimoni</span><h2 className="mt-2 font-display text-4xl font-semibold">Kata Pelanggan</h2>
          <div className="mt-7 grid gap-5 md:grid-cols-3">{testimonials.map((item) => <figure key={item.name} className="glass-soft rounded-2xl p-6"><div className="tracking-widest text-accent" aria-label="5 dari 5 bintang">★★★★★</div><blockquote className="mt-3 min-h-20 text-sm leading-relaxed">“{item.quote}”</blockquote><figcaption className="mt-5 flex items-center gap-3"><img src={customerPortraits} alt={`Foto ${item.name}`} width={1536} height={512} loading="lazy" className={`size-11 rounded-full object-cover ${item.position}`} /><div><div className="text-sm font-semibold">{item.name}</div><div className="text-xs text-muted-foreground">{item.city}</div></div></figcaption></figure>)}</div>
        </div>
      </section>

      <footer id="kontak" className="px-4 pb-10 pt-12 sm:px-6 sm:pb-16">
        <div className="glass mx-auto max-w-6xl rounded-3xl p-7 sm:p-10 md:p-12">
          <div className="grid items-center gap-8 md:grid-cols-2"><div><h2 className="font-display text-4xl font-semibold md:text-5xl">Siap upgrade gaya kamu?</h2><p className="mt-4 max-w-md text-muted-foreground">Chat tim kami untuk konsultasi ukuran, ketersediaan stok, dan promo terbaru.</p></div>
            <div className="flex flex-col gap-3 md:items-end"><Button asChild size="lg" className="h-13 rounded-xl px-6 shadow-none"><a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer"><MessageCircle /> Chat via WhatsApp</a></Button><div className="flex gap-3"><Button asChild variant="outline" className="glass-soft h-11 rounded-xl border-transparent shadow-none"><a href="https://instagram.com" target="_blank" rel="noreferrer"><Instagram /> Instagram</a></Button><Button asChild variant="outline" className="glass-soft h-11 rounded-xl border-transparent shadow-none"><a href="https://tiktok.com" target="_blank" rel="noreferrer">TikTok</a></Button></div></div>
          </div>
          <div className="mt-10 flex flex-col justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row"><span>© 2026 mobatmabet Store. Semua hak dilindungi.</span><span>Fashion yang meninggalkan kesan.</span></div>
        </div>
      </footer>
    </main>
  );
}