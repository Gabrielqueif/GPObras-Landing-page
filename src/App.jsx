import './styles/App.css';
import './styles/Home.css';
import Badge from './components/ui/Badge';
import Button from './components/ui/Button';

export default function App() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="container home-hero">
        <div className="hero-content">
          <Badge variant="default">ESTRUTURA DIGITAL</Badge>
          <h1>Gestão de Obras com <br /><span className="highlight">Precisão</span> Arquitetônica</h1>
          <p>O sistema completo para gerir custos, equipes e diários de obra em um só lugar. Transforme complexidade em clareza técnica.</p>
          <div className="hero-actions">
            <Button variant="primary">Solicitar Demonstração →</Button>
            <Button variant="outline">Ver Vídeo</Button>
          </div>
        </div>
        <div className="hero-mockup">
          <img src="/home_dashboard.png" alt="GPObras Dashboard" />
        </div>
      </section>

      {/* Instrumentos Section */}
      <section className="performance-section">
        <div className="container">
          <h2>Instrumentos de Alta Performance</h2>
          <p>Modelos integrados que simplificam a gestão do canteiro de obras e construtora.</p>
          
          <div className="instrument-grid">
            <div className="instrument-card">
              <div className="card-icon" style={{backgroundColor: '#B4FA00'}}></div>
              <h3>Diário de Obra Digital</h3>
              <p>Registro fotográfico, clima e avanço no app. Otimize laudos e entregue relatórios diários em cliques.</p>
            </div>
            <div className="instrument-card">
              <div className="card-icon" style={{backgroundColor: '#00B4D8'}}></div>
              <h3>Gestão de Custos</h3>
              <p>Controle orçamentário rigoroso. Compare o planejado vs realizado em tempo real.</p>
            </div>
            <div className="instrument-card">
              <div className="card-icon" style={{backgroundColor: '#1E293B'}}></div>
              <h3>Documentação</h3>
              <p>Centralize plantas, ARTs e licenças. Acesso offline garantido para sua obra.</p>
            </div>
            <div className="instrument-card">
              <div className="card-icon" style={{backgroundColor: '#E2E8F0'}}></div>
              <h3>Controle de Equipes</h3>
              <p>Gestão de turnos, EPIs e produtividade por frente de trabalho. Maior rastreabilidade.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container testimonials-section">
        <Badge variant="default">DEPOIMENTOS</Badge>
        <h2>Validado por quem constrói o país.</h2>
        <div className="testimonials-grid">
          {[1, 2, 3].map((item) => (
            <div className="testimonial-card" key={item}>
              <div className="stars">★★★★★</div>
              <p>"O GPObras mudou nossa relação com o canteiro. A previsão dos custos no relatório é incrivelmente transparente e ágil."</p>
              <div className="testimonial-author">
                <img src={`/avatar_1.png`} alt="Avatar" />
                <div>
                  <span className="author-name">Eng. Roberto Silva</span>
                  <span className="author-role">Diretor de Obras</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Footer Form */}
      <section className="container cta-section">
        <div className="cta-card">
          <div className="cta-text-area">
            <h2>Pronto para elevar o nível da sua gestão?</h2>
            <p>Nossos especialistas estão prontos para mostrar como o GPObras se adapta ao tamanho do seu desafio.</p>
            
            <div className="cta-feature">
              <span className="cta-feature-icon">✓</span>
              <div>
                <h4>Implementação Guiada</h4>
                <p>Nós te ajudamos a treinar suas equipes focado no essencial.</p>
              </div>
            </div>
            <div className="cta-feature">
              <span className="cta-feature-icon">✓</span>
              <div>
                <h4>Suporte Técnico Especializado</h4>
                <p>Atendimento por engenheiros que entendem sua dor.</p>
              </div>
            </div>
          </div>
          
          <div className="cta-form-area">
            <div className="form-grid">
              <div className="form-group">
                <label>NOME COMPLETO</label>
                <input type="text" placeholder="Seu nome" />
              </div>
              <div className="form-group">
                <label>E-MAIL CORPORATIVO</label>
                <input type="email" placeholder="email@empresa.com" />
              </div>
              <div className="form-group">
                <label>NOME DA EMPRESA</label>
                <input type="text" placeholder="Sua construtora" />
              </div>
              <div className="form-group">
                <label>CARGO</label>
                <select>
                  <option>Selecione seu cargo</option>
                  <option>Engenheiro</option>
                  <option>Diretor</option>
                  <option>Outro</option>
                </select>
              </div>
            </div>
            <Button variant="primary" size="lg" className="full-width" style={{width: '100%'}}>SOLICITAR DEMONSTRAÇÃO GRATUITA</Button>
            <p className="cta-note">Apenas dados profissionais, não faremos SPAM.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
