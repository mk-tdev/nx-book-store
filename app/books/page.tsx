import Link from "next/link";

import Breadcrumbs from "../components/Breadcrumbs";
import { getMockCategories } from "../data/mockCategories";

export default async function BooksPage({
  searchParams,
}: {
  searchParams?: Promise<{ category?: string | string[] }>;
}) {
  const categories = getMockCategories();

  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const rawSelectedCategoryId = resolvedSearchParams?.category;
  const selectedCategoryId = Array.isArray(rawSelectedCategoryId)
    ? rawSelectedCategoryId[0]
    : rawSelectedCategoryId;

  const selectedCategory = selectedCategoryId
    ? categories.find((c) => c.id === selectedCategoryId)
    : undefined;

  const hasInvalidCategoryFilter =
    Boolean(selectedCategoryId) && !selectedCategory;

  const isFiltered = Boolean(selectedCategory);

  const books = isFiltered
    ? (selectedCategory!.topBooks ?? [])
    : categories
        .filter((c) => c.bookCount > 0)
        .flatMap((c) => c.topBooks ?? []);

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Breadcrumbs
          items={[{ label: "Home", href: "/" }, { label: "Books" }]}
        />

        <div className="mt-6 flex items-start justify-between gap-6 flex-wrap">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Books</h1>
            <p className="mt-2 text-gray-600">
              {selectedCategory
                ? `Showing books for ${selectedCategory.name}.`
                : "Showing all books."}
            </p>
            {hasInvalidCategoryFilter ? (
              <p className="mt-1 text-sm text-gray-500">
                Selected category filter was not found. Showing all books
                instead.
              </p>
            ) : null}
          </div>

          <div className="flex flex-wrap gap-2">
            <Link
              href="/books"
              className={`rounded-full px-3 py-2 text-sm font-medium border ${
                !isFiltered
                  ? "bg-gray-900 text-white border-gray-900"
                  : "bg-white text-gray-800 border-gray-200 hover:border-gray-300"
              }`}
            >
              All
            </Link>
            {categories
              .filter((c) => c.bookCount > 0)
              .map((c) => {
                const active = c.id === selectedCategory?.id;
                return (
                  <Link
                    key={c.id}
                    href={`/books?category=${encodeURIComponent(c.id)}`}
                    className={`rounded-full px-3 py-2 text-sm font-medium border ${
                      active
                        ? "bg-gray-900 text-white border-gray-900"
                        : "bg-white text-gray-800 border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    {c.icon} {c.name}
                  </Link>
                );
              })}
          </div>
        </div>

        {books.length === 0 ? (
          <div className="mt-10 rounded-2xl border border-gray-200 bg-white p-6 text-gray-700">
            {isFiltered
              ? "No books found for this category."
              : "No books found."}
          </div>
        ) : (
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {books.map((book) => (
              <div
                key={book.id}
                className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
              >
                <div className="font-semibold text-gray-900">{book.title}</div>
                {book.author ? (
                  <div className="mt-1 text-sm text-gray-600">
                    {book.author}
                  </div>
                ) : null}
                <div className="mt-4">
                  <button
                    type="button"
                    className="w-full rounded-xl bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800"
                  >
                    View details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
