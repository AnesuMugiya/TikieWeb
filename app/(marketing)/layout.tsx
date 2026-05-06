import Navbar from "@/components/Navbar";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar activePath="/" />
      <main>{children}</main>
    </>
  );
}