import Sidebar from "./components/Sidebar";

export default async function Dashboard({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen w-screen">
      <div className="flex-none">
        <Sidebar />
      </div>
      <div className="flex-1 bg-gray-100">{children}</div>
    </div>
  );
}
