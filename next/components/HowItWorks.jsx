"use client";
import { useEffect, useRef, useState } from "react";

const STEPS = [
  ["Escolha a base e o estado", "SINAPI para qualquer UF, SEINFRA quando a obra é no Ceará. O mês de referência fica gravado no orçamento."],
  ["Monte a planilha", "Organize por etapas, busque composições e insumos com preço e acompanhe a Curva ABC enquanto orça."],
  ["Feche o BDI", "Configure cada parcela e gere a memória de cálculo. Nada de BDI copiado de outra planilha."],
  ["Transforme em obra", "O orçamento vira cronograma, estoque, financeiro e diário. A equipe acompanha a execução pelo celular."],
];

const ROWS = [
  ["3.1", "Alvenaria de vedação", "48.912,30"],
  ["3.2", "Chapisco", "6.204,85"],
  ["3.3", "Massa única", "21.377,10"],
  ["3.4", "Contrapiso", "14.880,42"],
];

const MEM = [
  ["Administração central (AC)", "4,00%"],
  ["Seguro + garantia (S+G)", "0,80%"],
  ["Risco (R)", "1,27%"],
  ["Despesas financeiras (DF)", "1,23%"],
  ["Lucro (L)", "7,40%"],
  ["Tributos (I)", "6,65%"],
];

const GANTT = [
  ["Fundação", "0%", "22%", true],
  ["Estrutura", "16%", "30%", true],
  ["Alvenaria", "38%", "28%"],
  ["Instalações", "50%", "30%"],
  ["Revestimentos", "62%", "26%"],
  ["Acabamento", "78%", "22%"],
];

export default function HowItWorks() {
  const [active, setActive] = useState(0);
  const refs = useRef([]);

  useEffect(() => {
    const so = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(+e.target.dataset.step)),
      { rootMargin: "-45% 0px -45% 0px" }
    );
    refs.current.forEach((s) => s && so.observe(s));
    let timer;
    if (matchMedia("(max-width:900px)").matches && !matchMedia("(prefers-reduced-motion: reduce)").matches)
      timer = setInterval(() => setActive((a) => (a + 1) % 4), 3200);
    return () => {
      so.disconnect();
      clearInterval(timer);
    };
  }, []);

  const pane = (i) => `pane${active === i ? " on" : ""}`;

  return (
    <div className="how-grid">
      <div className="steps">
        {STEPS.map(([h, p], i) => (
          <div key={i} ref={(el) => (refs.current[i] = el)} data-step={i} className={`step${active === i ? " on" : ""}`}>
            <span className="n">0{i + 1}</span>
            <div>
              <h3>{h}</h3>
              <p>{p}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="screen" aria-hidden="true">
        <div className="tb">
          <i></i>
          <i></i>
          <i></i>
          <span className="url">app.gpobras.com.br</span>
        </div>
        <div className="panes">
          <div className={pane(0)}>
            <h4>Novo orçamento</h4>
            <div className="sub">Defina a base de preços</div>
            <div className="opt">
              <label className="sel"><b>SINAPI</b><span>Nacional · por UF</span></label>
              <label className="sel"><b>SEINFRA</b><span>Somente CE</span></label>
            </div>
            <div className="field">Estado<div>Ceará (CE) <span className="mono">▾</span></div></div>
            <div className="field">Encargos SEINFRA<div>T028.1 · 84,44% <span className="mono">▾</span></div></div>
            <div className="note">SEINFRA liberada porque a UF selecionada é CE.</div>
          </div>
          <div className={pane(1)}>
            <h4>Planilha · Residencial Aurora</h4>
            <div className="sub">Etapa 3 · Alvenarias e revestimentos</div>
            <div className="sheet" style={{ boxShadow: "none", border: "1px solid var(--line)" }}>
              <div className="row h"><span>Item</span><span>Descrição</span><span>Und</span><span className="v">Total</span></div>
              {ROWS.map(([c, d, v]) => (
                <div className="row" key={c}>
                  <span className="c">{c}</span><span className="d">{d}</span><span className="c">m²</span><span className="v">{v}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={pane(2)}>
            <h4>Memória de cálculo do BDI</h4>
            <div className="sub">Edificações · faixa de referência do TCU</div>
            <div className="mem">
              {MEM.map(([k, v]) => (
                <div key={k}><span>{k}</span>{v}</div>
              ))}
              <div className="res"><span style={{ color: "#c9d6e8" }}>BDI calculado</span><b>23,54%</b></div>
            </div>
          </div>
          <div className={pane(3)}>
            <h4>Obra em andamento</h4>
            <div className="sub">Cronograma físico · 62% executado</div>
            <div className="gantt">
              {GANTT.map(([n, s, w, done]) => (
                <div key={n} className={done ? "done" : undefined}>
                  <span>{n}</span>
                  <b style={{ "--s": s, "--w": w }}></b>
                </div>
              ))}
            </div>
            <div className="note" style={{ marginTop: 18 }}>Bloco cerâmico abaixo do estoque mínimo na Etapa 3.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
