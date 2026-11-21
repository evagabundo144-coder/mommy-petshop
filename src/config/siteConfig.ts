/**
 * Arquivo central de configuração da Mommy Petshop.
 * Altere telefone, WhatsApp, Instagram, endereço, horários, serviços e textos
 * em um único lugar sem precisar editar os componentes visuais.
 */

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  category: 'estetica' | 'produtos' | 'cuidados';
  categoryLabel: string;
  shortDescription: string;
  fullDescription: string;
  highlights: string[];
  image: string;
  imageAlt: string;
  whatsappMessage: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  caption: string;
  category: 'caes' | 'gatos' | 'cuidados' | 'produtos';
  categoryLabel: string;
  image: string;
  imageAlt: string;
  aspectClass: string;
}

export interface BlogArticle {
  slug: string;
  title: string;
  categoryLabel: string;
  readTime: string;
  summary: string;
  coverImage: string;
  coverAlt: string;
  intro: string;
  sections: {
    heading: string;
    paragraphs: string[];
    checklist?: string[];
  }[];
  closingTip: string;
}

export interface TestimonialSlot {
  id: string;
  label: string;
  clientLabel: string;
  petLabel: string;
  quotePlaceholder: string;
  ratingLabel: string;
}

export const siteConfig = {
  brand: {
    name: 'Mommy Petshop',
    tagline: 'Carinho que faz parte da família.',
    city: 'Alfenas',
    state: 'MG',
    cityState: 'Alfenas - MG',
    footerPhrase: 'Feito com carinho para quem ama os animais.',
  },
  contact: {
    // Número identificado na fachada oficial da loja — editável aqui
    phoneDisplay: '(35) 9 9771-6948',
    whatsappNumber: '5535997716948',
    whatsappDefaultMessage:
      'Olá, Mommy Petshop! Visitei o site e gostaria de consultar informações sobre serviços e produtos.',
    instagramHandle: '@mommy_petshop',
    instagramUrl: 'https://www.instagram.com/mommy_petshop/',
    addressLine: 'Alfenas, Minas Gerais',
    addressNote: 'Endereço comercial completo a confirmar diretamente com a loja.',
    hoursNote: 'Horários de atendimento a confirmar pelo WhatsApp.',
    googleMapsQuery: 'Mommy Petshop, Alfenas - MG',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Mommy+Petshop%2C+Alfenas+-+MG',
    googleMapsEmbedUrl:
      'https://www.google.com/maps?q=Mommy+Petshop,+Alfenas+-+MG&output=embed',
  },
  images: {
    facade: '/assets/aistudio/image_3a1e3a16.png',
    hero: '/src/assets/images/hero_dog_cat_1795232931313.jpg',
    about: '/src/assets/images/about_pet_care_1795232931916.jpg',
    highlight: '/src/assets/images/highlight_bond_1795232931414.jpg',
  },
  hero: {
    kicker: 'MOMMY PETSHOP · ALFENAS - MG',
    subtitle:
      'Porque seu melhor amigo merece atenção especial. Conheça a Mommy Petshop e descubra um espaço dedicado ao cuidado e bem-estar do seu pet.',
    supportingText: 'Seu pet faz parte da família. E merece ser tratado assim.',
    badgeText: 'CARINHO EM PRIMEIRO LUGAR',
    primaryCta: 'CONHEÇA NOSSOS SERVIÇOS',
    secondaryCta: 'FALE PELO WHATSAPP',
  },
  about: {
    title: 'Um cuidado especial para quem faz parte da sua família.',
    description:
      'Na Mommy Petshop, acreditamos que os animais merecem atenção, carinho e cuidados especiais. Nosso propósito é proporcionar uma experiência acolhedora para os pets e seus tutores.',
    extendedParagraphs: [
      'Cada visita à Mommy Petshop é pensada para que cães e gatos se sintam seguros, respeitados e acolhidos em um ambiente limpo e tranquilo.',
      'Também valorizamos o diálogo direto com cada tutor em Alfenas - MG, orientando sobre cuidados diários, produtos adequados e opções especiais como atendimento personalizado, Pet Sitter e Táxi Dog conforme disponibilidade.',
    ],
    pillars: [
      {
        number: '01',
        title: 'Amor pelos animais',
        description:
          'Respeito ao ritmo, à personalidade e ao bem-estar de cada cão e gato em todos os momentos.',
      },
      {
        number: '02',
        title: 'Cuidado em cada detalhe',
        description:
          'Atenção à limpeza, ao manuseio gentil e à escolha criteriosa de itens para a rotina do pet.',
      },
      {
        number: '03',
        title: 'Atenção aos nossos clientes',
        description:
          'Comunicação próxima, transparente e acolhedora com os tutores antes, durante e depois do atendimento.',
      },
    ],
  },
  servicesSection: {
    title: 'Tudo o que seu pet merece.',
    subtitle:
      'Conheça algumas das categorias de cuidados e produtos que podem fazer parte da experiência Mommy Petshop.',
    disclaimer:
      'As categorias abaixo são apresentadas de forma ilustrativa. Consulte a disponibilidade atual, horários e detalhes diretamente pelo WhatsApp.',
  },
  services: [
    {
      id: 'banho',
      number: '01',
      title: 'Banho',
      category: 'estetica',
      categoryLabel: 'Estética e Higiene',
      shortDescription:
        'Categoria voltada à limpeza suave, bem-estar e conforto térmico para manter pele e pelagem saudáveis.',
      fullDescription:
        'Um momento de higiene conduzido com calma, produtos adequados ao tipo de pele e pelagem do animal e atenção total ao conforto do pet.',
      highlights: [
        'Higienização cuidadosa e gentil',
        'Atenção ao conforto durante a secagem',
        'Consulta prévia de disponibilidade e porte',
      ],
      image: '/src/assets/images/service_banho_1795232931082.jpg',
      imageAlt: 'Cachorro recebendo banho tranquilo em ambiente profissional limpo',
      whatsappMessage:
        'Olá, Mommy Petshop! Gostaria de consultar a disponibilidade para banho.',
    },
    {
      id: 'tosa',
      number: '02',
      title: 'Tosa',
      category: 'estetica',
      categoryLabel: 'Estética Animal',
      shortDescription:
        'Cuidados estéticos e higiênicos planejados para valorizar a saúde, a leveza e a praticidade da pelagem.',
      fullDescription:
        'Categoria dedicada à manutenção do corte, desembolo e acabamento visual, respeitando as características de cada raça e preferência do tutor.',
      highlights: [
        'Acabamento higiênico e estético',
        'Respeito à sensibilidade de cada pelagem',
        'Orientações para manutenção em casa',
      ],
      image: '/src/assets/images/service_tosa_1795232932024.jpg',
      imageAlt: 'Cachorro de pelagem branca recém-escovada e aparada em mesa de estética',
      whatsappMessage:
        'Olá, Mommy Petshop! Gostaria de consultar a disponibilidade para tosa.',
    },
    {
      id: 'produtos-pet',
      number: '03',
      title: 'Produtos Pet',
      category: 'produtos',
      categoryLabel: 'Nutrição e Loja',
      shortDescription:
        'Seleção comercial pensada para apoiar a alimentação diária, petiscos e itens essenciais do dia a dia.',
      fullDescription:
        'Categoria que reúne opções voltadas à rotina alimentar e de bem-estar de cães e gatos, com atendimento atencioso para auxiliar na escolha.',
      highlights: [
        'Opções para alimentação e agrados',
        'Atendimento orientativo na loja',
        'Consulte itens disponíveis em estoque',
      ],
      image: '/src/assets/images/service_produtos_1795232931592.jpg',
      imageAlt: 'Composição organizada de produtos para animais, comedouros e petiscos',
      whatsappMessage:
        'Olá, Mommy Petshop! Gostaria de consultar a disponibilidade de produtos pet.',
    },
    {
      id: 'acessorios',
      number: '04',
      title: 'Acessórios',
      category: 'produtos',
      categoryLabel: 'Conforto e Passeio',
      shortDescription:
        'Coleiras, guias, brinquedos e caminhas escolhidos para unir segurança, durabilidade e conforto.',
      fullDescription:
        'Categoria pensada para tornar os passeios mais seguros e os momentos de descanso e brincadeira em casa ainda mais agradáveis.',
      highlights: [
        'Coleiras, peitorais e guias resistentes',
        'Brinquedos para estímulo e diversão',
        'Itens de descanso e conforto diário',
      ],
      image: '/src/assets/images/service_acessorios_1795232931928.jpg',
      imageAlt: 'Coleiras roxas e amarelas, guias, cama confortável e brinquedos para pets',
      whatsappMessage:
        'Olá, Mommy Petshop! Gostaria de consultar a disponibilidade de acessórios para meu pet.',
    },
    {
      id: 'higiene-cuidados',
      number: '05',
      title: 'Higiene e Cuidados',
      category: 'cuidados',
      categoryLabel: 'Rotina e Limpeza',
      shortDescription:
        'Itens para escovação, limpeza diária e manutenção do bem-estar entre os atendimentos.',
      fullDescription:
        'Categoria voltada a soluções práticas que ajudam o tutor a cuidar da pelagem, das patinhas e da limpeza do ambiente do pet.',
      highlights: [
        'Escovas e itens para cuidado da pelagem',
        'Produtos para higiene prática no dia a dia',
        'Orientação conforme necessidade do animal',
      ],
      image: '/src/assets/images/service_higiene_1795232929867.jpg',
      imageAlt: 'Frascos de higiene, toalhas macias e escovas de madeira para cuidados animais',
      whatsappMessage:
        'Olá, Mommy Petshop! Gostaria de consultar produtos de higiene e cuidados.',
    },
    {
      id: 'cuidados-especiais',
      number: '06',
      title: 'Cuidados Especiais',
      category: 'cuidados',
      categoryLabel: 'Atenção Dedicada',
      shortDescription:
        'Atenção individualizada para rotinas específicas, incluindo informações sobre Pet Sitter e Táxi Dog.',
      fullDescription:
        'Categoria dedicada a soluções personalizadas de acompanhamento, cuidado próximo e apoio no deslocamento seguro do pet, conforme agenda.',
      highlights: [
        'Consulta sobre serviço de Pet Sitter',
        'Consulta sobre disponibilidade de Táxi Dog',
        'Atendimento planejado conforme o perfil do pet',
      ],
      image: '/src/assets/images/service_especiais_1795232932404.jpg',
      imageAlt: 'Cuidadora ajustando peitoral em cachorro alegre com atenção e carinho',
      whatsappMessage:
        'Olá, Mommy Petshop! Gostaria de consultar disponibilidade para cuidados especiais (Pet Sitter / Táxi Dog).',
    },
  ] as ServiceItem[],
  highlight: {
    title: 'Pequenos momentos. Um amor gigante.',
    description:
      'Quem ama seu pet sabe que cada cuidado faz diferença. A Mommy Petshop convida você a conhecer uma forma especial de cuidar de quem está sempre ao seu lado.',
    ctaLabel: 'CONVERSE COM A MOMMY',
  },
  gallery: [
    {
      id: 'gal-1',
      title: 'Alegria em companhia',
      caption: 'Cães saudáveis e cheios de energia em ambiente acolhedor e luminoso.',
      category: 'caes',
      categoryLabel: 'Cachorros',
      image: '/src/assets/images/gallery_dogs_warm_1795232932161.jpg',
      imageAlt: 'Dois cachorros felizes brincando em ambiente limpo e iluminado',
      aspectClass: 'md:col-span-2 aspect-[4/3]',
    },
    {
      id: 'gal-2',
      title: 'Tranquilidade felina',
      caption: 'Cuidados suaves e ambiente sereno respeitando o jeito único dos gatos.',
      category: 'gatos',
      categoryLabel: 'Gatos',
      image: '/src/assets/images/gallery_cats_bright_1795232930516.jpg',
      imageAlt: 'Gato malhado prateado descansando tranquilo sobre almofada clara',
      aspectClass: 'aspect-[3/4]',
    },
    {
      id: 'gal-3',
      title: 'Escovação gentil',
      caption: 'Atenção delicada durante os cuidados com a pelagem felina.',
      category: 'cuidados',
      categoryLabel: 'Cuidados com animais',
      image: '/src/assets/images/gallery_cat_care_1795232957362.jpg',
      imageAlt: 'Gato relaxado recebendo escovação suave com escova de cerdas macias',
      aspectClass: 'aspect-[4/3]',
    },
    {
      id: 'gal-4',
      title: 'Momentos de afeto',
      caption: 'Vínculo verdadeiro entre tutor e pet fortalecido pelo cuidado diário.',
      category: 'caes',
      categoryLabel: 'Momentos de carinho',
      image: '/src/assets/images/gallery_affection_moment_1795233006172.jpg',
      imageAlt: 'Tutora abraçando cachorro caramelo próximo à janela iluminada',
      aspectClass: 'aspect-[3/4]',
    },
    {
      id: 'gal-5',
      title: 'Seleção de produtos',
      caption: 'Organização, higiene e itens selecionados para o bem-estar diário.',
      category: 'produtos',
      categoryLabel: 'Produtos pet',
      image: '/src/assets/images/gallery_pet_shop_shelf_1795233007693.jpg',
      imageAlt: 'Prateleira organizada com comedouros e petiscos naturais para pets',
      aspectClass: 'aspect-square',
    },
    {
      id: 'gal-6',
      title: 'Brincadeiras e acessórios',
      caption: 'Itens pensados para estimular o bem-estar e a alegria dentro de casa.',
      category: 'produtos',
      categoryLabel: 'Acessórios',
      image: '/src/assets/images/gallery_accessories_toys_1795232958593.jpg',
      imageAlt: 'Cachorro alegre ao lado de brinquedo de corda roxo e amarelo',
      aspectClass: 'aspect-square',
    },
  ] as GalleryItem[],
  differentials: [
    {
      number: '01',
      title: 'Atenção aos pets',
      description:
        'Cada animal tem seu próprio temperamento. Respeitar esse tempo torna o cuidado mais tranquilo, seguro e positivo.',
      icon: 'heart' as const,
    },
    {
      number: '02',
      title: 'Experiência acolhedora',
      description:
        'Um espaço pensado para receber tutores e animais com clareza, cordialidade e um ambiente organizado.',
      icon: 'sparkles' as const,
    },
    {
      number: '03',
      title: 'Cuidado especial',
      description:
        'A higiene e o conforto caminham juntos para preservar a saúde da pele, da pelagem e a disposição diária do pet.',
      icon: 'shield' as const,
    },
    {
      number: '04',
      title: 'Conexão com você',
      description:
        'Atendimento próximo e transparente para tirar dúvidas, confirmar disponibilidade e orientar sobre o que seu pet precisa.',
      icon: 'message' as const,
    },
  ],
  testimonials: {
    title: 'Quem ama, recomenda.',
    subtitle:
      'Espaço reservado para depoimentos reais de tutores atendidos pela Mommy Petshop em Alfenas - MG.',
    demoNotice:
      'Os cartões abaixo são modelos demonstrativos estruturados para exibição de depoimentos reais após autorização dos clientes.',
    slots: [
      {
        id: 'slot-1',
        label: 'Exemplo demonstrativo 01',
        clientLabel: 'Nome do tutor (a inserir)',
        petLabel: 'Nome e raça do pet (opcional)',
        quotePlaceholder:
          'Espaço reservado para o relato verdadeiro de um tutor sobre o atendimento, acolhimento e cuidado recebido na Mommy Petshop.',
        ratingLabel: 'Avaliação real a confirmar',
      },
      {
        id: 'slot-2',
        label: 'Exemplo demonstrativo 02',
        clientLabel: 'Nome do tutor (a inserir)',
        petLabel: 'Nome e raça do pet (opcional)',
        quotePlaceholder:
          'Espaço reservado para compartilhar a experiência real com produtos, higiene ou acompanhamento personalizado da loja.',
        ratingLabel: 'Avaliação real a confirmar',
      },
      {
        id: 'slot-3',
        label: 'Exemplo demonstrativo 03',
        clientLabel: 'Nome do tutor (a inserir)',
        petLabel: 'Nome e raça do pet (opcional)',
        quotePlaceholder:
          'Espaço reservado para destacar a confiança, tranquilidade e carinho percebidos pelo tutor durante a visita em Alfenas - MG.',
        ratingLabel: 'Avaliação real a confirmar',
      },
    ] as TestimonialSlot[],
  },
  blogSection: {
    title: 'Dicas para cuidar ainda melhor do seu pet.',
    subtitle:
      'Conteúdos informativos preparados para apoiar a rotina de carinho, higiene e bem-estar em casa.',
  },
  articles: [
    {
      slug: 'como-manter-a-higiene-do-seu-cachorro',
      title: 'Como manter a higiene do seu cachorro',
      categoryLabel: 'Higiene e Rotina',
      readTime: '4 min de leitura',
      summary:
        'Pequenos hábitos semanais fazem grande diferença para manter a pele saudável, o cheiro agradável e o conforto do seu cão.',
      coverImage: '/src/assets/images/blog_hygiene_dog_1795232932057.jpg',
      coverAlt: 'Cachorro limpo enrolado em toalha branca macia após o banho',
      intro:
        'Manter a higiene do cachorro vai muito além da aparência: é uma prática diretamente ligada ao conforto da pele, à prevenção de odores e à observação constante de sinais importantes de saúde.',
      sections: [
        {
          heading: '1. Observe a frequência ideal de banhos',
          paragraphs: [
            'A periodicidade varia de acordo com o tipo de pelagem, o nível de atividade ao ar livre e a sensibilidade da pele de cada cachorro. Banhos em excesso podem remover a proteção natural da pele, enquanto intervalos muito longos acumulam sujeira e nós.',
            'Ao notar odor acentuado ou pelos opacos, converse com profissionais de confiança para ajustar o intervalo adequado.',
          ],
        },
        {
          heading: '2. Cuidados após o passeio',
          paragraphs: [
            'As patinhas entram em contato direto com calçadas, poeira e umidade. Secar bem entre os dedos e limpar suavemente os coxins com produto próprio para pets ajuda a evitar irritações e mantém a casa limpa.',
          ],
          checklist: [
            'Limpe patinhas e focinho após passeios externos.',
            'Seque bem as dobras e a região das orelhas após contato com água.',
            'Mantenha comedouros e bebedouros higienizados diariamente.',
          ],
        },
        {
          heading: '3. Utilize apenas produtos desenvolvidos para pets',
          paragraphs: [
            'O pH da pele dos cães é diferente do pH humano. Shampoos, condicionadores e lenços formulados especialmente para uso veterinário protegem a barreira cutânea e evitam ressecamento.',
          ],
        },
      ],
      closingTip:
        'Quer saber quais itens de higiene combinam com a rotina do seu cachorro? Fale com a Mommy Petshop pelo WhatsApp para consultar opções.',
    },
    {
      slug: 'cuidados-essenciais-com-a-pelagem',
      title: 'Cuidados essenciais com a pelagem',
      categoryLabel: 'Pelagem e Conforto',
      readTime: '5 min de leitura',
      summary:
        'Entenda como a escovação correta e a escolha da escova certa evitam nós, reduzem pelos soltos e deixam o momento mais agradável.',
      coverImage: '/src/assets/images/blog_coat_care_1795233006479.jpg',
      coverAlt: 'Escovação delicada da pelagem de cachorro dourado com rasqueadeira',
      intro:
        'Uma pelagem macia, brilhante e sem nós é reflexo de atenção constante. Além de deixar o animal mais confortável, a escovação regular estimula a circulação superficial e fortalece o vínculo com o tutor.',
      sections: [
        {
          heading: '1. Escolha a escova adequada ao tipo de pelo',
          paragraphs: [
            'Pelos curtos se beneficiam de escovas de cerdas macias ou luvas de borracha, que removem pelos mortos sem agredir a pele. Já pelos médios, longos ou encaracolados pedem rasqueadeiras suaves e pentes de dentes largos para evitar o acúmulo de subpelo.',
          ],
        },
        {
          heading: '2. Transforme a escovação em um hábito tranquilo',
          paragraphs: [
            'Comece com sessões curtas, em um local calmo, sempre no sentido do crescimento do pelo e sem puxar nós com força. Recompensar a calma do animal com carinho ou um agrado torna o momento positivo.',
          ],
          checklist: [
            'Escove antes do banho para evitar que a água aperte nós existentes.',
            'Dê atenção especial atrás das orelhas, axilas e pescoço.',
            'Observe a pele durante a escovação para identificar vermelhidões precocemente.',
          ],
        },
        {
          heading: '3. Alimentação e hidratação também aparecem no pelo',
          paragraphs: [
            'Água fresca sempre disponível e uma nutrição equilibrada contribuem diretamente para o brilho e a resistência dos fios.',
          ],
        },
      ],
      closingTip:
        'Precisa de orientação para escolher escovas ou consultar cuidados de estética animal em Alfenas - MG? Nossa equipe está pronta para conversar.',
    },
    {
      slug: 'como-escolher-acessorios-adequados-para-seu-pet',
      title: 'Como escolher acessórios adequados para seu pet',
      categoryLabel: 'Acessórios e Segurança',
      readTime: '4 min de leitura',
      summary:
        'Saiba o que observar ao selecionar coleiras, peitorais, guias e caminhas para garantir conforto, ergonomia e tranquilidade nos passeios.',
      coverImage: '/src/assets/images/blog_pet_accessories_1795232958324.jpg',
      coverAlt: 'Peitoral ergonômico roxo, coleira ajustável, guia e comedouro sobre madeira clara',
      intro:
        'Os acessórios fazem parte de todos os momentos do pet — dos passeios diários ao descanso dentro de casa. Escolher o tamanho e o material corretos garante segurança sem abrir mão do bem-estar.',
      sections: [
        {
          heading: '1. Ajuste correto de coleiras e peitorais',
          paragraphs: [
            'Uma boa regra prática é verificar se dois dedos cabem confortavelmente entre o acessório e o corpo do animal. Se ficar frouxo demais, o pet pode escapar; se ficar apertado, causa atrito e desconforto respiratório.',
          ],
        },
        {
          heading: '2. Observe o porte e o comportamento nos passeios',
          paragraphs: [
            'Cães que puxam durante a caminhada costumam se adaptar melhor a peitorais bem acolchoados que distribuem a pressão pelo tórax. Já as guias devem oferecer firmeza na empunhadura e mosquetão resistente.',
          ],
          checklist: [
            'Verifique costuras e fechos regularmente para manter a segurança.',
            'Prefira materiais respiráveis e fáceis de higienizar.',
            'Para gatos, utilize modelos específicos desenvolvidos para anatomia felina.',
          ],
        },
        {
          heading: '3. Caminhas e brinquedos adequados ao tamanho',
          paragraphs: [
            'Na hora do descanso, a caminha precisa permitir que o pet se estique confortavelmente. Já os brinquedos devem ter tamanho compatível com a mordida, evitando peças pequenas que possam ser engolidas.',
          ],
        },
      ],
      closingTip:
        'Quer consultar modelos e tamanhos disponíveis na Mommy Petshop? Envie uma mensagem pelo WhatsApp e tire suas dúvidas.',
    },
  ] as BlogArticle[],
};

export function buildWhatsAppUrl(customMessage?: string): string {
  const message = customMessage?.trim() || siteConfig.contact.whatsappDefaultMessage;
  return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
