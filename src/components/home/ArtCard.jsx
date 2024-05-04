import ArtSingleCard from "./ArtSingleCard";

const ArtCard = ({ art }) => {
  return (
    <div className="grid sm:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
      {art.map((item) => (
        <ArtSingleCard key={item._id} art={item} />
      ))}
    </div>
  );
};

export default ArtCard;
