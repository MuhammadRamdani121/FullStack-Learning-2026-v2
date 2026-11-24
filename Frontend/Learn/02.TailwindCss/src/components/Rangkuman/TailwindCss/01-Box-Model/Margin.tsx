export default function Margin() {
  return (
    <article>
      <header>
        <h1 className="text-center text-lg font-bold">2 - Memahami Margin</h1>
        <p>Luar Content / Luar elemen</p>
      </header>

      <section className="flex h-20 w-full flex-col justify-center bg-[#FFE8C4] px-5">
        <p className="border-2 border-solid bg-[#FFF4DE] p-3">
          p-3 = Semua Area
        </p>
      </section>
      <section className="my-2 flex h-20 w-full flex-col justify-center bg-[#FFE8C4] px-5">
        <p className="border-2 border-solid bg-[#FFF4DE] px-3">
          px-3 = Kanan Kiri
        </p>
      </section>
      <section className="my-2 flex h-20 w-full flex-col justify-center bg-[#FFE8C4] px-5">
        <p className="border-2 border-solid bg-[#FFF4DE] px-3">
          px-3 = Kanan Kiri
        </p>
      </section>
      <section className="my-2 flex h-20 w-full flex-col justify-center bg-[#FFE8C4] px-5">
        <p className="border-2 border-solid bg-[#FFF4DE] py-3">
          py-3 = Atas Bawah
        </p>
      </section>
    </article>
  );
}
