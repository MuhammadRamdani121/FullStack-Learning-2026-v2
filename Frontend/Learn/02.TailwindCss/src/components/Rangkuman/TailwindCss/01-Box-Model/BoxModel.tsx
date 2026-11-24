export default function TailwindCss() {
  return (
    <>
      <article>
        <header>
          <h1 className="my-5 text-center text-2xl font-bold">1. BOX MODEL</h1>
        </header>

        <section className="h-100 bg-amber-700 text-center">
          <h1>Margin - Ruang Luar</h1>
          <section className="m-5 h-80 bg-amber-600">
            <h1>Border</h1>
            <section className="m-5 h-60 bg-amber-500">
              <h1>Padding - Ruang Dalam</h1>
              <section className="m-5 h-40 bg-amber-400">
                <h1>Content - Isi Elemen</h1>
              </section>
            </section>
          </section>
        </section>
      </article>
    </>
  );
}
