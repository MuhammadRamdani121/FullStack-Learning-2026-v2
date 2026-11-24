import Padding from "./components/Rangkuman/TailwindCss/Padding";
import Margin from "./components/Rangkuman/TailwindCss/Margin";
import TailwindCss from "./components/Rangkuman/TailwindCss";

export default function App() {
  return (
    <>
      <header className="bg-black">
        <h1>TAILWIND CSS</h1>
      </header>

      <main className="bg-black">
        <section>
          <Padding />
          <Margin />
        </section>

        <section>
          <TailwindCss />
        </section>
      </main>
    </>
  );
}
