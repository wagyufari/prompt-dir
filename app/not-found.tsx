import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 text-ink">
      <div className="max-w-md text-center">
        <p className="text-sm font-semibold uppercase tracking-normal text-moss">
          Not found
        </p>
        <h1 className="mt-3 text-3xl font-semibold">Prompt missing</h1>
        <p className="mt-3 text-ink/65">
          This prompt is not in the library yet.
        </p>
        <Link
          className="mt-6 inline-flex h-10 items-center rounded-lg bg-ink px-4 text-sm font-semibold text-white"
          href="/"
        >
          Back to prompts
        </Link>
      </div>
    </main>
  );
}
