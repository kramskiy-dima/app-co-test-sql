import CleanDesignIcon from "../../images/CleanDesignIcon.svg";
import SecureDataIcon from "../../images/SecureDataIcon.svg";
import RetinaReadyIcon from "../../images/RetinaReadyIcon.svg";

const HowWeDoSection = () => {
  const cards = [
    {
      title: "Clean Design",
      description: "Increase sales by showing true dynamics of your website.",
      icon: CleanDesignIcon,
    },
    {
      title: "Secure Data",
      description:
        "Build your online store’s trust using Social Proof & Urgency.",
      icon: SecureDataIcon,
    },
    {
      title: "Retina Ready",
      description:
        "Realize importance of social proof in customer’s purchase decision.",
      icon: RetinaReadyIcon,
    },
  ];

  return (
    <section className="section-how-we-do">
      <div className="container">
        <h2 className="title-how-we-do">
          <span>Why</span> small business owners
          <br /> love
          <span> AppCo?</span>
        </h2>
        <p className="description-title-how-we-do">
          Our design projects are fresh and simple and will benefit your
          business greatly. Learn more about our work!
        </p>
        <ul className="card-list">
          {cards.map(({ icon, title, description }, i) => (
            <li key={i} className="card">
              <img src={icon} alt={title} />
              <h3 className="card-title">{title}</h3>
              <p className="card-description">{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default HowWeDoSection;
