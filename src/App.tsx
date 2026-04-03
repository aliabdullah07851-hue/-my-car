import { 
  Wrench, 
  AlertTriangle, 
  Activity, 
  FileText, 
  Download, 
  CalendarCheck, 
  CarFront, 
  Star, 
  CheckCircle2,
  MapPin,
  Smartphone,
  ShieldCheck
} from 'lucide-react';

export default function App() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "My Car",
        "operatingSystem": "iOS, Android",
        "applicationCategory": "AutoAndVehicles",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "LocalBusiness",
        "name": "My Car Services",
        "image": "https://picsum.photos/seed/mycar/800/600",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "123 Auto Way",
          "addressLocality": "San Francisco",
          "addressRegion": "CA",
          "postalCode": "94105",
          "addressCountry": "US"
        },
        "telephone": "+1-800-555-0199"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 pb-24 md:pb-0">
      {/* Schema Markup */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />

      {/* Sticky Header (Desktop) / Top Bar (Mobile) */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-2 rounded-lg">
              <CarFront className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-gray-900">My Car</span>
          </div>
          <div className="hidden md:block">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2.5 px-6 rounded-full transition-colors shadow-sm">
              Download Free
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1. Hero Section */}
        <section className="py-12 md:py-20 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 text-center md:text-left space-y-6">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Every Car Service You Need, <span className="text-blue-600">In One App.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-lg mx-auto md:mx-0">
              From emergency roadside help to routine maintenance, managed entirely from your phone.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4">
              <button className="w-full sm:w-auto bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3.5 px-8 rounded-xl flex items-center justify-center gap-3 transition-colors shadow-md">
                <Smartphone className="w-7 h-7" />
                <div className="text-left">
                  <div className="text-[10px] uppercase tracking-wider opacity-80">Download on the</div>
                  <div className="text-lg leading-none font-bold">App Store</div>
                </div>
              </button>
              <button className="w-full sm:w-auto bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3.5 px-8 rounded-xl flex items-center justify-center gap-3 transition-colors shadow-md">
                <Smartphone className="w-7 h-7" />
                <div className="text-left">
                  <div className="text-[10px] uppercase tracking-wider opacity-80">GET IT ON</div>
                  <div className="text-lg leading-none font-bold">Google Play</div>
                </div>
              </button>
            </div>
          </div>
          <div className="flex-1 w-full max-w-sm mx-auto relative">
            {/* 3D Mockup Placeholder */}
            <div className="aspect-[9/19] bg-gray-200 rounded-[3rem] shadow-2xl border-[8px] border-gray-800 overflow-hidden relative">
              <img 
                src="https://picsum.photos/seed/carapp/400/800" 
                alt="App Interface" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              {/* Mock UI Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                <div className="bg-white/95 backdrop-blur rounded-2xl p-4 shadow-xl border border-white/20">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-green-100 p-2 rounded-full text-green-600">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-gray-900">Mechanic Arriving</span>
                  </div>
                  <div className="text-sm font-medium text-gray-600 ml-11">ETA: 12 minutes</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Bar */}
        <section className="py-8 border-y border-gray-200 my-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 opacity-70">
            <div className="flex items-center gap-2">
              <div className="flex text-yellow-500">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <span className="font-semibold text-gray-800">4.8/5 from 10,000+ users</span>
            </div>
            <div className="hidden md:block w-px h-8 bg-gray-300"></div>
            <div className="flex gap-8 items-center grayscale opacity-80">
              <span className="font-black text-xl tracking-tighter">AutoZone</span>
              <span className="font-black text-xl tracking-tighter">JiffyLube</span>
              <span className="font-black text-xl tracking-tighter">PepBoys</span>
            </div>
          </div>
        </section>

        {/* 2. Service Categories */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">All Your Car Needs in One Place</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">No more calling around. Book vetted professionals instantly from your phone.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { icon: Wrench, title: 'Routine Maintenance', desc: 'Oil changes, tire rotations, and brake checks at your driveway or local shop.' },
              { icon: AlertTriangle, title: 'Emergency Roadside', desc: '24/7 towing, jump-starts, and lockouts with real-time GPS tracking.' },
              { icon: Activity, title: 'Repair Tracking', desc: 'Live updates, photos, and approvals from the shop floor straight to your phone.' },
              { icon: FileText, title: 'Digital Records', desc: 'Automated service history and VIN-based maintenance reminders.' },
            ].map((service, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-5 hover:shadow-md transition-shadow">
                <div className="bg-blue-50 p-3.5 rounded-xl text-blue-600 shrink-0">
                  <service.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1.5 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. How It Works */}
        <section className="py-16 bg-blue-600 text-white rounded-[2.5rem] px-6 md:px-12 my-8 shadow-xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">How It Works</h2>
            <p className="text-blue-100 text-lg">Get back on the road in three simple steps.</p>
          </div>
          <div className="flex flex-col md:flex-row gap-10 relative">
            <div className="hidden md:block absolute top-10 left-1/6 right-1/6 h-0.5 bg-blue-400/50 z-0"></div>
            {[
              { icon: Download, step: '1. Download', desc: 'Get the app and add your vehicle details.' },
              { icon: CalendarCheck, step: '2. Book', desc: 'Select a service and choose a convenient time.' },
              { icon: CarFront, step: '3. Drive', desc: 'We handle the rest while you relax.' },
            ].map((item, idx) => (
              <div key={idx} className="flex-1 relative z-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-white text-blue-600 rounded-2xl flex items-center justify-center shadow-lg mb-6 rotate-3 hover:rotate-0 transition-transform">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-xl mb-2">{item.step}</h3>
                <p className="text-blue-100 text-sm max-w-[200px]">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Transparency Section */}
        <section className="py-16">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight">Smart Service Selection</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                No hidden fees. See exact pricing estimates based on your specific make and model before you even book.
              </p>
              <ul className="space-y-5">
                {[
                  'Upfront itemized estimates',
                  'Compare local shop prices instantly',
                  'Secure, cashless in-app payments'
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="bg-green-100 p-1 rounded-full">
                      <ShieldCheck className="w-5 h-5 text-green-600" />
                    </div>
                    <span className="font-semibold text-gray-800">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 w-full">
              <div className="bg-white rounded-[2rem] shadow-xl border border-gray-100 p-8">
                <div className="flex justify-between items-center mb-6 pb-5 border-b border-gray-100">
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">2021 Toyota Camry</h4>
                    <p className="text-sm font-medium text-gray-500">75,000 Mile Service</p>
                  </div>
                  <button className="text-blue-600 text-sm font-bold hover:text-blue-700">Edit Vehicle</button>
                </div>
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">Full Synthetic Oil Change</span>
                    <span className="font-bold text-gray-900">$65.00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">Tire Rotation</span>
                    <span className="font-bold text-gray-900">$25.00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">Multi-Point Inspection</span>
                    <span className="font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded text-sm">FREE</span>
                  </div>
                </div>
                <div className="pt-5 border-t border-gray-100 flex justify-between items-center mb-8">
                  <span className="font-bold text-lg text-gray-900">Estimated Total</span>
                  <span className="font-black text-3xl text-blue-600">$90.00</span>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-colors shadow-md text-lg">
                  See Local Prices
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-16 mt-12">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-blue-600 p-2 rounded-lg">
                <CarFront className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">My Car</span>
            </div>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed max-w-xs">
              Making car ownership effortless. Download the app today and experience the future of auto care.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-5 uppercase tracking-wider text-sm">Service Areas</h4>
            <ul className="space-y-3 text-sm font-medium text-gray-400">
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-gray-500" /> San Francisco Bay Area</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-gray-500" /> Los Angeles Metro</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-gray-500" /> New York City</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-gray-500" /> Chicago</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-5 uppercase tracking-wider text-sm">Support</h4>
            <ul className="space-y-3 text-sm font-medium text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Help Center & FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-5xl mx-auto px-4 mt-16 pt-8 border-t border-gray-800 text-sm text-gray-500 text-center md:text-left flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} My Car Services Inc. All rights reserved.</p>
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur-md border-t border-gray-200 z-50 md:hidden pb-safe shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl shadow-lg text-lg transition-colors">
          Download Now
        </button>
      </div>
    </div>
  );
}
