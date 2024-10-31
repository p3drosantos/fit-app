import Header from "./components/header";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Mateus!</h2>
        <p>Segunda-feira, 28 de outubro.</p>
      </div>
    </div>
  );
}
