import Banner from "@/app/(home)/components/Banner";
import BookLists from "./(home)/components/BookLists";

export default async function Home() {
  const response = await fetch("http://localhost:8080/api/books");
  console.log("reponse coming in fetch", response);

  if (!response?.ok) {
    throw new Error("error while fetching book list");
  }

  const books_list = await response.json();

  console.log("books-list", books_list);

  return (
    <>
      <section className="mx-auto max-w-7xl py-10">
        <Banner />
        <BookLists books={books_list} />
      </section>
    </>
  );
}
