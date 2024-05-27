import { Book } from "@/types";
import Image from "next/image";
import React from "react";

const SingleBook = async ({ params }: { params: { bookId: string } }) => {
  // console the params
  console.log("the praram value:", params);
  // intilisng the value Book and assign its type
  let bookDetails: Book | null = null;
  try {
    const response = await fetch(
      `http://localhost:8080/api/books/${params.bookId}`
    );

    if (!response?.ok) {
      throw new Error("error fetching in book");
    }

    bookDetails = await response.json();
  } catch (error) {
    console.error("error is:", error);
  }

  // if the book detail is still null then return the component , and throw erro
  if (!bookDetails) {
    throw new Error("book not found");
  }

  return (
    <div className="mx-auto grid max-w-6xl grid-cols-3 gap-10 px-5 py-10">
      <div className="col-span-2 pr-16 text-primary-950">
        <h2 className="mb-5 text-5xl font-bold leading-[1.1]">
          {bookDetails.title}
        </h2>
        <span className="font-semibold">by {bookDetails.author.name}</span>
        <p className="mt-5 text-lg leading-8">{bookDetails.description}</p>
        {/* <DownloadButton fileLink={bookDetails.file} /> */}
      </div>
      <div className="flex justify-end">
        <Image
          src={bookDetails.coverImage}
          alt={bookDetails.title}
          className="rounded-md border"
          height={0}
          width={0}
          sizes="100vw"
          style={{ width: "auto", height: "auto" }}
        />
      </div>
    </div>
  );
};

export default SingleBook;
