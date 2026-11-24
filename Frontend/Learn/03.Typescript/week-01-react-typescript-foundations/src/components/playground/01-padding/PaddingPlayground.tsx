export default function PaddingPlayground() {
  return (
    <>
      <article>
        <header>
          <h1>Belajar Tailwind CSS</h1>
        </header>

        <main>
          <section>
            <header>
              <h2>Memahami Padding</h2>
              <p>
                Padding = jarak antara isi elemen dengan batas (border) elemen
                itu sendiri
              </p>
            </header>
            // *main Section
            <section className="bg-[#FBE6C2]">
              <h3 className="bg-[#FFF8CF] p-1">p-1</h3>
            </section>
          </section>
        </main>
      </article>
    </>
  );
}
