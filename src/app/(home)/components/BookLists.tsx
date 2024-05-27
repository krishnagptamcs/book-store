import { Book } from "@/types";
import React from "react";
import BookCard from "./BookCard";

const BookLists = ({ books }: { books: Book[] }) => {
  return (
    <>
      <section className="mt-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 max-w-7xl mx-auto mb-10">
          {books.map((book: Book) => (
            <BookCard key={book._id} book={book} />
          ))}
        </div>
      </section>
    </>
  );
};

export default BookLists;
