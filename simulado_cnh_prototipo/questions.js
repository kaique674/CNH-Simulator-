export const AREAS = {
  "sinalizacao": "Sinalização viária",
  "infracoes": "Infrações de trânsito",
  "direcao": "Normas de circulação e direção defensiva",
  "socorros": "Meio ambiente e primeiros socorros"
};

export const QUESTIONS = [
  {
    "id": "Q001",
    "area": "sinalizacao",
    "topic": "Placas de regulamentação",
    "prompt": "Ao se aproximar de uma placa octogonal vermelha com a inscrição “PARE”, o condutor deve:",
    "options": [
      "Reduzir a velocidade e seguir se não houver veículos.",
      "Parar completamente o veículo e prosseguir somente quando for seguro.",
      "Parar apenas se houver pedestres atravessando.",
      "Buzinar e atravessar com atenção."
    ],
    "answer": 1,
    "explanation": "A placa R-1 determina parada obrigatória. A parada deve ser completa, mesmo que aparentemente não haja outros veículos."
  },
  {
    "id": "Q002",
    "area": "sinalizacao",
    "topic": "Placas de regulamentação",
    "prompt": "A placa “Dê a preferência” determina que o condutor:",
    "options": [
      "Tem preferência sobre os veículos da via transversal.",
      "Deve parar obrigatoriamente em todos os casos.",
      "Deve reduzir e dar passagem aos veículos que tenham preferência, parando se necessário.",
      "Pode entrar no cruzamento sem observar o fluxo."
    ],
    "answer": 2,
    "explanation": "A placa R-2 exige que o condutor dê preferência. A parada é necessária quando a situação exigir."
  },
  {
    "id": "Q003",
    "area": "sinalizacao",
    "topic": "Placas de advertência",
    "prompt": "As placas de advertência têm como principal finalidade:",
    "options": [
      "Informar destinos e distâncias.",
      "Alertar sobre condições potencialmente perigosas ou situações à frente.",
      "Indicar serviços disponíveis ao longo da via.",
      "Estabelecer obrigações e proibições."
    ],
    "answer": 1,
    "explanation": "Placas de advertência alertam para riscos ou condições da via que exigem atenção e adequação da condução."
  },
  {
    "id": "Q004",
    "area": "sinalizacao",
    "topic": "Sinalização horizontal",
    "prompt": "Uma linha amarela contínua separando fluxos de sentidos opostos indica, em regra:",
    "options": [
      "Permissão para ultrapassar quando houver boa visibilidade.",
      "Proibição de transpor a linha para realizar ultrapassagem.",
      "Faixa exclusiva para ônibus.",
      "Área destinada ao estacionamento."
    ],
    "answer": 1,
    "explanation": "A linha amarela contínua que separa fluxos opostos restringe a transposição, inclusive para ultrapassagem."
  },
  {
    "id": "Q005",
    "area": "sinalizacao",
    "topic": "Sinalização horizontal",
    "prompt": "A faixa de travessia de pedestres indica ao condutor que:",
    "options": [
      "Deve acelerar para liberar o cruzamento.",
      "Pode estacionar por poucos minutos.",
      "Deve dar atenção à travessia e respeitar a prioridade do pedestre nas condições previstas.",
      "Só precisa parar quando houver semáforo."
    ],
    "answer": 2,
    "explanation": "A faixa sinaliza local de travessia. O condutor deve reduzir a velocidade e garantir a segurança e a prioridade legal do pedestre."
  },
  {
    "id": "Q006",
    "area": "sinalizacao",
    "topic": "Sinalização semafórica",
    "prompt": "No semáforo veicular, a luz amarela fixa significa:",
    "options": [
      "Acelerar para passar antes do vermelho.",
      "Atenção: o término do direito de passagem está próximo; deve-se parar, salvo se isso gerar risco.",
      "Trânsito livre para todos os movimentos.",
      "Parada obrigatória por tempo indeterminado."
    ],
    "answer": 1,
    "explanation": "O amarelo indica transição para o vermelho. A parada deve ocorrer com segurança, sem frenagem brusca que provoque risco."
  },
  {
    "id": "Q007",
    "area": "sinalizacao",
    "topic": "Hierarquia da sinalização",
    "prompt": "Em uma situação de conflito entre a ordem de um agente de trânsito e a indicação do semáforo, o condutor deve:",
    "options": [
      "Obedecer ao semáforo.",
      "Obedecer à placa mais próxima.",
      "Obedecer à ordem do agente de trânsito.",
      "Escolher a orientação que permita seguir mais rápido."
    ],
    "answer": 2,
    "explanation": "As ordens do agente de trânsito prevalecem sobre os demais sinais e normas de circulação."
  },
  {
    "id": "Q008",
    "area": "sinalizacao",
    "topic": "Sinalização temporária",
    "prompt": "Ao encontrar cones e placas indicando obras na pista, o condutor deve:",
    "options": [
      "Manter a velocidade da via porque a obra é temporária.",
      "Desconsiderar a sinalização se não houver trabalhadores visíveis.",
      "Reduzir a velocidade, aumentar a atenção e seguir a sinalização temporária.",
      "Desviar pela contramão sempre que houver espaço."
    ],
    "answer": 2,
    "explanation": "A sinalização temporária orienta a circulação em áreas de intervenção e deve ser respeitada como medida de segurança."
  },
  {
    "id": "Q009",
    "area": "sinalizacao",
    "topic": "Placas de indicação",
    "prompt": "Placas de indicação são utilizadas principalmente para:",
    "options": [
      "Advertir sobre curvas perigosas.",
      "Informar destinos, trajetos, serviços e referências úteis ao usuário da via.",
      "Proibir conversões.",
      "Determinar parada obrigatória."
    ],
    "answer": 1,
    "explanation": "A sinalização de indicação orienta o usuário, informando destinos, distâncias, serviços e pontos de interesse."
  },
  {
    "id": "Q010",
    "area": "sinalizacao",
    "topic": "Sinalização cicloviária",
    "prompt": "Ao cruzar uma ciclovia sinalizada para acessar um imóvel, o motorista deve:",
    "options": [
      "Entrar sem reduzir, pois a preferência é sempre do automóvel.",
      "Observar a sinalização e os ciclistas, realizando a manobra somente com segurança e respeitando a prioridade aplicável.",
      "Buzinar para que os ciclistas parem.",
      "Parar sobre a ciclovia até encontrar uma oportunidade."
    ],
    "answer": 1,
    "explanation": "A travessia deve ser feita com atenção especial a ciclistas e à sinalização, sem bloquear a infraestrutura cicloviária."
  },
  {
    "id": "Q011",
    "area": "sinalizacao",
    "topic": "Dispositivos auxiliares",
    "prompt": "Tachas refletivas instaladas no pavimento têm a função de:",
    "options": [
      "Substituir os semáforos.",
      "Aumentar a percepção dos limites e alinhamentos da pista, especialmente à noite.",
      "Indicar que é permitido estacionar.",
      "Reduzir obrigatoriamente a velocidade a zero."
    ],
    "answer": 1,
    "explanation": "As tachas e outros dispositivos auxiliares reforçam a percepção visual e tátil do traçado da via."
  },
  {
    "id": "Q012",
    "area": "sinalizacao",
    "topic": "Cruzamentos rodoferroviários",
    "prompt": "Ao se aproximar de uma passagem de nível sinalizada, o condutor deve:",
    "options": [
      "Aumentar a velocidade para cruzar rapidamente.",
      "Parar somente se enxergar o trem.",
      "Reduzir, observar a sinalização e nunca entrar se houver risco de ficar parado sobre os trilhos.",
      "Estacionar sobre os trilhos para verificar os dois lados."
    ],
    "answer": 2,
    "explanation": "A passagem de nível exige atenção e obediência à sinalização. Nunca se deve ingressar sem espaço para atravessar completamente."
  },
  {
    "id": "Q013",
    "area": "infracoes",
    "topic": "Uso do celular",
    "prompt": "Durante a condução, o motorista segura e manuseia o telefone celular para ler uma mensagem. Essa conduta:",
    "options": [
      "É permitida quando o veículo está em baixa velocidade.",
      "É permitida em congestionamentos.",
      "Configura infração de trânsito e aumenta o risco de sinistro.",
      "É permitida quando o trajeto é conhecido."
    ],
    "answer": 2,
    "explanation": "Segurar ou manusear telefone celular enquanto dirige é infração gravíssima, além de desviar a atenção da condução."
  },
  {
    "id": "Q014",
    "area": "infracoes",
    "topic": "Álcool e direção",
    "prompt": "Um condutor ingeriu bebida alcoólica e acredita estar em condições de dirigir. A atitude correta é:",
    "options": [
      "Dirigir devagar em ruas conhecidas.",
      "Aguardar apenas alguns minutos e dirigir.",
      "Não dirigir e providenciar outra forma segura de transporte.",
      "Dirigir somente se estiver acompanhado."
    ],
    "answer": 2,
    "explanation": "A ingestão de álcool compromete reflexos e julgamento. A conduta segura é não conduzir após beber."
  },
  {
    "id": "Q015",
    "area": "infracoes",
    "topic": "Cinto de segurança",
    "prompt": "O uso do cinto de segurança é obrigatório:",
    "options": [
      "Somente para o motorista.",
      "Somente em rodovias.",
      "Para condutor e passageiros, conforme as regras de utilização.",
      "Apenas nos bancos dianteiros."
    ],
    "answer": 2,
    "explanation": "O cinto deve ser utilizado por todos os ocupantes do veículo, observadas as regras legais aplicáveis."
  },
  {
    "id": "Q016",
    "area": "infracoes",
    "topic": "Velocidade",
    "prompt": "Em uma via sinalizada com limite máximo de velocidade, o condutor:",
    "options": [
      "Pode ultrapassar o limite se o veículo for potente.",
      "Deve respeitar o limite e reduzir ainda mais quando as condições exigirem.",
      "Pode seguir o fluxo mesmo que esteja acima do limite.",
      "Só precisa respeitar o limite durante o dia."
    ],
    "answer": 1,
    "explanation": "O limite sinalizado é o máximo permitido em condições normais; chuva, baixa visibilidade e tráfego podem exigir velocidade menor."
  },
  {
    "id": "Q017",
    "area": "infracoes",
    "topic": "Avanço de sinal",
    "prompt": "Avançar o sinal vermelho do semáforo, salvo situações legalmente autorizadas, é:",
    "options": [
      "Uma conduta permitida quando não há pedestres.",
      "Uma infração de trânsito.",
      "Permitido durante a madrugada em qualquer cruzamento.",
      "Permitido quando o motorista sinaliza com a buzina."
    ],
    "answer": 1,
    "explanation": "Avançar o sinal vermelho constitui infração, independentemente de o condutor considerar o cruzamento vazio."
  },
  {
    "id": "Q018",
    "area": "infracoes",
    "topic": "Estacionamento",
    "prompt": "Estacionar em vaga reservada à pessoa com deficiência sem credencial que autorize o uso:",
    "options": [
      "É permitido por até cinco minutos.",
      "É permitido com pisca-alerta ligado.",
      "Configura infração de trânsito.",
      "É permitido quando o motorista permanece no veículo."
    ],
    "answer": 2,
    "explanation": "Vagas reservadas só podem ser utilizadas por quem atende aos requisitos legais e possui a credencial correspondente."
  },
  {
    "id": "Q019",
    "area": "infracoes",
    "topic": "Documentação",
    "prompt": "Antes de iniciar uma viagem, o condutor deve:",
    "options": [
      "Verificar se está habilitado e se o veículo está licenciado e em condições de circulação.",
      "Levar apenas uma cópia informal de qualquer documento.",
      "Confiar que a documentação pode ser regularizada durante a fiscalização.",
      "Dirigir mesmo com o direito de dirigir suspenso, se for perto."
    ],
    "answer": 0,
    "explanation": "É responsabilidade do condutor estar regularmente habilitado e utilizar veículo em situação regular, além de mantê-lo em condições seguras."
  },
  {
    "id": "Q020",
    "area": "infracoes",
    "topic": "Prioridade do pedestre",
    "prompt": "Ao deixar de dar preferência ao pedestre que já iniciou a travessia na faixa, o condutor:",
    "options": [
      "Age corretamente se estiver com pressa.",
      "Comete infração e coloca o pedestre em risco.",
      "Pode seguir se buzinar.",
      "Só comete infração se houver agente no local."
    ],
    "answer": 1,
    "explanation": "O respeito à prioridade do pedestre é dever do condutor e não depende da presença de fiscalização."
  },
  {
    "id": "Q021",
    "area": "infracoes",
    "topic": "Ultrapassagem",
    "prompt": "Realizar ultrapassagem em local com sinalização que a proíbe:",
    "options": [
      "É permitido se a pista estiver vazia.",
      "É permitido para veículos pequenos.",
      "Configura infração de trânsito e pode causar colisão frontal.",
      "É permitido durante o dia."
    ],
    "answer": 2,
    "explanation": "A proibição de ultrapassagem deve ser respeitada. A manobra em local proibido eleva muito o risco de colisão."
  },
  {
    "id": "Q022",
    "area": "infracoes",
    "topic": "Transporte de crianças",
    "prompt": "O transporte de crianças em automóvel deve:",
    "options": [
      "Ser feito no colo de um adulto, desde que o trajeto seja curto.",
      "Observar idade, altura, posição no veículo e o dispositivo de retenção exigido pela legislação.",
      "Ser feito sempre no banco dianteiro.",
      "Dispensar dispositivos de retenção em vias urbanas."
    ],
    "answer": 1,
    "explanation": "O transporte deve cumprir as regras do CTB e da regulamentação do Contran sobre dispositivos de retenção adequados."
  },
  {
    "id": "Q023",
    "area": "infracoes",
    "topic": "Capacete e motocicletas",
    "prompt": "Em relação ao capacete de motociclista, a conduta correta é:",
    "options": [
      "Usar qualquer modelo, mesmo sem certificação.",
      "Utilizar capacete conforme as exigências legais, corretamente afivelado e ajustado.",
      "Usá-lo apenas em rodovias.",
      "Deixá-lo solto para facilitar a retirada."
    ],
    "answer": 1,
    "explanation": "O capacete deve atender às exigências regulamentares e estar corretamente colocado e afivelado."
  },
  {
    "id": "Q024",
    "area": "infracoes",
    "topic": "Recusa ao teste",
    "prompt": "A recusa do condutor em se submeter a procedimento legal de fiscalização de alcoolemia:",
    "options": [
      "Nunca gera consequência administrativa.",
      "Pode gerar as consequências previstas no CTB, mesmo sem resultado positivo do teste.",
      "É considerada apenas advertência verbal.",
      "É permitida quando o condutor não apresenta sinais de embriaguez."
    ],
    "answer": 1,
    "explanation": "O CTB prevê consequências administrativas específicas para a recusa aos procedimentos de fiscalização de álcool e outras substâncias."
  },
  {
    "id": "Q025",
    "area": "direcao",
    "topic": "Distância de segurança",
    "prompt": "Manter distância adequada do veículo à frente é importante porque:",
    "options": [
      "Evita que outros veículos entrem na faixa.",
      "Permite tempo e espaço para reagir e frear diante de imprevistos.",
      "Autoriza trafegar acima da velocidade.",
      "Substitui a atenção aos retrovisores."
    ],
    "answer": 1,
    "explanation": "A distância de segurança cria margem para percepção, reação e frenagem, devendo aumentar em condições adversas."
  },
  {
    "id": "Q026",
    "area": "direcao",
    "topic": "Chuva e pista molhada",
    "prompt": "Ao dirigir sob chuva intensa, a atitude mais segura é:",
    "options": [
      "Aumentar a velocidade para sair logo da chuva.",
      "Frear bruscamente em todas as poças.",
      "Reduzir a velocidade, ampliar a distância e evitar manobras bruscas.",
      "Usar o pisca-alerta continuamente enquanto o veículo está em movimento."
    ],
    "answer": 2,
    "explanation": "A chuva reduz a aderência e a visibilidade. Condução suave e velocidade compatível reduzem o risco de perda de controle."
  },
  {
    "id": "Q027",
    "area": "direcao",
    "topic": "Aquaplanagem",
    "prompt": "Se o veículo começar a aquaplanar, o condutor deve:",
    "options": [
      "Pisar fortemente no freio e virar o volante rapidamente.",
      "Tirar o pé do acelerador, manter o volante firme e evitar movimentos bruscos.",
      "Acelerar para recuperar a aderência.",
      "Puxar o freio de estacionamento."
    ],
    "answer": 1,
    "explanation": "Na aquaplanagem os pneus perdem contato adequado com o pavimento. Reduzir suavemente a aceleração e evitar movimentos bruscos é mais seguro."
  },
  {
    "id": "Q028",
    "area": "direcao",
    "topic": "Ponto cego",
    "prompt": "Antes de mudar de faixa, o condutor deve:",
    "options": [
      "Olhar apenas para frente.",
      "Sinalizar, verificar retrovisores e conferir o ponto cego antes de iniciar a manobra.",
      "Mudar de faixa e depois sinalizar.",
      "Confiar somente no espelho interno."
    ],
    "answer": 1,
    "explanation": "A checagem dos retrovisores e do ponto cego, junto com a sinalização antecipada, ajuda a evitar colisões laterais."
  },
  {
    "id": "Q029",
    "area": "direcao",
    "topic": "Ultrapassagem segura",
    "prompt": "Antes de ultrapassar outro veículo, o motorista deve:",
    "options": [
      "Verificar se a manobra é permitida, se há visibilidade e espaço suficientes e sinalizar.",
      "Aproximar-se bastante do veículo da frente e acelerar.",
      "Usar o acostamento para ganhar espaço.",
      "Ultrapassar em curvas se não enxergar veículos."
    ],
    "answer": 0,
    "explanation": "A ultrapassagem exige permissão, visibilidade, espaço suficiente e sinalização, sem colocar outros usuários em risco."
  },
  {
    "id": "Q030",
    "area": "direcao",
    "topic": "Cruzamentos",
    "prompt": "Ao aproximar-se de cruzamento sem sinalização, o condutor deve:",
    "options": [
      "Acelerar para passar primeiro.",
      "Reduzir a velocidade, observar os demais usuários e aplicar as regras de preferência.",
      "Presumir que a via mais larga sempre tem preferência.",
      "Buzinar e manter a velocidade."
    ],
    "answer": 1,
    "explanation": "A aproximação cautelosa permite identificar riscos e respeitar as regras de preferência, inclusive a preferência do veículo à direita nas situações previstas."
  },
  {
    "id": "Q031",
    "area": "direcao",
    "topic": "Fadiga e sono",
    "prompt": "Ao perceber sonolência durante uma viagem, o condutor deve:",
    "options": [
      "Abrir a janela e continuar por mais algumas horas.",
      "Aumentar o volume do rádio.",
      "Parar em local seguro e descansar antes de continuar.",
      "Acelerar para chegar mais rápido."
    ],
    "answer": 2,
    "explanation": "Sono e fadiga reduzem atenção e tempo de reação. A medida segura é interromper a viagem em local apropriado e descansar."
  },
  {
    "id": "Q032",
    "area": "direcao",
    "topic": "Condições adversas",
    "prompt": "Neblina intensa reduz a visibilidade. O condutor deve:",
    "options": [
      "Usar farol alto continuamente.",
      "Reduzir a velocidade, aumentar a distância e utilizar iluminação adequada.",
      "Seguir outro veículo bem de perto.",
      "Parar na faixa de rolamento."
    ],
    "answer": 1,
    "explanation": "Na neblina, a velocidade deve ser reduzida e a distância ampliada. Farol alto pode piorar a visibilidade por reflexão."
  },
  {
    "id": "Q033",
    "area": "direcao",
    "topic": "Veículos de emergência",
    "prompt": "Ao perceber a aproximação de veículo de emergência com alarme sonoro e iluminação intermitente acionados, o condutor deve:",
    "options": [
      "Disputar espaço para não perder sua posição.",
      "Facilitar a passagem, deslocando-se com segurança conforme as condições da via.",
      "Frear imediatamente no meio da faixa.",
      "Seguir o veículo de emergência para aproveitar a passagem."
    ],
    "answer": 1,
    "explanation": "É necessário facilitar a passagem do veículo de emergência, sem criar manobras bruscas ou novos riscos."
  },
  {
    "id": "Q034",
    "area": "direcao",
    "topic": "Pneus e frenagem",
    "prompt": "Pneus muito desgastados aumentam o risco porque:",
    "options": [
      "Melhoram a aderência na chuva.",
      "Reduzem a distância de frenagem.",
      "Prejudicam a aderência, especialmente em piso molhado.",
      "Não interferem na segurança se o veículo tiver ABS."
    ],
    "answer": 2,
    "explanation": "A profundidade dos sulcos influencia a drenagem de água e a aderência. ABS não substitui pneus em boas condições."
  },
  {
    "id": "Q035",
    "area": "direcao",
    "topic": "Convivência no trânsito",
    "prompt": "Ao se aproximar de ciclistas na pista, o motorista deve:",
    "options": [
      "Passar o mais perto possível para não invadir a faixa contrária.",
      "Manter distância lateral segura e realizar a ultrapassagem somente quando houver espaço adequado.",
      "Buzinar continuamente para que saiam da via.",
      "Obrigá-los a utilizar a calçada."
    ],
    "answer": 1,
    "explanation": "Ciclistas são usuários vulneráveis. O motorista deve preservar distância lateral e ultrapassar apenas com segurança."
  },
  {
    "id": "Q036",
    "area": "direcao",
    "topic": "Autocontrole",
    "prompt": "Outro motorista realiza uma manobra agressiva. A atitude defensiva é:",
    "options": [
      "Responder com gestos e acelerar.",
      "Perseguir o veículo para adverti-lo.",
      "Manter a calma, preservar distância e evitar confronto.",
      "Fechar a passagem para ensinar uma lição."
    ],
    "answer": 2,
    "explanation": "Autocontrole reduz a escalada de conflitos. A prioridade é preservar a segurança, não disputar espaço."
  },
  {
    "id": "Q037",
    "area": "socorros",
    "topic": "Local do sinistro",
    "prompt": "Ao chegar a um sinistro com vítimas, antes de se aproximar, o condutor deve:",
    "options": [
      "Parar de qualquer maneira na pista.",
      "Avaliar os riscos, proteger-se e sinalizar o local de forma segura.",
      "Retirar imediatamente todas as vítimas dos veículos.",
      "Oferecer água às vítimas."
    ],
    "answer": 1,
    "explanation": "A segurança do local e a autoproteção vêm primeiro. A sinalização adequada ajuda a evitar novos sinistros."
  },
  {
    "id": "Q038",
    "area": "socorros",
    "topic": "Acionamento de ajuda",
    "prompt": "Em um sinistro com pessoas feridas, uma providência adequada é:",
    "options": [
      "Acionar o serviço de emergência, informando local e situação.",
      "Levar todas as vítimas em veículo particular, sem avaliar riscos.",
      "Aguardar sem sinalizar o local.",
      "Publicar fotos antes de pedir ajuda."
    ],
    "answer": 0,
    "explanation": "Acione o serviço de emergência e informe localização, quantidade de vítimas e riscos percebidos. Evite intervenções para as quais não tenha capacitação."
  },
  {
    "id": "Q039",
    "area": "socorros",
    "topic": "Movimentação da vítima",
    "prompt": "Uma vítima de sinistro está caída e consciente, sem risco imediato no local. O que fazer?",
    "options": [
      "Movimentá-la para a calçada por precaução.",
      "Oferecer alimento.",
      "Evitar movimentá-la e aguardar o atendimento especializado, mantendo o local protegido.",
      "Puxá-la pelos braços para que se sente."
    ],
    "answer": 2,
    "explanation": "Movimentar uma vítima sem necessidade pode agravar lesões, especialmente na coluna. Aguarde socorro especializado."
  },
  {
    "id": "Q040",
    "area": "socorros",
    "topic": "Capacete da vítima",
    "prompt": "Um motociclista acidentado está usando capacete. Uma pessoa sem treinamento deve:",
    "options": [
      "Retirar o capacete imediatamente.",
      "Evitar retirar o capacete e aguardar equipe especializada, salvo orientação específica de emergência.",
      "Puxar o capacete pela viseira.",
      "Retirar o capacete apenas se a vítima estiver consciente."
    ],
    "answer": 1,
    "explanation": "A retirada inadequada do capacete pode agravar lesões. A conduta geral é não removê-lo e aguardar profissionais capacitados."
  },
  {
    "id": "Q041",
    "area": "socorros",
    "topic": "Hemorragia",
    "prompt": "Ao presenciar uma hemorragia externa, se for seguro e possível, a pessoa que presta auxílio deve:",
    "options": [
      "Aplicar pressão direta sobre o ferimento com material limpo, protegendo-se.",
      "Lavar profundamente o ferimento com combustível.",
      "Retirar objetos encravados.",
      "Dar medicamentos à vítima."
    ],
    "answer": 0,
    "explanation": "A pressão direta com material limpo pode ajudar a controlar sangramento externo enquanto se aguarda atendimento. Não retire objetos encravados."
  },
  {
    "id": "Q042",
    "area": "socorros",
    "topic": "O que não fazer",
    "prompt": "Em atendimento inicial a uma vítima de sinistro, deve-se evitar:",
    "options": [
      "Sinalizar o local.",
      "Acionar o serviço de emergência.",
      "Dar líquidos, alimentos ou medicamentos sem orientação profissional.",
      "Observar a respiração sem movimentar desnecessariamente a vítima."
    ],
    "answer": 2,
    "explanation": "Oferecer líquidos, alimentos ou medicamentos pode trazer riscos e não substitui avaliação profissional."
  },
  {
    "id": "Q043",
    "area": "socorros",
    "topic": "Manutenção preventiva",
    "prompt": "A manutenção preventiva do veículo contribui para:",
    "options": [
      "Aumentar o consumo e a emissão de poluentes.",
      "Reduzir falhas, melhorar a segurança e evitar emissões desnecessárias.",
      "Dispensar inspeções dos pneus.",
      "Eliminar a necessidade de respeitar limites de velocidade."
    ],
    "answer": 1,
    "explanation": "Manter pneus, motor, freios e sistemas regulados melhora a segurança, a eficiência e pode reduzir poluição."
  },
  {
    "id": "Q044",
    "area": "socorros",
    "topic": "Poluição atmosférica",
    "prompt": "Um veículo com motor desregulado e emissão excessiva de fumaça:",
    "options": [
      "Não causa impactos ambientais se for usado pouco.",
      "Pode contribuir para a poluição do ar e deve passar por manutenção.",
      "Consome menos combustível obrigatoriamente.",
      "Está adequado se o ruído for baixo."
    ],
    "answer": 1,
    "explanation": "A manutenção correta reduz emissões e contribui para a qualidade do ar."
  },
  {
    "id": "Q045",
    "area": "socorros",
    "topic": "Condução econômica",
    "prompt": "Uma prática que tende a reduzir consumo de combustível e emissões é:",
    "options": [
      "Acelerar e frear bruscamente.",
      "Manter pneus calibrados e conduzir de forma suave, antecipando o trânsito.",
      "Deixar o motor ligado por longos períodos sem necessidade.",
      "Transportar carga acima da capacidade."
    ],
    "answer": 1,
    "explanation": "Pneus calibrados, aceleração progressiva e antecipação do fluxo reduzem desperdício de combustível."
  },
  {
    "id": "Q046",
    "area": "socorros",
    "topic": "Descarte de resíduos",
    "prompt": "Óleo lubrificante usado e outros resíduos automotivos devem ser:",
    "options": [
      "Despejados no solo ou em bueiros.",
      "Misturados ao lixo doméstico sem cuidado.",
      "Encaminhados a pontos de coleta ou estabelecimentos autorizados para destinação adequada.",
      "Queimados em área aberta."
    ],
    "answer": 2,
    "explanation": "Resíduos automotivos podem contaminar solo e água. Devem receber destinação ambientalmente adequada."
  },
  {
    "id": "Q047",
    "area": "socorros",
    "topic": "Poluição sonora",
    "prompt": "Uma atitude que contribui para reduzir a poluição sonora no trânsito é:",
    "options": [
      "Utilizar buzina de forma prolongada.",
      "Manter escapamento e componentes do veículo em condições regulares e evitar ruídos desnecessários.",
      "Retirar silenciadores.",
      "Acelerar parado para alertar pedestres."
    ],
    "answer": 1,
    "explanation": "Manutenção adequada e uso responsável da buzina e do acelerador ajudam a reduzir ruídos excessivos."
  },
  {
    "id": "Q048",
    "area": "socorros",
    "topic": "Proteção de terceiros",
    "prompt": "Ao prestar auxílio em um sinistro, a pessoa deve:",
    "options": [
      "Colocar-se em risco para chegar mais rápido à vítima.",
      "Priorizar a própria segurança e evitar exposição a fogo, combustível, tráfego ou eletricidade.",
      "Entrar em veículo instável sem avaliar o perigo.",
      "Ignorar vazamentos para atender a vítima."
    ],
    "answer": 1,
    "explanation": "A autoproteção é indispensável. Não se deve entrar em áreas perigosas sem treinamento e equipamentos adequados."
  }
];
