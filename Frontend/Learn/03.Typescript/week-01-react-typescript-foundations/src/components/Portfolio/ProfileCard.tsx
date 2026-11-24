export default function ProfileCard() {
  return (
    <>
      <header className="text-center">
        <h1 className="text-xl font-bold">
          Task 1 - Buat Component Profile Card
        </h1>
      </header>

      <main className="bg-[#FFEEB3] px-2">
        <h2 className="text-lg font-bold">Muhammad Ramdani</h2>
        <h3 className="font-medium">Junior Full Stack Developer</h3>
        <p className="border-b-2 border-black">
          Saya Sedang belajar membangun aplikasi web menggunakan React dan
          TypeScript
        </p>
        <nav className="mx-2 flex gap-2">
          <p className="my-2 w-20 rounded-2xl bg-[#B4D7CD] text-center">
            React
          </p>
          <p className="my-2 w-25 rounded-2xl bg-[#B4D7CD] text-center">
            TypeScript
          </p>
          <p className="my-2 w-30 rounded-2xl bg-[#B4D7CD] text-center">
            Tailwind CSS
          </p>
        </nav>
      </main>
    </>
  );
}
