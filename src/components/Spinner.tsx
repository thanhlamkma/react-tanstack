export function Spinner({
  show,
  wait,
}: {
  show?: boolean
  wait?: `delay-${number}`
}) {
  return (
    <div
      className={`inline-block px-3 transition ${(show ?? true)
          ? `opacity-1 duration-500 ${wait ?? 'delay-300'}`
          : 'duration-500 opacity-0 delay-0'
        }`}
    >
      <div className="flex items-center justify-center h-screen">
        <svg
          className="animate-spin h-10 w-10 text-blue-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            fill="none"
            strokeWidth="4"
            stroke="currentColor"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 1 1 16 0A8 8 0 0 1 4 12zm2.5-1h9a2.5 2.5 0 1 1-5 0h-4a2.5 2.5 0 0 1-4.5-1z"
          />
        </svg>
      </div>
    </div>
  )
}