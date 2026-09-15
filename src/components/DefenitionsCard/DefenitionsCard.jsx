import "../DefenitionsCard/DefenitionsCard.css";

const DefenitionCard = ({ card }) => {
  return (
    <article className="definition-card">
      <div className="definition-card__content">
        <h2>{card.title}</h2>
        <p>{card.text}</p>
      </div>
    </article>
  );
}

export default DefenitionCard;