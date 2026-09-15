import { NextResponse } from "next/server";
import { Resend } from "resend";
import sanitizeHtml from "sanitize-html";
import { z } from "zod";
const schema=z.object({name:z.string().trim().min(2).max(80),email:z.string().trim().email().max(120),message:z.string().trim().min(10).max(1500),company:z.string().max(0).optional()});
export async function POST(request:Request){
 try{const body=await request.json();const parsed=schema.safeParse(body);if(!parsed.success)return NextResponse.json({error:"Revise os campos e tente novamente."},{status:400});if(parsed.data.company)return NextResponse.json({message:"Mensagem recebida."});const apiKey=process.env.RESEND_API_KEY;const recipient=process.env.CONTACT_EMAIL;if(!apiKey||!recipient)return NextResponse.json({error:"O formulário está sendo configurado. Fale comigo pelo WhatsApp ou e-mail."},{status:503});const resend=new Resend(apiKey);const name=sanitizeHtml(parsed.data.name,{allowedTags:[],allowedAttributes:{}});const message=sanitizeHtml(parsed.data.message,{allowedTags:[],allowedAttributes:{}});const result=await resend.emails.send({from:process.env.CONTACT_FROM_EMAIL||"Portfólio <onboarding@resend.dev>",to:recipient,replyTo:parsed.data.email,subject:`Novo contato do portfólio — ${name}`,text:`Nome: ${name}\nE-mail: ${parsed.data.email}\n\n${message}`});if(result.error)throw new Error(result.error.message);return NextResponse.json({message:"Mensagem enviada."})}catch{return NextResponse.json({error:"Não foi possível enviar agora. Tente o WhatsApp ou e-mail."},{status:500})}
}
