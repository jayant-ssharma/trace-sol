import Background from "./components/landing/Background";
import Header from "./components/landing/Header";
import Main from "./components/landing/Main";

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Background />
      <Header />
        <Main/>
    </div>
  );
}