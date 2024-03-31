// === Libs modules === 
// === Components ===
import ImageCard from "../ImageCard/ImageCard";
// === Styles

export default function ImageGallery({ gallery }) {
console.log(Array.isArray(gallery))

  return (
    <>
      <ul>
        {gallery.map(({ id, small, description }) => {
          return (
          <li key={id}>
          <ImageCard
            src={small}
            alt={description} />
        </li>
            )
        })}
        
        
      </ul>
    </>
  );
}
