"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export function TermosCondicoesPopup() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="text-muted-foreground hover:text-green-600 text-sm transition-colors cursor-pointer"
      >
        Termos & Condições
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto p-6">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold mb-4">
              Termos e Condições de Uso – Aplicativo YggDrasil
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
                Bem-vindo ao YggDrasil, aplicativo de titularidade da Advantag
                Tecnologia Ltda. (“Advantag”), disponibilizado gratuitamente para
                uso pessoal. Ao acessar ou utilizar o YggDrasil, você declara que
                leu, compreendeu e concorda com estes Termos e com a Política de
                Privacidade do aplicativo. Se não concordar, não utilize o
                YggDrasil.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">
                2. Definições
              </h3>
              <p className="leading-relaxed">
                Para fins destes Termos: Aplicativo: o software YggDrasil e seus
                módulos. Usuário: pessoa que baixa, acessa ou utiliza o
                Aplicativo. Conta: perfil do Usuário no Aplicativo. Serviços:
                funcionalidades do YggDrasil (registro de árvores, geolocalização,
                wallets, emissão e transferência de tokens, entre outras).
                Conteúdo: informações, textos, imagens, fotos, áudios, vídeos,
                metadados e demais dados inseridos ou gerados pelo Usuário.
                Blockchain: rede(s) pública(s) descentralizada(s) usada(s) pelo
                YggDrasil. Wallet: carteira digital (custodial ou não custodial)
                associada ao Usuário e/ou a cada árvore registrada. SCC: “Saved
                Carbon Credit” — token utilitário que representa 1 kg de carbono
                estimado como capturado, gerado conforme regras algorítmicas do
                sistema. YggCoin: token utilitário interno do ecossistema,
                inclusive para pagamento de taxas e incentivos. Valhalla:
                carteira/cofre de aposentadoria (retirement) de SCCs.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">
                3. Elegibilidade e Conta
              </h3>
              <p className="leading-relaxed">
                <strong>3.1. Idade mínima.</strong> O Aplicativo destina-se a maiores de 18 anos.
                Menores de 18 anos somente podem utilizar com autorização e
                supervisão de pai/mãe ou responsável legal, que responderá
                solidariamente pelo uso.
              </p>
              <p className="leading-relaxed">
                <strong>3.2. Dados verídicos.</strong> Ao criar a Conta,
                você se compromete a fornecer informações verdadeiras, completas e
                atualizadas.
              </p>
              <p className="leading-relaxed">
                <strong>3.3. Credenciais.</strong> Você é exclusivamente responsável
                por manter a confidencialidade de login, senha, chaves privadas,
                frases-semente (seed phrase) e por toda atividade realizada a
                partir da sua Conta/Wallet. Perda de chaves ou seed phrase pode
                tornar irrecuperáveis ativos e registros.
              </p>
              <p className="leading-relaxed">
                <strong>3.4. Comunicação de incidente.</strong> Suspeitando de acesso indevido, comunique
                imediatamente: <strong>yggdrasil.team.contato@gmail.com</strong>.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">
                4. Permissões e Recursos do Dispositivo
              </h3>
              <p className="leading-relaxed">
                Para operar, o Aplicativo pode solicitar acesso a: câmera
                (fotos/QR Code), localização (georreferenciamento), armazenamento
                (arquivos temporários). As permissões são usadas exclusivamente
                para as finalidades funcionais descritas e podem ser revogadas a
                qualquer tempo nas configurações do dispositivo (o que pode
                limitar funcionalidades).
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">
                5. Uso do Aplicativo e Conduta Proibida
              </h3>
              <p className="leading-relaxed">
                <strong>5.1.</strong> O YggDrasil deve ser utilizado conforme disponibilizado pela
                Advantag, de forma lícita, ética e em observância às leis
                aplicáveis.
              </p>
              <p className="leading-relaxed">
                <strong>5.2.</strong> É vedado ao Usuário, entre outros: 
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 leading-relaxed">
                <li>usar o Aplicativo para fins ilícitos, fraudulentos, enganosos,
                difamatórios ou que infrinjam direitos de terceiros;</li>
                <li>copiar, modificar, distribuir, sublicenciar, criar obras derivadas ou
                explorar comercialmente o Aplicativo ou seus componentes sem
                autorização;</li>
                <li>reversão de engenharia, descompilação ou tentativa
                de acesso ao código-fonte;</li>
                <li>interferir em servidores, redes,
                integrações ou medidas de segurança;</li>
                <li>inserir Conteúdo ilegal,
                ofensivo, violento, discriminatório, pornográfico, que viole
                direitos autorais, marcas, segredos industriais, dados pessoais de
                terceiros ou alegações ambientais enganosas (greenwashing);</li>
                <li>praticar ou tentar praticar fraude envolvendo árvores,
                geolocalização, medições, wallets e tokens.</li>
              </ul>
              <p className="leading-relaxed">
                <strong>5.3.</strong> O descumprimento
                poderá resultar em suspensão ou exclusão da Conta, bloqueio de
                funcionalidades e medidas legais cabíveis.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">
                6. Propriedade Intelectual e Licenças
              </h3>
              <p className="leading-relaxed">
                O Aplicativo, seu código, arquitetura, marcas, logotipos,
                designs e demais ativos são de titularidade exclusiva da Advantag
                e/ou de seus licenciantes, protegidos por leis de propriedade
                intelectual...
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">
                7. Natureza dos Tokens, Riscos e Responsabilidades
              </h3>
              
              <p className="leading-relaxed">
                <strong>7.1. Finalidade.</strong> SCC e YggCoin são tokens
                utilitários do ecossistema YggDrasil. Não constituem
                investimentos, depósitos, valores mobiliários, instrumentos
                financeiros, certificados de crédito de carbono regulados ou
                promessa de retorno financeiro.
              </p>

              <p className="leading-relaxed">
                <strong>7.2. Algoritmos e estimativas.</strong> A geração de SCCs
                decorre de métricas e algoritmos que estimam a captura de carbono
                por árvore e podem ser revisados. Não há garantia de equivalência
                a créditos de carbono certificados por padrões de mercado.
              </p>

              <p className="leading-relaxed">
                <strong>7.3. Taxas.</strong> Transações envolvendo SCCs/YggCoins
                podem envolver taxas (inclusive em YggCoin), conforme regras
                vigentes no Aplicativo.
              </p>

              <p className="leading-relaxed">
                <strong>7.4. Não custódia.</strong> Salvo indicação expressa em
                contrário, o YggDrasil opera em modelo não custodial: o Usuário
                mantém controle sobre suas chaves e Wallet. A perda de acesso pode
                implicar perda definitiva dos tokens.
              </p>

              <p className="leading-relaxed">
                <strong>7.5. Riscos de blockchain.</strong> O Usuário reconhece os
                riscos inerentes a tecnologias descentralizadas: volatilidade de
                tokens, falhas de rede, congestionamento, perda de chaves, bugs de
                smart contracts, forks, ataques, indisponibilidades, mudanças
                regulatórias e perda total de ativos digitais.
              </p>

              <p className="leading-relaxed">
                <strong>7.6. Impostos e obrigações.</strong> O Usuário é
                exclusivamente responsável por apurar e recolher tributos
                incidentes sobre o uso ou transferência de tokens, bem como por
                cumprir obrigações legais, incluindo aquelas relacionadas a
                AML/PLD, quando aplicável.
              </p>

              <p className="leading-relaxed">
                <strong>7.7. Declarações do Usuário.</strong> Ao registrar uma
                árvore/YggTag, o Usuário declara que as informações fornecidas são
                verdadeiras, que detém autorização ou propriedade sobre a
                árvore/local e que entende que alegações ambientais enganosas
                violam estes Termos e a legislação vigente.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">
                8. Serviços de Terceiros e Integrações
              </h3>
              <p className="leading-relaxed">
                O YggDrasil pode integrar login de terceiros (ex.: Google),
                provedores de e-mail, armazenamento, analytics, blockchain nodes e
                gateways. Cada um possui termos e políticas próprios, pelos quais
                a Advantag não se responsabiliza. Recomenda-se leitura cuidadosa
                antes do uso.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">
                9. Privacidade e LGPD
              </h3>

              <p className="leading-relaxed">
                <strong>9.1.</strong> O tratamento de dados pessoais observa a Lei
                nº 13.709/2018 (LGPD) e está detalhado na Política de Privacidade
                do YggDrasil.
              </p>

              <p className="leading-relaxed">
                <strong>9.2.</strong> Dados sensíveis e pessoais identificáveis
                são mantidos off-chain sempre que possível; evidências e arquivos
                podem ser armazenados em serviços como IPFS/S3, com hash
                registrado on-chain.
              </p>

              <p className="leading-relaxed">
                <strong>9.3.</strong> Você pode exercer direitos de acesso,
                correção, portabilidade, anonimização, eliminação e outros
                previstos em lei, conforme instruções na Política de Privacidade.
              </p>

              <p className="leading-relaxed">
                <strong>9.4. Retenção, Backups e Preservação Legal (LGPD).</strong>{" "}
                O Conteúdo e dados pessoais podem ser retidos em backups
                temporários por prazos limitados por exigências técnicas,
                auditorias, defesa em processos ou cumprimento de obrigações
                legais/regulatórias (bases legais: art. 7º, incisos II, VI e IX da
                LGPD). Findos os prazos e inexistindo obrigação legal de retenção,
                os dados serão excluídos ou anonimizados de forma segura.
              </p>

              <p className="leading-relaxed">
                <strong>9.5. Imutabilidade On-Chain.</strong> Registros on-chain
                (por ex., hashes de arquivos) podem ser imutáveis por natureza da
                tecnologia blockchain. A remoção de Conteúdo off-chain (ex.:
                imagem/vídeo armazenado em S3/IPFS) não implica exclusão do
                respectivo hash on-chain. O Usuário reconhece e concorda com essa
                limitação técnica.
              </p>

              <p className="leading-relaxed">
                <strong>9.6. Exportação de Dados.</strong> Antes da exclusão por
                razões não emergenciais, e quando tecnicamente viável, a Advantag
                poderá disponibilizar meio de exportação dos dados/Conteúdos do
                Usuário. Em casos de violação grave ou risco à segurança, a
                exportação pode ser negada.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">
                10. Disponibilidade, Suporte e Garantias
              </h3>

              <p className="leading-relaxed">
                <strong>10.1.</strong> O Aplicativo é fornecido "no estado em que
                se encontra" (<em>as is</em>), podendo conter erros ou
                interrupções.
              </p>

              <p className="leading-relaxed">
                <strong>10.2.</strong> A Advantag envida esforços razoáveis para
                manter o funcionamento e corrigir falhas, sem garantia de
                disponibilidade contínua, ausência de bugs ou compatibilidade com
                todo dispositivo/OS.
              </p>

              <p className="leading-relaxed">
                <strong>10.3. Isenção.</strong> Na máxima extensão permitida por
                lei, a Advantag não garante resultados específicos, exatidão
                absoluta das estimativas de carbono, nem se responsabiliza por
                danos diretos, indiretos, incidentais, lucros cessantes, perda de
                dados, indisponibilidades de rede/blockchain ou mau funcionamento
                de dispositivos.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">
                11. Indenização
              </h3>
              <p className="leading-relaxed">
                Você concorda em indenizar, defender e isentar a Advantag, seus
                sócios, administradores, colaboradores e parceiros de quaisquer
                reclamações, perdas, responsabilidades, custos e honorários
                decorrentes de: (i) uso indevido do Aplicativo; (ii) violação
                destes Termos ou de direitos de terceiros; (iii) Conteúdo inserido
                por você; (iv) alegações ambientais falsas.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">
                12. Medidas de Compliance
              </h3>

              <p className="leading-relaxed">
                <strong>12.1.</strong> A Advantag poderá adotar medidas de
                prevenção à lavagem de dinheiro/financiamento ao terrorismo
                (AML/PLD) compatíveis com o risco, inclusive solicitando
                informações adicionais, limitando funcionalidades ou suspendendo
                contas em caso de suspeita.
              </p>

              <p className="leading-relaxed">
                <strong>12.2.</strong> Denúncias de abuso, infração de direitos ou
                conteúdo ilegal podem ser enviadas a{" "}
                <a
                  href="mailto:yggdrasil.team.contato@gmail.com"
                  className="text-green-600 hover:underline"
                >
                  yggdrasil.team.contato@gmail.com
                </a>
                .
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">
                13. Alterações dos Termos e dos Serviços
              </h3>
              <p className="leading-relaxed">
                A Advantag poderá atualizar estes Termos ou alterar/suspender
                funcionalidades a qualquer tempo. As alterações produzem efeitos
                após publicação no Aplicativo. O uso contínuo implica aceitação
                integral da versão vigente.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">
                14. Encerramento e Suspensão
              </h3>
              <p className="leading-relaxed">
                A Advantag poderá, a seu critério e sem prévio aviso, suspender ou
                encerrar a Conta/Serviços em caso de: violação dos Termos, ordem
                legal, risco à segurança, fraude, inatividade prolongada ou por
                decisão estratégica. Você pode solicitar encerramento da Conta
                conforme Política de Privacidade, observadas restrições técnicas
                (ex.: registros imutáveis on-chain).
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">
                15. Comunicações Eletrônicas
              </h3>
              <p className="leading-relaxed">
                Você consente em receber comunicações eletrônicas relacionadas ao
                Aplicativo (avisos técnicos, de segurança, termos atualizados,
                etc.) pelos canais informados na Conta e/ou dentro do próprio
                Aplicativo.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">
                16. Disposições Gerais
              </h3>
              <p className="leading-relaxed">
                <strong>16.1.</strong> Independência das cláusulas. A nulidade de
                uma cláusula não afeta as demais.
              </p>
              <p className="leading-relaxed">
                <strong>16.2.</strong> Cessão. A Advantag pode ceder/transmitir
                estes Termos e suas posições contratuais; o Usuário não poderá
                ceder sem anuência prévia da Advantag.
              </p>
              <p className="leading-relaxed">
                <strong>16.3.</strong> Ausência de renúncia. Tolerância a
                descumprimento não implica renúncia de direitos.
              </p>
              <p className="leading-relaxed">
                <strong>16.4.</strong> Acordo integral. Estes Termos e a Política
                de Privacidade constituem o acordo integral entre você e a
                Advantag sobre o uso do Aplicativo.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">
                17. Legislação Aplicável e Foro
              </h3>
              <p className="leading-relaxed">
                Estes Termos são regidos pelas leis da República Federativa do
                Brasil. Fica eleito o foro da Comarca de São Paulo – SP, com
                renúncia a qualquer outro, por mais privilegiado que seja.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">
                18. Contato
              </h3>
              <p className="leading-relaxed">
                Dúvidas, solicitações ou notificações:{" "}
                <a
                  href="mailto:yggdrasil.team.contato@gmail.com"
                  className="text-green-600 hover:underline"
                >
                  yggdrasil.team.contato@gmail.com
                </a>
                .
              </p>
            </section>

            <hr className="my-4" />

            <section className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">
                Anexo A — Especificidades do Ecossistema YggDrasil (informativo)
              </h3>

              <p className="leading-relaxed">
                <strong>A.1.</strong> Vinculação YggTag–Árvore. Cada árvore possui
                YggTag única. O Usuário é responsável por realizar o vínculo e
                manter as informações fidedignas (espécie, localização, fotos,
                etc.).
              </p>

              <p className="leading-relaxed">
                <strong>A.2.</strong> Wallets por árvore e do Usuário. Cada árvore
                possui wallet própria para recepção de SCCs. O dono tem sua wallet
                pessoal, à qual pode "claimar" periodicamente os SCCs, conforme
                regras vigentes (ex.: atingimento de 1 kg ou periodicidade
                mínima).
              </p>

              <p className="leading-relaxed">
                <strong>A.3.</strong> Aposentadoria (Valhalla). O Usuário pode
                enviar SCCs para a carteira Valhalla, retirando-os de circulação
                (efeito meramente ecológico simbólico dentro do ecossistema, não
                equivalendo a cancelamento em registries regulados).
              </p>

              <p className="leading-relaxed">
                <strong>A.4.</strong> Taxas de transação. Transações podem gerar
                taxas em YggCoin, distribuídas entre manutenção/desenvolvimento e
                cofres de governança, conforme regras do Aplicativo.
              </p>

              <p className="leading-relaxed">
                <strong>A.5.</strong> Governança. Decisões críticas (ex.:
                alteração de taxas/papéis) podem requerer mecanismos de
                governança, inclusive multisig.
              </p>

              <p className="leading-relaxed">
                <strong>A.6.</strong> On-chain x Off-chain. Arquivos pesados
                (fotos/relatórios/GPS) ficam off-chain, com hash on-chain para
                integridade.
              </p>

              <p className="leading-relaxed">
                <strong>A.7.</strong> Declaração ambiental. O Usuário reconhece
                que os SCCs do YggDrasil não equivalem a créditos de carbono
                certificados por padrões como VCS/Gold Standard, salvo se e quando
                a Advantag emitir declaração expressa em contrário.
              </p>
            </section>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}