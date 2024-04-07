export default function ImageCard({ src, alt, onClick }) {
  return (
    <div>
      <img src={src} alt={alt} onClick={onClick} />
    </div>
  );
}
