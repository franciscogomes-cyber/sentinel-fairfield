import { useState, useRef, useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'

const B = import.meta.env.BASE_URL

const NDA_SECTIONS = [
  {
    title: 'ACORDO DE CONFIDENCIALIDADE',
    content: `Por este instrumento particular, de um lado a empresa solicitante ("Parte Emissora") e, de outro, a FAIRFIELD PROTECAO E INTELIGENCIA FINANCEIRA LTDA, inscrita no CNPJ sob o n. 13.381.310/0001-45, com sede em Blumenau/SC ("Parte Receptora"), celebram o presente Acordo de Confidencialidade.

As Partes desejam discutir e negociar a viabilidade da contratacao de Apolice de Seguro de Credito, e para isso a Parte Emissora revelara informacoes confidenciais a Parte Receptora.`
  },
  {
    title: '1. Informacoes Confidenciais',
    content: `1.1 Toda e qualquer informacao revelada, disponibilizada ou fornecida a Parte Receptora pela Parte Emissora, incluindo informacoes de natureza legal, tecnica, operacional, administrativa, comercial, financeira e economica, por qualquer meio, serao designadas "Informacoes Confidenciais".

1.2 O termo inclui textos, desenhos, graficos, projetos, relatorios, formulas, tecnicas utilizadas na conducao dos negocios, produtos, know-how, metodos e processos, clientes e lista de clientes, fornecedores, segredos de mercado, praticas comerciais, planos societarios, financas, estrutura de precos e custos, entre outros.

1.3 Nao sao consideradas confidenciais informacoes que: (i) estejam disponiveis ao publico; (ii) ja estavam disponiveis a Parte Receptora por fontes diversas; (iii) foram desenvolvidas de forma independente; ou (iv) devam ser reveladas por determinacao legal ou judicial.

1.4 Caso haja obrigacao legal de divulgar informacoes, a Parte Receptora notificara a Parte Emissora em ate 5 dias uteis.

1.5 Toda Informacao Confidencial permanece propriedade da Parte Emissora.`
  },
  {
    title: '2. Obrigacoes da Parte Receptora',
    content: `2.1 A Parte Receptora compromete-se a:
(i) Manter em estrito e absoluto sigilo todas as Informacoes Confidenciais;
(ii) Nao divulgar, transmitir ou revelar as informacoes a qualquer pessoa;
(iii) Utilizar as informacoes exclusivamente para fins de subscricao e estudo de mercado para o Seguro de Credito;
(iv) Nao reproduzir as informacoes sem autorizacao expressa;
(v) Informar imediatamente sobre qualquer violacao ou acesso nao autorizado.

2.2 O acesso podera ser concedido apenas a empregados, administradores e assessores que tenham efetiva necessidade de conhecer as informacoes para avaliar o negocio ("Pessoas Autorizadas").

2.3 A Parte Receptora devera informar as Pessoas Autorizadas sobre a natureza confidencial das informacoes e tomar todas as providencias para preserva-la.`
  },
  {
    title: '3. Devolucao das Informacoes',
    content: `3.1 A Parte Receptora devolvera ou destruira todas as Informacoes Confidenciais quando: (i) notificada pela Parte Emissora, no prazo de 30 dias; ou (ii) o negocio nao for concretizado.

3.2 A devolucao abrangera todas as copias, reproducoes, resumos, analises e documentos que reflitam o conteudo das informacoes.

3.3 Na hipotese de destruicao, a Parte Receptora devera apagar todas as informacoes de quaisquer meios digitais ou fisicos, confirmando por escrito.`
  },
  {
    title: '4. Obrigacoes Adicionais',
    content: `4.1 As Partes reconhecem que: (i) nao ha vinculo ou compromisso alem da confidencialidade; (ii) este Acordo nao implica compromisso de realizacao do negocio; (iii) as informacoes nao constituem oferta ou proposta.

4.2 As Informacoes Confidenciais permanecem propriedade da Parte Emissora e sua divulgacao nao confere quaisquer direitos.`
  },
  {
    title: '5. Prazo de Vigencia',
    content: `5.1 Este Acordo tera vigencia de 90 (noventa) dias a partir da data de aceitacao.

5.2 As obrigacoes de confidencialidade permanecerao vigentes durante a vigencia e por 2 (dois) anos apos o termino, ou ate que um instrumento particular seja celebrado entre as Partes.`
  },
  {
    title: '6. Anticorrupcao',
    content: `6.1 As Partes comprometem-se a manter conformidade com as leis anticorrupcao, nao oferecendo ou recebendo vantagens indevidas.

6.2 Caso qualquer Parte seja investigada por atos contrarios as leis, devera notificar a contraparte.

6.3 Na hipotese de condenacao, a parte infratora devera arcar com eventuais perdas e danos.`
  },
  {
    title: '7. Disposicoes Gerais',
    content: `7.1 Este Acordo somente podera ser alterado mediante documento escrito e assinado pelas Partes.

7.2 O Acordo e celebrado em carater irrevogavel e irretratavel.

7.3 Constitui o acordo integral entre as Partes sobre o tema de confidencialidade.

7.4 A violacao do Acordo autoriza a Parte Emissora a tomar todas as medidas judiciais e extrajudiciais cabiveis.

7.5 A tolerancia quanto a descumprimentos nao constitui renuncia.

7.6 Clausulas invalidas nao afetam as demais disposicoes.

7.7 Os Dados Pessoais serao utilizados unicamente para o cumprimento deste Acordo, com adocao de todas as medidas de seguranca tecnicas e organizacionais conforme a LGPD.

7.8 As Partes reconhecem a validade da assinatura digital/eletronica deste Acordo.

7.9 Este Acordo e regido pelas leis da Republica Federativa do Brasil.

7.10 As Partes elegem o foro da Comarca de Blumenau/SC para dirimir quaisquer litigios.`
  }
]

export default function NdaAcceptance() {
  const { user, acceptNda } = useAuth()
  const [scrolledToEnd, setScrolledToEnd] = useState(false)
  const scrollRef = useRef(null)
  const [accepting, setAccepting] = useState(false)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    function handleScroll() {
      const { scrollTop, scrollHeight, clientHeight } = el
      if (scrollTop + clientHeight >= scrollHeight - 30) {
        setScrolledToEnd(true)
      }
    }
    el.addEventListener('scroll', handleScroll)
    return () => el.removeEventListener('scroll', handleScroll)
  }, [])

  function handleAccept() {
    setAccepting(true)
    setTimeout(() => {
      acceptNda()
    }, 800)
  }

  return (
    <div className="max-w-3xl mx-auto px-3 sm:px-4 py-6 sm:py-10 animate-fadeIn">
      {/* Header */}
      <div className="text-center mb-6">
        <div className="flex items-center justify-center gap-3 mb-3">
          <img src={`${B}logos/sentinel.png`} alt="SENTINEL" className="h-12 w-12 sm:h-14 sm:w-14 object-contain" />
          <div className="text-left">
            <h1 className="text-xl sm:text-2xl font-bold text-navy">Acordo de Confidencialidade</h1>
            <p className="text-xs text-gray-400">SENTINEL by Fairfield</p>
          </div>
        </div>
        <p className="text-sm text-gray-600 max-w-xl mx-auto">
          Para prosseguir, leia integralmente o Acordo de Confidencialidade abaixo.
          Ao finalizar a leitura, o botao de aceitacao sera habilitado.
        </p>
      </div>

      {/* User info badge */}
      <div className="flex items-center justify-center mb-4">
        <div className="inline-flex items-center gap-2 bg-navy/5 rounded-full px-4 py-2 text-xs">
          <svg className="w-4 h-4 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <span className="text-navy font-medium">{user?.nome}</span>
          <span className="text-gray-400">|</span>
          <span className="text-gray-500">{user?.empresa}</span>
        </div>
      </div>

      {/* NDA Document */}
      <div className="card p-0 overflow-hidden">
        {/* Document header */}
        <div className="bg-navy px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[#7DD3FC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span className="text-white text-sm font-semibold">NDA — Fairfield Consultoria em Seguros</span>
          </div>
          <div className="flex items-center gap-1.5">
            {scrolledToEnd ? (
              <span className="text-green-400 text-xs font-medium flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Leitura completa
              </span>
            ) : (
              <span className="text-amber-300 text-xs font-medium flex items-center gap-1 animate-pulse">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
                Role ate o final
              </span>
            )}
          </div>
        </div>

        {/* Scroll progress indicator */}
        <div className="h-1 bg-gray-100">
          <ScrollProgress scrollRef={scrollRef} />
        </div>

        {/* Document body */}
        <div
          ref={scrollRef}
          className="max-h-[55vh] sm:max-h-[60vh] overflow-y-auto px-4 sm:px-8 py-5 sm:py-6 space-y-5 text-sm leading-relaxed text-gray-700 scroll-smooth"
        >
          {NDA_SECTIONS.map((section, idx) => (
            <div key={idx}>
              <h3 className={`font-bold ${idx === 0 ? 'text-lg text-navy text-center mb-4' : 'text-navy text-sm mb-2'}`}>
                {section.title}
              </h3>
              {section.content.split('\n').map((line, li) => (
                <p key={li} className={`${line.startsWith('(') ? 'ml-4' : ''} mb-2 text-[13px] sm:text-sm`}>
                  {line}
                </p>
              ))}
            </div>
          ))}

          {/* Footer */}
          <div className="border-t border-gray-200 pt-4 mt-6">
            <p className="text-xs text-gray-500 text-center">
              <strong>Vigencia:</strong> 90 dias a partir da aceitacao
            </p>
            <p className="text-xs text-gray-500 text-center mt-1">
              <strong>Parte Receptora:</strong> Fairfield Protecao e Inteligencia Financeira Ltda — CNPJ 13.381.310/0001-45
            </p>
            <p className="text-xs text-gray-500 text-center mt-1">
              Foro: Comarca de Blumenau/SC
            </p>
          </div>

          {/* End marker */}
          <div className="text-center py-4">
            <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-2">
              <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-xs text-green-700 font-medium">Fim do documento</span>
            </div>
          </div>
        </div>
      </div>

      {/* Accept button area */}
      <div className="mt-5 sm:mt-6">
        {scrolledToEnd ? (
          <div className="animate-fadeIn">
            <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-4">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <div>
                  <p className="text-sm text-green-800 font-medium">
                    Ao clicar em "De Acordo", voce declara que leu e compreendeu todas as clausulas do Acordo de Confidencialidade e concorda com seus termos.
                  </p>
                  <p className="text-xs text-green-600 mt-1">
                    Sua aceitacao sera registrada com data, hora e identificacao do usuario.
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={handleAccept}
              disabled={accepting}
              className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:from-green-700 hover:to-green-800 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50"
            >
              {accepting ? (
                <>
                  <svg className="animate-spin h-6 w-6" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>
                  Registrando aceitacao...
                </>
              ) : (
                <>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  De Acordo — Aceito os Termos
                </>
              )}
            </button>
          </div>
        ) : (
          <div className="text-center">
            <button disabled className="w-full bg-gray-200 text-gray-400 px-8 py-4 rounded-xl font-bold text-lg cursor-not-allowed">
              <span className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Leia o documento completo para continuar
              </span>
            </button>
            <p className="text-xs text-gray-400 mt-2">Role ate o final do documento para habilitar o botao de aceitacao</p>
          </div>
        )}
      </div>
    </div>
  )
}

function ScrollProgress({ scrollRef }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    function handleScroll() {
      const { scrollTop, scrollHeight, clientHeight } = el
      const pct = Math.min(100, (scrollTop / (scrollHeight - clientHeight)) * 100)
      setProgress(pct)
    }
    el.addEventListener('scroll', handleScroll)
    return () => el.removeEventListener('scroll', handleScroll)
  }, [scrollRef])

  return (
    <div
      className="h-full bg-gradient-to-r from-cobre to-[#D4944A] transition-all duration-150"
      style={{ width: `${progress}%` }}
    />
  )
}
