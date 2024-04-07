// === Libs modules ===
// === Components ===
import ImageCard from "../ImageCard/ImageCard";
// === Styles

export default function ImageGallery({ gallery, handleModal }) {
  console.log(Array.isArray(gallery));
  console.log(gallery[0]);

  const handleClick = (bigImage) => {
    handleModal(bigImage);
  };

  return (
    <>
      <ul>
        {gallery.map(({ id, urls: { small, regular }, description }) => {
          return (
            <li key={id}>
              <ImageCard
                src={small}
                alt={description}
                onClick={() =>
                  handleClick({ id, urls: { small, regular }, description })
                }
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}
