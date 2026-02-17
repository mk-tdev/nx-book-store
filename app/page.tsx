import Link from "next/link";

export default function Home() {
  const features = [
    {
      icon: "📖",
      title: "Vast Collection",
      description: "Access thousands of books across all genres",
    },
    {
      icon: "🚀",
      title: "Fast Delivery",
      description: "Get your books delivered within 2-3 days",
    },
    {
      icon: "💳",
      title: "Secure Payment",
      description: "100% secure and encrypted transactions",
    },
    {
      icon: "⭐",
      title: "Top Rated",
      description: "Curated selection of highly-rated books",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 text-white">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Welcome to BookStore
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
              Discover your next favorite book from our extensive collection of
              classics, bestsellers, and hidden gems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/dashboard"
                className="inline-block bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-200 hover:scale-105 transition-all duration-200 shadow-xl"
              >
                Explore Dashboard →
              </Link>
              <button className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-200">
                Browse Books
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Reading?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join thousands of book lovers and discover your next adventure.
          </p>
          <Link
            href="/dashboard"
            className="inline-block bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-200 hover:scale-105 transition-all duration-200 shadow-xl"
          >
            Get Started Now
          </Link>
        </div>
      </section>
    </main>
  );
}
