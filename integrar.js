function initMap() {
    // Inicializar el mapa
    var map = L.map('map').setView([19.289199296614697, -99.67060281359862],8 ); // Coordenadas de Ciudad de México
  
    // Cargar un mapa base (OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 20,
    }).addTo(map);
  
    // Crear un grupo de capas para los marcadores
    var markers = L.layerGroup().addTo(map);
  
    // Datos de los puntos
    var puntos = [
      {
        lat: 19.9581307764223,
        lng: -99.8418839459458,
        region: "ACAMBAY",
        municipio: "JILOTEPEC",
        municipiosAtiende: "Acambay ",
        horario: "09:00 a 18:00 Horas",
        direccion: "Villa De, Francisco Sarabia 9, San Miguel Acambay, 50300 Acambay, Méx.",
         
      },
      {
        lat: 19.6152574468861,
        lng: -98.9463330822171,
        region: "ACOLMAN",
        municipio: "TECAMAC",
        municipiosAtiende: "Acolman",
        horario: "09:00 a 18:00 Horas",
        direccion: "Av. Tabasco # 836. Colonia Anáhuac Primera sección, Tepexpan, cp. 55884, Acolman, Estado de México.",
   

      },
      {
        lat: 20.1025542882311,
        lng: -99.8240732994378,
        region: "ACULCO",
        municipio: "JILOTEPEC",
        municipiosAtiende: "Aculco, Polotitlán (por cierre)",
        horario: "09:00 a 18:00 Horas",
        direccion: "Prolongación Mariano Matamoros, Aculco Centro, Estado de México.",


      },
      {
        lat: 19.3690607514947,
        lng: -99.7586698630399,
        region: "ALMOLOYA DE JUAREZ",
        municipio: "TOLUCA",
        municipiosAtiende: "Almoloya de Juárez",
        horario: "09:00 a 18:00 Horas",
        direccion: "Av. José María Morelos s/n. Col. Centro, C. P. 50900, Villa de Almoloya de Juárez, México. Palacio Municipal del H. Ayuntamiento de Almoloya de Juárez Segunda planta.",

      },
      {
        lat: 19.1606085663799,
        lng: -99.489193058893,
        region: "ALMOLOYA DEL RIO",
        municipio: "TOLUCA",
        municipiosAtiende: "Atizapan Santa Cruz, Capulhuac, San Mateo Atenco",
        horario: "09:00 a 16:00 Horas",
        direccion: "Calle Heriberto Enriquez, Manzana 039, Almoloya del Rio, 52540 Almoloya del Río, Méx.",

      },
      {
        lat: 19.133697997896,
        lng: -98.774098700001,
        region: "AMECAMECA CIUDAD MUJERES",
        municipio: "CHALCO",
        municipiosAtiende: "Atlautla, Ayapango, Ozumba, Tepetlixpa, Juchitepec.",
        horario: "09:00 a 18:00 Horas",
        direccion: "Calle Paseo de los Volcanes Sin número, C.P. 56903, Amecameca, Estado de México",
      },
      {
        lat: 19.1418413330976,
        lng: -98.7731296601855,
        region: "AMECAMECA CJM",
        municipio: "CHALCO",
        municipiosAtiende: "Atlautla, Ayapango, Ozumba, Tepetlixpa, Juchitepec.",
        horario: "24x48 HRS",
        direccion: "Carretera Federal México Cuautla Km. 58.5, Col. San Miguel Panoaya, C.P. 56900, Amecameca, Estado de México.",

      },
      {
        lat: 19.586384788689,
        lng: -98.9462763399473,
        region: "ATENCO",
        municipio: "TEXCOCO",
        municipiosAtiende: "Atenco, Chicoloapan",
        horario: "09:00 a 18:00 Horas",
        direccion: "Calle Hidalgo S/N col Centro Santa Isabel Ixtapan CP. 56300, entre 20 de noviembre e Independencia, Municipio de Atenco, Estado de México.",
        
      },
      {
        lat: 19.5629213492538,
        lng: -99.2485109034661,
        region: "ATIZAPAN DE ZARAGOZA",
        municipio: "TLALNEPANTLA",
        municipiosAtiende: "Atizapán De Zaragoza",
        horario: "09:00 a 18:00 Horas",
        direccion: "Avenida Hidalgo, # 3, colonia Atizapán centro, CP 52900, Municipio de Atizapán de Zaragoza, Estado de México.",

      },
      {
        lat: 19.1766858322441,
        lng: -99.4880019165713,
        region: "ATIZAPAN SANTA CRUZ",
        municipio: "LERMA",
        municipiosAtiende: "Almoloya del Río. Atizapan Santa Cruz",
        horario: "09:00 a 18:00 Horas",
        direccion: "Plaza María Pliego, 5 de mayo Pte., Magisterial, 52500 Santa Cruz Atizapán, México.",

      },
      {
        lat: 19.7907142159412,
        lng: -99.8754582882954,
        region: "ATLACOMULCO",
        municipio: "IXTLAHUACA",
        municipiosAtiende: "Atlacomulco",
        horario: "09:00 a 18:00 Horas",
        direccion: "Centro de Servicios Administrativos Ing. Ignacio Ruiz Galindo Edificio D puerta 201, Col. FOVISSSTE Atlacomulco, Estado De México C.P. 50454.",
        
      },
      {
        lat: 19.2081315491337,
        lng: -99.4680030041576,
        region: "CAPULHUAC",
        municipio: "LERMA",
        municipiosAtiende: "Capulhuac",
        horario: "09:00 a 18:00 Horas",
        direccion: "Camino a la deportiva SN, Capulhuac Estado de México CP 52700", 
      },
      {
        lat: 19.2624624155118,
        lng: -98.8985376913222,
        region: "CHALCO",
        municipio: "CHALCO",
        municipiosAtiende: "Chalco, Cocotitlán",
        horario: "09:00 a 18:00 Horas",
        direccion: "Calle Enseñanza Técnica s/n, Altos del Mercado Acapol, Col. Centro, 56600, Municipio de Chalco de Díaz Covarrubias, Estado de México.",
        
      },
      {
        lat: 19.8129475841694,
        lng: -99.5277242809195,
        region: "CHAPA DE MOTA",
        municipio: "JILOTEPEC",
        municipiosAtiende: "Chapa de Mota, Villa del Carbón",
        horario: "09:00 a 18:00 Horas",
        direccion: "Avenida Ejército del Trabajo s/n. Colonia Centro Chapa de Mota, Estado de México.",
         
      },
      {
        lat: 19.2056307860414,
        lng: -99.5516919472278,
        region: "CHAPULTEPEC",
        municipio: "LERMA",
        municipiosAtiende: "Chapultepec",
        horario: "09:00 a 18:00 Horas",
        direccion: "Avenida de los Constituyentes sin número, Colonia del Campesino C.P, 52253 Chapultepec, Estado de México.",
      },
      {
        lat: 19.4193254438337,
        lng: -98.9767311607436,
        region: "CHIMALHUACAN MERCADO",
        municipio: "TEXCOCO",
        municipiosAtiende: "Chimalhuacán",
        horario: "09:00 a 18:00 Horas",
        direccion: "Calle Villa Victoria Lt 16, Mz 401 Col. Canteros, CP 56356, Municipio de Chimalhuacán, Estado de México",
        
      },
      {
        lat: 19.4173529385253,
        lng: -98.9836314350101,
        region: "CHIMALHUACAN UEPAVYG",
        municipio: "TEXCOCO",
        municipiosAtiende: "Chimalhuacán",
        horario: "09:00 a 18:00 Horas",
        direccion: "C. Gregorio Melero s/n, Barrio Saraperos, Cp. 56353, Chimalhuacán, Estado de México.",
        
      },
      {
        lat: 19.5599784984212,
        lng: -98.8881815500608,
        region: "CHINCONCUAC",
        municipio: "TEXCOCO",
        municipiosAtiende: "Chiconcuac, Chiautla",
        horario: "09:00 a 18:00 Horas",
        direccion: "Avenida del trabajo S/N, Col. las Joyas, CP. 52270, frente al Panteón Municipal, Municipio de Chiconcuac, Estado de México.",
        
      },
      {
        lat: 19.6902243156328,
        lng: -99.1680019993765,
        region: "CUAUTITLAN   ",
        municipio: "TULTITLAN",
        municipiosAtiende: "Cuautitlán, Melchor Ocampo (por cierre), Teoloyucan",
        horario: "09:00 a 18:00 Horas",
        direccion: "Entre calle Arturo Montiel Rojas y Calle Galaxia s/n, Fraccionamiento Galaxia, CP. 54840, municipio de Cuautitlán México, Estado de México.",
        
      },
      {
        lat: 19.6543073774277,
        lng: -99.2085744649182,
        region: "CUAUTITLAN CJM 24X 48",
        municipio: "TLALNEPANTLA",
        municipiosAtiende: "Cuautitlán Izcalli CJM",
        horario: "24x48",
        direccion: "Rotterdam 9, Centro Urbano, Municipio de Cuautitlán Izcalli, Estado de México C.P 54700.",
        
      },
      {
        lat: 19.3078288494432,
        lng: -100.143444495101,
        region: "DONATO GUERRA",
        municipio: "VALLE BRAVO",
        municipiosAtiende: "Donato Guerra",
        horario: "09:00 a 17:00 Horas",
        direccion: "Calle Allende, sin número, Colonia Centro, Donato Guerra, Estado de México",
        
      },
      {
        lat: 19.570678272744,
        lng: -99.0436350177885,
        region: "ECATEPEC CAIM",
        municipio: "ECATEPEC",
        municipiosAtiende: "Coacalco (por cierre), Ecatepec",
        horario: "09:00 a 18:00 Horas",
        direccion: "Av. Morelos S/N, Col. Sta. María Tulpetlac, 55400 Municipio de Ecatepec de Morelos, Estado de México.",
        
      },
      {
        lat: 19.595146557826,
        lng: -99.0514961600315,
        region: "ECATEPEC CJM",
        municipio: "ECATEPEC",
        municipiosAtiende: "Coacalco (por cierre), Ecatepec",
        horario: "Turnos de 24x48",
        direccion: "Calle Noche Buena S/N Esq. Ópalo Col. Chulavista, C.P 55030, Municipio de Ecatepec de Morelos Estado de México.",
        
      },
      {
        lat: 19.5572417318589,
        lng: -99.0722406641688,
        region: "ECATEPEC UNIDAD",
        municipio: "ECATEPEC",
        municipiosAtiende: "Ecatepec",
        horario: "09:00 a 18:00 Horas",
        direccion: "Calle Labradores no. 17, Colonia Coanalco Buenavista, C.P. 55310, Ecatepec de Morelos, Estado de México",
        
      },
      {
        lat: 18.9620513503147,
        lng: -98.7452905006012,
        region: "ECATZINGO",
        municipio: "CHALCO",
        municipiosAtiende: "Ecatzingo",
        horario: "09:00 a 18:00 Horas",
        direccion: "Calle de las Cruces, S/N, Barrio San Miguel C.P. 56990, Municipio de Ecatzingo, Estado de México.",
        
      },
      {
        lat: 19.8021376384413,
        lng: -100.13230489876,
        region: "EL ORO",
        municipio: "IXTLAHUACA",
        municipiosAtiende: "El Oro",
        horario: "09:00 a 17:00 Horas",
        direccion: "Av. Juárez s/n, Col. Centro, municipio de El Oro, Estado de México",
        
      },
      {
        lat: 19.8414704618792,
        lng: -99.2338412547629,
        region: "HUEHUETOCA",
        municipio: "ZUMPANGO",
        municipiosAtiende: "Coyotepec, Huehuetoca",
        horario: "09:00 a 18:00 Horas",
        direccion: "Paseo de los Ahuehuetes 54694 Santa Teresa, Municipio de Huehuetoca, Estado de México. ",
        
      },
      {
        lat: 19.907079040568,
        lng: -99.0783492099989,
        region: "HUEYPOXTLA",
        municipio: "ZUMPANGO",
        municipiosAtiende: "Hueypoxtla",
        horario: "09:00 a 18:00 Horas",
        direccion: "Plaza principal s/n, Colonia Centro, CP. 55670, Municipio de Hueypoxtla, Estado de México.",
        
      },
      {
        lat: 19.3144287944523,
        lng: -98.8834612754465,
        region: "IXTAPALUCA",
        municipio: "IXTAPALUCA",
        municipiosAtiende: "Ixtapaluca",
        horario: "09:00 a 18:00 Horas",
        direccion: "Boulevard Cuauhtémoc No. 2, Centro, CP.56530, municipio de Ixtapaluca, Estado de México.",
        
      },
      {
        lat: 18.8198104479786,
        lng: -99.6691910588733,
        region: "IXTAPAN DE LA SAL",
        municipio: "TENANCINGO",
        municipiosAtiende: "Almoloya de Alquisiras, Malinalco, Ixtapan de la Sal, Tonatico, Zumpahuacan, Zacualpan",
        horario: "09:00 a 18:00 Horas",
        direccion: "Carretera Ixtapan de la Sal Tonatico K.4.6 colonia el salitre Servicios Administrativos.",
        
      },
      {
        lat: 19.5649301394122,
        lng: -99.7668932951433,
        region: "IXTLAHUACA",
        municipio: "IXTLAHUACA",
        municipiosAtiende: "Ixtlahuaca, Jocotitlán",
        horario: "09:00 a 18:00 Horas",
        direccion: "Calle San Sebastián Lerdo de Tejada, Casa No. 6, Manzana 2, Col. Centro, Ixtlahuaca, Estado de México.",
        
      },
      {
        lat: 19.9536224913018,
        lng: -99.5339198087058,
        region: "JILOTEPEC",
        municipio: "JILOTEPEC",
        municipiosAtiende: "Jilotepec, Soyaniquilpan de Juárez",
        horario: "09:00 a 18:00 Horas",
        direccion: "Avenida Vicente Guerrero Oriente, Col. Centro, Jilotepec, Estado de México.",
        
      },
      {
        lat: 19.586620923813,
        lng: -99.6705609111633,
        region: "JIQUIPILCO",
        municipio: "IXTLAHUACA",
        municipiosAtiende: "Jiquipilco",
        horario: "09:00 a 18:00 Horas",
        direccion: "Parque Nueva Ampliación. Loma de San Felipe S., Loma del Sitio, Jiquipilco, Estado de México.",
        
      },
      {
        lat: 19.3540092549215,
        lng: -98.9448894000107,
        region: "LA PAZ CIUDAD MUJERES",
        municipio: "IXTAPALUCA",
        municipiosAtiende: "La Paz",
        horario: "09:00 a 18:00 Horas",
        direccion: "Circuito Directo a Plaza Estado de México “Soraya Jiménez”, Calle Morelos Manzana # 048, El Pino, 56507, Los Reyes Acaquilpan, Estado de México.",
        
      },
      {
        lat: 19.2871947691161,
        lng: -99.5146390171455,
        region: "LERMA",
        municipio: "LERMA",
        municipiosAtiende: "Lerma, Ocoyoacac",
        horario: "09:00 a 18:00 Horas",
        direccion: "Calle Belisario Domínguez, No. 5, primer piso, Col. La Mota, Municipio de Lerma, Estado de México.",
        
      },
      {
        lat: 19.2525556402134,
        lng: -99.6350641877009,
        region: "METEPEC",
        municipio: "TOLUCA",
        municipiosAtiende: "Calimaya, Metepec, Mexicaltzingo",
        horario: "09:00 a 18:00 Horas",
        direccion: "Progreso #115, norte local 1. Col. Luisa Isabel Campos Jiménez Cantú, Municipio de Metepec, Estado de México.",
        
      },
      {
        lat: 19.7775272577088,
        lng: -99.6684165814659,
        region: "MORELOS",
        municipio: "JILOTEPEC",
        municipiosAtiende: "Morelos, Timilpan",
        horario: "09:00 a 18:00 Horas",
        direccion: "Ricardo Blanco Rodríguez 223, Acotzilapan, San Bartolo Morelos, México.",
        
      },
      {
        lat: 19.486919143143,
        lng: -99.2428403495427,
        region: "NAUCALPAN DE JUAREZ",
        municipio: "NAUCALPAN",
        municipiosAtiende: "Huixquilucan, Jilotzingo (por cierre), Naucalpan",
        horario: "09:00 a 18:00 Horas",
        direccion: "Paseo de los Mexicas 63 Puerta X, Santa Cruz Acatlán, CP.53150 Naucalpan de Juárez, Estado de México.",
        
      },
      {
        lat: 19.4025714428196,
        lng: -98.9999462214873,
        region: "NEZAHUALCOYOTL",
        municipio: "NEZAHUALCOYOTL",
        municipiosAtiende: "Nezahualcóyotl",
        horario: "09:00 a 18:00 Horas",
        direccion: "C. Rielera 181, Colonia Benito Juárez Secc. Aurora, C.P. 57000, Municipio de Nezahualcóyotl, Estado de México.",
        
      },
      {
        lat: 19.4089207740822,
        lng: -99.0173331291633,
        region: "NEZAHUALCOYOTL 24X48",
        municipio: "NEZAHUALCOYOTL",
        municipiosAtiende: "Nezahualcóyotl",
        horario: "24x48",
        direccion: "C. Caballo Bayo 142, Benito Juárez, 57000 Cdad. Nezahualcóyotl, Méx.",
        
      },
      {
        lat: 19.6271691071191,
        lng: -99.3192394333222,
        region: "NICOLAS ROMERO",
        municipio: "NICOLAS ROMERO",
        municipiosAtiende: "Nicólas Romero",
        horario: "09:00 a 18:00 Horas",
        direccion: "Av. 16 de Septiembre 145, Himno Nacional, 54400 Cdad. Nicolás Romero, Méx.",
        
      },
      {
        lat: 18.9913184999991,
        lng: -99.4256368411027,
        region: "OCUILAN",
        municipio: "TENANCINGO",
        municipiosAtiende: "Malinalco, Ocuilan",
        horario: "09:00 a 16:00 Horas",
        direccion: "Sta. Mónica 4, Ocuilan, 52484 Santa Mónica, Méx.",
        
      },
      {
        lat: 19.6997878999994,
        lng: -98.7578106288297,
        region: "OTUMBA",
        municipio: "TECAMAC",
        municipiosAtiende: "Axapusco (por cierre), Otumba, Nopaltepec (por cierre)",
        horario: "09:00 a 18:00 Horas",
        direccion: "Plaza de La Constitución s/n, CP. 55900, Col. Centro, Otumba de Gómez Farías, México. (Segundo piso dentro del palacio Municipal) ",
        
      },
      {
        lat: 19.6264661472146,
        lng: -99.3201028103063,
        region: "PUERTA VIOLETA ",
        municipio: "NICOLAS ROMERO",
        municipiosAtiende: "Isidro Fabela (por cierre), Nicolás Romero",
        horario: "24x48",
        direccion: "Calle Luis Donaldo Colosio # 8, Colonia Zaragoza, Municipio de Nicolás Romero, CP.54457, Estado de México.",
      },
      {
        lat: 19.1480436592083,
        lng: -99.5736600774465,
        region: "RAYON",
        municipio: "TENANCINGO",
        municipiosAtiende: "Rayón, San Antonio la Isla",
        horario: "09:00 a 18:00 Horas",
        direccion: "Plaza 22 de octubre, Ignacio López Rayón Sur, Santa María Rayón Centro, Guadalupe, 52360 Santa María Rayón, México. ",
        
      },
      {
        lat: 19.713966,
        lng: -99.954308,
        region: "SAN FELIPE DEL PROGRESO",
        municipio: "IXTLAHUACA",
        municipiosAtiende: "San Felipe Del Progreso",
        horario: "09:00 a 18:00 Horas",
        direccion: "Calle 5 de mayo, Interior 113, Col. Centro.",
        
      },
      {
        lat: 19.6623018555177,
        lng: -100.158278172387,
        region: "SAN JOSE DEL RINCON",
        municipio: "IXTLAHUACA",
        municipiosAtiende: "San José Del Rincón",
        horario: "09:00 a 18:00 Horas",
        direccion: "Edificio de Servicios Administrativos, Av. Benito Juárez, San José del Rincón Centro Estado de México. C.P. 56660.",
        
      },
      {
        lat: 19.2644628078776,
        lng: -99.548053171166,
        region: "SAN MATEO ATENCO CIUDAD MUJERES",
        municipio: "TOLUCA",
        municipiosAtiende: "San Mateo Atenco",
        horario: "09:00 a 18:00 Horas",
        direccion: "Calle Miguel Hidalgo & Niño Perdido, C.P. 52104, Colonia Santa María la Asunción, Municipio de San Mateo Atenco, Estado de México.",
        
      },
      {
        lat: 19.6945766792587,
        lng: -98.9839805662612,
        region: "TECAMAC",
        municipio: "TECAMAC",
        municipiosAtiende: "Tecámac",
        horario: "09:00 a 18:00 Horas",
        direccion: "Carretera libre México-Pachuca Km 36 Col. San Martin Azcatepec, CP. 55749, municipio de Tecámac de Felipe Villanueva, estado de México.",
        
      },
      {
        lat: 18.905719831244,
        lng: -100.153440595613,
        region: "TEJUPILCO",
        municipio: "TEJUPILCO",
        municipiosAtiende: "Amatepec, Luvianos, Tejupilco, Tlatlaya, Sultepec",
        horario: "09:00 a 18:00 Horas",
        direccion: "Palacio Municipal s/n Centro, 51400 Tejupilco de Hidalgo, México. ",
        
      },
      {
        lat: 19.82928044383,
        lng: -98.9038821220978,
        region: "TEMASCALAPA",
        municipio: "TECAMAC",
        municipiosAtiende: "Temascalapa",
        horario: "09:00 a 18:00 Horas",
        direccion: "Calle San Francisco s/n, Barrio de San Miguel, CP. 55980, Municipio de Temascalapa. Estado de México (dentro de DIF Temascalapa)",
        
      },
      {
        lat: 19.9145800695444,
        lng: -100.002011058895,
        region: "TEMASCALCINGO",
        municipio: "JILOTEPEC",
        municipiosAtiende: "Temascalcingo",
        horario: "09:00 a 16:00 Horas",
        direccion: "Calle Independencia 385, Temascalcingo, 50400 Temascalcingo de José María Velasco, Estado de México.",
        
      },
      {
        lat: 19.0443257322994,
        lng: -100.04080898834,
        region: "TEMASCALTEPEC",
        municipio: "VALLE BRAVO",
        municipiosAtiende: "Otzoloapan, San Simón de Guerrero, Temascaltepec, Texcaltitlán, Zacazonapan",
        horario: "09:00 a 16:30 Horas",
        direccion: "El Fortín No. 3, Col. Centro, C.P 51300, Municipio de Temascaltepec, Estado de México.",
        
      },
      {
        lat: 19.4699898323217,
        lng: -99.5948934009384,
        region: "TEMOAYA",
        municipio: "NICOLAS ROMERO",
        municipiosAtiende: "Temoaya",
        horario: "09:00 a 18:00 Horas",
        direccion: "Portal Ayuntamiento No. 103, Colonia Centro, C.P.50850, Temoaya, Estado de México.",
        
      },
      {
        lat: 18.9628587385279,
        lng: -99.5760781435316,
        region: "TENANCINGO",
        municipio: "TENANCINGO",
        municipiosAtiende: "Tenancingo",
        horario: "09:00 a 18:00 Horas",
        direccion: "Calle Resiliencia s/n, Colonia 14 de Marzo, Tenancingo, Estado de México",
        
      },
      {
        lat: 19.1519671604422,
        lng: -98.8594697588733,
        region: "TENANGO DEL AIRE",
        municipio: "CHALCO",
        municipiosAtiende: "Juchitepec, Tenango del Aire, Temamatla, Tlalmanalco, Ayapango, Temamatla.",
        horario: "09:00 a 18:00 Horas",
        direccion: "Cam. Viejo a San Diego, 56780 Tenango del Aire, Méx.",
        
      },
      {
        lat: 19.1047686815264,
        lng: -99.5864167441772,
        region: "TENANGO DEL VALLE",
        municipio: "TENANCINGO",
        municipiosAtiende: "Joquicingo, Tenango del Valle",
        horario: "09:00 a 18:00 Horas",
        direccion: "Boulevard Narciso Bassols No. 102, Tenango del Valle, Estado de México (Dentro del edificio de servicios administrativos).",
        
      },
      {
        lat: 19.6864299999992,
        lng: -98.8716829999993,
        region: "TEOTIHUACAN",
        municipio: "TECAMAC",
        municipiosAtiende: "Teotihuacán, San Martín de las Piramides (por cierre)",
        horario: "09:00 a 18:00 Horas",
        direccion: "Calle Mariano Arista, no 1, col centro, Municipio de San Juan Teotihuacán de Arista, CP. 55801, Estado de México",
        
      },
      {
        lat: 19.5691627725593,
        lng: -98.8247680820817,
        region: "TEPETLAOXTOC",
        municipio: "TEXCOCO",
        municipiosAtiende: "Tepetlaoxtoc, Papalotla",
        horario: "09:00 a 18:00 Horas",
        direccion: "Calle Coacumulco s/n Esq. Quinatzin, Col. la Era C.P. 56070. Municipio de Tepetlaoxtoc, Estado de México.",
        
      },
      {
        lat: 19.7096514828392,
        lng: -99.2247957179054,
        region: "TEPOTZOTLAN",
        municipio: "ZUMPANGO",
        municipiosAtiende: "Tepotzotlán",
        horario: "09:00 a 17:00 Horas",
        direccion: "Calle Ejijo, Privada 18 Colonia San Martín, CP 54600, Municipio de Tepotzotlán, Estado de México",
        
      },
      {
        lat: 19.5055298097172,
        lng: -98.8833678507979,
        region: "TEXCOCO",
        municipio: "TEXCOCO",
        municipiosAtiende: "Texcoco",
        horario: "09:00 a 18:00 Horas",
        direccion: "Av. Juárez Sur, No. 404, Col. San Lorenzo, CP. 56120, Municipio de Texcoco, Estado de Mëxico",
        
      },
      {
        lat: 19.6065393310689,
        lng: -98.9065225276433,
        region: "TEZOYUCA",
        municipio: "TEXCOCO",
        municipiosAtiende: "Tezoyuca, Papalotla",
        horario: "09:00 a 17:00 Horas",
        direccion: "Avenida Vicente Valencia, barrio de la ascencion, Municipio de Tezoyuca",
        
      },
      {
        lat: 19.5234924355912,
        lng: -99.1116828239093,
        region: "TLALNEPANTLA C4",
        municipio: "TLALNEPANTLA",
        municipiosAtiende: "Tlanepantla de Baz",
        horario: "09:00 a 18:00 Horas",
        direccion: "Calz. Ticoman N° 1075, Industrial la Presa, CP. 54187, Tlalnepantla de Baz, Estado de México",
        
      },
      {
        lat: 19.5390195325516,
        lng: -99.1964477133966,
        region: "TLALNEPANTLA COMISARIA",
        municipio: "TLALNEPANTLA",
        municipiosAtiende: "Tlanepantla de Baz",
        horario: "09:00 a 18:00 Horas",
        direccion: "Avenida Ayuntamiento # 166, Tlalnepantla Centro, C.P 54000. Municipio de Tlalnepantla de Baz, Estado de México.",
        
      },
      {
        lat: 19.2984521027564,
        lng: -99.6686609588839,
        region: "TOLUCA CJM 24X48",
        municipio: "TOLUCA",
        municipiosAtiende: "Toluca de Lerdo",
        horario: "24x 48 horas",
        direccion: "Paseo Matlazincas 1100 Col. La Teresona C.P. 50040 Municipio de Toluca, Estado de México (entre calle 18 de marzo y calle Temascaltepec).",
        
      },
      {
        lat: 19.2891673,
        lng: -99.6705625999992,
        region: "TOLUCA HIDALGO",
        municipio: "TOLUCA",
        municipiosAtiende: "Toluca de Lerdo",
        horario: "09:00 a 18:00 Horas",
        direccion: "Avenida Miguel Hidalgo, No. 1031, Col. San Bernardino, Toluca Estado de México.",
        
      },
      {
        lat: 19.6661963999966,
        lng: -99.1344135355816,
        region: "TULTEPEC",
        municipio: "TULTITLAN",
        municipiosAtiende: "Tultepec",
        horario: "09:00 a 18:00 Horas",
        direccion: "Av. Toluca, Esq. Reforma Agraria s/n, Fraccionamiento el Dorado, Municipio de Tultepec, Estado de México.",
        
      },
      {
        lat: 19.6843049555246,
        lng: -99.0945402896114,
        region: "TULTITLAN",
        municipio: "TULTITLAN",
        municipiosAtiende: "Tultitlán",
        horario: "09:00 a 18:00 Horas",
        direccion: "Calle Prados del Centro s/n, Col. Morelos 3ra Secc. CP. 54930 San Pablo de las Salinas, municipio de Tultitlan, CP. 54930, Estado de México. ",
        
      },
      {
        lat: 19.200204307731,
        lng: -100.136558149679,
        region: "VALLE DE BRAVO",
        municipio: "VALLE BRAVO",
        municipiosAtiende: "Amanalco, Santo Tomás, Ixtapan del Oro, Valle de Bravo",
        horario: "09:00 a 18:00 Horas",
        direccion: "Calle Fray Gregorio Jiménez de la Cuenca, N° 5 Col. La Costera C.P. 51200, Valle de Bravo, Estado de México. (A un costado de vidriería Núñez, Planta alta de pinturas Osel).",
        
      },
      {
        lat: 19.3041394090484,
        lng: -98.9525904423291,
        region: "VALLE DE CHALCO",
        municipio: "IXTAPALUCA",
        municipiosAtiende: "Valle de Chalco",
        horario: "09:00 a 18:00 Horas",
        direccion: "Calle Músicos s/n, Col. El Agostadero, Valle de Chalco Solidaridad, CP. 56615, Estado de México.",
        
      },
      {
        lat: 18.9570841964579,
        lng: -99.6410009134849,
        region: "VILLA GUERRERO",
        municipio: "TENANCINGO",
        municipiosAtiende: "Coatepec Harinas (por cierre), Tenancingo (por cierre), Villa Guerrero",
        horario: "09:00 a 18:00 Horas",
        direccion: "Calle León Guzmán sur, sin número, Villa Guerrero, Estado de México",
        
      },
      {
        lat: 19.4418066520494,
        lng: -99.99497177236,
        region: "VILLA VICTORIA",
        municipio: "IXTLAHUACA",
        municipiosAtiende: "Villa de Allende, Villa Victoria",
        horario: "09:00 a 17:00 Horas",
        direccion: "Plaza principal Lázaro Cárdenas, planta baja Casa de Cultura. (A un costado del DIF municipal).",
        
      },
      {
        lat: 19.1840594626787,
        lng: -99.4143665030728,
        region: "XALATLACO",
        municipio: "LERMA",
        municipiosAtiende: "Texcalyacac, Tianguistenco, Xalatlaco",
        horario: "09:00 a 18:00 Horas",
        direccion: "Domicilio Conocido, San Bartolo, C.P. 52680 Municipio de Xalatlaco, Estado de México.",
        
      },
      {
        lat: 19.4022189921014,
        lng: -99.5354470006661,
        region: "XONACATLAN",
        municipio: "NICOLAS ROMERO",
        municipiosAtiende: "Otzolotepec, Xonacatlán",
        horario: "09:00 a 18:00 Horas",
        direccion: "Calle 16 de Septiembre Esquina Durango S/N 52060 Xonacatlán, México.",
        
      },
      {
        lat: 19.2840452436231,
        lng: -99.7331962288318,
        region: "ZINACANTEPEC",
        municipio: "TOLUCA",
        municipiosAtiende: "Zinacantepec",
        horario: "09:00 a 18:00 Horas",
        direccion: "Calle Benito Juárez No. 209, Centro 51354 San Miguel Zinacantepec, México 55.60 km.",
        
      },
      {
        lat: 19.7947300573196,
        lng: -99.0976694277641,
        region: "ZUMPANGO",
        municipio: "ZUMPANGO",
        municipiosAtiende: "Apaxco (por cierre), Jaltenco (por cierre),  Tequixquiac (por cierre), Tonanitla (por cierre), Zumpango",
        horario: "09:00 a 18:00 Horas",
        direccion: "Calla 5 de mayo, s/n, Col. San Lorenzo, CP. 55600, Municipio de Zumpango de Ocampo, Estado de México.",
        
      }
    ];
  
    // Función para crear un marcador
    function createMarker(punto) {
      var marker = L.marker([punto.lat, punto.lng], { icon: L.icon({ iconUrl: 'Logounidas.svg', iconSize: [25, 41], iconAnchor: [12, 41] }) })
        .bindPopup('<h3>' + punto.region + '</h3><p><strong>Región:</strong> ' + punto.municipio + '</p><p><strong>Municipios que atiende:</strong> ' + punto.municipiosAtiende + '</p><p><strong>Horario:</strong> ' + punto.horario + '</p><p><strong>Dirección:</strong> ' + punto.direccion + '</p><img src="' + punto.imageUrl + '" alt="' + punto.region + '" style="width: 100px; height: auto;">' + 
                   '<a href="https://www.google.com/maps/dir/?api=1&destination=' + punto.lat + ',' + punto.lng + '" target="_blank" class="go-to-location">Ir a Google Maps</a>');
      marker.addTo(markers);
      return marker;
    }
  
    // Añadir los puntos al mapa y al buscador desplegable
    puntos.forEach(function(punto, index) {
      createMarker(punto);
      var option = document.createElement('option');
      option.value = index;
      option.text = punto.region;
      document.getElementById('pointSelector').appendChild(option);
  
      // Añadir al dashboard
      var dashboardItem = document.createElement('div');
      dashboardItem.className = 'dashboard-item';
      dashboardItem.dataset.index = index;
      dashboardItem.innerHTML = '<h4>' + punto.region + '</h4><p><strong>Region:</strong> ' + punto.municipio + '</p><p><strong>Municipios que atiende:</strong> ' + punto.municipiosAtiende + '</p><p><strong>Horario:</strong> ' + punto.horario + '</p><p><strong>Dirección:</strong> ' + punto.direccion + '</p><img src="' + punto.imageUrl + '" alt="' + punto.region + '" style="width: 100px; height: auto;">' + 
                                '<a href="https://www.google.com/maps/dir/?api=1&destination=' + punto.lat + ',' + punto.lng + '" target="_blank" class="go-to-location">Ir a Google Maps</a>';
      document.getElementById('dashboardContent').appendChild(dashboardItem);
    });
  
    // Evento de cambio en el selector
    document.getElementById('pointSelector').addEventListener('change', function(event) {
      var selectedIndex = event.target.value;
      if (selectedIndex !== "") {
        var selectedPunto = puntos[selectedIndex];
        map.setView([selectedPunto.lat, selectedPunto.lng], 15);
        var marker = markers.getLayers()[selectedIndex];
        marker.openPopup();
      }
    });
  
    // Evento de clic en el dashboard
    document.getElementById('dashboardContent').addEventListener('click', function(event) {
      var target = event.target;
      while (target && !target.classList.contains('dashboard-item')) {
        target = target.parentElement;
      }
      if (target) {
        var selectedIndex = target.dataset.index;
        if (selectedIndex !== undefined) {
          var selectedPunto = puntos[selectedIndex];
          map.setView([selectedPunto.lat, selectedPunto.lng], 15);
          var marker = markers.getLayers()[selectedIndex];
          marker.openPopup();
        }
      }
    });
  
    // Botones de minimizar y maximizar
    document.getElementById('minimizeButton').addEventListener('click', function() {
      document.getElementById('dashboardContent').style.display = 'none';
      document.getElementById('minimizeButton').style.display = 'none';
      document.getElementById('maximizeButton').style.display = 'inline-block';
    });
  
    document.getElementById('maximizeButton').addEventListener('click', function() {
      document.getElementById('dashboardContent').style.display = 'block';
      document.getElementById('minimizeButton').style.display = 'inline-block';
      document.getElementById('maximizeButton').style.display = 'none';
    });
  }
  
  // Llamar a la función para inicializar el mapa
  document.addEventListener('DOMContentLoaded', function() {
    initMap();
  });
  