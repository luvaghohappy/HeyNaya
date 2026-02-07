import { FaFeatherAlt } from "react-icons/fa";
import bgImage from "../assets/images/imageAI.png";

export default function Home() {
  return (
    <section
      className="min-h-screen flex items-start justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="w-full max-w-2xl text-center pt-20">
        <h1 className="text-5xl font-light text-black mb-4 flex items-center justify-center gap-3">
          <FaFeatherAlt className="text-3xl" />
          naya
        </h1>
        <p className="text-black text-lg">
          Your trauma-informed AI voice assistant
        </p>
      </div>
    </section>
  );
}
