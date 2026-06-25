import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col items-center justify-center p-6 pt-28">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white mb-4">Movax Technologies</h1>

          <p className="text-gray-400 font-medium text-lg">
            We are a technology company that specializes in providing innovative transformation and software solutions for businesses and individuals. Our team of experts is dedicated to delivering high-quality products and services that meet the unique needs of our clients.
          </p>
        </div>
      </main>
    </>
  );
}