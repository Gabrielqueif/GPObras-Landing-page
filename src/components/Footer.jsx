import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-logo">
          <h2>GPObras</h2>
          <p>© 2024 Constructo Core Engineering. Sistemas GPObras.</p>
        </div>
        <div className="footer-links">
          <a href="#">Privacidade</a>
          <a href="#">Termos de Uso</a>
          <a href="#">Central de Ajuda</a>
          <a href="#">Documentação API</a>
        </div>
      </div>
    </footer>
  );
}
