import NavBar from "./navbar";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <div className="bg-gray-50 dark:bg-dark-blue">
      <div className="container flex flex-col min-h-screen mx-auto">
        <NavBar />
        <main className="flex-grow mt-4 p-4">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
