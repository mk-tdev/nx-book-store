export default function DashboardPage() {
  // Mock data for demonstration
  const stats = [
    { label: "Total Books", value: "1,234", icon: "📚", gradient: "from-blue-500 to-cyan-500" },
    { label: "Categories", value: "24", icon: "📑", gradient: "from-purple-500 to-pink-500" },
    { label: "Recent Sales", value: "89", icon: "💰", gradient: "from-orange-500 to-red-500" },
    { label: "Active Users", value: "567", icon: "👥", gradient: "from-green-500 to-teal-500" },
  ];

  const recentBooks = [
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      price: "$12.99",
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=600&fit=crop",
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      price: "$14.99",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop",
    },
    {
      id: 3,
      title: "1984",
      author: "George Orwell",
      price: "$11.99",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop",
    },
    {
      id: 4,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      price: "$10.99",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400&h=600&fit=crop",
    },
    {
      id: 5,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      price: "$13.99",
      rating: 4.4,
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=600&fit=crop",
    },
    {
      id: 6,
      title: "Harry Potter",
      author: "J.K. Rowling",
      price: "$15.99",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?w=400&h=600&fit=crop",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
            Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Welcome back! Here's what's happening with your book store today.
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-90`} />
              <div className="relative p-6 text-white">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </div>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Recent Books Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
            Recent Books
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentBooks.map((book) => (
              <div
                key={book.id}
                className="group bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-1 line-clamp-1">
                    {book.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    {book.author}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      {book.price}
                    </span>
                    <div className="flex items-center space-x-1">
                      <span className="text-yellow-400">⭐</span>
                      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                        {book.rating}
                      </span>
                    </div>
                  </div>
                  <button className="mt-4 w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-200 hover:shadow-lg">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
