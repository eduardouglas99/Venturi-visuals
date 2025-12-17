"use client";

import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <motion.section
        className="px-6 mb-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl mb-6 tracking-tight">
            Política de Privacidade
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A Venturi Visuals valoriza a transparência e a segurança das informações
            compartilhadas por seus visitantes. Este documento explica como os dados
            pessoais são coletados, utilizados e protegidos.
          </p>
        </div>
      </motion.section>

      {/* Conteúdo */}
      <motion.section
        className="px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="max-w-4xl mx-auto space-y-12 text-gray-700 leading-relaxed">

          <div>
            <h2 className="text-2xl font-semibold mb-3">1. Coleta de informações</h2>
            <p>
              Coletamos informações pessoais apenas quando o visitante preenche o
              formulário de contato disponível neste site. Os dados solicitados — como
              nome, e-mail e telefone — são utilizados exclusivamente para retorno de
              contato e esclarecimento de dúvidas.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">2. Uso das informações</h2>
            <p>
              As informações enviadas são utilizadas apenas pela equipe da Venturi Visuals
              para fins de comunicação, atendimento e envio de propostas comerciais.
              Nenhum dado é compartilhado com terceiros, exceto quando necessário para
              o envio de mensagens via serviços de e-mail.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">3. Armazenamento e segurança</h2>
            <p>
              Todos os dados são armazenados de forma segura e tratados com
              confidencialidade. Caso o formulário utilize integração com serviços como
              o Nodemailer, as informações trafegam com criptografia e não são
              armazenadas em banco de dados permanente.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">4. Links externos</h2>
            <p>
              Este site pode conter links para páginas externas, como o WhatsApp ou redes
              sociais. A Venturi Visuals não se responsabiliza pelas políticas de
              privacidade de sites de terceiros. Recomendamos que o visitante leia os
              respectivos termos de cada plataforma acessada.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">5. Direitos do titular</h2>
            <p>
              Em conformidade com a Lei nº 13.709/2018 (LGPD), o visitante pode solicitar
              a exclusão ou correção de suas informações pessoais a qualquer momento.
              Para isso, basta entrar em contato pelo e-mail{" "}
              <a
                href="mailto:contato@venturivisuals.com.br"
                className="text-black font-medium underline hover:text-gray-800"
              >
                contato@venturivisuals.com.br
              </a>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">6. Atualizações desta política</h2>
            <p>
              Esta Política de Privacidade pode ser atualizada periodicamente para
              refletir mudanças nas práticas da Venturi Visuals. A data da última
              atualização será sempre indicada nesta página.
            </p>
          </div>

          <p className="text-sm text-gray-500 mt-12">
            Última atualização: Novembro de 2025
          </p>
        </div>
      </motion.section>
    </div>
  );
}
