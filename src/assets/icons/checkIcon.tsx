export default function AnimatedCheck({ show }: { show: boolean }) {
  return (
    <div className="check-container">
      {show && (
        <svg
          className="checkmark"
          viewBox="0 0 52 52"
        >
          <circle className="checkmark-circle" cx="26" cy="26" r="25" />
          <path
            className="checkmark-check"
            fill="none"
            d="M14 27 l7 7 l17 -17"
          />
        </svg>
      )}
    </div>
  );
}
