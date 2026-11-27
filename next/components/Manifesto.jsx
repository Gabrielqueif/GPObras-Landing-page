"use client";
import { useEffect, useRef, useState } from "react";

const TEXT =
  "Toda obra começa com um número. Planilha solta, preço desatualizado e prazo no improviso custam caro. A GPObras existe para que esse número esteja certo do orçamento à entrega.";
const WORDS = TEXT.split(/\s+/);
const ACCENTS = ["GPObras", "certo"];

// Palavras acendem conforme a rolagem.
export default function Manifesto() {
  const ref = useRef(null);
  const [lit, setLit] = useState(0);

  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setLit(WORDS.length);
      return;
    }
    const update = () => {
      const r = ref.current.getBoundingClientRect(), vh = innerHeight;
      const p = Math.min(1, Math.max(0, (vh * 0.85 - r.top) / (r.height + vh * 0.35)));
      setLit(Math.round(p * WORDS.length));
    };
    addEventListener("scroll", update, { passive: true });
    update();
    return () => removeEventListener("scroll", update);
  }, []);

  return (
    <p className="big" ref={ref} style={{ marginTop: 22 }}>
      {WORDS.map((w, i) => (
        <span key={i}>
          <span className={`w${ACCENTS.some((a) => w.startsWith(a)) ? " acc" : ""}${i < lit ? " on" : ""}`}>{w}</span>{" "}
        </span>
      ))}
    </p>
  );
}
