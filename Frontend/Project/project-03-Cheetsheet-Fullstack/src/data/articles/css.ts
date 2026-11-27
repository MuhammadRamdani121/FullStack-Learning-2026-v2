import type { Article } from "./types";

export const cssArticle: Article = {
  slug: "css",
  title: "CSS Fundamentals",
  description:
    "Pelajari dasar CSS mulai dari syntax, selector, cascade, specificity, box model, layout, responsive design, hingga styling modern.",
  category: "Frontend Development",
  difficulty: "Beginner",
  duration: "45 menit",
  previous: "html",
  next: "javascript",

  sections: [
    {
      id: "introduction",
      title: "Introduction to CSS",
      blocks: [
        {
          type: "paragraph",
          text: "CSS (Cascading Style Sheets) adalah bahasa yang digunakan untuk mengatur tampilan dan layout elemen HTML. HTML membangun struktur halaman, sedangkan CSS mengatur bagaimana struktur tersebut ditampilkan.",
        },
        {
          type: "heading",
          level: 3,
          text: "Fungsi CSS",
        },
        {
          type: "list",
          items: [
            "Mengatur warna text dan background.",
            "Mengatur ukuran elemen.",
            "Mengatur layout menggunakan Flexbox dan Grid.",
            "Mengatur typography.",
            "Membuat animasi dan transition.",
            "Membuat website responsive.",
          ],
        },
        {
          type: "code",
          language: "css",
          code: `h1 {
  color: blue;
  font-size: 32px;
}

p {
  color: gray;
}`,
        },
      ],
    },

    {
      id: "css-syntax",
      title: "CSS Syntax",
      blocks: [
        {
          type: "paragraph",
          text: "CSS terdiri dari selector, declaration block, property, dan value. Selector menentukan elemen HTML yang akan diberi styling.",
        },
        {
          type: "code",
          language: "css",
          code: `selector {
  property: value;
}`,
        },
        {
          type: "heading",
          level: 3,
          text: "Contoh",
        },
        {
          type: "code",
          language: "css",
          code: `h1 {
  color: red;
  font-size: 24px;
}`,
        },
        {
          type: "list",
          items: [
            "h1 = selector",
            "color = property",
            "red = value",
            "color: red = declaration",
          ],
        },
      ],
    },

    {
      id: "css-methods",
      title: "Cara menggunakan CSS",
      blocks: [
        {
          type: "paragraph",
          text: "CSS dapat diterapkan ke HTML melalui tiga metode: inline, internal, dan external CSS.",
        },
        {
          type: "heading",
          level: 3,
          text: "Inline CSS",
        },
        {
          type: "paragraph",
          text: "Styling ditulis langsung pada atribut style elemen HTML. Cocok untuk testing, tetapi kurang direkomendasikan untuk project besar.",
        },
        {
          type: "code",
          language: "html",
          code: `<h1 style="color: red;">Hello World</h1>`,
        },
        {
          type: "heading",
          level: 3,
          text: "Internal CSS",
        },
        {
          type: "paragraph",
          text: "CSS ditulis di dalam tag style pada file HTML.",
        },
        {
          type: "code",
          language: "html",
          code: `<head>
  <style>
    h1 {
      color: blue;
    }
  </style>
</head>`,
        },
        {
          type: "heading",
          level: 3,
          text: "External CSS",
        },
        {
          type: "paragraph",
          text: "CSS dipisahkan ke file tersendiri dan dihubungkan menggunakan link. Ini adalah pendekatan yang umum digunakan.",
        },
        {
          type: "code",
          language: "html",
          code: `<link rel="stylesheet" href="style.css">`,
        },
        {
          type: "callout",
          calloutType: "tip",
          title: "Best Practice",
          text: "Gunakan external CSS atau utility framework seperti Tailwind untuk menjaga struktur project lebih rapi.",
        },
      ],
    },

    {
      id: "selectors",
      title: "CSS Selectors",
      blocks: [
        {
          type: "paragraph",
          text: "Selector digunakan untuk memilih elemen HTML yang ingin diberi styling.",
        },
        {
          type: "heading",
          level: 3,
          text: "Element Selector",
        },
        {
          type: "code",
          language: "css",
          code: `p {
  color: gray;
}`,
        },
        {
          type: "heading",
          level: 3,
          text: "Class Selector",
        },
        {
          type: "code",
          language: "html",
          code: `<p class="description">Text</p>`,
        },
        {
          type: "code",
          language: "css",
          code: `.description {
  color: gray;
}`,
        },
        {
          type: "heading",
          level: 3,
          text: "ID Selector",
        },
        {
          type: "code",
          language: "css",
          code: `#header {
  background: black;
}`,
        },
        {
          type: "heading",
          level: 3,
          text: "Universal Selector",
        },
        {
          type: "code",
          language: "css",
          code: `* {
  box-sizing: border-box;
}`,
        },
        {
          type: "heading",
          level: 3,
          text: "Grouping Selector",
        },
        {
          type: "code",
          language: "css",
          code: `h1, h2, h3 {
  font-family: sans-serif;
}`,
        },
        {
          type: "heading",
          level: 3,
          text: "Descendant Selector",
        },
        {
          type: "code",
          language: "css",
          code: `.card p {
  color: gray;
}`,
        },
        {
          type: "heading",
          level: 3,
          text: "Child Selector",
        },
        {
          type: "code",
          language: "css",
          code: `.card > p {
  color: gray;
}`,
        },
        {
          type: "heading",
          level: 3,
          text: "Attribute Selector",
        },
        {
          type: "code",
          language: "css",
          code: `input[type="email"] {
  border: 1px solid gray;
}`,
        },
      ],
    },

    {
      id: "cascade",
      title: "Cascade, Specificity & Inheritance",
      blocks: [
        {
          type: "paragraph",
          text: "Ketika beberapa aturan CSS menargetkan elemen yang sama, browser menentukan aturan mana yang digunakan melalui cascade, specificity, inheritance, dan source order.",
        },
        {
          type: "heading",
          level: 3,
          text: "Specificity",
        },
        {
          type: "paragraph",
          text: "Secara umum, selector dengan specificity lebih tinggi akan mengalahkan selector yang lebih rendah, selama tidak ada faktor cascade lain yang mengubah prioritas.",
        },
        {
          type: "code",
          language: "css",
          code: `/* Element */
p {
  color: black;
}

/* Class */
.text {
  color: blue;
}

/* ID */
#title {
  color: red;
}`,
        },
        {
          type: "list",
          items: [
            "Inline style memiliki specificity tinggi.",
            "ID selector lebih kuat daripada class selector.",
            "Class, attribute, dan pseudo-class berada di tingkat class specificity.",
            "Element dan pseudo-element berada di tingkat element specificity.",
            "Jika specificity sama, aturan yang muncul belakangan biasanya menang.",
          ],
        },
        {
          type: "callout",
          calloutType: "warning",
          title: "Hindari !important",
          text: "Penggunaan !important berlebihan membuat CSS sulit di-maintain dan mengatasi konflik styling menjadi lebih rumit.",
        },
      ],
    },

    {
      id: "box-model",
      title: "CSS Box Model",
      blocks: [
        {
          type: "paragraph",
          text: "Setiap elemen HTML pada dasarnya diperlakukan sebagai kotak yang terdiri dari content, padding, border, dan margin.",
        },
        {
          type: "list",
          items: [
            "Content: area isi elemen.",
            "Padding: jarak antara content dan border.",
            "Border: garis pembatas elemen.",
            "Margin: jarak di luar border.",
          ],
        },
        {
          type: "code",
          language: "css",
          code: `.card {
  width: 300px;
  padding: 20px;
  border: 2px solid black;
  margin: 16px;
}`,
        },
        {
          type: "heading",
          level: 3,
          text: "Box-sizing",
        },
        {
          type: "paragraph",
          text: "Dengan box-sizing: border-box, nilai width dan height sudah mencakup content, padding, dan border sehingga ukuran elemen lebih mudah dikontrol.",
        },
        {
          type: "code",
          language: "css",
          code: `* {
  box-sizing: border-box;
}`,
        },
      ],
    },

    {
      id: "colors",
      title: "Colors & Background",
      blocks: [
        {
          type: "paragraph",
          text: "CSS mendukung berbagai cara mendefinisikan warna, seperti HEX, RGB, RGBA, HSL, dan named colors.",
        },
        {
          type: "code",
          language: "css",
          code: `.card {
  color: #1f2937;
  background-color: #ffffff;
  border-color: rgb(229, 231, 235);
}

.overlay {
  background-color: rgba(0, 0, 0, 0.5);
}`,
        },
        {
          type: "heading",
          level: 3,
          text: "Background Image",
        },
        {
          type: "code",
          language: "css",
          code: `.hero {
  background-image: url("image.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}`,
        },
      ],
    },

    {
      id: "typography",
      title: "Typography",
      blocks: [
        {
          type: "paragraph",
          text: "Typography mengatur tampilan teks agar lebih mudah dibaca dan memiliki hierarki visual yang baik.",
        },
        {
          type: "code",
          language: "css",
          code: `.title {
  font-family: Arial, sans-serif;
  font-size: 32px;
  font-weight: 700;
  line-height: 1.5;
  letter-spacing: -0.5px;
  text-align: left;
}

.description {
  color: #64748b;
  line-height: 1.75;
}`,
        },
      ],
    },

    {
      id: "display",
      title: "Display",
      blocks: [
        {
          type: "paragraph",
          text: "Property display menentukan bagaimana sebuah elemen berperilaku dalam layout.",
        },
        {
          type: "list",
          items: [
            "block: mengambil ruang satu baris secara default.",
            "inline: mengalir bersama teks.",
            "inline-block: inline tetapi dapat diatur dimensinya.",
            "flex: membuat flex container.",
            "grid: membuat grid container.",
            "none: menghilangkan elemen dari layout.",
          ],
        },
        {
          type: "code",
          language: "css",
          code: `.block {
  display: block;
}

.inline {
  display: inline;
}

.flex-container {
  display: flex;
}

.grid-container {
  display: grid;
}`,
        },
      ],
    },

    {
      id: "flexbox",
      title: "Flexbox",
      blocks: [
        {
          type: "paragraph",
          text: "Flexbox adalah sistem layout satu dimensi yang cocok untuk mengatur elemen dalam satu baris atau satu kolom.",
        },
        {
          type: "heading",
          level: 3,
          text: "Container Properties",
        },
        {
          type: "code",
          language: "css",
          code: `.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}`,
        },
        {
          type: "heading",
          level: 3,
          text: "Item Properties",
        },
        {
          type: "code",
          language: "css",
          code: `.item {
  flex: 1;
}

.item:first-child {
  flex: 2;
}

.item {
  align-self: center;
  order: 1;
}`,
        },
        {
          type: "callout",
          calloutType: "tip",
          title: "Kapan menggunakan Flexbox?",
          text: "Gunakan Flexbox untuk navbar, alignment, button group, card row, dan layout yang membutuhkan distribusi ruang dalam satu dimensi.",
        },
      ],
    },

    {
      id: "grid",
      title: "CSS Grid",
      blocks: [
        {
          type: "paragraph",
          text: "CSS Grid adalah layout system dua dimensi yang memungkinkan kita mengatur baris dan kolom secara bersamaan.",
        },
        {
          type: "code",
          language: "css",
          code: `.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}`,
        },
        {
          type: "heading",
          level: 3,
          text: "Responsive Grid",
        },
        {
          type: "code",
          language: "css",
          code: `.grid {
  display: grid;
  grid-template-columns:
    repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}`,
        },
      ],
    },

    {
      id: "position",
      title: "Position",
      blocks: [
        {
          type: "paragraph",
          text: "Property position menentukan bagaimana elemen ditempatkan di halaman.",
        },
        {
          type: "list",
          items: [
            "static: posisi normal.",
            "relative: relatif terhadap posisi awal.",
            "absolute: berdasarkan containing block.",
            "fixed: berdasarkan viewport.",
            "sticky: mengikuti scroll sampai batas tertentu.",
          ],
        },
        {
          type: "code",
          language: "css",
          code: `.parent {
  position: relative;
}

.child {
  position: absolute;
  top: 0;
  right: 0;
}

.navbar {
  position: sticky;
  top: 0;
  z-index: 50;
}`,
        },
      ],
    },

    {
      id: "responsive",
      title: "Responsive Design",
      blocks: [
        {
          type: "paragraph",
          text: "Responsive design memastikan layout website dapat menyesuaikan berbagai ukuran layar, dari smartphone hingga desktop.",
        },
        {
          type: "heading",
          level: 3,
          text: "Media Query",
        },
        {
          type: "code",
          language: "css",
          code: `.container {
  padding: 16px;
}

@media (min-width: 768px) {
  .container {
    padding: 32px;
  }
}

@media (min-width: 1024px) {
  .container {
    max-width: 1200px;
    margin-inline: auto;
  }
}`,
        },
        {
          type: "heading",
          level: 3,
          text: "Mobile First",
        },
        {
          type: "paragraph",
          text: "Mobile-first berarti kita membuat styling untuk layar kecil terlebih dahulu, lalu menambahkan penyesuaian untuk layar yang lebih besar.",
        },
        {
          type: "callout",
          calloutType: "tip",
          title: "Mobile First",
          text: "Mulai dari layout sederhana untuk mobile, kemudian gunakan breakpoint untuk tablet dan desktop.",
        },
      ],
    },

    {
      id: "pseudo",
      title: "Pseudo-class & Pseudo-element",
      blocks: [
        {
          type: "paragraph",
          text: "Pseudo-class memilih elemen berdasarkan kondisi atau state. Pseudo-element menargetkan bagian tertentu dari elemen.",
        },
        {
          type: "code",
          language: "css",
          code: `/* Pseudo-class */
button:hover {
  background: blue;
}

input:focus {
  outline: 2px solid blue;
}

li:first-child {
  font-weight: bold;
}

/* Pseudo-element */
.title::before {
  content: "★ ";
}

.title::after {
  content: "";
  display: block;
  height: 2px;
  background: blue;
}`,
        },
      ],
    },

    {
      id: "transition-animation",
      title: "Transition & Animation",
      blocks: [
        {
          type: "heading",
          level: 3,
          text: "Transition",
        },
        {
          type: "paragraph",
          text: "Transition membuat perubahan nilai property berlangsung secara halus.",
        },
        {
          type: "code",
          language: "css",
          code: `.button {
  background: blue;
  transition: all 0.3s ease;
}

.button:hover {
  background: darkblue;
  transform: translateY(-2px);
}`,
        },
        {
          type: "heading",
          level: 3,
          text: "Animation",
        },
        {
          type: "code",
          language: "css",
          code: `@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.card {
  animation: fadeIn 0.5s ease;
}`,
        },
      ],
    },

    {
      id: "variables",
      title: "CSS Variables",
      blocks: [
        {
          type: "paragraph",
          text: "CSS Custom Properties memungkinkan kita menyimpan nilai yang dapat digunakan ulang di berbagai bagian stylesheet.",
        },
        {
          type: "code",
          language: "css",
          code: `:root {
  --color-primary: #6366f1;
  --color-text: #1f2937;
  --spacing: 16px;
  --radius: 12px;
}

.button {
  background: var(--color-primary);
  padding: var(--spacing);
  border-radius: var(--radius);
}`,
        },
      ],
    },

    {
      id: "practice",
      title: "Practice",
      blocks: [
        {
          type: "paragraph",
          text: "Sekarang praktikkan konsep CSS yang sudah dipelajari dengan membuat halaman profile card.",
        },
        {
          type: "list",
          items: [
            "Buat container menggunakan HTML semantic.",
            "Atur width dan max-width.",
            "Gunakan padding, border, dan margin.",
            "Atur typography dan warna.",
            "Gunakan Flexbox untuk alignment.",
            "Tambahkan hover transition.",
            "Buat layout responsive untuk mobile.",
          ],
        },
        {
          type: "callout",
          calloutType: "info",
          title: "Challenge",
          text: "Buat profile card tanpa melihat contoh code. Kalau stuck, buka kembali materi terkait dan coba implementasikan sendiri.",
        },
      ],
    },
  ],
};
