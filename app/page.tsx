export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Arena Jovem VIP — início">
          <img src="/assets/field-graphic.png" alt="Arena Jovem VIP" />
        </a>
        <nav aria-label="Navegação principal">
          <a href="#arena">A arena</a>
          <a href="#escolinha">Escolinha</a>
          <a href="#experiencias">Experiências</a>
        </nav>
        <a className="header-cta" href="https://contate.me/arenajovemvip" target="_blank" rel="noreferrer">
          Reservar horário <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" id="inicio">
        <video className="hero-video-bg" autoPlay muted loop playsInline>
          <source src="/assets/video-hero.mp4" type="video/mp4" />
        </video>
      </section>

      <section className="energy-strip" aria-label="Serviços">
        <div>
          <span>Futebol</span><i>✦</i><span>Campeonatos</span><i>✦</i><span>Escolinha</span><i>✦</i><span>Aniversários</span><i>✦</i><span>Futebol</span><i>✦</i>
        </div>
      </section>

      <section className="arena-intro" id="arena">
        <p className="section-kicker">01 — Arena Jovem VIP</p>
        <div className="arena-intro-grid">
          <h2>Mais que uma quadra. <span>O seu lugar no jogo.</span></h2>
          <div>
            <p>
              Um espaço acolhedor, seguro e preparado para transformar cada partida em
              uma grande experiência — do amistoso com os amigos ao campeonato decisivo.
            </p>
            <a className="text-link" href="#experiencias">Descobrir a arena <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </section>

      <section className="experiences" id="experiencias">
        <div className="section-heading section-heading-light">
          <div>
            <p className="section-kicker">02 — Escolha seu jogo</p>
            <h2>Uma arena.<br /><span>Muitas experiências.</span></h2>
          </div>
          <p>
            Da pelada de toda semana ao evento inesquecível, a Jovem VIP prepara o
            campo para você entrar e aproveitar cada minuto.
          </p>
        </div>

        <div className="experience-grid">
          <article className="experience-card experience-card-main">
            <img src="/assets/arena-wide.jpg" alt="Jogador de futebol em campo" />
            <div className="card-shade" />
            <span className="card-number">01</span>
            <div className="card-copy">
              <p>Monte seu time</p>
              <h3>Reserve seu horário</h3>
              <a href="https://contate.me/arenajovemvip" target="_blank" rel="noreferrer" aria-label="Reservar horário na Arena Jovem VIP">↗</a>
            </div>
          </article>
          <article className="experience-card">
            <img src="/assets/training.jpg" alt="Jogador treinando futebol" />
            <div className="card-shade" />
            <span className="card-number">02</span>
            <div className="card-copy">
              <p>Aprenda e evolua</p>
              <h3>Centro de treinamento</h3>
              <a href="#escolinha" aria-label="Conhecer o centro de treinamento">↓</a>
            </div>
          </article>
          <article className="experience-card">
            <img src="/assets/match.jpg" alt="Partida de futebol em campeonato" />
            <div className="card-shade" />
            <span className="card-number">03</span>
            <div className="card-copy">
              <p>Viva a competição</p>
              <h3>Campeonatos</h3>
              <a href="https://contate.me/arenajovemvip" target="_blank" rel="noreferrer" aria-label="Falar sobre campeonatos">↗</a>
            </div>
          </article>
          <article className="experience-card experience-card-accent">
            <span className="accent-ball" aria-hidden="true">⚽</span>
            <span className="card-number">04</span>
            <div className="card-copy">
              <p>Comemore jogando</p>
              <h3>Aniversários na arena</h3>
              <a href="https://contate.me/arenajovemvip" target="_blank" rel="noreferrer" aria-label="Organizar aniversário na arena">↗</a>
            </div>
          </article>
        </div>
      </section>

      <section className="training-section" id="escolinha">
        <div className="training-media">
          <img src="/assets/youth-training.webp" alt="Crianças treinando futebol em uma quadra coberta" />
          <div className="training-badge">
            <strong>Futebol que</strong>
            <span>forma dentro<br />e fora de campo.</span>
          </div>
        </div>
        <div className="training-copy">
          <p className="section-kicker">03 — Centro de treinamento</p>
          <h2>Descubra o campeão que existe <span>no seu filho.</span></h2>
          <p>
            Técnica, disciplina, amizade e confiança em um ambiente seguro e preparado.
            Nossa equipe acompanha cada aluno para desenvolver habilidades que vão muito
            além da bola.
          </p>
          <ul>
            <li><i aria-hidden="true">✓</i><span><strong>Fundamentos técnicos</strong><small>Aprendizado com propósito e evolução contínua.</small></span></li>
            <li><i aria-hidden="true">✓</i><span><strong>Valores de equipe</strong><small>Respeito, colaboração e espírito esportivo.</small></span></li>
            <li><i aria-hidden="true">✓</i><span><strong>Mais confiança</strong><small>Um espaço positivo para jogar e crescer.</small></span></li>
          </ul>
          <a className="button button-dark" href="https://contate.me/arenajovemvip" target="_blank" rel="noreferrer">
            Agendar aula experimental <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <section className="arena-story">
        <div className="story-visual">
          <img src="/assets/arena-wide.jpg" alt="Jogador chutando uma bola iluminada" />
          <span className="story-outline">JOVEM<br />VIP</span>
        </div>
        <div className="story-copy">
          <p className="section-kicker">04 — Nossa estrutura</p>
          <h2>Pronta para o seu <span>melhor jogo.</span></h2>
          <p>
            Campo sintético de última geração, iluminação de alta qualidade, quadra
            coberta e câmeras de segurança 24 horas. Tudo pensado para uma experiência
            confortável do primeiro ao último minuto.
          </p>
          <div className="structure-list">
            <span>Campo sintético</span>
            <span>Iluminação de qualidade</span>
            <span>Ambiente coberto</span>
            <span>Segurança 24 horas</span>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <img className="final-cta-bg" src="/assets/match.jpg" alt="" />
        <div className="final-cta-overlay" />
        <div className="final-cta-content">
          <p className="eyebrow"><span /> Sua próxima partida começa aqui</p>
          <h2>Chame o time.<br /><em>O campo já está pronto.</em></h2>
          <div className="final-actions">
            <a className="button button-primary" href="https://contate.me/arenajovemvip" target="_blank" rel="noreferrer">
              Reservar pelo WhatsApp <span aria-hidden="true">↗</span>
            </a>
            <a className="button button-ghost" href="https://goo.gl/maps/MsV3AR6vHpSyabvk8" target="_blank" rel="noreferrer">Ver localização</a>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-main">
          <img src="/assets/field-graphic.png" alt="Arena Jovem VIP" />
          <p>O lugar certo para jogar,<br />competir e viver o futebol.</p>
          <div className="footer-contact">
            <span>Rua Dezesseis, 732 — Centro</span>
            <a href="https://contate.me/jovemvip" target="_blank" rel="noreferrer">(34) 9 9873-0044</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Arena Jovem VIP</span>
          <div>
            <a href="https://www.instagram.com/jovemvip/" target="_blank" rel="noreferrer">Instagram ↗</a>
            <a href="https://goo.gl/maps/MsV3AR6vHpSyabvk8" target="_blank" rel="noreferrer">Como chegar ↗</a>
          </div>
        </div>
      </footer>

      <a className="mobile-reserve" href="https://contate.me/arenajovemvip" target="_blank" rel="noreferrer">
        Reservar horário <span aria-hidden="true">↗</span>
      </a>
    </main>
  );
}
