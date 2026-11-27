import Effects from "../components/Effects";
import Manifesto from "../components/Manifesto";
import HowItWorks from "../components/HowItWorks";
import BdiSimulator from "../components/BdiSimulator";
import CopyButton from "../components/CopyButton";

const TICKER = ["SINAPI", "SEINFRA-CE", "BDI analítico", "Curva ABC", "Cronograma", "Curva S", "Almoxarifado", "Financeiro", "Equipes", "Diário de obra"];
const UFS = "AC AL AM AP BA CE DF ES GO MA MG MS MT PA PB PE PI PR RJ RN RO RR RS SC SE SP TO".split(" ");
const SHEET = [
  ["3.1", "Alvenaria de vedação em bloco cerâmico", "48.912,30"],
  ["3.2", "Chapisco em alvenarias e estruturas", "6.204,85"],
  ["3.3", "Emboço/massa única, argamassa traço 1:2:8", "21.377,10"],
  ["3.4", "Contrapiso em argamassa, e = 4 cm", "14.880,42"],
];
const ABC = [100, 78, 61, 40, 31, 24, 18, 14, 10, 8, 6, 4];
const STOCK = [["Cimento CP II", 72], ["Bloco cerâmico", 14, true], ["Aço CA-50", 55]];
const FIN = [[50, 46], [72, 70], [88, 80], [100, 92]];
const TEAM = [["AM", "#9fd300"], ["RS", "#0ACCCC"], ["JL", "#ffffff"], ["PC", "#c8ef6a"], ["+6", "#7fe3ea"]];
const FACTS = [[27, "estados com a base SINAPI"], [2, "bases oficiais: SINAPI e SEINFRA-CE"], [8, "módulos conectados"], [100, "na nuvem, sem instalação", true]];
const WHO = [
  ["Construtoras", "Margem protegida", "Orçamento e execução na mesma base de dados. O desvio aparece no financeiro antes de virar prejuízo."],
  ["Escritórios de engenharia", "Orçamento defensável", "Tabelas oficiais, mês de referência e BDI com memória de cálculo para licitações e clientes exigentes."],
  ["Gestores de obra", "Canteiro sob controle", "Cronograma, estoque e diário num só lugar, com a equipe atualizando pelo celular."],
];
const FAQ = [
  ["Quais tabelas de preço a GPObras usa?", "A SINAPI, para todos os estados, e a SEINFRA, do Ceará. A SEINFRA fica disponível quando a UF do orçamento é CE, nas variantes de encargos T028 (114,15%) e T028.1 (84,44%)."],
  ["Posso usar mais de uma base no mesmo orçamento?", "Sim. Em obras no Ceará, o orçamento pode combinar composições da SINAPI e da SEINFRA, e as bases de referência ficam registradas no documento."],
  ["Como o BDI é calculado?", "Pela fórmula do TCU, com cada parcela configurável por orçamento. A GPObras gera a memória de cálculo para você anexar à proposta ou à licitação."],
  ["Preciso instalar alguma coisa?", "Não. A GPObras roda no navegador, e o app leva o diário e o estoque para o celular da equipe de campo."],
  ["Meus orçamentos ficam visíveis para outras empresas?", "Não. Cada orçamento e cada obra pertencem à conta que os criou, e o acesso é restrito ao dono e à equipe que ele autoriza."],
];

const Brand = ({ size = 32 }) => (
  <a className="brand" href="#topo">
    <img src="/simbolo.webp" alt="" width={size} height={Math.round(size * 1.15)} />
    <span>GP<b>Obras</b></span>
  </a>
);

