import Header from "@/components/layout/Header";
import Contact from "@/components/layout/Contact";
import Footer from "@/components/layout/Footer";

export default function ContactPage() {
  return (
    <>
      <Header color="bg-gradient-to-r from-pink-700 via-purple-700 to-indigo-700" />
      <div className="mt-10">
      <Contact />
      </div>
      <Footer />
    </>
  );
}
