
import '../styles/Ferramentas.css';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';

export default function Ferramentas() {
  return (
    <div className="ferramentas-page">
      <div className="container">
        {/* Header Hero */}
        <section className="ferramentas-hero">
          <div>
            <Badge variant="default" className="badge-dark">Ecosistema Constructo Core</Badge>
            <h1>Ferramentas para quem <br/><span className="highlight-box">Constroi o amanhã</span></h1>
          </div>
          <div className="ferramentas-header-desc">
            O GPObras centraliza toda a inteligência da sua obra em uma interface técnica de alta precisão. Do planejamento estrutural à entrega das chaves.
          </div>
        </section>

        {/* Feature Highlights */}
        <section className="features-showcase">
          <div className="main-feature-block">
            <div className="feature-large">
              <div className="feature-large-header">
                <div>
                  <h3>Monitor de Inteligência</h3>
                  <p>Fluxo de dados em tempo real, KPIs críticos e saúde estrutural do empreendimento.</p>
                </div>
                <div style={{color: '#00B4D8', fontSize: '24px'}}>❖</div>
              </div>
              <img src="/home_dashboard.png" alt="Monitor" /> 
            </div>
            <div className="feature-side">
              <h3>Gestão de Projetos</h3>
              <p>Estruturação de EAPs multinível com controle de dependências paramétricas.</p>
              <Button variant="ghost" style={{marginTop: 'auto', padding: 0}}>EXPLORAR MÓDULO →</Button>
            </div>
          </div>

          <div className="feature-grid">
            <div className="feature-card feature-card-full">
              <div className="feature-content">
                <Badge variant="default" className="badge-success" style={{marginBottom: '16px'}}>Controle de Fluxo Crítico</Badge>
                <h4>Cronograma de Gantt Preditivo</h4>
                <p>Algoritmos de ajuste automático para identificação imediata de gargalos operacionais e reequilíbrio de prazos em cascata.</p>
                <div style={{display: 'flex', gap: '24px', marginTop: '24px'}}>
                   <div>
                      <div style={{fontSize: '1.875rem', fontWeight: '800', color: '#00B4D8'}}>0%</div>
                      <div style={{fontSize: '0.75rem', fontWeight: 'bold', color: 'var(--text-secondary)'}}>Tolerância a Atrasos</div>
                   </div>
                   <div>
                      <div style={{fontSize: '1.875rem', fontWeight: '800', color: '#00B4D8'}}>Native</div>
                      <div style={{fontSize: '0.75rem', fontWeight: 'bold', color: 'var(--text-secondary)'}}>Integração BIM</div>
                   </div>
                </div>
              </div>
              <div className="feature-visual" style={{background: '#fff', padding: '24px', borderRadius: '8px', minHeight: '150px'}}>
                <div style={{height: '12px', width: '60%', background: '#B4FA00', marginBottom: '8px', borderRadius: '4px'}}></div>
                <div style={{height: '12px', width: '40%', background: '#E2E8F0', marginBottom: '8px', borderRadius: '4px', marginLeft: '20%'}}></div>
                <div style={{height: '12px', width: '30%', background: '#FCA5A5', marginBottom: '8px', borderRadius: '4px', marginLeft: '50%'}}></div>
                <div style={{height: '12px', width: '50%', background: '#00B4D8', borderRadius: '4px', marginLeft: '10%'}}></div>
              </div>
            </div>

            <div className="feature-card">
              <div style={{color: '#00B4D8', fontSize: '24px'}}>📊</div>
              <h4>Engenharia Financeira</h4>
              <p>Gestão rigorosa de desembolsos, apropriação de custos por etapa e projeção de fluxo de caixa baseada em medições reais.</p>
            </div>
            <div className="feature-card">
              <div style={{color: '#B4FA00', fontSize: '24px'}}>👥</div>
              <h4>Capital Humano & SST</h4>
              <p>Controle biométrico, gestão de competências técnicas e rastreabilidade total de conformidade com normas de segurança.</p>
            </div>
            <div className="feature-card">
              <div style={{color: '#00B4D8', fontSize: '24px'}}>📁</div>
              <h4>Cofre de Documentos</h4>
              <p>Versionamento de projetos e ARTs.</p>
            </div>
            <div className="feature-card" style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gridColumn: 'span 1'}}>
              <div>
                <div style={{color: '#B4FA00', fontSize: '24px'}}>📱</div>
                <h4>Diário de Campo Móvel</h4>
                <p>Registros fotográficos e ocorrências técnicas direto do canteiro.</p>
              </div>
              <Button variant="outline" size="sm">Testar App Mobile</Button>
            </div>
          </div>
        </section>

        {/* Infraestrutura */}
        <section className="infra-section">
          <div className="infra-content">
            <h2>Infraestrutura Crítica e <br/><span className="highlight">Sincronização Híbrida.</span></h2>
            
            <div className="infra-item">
              <div style={{color: '#B4FA00', fontSize: '1.5rem'}}>⚡</div>
              <div>
                <h4>Arquitetura Offline-First</h4>
                <p>Funcionalidade total em áreas de sombra. Protocolos de sincronização delta garantem integridade assim que houver conexão.</p>
              </div>
            </div>
            
            <div className="infra-item">
              <div style={{color: '#00B4D8', fontSize: '1.5rem'}}>🛡️</div>
              <div>
                <h4>Segurança de Camada Militar</h4>
                <p>Criptografia AES-256 em repouso e em trânsito. Conformidade rigorosa com ISO 27001 e LGPD.</p>
              </div>
            </div>

            <div className="infra-item">
              <div style={{color: '#B4FA00', fontSize: '1.5rem'}}>🔗</div>
              <div>
                <h4>Ecosistema Aberto (API)</h4>
                <p>Integração bidirecional nativa com BIM 360, Procore, ERPs legados e ferramentas customizadas de BI.</p>
              </div>
            </div>
          </div>
          <div className="infra-visual">
            <img src="/globe.png" alt="Globe Architecture" />
          </div>
        </section>

        {/* CTA Footer */}
        <section className="ferramentas-cta">
          <h2>Preparado para a precisão técnica?</h2>
          <p>Junte-se a centenas de construtoras que otimizaram sua produtividade em até 35% com o motor de gestão do GPObras.</p>
          <div className="cta-actions">
            <Button variant="secondary" size="lg">Solicitar Demonstração Técnica</Button>
            <Button variant="outline" size="lg">Analisar Planos Corporativos</Button>
          </div>
        </section>
      </div>
    </div>
  );
}