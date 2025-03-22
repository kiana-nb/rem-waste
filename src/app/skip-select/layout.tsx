import FiltersModal from "./_components/filters-modal";
import Footer from "./_components/footer";

export default function SkipLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="container mx-auto py-8 pb-32 px-4 flex flex-col gap-12">
      <div className="flex items-start justify-between">
        <header className="flex flex-col gap-2 justify-center items-start">
          <h1 className="text-2xl font-bold">Choose Your Skip Size</h1>
          <h2 className="text-base text-gray-600">Select the skip size that best suits your needs</h2>
        </header>

        <FiltersModal />
      </div>

      {children}

      <Footer />
    </main>
  );
}
