"use client";

import Image from "next/image";
import { Check, Clipboard, Sparkles } from "lucide-react";
import { useState } from "react";
import { prompts } from "@/data/prompts";

export default function Home() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [message, setMessage] = useState("");

  const copyToClipboard = (id: string, text: string) => {
    setCopiedId(id);
    setMessage("Copied prompt");
    window.setTimeout(() => {
      setCopiedId(null);
      setMessage("");
    }, 1800);

    void writeClipboard(text).then((copied) => {
      if (!copied) {
        setCopiedId(null);
        setMessage("Copy failed");
      }
    });
  };

  return (
    <main className="min-h-screen px-4 pb-8 pt-4 text-ink sm:px-6 lg:px-8">
      <section className="relative mx-auto mb-6 flex min-h-[58vh] w-full max-w-7xl items-end overflow-hidden rounded-[2.4rem] p-5 shadow-[0_28px_90px_rgba(16,17,20,0.18)] sm:p-8 lg:min-h-[62vh]">
        <Image
          src={prompts[0].image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white/14 to-transparent" />

        <div className="relative max-w-2xl text-white">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/16 px-3 py-1 text-sm font-semibold text-white shadow-sm ring-1 ring-white/20 backdrop-blur-xl">
            <Sparkles size={15} aria-hidden />
            Promptdir
          </div>
          <h1 className="text-5xl font-semibold tracking-normal sm:text-6xl lg:text-7xl">
            Prompts, polished.
          </h1>
          <p className="mt-4 max-w-xl text-base leading-7 text-white/74 sm:text-lg">
            A quiet place for image prompts that are ready the moment you need
            them.
          </p>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {prompts.map((prompt) => {
          const copied = copiedId === prompt.id;

          return (
            <article
              key={prompt.id}
              className="group overflow-hidden rounded-[2rem] border border-white/80 bg-white/78 p-3 shadow-[0_20px_60px_rgba(16,17,20,0.1)] backdrop-blur-2xl transition hover:-translate-y-1 hover:bg-white"
            >
              <div className="relative aspect-square overflow-hidden rounded-[1.55rem]">
                <Image
                  src={prompt.image}
                  alt=""
                  fill
                  priority
                  sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-contain transition duration-500 group-hover:scale-105"
                />
              </div>

              <h2 className="mt-3 truncate px-1 text-sm font-semibold text-ink/78">
                {prompt.title}
              </h2>

              <button
                className="mt-3 inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-ink px-4 text-sm font-semibold text-white transition hover:bg-ink/80"
                onClick={() => copyToClipboard(prompt.id, prompt.prompt)}
                aria-label="Copy prompt"
              >
                {copied ? (
                  <Check size={17} aria-hidden />
                ) : (
                  <Clipboard size={17} aria-hidden />
                )}
                {copied ? "Copied" : "Copy prompt"}
              </button>
            </article>
          );
        })}
      </section>

      <div
        className={`fixed bottom-6 left-1/2 z-20 -translate-x-1/2 rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white shadow-[0_18px_50px_rgba(16,17,20,0.22)] transition ${
          message
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-3 opacity-0"
        }`}
        role="status"
        aria-live="polite"
      >
        {message}
      </div>
    </main>
  );
}

async function writeClipboard(text: string) {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      return fallbackCopy(text);
    }
  }

  return fallbackCopy(text);
}

function fallbackCopy(text: string) {
  const textarea = document.createElement("textarea");

  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  textarea.style.top = "0";
  document.body.appendChild(textarea);
  textarea.select();

  try {
    return document.execCommand("copy");
  } catch {
    return false;
  } finally {
    document.body.removeChild(textarea);
  }
}
