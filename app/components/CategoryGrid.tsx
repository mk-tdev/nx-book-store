import CategoryCard from "./CategoryCard";
import type { Category } from "../data/mockCategories";

export default function CategoryGrid({
  categories,
}: {
  categories: Category[];
}) {
  const visibleCategories = categories.filter(
    (category) => category.bookCount > 0,
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {visibleCategories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
  );
}
