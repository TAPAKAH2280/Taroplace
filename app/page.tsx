export default function Home() {
  return (
    <main style={{ 
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "Arial"
    }}>
      <h1>Taroplace</h1>

      <p>
        Создавайте и используйте временные ссылки быстро и удобно.
      </p>

      <div>
        <button>
          Войти
        </button>

        <button style={{ marginLeft: "10px" }}>
          Регистрация
        </button>
      </div>
    </main>
  );
}
