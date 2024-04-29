import { NavbarApp, SidebarApp } from "@/app/dashboard/components";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavbarApp />
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <div className="w-full flex-none md:w-64">
          <SidebarApp />
        </div>
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
          {children}
        </div>
      </div>
    </>
  );
}
