
var allProvincias = $.each(
	[{c:'5', p:'4',n:'ANGELES',i:'4'},
{c:'', p:'5',n:'Abangares',i:'7'},
{c:'1', p:'6',n:'ACAPULCO',i:'14'},
{c:'11', p:'6',n:'ACAPULCO',i:'4'},
{c:'', p:'1',n:'Acosta',i:'12'},
{c:'8', p:'6',n:'AGUABUENA',i:'3'},
{c:'1', p:'3',n:'AGUACALIENTE o SAN FRANCISCO',i:'5'},
{c:'13', p:'2',n:'AGUAS CLARAS',i:'2'},
{c:'10', p:'2',n:'AGUAS ZARCAS',i:'4'},
{c:'', p:'6',n:'Aguirre',i:'6'},
{c:'', p:'',n:'Alajuela',i:'2'},
{c:'', p:'2',n:'Alajuela',i:'1'},
{c:'1', p:'2',n:'ALAJUELA',i:'1'},
{c:'', p:'1',n:'Alajuelita',i:'10'},
{c:'10', p:'1',n:'ALAJUELITA',i:'1'},
{c:'3', p:'7',n:'ALEGRIA',i:'6'},
{c:'2', p:'2',n:'ALFARO',i:'9'},
{c:'', p:'3',n:'Alvarado',i:'6'},
{c:'13', p:'1',n:'ANSELMO LLORENTE',i:'3'},
{c:'1', p:'6',n:'ARANCIBIA',i:'16'},
{c:'11', p:'6',n:'ARANCIBIA',i:'6'},
{c:'8', p:'5',n:'ARENAL',i:'7'},
{c:'', p:'1',n:'Aserri',i:'6'},
{c:'6', p:'1',n:'ASERRI',i:'1'},
{c:'', p:'2',n:'Atenas',i:'5'},
{c:'5', p:'2',n:'ATENAS',i:'1'},
{c:'', p:'5',n:'Bagaces',i:'4'},
{c:'4', p:'5',n:'BAGACES',i:'1'},
{c:'5', p:'6',n:'BAHIA BALLENA',i:'4'},
{c:'5', p:'6',n:'BAHIA DRAKE',i:'6'},
{c:'19', p:'1',n:'BARU',i:'9'},
{c:'4', p:'1',n:'BARBACOAS',i:'3'},
{c:'1', p:'6',n:'BARRANCA',i:'8'},
{c:'8', p:'4',n:'BARRANTES',i:'2'},
{c:'', p:'4',n:'Barva',i:'2'},
{c:'2', p:'4',n:'BARVA',i:'1'},
{c:'5', p:'7',n:'BATAN',i:'2'},
{c:'6', p:'5',n:'BEBEDERO',i:'4'},
{c:'9', p:'5',n:'BEJUCO',i:'6'},
{c:'5', p:'5',n:'BELEN',i:'4'},
{c:'2', p:'5',n:'BELEN DE NOSARITA',i:'7'},
{c:'', p:'4',n:'Belen',i:'7'},
{c:'13', p:'2',n:'BIJAGUA',i:'4'},
{c:'3', p:'6',n:'BIOLLEY',i:'8'},
{c:'3', p:'2',n:'BOLIVAR',i:'8'},
{c:'3', p:'5',n:'BOLSÓN',i:'2'},
{c:'3', p:'6',n:'BORUCA',i:'4'},
{c:'9', p:'1',n:'BRASIL',i:'6'},
{c:'4', p:'7',n:'BRATSI',i:'1'},
{c:'1', p:'2',n:'BRISAS',i:'17'},
{c:'11', p:'2',n:'BRISAS',i:'7'},
{c:'3', p:'6',n:'BRUNKA',i:'9'},
{c:'10', p:'2',n:'BUENAVISTA',i:'3'},
{c:'15', p:'2',n:'BUENAVISTA',i:'2'},
{c:'', p:'6',n:'Buenos Aires',i:'3'},
{c:'7', p:'2',n:'BUENOS AIRES',i:'3'},
{c:'3', p:'6',n:'BUENOS AIRES',i:'1'},
{c:'1', p:'6',n:'CÓBANO',i:'11'},
{c:'11', p:'6',n:'CÓBANO',i:'1'},
{c:'6', p:'5',n:'CAÑAS',i:'1'},
{c:'1', p:'5',n:'CAÑAS DULCES',i:'2'},
{c:'14', p:'2',n:'CAÑO NEGRO',i:'2'},
{c:'', p:'5',n:'Cañas',i:'6'},
{c:'3', p:'5',n:'CABO VELAS',i:'8'},
{c:'2', p:'3',n:'CACHI',i:'4'},
{c:'4', p:'7',n:'CAHUITA',i:'3'},
{c:'19', p:'1',n:'CAJÓN',i:'8'},
{c:'2', p:'6',n:'CALDERA',i:'6'},
{c:'8', p:'1',n:'CALLE BLANCOS',i:'3'},
{c:'13', p:'2',n:'CANALETE',i:'8'},
{c:'7', p:'2',n:'CANDELARIA',i:'5'},
{c:'4', p:'1',n:'CANDELARITA',i:'6'},
{c:'12', p:'1',n:'CANGREJAL',i:'4'},
{c:'10', p:'6',n:'CANOAS',i:'3'},
{c:'6', p:'3',n:'CAPELLADES',i:'3'},
{c:'16', p:'1',n:'CARARA',i:'5'},
{c:'2', p:'7',n:'CARIARI',i:'5'},
{c:'1', p:'1',n:'CARMEN',i:'1'},
{c:'1', p:'3',n:'CARMEN',i:'3'},
{c:'9', p:'5',n:'CARMONA',i:'1'},
{c:'5', p:'7',n:'CARRANDI',i:'3'},
{c:'', p:'5',n:'Carrillo',i:'5'},
{c:'8', p:'2',n:'CARRILLOS',i:'4'},
{c:'1', p:'2',n:'CARRIZAL',i:'3'},
{c:'3', p:'5',n:'CARTAGENA',i:'5'},
{c:'', p:'',n:'Cartago',i:'3'},
{c:'', p:'3',n:'Cartago',i:'1'},
{c:'1', p:'1',n:'CASCAJAL',i:'15'},
{c:'11', p:'1',n:'CASCAJAL',i:'5'},
{c:'1', p:'1',n:'CATEDRAL',i:'4'},
{c:'6', p:'3',n:'CERVANTES',i:'2'},
{c:'3', p:'6',n:'CHANGUENA',i:'7'},
{c:'1', p:'6',n:'CHACARITA',i:'12'},
{c:'11', p:'6',n:'CHACARITA',i:'2'},
{c:'1', p:'6',n:'CHIRA',i:'13'},
{c:'11', p:'6',n:'CHIRA',i:'3'},
{c:'4', p:'1',n:'CHIRES',i:'9'},
{c:'5', p:'3',n:'CHIRRIPÓ',i:'12'},
{c:'1', p:'6',n:'CHOMES',i:'3'},
{c:'13', p:'1',n:'CINCO ESQUINAS',i:'2'},
{c:'7', p:'3',n:'CIPRESES',i:'4'},
{c:'6', p:'2',n:'CIRRI SUR',i:'4'},
{c:'7', p:'1',n:'COLÓN',i:'1'},
{c:'13', p:'1',n:'COLIMA',i:'5'},
{c:'3', p:'6',n:'COLINAS',i:'6'},
{c:'7', p:'5',n:'COLORADO',i:'4'},
{c:'2', p:'7',n:'COLORADO',i:'6'},
{c:'10', p:'1',n:'CONCEPCIÓN',i:'4'},
{c:'2', p:'2',n:'CONCEPCIÓN',i:'11'},
{c:'3', p:'3',n:'CONCEPCIÓN',i:'5'},
{c:'5', p:'4',n:'CONCEPCIÓN',i:'5'},
{c:'6', p:'4',n:'CONCEPCIÓN',i:'3'},
{c:'17', p:'1',n:'COPEY',i:'3'},
{c:'1', p:'3',n:'CORRALILLO',i:'7'},
{c:'10', p:'6',n:'CORREDOR',i:'1'},
{c:'', p:'6',n:'Corredores',i:'10'},
{c:'7', p:'3',n:'COT',i:'2'},
{c:'15', p:'2',n:'COTE',i:'3'},
{c:'', p:'6',n:'Coto Brus',i:'8'},
{c:'9', p:'2',n:'COYOLAR',i:'4'},
{c:'3', p:'5',n:'CUAJINIQUIL',i:'6'},
{c:'10', p:'4',n:'CUREÑA',i:'5'},
{c:'', p:'1',n:'Curridabat',i:'18'},
{c:'18', p:'1',n:'CURRIDABAT',i:'1'},
{c:'1', p:'5',n:'CURUBANDE',i:'5'},
{c:'10', p:'2',n:'CUTRIS',i:'11'},
{c:'3', p:'1',n:'DAMAS',i:'10'},
{c:'19', p:'1',n:'DANIEL FLORES',i:'3'},
{c:'13', p:'2',n:'DELICIAS',i:'5'},
{c:'4', p:'1',n:'DESAMPARADITOS',i:'7'},
{c:'', p:'1',n:'Desamparados',i:'3'},
{c:'3', p:'1',n:'DESAMPARADOS',i:'1'},
{c:'1', p:'2',n:'DESAMPARADOS',i:'10'},
{c:'4', p:'2',n:'DESMONTE',i:'2'},
{c:'3', p:'5',n:'DIRIA',i:'7'},
{c:'13', p:'2',n:'DOS RIOS',i:'6'},
{c:'', p:'1',n:'Dota',i:'17'},
{c:'6', p:'7',n:'DUACARI',i:'5'},
{c:'1', p:'3',n:'DULCE NOMBRE',i:'9'},
{c:'3', p:'3',n:'DULCE NOMBRE',i:'6'},
{c:'1', p:'1',n:'DULCE NOMBRE DE JESUS',i:'13'},
{c:'11', p:'1',n:'DULCE NOMBRE DE JESUS',i:'3'},
{c:'14', p:'2',n:'EL AMPARO',i:'3'},
{c:'3', p:'7',n:'EL CAIRO',i:'5'},
{c:'19', p:'1',n:'EL GENERAL',i:'2'},
{c:'', p:'3',n:'El Guarco',i:'8'},
{c:'9', p:'2',n:'EL MASTATE',i:'2'},
{c:'1', p:'6',n:'EL ROBLE',i:'15'},
{c:'11', p:'6',n:'EL ROBLE',i:'5'},
{c:'6', p:'2',n:'EL ROSARIO',i:'7'},
{c:'8', p:'3',n:'EL TEJAR',i:'1'},
{c:'2', p:'1',n:'ESCAZU',i:'1'},
{c:'', p:'1',n:'ESCAZU',i:'2'},
{c:'2', p:'6',n:'ESPIRITU SANTO',i:'1'},
{c:'', p:'6',n:'Esparza',i:'2'},
{c:'7', p:'2',n:'ESQUIPULAS',i:'6'},
{c:'5', p:'5',n:'FILADELFIA',i:'1'},
{c:'10', p:'2',n:'FLORENCIA',i:'2'},
{c:'', p:'4',n:'Flores',i:'8'},
{c:'3', p:'7',n:'FLORIDA',i:'3'},
{c:'3', p:'1',n:'FRAILES',i:'6'},
{c:'', p:'6',n:'Garabito',i:'11'},
{c:'1', p:'2',n:'GARITA',i:'13'},
{c:'11', p:'2',n:'GARITA',i:'3'},
{c:'3', p:'7',n:'GERMANIA',i:'4'},
{c:'', p:'1',n:'Goicoechea',i:'8'},
{c:'', p:'6',n:'Golfito',i:'7'},
{c:'7', p:'6',n:'GOLFITO',i:'1'},
{c:'18', p:'1',n:'GRANADILLA',i:'2'},
{c:'3', p:'1',n:'GRAVILIAS',i:'12'},
{c:'', p:'2',n:'Grecia',i:'3'},
{c:'3', p:'2',n:'GRECIA',i:'1'},
{c:'4', p:'1',n:'GRIFO ALTO',i:'4'},
{c:'', p:'7',n:'Guácimo',i:'6'},
{c:'1', p:'2',n:'GUACIMA',i:'5'},
{c:'6', p:'7',n:'GUACIMO',i:'1'},
{c:'2', p:'7',n:'GUAPILES',i:'1'},
{c:'1', p:'6',n:'GUACIMAL',i:'7'},
{c:'8', p:'1',n:'GUADALUPE',i:'1'},
{c:'1', p:'3',n:'GUADALUPE o ARENILLA',i:'6'},
{c:'12', p:'1',n:'GUAITIL Villa',i:'2'},
{c:'', p:'',n:'Guanacaste',i:'5'},
{c:'', p:'2',n:'Guatuso',i:'15'},
{c:'7', p:'1',n:'GUAYABO',i:'2'},
{c:'7', p:'6',n:'GUAYCARA',i:'3'},
{c:'8', p:'6',n:'GUTIERREZ BRAUN',i:'6'},
{c:'9', p:'2',n:'HACIENDA VIEJA',i:'3'},
{c:'1', p:'1',n:'HATILLO',i:'10'},
{c:'', p:'',n:'Heredia',i:'4'},
{c:'', p:'4',n:'Heredia',i:'1'},
{c:'1', p:'4',n:'HEREDIA',i:'1'},
{c:'', p:'5',n:'Hojancha',i:'11'},
{c:'11', p:'5',n:'HOJANCHA',i:'1'},
{c:'1', p:'1',n:'HOSPITAL',i:'3'},
{c:'11', p:'5',n:'HUACAS',i:'4'},
{c:'8', p:'1',n:'IPIS',i:'5'},
{c:'17', p:'1',n:'JARDIN',i:'2'},
{c:'7', p:'1',n:'JARIS',i:'6'},
{c:'5', p:'2',n:'JESUS',i:'2'},
{c:'4', p:'4',n:'JESUS',i:'4'},
{c:'4', p:'2',n:'JESUS MARIA',i:'3'},
{c:'2', p:'7',n:'JIMENEZ',i:'2'},
{c:'', p:'3',n:'Jimenez',i:'4'},
{c:'4', p:'3',n:'JUAN VIÑAS',i:'1'},
{c:'15', p:'2',n:'KATIRA',i:'4'},
{c:'7', p:'4',n:'LA ASUNCIÓN',i:'3'},
{c:'9', p:'2',n:'LA CEIBA',i:'5'},
{c:'2', p:'7',n:'LA COLONIA',i:'7'},
{c:'', p:'5',n:'La Cruz',i:'10'},
{c:'10', p:'5',n:'LA CRUZ',i:'1'},
{c:'10', p:'6',n:'LA CUESTA',i:'2'},
{c:'10', p:'2',n:'LA FORTUNA',i:'7'},
{c:'4', p:'5',n:'LA FORTUNA',i:'2'},
{c:'10', p:'5',n:'LA GARITA',i:'3'},
{c:'7', p:'2',n:'LA GRANJA',i:'7'},
{c:'5', p:'3',n:'LA ISABEL',i:'11'},
{c:'10', p:'2',n:'LA PALMERA',i:'9'},
{c:'7', p:'4',n:'LA RIBERA',i:'2'},
{c:'5', p:'3',n:'LA SUIZA',i:'2'},
{c:'10', p:'2',n:'LA TIGRA',i:'8'},
{c:'14', p:'1',n:'LA TRINIDAD',i:'3'},
{c:'4', p:'6',n:'LA UNIÓN',i:'2'},
{c:'', p:'3',n:'La Unión',i:'3'},
{c:'10', p:'4',n:'LA VIRGEN',i:'2'},
{c:'8', p:'5',n:'LIBANO',i:'5'},
{c:'4', p:'2',n:'LABRADOR',i:'4'},
{c:'10', p:'4',n:'LAS HORQUETAS',i:'3'},
{c:'7', p:'5',n:'LAS JUNTAS',i:'1'},
{c:'10', p:'6',n:'LAUREL',i:'4'},
{c:'6', p:'1',n:'LEGUA',i:'5'},
{c:'', p:'1',n:'Leon Cortez Castro',i:'20'},
{c:'13', p:'1',n:'LEON XIII',i:'4'},
{c:'1', p:'6',n:'LEPANTO',i:'4'},
{c:'', p:'5',n:'Liberia',i:'1'},
{c:'1', p:'5',n:'LIBERIA',i:'1'},
{c:'1', p:'7',n:'LIMÓN',i:'1'},
{c:'', p:'',n:'limón',i:'7'},
{c:'', p:'7',n:'limón',i:'1'},
{c:'8', p:'6',n:'LIMONCITO',i:'4'},
{c:'20', p:'1',n:'LLANO BONITO',i:'3'},
{c:'1', p:'3',n:'LLANO GRANDE',i:'10'},
{c:'2', p:'3',n:'LLANOS DE SANTA LUCIA',i:'5'},
{c:'10', p:'4',n:'LLANURAS DEL GASPAR',i:'4'},
{c:'8', p:'4',n:'LLORENTE',i:'3'},
{c:'', p:'2',n:'Los Chiles',i:'14'},
{c:'14', p:'2',n:'LOS CHILES',i:'1'},
{c:'3', p:'1',n:'LOS GUIDO',i:'13'},
{c:'2', p:'6',n:'MACACONA',i:'3'},
{c:'2', p:'5',n:'MANSIÓN',i:'2'},
{c:'1', p:'6',n:'MANZANILLO',i:'6'},
{c:'8', p:'1',n:'MATA DE PLATANO',i:'4'},
{c:'1', p:'1',n:'MATA REDONDA',i:'8'},
{c:'1', p:'7',n:'MATAMA',i:'4'},
{c:'', p:'7',n:'Matina',i:'5'},
{c:'5', p:'7',n:'MATINA',i:'1'},
{c:'1', p:'5',n:'MAYORGA',i:'3'},
{c:'1', p:'1',n:'MERCED',i:'2'},
{c:'15', p:'1',n:'MERCEDES',i:'3'},
{c:'5', p:'2',n:'MERCEDES',i:'3'},
{c:'1', p:'4',n:'MERCEDES',i:'2'},
{c:'6', p:'7',n:'MERCEDES',i:'2'},
{c:'4', p:'1',n:'MERCEDES SUR',i:'2'},
{c:'4', p:'6',n:'MIRAMAR',i:'1'},
{c:'4', p:'5',n:'MOGOTE',i:'3'},
{c:'11', p:'5',n:'MONTE ROMO',i:'2'},
{c:'1', p:'6',n:'MONTE VERDE',i:'9'},
{c:'6', p:'1',n:'MONTERREY',i:'6'},
{c:'10', p:'2',n:'MONTERREY',i:'12'},
{c:'', p:'1',n:'Montes de Oca',i:'15'},
{c:'', p:'6',n:'Montes de Oro',i:'4'},
{c:'', p:'1',n:'Mora',i:'7'},
{c:'', p:'1',n:'Moravia',i:'14'},
{c:'1', p:'5',n:'NACASCOLO',i:'4'},
{c:'', p:'5',n:'Nandayure',i:'9'},
{c:'6', p:'6',n:'NARANJITO',i:'3'},
{c:'', p:'2',n:'Naranjo',i:'6'},
{c:'6', p:'2',n:'NARANJO',i:'1'},
{c:'', p:'5',n:'Nicoya',i:'2'},
{c:'2', p:'5',n:'NICOYA',i:'1'},
{c:'2', p:'5',n:'NOSARA',i:'6'},
{c:'1', p:'3',n:'OCCIDENTAL',i:'2'},
{c:'', p:'3',n:'Oreamuno',i:'7'},
{c:'1', p:'3',n:'ORIENTAL',i:'1'},
{c:'2', p:'3',n:'OROSI',i:'3'},
{c:'', p:'2',n:'Orotina',i:'9'},
{c:'9', p:'2',n:'OROTINA',i:'1'},
{c:'', p:'6',n:'Osa',i:'5'},
{c:'19', p:'1',n:'PARAMO',i:'11'},
{c:'6', p:'3',n:'PACAYAS',i:'1'},
{c:'3', p:'7',n:'PACUARITO',i:'2'},
{c:'5', p:'6',n:'PALMAR',i:'2'},
{c:'', p:'2',n:'Palmares',i:'7'},
{c:'7', p:'2',n:'PALMARES',i:'1'},
{c:'12', p:'1',n:'PALMICHAL',i:'3'},
{c:'1', p:'2',n:'PALMIRA',i:'15'},
{c:'11', p:'2',n:'PALMIRA',i:'5'},
{c:'5', p:'5',n:'PALMIRA',i:'2'},
{c:'6', p:'5',n:'PALMIRA',i:'2'},
{c:'6', p:'2',n:'PALMITOS',i:'8'},
{c:'1', p:'6',n:'PAQUERA',i:'5'},
{c:'3', p:'4',n:'PARA',i:'8'},
{c:'2', p:'3',n:'PARAISO',i:'1'},
{c:'', p:'3',n:'Paraíso',i:'2'},
{c:'3', p:'4',n:'PARACITO',i:'4'},
{c:'', p:'6',n:'Parrita',i:'9'},
{c:'9', p:'6',n:'PARRITA',i:'1'},
{c:'1', p:'1',n:'PATALILLO',i:'14'},
{c:'11', p:'1',n:'PATALILLO',i:'4'},
{c:'3', p:'1',n:'PATARRA',i:'7'},
{c:'8', p:'3',n:'PATIO DE AGUA',i:'4'},
{c:'7', p:'6',n:'PAVÓN',i:'4'},
{c:'1', p:'1',n:'PAVAS',i:'9'},
{c:'5', p:'3',n:'PAVONES',i:'6'},
{c:'2', p:'2',n:'PEÑAS BLANCAS',i:'13'},
{c:'19', p:'1',n:'PEJIBAYE',i:'7'},
{c:'4', p:'3',n:'PEJIBAYE',i:'3'},
{c:'5', p:'3',n:'PERALTA',i:'3'},
{c:'', p:'1',n:'Perez Zeledon',i:'19'},
{c:'7', p:'1',n:'PICAGRES',i:'5'},
{c:'9', p:'1',n:'PIEDADES',i:'5'},
{c:'2', p:'2',n:'PIEDADES NORTE',i:'4'},
{c:'2', p:'2',n:'PIEDADES SUR',i:'5'},
{c:'5', p:'6',n:'PIEDRAS BLANCAS',i:'5'},
{c:'7', p:'1',n:'PIEDRAS NEGRAS',i:'4'},
{c:'3', p:'6',n:'PILAS',i:'5'},
{c:'1', p:'6',n:'PITAHAYA',i:'2'},
{c:'10', p:'2',n:'PITAL',i:'6'},
{c:'8', p:'6',n:'PITTIER',i:'5'},
{c:'19', p:'1',n:'PLATANARES',i:'6'},
{c:'', p:'2',n:'Poás',i:'8'},
{c:'', p:'7',n:'Pococí',i:'2'},
{c:'6', p:'7',n:'POCORA',i:'3'},
{c:'10', p:'2',n:'POCOSOL',i:'13'},
{c:'6', p:'5',n:'POROZAL',i:'5'},
{c:'9', p:'5',n:'PORVENIR',i:'5'},
{c:'7', p:'3',n:'POTRERO CERRADO',i:'3'},
{c:'3', p:'6',n:'POTRERO GRANDE',i:'3'},
{c:'9', p:'1',n:'POZOS',i:'3'},
{c:'3', p:'2',n:'PUENTE DE PIEDRA',i:'7'},
{c:'11', p:'5',n:'PUERTO CARRILLO',i:'3'},
{c:'5', p:'6',n:'PUERTO CORTES',i:'1'},
{c:'7', p:'6',n:'PUERTO JIMENEZ',i:'2'},
{c:'10', p:'4',n:'PUERTO VIEJO',i:'1'},
{c:'', p:'',n:'Puntarenas',i:'6'},
{c:'', p:'6',n:'Puntarenas',i:'1'},
{c:'1', p:'6',n:'PUNTARENAS',i:'1'},
{c:'4', p:'4',n:'PURABA',i:'6'},
{c:'', p:'1',n:'Puriscal',i:'4'},
{c:'8', p:'1',n:'PURRAL',i:'7'},
{c:'8', p:'5',n:'QUEBRADA GRANDE',i:'2'},
{c:'2', p:'5',n:'QUEBRADA HONDA',i:'4'},
{c:'1', p:'3',n:'QUEBRADILLA',i:'11'},
{c:'6', p:'6',n:'QUEPOS',i:'1'},
{c:'10', p:'2',n:'QUESADA',i:'1'},
{c:'7', p:'1',n:'QUITIRRISI',i:'7'},
{c:'3', p:'3',n:'RIO AZUL',i:'8'},
{c:'3', p:'2',n:'RIO CUARTO',i:'6'},
{c:'6', p:'7',n:'RIO JIMENEZ',i:'4'},
{c:'4', p:'5',n:'RIO NARANJO',i:'4'},
{c:'19', p:'1',n:'RIO NUEVO',i:'10'},
{c:'1', p:'2',n:'RIO SEGUNDO',i:'9'},
{c:'8', p:'1',n:'RANCHO REDONDO',i:'6'},
{c:'2', p:'7',n:'RITA',i:'3'},
{c:'19', p:'1',n:'RIVAS',i:'4'},
{c:'12', p:'2',n:'RODRIGUEZ',i:'5'},
{c:'3', p:'1',n:'ROSARIO',i:'9'},
{c:'2', p:'7',n:'ROXANA',i:'4'},
{c:'2', p:'5',n:'SAMARA',i:'5'},
{c:'18', p:'1',n:'SANCHEZ',i:'3'},
{c:'8', p:'6',n:'SABALITO',i:'2'},
{c:'8', p:'2',n:'SABANA REDONDA',i:'5'},
{c:'15', p:'1',n:'SABANILLA',i:'2'},
{c:'1', p:'2',n:'SABANILLA',i:'7'},
{c:'12', p:'1',n:'SABANILLAS',i:'5'},
{c:'9', p:'1',n:'SALITRAL',i:'2'},
{c:'6', p:'1',n:'SALITRILLOS',i:'7'},
{c:'20', p:'1',n:'SAN ANDRES',i:'2'},
{c:'2', p:'1',n:'SAN ANTONIO',i:'2'},
{c:'3', p:'1',n:'SAN ANTONIO',i:'5'},
{c:'4', p:'1',n:'SAN ANTONIO',i:'8'},
{c:'10', p:'1',n:'SAN ANTONIO',i:'3'},
{c:'20', p:'1',n:'SAN ANTONIO',i:'6'},
{c:'1', p:'2',n:'SAN ANTONIO',i:'4'},
{c:'7', p:'4',n:'SAN ANTONIO',i:'1'},
{c:'2', p:'5',n:'SAN ANTONIO',i:'3'},
{c:'', p:'2',n:'San Carlos',i:'10'},
{c:'5', p:'1',n:'SAN CARLOS',i:'3'},
{c:'3', p:'1',n:'SAN CRISTÓBAL',i:'8'},
{c:'3', p:'3',n:'SAN DIEGO',i:'2'},
{c:'10', p:'1',n:'SAN FELIPE',i:'5'},
{c:'8', p:'1',n:'SAN FRANCISCO',i:'2'},
{c:'1', p:'4',n:'SAN FRANCISCO',i:'3'},
{c:'6', p:'4',n:'SAN FRANCISCO',i:'4'},
{c:'1', p:'1',n:'SAN FRANCISCO DE DOS RIOS',i:'6'},
{c:'6', p:'1',n:'SAN GABRIEL',i:'4'},
{c:'12', p:'1',n:'SAN IGNACIO',i:'1'},
{c:'', p:'4',n:'San Isidro',i:'6'},
{c:'20', p:'1',n:'SAN ISIDRO',i:'4'},
{c:'1', p:'2',n:'SAN ISIDRO',i:'6'},
{c:'2', p:'2',n:'SAN ISIDRO',i:'7'},
{c:'3', p:'2',n:'SAN ISIDRO',i:'2'},
{c:'5', p:'2',n:'SAN ISIDRO',i:'4'},
{c:'8', p:'3',n:'SAN ISIDRO',i:'2'},
{c:'6', p:'4',n:'SAN ISIDRO',i:'1'},
{c:'4', p:'6',n:'SAN ISIDRO',i:'3'},
{c:'19', p:'1',n:'SAN ISIDRO DE EL GENERAL',i:'1'},
{c:'14', p:'1',n:'SAN JERÓNIMO',i:'2'},
{c:'6', p:'2',n:'SAN JERÓNIMO',i:'5'},
{c:'2', p:'6',n:'SAN JERÓNIMO',i:'5'},
{c:'8', p:'4',n:'SAN JOAQUIN',i:'1'},
{c:'14', p:'2',n:'SAN JORGE',i:'4'},
{c:'1', p:'2',n:'san josé',i:'2'},
{c:'3', p:'2',n:'san josé',i:'3'},
{c:'6', p:'2',n:'san josé',i:'3'},
{c:'6', p:'4',n:'san josé',i:'2'},
{c:'2', p:'4',n:'san josé DE LA MONTAÑA',i:'6'},
{c:'13', p:'2',n:'san josé o PIZOTE',i:'3'},
{c:'', p:'',n:'san josé',i:'1'},
{c:'', p:'1',n:'san josé',i:'1'},
{c:'10', p:'1',n:'SAN JOSECITO',i:'2'},
{c:'5', p:'4',n:'SAN JOSECITO',i:'2'},
{c:'13', p:'1',n:'SAN JUAN',i:'1'},
{c:'2', p:'2',n:'SAN JUAN',i:'3'},
{c:'6', p:'2',n:'SAN JUAN',i:'6'},
{c:'8', p:'2',n:'SAN JUAN',i:'2'},
{c:'3', p:'3',n:'SAN JUAN',i:'3'},
{c:'4', p:'4',n:'SAN JUAN',i:'3'},
{c:'7', p:'5',n:'SAN JUAN',i:'3'},
{c:'3', p:'1',n:'SAN JUAN DE DIOS',i:'3'},
{c:'16', p:'1',n:'SAN JUAN DE MATA',i:'3'},
{c:'2', p:'6',n:'SAN JUAN GRANDE',i:'2'},
{c:'5', p:'1',n:'SAN LORENZO',i:'2'},
{c:'16', p:'1',n:'SAN LUIS',i:'4'},
{c:'5', p:'1',n:'SAN MARCOS',i:'1'},
{c:'', p:'2',n:'San Mateo',i:'4'},
{c:'4', p:'2',n:'SAN MATEO',i:'1'},
{c:'3', p:'1',n:'SAN MIGUEL',i:'2'},
{c:'6', p:'2',n:'SAN MIGUEL',i:'2'},
{c:'3', p:'4',n:'SAN MIGUEL',i:'3'},
{c:'6', p:'5',n:'SAN MIGUEL',i:'3'},
{c:'1', p:'3',n:'SAN NICOLAS',i:'4'},
{c:'', p:'4',n:'San Pablo',i:'9'},
{c:'16', p:'1',n:'SAN PABLO',i:'1'},
{c:'20', p:'1',n:'SAN PABLO',i:'1'},
{c:'2', p:'4',n:'SAN PABLO',i:'3'},
{c:'9', p:'4',n:'SAN PABLO',i:'1'},
{c:'9', p:'5',n:'SAN PABLO',i:'4'},
{c:'15', p:'1',n:'SAN PEDRO',i:'1'},
{c:'16', p:'1',n:'SAN PEDRO',i:'2'},
{c:'19', p:'1',n:'SAN PEDRO',i:'5'},
{c:'8', p:'2',n:'SAN PEDRO',i:'1'},
{c:'12', p:'2',n:'SAN PEDRO',i:'4'},
{c:'2', p:'4',n:'SAN PEDRO',i:'2'},
{c:'4', p:'4',n:'SAN PEDRO',i:'2'},
{c:'1', p:'1',n:'SAN RAFAEL',i:'12'},
{c:'2', p:'1',n:'SAN RAFAEL',i:'3'},
{c:'4', p:'1',n:'SAN RAFAEL',i:'5'},
{c:'11', p:'1',n:'SAN RAFAEL',i:'2'},
{c:'15', p:'1',n:'SAN RAFAEL',i:'4'},
{c:'1', p:'2',n:'SAN RAFAEL',i:'8'},
{c:'2', p:'2',n:'SAN RAFAEL',i:'6'},
{c:'8', p:'2',n:'SAN RAFAEL',i:'3'},
{c:'3', p:'3',n:'SAN RAFAEL',i:'4'},
{c:'7', p:'3',n:'SAN RAFAEL',i:'1'},
{c:'5', p:'4',n:'SAN RAFAEL',i:'1'},
{c:'2', p:'6',n:'SAN RAFAEL',i:'4'},
{c:'', p:'4',n:'San Rafael',i:'5'},
{c:'3', p:'1',n:'SAN RAFAEL ABAJO',i:'11'},
{c:'3', p:'1',n:'SAN RAFAEL ARRIBA',i:'4'},
{c:'2', p:'2',n:'SAN RAMÓN',i:'1'},
{c:'3', p:'3',n:'SAN RAMÓN',i:'7'},
{c:'', p:'2',n:'San Ramon',i:'2'},
{c:'3', p:'2',n:'SAN ROQUE',i:'4'},
{c:'2', p:'4',n:'SAN ROQUE',i:'4'},
{c:'1', p:'1',n:'SAN SEBASTIAN',i:'11'},
{c:'11', p:'1',n:'SAN SEBASTIAN',i:'1'},
{c:'14', p:'1',n:'SAN VICENTE',i:'1'},
{c:'3', p:'4',n:'SAN VICENTE',i:'2'},
{c:'8', p:'6',n:'SAN VITO',i:'1'},
{c:'', p:'1',n:'Santa Ana',i:'9'},
{c:'9', p:'1',n:'SANTA ANA',i:'1'},
{c:'', p:'4',n:'Santa Bárbara',i:'4'},
{c:'4', p:'4',n:'SANTA BARBARA',i:'1'},
{c:'10', p:'5',n:'SANTA CECILIA',i:'2'},
{c:'', p:'5',n:'Santa Cruz',i:'3'},
{c:'20', p:'1',n:'SANTA CRUZ',i:'5'},
{c:'5', p:'3',n:'SANTA CRUZ',i:'4'},
{c:'3', p:'5',n:'SANTA CRUZ',i:'1'},
{c:'10', p:'5',n:'SANTA ELENA',i:'4'},
{c:'2', p:'4',n:'SANTA LUCIA',i:'5'},
{c:'17', p:'1',n:'SANTA MARIA',i:'1'},
{c:'9', p:'5',n:'SANTA RITA',i:'2'},
{c:'5', p:'3',n:'SANTA ROSA',i:'9'},
{c:'7', p:'3',n:'SANTA ROSA',i:'5'},
{c:'3', p:'4',n:'SANTA ROSA',i:'6'},
{c:'8', p:'5',n:'SANTA ROSA',i:'4'},
{c:'5', p:'3',n:'SANTA TERESITA',i:'5'},
{c:'4', p:'1',n:'SANTIAGO',i:'1'},
{c:'2', p:'2',n:'SANTIAGO',i:'2'},
{c:'7', p:'2',n:'SANTIAGO',i:'4'},
{c:'2', p:'3',n:'SANTIAGO',i:'2'},
{c:'5', p:'4',n:'SANTIAGO',i:'3'},
{c:'', p:'4',n:'Santo Domingo',i:'3'},
{c:'4', p:'4',n:'SANTO DOMINGO',i:'5'},
{c:'3', p:'4',n:'SANTO TOMAS',i:'5'},
{c:'', p:'4',n:'Sarapiquí',i:'10'},
{c:'1', p:'2',n:'SARAPIQUI',i:'14'},
{c:'11', p:'2',n:'SARAPIQUI',i:'4'},
{c:'12', p:'2',n:'SARCHI NORTE',i:'1'},
{c:'12', p:'2',n:'SARCHI SUR',i:'2'},
{c:'5', p:'5',n:'SARDINAL',i:'3'},
{c:'6', p:'6',n:'SAVEGRE',i:'2'},
{c:'5', p:'6',n:'SIERPE',i:'3'},
{c:'7', p:'5',n:'SIERRA',i:'2'},
{c:'', p:'7',n:'Siquirres',i:'3'},
{c:'3', p:'7',n:'SIQUIRRES',i:'1'},
{c:'4', p:'7',n:'SIXAOLA',i:'2'},
{c:'7', p:'1',n:'TABARCIA',i:'3'},
{c:'3', p:'2',n:'TACARES',i:'5'},
{c:'', p:'7',n:'Talamanca',i:'4'},
{c:'3', p:'5',n:'TAMARINDO',i:'9'},
{c:'1', p:'2',n:'TAMBOR',i:'12'},
{c:'11', p:'2',n:'TAMBOR',i:'2'},
{c:'6', p:'1',n:'TARBACA',i:'2'},
{c:'', p:'1',n:'Tarrazo',i:'5'},
{c:'5', p:'3',n:'TAYUTIC',i:'8'},
{c:'4', p:'7',n:'TELIRE',i:'4'},
{c:'3', p:'5',n:'TEMPATE',i:'4'},
{c:'', p:'1',n:'Tibás',i:'13'},
{c:'1', p:'3',n:'TIERRA BLANCA',i:'8'},
{c:'8', p:'5',n:'TIERRAS MORENAS',i:'6'},
{c:'', p:'5',n:'Tilarán',i:'8'},
{c:'8', p:'5',n:'TILARAN',i:'1'},
{c:'18', p:'1',n:'TIRRASES',i:'4'},
{c:'8', p:'3',n:'TOBOSI',i:'3'},
{c:'12', p:'2',n:'TORO AMARILLO',i:'3'},
{c:'5', p:'3',n:'TRES EQUIS',i:'10'},
{c:'3', p:'3',n:'TRES RIOS',i:'1'},
{c:'8', p:'5',n:'TRONADORA',i:'3'},
{c:'4', p:'3',n:'TUCURRIQUE',i:'2'},
{c:'5', p:'3',n:'TUIS',i:'7'},
{c:'3', p:'4',n:'TURES',i:'7'},
{c:'1', p:'2',n:'TURRUCARES',i:'11'},
{c:'11', p:'2',n:'TURRUCARES',i:'1'},
{c:'', p:'3',n:'Turrialba',i:'5'},
{c:'5', p:'3',n:'TURRIALBA',i:'1'},
{c:'', p:'1',n:'Turrubares',i:'16'},
{c:'1', p:'4',n:'ULLOA',i:'4'},
{c:'', p:'2',n:'Upala',i:'13'},
{c:'13', p:'2',n:'UPALA',i:'1'},
{c:'1', p:'1',n:'URUCA',i:'7'},
{c:'9', p:'1',n:'URUCA',i:'4'},
{c:'', p:'1',n:'Vásquez de Coronado',i:'11'},
{c:'1', p:'7',n:'VALLE LA ESTRELLA',i:'2'},
{c:'', p:'2',n:'Valverde Vega',i:'12'},
{c:'1', p:'4',n:'VARABLANCA',i:'5'},
{c:'3', p:'5',n:'VEINTISIETE DE ABRIL',i:'3'},
{c:'10', p:'2',n:'VENADO',i:'10'},
{c:'10', p:'2',n:'VENECIA',i:'5'},
{c:'3', p:'6',n:'VOLCAN',i:'2'},
{c:'2', p:'2',n:'VOLIO',i:'10'},
{c:'6', p:'1',n:'VUELTA DE JORCO',i:'3'},
{c:'13', p:'2',n:'YOLILLAL',i:'7'},
{c:'2', p:'2',n:'ZAPOTAL',i:'12'},
{c:'9', p:'5',n:'ZAPOTAL',i:'3'},
{c:'1', p:'1',n:'ZAPOTE',i:'5'},
{c:'1', p:'2',n:'ZAPOTE',i:'16'},
{c:'11', p:'2',n:'ZAPOTE',i:'6'},
{c:'7', p:'2',n:'ZARAGOZA',i:'2'},
{c:'', p:'2',n:'Zarcero',i:'11'}], 
function(i, c) {
	c.name = titleCase(c.n);
	c.iso2 = c.i;
	c.id = c.i;
	c.idProvincia = c.p; 
	c.idCanton = c.c;
	delete c.n;
	delete c.i;
}
);

