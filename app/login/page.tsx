export default function Login() {
  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "Arial"
    }}>
      <h1>Вход в Taroplace</h1>

      <input 
        placeholder="Email или никнейм"
        style={{ padding: "10px", margin: "5px" }}
      />

      <input 
        placeholder="Пароль"
        type="password"
        style={{ padding: "10px", margin: "5px" }}
      />

      <button style={{ padding: "10px 20px", marginTop: "10px" }}>
        Войти
      </button>

      <p>
        Нет аккаунта? Регистрация
      </p>
    </main>
  );
}
