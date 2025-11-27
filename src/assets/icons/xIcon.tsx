export default function AnimatedX({ show }: { show: boolean }) {
  return (
    <div className="x-container">
      {show && (
        <svg className="xmark" viewBox="0 0 52 52">
          <circle className="xmark-circle" cx="26" cy="26" r="25" />

          {/* X — ikki chiziq */}
          <path
            className="xmark-line1"
            d="M18 18 L34 34"
            fill="none"
          />
          <path
            className="xmark-line2"
            d="M34 18 L18 34"
            fill="none"
          />
        </svg>
      )}
    </div>
  );
}