function titleCase(str) {
	return str.toLowerCase().split(' ').map(function(word) {
	return word.replace(word[0], word[0].toUpperCase());
	}).join(' ');
}

function getLocation(defaultSelected, provinciaSelected, cantonSelected, noResults) {
	selected="";

	if(provinciaSelected===undefined) {
		provinciaSelected="";
	} 
	if(cantonSelected===undefined) {
		cantonSelected="";
	}
	if(defaultSelected===undefined) {
		defaultSelected="1";
	} else {
		defaultSelected=parseInt(defaultSelected);
	}

	allProvincias
	.filter(
		(item) => {
			if(item.idProvincia==provinciaSelected && item.idCanton==cantonSelected) {
				return 1;
			}
		}
	)
	.sort(
		(a,b) => {
			return a.name.localeCompare(b.name)
		}
	)
	.map(
	(item) => {
			if (item.id==defaultSelected) {
				selected += '<option selected value="'+ item.id + '">' + item.name + '</option>';
			} else {
				selected += '<option value="'+ item.id + '">' + item.name + '</option>';
			}
		}
	);
	
	if (selected==="") {
		selected='<option value="-1">'+noResults+'</option>';
	}

	return selected;
}

function getPostal() {
	document.getElementById(idProvinciaInput).value = $("select#"+idProvincia).children(":selected").text().toString().trim();
	document.getElementById(idCantonInput).value = $("select#"+idCanton).children(":selected").text().toString().trim();
	document.getElementById(idDistritoInput).value = $("select#"+idDistrito).children(":selected").text().toString().trim();

	postal_code=$("select#"+idProvincia).children(":selected").val().toString().trim() + ("00"+$("select#"+idCanton).children(":selected").val().toString().trim()).slice(-2) + ("00"+ $("select#"+idDistrito).children(":selected").val().toString().trim()).slice(-2);
	document.getElementById(idPostal).value = postal_code.toString();
}

