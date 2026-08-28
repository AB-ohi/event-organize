import Navbar from "@/Component/shared/navbar/navbar";

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      {/* <Footer /> */}
    </>
  );
}