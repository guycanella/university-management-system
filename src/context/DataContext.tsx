import { Elderly } from "@mui/icons-material"

const data = {
  departments: [
    {
      departmentId: 'DUSP0034',
      departmentLabel: 'ICMC',
      departmentName: 'Instituto de Ciências Matemáticas e Computação',
      courses: [
        {
          courseId: 'ICMC0012',
          courseName: 'Bacharelado em Ciências da Computação',
          duration: 4,
          description: [
            'O Bacharelado em Ciências de Computação faz parte da área de conhecimento de ciências exatas. O curso visa a formação conceitual e teórica sólidas nas diferentes áreas da Ciências de Computação, aliada à formação prática, através do desenvolvimento de projetos e da utilização de diferentes tipos de ferramentas de software. A capacidade de adaptação à evolução da computação, tanto em termos teóricos/metodológicos como em termos tecnológicos, é um aspecto essencial que o curso considera no oferecimento das disciplinas e na preparação do profissional dessa área.',
            'Basicamente, matemática, linguagens de programação e sistemas de hardware e software são as áreas que irão acompanhá-lo durante os cinco anos de graduação. Nesse período, você verá também disciplinas como banco de dados, redes, robótica, computação gráfica, multimídia e engenharia de software. No último ano do curso, você deve realizar dois trabalhos de conclusão de curso, que podem ser em empresa (caracterizando estágio supervisionado) ou em universidade ou centro de pesquisa (caracterizando projeto de graduação). Você também pode realizar ambas as modalidades no exterior, em período de intercâmbio. Você poderá ainda empreender, realizando estágio em empresa própria.',
            'O curso prepara você com amplos conhecimentos e base necessários para se engajar e orientar-se com facilidade nos diferentes caminhos de aplicação de Computação, dentre os quais se destacam: Empresas públicas e privadas da área de computação, atendendo aos diversos tipos de atividades reconhecidamente da área, tais como: analista de software e de sistemas, engenheiro de software, desenvolvedor de sistemas, consultorias em banco de dados, em implantação de sistemas, projetista de software, programador, etc.;Empreendedorismo na área de computação, comandando iniciativas de negócios em computação, criando empresas ou mesmo projetando inovações no mercado; Carreira acadêmica em computação, atuando como pesquisador ou docente universitário.'
          ],
          disciplines: [
            {
              period: 1,
              disciplineIds: [
                'SCC0200',
                'SCC0221',
                'SCC0222',
                'SMA0300',
                'SMA0353',
                'SSC0104',
                'SSC0109',
                'SSC0117',
                'SSC0180'
              ]
            },
            {
              period: 2,
              disciplineIds: [
                'PHH0105',
                'SCC0201',
                'SCC0202',
                'SMA0180',
                'SMA0354',
                'SSC0108',
                'SSC0118'
              ]
            },
            {
              period: 3,
              disciplineIds: [
                'PHH0109',
                'SCC0215',
                'SCC0216',
                'SMA0355',
                'SSC0103',
                'SSC0902',
                'SSC0960'
              ]
            },
            {
              period: 4,
              disciplineIds: [
                'SCC0218',
                'SMA0356',
                'SME0123',
                'SME0142',
                'SSC0124',
                'SSC0140'
              ]
            },
            {
              period: 5,
              disciplineIds: [
                'SCC0219',
                'SCC0240',
                'SME0104',
                'SME0121',
                'SSC0130',
                'SSC0142'
              ]
            },
            {
              period: 6,
              disciplineIds: [
                'SCC0205',
                'SCC0207',
                'SCC0230',
                'SME0110',
                'SSC0903'
              ]
            },
            {
              period: 7,
              disciplineIds: [
                'SCC0217',
                'SCC0250',
                'SSC0120',
                'SSC0900',
                'SSC0904'
              ]
            },
            {
              period: 8,
              disciplineIds: ['SCC0291']
            }
          ]
        },
        {
          courseId: 'ICMC0013',
          courseName: 'Bacharelado em Analista de Dados',
          duration: 4
        },
        {
          courseId: 'ICMC0014',
          courseName: 'Bacharelado em Engenharia de Computação',
          duration: 5
        }
      ]
    }
  ],
  disciplines: [
    {
      disciplineId: 'SCC0200',
      disciplineName: 'Informação Profissional e Tutoria Acadêmica em Ciências da Computação',
      credits: 2,
      creditsInHours: 30,
      goals: 'Ambientar o estudante com o curso de Bacharelado em Ciências da Computação, proporcionando uma visão global dos conteúdos do currículo e das várias áreas da Computação. Familiarizar o estudante com a rotina acadêmica, introduzindo e discutindo as diversas questões relacionadas, visando acompanhar o rendimento dos alunos, orientá-los sobre o andamento do curso e prover orientação sobre atividades complementares e sobre a carreira em computação, aumentando o aproveitamento dos alunos e diminuindo evasão e retenção no curso.',
      description: 'Disciplina de caráter informativo, oferecendo uma visão geral da Computação, abordando-se, na forma de palestras e seminários, uma introdução a suas várias áreas de atuação (como banco de dados, engenharia de software, sistemas operacionais, inteligência artificial, computação gráfica, redes de computadores e web, dentre outras), seu desenvolvimento, aplicações e consequências tecnológicas, sociais e econômicas, assim como seu impacto no mercado de trabalho e na academia. Realização de atividades de tutoria acadêmica, com discussão sobre demandas da nova rotina acadêmica, planejamento de estudos, rendimento acadêmico, atividades extracurriculares e oportunidades de formação oferecidas pela instituição, orientações sobre a carreira em Computação, e comportamento ético e cidadão no ambiente universitário, dentre outros assuntos de interesse dos alunos.',
      bibliography: 'Brookshear, J.G. (2013). Ciência da Computação - Uma Visão Abrangente. Bookman.11ª edição. '
    },
    {
      disciplineId: 'SCC0221',
      disciplineName: 'Introdução à Ciência de Computação I',
      credits: 4,
      creditsInHours: 90,
      goals: 'Apresentar os conceitos básicos para o desenvolvimento de programas, utilizando uma linguagem de programação como apoio.',
      description: 'Conceitos básicos sobre computadores: hardware, software, sistema operacional, compiladores, representação interna de dados e linguagem de programação. Resolução de problemas e desenvolvimento de algoritmos: análise e solução de problemas, representação e documentação. Estruturas de programas: decisão e repetição. Tipos de dados simples. Modularização de programas: procedimentos, funções e passagem de parâmetros. Tipos de dados compostos: vetores, matrizes, cadeias de caracteres, registros, conjuntos e estruturas dinâmicas (ponteiros). Arquivos. Depuração de programas. Programação em linguagem estruturada.',
      bibliography: 'ASCENCIO, A. F. G.; CAMPOS, E. A. V. – Fundamentos da Programação de Computadores – Algoritmos, Pascal e C/C++, Prentice Hall, 2003. (2002, 2005, 2008).',
    },
    {
      disciplineId: 'SCC0222',
      disciplineName: 'Laboratório de Introdução à Ciência de Computação I',
      credits: 2,
      creditsInHours: 90,
      goals: 'Implementar em laboratório as técnicas de programação apresentadas em Introdução à Ciência da Computação I, utilizando uma linguagem de programação estruturada.',
      description: 'Resolução de problemas e desenvolvimento de programas: análise e solução de problemas, representação e documentação. Estruturas de programas: decisão e repetição. Tipos de dados simples. Modularização de programas: procedimentos, funções e passagem de parâmetros. Tipos de dados compostos: vetores, matrizes, cadeias de caracteres, registros, conjuntos e estruturas dinâmicas (ponteiros). Arquivos. Depuração de programas. Programação em linguagem estruturada.',
      bibliography: 'ASCENCIO, A. F. G.; CAMPOS, E. A. V. – Fundamentos da Programação de Computadores – Algoritmos, Pascal e C/C++, Prentice Hall, 2003.'
    },
    {
      disciplineId: 'SMA0300',
      disciplineName: 'Geometria Analítica',
      credits: 4,
      creditsInHours: 60,
      goals: 'Visa familiarizar os alunos com a geometria analítica no plano e no espaço, com ênfase nos seus aspectos geométricos e suas traduções em coordenadas cartesianas',
      description: 'Coordenadas cartesianas.  Vetores. Dependência linear. Bases. Produto escalar. Produto vetorial. Translação e rotação. Retas e planos. Distância e ângulo. Cônicas. Equações reduzidas das superfícies quádricas. Coordenadas polares, cilíndricas e esféricas.',
      bibliography: 'BOULOS, P., CAMARGO, I., Geometria analítica - um tratamento vetorial, Rio de Janeiro: McGraw-Hill,  1987.'
    },
    {
      disciplineId: 'SMA0353',
      disciplineName: 'Cálculo I',
      credits: 4,
      creditsInHours: 60,
      goals: 'Fazer com que os alunos familiarizem-se com os conceitos de limite, continuidade, diferenciabilidade e primitivas de funções de uma variável.',
      description: 'O conjunto dos números reais. Funções Reais de uma variável. Composição de funções. Limites. Continuidade. Diferenciabilidade. Derivação de uma composição.  Taxas relacionadas. Máximos e mínimos. Gráficos. Diferencial. Fórmula de Taylor. Primitivas.',
      bibliography: 'GUIDORIZZI, H.L.  Um Curso de Cálculo, 5ª Ed., V. 1,  Rio de Janeiro: Livros Técnicos e Científicos Editora, (2001).'
    },
    {
      disciplineId: 'SSC0104',
      disciplineName: 'Evolução Histórica da Computação e Aplicações',
      credits: 2,
      creditsInHours: 60,
      goals: 'Apresentar ao aluno um panorama da evolução da computação, identificando marcos históricos, personagens relevantes e suas contribuições. Motivar o aluno ingressante por meio da apresentação de desenvolvimentos e aplicações importantes da computação em diferentes áreas, relacionando-os aos fundamentos matemáticos a serem estudados ao longo do curso.',
      description: 'Panorama histórico da Informática e Computação. O papel dos instrumentos de cálculo e sua evolução. Sistemas de hardware e software, personagens, organizações e empresas que contribuíram significativamente para o desenvolvimento da Computação como ciência e tecnologia. Sistemas de hardware: marcos históricos e evolução. Desenvolvimento de sistemas de software em diferentes disciplinas da Informática: marcos históricos e evolução. Exemplos de aplicação.',
      bibliography: 'FONSECA FILHO, C. História da Computação, Teoria e Tecnologia. Editora LTR, 2000.'
    },
    {
      disciplineId: 'SSC0109',
      disciplineName: 'Prática em Lógica Digital',
      credits: 2,
      creditsInHours: 60,
      goals: 'Introduzir o aluno na prática de conceitos básicos de eletrônica e lógica digital, e técnicas de projeto de subsistemas digitais com ênfase em circuitos combinacionais.',
      description: 'Prática em circuitos combinacionais, funções lógicas, circuitos lógicos, simplificação algébrica, formas normais disjuntivas e conjuntivas, mapas de Karnaugh, decodificadores, representação numérica, circuitos somadores, subtratores e multiplicadores, multiplex e demultiplex.',
      bibliography: 'BROWN, S.; VRANESIC, Z. Fundamentals of Digital Logic with VHDL Design, McGraw Hill, 2005.'
    },
    {
      disciplineId: 'SSC0117',
      disciplineName: 'Introdução à Lógica Digital',
      credits: 2,
      creditsInHours: 60,
      goals: 'Introduzir ao aluno conceitos básicos de eletrônica elógica Digital, técnicas de projeto de subsistemas digitais com ênfase em circuitos combinacionais.',
      description: 'Circuitos combinacionais, funções lógicas, circuitoslógicos, simplificação algébrica, formas normais disjuntivas e conjuntivas, mapas de Karnaugh, decodificadores, representação numérica, circuitos somadores, subtratores e multiplicadores, multiplex e demultiplex.',
      bibliography: 'BROWN, S.; VRANESIC, Z. Fundamentals of Digital Logic with VHDL Design, McGraw Hill, 2005.'
    },
    {
      disciplineId: 'SSC0180',
      disciplineName: 'Eletrônica para Computação',
      credits: 2,
      creditsInHours: 90,
      goals: 'Familiarizar os alunos com o funcionamento eletrônico das portas e lógicas com conceitos relacionados a dispositivos eletrônicos.',
      description: 'Conceitos básicos de circuitos eletrônicos, com ênfase na utilização de componentes eletrônicos básicos, tais como resistores, capacitores, diodos e transistores, no projeto de circuitos e portas lógicas digitais. Uso de simuladores de circuitos elétricos para visualização de formas de onda. Estudo do efeito de fontes de tensão de corrente contínua em circuitos elétricos. Aplicações de transistores como chaves binárias no projeto de funções lógicas, como portas NOT, AND, OR e XOR. Efeitos transitórios na propagação de sinais elétricos em circuitos de lógica digital, como tempos de subida e descida, efeitos fan-out e suas formas de ondas. Circuitos NMOS e CMOS: caracterização e efeitos de variação de voltagem e frequência.',
      bibliography: 'ANNIBAL, HETTEM JR, Fundamentos de Informática – Eletrônica para Computação.'
    },
    {
      disciplineId: 'PHH0105',
      disciplineName: 'Física Básica I',
      credits: 4,
      creditsInHours: 60,
      goals: 'Ensinar aos estudantes os conceitos básicos da Mecânica Newtoniana e os métodos da Física como ciência. Capacitá-los a formular e resolver problemas referentes ao movimento de corpos e sistemas de corpos sob ação de forças.',
      description: '1. Medidas e unidades; 2. Movimento em uma, duas e três dimensões; 3. Leis de Newton e suas aplicações; 4. Trabalho e energia; 5. Conservação de Energia; 6. Sistemas de Partículas e Conservação de Momento; 7. Rotação e conservação do momento angular; 8. Fluidos; 9. Oscilações e ondas: Oscilações, movimento ondulatório.'
    },
    {
      disciplineId: 'SCC0201',
      disciplineName: 'Introdução à Ciência de Computação II',
      credits: 4,
      creditsInHours: 120,
      goals: 'Apresentação de conceitos avançados que levem o aluno a uma maturidade em programação estruturada, com conhecimento de uma linguagem de programação com recursos avançados. Aprendizado de técnicas para construção de algoritmos e para análise da complexidade de algoritmos. Aprendizado de algoritmos clássicos de ordenação e busca em memória interna. Prática de Programação.',
      description: 'Análise de algoritmos: conceitos básicos, critérios de complexidade de tempo e espaço, notação assintótica, análise de pior caso, melhor caso e caso médio, técnicas de contagem de operações e análise de recorrências, prática e discussão com problemas computacionais relevantes. Algoritmos de ordenação interna simples e avançados: conceitos básicos, métodos de ordenação bubblesort, quicksort, inserção, shellsort, seleção, heapsort, mergesort, contagem de menores, contagem de tipos e radixsort, análise dos algoritmos de ordenação, prática e discussão com problemas computacionais relevantes. Algoritmos de busca interna: conceitos básicos, métodos de busca binária e por interpolação, análise dos algoritmos de busca anteriores e considerações sobre busca em árvores, prática e discussão com problemas computacionais relevantes. Hashing interno: conceitos básicos, tipos de hashing, funções hash, tratamento de colisões, análise dos algoritmos de busca, inserção e remoção com base em hashing. ',
      bibliography: 'CORMEN, T.H. et al.: Algoritmos: Teoria e Prática. Elsevier e Campus (tradução). ISBN 853520926-3.'
    },
    {
      disciplineId: 'SCC0202',
      disciplineName: 'Algoritmos e Estruturas de Dados I',
      credits: 4,
      creditsInHours: 120,
      goals: 'Familiarizar os estudantes com as várias estruturas da informação, buscando habilitá-los a contar com esses recursos no desenvolvimento de outras atividades de ciências de computação.',
      description: 'Tipos abstratos de dados. Listas lineares: seqüenciais, simplesmente e duplamente encadeadas, estáticas e dinâmicas, circulares, com nó-cabeça. Operações básicas sobre listas lineares e análise dos algoritmos. Pilhas, filas, filas de prioridade, operações básicas sobre pilhas e filas e análise dos algoritmos. Aplicações de listas lineares, pilhas e filas em problemas computacionais relevantes. Matrizes esparsas. Listas generalizadas e aplicações. Listas não lineares: árvores, árvores binárias, operações básicas sobre árvores e análise dos algoritmos. Árvores binárias de busca, árvores binárias de busca balanceadas, árvores AVL, operações básicas e análise dos algoritmos. Considerações sobre heaps aplicados em filas de prioridades. Aplicações de listas não lineares em problemas computacionais relevantes e análise dos algoritmos.',
      bibliography: 'CORMEN, T.H.; LEISERSON, C.E.; RIVEST, R.L.; STEIN, C. Algoritmos: Teoria e Prática. Editora Campus.2002.'
    },
    {
      disciplineId: 'SMA0180',
      disciplineName: 'Matemática Discreta I',
      credits: 4,
      creditsInHours: 60,
      goals: 'Dar aos alunos os conhecimentos básicos de Contagem e Combinatória, Relações, Teoria dos Números no contexto de Criptografia, Inferência e Prova, e Indução Matemática, habilitando-os a resolverem problemas da área de Ciências de Computação.',
      description: 'Contagem e combinatória: princípios de adição, princípios do produto, listas, fatorial, arranjo, permutações, combinações, com e sem repetição de elementos, subconjuntos e triângulo de Pascal; Relações: conceito, funções como relações, propriedades, equivalências, ordens parcial e total: e o problema da Arrumação da Estante; Teoria dos Números e Criptografia: chave secreta, sistemas de chave pública, criptografia usando aritmética de módulo n, máximo divisor comum,  Teorema da Divisão de Euclides, algoritmo de Euclides, exponencial módulo n, e criptosistema RSA; Inferência e prova: regras de inferência, prova direta, prova por indução, prova por contradição, prova por construção e prova por absurdo;  Indução Matemática: princípios, indução forte, visão recursiva, indução estrutural, recorrências e o Teorema Mestre.',
      bibliography: 'STEIN, C; DRYSDALE, R; BOGART K. Matemática Discreta - para Ciência da Computação. 1ª edição, Pearson, 2015.'
    },
    {
      disciplineId: 'SMA0354',
      disciplineName: 'Cálculo II',
      credits: 4,
      creditsInHours: 60,
      goals: 'Familiarizar os alunos com os resultados fundamentais relativos a: integração definida, técnicas de integração, diferenciabilidade de funções de várias variáveis e extremos de funções de várias variáveis.',
      description: 'A integral definida. Técnicas de integração. Aplicações da integral. Integrais impróprias. Curvas. Funções de várias variáveis. Limites. Derivadas parciais.  A regra da cadeia e aplicações. Gradiente e derivada direcional. Plano tangente e reta normal. Polinômio de Taylor. Máximos e mínimos para funções de várias variáveis. Multiplicadores de Lagrange.',
      bibliography: 'GUIDORIZZI, H.L.  Um Curso de Cálculo, 5ª Ed., V. 1,  Rio de Janeiro: Livros Técnicos e Científicos Editora, (2001).'
    },
    {
      disciplineId: 'SSC0108',
      disciplineName: 'Prática em Sistemas Digitais',
      credits: 3,
      creditsInHours: 60,
      goals: 'Estender o conhecimento do aluno com práticas em técnicas digitais, com ênfase no projeto de circuitos sequenciais.',
      description: 'Prática em circuitos sequenciais, flip-flops, registradores, conversores série/paralelo e paralelo/série, contadores síncronos e assíncronos, memória. Máquinas de estado finito-FSM. Técnicas de otimização de máquinas de estado finito. Projeto de circuitos lógicos sequenciais para a execução de instruções binárias.',
      bibliography: 'BROWN, S.; VRANESIC, Z. Fundamentals of Digital Logic with VHDL Design, McGraw Hill, 2005.'
    },
    {
      disciplineId: 'SSC0118',
      disciplineName: 'Sistemas Digitais',
      credits: 3,
      creditsInHours: 60,
      goals: 'Estender o conhecimento do aluno em técnicas digitais, com ênfase no projeto de circuitos sequenciais.',
      description: 'Circuitos seqüenciais, flip-flops, registradores, conversores série/pararelo e paralelo/série, contadores síncronos e assíncronos, memória. Máquinas de estado finito-FSM. Técnicas de otimização de máquinas de estado finito. Projeto de circuitos lógicos seqüenciais para a execução de instruções binárias.',
      bibliography: 'BROWN, S.; VRANESIC, Z. Fundamentals of Digital Logic with VHDL Design, McGraw Hill, 2005.'
    },
    {
      disciplineId: '',
      disciplineName: '',
      credits: ,
      creditsInHours: ,
      goals: '',
      description: '',
      bibliography: ''
    },
    {
      disciplineId: '',
      disciplineName: '',
      credits: ,
      creditsInHours: ,
      goals: '',
      description: '',
      bibliography: ''
    },
    {
      disciplineId: '',
      disciplineName: '',
      credits: ,
      creditsInHours: ,
      goals: '',
      description: '',
      bibliography: ''
    },
    {
      disciplineId: '',
      disciplineName: '',
      credits: ,
      creditsInHours: ,
      goals: '',
      description: '',
      bibliography: ''
    },
    {
      disciplineId: '',
      disciplineName: '',
      credits: ,
      creditsInHours: ,
      goals: '',
      description: '',
      bibliography: ''
    },
    {
      disciplineId: '',
      disciplineName: '',
      credits: ,
      creditsInHours: ,
      goals: '',
      description: '',
      bibliography: ''
    },
    {
      disciplineId: '',
      disciplineName: '',
      credits: ,
      creditsInHours: ,
      goals: '',
      description: '',
      bibliography: ''
    },
    {
      disciplineId: '',
      disciplineName: '',
      credits: ,
      creditsInHours: ,
      goals: '',
      description: '',
      bibliography: ''
    },
    {
      disciplineId: '',
      disciplineName: '',
      credits: ,
      creditsInHours: ,
      goals: '',
      description: '',
      bibliography: ''
    },
    {
      disciplineId: '',
      disciplineName: '',
      credits: ,
      creditsInHours: ,
      goals: '',
      description: '',
      bibliography: ''
    },

  ],
  professors: [
    {
      professorId: 'ICMC9901',
      professorName: 'Eder Costa',
      professorBirthdate: '1990-04-14',
      professorSalary: 79000,
      professorEmail: 'eder.costa@unitube.br',
      professorPhone: '+55 16 9337-7718'
    }
  ],
  students: {}
}

export const DataContext = () => {}
