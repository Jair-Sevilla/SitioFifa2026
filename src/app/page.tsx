import Image from "next/image";
import Navbar from "./components/navbar";
import SidebarFiltros from "./components/sidebarFiltros";
import GridProductos from "./components/gridProductos";
import Footer from "./components/footer";


export default function Home() {
  return (
    <>
   <Navbar/>
   <main className="flex flex-1 p-6 gap-6">
        <SidebarFiltros />
        <GridProductos />
      </main>
      <Footer />
    </>
  );
}
