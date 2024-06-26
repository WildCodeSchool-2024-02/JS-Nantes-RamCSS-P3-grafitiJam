import "./styles/Tag.css";

function TermsTag() {
  const tags = [
    {
      title: "Buble",
      image:
        "https://raw.githubusercontent.com/WildCodeSchool-2024-02/JS-Nantes-RamCSS-P3-grafitiJam/main/server/public/assets/tags/buble.svg",
      explanation: "Explication pour Buble",
    },
    {
      title: "Cubic",
      image:
        "https://raw.githubusercontent.com/WildCodeSchool-2024-02/JS-Nantes-RamCSS-P3-grafitiJam/main/server/public/assets/tags/cubic.svg",
      explanation: "Explication pour Cubic",
    },
    {
      title: "Figure",
      image:
        "https://raw.githubusercontent.com/WildCodeSchool-2024-02/JS-Nantes-RamCSS-P3-grafitiJam/main/server/public/assets/tags/figure.svg",
      explanation: "Explication pour Figure",
    },
    {
      title: "Lettring",
      image:
        "https://raw.githubusercontent.com/WildCodeSchool-2024-02/JS-Nantes-RamCSS-P3-grafitiJam/main/server/public/assets/tags/lettring.svg",
      explanation: "Explication pour Lettring",
    },
    {
      title: "S",
      image:
        "https://raw.githubusercontent.com/WildCodeSchool-2024-02/JS-Nantes-RamCSS-P3-grafitiJam/main/server/public/assets/tags/tag.svg",
      explanation: "Explication pour Tag",
    },
    {
      title: "M",
      image:
        "https://raw.githubusercontent.com/WildCodeSchool-2024-02/JS-Nantes-RamCSS-P3-grafitiJam/main/server/public/assets/tags/S.svg",
      explanation: "Explication pour S",
    },
    {
      title: "L",
      image:
        "https://raw.githubusercontent.com/WildCodeSchool-2024-02/JS-Nantes-RamCSS-P3-grafitiJam/main/server/public/assets/tags/M.svg",
      explanation: "Explication pour M",
    },
    {
      title: "XL",
      image:
        "https://raw.githubusercontent.com/WildCodeSchool-2024-02/JS-Nantes-RamCSS-P3-grafitiJam/main/server/public/assets/tags/L.svg",
      explanation: "Explication pour L",
    },
    {
      title: "Monumental",
      image:
        "https://raw.githubusercontent.com/WildCodeSchool-2024-02/JS-Nantes-RamCSS-P3-grafitiJam/main/server/public/assets/tags/XL.svg",
      explanation: "Explication pour XL",
    },
    {
      title: "Monumental",
      image:
        "https://raw.githubusercontent.com/WildCodeSchool-2024-02/JS-Nantes-RamCSS-P3-grafitiJam/main/server/public/assets/tags/Mtl.svg",
      explanation: "Explication pour Monumental",
    },
  ];

  return (
    <>
      {/* eslint-disable-next-line no-shadow */}
      {tags.map((tags, index) => (
          // eslint-disable-next-line react/no-array-index-key
        <div key={index} className="terms-badge-container">
          <div className="title-image">
            <h2>{tags.title}</h2>
            <img src={tags.image} alt={tags.explanation} />
          </div>
          <p>{tags.explanation}</p>
        </div>
      ))}
    </>
  );
}

export default TermsTag;
