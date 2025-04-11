import { CardDetails } from "../../data";

function InfoCard({ title, description }: CardDetails) {
  return (
    <>
      <div>
        <p>{title}</p>
        <p>{description}</p>
      </div>
    </>
  );
}

export default InfoCard;
