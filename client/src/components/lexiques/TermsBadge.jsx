import "./styles/Badge.css";

function TermsBadge() {
  const badges = [
    {
      title: "Gold",
      image:
        "https://raw.githubusercontent.com/WildCodeSchool-2024-02/JS-Nantes-RamCSS-P3-grafitiJam/main/server/public/assets/badges/golden.png",
      explanation:
        "Une fois que vous avez scanné et enregistré 50 graffitis différents, validés par les experts, vous recevrez le badge Golden. Vous pourrez voir ce badge dans votre profil et vous deviendrez validateur expert.",
    },
    {
      title: "Silver",
      image:
        "https://raw.githubusercontent.com/WildCodeSchool-2024-02/JS-Nantes-RamCSS-P3-grafitiJam/main/server/public/assets/badges/silver.png",
      explanation:
        "Une fois que vous avez scanné et enregistré 25 graffitis différents, validés par les experts, vous recevrez le badge Silver. Ce badge sera visible dans votre profil.",
    },
    {
      title: "Bronze",
      image:
        "https://raw.githubusercontent.com/WildCodeSchool-2024-02/JS-Nantes-RamCSS-P3-grafitiJam/main/server/public/assets/badges/bronze.png",
      explanation:
        "Une fois que vous avez scanné et enregistré 10 graffitis différents, validés par les experts, vous recevrez le badge Bronze. Vous pourrez voir ce badge dans votre profil.",
    },
    {
      title: "Level 1",
      image:
        "https://raw.githubusercontent.com/WildCodeSchool-2024-02/JS-Nantes-RamCSS-P3-grafitiJam/main/server/public/assets/badges/1.png",
      explanation:
        "Description : Ce badge est obtenu lorsque vous trouvez et scannez 5 graffitis dans un même style.\n" +
        "Objectif : Recherchez et enregistrez 5 graffitis qui partagent des caractéristiques stylistiques similaires.",
    },
    {
      title: "Level 2",
      image:
        "https://raw.githubusercontent.com/WildCodeSchool-2024-02/JS-Nantes-RamCSS-P3-grafitiJam/main/server/public/assets/badges/2.png",
      explanation:
        "Description : Ce badge est obtenu lorsque vous trouvez et scannez 10 graffitis dans un même style.\n" +
        "Objectif : Recherchez et enregistrez 10 graffitis avec des éléments de style communs.",
    },
    {
      title: "Level 3",
      image:
        "https://raw.githubusercontent.com/WildCodeSchool-2024-02/JS-Nantes-RamCSS-P3-grafitiJam/main/server/public/assets/badges/3.png",
      explanation:
        "Description : Ce badge est obtenu lorsque vous trouvez et scannez 20 graffitis dans un même style.\n" +
        "Objectif : Recherchez et enregistrez 20 graffitis ayant des caractéristiques stylistiques similaires.",
    },
    {
      title: "Level 4",
      image:
        "https://raw.githubusercontent.com/WildCodeSchool-2024-02/JS-Nantes-RamCSS-P3-grafitiJam/main/server/public/assets/badges/4.png",
      explanation:
        "Description : Ce badge est obtenu lorsque vous trouvez et scannez 50 graffitis dans un même style.\n" +
        "Objectif : Recherchez et enregistrez 50 graffitis qui appartiennent à un même style artistique.",
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
          <div className="scrollable-div">
            <p>{badge.explanation}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default TermsBadge;
