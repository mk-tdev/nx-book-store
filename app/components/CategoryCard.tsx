"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import type { Category } from "../data/mockCategories";

export default function CategoryCard({ category }: { category: Category }) {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [canHover, setCanHover] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setCanHover(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const themeClasses = useMemo(() => {
    switch (category.theme) {
      case "purple":
        return "from-purple-600/15 to-purple-600/5 border-purple-200";
      case "pink":
        return "from-pink-600/15 to-pink-600/5 border-pink-200";
      case "orange":
        return "from-orange-600/15 to-orange-600/5 border-orange-200";
      case "blue":
        return "from-blue-600/15 to-blue-600/5 border-blue-200";
      case "green":
        return "from-emerald-600/15 to-emerald-600/5 border-emerald-200";
      default:
        return "from-gray-600/10 to-gray-600/5 border-gray-200";
    }
  }, [category.theme]);

  const topBooks = category.topBooks ?? [];
  const browseHref = `/books?category=${encodeURIComponent(category.id)}`;

  return (
    <div
      className={`group relative rounded-2xl border bg-linear-to-br ${themeClasses} p-5 shadow-sm hover:shadow-md transition-shadow`}
      onMouseEnter={() => {
        if (canHover) setPreviewOpen(true);
      }}
      onMouseLeave={() => {
        if (canHover) setPreviewOpen(false);
      }}
      onClick={() => {
        if (!canHover) {
          setPreviewOpen((v) => !v);
        }
      }}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-2xl" aria-hidden="true">
              {category.icon}
            </span>
            <h3 className="font-semibold text-gray-900 truncate">
              {category.name}
            </h3>
          </div>
          <div className="mt-2 inline-flex items-center rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-gray-700">
            {category.bookCount} books
          </div>
        </div>

        <Link
          href={browseHref}
          className="shrink-0 rounded-full bg-gray-900 text-white text-xs font-semibold px-3 py-2 hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          onClick={(e) => e.stopPropagation()}
        >
          Browse
        </Link>
      </div>

      <div
        className={`mt-4 rounded-xl bg-white/70 p-3 text-sm text-gray-800 transition-opacity ${
          previewOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="font-semibold">Top books</div>

        {topBooks.length === 0 ? (
          <div className="mt-2 text-gray-600">No preview available.</div>
        ) : (
          <ul className="mt-2 space-y-1">
            {topBooks.map((book) => (
              <li key={book.id} className="text-gray-700">
                {book.title}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
