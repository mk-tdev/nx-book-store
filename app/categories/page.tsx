import Breadcrumbs from "../components/Breadcrumbs";
import CategoryGrid from "../components/CategoryGrid";
import { getMockCategories } from "../data/mockCategories";

export default function CategoriesPage() {
  const categories = getMockCategories();

  return (
    <main className="min-h-screen">
      <section className="relative overflow-hidden bg-linear-to-br from-purple-600 via-pink-500 to-orange-500 text-white">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            Categories
          </h1>
          <p className="mt-3 text-base sm:text-lg text-white/90 max-w-2xl">
            Explore curated collections and discover your next great read.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Breadcrumbs
          items={[{ label: "Home", href: "/" }, { label: "Categories" }]}
        />

        {categories.length === 0 ? (
          <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 text-gray-700">
            No categories available.
          </div>
        ) : (
          <div className="mt-8">
            <CategoryGrid categories={categories} />
          </div>
        )}
      </section>
    </main>
  );
}
