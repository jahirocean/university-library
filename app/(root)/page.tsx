import BookList from "@/components/BookList";
import BookOverView from "@/components/BookOverView";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import { sampleBooks } from "@/constants";
import { db } from "@/database/drizzle";
import { users } from "@/database/schema";

const Home = async () =>{
  const result = await db.select().from(users);

  console.log(JSON.stringify(result, null, 2))

  
  return (
    <>
    <BookOverView {...sampleBooks[0]}/>

    <BookList
        title="Latest Books"
        books={sampleBooks}
        containerClassName="mt-28"
    />
    </>
  );
  }

export default Home;
 