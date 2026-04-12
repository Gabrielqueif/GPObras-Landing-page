
import { useState } from 'react';
import '../styles/Precos.css';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import Accordion from '../components/ui/Accordion';

export default function Precos() {
  const [isAnnual, setIsAnnual] = useState(false);

  const faqItems = [
    {
      question: "Posso trocar de plano a qualquer momento?",
      answer: "Sim. Você pode fazer o upgrade ou downgrade do seu plano diretamente pelo painel administrativo. Em caso de upgrade, o valor será cobrado proporcionalmente aos dias restantes."
    },
    {
      question: "Existe limite de usuários por obra?",
      answer: "Os limites são baseados no plano escolhido. A maioria dos planos possui usuários ilimitados para convidados, mas usuários administradores podem ter restrições."
    },
    {
      question: "Como funciona o suporte técnico?",
      answer: "Oferecemos suporte por chat e e-mail em todos os planos. Nos planos Profissional e Corporativo, o suporte inclui contato via telefone e gerente de sucesso de cliente designado."
    },
    {
      question: "Meus dados estão seguros na nuvem?",
      answer: "Sim, utilizamos provedores de nuvem líderes e as melhores práticas de segurança com criptografia avançada e backups diários para proteger as informações da sua construtora."
    }
  ];

  return (
    <div className="precos-page">
      <div className="container">
        
        <section className="precos-hero">
          <Badge variant="default">PLANOS E VALORES</Badge>
          <h1>Estrutura de Preços <br/>Feita para Construir.</h1>
          <p>Da pequena reforma ao grande empreendimento. Escolha o plano que melhor se adapta a construtora.</p>
          
          <div className="billing-toggle">
            <span className={`toggle-label ${!isAnnual ? 'active' : ''}`}>Mensal</span>
            <label className="switch">
              <input type="checkbox" checked={isAnnual} onChange={() => setIsAnnual(!isAnnual)} />
              <span className="slider"></span>
            </label>
            <span className={`toggle-label ${isAnnual ? 'active' : ''}`}>Anual</span>
            <span className="toggle-badge">SAVE 20%</span>
          </div>

          <div className="pricing-grid">
             {/* Plano Essencial */}
            <div className="pricing-card">
              <div className="pricing-header">
                <h3>ESSENCIAL</h3>
                <p className="pricing-desc">Para quem organizar sua primeira obra ou reforma.</p>
              </div>
              <div className="price">
                <span className="price-currency">R$</span>
                {isAnnual ? '199' : '249'}
                <span className="price-period">/mês</span>
              </div>
              <ul className="features-list">
                <li><span className="feature-check">✓</span> Até 3 usuários ativos</li>
                <li><span className="feature-check">✓</span> Diário de Obra Digital</li>
                <li><span className="feature-check">✓</span> Gestão de Documentos Base</li>
                <li><span className="feature-check">✓</span> Suporte por e-mail em horário c.</li>
              </ul>
              <Button variant="outline" className="full-width" style={{width: '100%'}}>COMEÇAR AGORA</Button>
            </div>

            {/* Plano Profissional */}
            <div className="pricing-card popular">
              <div className="popular-badge">
                <Badge variant="dark">MAIS POPULAR</Badge>
              </div>
              <div className="pricing-header">
                <h3>PROFISSIONAL</h3>
                <p className="pricing-desc">Para construtoras em crescimento com múltiplas frentes.</p>
              </div>
              <div className="price">
                <span className="price-currency">R$</span>
                {isAnnual ? '479' : '589'}
                <span className="price-period">/mês</span>
              </div>
              <ul className="features-list">
                <li><span className="feature-check">✓</span> <strong>Até 15 obras simultâneas</strong></li>
                <li><span className="feature-check">✓</span> Gantt Preditivo e Financeiro</li>
                <li><span className="feature-check">✓</span> Portal de Terceiros e Clientes</li>
                <li><span className="feature-check">✓</span> Suporte Prioritário no WhatsApp</li>
              </ul>
              <Button variant="primary" className="full-width" style={{width: '100%'}}>COMEÇAR AGORA</Button>
            </div>

            {/* Plano Corporativo */}
            <div className="pricing-card">
              <div className="pricing-header">
                <h3>CORPORATIVO</h3>
                <p className="pricing-desc">Soluções exclusivas para grandes projetos sob medida.</p>
              </div>
              <div className="price">
                Sob consulta
              </div>
              <ul className="features-list">
                <li><span className="feature-check">✓</span> Obras ilimitadas</li>
                <li><span className="feature-check">✓</span> Integração ERP (Trilha, SAP etc)</li>
                <li><span className="feature-check">✓</span> SLA Implacável com suporte 24h</li>
                <li><span className="feature-check">✓</span> Usuários de convidados ilimitados</li>
              </ul>
              <Button variant="secondary" className="full-width" style={{width: '100%'}}>FALAR COM CONSULTOR</Button>
            </div>
          </div>
        </section>
      </div>

      <section className="why-choose-section">
        <div className="container">
          <div className="why-choose-header">
            <h2>POR QUE ESCOLHER O GPOBRAS?</h2>
            <p>Compromisso com a precisão técnica em cada detalhe de sua obra.</p>
          </div>
          
          <div className="why-grid">
            <div className="why-card">
              <div className="why-card-icon">🏗️</div>
              <h4>Visão 360º da Obra</h4>
              <p>Uma interface onde você compreende o avanço físico e relatórios gerenciais sem precisar ligar ou exigir resumos diários.</p>
            </div>
            <div className="why-card r-card" style={{background: '#075985'}}>
              <h4 style={{color: '#fff', fontSize: '2rem', marginBottom: '4px'}}>15%</h4>
              <h5 style={{color: '#fff', marginBottom: '8px'}}>REDUÇÃO MÉDIA</h5>
              <p style={{color: '#BAE6FD'}}>No desperdício de materiais nos primeiros meses de utilização contínua.</p>
            </div>
            <div className="why-card">
              <div className="why-card-icon">📱</div>
              <h4>Mobilidade Real</h4>
              <p>Tenha acesso ao canteiro através de aplicativos Android ou iOS offline. Sincronize em nuvem assim que chegar ao escritório.</p>
            </div>
            <div className="why-card">
              <div className="why-card-icon">👨‍💻</div>
              <h4>Suporte de Engenheiro para Engenheiro</h4>
              <p>Entendemos a operação, nós conversamos sobre etapas e não sobre software.</p>
              <div style={{display: 'flex', gap: '8px', marginTop: '16px'}}>
                 <img src="/avatar_1.png" style={{width: '32px', height: '32px', borderRadius: '50%'}}/>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <h2>PERGUNTAS FREQUENTES</h2>
        <Accordion items={faqItems} />
      </section>

      <div className="container">
        <section className="final-cta">
          <h2>PRONTO PARA DIGITALIZAR SEU CANTEIRO?</h2>
          <p>Comece sua avaliação gratuita de 14 dias hoje mesmo.</p>
          <div className="final-cta-actions">
            <Button variant="primary">COMEÇAR TESTE GRÁTIS</Button>
            <Button variant="outline" style={{borderColor: '#fff', color: '#fff'}}>AGENDAR CONVERSA</Button>
          </div>
        </section>
      </div>
    </div>
  );
}