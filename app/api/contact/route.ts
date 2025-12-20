import { NextResponse } from "next/server";
import { z } from "zod";
import sanitizeHtml from "sanitize-html";

const schema = z.object({
  name: z.string().min(2, "O nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Por favor, insira um email válido"),
  message: z.string().min(10, "A mensagem deve ter pelo menos 10 caracteres"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validation = schema.safeParse(body);

    if (!validation.success) {
      // CORREÇÃO: Usamos 'issues' em vez de 'errors' para satisfazer o TypeScript
      return NextResponse.json(
        { error: validation.error.issues[0].message },
        { status: 400 }
      );
    }

    const { name, email, message } = validation.data;

    const sanitizedMessage = sanitizeHtml(message, {
      allowedTags: [], // Remove todas as tags HTML para segurança
      allowedAttributes: {},
    });

    // Aqui você pode adicionar a lógica para enviar o email ou salvar no banco de dados
    console.log("Mensagem recebida:", { name, email, sanitizedMessage });

    return NextResponse.json({ message: "Mensagem enviada com sucesso!" });
  } catch (error) {
    console.error("Erro no formulário de contato:", error);
    return NextResponse.json(
      { error: "Ocorreu um erro ao enviar sua mensagem." },
      { status: 500 }
    );
  }
}