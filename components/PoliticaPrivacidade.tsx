"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export function PoliticaPrivacidadePopup() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="text-muted-foreground hover:text-green-600 text-sm transition-colors cursor-pointer"
      >
        Políticas de Privacidade 
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto p-6">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold mb-4">
              Políticas de Privacidade – Aplicativo YggDrasil
            </DialogTitle>
          </DialogHeader>
          
          <div className="text-sm text-foreground space-y-6">
            <p className="leading-relaxed">
              <strong>Última atualização:</strong> 13 de outubro de 2025
            </p>

            <section className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">
                1. Introdução
              </h3>
              <p className="leading-relaxed">
                A Advantag desenvolveu o aplicativo YggDrasil como um aplicativo gratuito. Este Serviço é fornecido sem custo e deve ser utilizado conforme disponibilizado.
              </p>
              <p className="leading-relaxed">
                Esta Política de Privacidade tem como objetivo explicar quais informações coletamos, como as utilizamos e quais são seus direitos e escolhas em relação a esses dados.
              </p>
              <p className="leading-relaxed">
                Ao utilizar o YggDrasil, você concorda com a coleta e o uso de informações conforme descrito nesta Política. As informações pessoais que coletamos são usadas exclusivamente para fornecer e aprimorar o serviço.
              </p>
              <p className="leading-relaxed">
                Não compartilhamos seus dados com terceiros, exceto conforme descrito abaixo.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">
                2. Base Legal para o Tratamento de Dados Pessoais (LGPD, Art. 7º)
              </h3>
              <p className="leading-relaxed">
                O tratamento das informações pessoais realizadas pela Advantag ocorre de acordo com as bases legais previstas na Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018).
              </p>
              <p className="leading-relaxed">
                Coletamos e utilizamos dados pessoais com fundamento nas seguintes hipóteses legais:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 leading-relaxed">
                <li>
                  <strong>Consentimento do titular</strong> – quando o usuário autoriza o uso de informações pessoais para finalidades específicas dentro do aplicativo (ex.: criação de conta, envio de notificações, uso de localização etc.);
                </li>
                <li>
                  <strong>Execução de contrato ou de procedimentos preliminares</strong> – quando o tratamento é necessário para oferecer e manter o funcionamento dos serviços do YggDrasil;
                </li>
                <li>
                  <strong>Cumprimento de obrigação legal ou regulatória</strong> – quando precisamos armazenar ou fornecer dados conforme exigido por lei;
                </li>
                <li>
                  <strong>Legítimo interesse do controlador</strong> – quando o tratamento é necessário para prevenir fraudes, melhorar a experiência do usuário ou manter a segurança da aplicação, sempre respeitando os direitos e liberdades fundamentais do titular.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">
                3. Coleta e Uso de Informações
              </h3>
              <p className="leading-relaxed">
                Para oferecer uma melhor experiência, poderemos solicitar algumas informações de identificação pessoal, tais como:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 leading-relaxed">
                <li>Nome de usuário;</li>
                <li>Endereço de e-mail;</li>
                <li>Localização (quando necessária para o funcionamento do app);</li>
                <li>Fotos de perfil ou relacionadas ao uso do serviço.</li>
              </ul>
              
              <h4 className="font-semibold mt-4">Acesso à câmera</h4>
              <p className="leading-relaxed">
                O aplicativo pode solicitar permissão para acessar a câmera do dispositivo, com o objetivo de permitir o envio de imagens, captura de fotos de perfil ou utilização de recursos específicos (como leitura de QR Codes).
              </p>
              <p className="leading-relaxed">
                As imagens capturadas são processadas apenas para a funcionalidade correspondente e não são compartilhadas com terceiros nem armazenadas em nossos servidores, salvo quando estritamente necessário para o funcionamento do serviço e com o consentimento do usuário.
              </p>
              <p className="leading-relaxed">
                Essas informações são armazenadas com segurança e utilizadas apenas para as finalidades descritas nesta Política, como autenticação, personalização de experiência e melhoria dos serviços.
              </p>
              <p className="leading-relaxed">
                O aplicativo pode utilizar serviços de terceiros que coletam informações para identificar o usuário ou oferecer recursos adicionais (ex.: login via Google, análise de uso, notificações, etc.).
              </p>
              <p className="leading-relaxed">
                Esses serviços seguem suas próprias políticas de privacidade.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">
                4. Cookies e Tecnologias Semelhantes
              </h3>
              <p className="leading-relaxed">
                O YggDrasil não utiliza cookies diretamente, porém pode integrar bibliotecas ou códigos de terceiros que o façam, a fim de aprimorar o desempenho ou análise de uso.
              </p>
              <p className="leading-relaxed">
                Você pode optar por desativar cookies nas configurações do seu dispositivo. No entanto, isso pode limitar algumas funcionalidades do aplicativo.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">
                5. Informações de Localização
              </h3>
              <p className="leading-relaxed">
                Determinadas funções podem solicitar acesso à sua localização. Essa informação é usada apenas quando necessária para a execução de recursos específicos do aplicativo e não é compartilhada com terceiros sem o seu consentimento.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">
                6. Informações do Dispositivo
              </h3>
              <p className="leading-relaxed">
                Podemos coletar dados técnicos do seu dispositivo (como modelo, sistema operacional e identificadores não pessoais).
              </p>
              <p className="leading-relaxed">
                Essas informações ajudam a melhorar o desempenho, identificar erros e prevenir fraudes.
              </p>
              <p className="leading-relaxed">
                Nenhum dado coletado permite identificar o usuário individualmente.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">
                7. Segurança dos Dados
              </h3>
              <p className="leading-relaxed">
                A segurança das suas informações pessoais é uma prioridade para nós.
              </p>
              <p className="leading-relaxed">
                Adotamos medidas técnicas e administrativas razoáveis para protegê-las contra acesso, alteração, divulgação ou destruição não autorizada.
              </p>
              <p className="leading-relaxed">
                Contudo, lembre-se: nenhum método de transmissão ou armazenamento eletrônico é 100% seguro. Embora nos esforcemos para proteger seus dados, não podemos garantir segurança absoluta.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">
                8. Privacidade de Crianças e Adolescentes
              </h3>
              <p className="leading-relaxed">
                Nossos serviços não são destinados a menores de 13 anos.
              </p>
              <p className="leading-relaxed">
                Não coletamos intencionalmente informações pessoais de crianças. Se identificarmos que informações de um menor foram fornecidas, elas serão excluídas imediatamente.
              </p>
              <p className="leading-relaxed">
                Pais ou responsáveis que identifiquem esse tipo de situação podem nos contatar para solicitar a exclusão dos dados.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">
                9. Alterações a Esta Política de Privacidade
              </h3>
              <p className="leading-relaxed">
                Podemos atualizar esta Política periodicamente.
              </p>
              <p className="leading-relaxed">
                Recomendamos que você a consulte regularmente para verificar eventuais alterações.
              </p>
              <p className="leading-relaxed">
                As atualizações terão efeito imediato após sua publicação nesta página.
              </p>
              <p className="leading-relaxed">
                Sempre que ocorrerem mudanças significativas, notificaremos os usuários por meio do aplicativo ou por e-mail.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">
                10. Contato
              </h3>
              <p className="leading-relaxed">
                Se você tiver dúvidas, sugestões ou solicitações relacionadas à privacidade e proteção de dados, entre em contato conosco pelo e-mail:
              </p>
              <p className="leading-relaxed">
                <a
                  href="mailto:yggdrasil.team.contato@gmail.com"
                  className="text-green-600 hover:underline"
                >
                  📧 yggdrasil.team.contato@gmail.com
                </a>
              </p>
            </section>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}