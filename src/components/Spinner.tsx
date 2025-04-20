export function Spinner({
  show,
  wait,
}: {
  show?: boolean;
  wait?: `delay-${number}`;
}) {
  if (!show) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-10 z-50"
      role="status"
    >
      <div
        className={`w-16 h-16 rounded-full border-4 border-solid border-t-primary border-b-primary border-l-transparent border-r-transparent animate-spin ${
          show ?? true
            ? `opacity-1 duration-500 ${wait ?? "delay-300"}`
            : "duration-500 opacity-0 delay-0"
        }`}
        aria-label="Loading"
      ></div>
    </div>
  );
}
