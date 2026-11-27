"use client";
import { useState } from "react";
import { calcBdi } from "../lib/bdi";

const FIELDS = [
  { id: "ac", label: "Administração central", abbr: "AC", min: 0, max: 8, step: 0.05, value: 4 },
  { id: "sg", label: "Seguro + garantia", abbr: "S+G", min: 0, max: 2, step: 0.05, value: 0.8 },
  { id: "r", label: "Risco", abbr: "R", min: 0, max: 4, step: 0.01, value: 1.27 },
  { id: "df", label: "Despesas financeiras", abbr: "DF", min: 0, max: 3, step: 0.01, value: 1.23 },
  { id: "l", label: "Lucro", abbr: "L", min: 0, max: 12, step: 0.05, value: 7.4 },
  { id: "i", label: "Tributos", abbr: "I", min: 0, max: 12, step: 0.05, value: 6.65 },
];
const MIN = 15, MAX = 32, Q1 = 20.34, Q3 = 25.0;
const pct = (v) => v.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const pos = (v) => ((Math.min(MAX, Math.max(MIN, v)) - MIN) / (MAX - MIN)) * 100 + "%";

export default function BdiSimulator() {
  const [vals, setVals] = useState(() => Object.fromEntries(FIELDS.map((f) => [f.id, f.value])));
  const bdi = calcBdi(vals);
  const ok = bdi >= Q1 && bdi <= Q3;

  return (
    <div className="calc-grid">
      <form className="sliders" onSubmit={(e) => e.preventDefault()}>
        {FIELDS.map((f) => (
          <div className="sl" key={f.id}>
            <div className="top">
              <label htmlFor={f.id}>
                {f.label} <small>{f.abbr}</small>
              </label>
              <output htmlFor={f.id}>{pct(vals[f.id])}%</output>
            </div>
            <input
              type="range"
              id={f.id}
              min={f.min}
              max={f.max}
              step={f.step}
              value={vals[f.id]}
              style={{ "--p": ((vals[f.id] - f.min) / (f.max - f.min)) * 100 + "%" }}
              onChange={(e) => setVals((v) => ({ ...v, [f.id]: +e.target.value }))}
            />
          </div>
        ))}
      </form>
      <div className="result" aria-live="polite">
        <span className="eyebrow" style={{ color: "var(--soft-d)" }}>BDI resultante</span>
        <div className="val">
          <span>{pct(bdi)}</span>
          <small>%</small>
        </div>
        <div className="gauge" aria-hidden="true">
          <div className="rail" />
          <div className="band" style={{ left: pos(Q1), width: ((Q3 - Q1) / (MAX - MIN)) * 100 + "%" }} />
          <div className="mk" style={{ left: pos(bdi) }} />
          <span className="lbl" style={{ left: pos(Q1) }}>20,34%</span>
          <span className="lbl" style={{ left: pos(Q3) }}>25,00%</span>
        </div>
        <span className={`status ${ok ? "in" : "out"}`}>
          {ok ? "Dentro da faixa de referência" : bdi < Q1 ? "Abaixo da faixa de referência" : "Acima da faixa de referência"}
        </span>
        <div className="formula">
          BDI = <em>(1 + AC + S + R + G)</em> × (1 + DF) × (1 + L) ÷ (1 − I) − 1
        </div>
        <p className="disc">
          Simulação para fins de demonstração. Faixa de referência para construção de edifícios: 1º quartil 20,34%, 3º
          quartil 25,00%.
        </p>
      </div>
    </div>
  );
}
