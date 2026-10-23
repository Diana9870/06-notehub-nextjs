"use client";
export default function NoteDetailsError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main style={{ padding: 24 }}>
      <p>Could not fetch note details. {error.message}</p>
      <button onClick={reset}>Try again</button>
    </main>
  );
}