export default function Home() {
  return (
    <>
      <Effects />
      <nav className="nav" aria-label="Principal">
        <div className="wrap">
          <Brand />
          <ul>
            <li><a href="#quem-somos">Quem somos</a></li>
            <li><a href="#modulos">Módulos</a></li>
            <li><a href="#como-funciona">Como funciona</a></li>
            <li><a href="#bdi">Simulador de BDI</a></li>
            <li><a href="#duvidas">Dúvidas</a></li>
          </ul>
          <a className="btn btn-lime" href="#contato">Solicitar demonstração</a>
        </div>
      </nav>

      <header className="hero" id="topo">
        <div className="grid-bg" aria-hidden="true"></div>
        <div className="glow" aria-hidden="true"></div>
        <div className="wrap">
          <div>
            <span className="pill"><i className="dot"></i>Software de orçamento e gestão de obras</span>
            <h1>
              <span className="line"><span>Orçamento</span></span>
              <span className="line"><span>de obras <span className="hl">preciso.</span></span></span>
              <span className="line"><span>Execução sob controle.</span></span>
            </h1>
            <p className="lead">
              Monte orçamentos com as tabelas SINAPI e SEINFRA, feche o BDI com memória de cálculo e acompanhe cronograma,
              estoque, custos e equipe na mesma plataforma.
            </p>
            <div className="ctas">
              <a className="btn btn-lime" href="#contato">Solicitar demonstração <span className="arr">→</span></a>
              <a className="btn btn-ghost" href="#modulos">Conhecer os módulos</a>
            </div>
            <div className="trust">
              <span>SINAPI por estado</span><span>SEINFRA para o Ceará</span><span>BDI analítico</span><span>Sem instalação</span>
            </div>
          </div>
          <div className="stage" aria-hidden="true">
            <div className="dim">orçamento → obra</div>
            <div className="hex-ring"></div>
            <img className="sym" src="/simbolo.webp" alt="" />
            <div className="chip c1"><small>Base</small><strong>SINAPI · CE</strong></div>
            <div className="chip c2"><small>BDI</small><strong className="ok">23,54%</strong></div>
            <div className="chip c3"><small>Curva S</small><strong>62% executado</strong></div>
            <div className="chip c4"><small>Total da obra</small><strong>R$ 812.450,00</strong></div>
          </div>
        </div>
      </header>

      <div className="ticker" aria-hidden="true">
        <div className="track">
          {[...TICKER, ...TICKER].map((t, i) => <span key={i}>{t}</span>)}
        </div>
      </div>

      <section className="manifesto light" id="quem-somos">
        <div className="wrap">
          <div className="mgrid">
            <div>
              <span className="eyebrow">Quem somos</span>
              <Manifesto />
            </div>
            <div className="purpose rv">
              <small>Nosso propósito</small>
              <strong>Dar precisão a quem constrói.</strong>
              <p>
                Somos uma plataforma brasileira feita para engenheiros, orçamentistas e gestores de obra. Juntamos as tabelas
                oficiais, o cálculo do BDI e a gestão da execução num só lugar, com a linguagem de quem vive o canteiro.
              </p>
            </div>
          </div>
          <div className="facts">
            {FACTS.map(([n, t, sup]) => (
              <div className="fact rv" key={t}>
                <b><span data-count={n}>{n}</span>{sup && <sup>%</sup>}</b>
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="modules dark" id="modulos">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Módulos</span>
            <h2>Tudo o que a obra precisa, <span className="hl">conectado.</span></h2>
            <p>
              Cada módulo conversa com o outro: o orçamento vira cronograma, o cronograma puxa o estoque e o financeiro mostra
              o previsto contra o realizado.
            </p>
          </div>
          <div className="bento">
            <article className="tile t-big rv">
              <span className="tag">Orçamentos</span>
              <h3>Planilha orçamentária com composições oficiais</h3>
              <p>Busque insumos e composições, monte etapas, veja a Curva ABC e exporte em PDF.</p>
              <div className="viz">
                <div className="sheet">
                  <div className="bar"><i></i><i></i><i></i>&nbsp;Residencial Aurora · Etapa 3<span className="src">SINAPI CE</span></div>
                  <div className="row h"><span>Item</span><span>Descrição</span><span>Und</span><span className="v">Total</span></div>
                  {SHEET.map(([c, d, v]) => (
                    <div className="row" key={c}>
                      <span className="c">{c}</span><span className="d">{d}</span><span className="c">m²</span><span className="v">{v}</span>
                    </div>
                  ))}
                  <div className="tot"><span>Total com BDI</span><b>R$ 812.450,00</b></div>
                </div>
                <div className="abc" title="Curva ABC (exemplo)">
                  {ABC.map((h, i) => <i key={i} style={{ "--h": h + "%" }}></i>)}
                </div>
              </div>
            </article>
            <article className="tile t-wide rv">
              <span className="tag">Bases oficiais</span>
              <h3>SINAPI por estado, SEINFRA para o Ceará</h3>
              <p>Escolha a UF e o mês de referência. Com a UF CE, a SEINFRA é liberada com as duas variantes de encargos.</p>
              <div className="viz ufs" aria-label="Estados com base SINAPI">
                {UFS.map((u) => <span key={u} className={u === "CE" ? "ce" : undefined}>{u}</span>)}
              </div>
            </article>
            <article className="tile rv">
              <span className="tag">BDI analítico</span>
              <h3>Memória de cálculo</h3>
              <p>Cada parcela do BDI documentada, pronta para auditoria.</p>
              <div className="viz formula">BDI = <em>(1+AC+S+R+G)</em>·(1+DF)·(1+L) / (1−I) − 1</div>
            </article>
            <article className="tile rv">
              <span className="tag">Cronograma</span>
              <h3>Prazo e Curva S</h3>
              <p>Dias de execução calculados pelas etapas.</p>
              <svg className="viz scurve" viewBox="0 0 220 90" width="100%" height="90" aria-hidden="true">
                <path className="p" d="M4 84 C 70 82, 80 20, 216 6" />
                <path className="l" d="M4 84 C 60 84, 90 46, 120 36 S 180 12, 216 8" />
              </svg>
            </article>
            <article className="tile t-wide rv">
              <span className="tag">Almoxarifado</span>
              <h3>Estoque da obra com alerta de mínimo</h3>
              <p>Entradas, saídas e o que está acabando antes de parar a frente de serviço.</p>
              <div className="viz stock">
                {STOCK.map(([n, w, low]) => (
                  <div key={n} className={low ? "low" : undefined}>
                    <span>{n}</span><b style={{ "--w": w + "%" }}></b><em>{w}%</em>
                  </div>
                ))}
              </div>
            </article>
            <article className="tile rv">
              <span className="tag">Financeiro</span>
              <h3>Previsto × realizado</h3>
              <div className="viz">
                <div className="fin">
                  {FIN.map(([a, b], i) => (
                    <div key={i}><i style={{ "--h": a + "%" }}></i><i style={{ "--h": b + "%" }}></i></div>
                  ))}
                </div>
                <div className="legend">
                  <span style={{ "--c": "rgba(255,255,255,.3)" }}>Previsto</span>
                  <span style={{ "--c": "#9fd300" }}>Realizado</span>
                </div>
              </div>
            </article>
            <article className="tile rv">
              <span className="tag">Equipes</span>
              <h3>Quem está em cada obra</h3>
              <p>Membros, funções e acesso controlado.</p>
              <div className="viz team">
                {TEAM.map(([t, c]) => <span key={t} style={{ "--c": c }}>{t}</span>)}
              </div>
            </article>
            <article className="tile t-full rv">
              <span className="tag">Diário de obra</span>
              <h3>O registro do dia, direto do canteiro</h3>
              <div className="viz diary">
                <div><i>07:10</i>Clima bom · 14 colaboradores na frente</div>
                <div><i>10:45</i>Concretagem da laje do 2º pavimento concluída</div>
                <div><i>15:20</i>3 fotos anexadas · Etapa 3 em 62%</div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="how light" id="como-funciona">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Como funciona</span>
            <h2>Do orçamento à obra em quatro passos.</h2>
          </div>
          <HowItWorks />
        </div>
      </section>

      <section className="calc dark" id="bdi">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Simulador de BDI</span>
            <h2>Mexa nas parcelas e veja o BDI <span className="hl">na hora.</span></h2>
            <p>
              É a mesma fórmula do Acórdão 2.622/2013 do TCU que a GPObras usa na memória de cálculo. A faixa em verde é a
              referência para construção de edifícios.
            </p>
          </div>
          <BdiSimulator />
        </div>
      </section>

      <section className="field-sec light">
        <div className="wrap fgrid">
          <div className="rv">
            <span className="eyebrow">Do escritório ao canteiro</span>
            <h2 style={{ fontSize: "clamp(34px,4.6vw,60px)", fontWeight: 800, marginTop: 18 }}>A obra no bolso de quem está nela.</h2>
            <p style={{ fontSize: 18, color: "var(--muted)", marginTop: 18, maxWidth: "52ch" }}>
              O app leva o diário, o estoque e o andamento das etapas para o celular do mestre de obras e do engenheiro de campo.
            </p>
            <ul className="flist">
              <li><div><b>Diário de obra com foto</b><span>Clima, efetivo e ocorrências registrados no dia.</span></div></li>
              <li><div><b>Baixa de material na hora</b><span>O almoxarifado se atualiza enquanto a obra anda.</span></div></li>
              <li><div><b>Avanço por etapa</b><span>O escritório vê o percentual executado sem ligar para ninguém.</span></div></li>
            </ul>
          </div>
          <div className="phone" aria-hidden="true">
            <div className="scr">
              <div className="ph"><small>Diário · hoje</small><b>Residencial Aurora</b></div>
              <div className="pb">
                <div className="card"><span className="k">Etapa 3 · Alvenaria</span><b>62% executado</b><div className="bar2"><i></i></div></div>
                <div className="card"><span className="k">Efetivo</span><b>14 colaboradores</b></div>
                <div className="card"><span className="k">Ocorrência</span>Entrega de blocos remarcada para amanhã<div className="photo">foto anexada</div></div>
                <div className="card"><span className="k">Estoque</span><b style={{ color: "#C2410C" }}>Bloco cerâmico: 14%</b></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="who light">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Para quem</span>
            <h2>Feito para quem orça, planeja e executa obras.</h2>
          </div>
          <div className="who-grid">
            {WHO.map(([k, h, p]) => (
              <article className="rv" key={k}><span className="k">{k}</span><h3>{h}</h3><p>{p}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="faq light" id="duvidas">
        <div className="wrap faq-grid">
          <div className="sec-head" style={{ margin: 0 }}>
            <span className="eyebrow">Dúvidas</span>
            <h2>Perguntas que sempre recebemos.</h2>
          </div>
          <div>
            {FAQ.map(([q, a], i) => (
              <details key={q} open={i === 0}><summary>{q}</summary><p>{a}</p></details>
            ))}
          </div>
        </div>
      </section>

      <section className="final dark" id="contato">
        <img className="bigsym" src="/simbolo.webp" alt="" aria-hidden="true" />
        <div className="wrap" style={{ position: "relative" }}>
          <span className="eyebrow">Vamos conversar</span>
          <h2 style={{ marginTop: 22 }}>Seu próximo orçamento começa <span className="hl">aqui.</span></h2>
          <div className="row2">
            <div className="contacts">
              <div className="contact"><small>Comercial</small><span className="addr">comercialgpobras@gmail.com</span><CopyButton text="comercialgpobras@gmail.com" /></div>
              <div className="contact"><small>Suporte</small><span className="addr">suporte@gpobras.com.br</span><CopyButton text="suporte@gpobras.com.br" /></div>
              <div className="contact"><small>Instagram</small><a className="addr" href="https://www.instagram.com/gpobras_/" target="_blank" rel="noopener">@gpobras_</a></div>
            </div>
            <p style={{ color: "#c9d6e8", maxWidth: "34ch" }}>
              Mande um e-mail pedindo uma demonstração. A gente mostra a plataforma com uma obra parecida com a sua.
            </p>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <Brand size={28} />
          <span>Orçamento e gestão de obras · Ceará, Brasil</span>
          <nav aria-label="Rodapé">
            <a href="#quem-somos">Quem somos</a><a href="#modulos">Módulos</a><a href="#bdi">Simulador de BDI</a><a href="#contato">Contato</a>
          </nav>
        </div>
      </footer>
    </>
  );
}
