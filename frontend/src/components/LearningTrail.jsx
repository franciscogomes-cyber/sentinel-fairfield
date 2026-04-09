import { useState } from 'react'

const TIPS_INTERNO = {
  0: {
    icon: '🏢',
    title: 'Por que pedimos dados da empresa?',
    text: 'A seguradora analisa o perfil da sua empresa para calcular o risco. Quanto mais precisos os dados, melhor a proposta que você receberá.',
    insight: 'Empresas que preenchem todos os campos recebem cotações até 30% mais competitivas.',
    funFact: 'O seguro de crédito protege contra inadimplência — se seu comprador não pagar, a seguradora cobre até 90% do valor.'
  },
  1: {
    icon: '📊',
    title: 'O poder do histórico de faturamento',
    text: 'Seu histórico de vendas e perdas mostra à seguradora como sua empresa gerencia riscos comerciais. Uma tendência de crescimento com poucas perdas resulta em prêmios menores.',
    insight: 'O faturamento desejado para o seguro define a base do cálculo — informe o mais próximo da realidade para evitar surpresas.',
    funFact: 'Empresas com sinistralidade abaixo de 3% costumam ter descontos progressivos na renovação da apólice.'
  },
  2: {
    icon: '📋',
    title: 'Carteira de recebíveis: o raio-X do seu risco',
    text: 'A distribuição da carteira revela a concentração de risco. Uma carteira pulverizada (muitos clientes pequenos) é vista como mais segura do que poucos grandes clientes.',
    insight: 'Preencha todas as faixas para mostrar diversificação — isso pode reduzir seu prêmio significativamente.',
    funFact: 'Recebíveis são o 2º maior ativo da maioria das empresas brasileiras, depois de imóveis.'
  },
  3: {
    icon: '⚠️',
    title: 'Transparência nas perdas é essencial',
    text: 'Declarar perdas passadas não prejudica sua cotação — ao contrário! Omitir pode gerar problemas na hora do sinistro. A seguradora avalia o padrão, não eventos isolados.',
    insight: 'Mesmo sem perdas, preencha a seção — "zero perdas" é uma informação valiosa que melhora seu perfil.',
    funFact: 'No Brasil, 60% das empresas já tiveram pelo menos uma perda por inadimplência nos últimos 5 anos.'
  },
  4: {
    icon: '⏰',
    title: 'Atrasos contam uma história importante',
    text: 'Atrasos curtos e pontuais são normais no mercado. O que preocupa são atrasos longos e recorrentes. Detalhar os vencidos acima de 180 dias mostra maturidade na gestão.',
    insight: 'Títulos vencidos acima de 180 dias podem ser excluídos da cobertura — informe para evitar surpresas na apólice.',
    funFact: 'O prazo médio de pagamento no Brasil é de 45 dias, um dos mais longos da América Latina.'
  },
  5: {
    icon: '🤝',
    title: 'Último passo! Seus compradores definem o custo',
    text: 'A seguradora analisa o perfil de crédito de cada comprador. Incluir uma amostra diversificada (grandes, médios e pequenos) ajuda a calibrar melhor os limites. Após enviar, o SENTINEL consulta as 6 maiores seguradoras e negocia a melhor proposta para você.',
    insight: 'Informe pelo menos 10 compradores para que a seguradora consiga fazer uma análise representativa. Quanto mais completo, melhor a cotação.',
    funFact: 'O SENTINEL consulta AIG, Atradius, Coface, Allianz Trade, AVLA e CESCE simultaneamente — sem custo para você.'
  }
}

