import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback, useRef } from "react";

export default function LegacyLanding() {
  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const parallax = useTransform(scrollYProgress, [0, 1], [0, -300]);

  return (
    <main ref={ref} className="bg-[#0D1B2A] text-white min-h-screen font-sans overflow-x-hidden relative">
      {/* PARTICLE BACKGROUND */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: "#0D1B2A" } },
          fpsLimit: 60,
          interactivity: {
            events: { onHover: { enable: true, mode: "repulse" }, resize: true },
          },
          particles: {
            color: { value: "#D4AF37" },
            links: {
              color: "#D4AF37",
              distance: 120,
              enable: true,
              opacity: 0.4,
              width: 1,
            },
            collisions: { enable: false },
            move: {
              directions: "none",
              enable: true,
              outModes: "bounce",
              random: false,
              speed: 0.5,
              straight: false,
            },
            number: { density: { enable: true, area: 800 }, value: 50 },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 -z-10"
      />

      {/* HERO 3D LOGO */}
      <section className="relative flex flex-col items-center justify-center text-center h-screen px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mb-6"
        >
          <div className="w-40 h-40 bg-gradient-to-br from-yellow-500 to-yellow-300 rounded-full shadow-lg animate-pulse border-4 border-yellow-700" />
        </motion.div>
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="text-4xl md:text-6xl font-serif text-[#D4AF37]"
        >
          You don’t build a brand. You leave a legacy.
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-8 flex gap-4"
        >
          <Button className="bg-[#D4AF37] text-black hover:scale-105 transition">Conheça o Método</Button>
          <Button variant="outline" className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10 transition">
            Fale com o Consultor
          </Button>
        </motion.div>
      </section>

      {/* MÉTODO LEGACY */}
      <motion.section style={{ y: parallax }} className="bg-[#111827] text-center py-32 px-6">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl text-[#D4AF37] font-serif mb-6"
        >
          Nosso Método LEGACY™
        </motion.h2>
        <p className="text-gray-300 max-w-xl mx-auto">
          Uma estrutura de marca baseada em propósito, presença e permanência. Design para durar.
        </p>
      </motion.section>

      {/* SHOWCASE DE PROJETOS */}
      <motion.section style={{ y: parallax }} className="bg-[#0D1B2A] py-24 px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-serif text-[#D4AF37] mb-10">Projetos Icônicos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div whileHover={{ scale: 1.05 }} className="bg-[#222] rounded-xl h-48 shadow-inner" />
          <motion.div whileHover={{ scale: 1.05 }} className="bg-[#333] rounded-xl h-48 shadow-inner" />
          <motion.div whileHover={{ scale: 1.05 }} className="bg-[#444] rounded-xl h-48 shadow-inner" />
        </div>
      </motion.section>

      {/* MANIFESTO */}
      <motion.section style={{ y: parallax }} className="bg-[#111827] text-center py-32 px-6">
        <motion.blockquote
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto italic"
        >
          "LEGACY BRANDING não é sobre modismos. É sobre permanência. Cada traço que criamos deixa um legado."
        </motion.blockquote>
      </motion.section>

      {/* CTA FINAL */}
      <motion.section style={{ y: parallax }} className="bg-gradient-to-r from-[#0D1B2A] to-[#111827] py-24 text-center px-6">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-4xl text-[#D4AF37] font-serif mb-6"
        >
          Está pronto para construir algo eterno?
        </motion.h2>
        <Button className="bg-[#D4AF37] text-black hover:scale-105 transition">Fale com a Legacy Branding</Button>
      </motion.section>

      {/* FOOTER */}
      <footer className="bg-[#0D1B2A] py-12 text-center border-t border-[#1f2937]">
        <p className="text-sm text-gray-400">Legacy Branding © 2025. Todos os direitos reservados.</p>
        <div className="flex justify-center mt-4 gap-4">
          <a href="#" className="text-[#D4AF37] hover:underline">Instagram</a>
          <a href="#" className="text-[#D4AF37] hover:underline">Behance</a>
          <a href="#" className="text-[#D4AF37] hover:underline">LinkedIn</a>
        </div>
      </footer>
    </main>
  );
}
