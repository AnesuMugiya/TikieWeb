import { Sidebar, Topbar, BottomNav } from "@/components/Navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="flex min-h-screen">
          <Sidebar />
          <div className="flex-1 flex flex-col min-w-0">
            <Topbar />
            <main className="flex-1 pb-16 lg:pb-0">
              {children}
            </main>
          </div>
        </div>
        <BottomNav />
    </div>   
  );
}