function setLocalizationSelects(_idProvincia,_idCanton,_idDistrito,_idPostal) {

	noProvincia="Elija una provincia";
	noCanton="Elija un cantón";

	idProvinciaInput=_idProvincia;
	idCantonInput=_idCanton;
	idDistritoInput=_idDistrito;

	idProvincia=_idProvincia+"_select";
	idCanton=_idCanton+"_select";
	idDistrito=_idDistrito+"_select";
	idPostal=_idPostal;

	if ( $("select#"+_idProvincia).attr('id') === undefined || $("select#"+_idProvincia).attr('id') === undefined || $("select#"+_idProvincia).attr('id') === undefined ) {
		return;
	}

	$("select#"+_idProvincia).attr('id',idProvincia);
	$("select#"+_idCanton).attr('id',idCanton);
	$("select#"+_idDistrito).attr('id',idDistrito);

	$("select#"+idProvincia).attr('name',idProvincia);
	$("select#"+idCanton).attr('name',idCanton);
	$("select#"+idDistrito).attr('name',idDistrito);

	$("select#"+idProvincia).closest("form")
	.append('<input type="hidden" name="'+idProvinciaInput+'" id="'+idProvinciaInput+'" value="" /><input type="hidden" name="'+idCantonInput+'" id="'+idCantonInput+'" value="" /><input type="hidden" name="'+idDistritoInput+'" id="'+idDistritoInput+'" value="" />');

	$("select#"+idProvincia).append(getLocation($("#"+idPostal).val().substr(0,1)));
	$("select#"+idCanton).append(getLocation($("#"+idPostal).val().substr(1,2),$("select#"+idProvincia).children(":selected").val(),undefined, "Elija un cantón"));
	$("select#"+idDistrito).append(getLocation($("#"+idPostal).val().substr(3,2),$("select#"+idProvincia).children(":selected").val(), $("select#"+idCanton).children(":selected").val(), noProvincia));
	getPostal(idPostal);

	$("select#"+idProvincia).change(function(){
		$("select#"+idCanton).html(getLocation(undefined,$(this).children(":selected").val()));
		$("select#"+idDistrito).html(
			getLocation(undefined,$(this).children(":selected").val(),
			"1",noCanton)
		);
		getPostal(idPostal);
	});

	$("select#"+idCanton).change(function(){
		$("select#"+idDistrito).html(
			getLocation(
				undefined,
				$("select#"+idProvincia).children(":selected").val(),
				$(this).children(":selected").val()
			)
		); 
		getPostal(idPostal);
	});

	$("select#"+idDistrito).change(function(){
		getPostal(idPostal);
	});

}

$(document).ready(function() {
	setLocalizationSelects("provincia","canton","distrito","codigo");
});
