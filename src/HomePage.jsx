import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#F6F4EF] text-[#1D2B3A] font-sans scroll-smooth">
      {/* Navbar */}
      <header className="flex items-center justify-between p-6 max-w-7xl mx-auto">
        <div className="text-2xl font-bold tracking-wide">MorKaPank</div>
        <nav className="hidden md:flex space-x-6 text-lg">
          <a href="#about" className="hover:text-[#298C87] transition">About</a>
          <a href="#services" className="hover:text-[#298C87] transition">Services</a>
          <a href="#portfolio" className="hover:text-[#298C87] transition">Portfolio</a>
          <a href="#contact" className="hover:text-[#298C87] transition">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative text-center py-24 px-6 text-white">
        <img src="/images/hero-banner.jpg" alt="Peacock feather background" className="absolute inset-0 w-full h-full object-cover z-0 opacity-80" />
        <div className="relative z-10">
          <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-6xl font-serif mb-4 tracking-tight">
            MorKaPank
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }} className="text-2xl text-white/90">Bring Grace to your Brand</motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }} className="mt-4 max-w-xl mx-auto text-lg text-white/80">
            Elegant brand & marketing strategy for purpose-driven businesses.
          </motion.p>
          <motion.button whileHover={{ scale: 1.05 }} className="mt-8 px-6 py-3 bg-[#298C87] text-white rounded-full hover:bg-[#247881] transition">
            Let's Build Your Brand →
          </motion.button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative bg-white py-20 px-6 text-center">
        <img src="/images/about.jpg" alt="About section feather image" className="absolute inset-0 w-full h-full object-cover opacity-10" /> {/* 16:9 ratio */}
        <div className="relative z-10">
          <h2 className="text-3xl font-serif mb-4">What does MorKaPank mean?</h2>
          <p className="max-w-2xl mx-auto text-lg text-[#4B5D6B]">
            "MorKaPank" means a peacock’s feather — a timeless symbol of grace, pride, and storytelling.
            We believe every brand has a rhythm. Our job? To make sure the world hears it with elegance.
          </p>
          <a href="#" className="mt-6 inline-block text-[#298C87] font-medium">About Us →</a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-serif text-center mb-12">What We Do</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { title: 'Brand Strategy', image: '/images/brand-strategy.jpg' },
            { title: 'Visual Identity', image: '/images/visual-identity.jpg' },
            { title: 'Marketing Management', image: '/images/marketing.jpg' },
            { title: 'Social Media Magic', image: '/images/social-media.jpg' }
          ].map((service, index) => (
            <div
              key={index}
              className="relative h-64 rounded-2xl overflow-hidden group shadow-md"
              style={{ aspectRatio: '4 / 3' }}
            >
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition duration-500 flex flex-col justify-end p-6">
                <h3 className="text-white text-2xl font-semibold">{service.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Brands We Have Worked With (Marquee) */}
      <section id="portfolio" className="bg-[#1D2B3A] py-16 px-6">
        <h2 className="text-center text-white text-2xl font-serif mb-8">Brands we have worked with</h2>
        <div className="overflow-hidden relative">
          <div className="animate-marquee whitespace-nowrap flex gap-12">
            {[...Array(6)].map((_, i) => (
              <img
                key={i}
                src={`/images/brand-logo-${i + 1}.png`}
                alt={`Brand ${i + 1}`}
                className="h-12 w-auto opacity-80 grayscale hover:opacity-100 hover:grayscale-0 transition"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial or Founder Note */}
      <section className="relative bg-white py-20 px-6 text-center">
        <img src="/images/testimonial.jpg" alt="Testimonial backdrop" className="absolute inset-0 w-full h-full object-cover opacity-10" /> {/* 16:9 ratio */}
        <div className="relative z-10">
          <blockquote className="italic text-xl max-w-2xl mx-auto text-[#4B5D6B]">
            “Working with MorKaPank felt like rediscovering our brand’s soul.”
          </blockquote>
          <p className="mt-4 font-semibold">— Client Name, CEO, BrandName</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 px-6 text-center bg-[#1D2B3A] text-white">
        <img src="/images/contact.jpg" alt="Contact section background" className="absolute inset-0 w-full h-full object-cover opacity-10" /> {/* 16:9 ratio */}
        <div className="relative z-10">
          <h2 className="text-3xl font-serif mb-4">Ready to bring grace to your brand?</h2>
          <button className="mt-4 px-6 py-3 bg-[#298C87] text-white rounded-full hover:bg-[#4AB2A2] transition">Book a Free Brand Consult</button>
          <p className="mt-6">hello@morkapank.com</p>
          <div className="flex justify-center space-x-6 mt-4 text-sm">
            <a href="#" className="hover:underline">Instagram</a>
            <a href="#" className="hover:underline">LinkedIn</a>
            <a href="#" className="hover:underline">WhatsApp</a>
          </div>
        </div>
      </section>
    </div>
  )
}
