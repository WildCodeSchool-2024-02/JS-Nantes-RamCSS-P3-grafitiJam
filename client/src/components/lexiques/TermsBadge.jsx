import "./styles/Badge.css";

function TermsBadge() {
  const badges = [
    {
      title: "Gold",
      image:
        "https://raw.githubusercontent.com/WildCodeSchool-2024-02/JS-Nantes-RamCSS-P3-grafitiJam/main/server/public/assets/badges/golden.png",
      explanation: "Explication pour Gold",
    },
    {
      title: "Silver",
      image:
        "https://raw.githubusercontent.com/WildCodeSchool-2024-02/JS-Nantes-RamCSS-P3-grafitiJam/main/server/public/assets/badges/silver.png",
      explanation: "Explication pour Silver",
    },
    {
      title: "Bronze",
      image:
        "https://raw.githubusercontent.com/WildCodeSchool-2024-02/JS-Nantes-RamCSS-P3-grafitiJam/main/server/public/assets/badges/bronze.png",
      explanation: "Explication pour Bronze",
    },
    {
      title: "Level 1",
      image:
        "https://raw.githubusercontent.com/WildCodeSchool-2024-02/JS-Nantes-RamCSS-P3-grafitiJam/main/server/public/assets/badges/1.png",
      explanation: "Explication pour Level 1",
    },
    {
      title: "Level 2",
      image:
        "https://raw.githubusercontent.com/WildCodeSchool-2024-02/JS-Nantes-RamCSS-P3-grafitiJam/main/server/public/assets/badges/2.png",
      explanation: "Explication pour Level 2",
    },
    {
      title: "Level 3",
      image:
        "https://raw.githubusercontent.com/WildCodeSchool-2024-02/JS-Nantes-RamCSS-P3-grafitiJam/main/server/public/assets/badges/3.png",
      explanation: "Explication pour Level 3",
    },
    {
      title: "Level 4",
      image:
        "https://raw.githubusercontent.com/WildCodeSchool-2024-02/JS-Nantes-RamCSS-P3-grafitiJam/main/server/public/assets/badges/4.png",
      explanation: "Explication pour Level 4",
    },
  ];

  return (
    <>
      {badges.map((badge, index) => (
          // eslint-disable-next-line react/no-array-index-key
        <div key={index} className="terms-badge-container">
          <div className="title-image">
            <h2>{badge.title}</h2>
            <img src={badge.image} alt={badge.explanation} />
          </div>
          <p>{badge.explanation}</p>
        </div>
      ))}
    </>
  );
}

export default TermsBadge;