const TIPS_EXTERNO = {
  0: {
    icon: '🌍',
    title: 'Exportar com segurança',
    text: 'O seguro de crédito à exportação protege contra riscos políticos e comerciais nos países de destino. Os dados da sua empresa são a base para uma cotação precisa.',
    insight: 'O número de anos exportando é um dos fatores mais valorizados pelas seguradoras internacionais.',
    funFact: 'Mais de 80% dos exportadores europeus usam seguro de crédito. No Brasil, apenas 15% — uma grande oportunidade.'
  },
  1: {
    icon: '💵',
    title: 'Faturamento em dólar: base da apólice',
    text: 'O histórico em US$ permite que as seguradoras internacionais avaliem seu porte exportador. Quanto mais consistente o volume, melhores as condições oferecidas.',
    insight: 'O prazo de venda impacta diretamente o prêmio — prazos mais longos significam mais risco e prêmios maiores.',
    funFact: 'Exportadores com seguro de crédito conseguem negociar prazos maiores com importadores, aumentando vendas em até 20%.'
  },
  2: {
    icon: '🗺️',
    title: 'Destinos definem o nível de risco',
    text: 'Cada região tem um perfil de risco diferente. Europa e América do Norte são considerados mercados estáveis, enquanto África e América Central podem ter prêmios maiores.',
    insight: 'Distribuir percentuais por região ajuda a seguradora a montar uma cobertura customizada — não deixe em branco!',
    funFact: 'O risco político (guerras, embargos, moratórias) é coberto apenas pelo seguro de crédito à exportação.'
  },
  3: {
    icon: '📋',
    title: 'Carteira internacional: diversificação é chave',
    text: 'Uma carteira bem distribuída entre vários importadores e países reduz o risco de concentração. As seguradoras valorizam muito essa diversificação.',
    insight: 'Preencha os valores em US$ — a seguradora precisa ver o tamanho real de cada faixa de recebíveis.',
    funFact: 'Empresas com mais de 20 importadores ativos em 3+ países costumam ter os melhores termos de apólice.'
  },
  4: {
    icon: '⚠️',
    title: 'Perdas internacionais: cobrar é mais difícil',
    text: 'Recuperar valores no exterior é complexo e caro. As seguradoras sabem disso e analisam seu histórico para entender o nível de exposição real.',
    insight: 'Informe o país de cada perda — perdas em mercados desenvolvidos preocupam menos do que em mercados emergentes.',
    funFact: 'O custo de cobrança internacional pode chegar a 40% do valor da dívida — o seguro elimina esse risco.'
  },
  5: {
    icon: '⏰',
    title: 'Vencidos acima de 180 dias: atenção redobrada',
    text: 'No comércio exterior, dívidas acima de 180 dias são consideradas de difícil recuperação. Declarar esses valores demonstra transparência e profissionalismo.',
    insight: 'Mesmo sem vencidos, preencha com zero — a informação confirma uma carteira saudável.',
    funFact: 'A média mundial de inadimplência no comércio exterior é de 2% a 3% do faturamento exportado.'
  },
  6: {
    icon: '🤝',
    title: 'Último passo! Seus importadores definem o custo',
    text: 'As seguradoras possuem bases de dados globais para verificar a saúde financeira dos seus importadores. O endereço completo ajuda na identificação correta. Após enviar, o SENTINEL consulta as 6 maiores seguradoras globais e negocia a melhor proposta para suas exportações.',
    insight: 'Inclua o código fiscal (Tax ID) e endereço completo — isso acelera a análise e melhora as condições oferecidas.',
    funFact: 'O SENTINEL consulta AIG, Atradius, Coface, Allianz Trade, AVLA e CESCE simultaneamente — sem custo para você.'
  }
}

function LearningCard({ tip, stepIndex, totalSteps }) {
  const [expanded, setExpanded] = useState(false)
  const pct = Math.round(((stepIndex + 1) / totalSteps) * 100)

  return (
    <div className="mb-6 rounded-xl border border-cobre/20 bg-gradient-to-r from-navy/5 to-cobre/5 overflow-hidden">
      {/* Barra de progresso da trilha */}
      <div className="h-1 bg-gray-200">
        <div className="h-full bg-gradient-to-r from-navy to-cobre transition-all duration-700 ease-out" style={{ width: `${pct}%` }} />
      </div>

      <div className="px-4 py-3">
        {/* Header clicável */}
        <button onClick={() => setExpanded(!expanded)} className="w-full flex items-center gap-3 text-left group">
          <span className="text-2xl flex-shrink-0">{tip.icon}</span>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold text-cobre uppercase tracking-widest">SENTINEL — Trilha de Aprendizado</span>
              <span className="text-[10px] text-gray-400">•</span>
              <span className="text-[10px] text-gray-400">{pct}% concluído</span>
            </div>
            <h4 className="text-sm font-bold text-navy group-hover:text-cobre transition-colors">{tip.title}</h4>
          </div>
          <svg className={`w-5 h-5 text-gray-400 transition-transform flex-shrink-0 ${expanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Conteúdo expandido */}
        {expanded && (
          <div className="mt-3 space-y-3 animate-fadeIn">
            <p className="text-sm text-gray-600 leading-relaxed">{tip.text}</p>

            {/* Dica prática */}
            <div className="flex gap-2 bg-green-50 border border-green-200 rounded-lg px-3 py-2">
              <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <span className="text-xs font-bold text-green-700 uppercase">Dica</span>
                <p className="text-xs text-green-700">{tip.insight}</p>
              </div>
            </div>

            {/* Fato curioso */}
            <div className="flex gap-2 bg-blue-50 border border-blue-200 rounded-lg px-3 py-2">
              <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <span className="text-xs font-bold text-blue-700 uppercase">Sabia que?</span>
                <p className="text-xs text-blue-700">{tip.funFact}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export function LearningTrailInterno({ step }) {
  const tip = TIPS_INTERNO[step]
  if (!tip) return null
  return <LearningCard tip={tip} stepIndex={step} totalSteps={6} />
}

export function LearningTrailExterno({ step }) {
  const tip = TIPS_EXTERNO[step]
  if (!tip) return null
  return <LearningCard tip={tip} stepIndex={step} totalSteps={7} />
}
