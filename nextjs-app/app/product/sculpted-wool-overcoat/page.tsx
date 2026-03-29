'use client';

import { Heart, Search, ShoppingBag, User, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

type ProductImage = {
  id: string;
  src: string;
  alt: string;
};

type ColorOption = {
  name: string;
  value: string;
  className: string;
};

type LookItem = {
  id: string;
  name: string;
  price: string;
  image: string;
};

const productImages: ProductImage[] = [
  {
    id: 'hero',
    src: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=1200&q=80',
    alt: 'Sculpted Wool Overcoat in charcoal',
  },
  {
    id: 'detail-1',
    src: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80',
    alt: 'Editorial abstract detail image in warm tones',
  },
  {
    id: 'detail-2',
    src: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80',
    alt: 'Minimal accessory editorial still life',
  },
];

const portraitImage: ProductImage = {
  id: 'portrait',
  src: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1000&q=80',
  alt: 'Model wearing atelier styling',
};

const colors: ColorOption[] = [
  { name: 'Charcoal', value: 'charcoal', className: 'bg-zinc-700' },
  { name: 'Pearl', value: 'pearl', className: 'bg-zinc-200' },
  { name: 'Ink', value: 'ink', className: 'bg-zinc-900' },
];

const sizes = ['XS', 'S', 'M', 'L', 'XL'];

const accordionContent: Record<string, string> = {
  details:
    'Structured wool overcoat with hidden placket, architectural shoulder line, and precise longline silhouette. Designed for a modern wardrobe with seasonless presence.',
  care:
    'Shell: 90% wool, 10% cashmere. Lining: 100% viscose. Dry clean only with specialist care. Steam lightly and store on broad wooden hanger.',
  shipping:
    'Complimentary express shipping on domestic orders. Returns accepted within 14 days in original condition. Duties and taxes are calculated at checkout for international orders.',
};

const completeTheLook: LookItem[] = [
  {
    id: '1',
    name: 'Cashmere Turtleneck',
    price: '$390.00',
    image:
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: '2',
    name: 'Pleated Trousers',
    price: '$550.00',
    image:
      'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: '3',
    name: 'Chelsea Boots',
    price: '$680.00',
    image:
      'https://images.unsplash.com/photo-1605812860427-4024433a70fd?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: '4',
    name: 'Silk Scarf',
    price: '$220.00',
    image:
      'https://images.unsplash.com/photo-1601379327928-bedfaf9da2d0?auto=format&fit=crop&w=700&q=80',
  },
];

export default function ProductDetailPage() {
  const [selectedImage, setSelectedImage] = useState<ProductImage>(productImages[0]);
  const [selectedColor, setSelectedColor] = useState('charcoal');
  const [selectedSize, setSelectedSize] = useState('S');
  const [openAccordion, setOpenAccordion] = useState<string>('details');

  return (
    <div className="min-h-screen bg-neutral-50 text-zinc-900">
      <header className="sticky top-0 z-40 border-b border-zinc-200/80 bg-neutral-50/95 backdrop-blur">
        <div className="mx-auto flex h-16 w-full max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-10">
          <Link href="#" className="text-xl font-black tracking-tight">
            18 STUDIO
          </Link>

          <nav className="hidden items-center gap-8 text-[11px] font-semibold tracking-[0.16em] text-zinc-600 md:flex">
            {['HOME', 'SHOP', 'ORDERS', 'POLICIES'].map((item) => (
              <Link key={item} href="#" className="transition-colors hover:text-zinc-900">
                {item}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4 text-zinc-700">
            <button aria-label="Search" className="transition-colors hover:text-zinc-950">
              <Search className="h-4 w-4" />
            </button>
            <button aria-label="Account" className="transition-colors hover:text-zinc-950">
              <User className="h-4 w-4" />
            </button>
            <button aria-label="Bag" className="transition-colors hover:text-zinc-950">
              <ShoppingBag className="h-4 w-4" />
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-[1440px] px-4 pb-20 pt-6 sm:px-6 lg:px-10 lg:pt-10">
        <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10 xl:gap-14">
          <div>
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-zinc-100">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-cover transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 65vw"
                priority
              />
            </div>

            <div className="mt-3 grid grid-cols-2 gap-3">
              {productImages.slice(1).map((image) => (
                <button
                  key={image.id}
                  type="button"
                  onClick={() => setSelectedImage(image)}
                  className={`group relative aspect-square overflow-hidden border transition ${
                    selectedImage.id === image.id
                      ? 'border-zinc-800'
                      : 'border-zinc-200 hover:border-zinc-500'
                  }`}
                  aria-label={`View ${image.alt}`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 50vw, 30vw"
                  />
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setSelectedImage(portraitImage)}
              className={`mt-3 group relative block aspect-[3/4] w-full overflow-hidden border transition ${
                selectedImage.id === portraitImage.id
                  ? 'border-zinc-800'
                  : 'border-zinc-200 hover:border-zinc-500'
              }`}
              aria-label="View editorial styling image"
            >
              <Image
                src={portraitImage.src}
                alt={portraitImage.alt}
                fill
                className="object-cover transition duration-500 group-hover:scale-[1.02]"
                sizes="(max-width: 1024px) 100vw, 65vw"
              />
            </button>
          </div>

          <aside className="lg:pt-3">
            <p className="text-[11px] font-semibold tracking-[0.18em] text-zinc-500">
              ATELIER COLLECTION — NO. 04
            </p>
            <h1 className="mt-2 max-w-md text-4xl font-black leading-[0.95] tracking-tight sm:text-5xl">
              Sculpted Wool Overcoat
            </h1>
            <p className="mt-6 text-3xl font-medium tracking-tight">$1,250.00</p>

            <p className="mt-8 max-w-md text-sm leading-7 text-zinc-600">
              A definitive statement in architectural tailoring. This overcoat is crafted from
              double-faced Italian virgin wool, featuring structured shoulders and a clean concealed
              placket for a monolithic silhouette.
            </p>

            <div className="mt-8">
              <p className="text-[11px] font-semibold tracking-[0.16em] text-zinc-500">
                COLOR / {colors.find((c) => c.value === selectedColor)?.name.toUpperCase()}
              </p>
              <div className="mt-3 flex items-center gap-2">
                {colors.map((color) => (
                  <button
                    key={color.value}
                    type="button"
                    onClick={() => setSelectedColor(color.value)}
                    className={`h-7 w-7 rounded-full border transition ${color.className} ${
                      selectedColor === color.value
                        ? 'scale-105 border-zinc-900 ring-1 ring-zinc-900 ring-offset-2'
                        : 'border-zinc-300 hover:border-zinc-500'
                    }`}
                    aria-label={`Select ${color.name}`}
                  />
                ))}
              </div>
            </div>

            <div className="mt-8">
              <div className="flex items-center justify-between">
                <p className="text-[11px] font-semibold tracking-[0.16em] text-zinc-500">SIZE</p>
                <button className="text-[10px] font-semibold uppercase tracking-[0.14em] text-zinc-400 underline-offset-2 transition hover:text-zinc-700 hover:underline">
                  Size Guide
                </button>
              </div>

              <div className="mt-3 grid grid-cols-5 gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`h-10 border text-[11px] font-semibold tracking-[0.13em] transition ${
                      selectedSize === size
                        ? 'border-zinc-900 bg-zinc-900 text-white'
                        : 'border-zinc-300 text-zinc-700 hover:border-zinc-500'
                    }`}
                    aria-label={`Select size ${size}`}
                    aria-pressed={selectedSize === size}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 flex gap-2">
              <button className="h-12 flex-1 bg-black px-6 text-xs font-bold tracking-[0.16em] text-white transition hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2">
                ADD TO BAG
              </button>
              <button
                aria-label="Add to wishlist"
                className="grid h-12 w-12 place-items-center border border-zinc-300 text-zinc-700 transition hover:border-zinc-500 hover:text-zinc-900"
              >
                <Heart className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-8 divide-y divide-zinc-200 border-y border-zinc-200">
              {[
                ['details', 'PRODUCT DETAILS'],
                ['care', 'COMPOSITION & CARE'],
                ['shipping', 'SHIPPING & RETURNS'],
              ].map(([key, label]) => {
                const isOpen = openAccordion === key;
                return (
                  <div key={key}>
                    <button
                      type="button"
                      onClick={() => setOpenAccordion(isOpen ? '' : key)}
                      className="flex w-full items-center justify-between py-4 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="text-xs font-semibold tracking-[0.14em] text-zinc-700">{label}</span>
                      <ChevronDown
                        className={`h-4 w-4 text-zinc-500 transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <div
                      className={`grid overflow-hidden transition-all duration-300 ${
                        isOpen ? 'grid-rows-[1fr] pb-4' : 'grid-rows-[0fr]'
                      }`}
                    >
                      <p className="min-h-0 pr-5 text-sm leading-7 text-zinc-600">{accordionContent[key]}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </aside>
        </section>

        <section className="mt-16 border-t border-zinc-200 pt-12 lg:mt-24 lg:pt-14">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.18em] text-zinc-500">CURATED STYLING</p>
              <h2 className="mt-1 text-3xl font-black tracking-tight">COMPLETE THE LOOK</h2>
            </div>
            <Link
              href="#"
              className="text-[11px] font-semibold tracking-[0.16em] text-zinc-500 underline-offset-4 transition hover:text-zinc-900 hover:underline"
            >
              SHOP ALL ATELIER
            </Link>
          </div>

          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {completeTheLook.map((item) => (
              <article key={item.id} className="group">
                <div className="relative aspect-[4/5] overflow-hidden bg-zinc-100">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <h3 className="mt-3 text-[12px] font-semibold uppercase tracking-[0.12em] text-zinc-800 transition group-hover:text-black">
                  {item.name}
                </h3>
                <p className="mt-1 text-xs text-zinc-500">{item.price}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-200 bg-zinc-100/70">
        <div className="mx-auto grid w-full max-w-[1440px] gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-10">
          <div>
            <h3 className="text-sm font-bold tracking-[0.1em]">18 STUDIO</h3>
            <p className="mt-3 max-w-xs text-xs leading-6 text-zinc-500">
              A digital atelier specializing in curated modern essentials and architectural
              silhouettes for the contemporary wardrobe.
            </p>
          </div>

          <div>
            <h4 className="text-[11px] font-semibold tracking-[0.14em] text-zinc-500">INFORMATION</h4>
            <ul className="mt-3 space-y-2 text-xs text-zinc-600">
              <li>Sustainability</li>
              <li>Shipping & Returns</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-semibold tracking-[0.14em] text-zinc-500">CUSTOMER CARE</h4>
            <ul className="mt-3 space-y-2 text-xs text-zinc-600">
              <li>Contact</li>
              <li>FAQ</li>
              <li>Size Guide</li>
              <li>Gift Cards</li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-semibold tracking-[0.14em] text-zinc-500">NEWSLETTER</h4>
            <form className="mt-3 flex border-b border-zinc-300 pb-2">
              <label htmlFor="email" className="sr-only">
                Enter your email
              </label>
              <input
                id="email"
                type="email"
                placeholder="ENTER YOUR EMAIL"
                className="w-full bg-transparent text-xs tracking-[0.1em] text-zinc-700 placeholder:text-zinc-400 focus:outline-none"
              />
              <button className="text-xs font-semibold tracking-[0.14em]">JOIN</button>
            </form>
          </div>
        </div>

        <div className="border-t border-zinc-200/80">
          <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-4 py-4 text-[10px] tracking-[0.12em] text-zinc-400 sm:px-6 lg:px-10">
            <p>© 2026 18 STUDIO. ALL RIGHTS RESERVED.</p>
            <p>MINIMAL / EDITORIAL / MODERN</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
