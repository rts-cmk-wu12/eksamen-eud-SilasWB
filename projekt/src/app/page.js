import Image from "next/image";
import Header from "./components/header";
import Footer from "./components/footer";
import SearchBar from "./components/searchbar";



export default function Home() {
  return (
   <>
   <Header />
   <main>
     <SearchBar />
   </main>
  <Footer /> 
   </>
  );
}

// export const metadata = {
//   title: "Log ind"
// };