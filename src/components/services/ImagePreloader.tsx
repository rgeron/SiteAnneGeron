export default function ImagePreloader() {
  return (
    <div className="hidden">
      {/* Preload Blaise & Marie images */}
      <img src="/images/blaise&marie/page1.png" alt="preload" />
      <img src="/images/blaise&marie/page2.png" alt="preload" />

      {/* Preload Sante Partners images */}
      {[1, 2, 3, 4, 5, 6].map((num) => (
        <img key={num} src={`/images/SP/SP${num}.png`} alt="preload" />
      ))}
    </div>
  );
}
