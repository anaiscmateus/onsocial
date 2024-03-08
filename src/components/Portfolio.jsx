// Portfolio.jsx
export default function Portfolio() {
  return (
    <section id="portfolio" className="pt-16">
      <div className="relative w-full pt-[141.4286%] mt-6 mb-2 overflow-hidden rounded-lg shadow-lg">
        <iframe
          className="absolute w-full h-full top-0 left-0 border-none p-0 m-0"
          loading="lazy"
          src="https://www.canva.com/design/DAF78n_yKts/w1Xc-bpEDq2Q1JE7qnAkRQ/view?embed"
          allowFullScreen
          title="Canva Portfolio"
        ></iframe>
      </div>
      <a
        href="https://www.canva.com/design/DAF78n_yKts/w1Xc-bpEDq2Q1JE7qnAkRQ/view?utm_content=DAF78n_yKts&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-700"
      >
        OnSocial Portfolio 2024
      </a>{" "}
      by Mateo Genoveva
    </section>
  );
}
