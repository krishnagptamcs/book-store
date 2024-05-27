import Banner from "@/app/(home)/components/Banner";
import BookLists from "./(home)/components/BookLists";
import { Book } from "@/types";

export default async function Home() {
  let books_list: Book[] | null = null;
  try {
    const response = await fetch("http://localhost:8080/api/books");
    console.log("reponse coming in fetch", response);
    if (!response?.ok) {
      throw new Error("error while fetching book list");
    }

    books_list = await response.json();

    console.log("books-list", books_list);
  } catch (error) {
    console.error("error fetching in nbooks list", error);
  }

  if (!books_list) {
    throw new Error("Books cannot be fetched");
  }

  return (
    <>
      <section className="mx-auto max-w-7xl py-10">
        <Banner />
        <BookLists books={books_list} />
      </section>
    </>
  );
}
