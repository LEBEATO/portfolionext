"use client";

import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setStatus("Mensagem enviada com sucesso!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        const errorData = await response.json();
        setStatus(`Falha ao enviar: ${errorData.error || "Tente novamente."}`);
      }
    } catch (error) {
      setStatus("Ocorreu um erro. Tente novamente mais tarde.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contato"
      className="bg-gray-950 text-white py-20 sm:py-24"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-medium text-center mb-4">
          Entre em Contato
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
          Tem alguma pergunta ou proposta? Sinta-se à vontade para me enviar uma mensagem.
        </p>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Nome</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:ring-cyan-500 focus:border-cyan-500 transition"/>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:ring-cyan-500 focus:border-cyan-500 transition"/>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Mensagem</label>
            <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required rows={5} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:ring-cyan-500 focus:border-cyan-500 transition"></textarea>
          </div>
          <div className="text-center">
            <button type="submit" disabled={loading} className="inline-flex items-center gap-3 bg-cyan-500 text-gray-900 font-bold py-3 px-8 rounded-lg hover:bg-cyan-400 transition-all transform hover:scale-105 disabled:bg-gray-600 disabled:cursor-not-allowed">
              {loading ? "Enviando..." : "Enviar Mensagem"}
              {!loading && <FaPaperPlane />}
            </button>
          </div>
          {status && <p className={`text-center mt-4 ${status.includes("sucesso") ? "text-green-400" : "text-red-400"}`}>{status}</p>}
        </form>
      </div>
    </section>
  );
}