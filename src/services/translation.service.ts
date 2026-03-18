import { Injectable, signal } from '@angular/core';

export type Language = 'en' | 'de' | 'pt' | 'es';

interface Translations {
  [key: string]: {
    [lang in Language]: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private _currentLang = signal<Language>('en');
  readonly currentLang = this._currentLang.asReadonly();

  private translations: Translations = {
    // Nav Bar
    'nav.slide': { en: 'Slide', de: 'Folie', pt: 'Slide', es: 'Diapositiva' },
    'nav.of': { en: 'of', de: 'von', pt: 'de', es: 'de' },
    'nav.prev': { en: 'Previous Slide', de: 'Vorherige Folie', pt: 'Slide Anterior', es: 'Diapositiva Anterior' },
    'nav.next': { en: 'Next Slide', de: 'Nächste Folie', pt: 'Próximo Slide', es: 'Próxima Diapositiva' },

    // Slide 1: Cover
    'slide1.title': { en: 'Syntra Advisory', de: 'Syntra Advisory', pt: 'Syntra Advisory', es: 'Syntra Advisory' },
    'slide1.subtitle': { 
      en: 'Optimization System for the New AI Search Era', 
      de: 'Optimierungssystem für die neue KI-Suchära.', 
      pt: 'Estratégia de Representação em IA para a Nova Era de Busca', 
      es: 'Estrategia de Representación en IA para la Nueva Era de Búsqueda' 
    },
    'slide1.opportunity': { 
      en: 'GLOBAL SALES NETWORK FOR MAXIMUM MARKET LAUNCH', 
      de: 'Globale Vertriebsgemeinschaft für maximale Marktdurchdringung.', 
      pt: 'Oportunidade para Parceiros Estratégicos por País', 
      es: 'Oportunidad para Socios Estratégicos por País' 
    },

    // Slide 2: The Shift
    'slide2.title': { 
      en: 'Search is changing.', 
      de: 'Die Suche verändert sich.', 
      pt: 'A busca está mudando.', 
      es: 'La búsqueda está cambiando.' 
    },
    'slide2.subtitle': { 
      en: 'Users are no longer searching. They are asking AI.', 
      de: 'Nutzer suchen nicht mehr. Sie fragen KI.', 
      pt: 'Os usuários não pesquisam mais. Eles perguntam à IA.', 
      es: 'Los usuarios ya no buscan. Preguntan a la IA.' 
    },
    'slide2.query1': { en: 'Best CRM for startups', de: 'Bestes CRM für Startups', pt: 'Melhor CRM para startups', es: 'Mejor CRM para startups' },
    'slide2.query2': { en: 'How to scale AI?', de: 'Wie skaliert man KI?', pt: 'Como escalar IA?', es: '¿Cómo escalar la IA?' },
    'slide2.query3': { en: 'Syntra Advisory reviews', de: 'Syntra Advisory Bewertungen', pt: 'Avaliações da Syntra Advisory', es: 'Reseñas de Syntra Advisory' },
    'slide2.search_label': { en: 'Traditional Search', de: 'Traditionelle Suche', pt: 'Busca Tradicional', es: 'Búsqueda Tradicional' },
    'slide2.ai_label': { en: 'AI-Driven Search', de: 'KI-gesteuerte Suche', pt: 'Busca Impulsionada por IA', es: 'Búsqueda Impulsada por IA' },

    // Slide 3: The Problem
    'slide3.title': { 
      en: 'Brands are invisible to AI.', 
      de: 'Marken sind für KI unsichtbar.', 
      pt: 'As marcas são invisíveis para a IA.', 
      es: 'Las marcas son invisibles para la IA.' 
    },
    'slide3.subtitle': { 
      en: 'They cannot control how they are represented.', 
      de: 'Sie kontrollieren ihre Darstellung nicht.', 
      pt: 'Não controlam como são representadas.', 
      es: 'No controlan cómo son representadas.' 
    },
    'slide3.warning': { 
      en: 'REPRESENTATION GAP', 
      de: 'REPRÄSENTATIONSLÜCKE', 
      pt: 'LACUNA DE REPRESENTAÇÃO', 
      es: 'BRECHA DE REPRESENTACIÓN' 
    },

    // Slide 4: The Opportunity
    'slide4.title': { 
      en: 'A new category is emerging:', 
      de: 'Eine neue Kategorie entsteht:', 
      pt: 'Uma nova categoria está surgindo:', 
      es: 'Está emergiendo una nueva categoría:' 
    },
    'slide4.subtitle': { 
      en: 'AI Visibility & Representation', 
      de: 'KI-Sichtbarkeit & Repräsentation', 
      pt: 'Visibilidade e Representação em IA', 
      es: 'Visibilidad y Representación en IA' 
    },
    'slide4.keyword1': { en: 'Visibility', de: 'Sichtbarkeit', pt: 'Visibilidade', es: 'Visibilidad' },
    'slide4.keyword2': { en: 'Representation', de: 'Repräsentation', pt: 'Representação', es: 'Representación' },
    'slide4.keyword3': { en: 'Control', de: 'Kontrolle', pt: 'Controle', es: 'Control' },
    'slide4.keyword4': { en: 'Growth', de: 'Wachstum', pt: 'Crescimento', es: 'Crecimiento' },

    // Slide 5: What is Syntra
    'slide5.title': { 
      en: 'Syntra Advisory is an AI Representation Strategy firm.', 
      de: 'Syntra Advisory ist eine Beratungsfirma für KI-Repräsentationsstrategien.', 
      pt: 'Syntra Advisory é uma consultoria de estratégia de representação em IA.', 
      es: 'Syntra Advisory es una firma de estrategia de representación en IA.' 
    },
    'slide5.label': { 
      en: 'OUR IDENTITY', 
      de: 'UNSERE IDENTITÄT', 
      pt: 'NOSSA IDENTIDADE', 
      es: 'NUESTRA IDENTIDAD' 
    },

    // Slide 6: Services
    'slide6.title': { 
      en: 'Our Core Services', 
      de: 'Unsere Kernleistungen', 
      pt: 'Nossos Serviços Principais', 
      es: 'Nuestros Servicios Principales' 
    },
    'slide6.service1_title': { 
      en: 'AI Positioning Analysis', 
      de: 'KI-Positionierungsanalyse', 
      pt: 'Análise de Posicionamento em IA', 
      es: 'Análisis de Posicionamiento en IA' 
    },
    'slide6.service1_desc': { 
      en: 'Deep audit of how AI models perceive and describe your brand.', 
      de: 'Tiefgehende Prüfung, wie KI-Modelle Ihre Marke wahrnehmen und beschreiben.', 
      pt: 'Auditoria profunda de como os modelos de IA percebem e descrevem sua marca.', 
      es: 'Auditoría profunda de cómo los modelos de IA perciben y describen su marca.' 
    },
    'slide6.service2_title': { 
      en: 'AI Representation Roadmap', 
      de: 'KI-Repräsentations-Roadmap', 
      pt: 'Roteiro de Representação em IA', 
      es: 'Hoja de Ruta de Representación en IA' 
    },
    'slide6.service2_desc': { 
      en: 'Strategic planning to align AI output with your corporate identity.', 
      de: 'Strategische Planung zur Abstimmung des KI-Outputs mit Ihrer Unternehmensidentität.', 
      pt: 'Planejamento estratégico para alinhar a saída da IA com sua identidade corporativa.', 
      es: 'Planificación estratégica para alinear el resultado de la IA con su identidad corporativa.' 
    },
    'slide6.service3_title': { 
      en: 'Content Engineering for LLMs', 
      de: 'Content Engineering für LLMs', 
      pt: 'Engenharia de Conteúdo para LLMs', 
      es: 'Ingeniería de Contenido para LLMs' 
    },
    'slide6.service3_desc': { 
      en: 'Optimizing data structures to ensure accurate AI training and retrieval.', 
      de: 'Optimierung von Datenstrukturen zur Gewährleistung präziser KI-Schulung und -Abfrage.', 
      pt: 'Otimização de estruturas de dados para garantir treinamento e recuperação precisos de IA.', 
      es: 'Optimización de estructuras de datos para garantizar un entrenamiento y recuperación precisos de la IA.' 
    },
    'slide6.service4_title': { 
      en: 'Digital PR for AI Visibility', 
      de: 'Digitale PR für KI-Sichtbarkeit', 
      pt: 'PR Digital para Visibilidade em IA', 
      es: 'PR Digital para Visibilidad en IA' 
    },
    'slide6.service4_desc': { 
      en: 'High-authority placements designed to influence AI knowledge graphs.', 
      de: 'Platzierungen mit hoher Autorität zur Beeinflussung von KI-Wissensgraphen.', 
      pt: 'Colocações de alta autoridade projetadas para influenciar os gráficos de conhecimento da IA.', 
      es: 'Colocaciones de alta autoridad diseñadas para influir en los gráficos de conocimiento de la IA.' 
    },

    // Slide 7: How It Works
    'slide7.title': { 
      en: 'How It Works', 
      de: 'Wie es funktioniert', 
      pt: 'Como Funciona', 
      es: 'Cómo Funciona' 
    },
    'slide7.step1_title': { en: 'Audit', de: 'Audit', pt: 'Auditoria', es: 'Auditoría' },
    'slide7.step1_desc': { 
      en: 'Comprehensive mapping of current AI mentions.', 
      de: 'Umfassende Kartierung aktueller KI-Erwähnungen.', 
      pt: 'Mapeamento abrangente das menções atuais de IA.', 
      es: 'Mapeo integral de las menciones actuales de IA.' 
    },
    'slide7.step2_title': { en: 'Gap Analysis', de: 'Gap-Analyse', pt: 'Análise de Lacunas', es: 'Análisis de Brechas' },
    'slide7.step2_desc': { 
      en: 'Identifying discrepancies between brand and AI output.', 
      de: 'Identifizierung von Diskrepanzen zwischen Marke und KI-Output.', 
      pt: 'Identificação de discrepâncias entre a marca e a saída da IA.', 
      es: 'Identificación de discrepancias entre la marca y el resultado de la IA.' 
    },
    'slide7.step3_title': { en: 'Strategy', de: 'Strategie', pt: 'Estratégia', es: 'Estratégia' },
    'slide7.step3_desc': { 
      en: 'Defining the optimal AI representation roadmap.', 
      de: 'Definition der optimalen KI-Repräsentations-Roadmap.', 
      pt: 'Definição do roteiro ideal de representação em IA.', 
      es: 'Definición de la hoja de ruta de representación de IA óptima.' 
    },
    'slide7.step4_title': { en: 'Execution', de: 'Ausführung', pt: 'Execução', es: 'Ejecución' },
    'slide7.step4_desc': { 
      en: 'Implementing technical and content optimizations.', 
      de: 'Implementierung technischer und inhaltlicher Optimierungen.', 
      pt: 'Implementação de otimizações técnicas e de conteúdo.', 
      es: 'Implementación de optimizaciones técnicas y de contenido.' 
    },
    'slide7.step5_title': { en: 'Monitoring', de: 'Überwachung', pt: 'Monitoramento', es: 'Monitoreo' },
    'slide7.step5_desc': { 
      en: 'Continuous tracking of AI model perception.', 
      de: 'Kontinuierliche Verfolgung der KI-Modellwahrnehmung.', 
      pt: 'Acompanhamento contínuo da percepção do modelo de IA.', 
      es: 'Seguimiento continuo de la percepción del modelo de IA.' 
    },

    // Slide 8: Why Now
    'slide8.title': { 
      en: 'Why Now?', 
      de: 'Warum jetzt?', 
      pt: 'Por que agora?', 
      es: '¿Por qué ahora?' 
    },
    'slide8.main_text': { 
      en: 'This is SEO in 2005… but faster.', 
      de: 'Das ist SEO wie im Jahr 2005… nur schneller.', 
      pt: 'Isso é SEO em 2005… mas mais rápido.', 
      es: 'Esto es SEO en 2005… pero más rápido.' 
    },
    'slide8.past_label': { en: '2005: SEO Revolution', de: '2005: SEO-Revolution', pt: '2005: Revolução do SEO', es: '2005: Revolución del SEO' },
    'slide8.future_label': { en: '2026: AI Revolution', de: '2026: KI-Revolution', pt: '2026: Revolução da IA', es: '2026: Revolución de la IA' },
    'slide8.past_desc': { 
      en: 'Websites were competing for blue links.', 
      de: 'Websites konkurrierten um blaue Links.', 
      pt: 'Sites competiam por links azuis.', 
      es: 'Los sitios web competían por enlaces azules.' 
    },
    'slide8.future_desc': { 
      en: 'Brands are competing for AI mentions.', 
      de: 'Marken konkurrieren um KI-Erwähnungen.', 
      pt: 'Marcas competem por menções de IA.', 
      es: 'Las marcas compiten por menciones de IA.' 
    },
    'slide8.urgency_label': { en: 'URGENCY', de: 'DRINGLICHKEIT', pt: 'URGÊNCIA', es: 'URGENCIA' },

    // Slide 9: Market
    'slide9.title': { 
      en: 'Target Industries', 
      de: 'Zielbranchen', 
      pt: 'Indústrias-Alvo', 
      es: 'Industrias Objetivo' 
    },
    'slide9.subtitle': { 
      en: 'AI representation is critical across all high-growth sectors.', 
      de: 'KI-Repräsentation ist in allen wachstumsstarken Sektoren entscheidend.', 
      pt: 'A representação em IA é crítica em todos os setores de alto crescimento.', 
      es: 'La representación de IA es crítica en todos los sectores de alto crecimiento.' 
    },
    'slide9.ind1': { en: 'eCommerce', de: 'E-Commerce', pt: 'eCommerce', es: 'eCommerce' },
    'slide9.ind2': { en: 'SaaS', de: 'SaaS', pt: 'SaaS', es: 'SaaS' },
    'slide9.ind3': { en: 'Healthcare', de: 'Gesundheitswesen', pt: 'Saúde', es: 'Salud' },
    'slide9.ind4': { en: 'Finance', de: 'Finanzen', pt: 'Finanças', es: 'Finanzas' },
    'slide9.ind5': { en: 'Personal Brands', de: 'Personal Brands', pt: 'Marcas Pessoais', es: 'Marcas Personales' },

    // Slide 10: Partner Role
    'slide10.title': { 
      en: 'Strategic Partnership Structure', 
      de: 'Strategische Partnerschaftsstruktur', 
      pt: 'Estrutura de Parceria Estratégica', 
      es: 'Estructura de Asociación Estratégica' 
    },
    'slide10.partner_label': { en: 'Partner Role', de: 'Partner-Rolle', pt: 'Papel do Parceiro', es: 'Rol del Socio' },
    'slide10.syntra_label': { en: 'Syntra Role', de: 'Syntra-Rolle', pt: 'Papel da Syntra', es: 'Rol de Syntra' },
    'slide10.p_task1': { en: 'Generate leads', de: 'Leads generieren', pt: 'Gerar leads', es: 'Generar leads' },
    'slide10.p_task2': { en: 'Sell services', de: 'Dienstleistungen verkaufen', pt: 'Vender serviços', es: 'Vender servicios' },
    'slide10.p_task3': { en: 'Localize strategy', de: 'Strategie lokalisieren', pt: 'Localizar estratégia', es: 'Localizar estrategia' },
    'slide10.s_task1': { en: 'Technical delivery', de: 'Technische Umsetzung', pt: 'Entrega técnica', es: 'Entrega técnica' },
    'slide10.s_task2': { en: 'Global R&D', de: 'Globale F&E', pt: 'P&D Global', es: 'I+D Global' },
    'slide10.s_task3': { en: 'Brand authority', de: 'Markenautorität', pt: 'Autoridade da marca', es: 'Autoridad de marca' },

    // Slide 11: What They Get
    'slide11.title': { 
      en: 'What You Receive', 
      de: 'Was Sie erhalten', 
      pt: 'O Que Você Recebe', 
      es: 'Lo Que Recibes' 
    },
    'slide11.subtitle': { 
      en: 'A complete ecosystem designed for your success.', 
      de: 'Ein komplettes Ökosystem, das für Ihren Erfolg konzipiert wurde.', 
      pt: 'Um ecossistema completo projetado para o seu sucesso.', 
      es: 'Un ecosistema completo diseñado para tu éxito.' 
    },
    'slide11.benefit1_title': { en: 'Access to Syntra Services', de: 'Zugang zu Syntra-Services', pt: 'Acesso aos Serviços Syntra', es: 'Acceso a Servicios Syntra' },
    'slide11.benefit1_desc': { en: 'Full suite of AI representation tools.', de: 'Komplette Suite an KI-Repräsentationstools.', pt: 'Conjunto completo de ferramentas de representação em IA.', es: 'Conjunto completo de herramientas de representación de IA.' },
    'slide11.benefit2_title': { en: 'Brand Support', de: 'Marken-Support', pt: 'Suporte de Marca', es: 'Soporte de Marca' },
    'slide11.benefit2_desc': { en: 'Global authority and marketing assets.', de: 'Globale Autorität und Marketing-Assets.', pt: 'Autoridade global e ativos de marketing.', es: 'Autoridad global y activos de marketing.' },
    'slide11.benefit3_title': { en: 'Methodology', de: 'Methodik', pt: 'Metodologia', es: 'Metodología' },
    'slide11.benefit3_desc': { en: 'Proven frameworks for AI strategy.', de: 'Bewährte Frameworks für KI-Strategie.', pt: 'Frameworks comprovados para estratégia de IA.', es: 'Frameworks probados para estrategia de IA.' },
    'slide11.benefit4_title': { en: 'Sales Support', de: 'Vertriebsunterstützung', pt: 'Suporte de Vendas', es: 'Soporte de Ventas' },
    'slide11.benefit4_desc': { en: 'Training and direct closing assistance.', de: 'Schulung und direkte Unterstützung beim Abschluss.', pt: 'Treinamento e assistência direta no fechamento.', es: 'Capacitación y asistencia directa en el cierre.' },

    // Slide 12: Business Model
    'slide12.title': { 
      en: 'Business Model', 
      de: 'Geschäftsmodell', 
      pt: 'Modelo de Negócio', 
      es: 'Modelo de Negocio' 
    },
    'slide12.subtitle': { 
      en: 'A sustainable framework designed for mutual growth.', 
      de: 'Ein nachhaltiger Rahmen für gemeinsames Wachstum.', 
      pt: 'Uma estrutura sustentável projetada para o crescimento mútuo.', 
      es: 'Un marco sostenible diseñado para el crecimiento mutuo.' 
    },
    'slide12.item1_title': { en: 'Revenue Sharing', de: 'Umsatzbeteiligung', pt: 'Partilha de Receitas', es: 'Participación en los Ingresos' },
    'slide12.item1_desc': { en: 'Transparent and fair distribution of value.', de: 'Transparente und faire Wertverteilung.', pt: 'Distribuição de valor transparente e justa.', es: 'Distribución de valor transparente y justa.' },
    'slide12.item2_title': { en: 'Territory Model', de: 'Gebietsmodell', pt: 'Modelo de Território', es: 'Modelo de Territorio' },
    'slide12.item2_desc': { en: 'Exclusive regional focus and protection.', de: 'Exklusiver regionaler Fokus und Schutz.', pt: 'Foco e proteção regional exclusiva.', es: 'Enfoque y protección regional exclusiva.' },
    'slide12.item3_title': { en: 'Growth Incentives', de: 'Wachstumsanreize', pt: 'Incentivos ao Crescimento', es: 'Incentivos al Crecimiento' },
    'slide12.item3_desc': { en: 'Rewards for scaling and performance.', de: 'Belohnungen für Skalierung und Leistung.', pt: 'Recompensas por escalonamento e desempenho.', es: 'Recompensas por escalamiento y desempeño.' },
    'slide12.calc_title': { en: 'Revenue Projection', de: 'Umsatzprognose', pt: 'Projeção de Receita', es: 'Proyección de Ingresos' },
    'slide12.calc_subtitle': { en: 'Projection Tool', de: 'Prognose-Tool', pt: 'Ferramenta de Projeção', es: 'Herramienta de Proyección' },
    'slide12.calc_volume': { en: 'Monthly Market Volume', de: 'Monatliches Marktvolumen', pt: 'Volume de Mercado Mensal', es: 'Volumen de Mercado Mensual' },
    'slide12.calc_partner': { en: 'Partner', de: 'Partner', pt: 'Parceiro', es: 'Socio' },
    'slide12.calc_syntra': { en: 'Syntra', de: 'Syntra', pt: 'Syntra', es: 'Syntra' },

    // Slide 13: Growth Path
    'slide13.title': { 
      en: 'Growth Path', 
      de: 'Wachstumspfad', 
      pt: 'Caminho de Crescimento', 
      es: 'Ruta de Crecimiento' 
    },
    'slide13.subtitle': { 
      en: 'Scale your impact and rewards as you progress through our partnership levels.', 
      de: 'Skalieren Sie Ihren Einfluss und Ihre Belohnungen, während Sie unsere Partnerschaftsstufen durchlaufen.', 
      pt: 'Aumente o seu impacto e recompensas à medida que avança nos nossos níveis de parceria.', 
      es: 'Escala tu impacto y recompensas a medida que avanzas en nuestros niveles de asociación.' 
    },
    'slide13.level1_title': { en: 'Partner', de: 'Partner', pt: 'Parceiro', es: 'Socio' },
    'slide13.level1_desc': { en: 'Initial onboarding and market entry.', de: 'Initiales Onboarding und Markteintritt.', pt: 'Integração inicial e entrada no mercado.', es: 'Onboarding inicial y entrada al mercado.' },
    'slide13.level2_title': { en: 'Top Performer', de: 'Top-Performer', pt: 'Top Performer', es: 'Top Performer' },
    'slide13.level2_desc': { en: 'Consistent results and expanded service portfolio.', de: 'Konsistente Ergebnisse und erweitertes Serviceportfolio.', pt: 'Resultados consistentes e portfólio de serviços expandido.', es: 'Resultados consistentes y portafolio de servicios ampliado.' },
    'slide13.level3_title': { en: 'Regional Leader', de: 'Regionaler Leiter', pt: 'Líder Regional', es: 'Líder Regional' },
    'slide13.level3_desc': { en: 'Strategic territory management and leadership.', de: 'Strategisches Gebietsmanagement und Führung.', pt: 'Gestão estratégica de território e liderança.', es: 'Gestión estratégica de territorio y liderazgo.' },
    'slide13.detail_l1_title': { en: 'Entry Requirements & Benefits', de: 'Einstiegsvoraussetzungen & Vorteile', pt: 'Requisitos de Entrada e Benefícios', es: 'Requisitos de Entrada y Beneficios' },
    'slide13.detail_l1_desc': { en: 'Start with 30% revenue share, full access to Syntra AI Audit tools, and basic training.', de: 'Beginnen Sie mit 30 % Umsatzbeteiligung, vollem Zugriff auf Syntra AI Audit-Tools und Basisschulung.', pt: 'Comece com 30% de participação na receita, acesso total às ferramentas Syntra AI Audit e treinamento básico.', es: 'Comience con una participación en los ingresos del 30%, acceso total a las herramientas de auditoría de IA de Syntra y capacitación básica.' },
    'slide13.detail_l2_title': { en: 'Performance Milestones', de: 'Leistungsmeilensteine', pt: 'Marcos de Desempenho', es: 'Hitos de Desempeño' },
    'slide13.detail_l2_desc': { en: 'Reach 40% share after €50k revenue, unlocked dedicated support, and advanced AI strategy training.', de: 'Erreichen Sie 40 % Anteil nach 50.000 € Umsatz, freigeschaltetem dediziertem Support und fortgeschrittener KI-Strategieschulung.', pt: 'Alcance 40% de participação após € 50 mil de receita, suporte dedicado desbloqueado e treinamento avançado em estratégia de IA.', es: 'Alcance una participación del 40% después de 50.000 € de ingresos, soporte dedicado desbloqueado y capacitación avanzada en estrategia de IA.' },
    'slide13.detail_l3_title': { en: 'Strategic Leadership Privileges', de: 'Strategische Führungsprivilegien', pt: 'Privilégios de Liderança Estratégica', es: 'Privilegios de Liderazgo Estratégico' },
    'slide13.detail_l3_desc': { en: 'Maximum 50% share, exclusive territory rights, and a seat on the Syntra Partner Advisory Board.', de: 'Maximal 50 % Anteil, exklusive Gebietsrechte und ein Sitz im Syntra Partner Advisory Board.', pt: 'Participação máxima de 50%, direitos territoriais exclusivos e um assento no Conselho Consultivo de Parceiros da Syntra.', es: 'Participación máxima del 50%, derechos territoriais exclusivos y un asiento en la Junta Asesora de Socios de Syntra.' },

    // Slide 14: Why Syntra
    'slide14.title': { 
      en: 'Why Syntra?', 
      de: 'Warum Syntra?', 
      pt: 'Por que Syntra?', 
      es: '¿Por qué Syntra?' 
    },
    'slide14.point1_title': { en: 'First Mover Advantage', de: 'First-Mover-Vorteil', pt: 'Vantagem do Pioneiro', es: 'Ventaja del Pionero' },
    'slide14.point1_desc': { en: 'Capture the market before the competition arrives.', de: 'Erobern Sie den Markt, bevor die Konkurrenz eintrifft.', pt: 'Capture o mercado antes que a concorrência chegue.', es: 'Captura el mercado antes de que llegue la competencia.' },
    'slide14.point2_title': { en: 'New Category', de: 'Neue Kategorie', pt: 'Nova Categoria', es: 'Nueva Categoría' },
    'slide14.point2_desc': { en: 'Defining the future of AI human representation.', de: 'Die Zukunft der menschlichen KI-Repräsentation definieren.', pt: 'Definindo o futuro da representação humana por IA.', es: 'Definiendo el futuro de la representación humana por IA.' },
    'slide14.point3_title': { en: 'High Value Services', de: 'Hochwertige Dienstleistungen', pt: 'Serviços de Alto Valor', es: 'Servicios de Alto Valor' },
    'slide14.point3_desc': { en: 'Premium solutions for high-impact results.', de: 'Premium-Lösungen für wirkungsvolle Ergebnisse.', pt: 'Soluções premium para resultados de alto impacto.', es: 'Soluciones premium para resultados de alto impacto.' },

    // Slide 15: Next Steps
    'slide15.title': { 
      en: 'Next Steps', 
      de: 'Nächste Schritte', 
      pt: 'Próximos Passos', 
      es: 'Próximos Pasos' 
    },
    'slide15.subtitle': { 
      en: 'Ready to define the future of AI representation? Let’s start the conversation.', 
      de: 'Bereit, die Zukunft der KI-Repräsentation zu definieren? Lassen Sie uns das Gespräch beginnen.', 
      pt: 'Pronto para definir o futuro da representação de IA? Vamos começar a conversa.', 
      es: '¿Listo para definir el futuro de la representación de IA? Comencemos la conversación.' 
    },
    'slide15.step1_title': { en: 'Intro Call', de: 'Einführungsgespräch', pt: 'Chamada de Introdução', es: 'Llamada de Introducción' },
    'slide15.step1_desc': { en: 'A brief discovery session to align on vision.', de: 'Eine kurze Discovery-Sitzung zur Abstimmung der Vision.', pt: 'Uma breve sessão de descoberta para alinhar a visão.', es: 'Una breve sesión de descubrimiento para alinear la visión.' },
    'slide15.step2_title': { en: 'Territory Discussion', de: 'Gebietsbesprechung', pt: 'Discussão de Território', es: 'Discusión de Territorio' },
    'slide15.step2_desc': { en: 'Defining exclusive regional opportunities.', de: 'Definition exklusiver regionaler Möglichkeiten.', pt: 'Definição de oportunidades regionais exclusivas.', es: 'Definiendo oportunidades regionales exclusivas.' },
    'slide15.step3_title': { en: 'Pilot Phase', de: 'Pilotphase', pt: 'Fase Piloto', es: 'Fase Piloto' },
    'slide15.step3_desc': { en: 'Initial deployment and market validation.', de: 'Erste Bereitstellung und Marktvalidierung.', pt: 'Implantação inicial e validação de mercado.', es: 'Despliegue inicial y validación de mercado.' },
    'slide15.cta': { en: 'Schedule Discovery', de: 'Discovery vereinbaren', pt: 'Agendar Descoberta', es: 'Programar Descubrimiento' },

    // Slide 16: Closing
    'slide16.text': { 
      en: 'The companies that win AI search will define the next decade.', 
      de: 'Die Unternehmen, die die KI-Suche gewinnen, werden das nächste Jahrzehnt definieren.', 
      pt: 'As empresas que vencerem a pesquisa de IA definirão a próxima década.', 
      es: 'Las empresas que ganen la búsqueda de IA definirán la próxima década.' 
    },
    'purpose.intro': {
      en: 'At their core, events exist primarily to facilitate human connection. Beyond the sessions and the swag, people are there for each other.',
      de: 'Im Kern existieren Veranstaltungen primär, um menschliche Verbindungen zu erleichtern. Jenseits der Sitzungen und Werbegeschenke sind die Menschen füreinander da.',
      pt: 'Em sua essência, os eventos existem principalmente para facilitar a conexão humana. Além das sessões e dos brindes, as pessoas estão lá umas pelas outras.',
      es: 'En su esencia, los eventos existen principalmente para facilitar la conexión humana. Más allá de las sesiones y los obsequios, la gente está allí el uno para el otro.'
    },
    'purpose.goals_label': { en: 'Primary Goals', de: 'Primäre Ziele', pt: 'Objetivos Principais', es: 'Objetivos Principales' },
    'purpose.goal1': { en: 'Meet potential clients', de: 'Potenzielle Kunden treffen', pt: 'Encontrar clientes potenciais', es: 'Conocer clientes potenciales' },
    'purpose.goal2': { en: 'Discover partnerships', de: 'Partnerschaften entdecken', pt: 'Descobrir parcerias', es: 'Descubrir asociaciones' },
    'purpose.goal3': { en: 'Recruit talent', de: 'Talente rekrutieren', pt: 'Recrutar talentos', es: 'Reclutar talento' },
    'purpose.goal4': { en: 'Find investors', de: 'Investoren finden', pt: 'Encontrar investidores', es: 'Encontrar inversores' },
    'purpose.goal5': { en: 'Expand networks', de: 'Netzwerke erweitern', pt: 'Expandir redes', es: 'Ampliar redes' },
    'purpose.goal6': { en: 'Share knowledge', de: 'Wissen teilen', pt: 'Compartilhar conhecimento', es: 'Compartir conocimiento' },
    'purpose.insight_label': { en: 'Key Insight', de: 'Schlüsselerkenntnis', pt: 'Insight Principal', es: 'Información Clave' },
    'purpose.insight_text': {
      en: "The most valuable outcomes from events don't come from the stage—they come from conversations between people.",
      de: "Die wertvollsten Ergebnisse von Veranstaltungen kommen nicht von der Bühne – sie kommen aus Gesprächen zwischen Menschen.",
      pt: "Os resultados mais valiosos dos eventos não vêm do palco — eles vêm de conversas entre pessoas.",
      es: "Los resultados más valiosos de los eventos no provienen del escenario, sino de las conversaciones entre las personas."
    },
    'purpose.outcome_focus': { en: 'Outcome Focus', de: 'Ergebnisfokus', pt: 'Foco no Resultado', es: 'Enfoque en Resultados' },
    'purpose.structured_networking': { en: 'Structured Networking', de: 'Strukturiertes Networking', pt: 'Networking Estruturado', es: 'Networking Estructurado' },

    // Slide 3: Gap
    'gap.problem': { en: 'The Problem', de: 'Das Problem', pt: 'O Problema', es: 'El Problema' },
    'gap.title': { en: 'The Networking Gap in Event Platforms', de: 'Die Networking-Lücke in Veranstaltungsplattformen', pt: 'A Lacuna de Networking nas Plataformas de Eventos', es: 'La Brecha de Networking en las Plataformas de Eventos' },
    'gap.focus_label': { en: 'Current Platform Focus', de: 'Aktueller Plattform-Fokus', pt: 'Foco Atual da Plataforma', es: 'Enfoque Actual de la Plataforma' },
    'gap.feature1': { en: 'Discover attendees', de: 'Teilnehmer entdecken', pt: 'Descobrir participantes', es: 'Descubrir asistentes' },
    'gap.feature2': { en: 'View profiles', de: 'Profile ansehen', pt: 'Ver perfis', es: 'Ver perfiles' },
    'gap.feature3': { en: 'Send messages', de: 'Nachrichten senden', pt: 'Enviar mensagens', es: 'Enviar mensajes' },
    'gap.missing_label': { en: 'The Missing Link', de: 'Das fehlende Glied', pt: 'O Elo Perdido', es: 'El Vínculo Faltante' },
    'gap.missing_text': {
      en: 'Event apps allow users to discover people in the participant list, but they rarely provide tools that help convert those discoveries into real meetings.',
      de: 'Veranstaltungs-Apps ermöglichen es Benutzern, Personen in der Teilnehmerliste zu entdecken, bieten aber selten Tools an, die helfen, diese Entdeckungen in echte Treffen umzuwandeln.',
      pt: 'Os aplicativos de eventos permitem que os usuários descubram pessoas na lista de participantes, mas raramente fornecem ferramentas que ajudem a converter essas descobertas em reuniões reais.',
      es: 'Las aplicaciones de eventos permiten a los usuarios descubrir personas en la lista de asistentes, pero rara vez proporcionan herramientas que ayuden a convertir esos descubrimientos en reuniones reales.'
    },
    'gap.stat_label': { en: 'The Networking Stat', de: 'Die Networking-Statistik', pt: 'A Estatística de Networking', es: 'La Estadística de Networking' },
    'gap.stat_text': {
      en: '"80% of attendees list networking as their primary goal, yet only 15% successfully schedule a 1-on-1 meeting."',
      de: '"80 % der Teilnehmer geben Networking als ihr primäres Ziel an, doch nur 15 % vereinbaren erfolgreich ein 1-zu-1-Treffen."',
      pt: '"80% dos participantes listam o networking como seu principal objetivo, mas apenas 15% conseguem agendar com sucesso uma reunião individual."',
      es: '"El 80% de los asistentes mencionan el networking como su objetivo principal, pero solo el 15% logra programar con éxito una reunión 1 a 1."'
    },
    'gap.situation_label': { en: 'Typical Situation', de: 'Typische Situation', pt: 'Situação Típica', es: 'Situación Típica' },
    'gap.connection': { en: 'Connection', de: 'Verbindung', pt: 'Conexão', es: 'Conexión' },
    'gap.actual_meeting': { en: 'Actual Meeting', de: 'Echtes Treffen', pt: 'Reunião Real', es: 'Reunión Real' },
    'gap.situation_text': {
      en: '"People connect in the app, but coordinating an actual meeting becomes difficult and often falls through."',
      de: '"Menschen verbinden sich in der App, aber die Koordination eines echten Treffens wird schwierig und scheitert oft."',
      pt: '"As pessoas se conectam no aplicativo, mas coordenar uma reunião real torna-se difícil e muitas vezes não acontece."',
      es: '"Las personas se conectam en la aplicación, pero coordinar una reunión real se vuelve difícil y a menudo fracasa."'
    },
    'gap.message_label': { en: 'Key Message', de: 'Kernbotschaft', pt: 'Mensagem-Chave', es: 'Mensaje Clave' },
    'gap.message_text': {
      en: 'Event apps help people connect, but not necessarily meet.',
      de: 'Veranstaltungs-Apps helfen Menschen, sich zu vernetzen, aber nicht unbedingt, sich zu treffen.',
      pt: 'Aplicativos de eventos ajudam as pessoas a se conectarem, mas não necessariamente a se encontrarem.',
      es: 'Las aplicaciones de eventos ayudan a las personas a conectarse, pero no necesariamente a reunirse.'
    }
  };

  translate(key: string): string {
    const translation = this.translations[key];
    if (!translation) return key;
    return translation[this._currentLang()] || translation['en'];
  }

  setLanguage(lang: Language) {
    this._currentLang.set(lang);
  }
}
