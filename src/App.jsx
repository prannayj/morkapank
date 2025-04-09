
export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#F6F4EF] text-[#1D2B3A] font-sans">
      {/* Navbar */}
      <header className="flex items-center justify-between p-6 max-w-7xl mx-auto">
        <div className="text-2xl font-bold">MorKaPank</div>
        <nav className="hidden md:flex space-x-6 text-lg">
          <a href="#about" className="hover:text-[#298C87]">About</a>
          <a href="#services" className="hover:text-[#298C87]">Services</a>
          <a href="#portfolio" className="hover:text-[#298C87]">Portfolio</a>
          <a href="#contact" className="hover:text-[#298C87]">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-24 px-6">
        <h1 className="text-5xl font-serif mb-4">MorKaPank</h1>
        <p className="text-xl text-[#4B5D6B]">Bring Grace to your Brand</p>
        <p className="mt-4 max-w-xl mx-auto text-lg">Elegant brand & marketing strategy for purpose-driven businesses.</p>
        <button className="mt-6 px-6 py-3 bg-[#298C87] text-white rounded-full hover:bg-[#247881] transition">Let's Build Your Brand →</button>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white py-20 px-6 text-center">
        <h2 className="text-3xl font-serif mb-4">What does MorKaPank mean?</h2>
        <p className="max-w-2xl mx-auto text-lg text-[#4B5D6B]">
          "MorKaPank" means a peacock’s feather — a timeless symbol of grace, pride, and storytelling.
          We believe every brand has a rhythm. Our job? To make sure the world hears it with elegance.
        </p>
        <a href="#" className="mt-6 inline-block text-[#298C87] font-medium">About Us →</a>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-serif text-center mb-10">What We Do</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-xl font-semibold">✨ Brand Strategy</h3>
            <p className="text-[#4B5D6B] mt-2">Craft your brand story, voice, and visual identity from scratch.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">🎨 Visual Identity</h3>
            <p className="text-[#4B5D6B] mt-2">From logos to full brand systems, we design with elegance and clarity.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">📈 Marketing Management</h3>
            <p className="text-[#4B5D6B] mt-2">We help brands communicate gracefully across channels and campaigns.</p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="bg-[#F6F4EF] py-20 px-6 text-center">
        <h2 className="text-3xl font-serif mb-10">Selected Work</h2>
        <div className="space-y-4 max-w-xl mx-auto">
          <p>🖼️ The Grace School — Full rebrand & launch</p>
          <p>🖼️ Aava Skin — Minimal luxury packaging</p>
          <p>🖼️ Vayu — Modern Ayurveda digital campaign</p>
        </div>
        <a href="#" className="mt-6 inline-block text-[#298C87] font-medium">View All Work →</a>
      </section>

      {/* Testimonial or Founder Note */}
      <section className="bg-white py-20 px-6 text-center">
        <blockquote className="italic text-xl max-w-2xl mx-auto text-[#4B5D6B]">
          “Working with MorKaPank felt like rediscovering our brand’s soul.”
        </blockquote>
        <p className="mt-4 font-semibold">— Client Name, CEO, BrandName</p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 text-center bg-[#1D2B3A] text-white">
        <h2 className="text-3xl font-serif mb-4">Ready to bring grace to your brand?</h2>
        <button className="mt-4 px-6 py-3 bg-[#298C87] text-white rounded-full hover:bg-[#4AB2A2] transition">Book a Free Brand Consult</button>
        <p className="mt-6">hello@morkapank.com</p>
        <div className="flex justify-center space-x-6 mt-4 text-sm">
          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
          <a href="#">WhatsApp</a>
        </div>
      </section>
    </div>
  )
}
