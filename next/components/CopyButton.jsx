"use client";
import { useState } from "react";

export default function CopyButton({ text }) {
  const [label, setLabel] = useState("Copiar");

  const select = (btn) => {
    const r = document.createRange();
    r.selectNodeContents(btn.previousElementSibling);
    const s = getSelection();
    s.removeAllRanges();
    s.addRange(r);
    setLabel("Selecionado");
  };

  const onClick = (e) => {
    const btn = e.currentTarget;
    const done = () => {
      setLabel("Copiado");
      setTimeout(() => setLabel("Copiar"), 1800);
    };
    try {
      navigator.clipboard.writeText(text).then(done, () => select(btn));
    } catch {
      select(btn);
    }
  };

  return (
    <button className="copy" type="button" onClick={onClick}>
      {label}
    </button>
  );
}
