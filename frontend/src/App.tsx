export function App() {
  return (
    <main className="app-shell">
      <section className="welcome-card">
        <span className="eyebrow">CareLink 1.0</span>
        <h1>Cuidado conectado, onde você estiver.</h1>
        <p>
          A base do aplicativo está pronta para receber autenticação, perfis,
          localização, áreas seguras e alertas em tempo real.
        </p>
        <div className="status" role="status">
          <span aria-hidden="true" />
          Frontend iniciado com sucesso
        </div>
      </section>
    </main>
  )
}
