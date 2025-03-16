const cities = [
  {
    city: 'Ketu',
    state: 'Lagos'
  },
  {
    city: 'Lagos',
    state: 'Lagos'
  },
  {
    city: 'Kano',
    state: 'Kano'
  },
  {
    city: 'Ibadan',
    state: 'Oyo'
  },
  {
    city: 'Abuja',
    state: 'F.C.T'
  },
  {
    city: 'Kaduna',
    state: 'Kaduna'
  },
  {
    city: 'Benin City',
    state: 'Edo'
  },
  {
    city: 'Ikare',
    state: 'Ondo'
  },
  {
    city: 'Port Harcourt',
    state: 'Rivers'
  },
  {
    city: 'Ogbomoso',
    state: 'Oyo'
  },
  {
    city: 'Aba',
    state: 'Abia'
  },
  {
    city: 'Maiduguri',
    state: 'Borno'
  },
  {
    city: 'Zaria',
    state: 'Kaduna'
  },
  {
    city: 'Warri',
    state: 'Delta'
  },
  {
    city: 'Jos',
    state: 'Plateau'
  },
  {
    city: 'Ilorin',
    state: 'Kwara'
  },
  {
    city: 'Oyo',
    state: 'Oyo'
  },
  {
    city: 'Sokoto',
    state: 'Sokoto'
  },
  {
    city: 'Enugu',
    state: 'Enugu'
  },
  {
    city: 'Abeokuta',
    state: 'Ogun'
  },
  {
    city: 'Uyo',
    state: 'Akwa Ibom'
  },
  {
    city: 'Awka',
    state: 'Anambra'
  },
  {
    city: 'Ile-Ife',
    state: 'Osun'
  },
  {
    city: 'Calabar',
    state: 'Cross River'
  },
  {
    city: 'Ado-Ekiti',
    state: 'Ekiti'
  },
  {
    city: 'Katsina',
    state: 'Katsina'
  },
  {
    city: 'Akure',
    state: 'Ondo'
  },
  {
    city: 'Osogbo',
    state: 'Osun'
  },
  {
    city: 'Bauchi',
    state: 'Bauchi'
  },
  {
    city: 'Mele',
    state: 'Delta'
  },
  {
    city: 'Makurdi North',
    state: 'Benue'
  },
  {
    city: 'Minna',
    state: 'Niger'
  },
  {
    city: 'Owo',
    state: 'Ondo'
  },
  {
    city: 'Gombe',
    state: 'Gombe'
  },
  {
    city: 'Umuahia',
    state: 'Abia'
  },
  {
    city: 'Ondo',
    state: 'Ondo'
  },
  {
    city: 'Damaturu',
    state: 'Yobe'
  },
  {
    city: 'Iwo',
    state: 'Osun'
  },
  {
    city: 'Gusau',
    state: 'Zamfara'
  },
  {
    city: 'Mubi',
    state: 'Adamawa'
  },
  {
    city: 'Owerri',
    state: 'Imo'
  },
  {
    city: 'Ijebu-Ode',
    state: 'Ogun'
  },
  {
    city: 'Funakaye',
    state: 'Gombe'
  },
  {
    city: 'Funtua',
    state: 'Katsina'
  },
  {
    city: 'Bida',
    state: 'Niger'
  },
  {
    city: 'Lafia',
    state: 'Nasarawa'
  },
  {
    city: 'Gashua',
    state: 'Yobe'
  },
  {
    city: 'Buzawa',
    state: 'Borno'
  },
  {
    city: 'Jalingo',
    state: 'Taraba'
  },
  {
    city: 'Nsukka',
    state: 'Enugu'
  },
  {
    city: 'Nguru',
    state: 'Yobe'
  },
  {
    city: 'Ngurore',
    state: 'Adamawa'
  },
  {
    city: 'Birnin Kebbi',
    state: 'Kebbi'
  },
  {
    city: 'Azare',
    state: 'Bauchi'
  },
  {
    city: 'Kontagora',
    state: 'Niger'
  },
  {
    city: 'Iseyin',
    state: 'Oyo'
  },
  {
    city: 'Yola',
    state: 'Adamawa'
  },
  {
    city: 'Biu',
    state: 'Borno'
  },
  {
    city: 'Wukari',
    state: 'Taraba'
  },
  {
    city: 'Wuntin Dada',
    state: 'Bauchi'
  },
  {
    city: 'Wuntin',
    state: 'Bauchi'
  },
  {
    city: 'Old GRA',
    state: 'Bauchi'
  },
  {
    city: 'Potiskum',
    state: 'Yobe'
  },
  {
    city: 'Keffi',
    state: 'Nasarawa'
  },
  {
    city: 'Numan',
    state: 'Adamawa'
  },
  {
    city: 'Idah',
    state: 'Kogi'
  },
  {
    city: 'Onitsha',
    state: 'Anambra'
  },
  {
    city: 'Otukpo',
    state: 'Benue'
  },
  {
    city: 'Lokoja',
    state: 'Kogi'
  },
  {
    city: 'Kumo',
    state: 'Gombe'
  },
  {
    city: 'Opobo',
    state: 'Rivers'
  },
  {
    city: 'Koko',
    state: 'Kebbi'
  },
  {
    city: 'Dutse',
    state: 'Jigawa'
  },
  {
    city: 'Orlu',
    state: 'Imo'
  },
  {
    city: 'Kankara',
    state: 'Katsina'
  },
  {
    city: 'Gwagwalada',
    state: 'F.C.T'
  },
  {
    city: 'Kebbe',
    state: 'Sokoto'
  },
  {
    city: 'Aladja',
    state: 'Delta'
  },
  {
    city: 'Keana',
    state: 'Nasarawa'
  },
  {
    city: 'Gbajimba',
    state: 'Benue'
  },
  {
    city: 'Ikot Ekpene',
    state: 'Akwa Ibom'
  },
  {
    city: 'Ririwai',
    state: 'Kano'
  },
  {
    city: 'Kwami',
    state: 'Gombe'
  },
  {
    city: 'Eku-Eku',
    state: 'Delta'
  },
  {
    city: 'Kabba',
    state: 'Kogi'
  },
  {
    city: 'Darazo',
    state: 'Bauchi'
  },
  {
    city: 'Issele-Uku',
    state: 'Delta'
  },
  {
    city: 'Makarfi',
    state: 'Kaduna',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '11.377342',
    lng: '7.880977',
    population: ''
  },
  {
    city: 'Gombi',
    state: 'Adamawa'
  },
  {
    city: 'Utu Etim Ekpo',
    state: 'Akwa Ibom'
  },
  {
    city: 'Katcha',
    state: 'Niger'
  },
  {
    city: 'Igbara-Oke',
    state: 'Ondo'
  },
  {
    city: 'Garun Malam',
    state: 'Kano'
  },
  {
    city: 'Hong',
    state: 'Adamawa'
  },
  {
    city: 'Ikotun',
    state: 'Lagos'
  },
  {
    city: 'Tunfere',
    state: 'Gombe'
  },
  {
    city: 'Nkwerre',
    state: 'Imo'
  },
  {
    city: 'Mafa',
    state: 'Borno'
  },
  {
    city: 'Nasko',
    state: 'Niger'
  },
  {
    city: 'Festac Town',
    state: 'Lagos'
  },
  {
    city: 'Nkpor',
    state: 'Anambra'
  },
  {
    city: 'Nguzu Edda',
    state: 'Ebonyi'
  },
  {
    city: 'Dukku',
    state: 'Gombe'
  },
  {
    city: 'Illela',
    state: 'Sokoto',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '13.730642',
    lng: '5.297772',
    population: ''
  },
  {
    city: 'Effraya',
    state: 'Cross River',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '5.859256',
    lng: '8.723006',
    population: ''
  },
  {
    city: 'Isinweke',
    state: 'Imo',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '5.620478',
    lng: '7.349854',
    population: ''
  },
  {
    city: 'Kiri Kasamma',
    state: 'Jigawa',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '12.692734',
    lng: '10.254557',
    population: ''
  },
  {
    city: 'Gbagada',
    state: 'Lagos'
  },
  {
    city: 'Ugba',
    state: 'Benue',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '7.506998',
    lng: '9.348042',
    population: ''
  },
  {
    city: 'Obiozara',
    state: 'Ebonyi',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '6.04644',
    lng: '7.772727',
    population: ''
  },
  {
    city: 'Gwoza',
    state: 'Borno',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '11.083125',
    lng: '13.695948',
    population: ''
  },
  {
    city: 'Mashegu',
    state: 'Niger',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '9.972126',
    lng: '5.778858',
    population: ''
  },
  {
    city: 'Yelwa',
    state: 'Kebbi',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '10.835048',
    lng: '4.742439',
    population: ''
  },
  {
    city: 'Giwa',
    state: 'Kaduna',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '11.315678',
    lng: '7.44957',
    population: ''
  },
  {
    city: 'Imeko',
    state: 'Ogun',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '7.448876',
    lng: '2.842887',
    population: ''
  },
  {
    city: 'Iyara',
    state: 'Kogi',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '7.843247',
    lng: '5.970615',
    population: ''
  },
  {
    city: 'Umundugba',
    state: 'Imo',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '5.675968',
    lng: '7.071842',
    population: ''
  },
  {
    city: 'Fugar',
    state: 'Edo',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '7.090761',
    lng: '6.498283',
    population: ''
  },
  {
    city: 'Fupre',
    state: 'Delta'
  },
  {
    city: 'Garaku',
    state: 'Nasarawa',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '8.847168',
    lng: '8.130211',
    population: ''
  },
  {
    city: 'Agenebode',
    state: 'Edo',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '7.105121',
    lng: '6.69381',
    population: ''
  },
  {
    city: 'Jimeta',
    state: 'Adamawa',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '9.27949',
    lng: '12.458185',
    population: ''
  },
  {
    city: 'Oghara',
    state: 'Delta',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '5.935541',
    lng: '5.666096',
    population: ''
  },
  {
    city: 'Kachia',
    state: 'Kaduna'
  },
  {
    city: 'Awgu',
    state: 'Enugu',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '6.072778',
    lng: '7.477386',
    population: ''
  },
  {
    city: 'Osisioma',
    state: 'Abia',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '5.159795',
    lng: '7.322346',
    population: ''
  },
  {
    city: 'Agege',
    state: 'Lagos',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '6.615632',
    lng: '3.333369',
    population: ''
  },
  {
    city: 'Batsari',
    state: 'Katsina'
  },
  {
    city: 'Angware',
    state: 'Plateau'
  },
  {
    city: 'Iragbiji',
    state: 'Osun'
  },
  {
    city: 'Ugep',
    state: 'Cross River'
  },
  {
    city: 'Ughelli',
    state: 'Delta'
  },
  {
    city: 'Wurno',
    state: 'Sokoto'
  },
  {
    city: 'Bogoro',
    state: 'Bauchi'
  },
  {
    city: 'Angwan Sariki',
    state: 'Kaduna'
  },
  {
    city: 'Mabudi',
    state: 'Plateau'
  },
  {
    city: 'Abakaliki',
    state: 'Ebonyi'
  },
  {
    city: 'Abak',
    state: 'Akwa Ibom'
  },
  {
    city: 'Kiru',
    state: 'Kano'
  },
  {
    city: 'Jama\u2019are',
    state: 'Bauchi'
  },
  {
    city: 'Orerokpe',
    state: 'Delta'
  },
  {
    city: 'Bakassi',
    state: 'Cross River'
  },
  {
    city: 'Uquo',
    state: 'Akwa Ibom'
  },
  {
    city: 'Qua Iboh Terminal/QIT',
    state: 'Akwa Ibom'
  },
  {
    city: 'Ikot Osura',
    state: 'Akwa Ibom'
  },
  {
    city: 'Song',
    state: 'Adamawa'
  },
  {
    city: 'Yola-central locations',
    state: 'Adamawa'
  },
  {
    city: 'Odeda',
    state: 'Ogun',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '7.232508',
    lng: '3.528193',
    population: ''
  },
  {
    city: 'Afor-Oru',
    state: 'Imo',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '5.541103',
    lng: '7.268447',
    population: ''
  },
  {
    city: 'Kaura Namoda',
    state: 'Zamfara',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '12.593715',
    lng: '6.586484',
    population: ''
  },
  {
    city: 'Lissam',
    state: 'Taraba',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '7.196098',
    lng: '10.046204',
    population: ''
  },
  {
    city: 'Ribah',
    state: 'Kebbi',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '11.396367',
    lng: '5.486311',
    population: ''
  },
  {
    city: 'Ojota',
    state: 'Lagos',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '6.578063',
    lng: '3.386858',
    population: ''
  },
  {
    city: 'Anka',
    state: 'Zamfara',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '12.113466',
    lng: '5.926809',
    population: ''
  },
  {
    city: 'Gamawa',
    state: 'Bauchi',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '12.133786',
    lng: '10.53785',
    population: ''
  },
  {
    city: 'Gamboru',
    state: 'Borno',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '12.372995',
    lng: '14.206903',
    population: ''
  },
  {
    city: 'Okene',
    state: 'Kogi',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '7.551219',
    lng: '6.23589',
    population: ''
  },
  {
    city: 'Omuo-Ekiti',
    state: 'Ekiti',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '7.759144',
    lng: '5.722496',
    population: ''
  },
  {
    city: 'Lamurde',
    state: 'Adamawa',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '9.608162',
    lng: '11.793151',
    population: ''
  },
  {
    city: 'Fika',
    state: 'Yobe',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '11.286744',
    lng: '11.307724',
    population: ''
  },
  {
    city: 'Tsafe',
    state: 'Zamfara',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '11.957746',
    lng: '6.920832',
    population: ''
  },
  {
    city: 'Ugbodo',
    state: 'Ebonyi'
  },
  {
    city: 'Ugbowo',
    state: 'Edo'
  },
  {
    city: 'Iyana Ipaja',
    state: 'Lagos'
  },
  {
    city: 'Iyana-Ofa',
    state: 'Oyo'
  },
  {
    city: 'Yan Doka',
    state: 'Bauchi'
  },
  {
    city: 'Uhen',
    state: 'Edo'
  },
  {
    city: 'Yelwa',
    state: 'Bauchi'
  },
  {
    city: 'Amassoma',
    state: 'Bayelsa'
  },

  {
    city: 'Okpoga',
    state: 'Benue'
  },
  {
    city: 'Ogbere',
    state: 'Ogun'
  },
  {
    city: 'Ogbaru',
    state: 'Anambra'
  },
  {
    city: 'Ogba',
    state: 'Lagos'
  },
  {
    city: 'Barunde',
    state: 'Gombe'
  },
  {
    city: 'BCJ',
    state: 'Gombe'
  },
  {
    city: 'Sule Tankarkar',
    state: 'Jigawa'
  },
  {
    city: 'Barnawa',
    state: 'Kaduna'
  },
  {
    city: 'Lekki',
    state: 'Lagos'
  },
  {
    city: 'Eyofin',
    state: 'Akwa Ibom',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '4.751596',
    lng: '8.230556',
    population: ''
  },
  {
    city: 'Ifon',
    state: 'Osun',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '7.859925',
    lng: '4.476211',
    population: ''
  },
  {
    city: 'Ifetedo',
    state: 'Osun',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '7.18419',
    lng: '4.70046',
    population: ''
  },
  {
    city: 'Isa',
    state: 'Sokoto',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '13.200659',
    lng: '6.404873',
    population: ''
  },
  {
    city: 'Karu',
    state: 'Nasarawa',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '9.009432',
    lng: '7.661472',
    population: ''
  },
  {
    city: 'Kafin Hausa',
    state: 'Jigawa',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '12.239329',
    lng: '9.911054',
    population: ''
  },
  {
    city: 'Albasu',
    state: 'Kano',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '11.67403',
    lng: '9.140586',
    population: ''
  },
  {
    city: 'Goronyo',
    state: 'Sokoto',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '13.442258',
    lng: '5.672339',
    population: ''
  },
  {
    city: 'Birniwa',
    state: 'Jigawa',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '12.7907',
    lng: '10.236144',
    population: ''
  },
  {
    city: 'Marte',
    state: 'Borno',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '12.365027',
    lng: '13.830184',
    population: ''
  },
  {
    city: 'Malumfashi',
    state: 'Katsina',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '11.789346',
    lng: '7.620612',
    population: ''
  },
  {
    city: 'Shelleng',
    state: 'Adamawa',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '9.896473',
    lng: '12.005717',
    population: ''
  },
  {
    city: 'Ikoyi',
    state: 'Lagos',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '6.452539',
    lng: '3.435841',
    population: ''
  },
  {
    city: 'Ikoyi-Ile',
    state: 'Oyo',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '8.2444',
    lng: '4.171807',
    population: ''
  },
  {
    city: 'Lapai',
    state: 'Niger',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '9.044385',
    lng: '6.570887',
    population: ''
  },
  {
    city: 'Ehor',
    state: 'Edo',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '6.615495',
    lng: '5.982379',
    population: ''
  },
  {
    city: 'Abonnema',
    state: 'Rivers',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '4.731714',
    lng: '6.772234',
    population: ''
  },
  {
    city: 'Jobele',
    state: 'Oyo',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '7.763003',
    lng: '3.919348',
    population: ''
  },
  {
    city: 'Riyom',
    state: 'Plateau'
  },
  {
    city: 'Odo-Ere',
    state: 'Kogi'
  },
  {
    city: 'Kaltungo',
    state: 'Gombe'
  },
  {
    city: 'Otu',
    state: 'Oyo'
  },
  {
    city: 'Obiaruku',
    state: 'Delta'
  },
  {
    city: 'Afuze',
    state: 'Edo'
  },
  {
    city: 'Umumma',
    state: 'Imo'
  },
  {
    city: 'Akpafa',
    state: 'Kogi'
  },
  {
    city: 'Sagbama',
    state: 'Bayelsa'
  },
  {
    city: 'Kumbotso',
    state: 'Kano'
  },
  {
    city: 'Agbara',
    state: 'Lagos'
  },
  {
    city: 'Ingawa',
    state: 'Katsina',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '12.641378',
    lng: '8.051623',
    population: ''
  },
  {
    city: 'Abagana',
    state: 'Anambra',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '6.190311',
    lng: '6.993566',
    population: ''
  },
  {
    city: 'Kaita',
    state: 'Katsina',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '13.083461',
    lng: '7.740916',
    population: ''
  },
  {
    city: 'Saminaka',
    state: 'Kaduna',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '10.412266',
    lng: '8.687477',
    population: ''
  },
  {
    city: 'Hunkuyi',
    state: 'Kaduna',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '11.266796',
    lng: '7.649155',
    population: ''
  },
  {
    city: 'Anaku',
    state: 'Anambra',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '6.468752',
    lng: '6.928928',
    population: ''
  },
  {
    city: 'Ijebu-Jesa',
    state: 'Osun',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '7.682671',
    lng: '4.814356',
    population: ''
  },
  {
    city: 'Guri',
    state: 'Jigawa',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '12.728102',
    lng: '10.419886',
    population: ''
  },
  {
    city: 'Lessel',
    state: 'Benue',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '7.127287',
    lng: '9.019813',
    population: ''
  },
  {
    city: 'Vandeikya',
    state: 'Benue'
  },
  {
    city: 'Billiri',
    state: 'Gombe'
  },
  {
    city: 'Okopedi',
    state: 'Akwa Ibom'
  },
  {
    city: 'Afaha Offiong',
    state: 'Akwa Ibom'
  },
  {
    city: 'Odukpani',
    state: 'Cross River'
  },
  {
    city: 'Nung Udoe',
    state: 'Akwa Ibom'
  },
  {
    city: 'Ozubulu',
    state: 'Anambra'
  },
  {
    city: 'Yusufari',
    state: 'Yobe',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '13.066106',
    lng: '11.173478',
    population: ''
  },
  {
    city: 'Garki',
    state: 'Jigawa',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '12.434558',
    lng: '9.190283',
    population: ''
  },
  {
    city: 'Sapele',
    state: 'Delta',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '5.894053',
    lng: '5.67666',
    population: ''
  },
  {
    city: 'Southern Ijaw',
    state: 'Bayelsa'
  },
  {
    city: 'Rijau',
    state: 'Niger',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '11.103893',
    lng: '5.255563',
    population: ''
  },
  {
    city: 'Besse',
    state: 'Kebbi',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '11.266757',
    lng: '4.431145',
    population: ''
  },
  {
    city: 'Talata Mafara',
    state: 'Zamfara',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '12.568411',
    lng: '6.062246',
    population: ''
  },
  {
    city: 'Talasse',
    state: 'Gombe',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '9.968433',
    lng: '11.679454',
    population: ''
  },
  {
    city: 'Ore',
    state: 'Ondo',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '6.747164',
    lng: '4.876103',
    population: ''
  },
  {
    city: 'Okoroete',
    state: 'Akwa Ibom',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '4.540765',
    lng: '7.748579',
    population: ''
  },
  {
    city: 'Shanono',
    state: 'Kano',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '12.051536',
    lng: '7.992',
    population: ''
  },
  {
    city: 'Jada',
    state: 'Adamawa',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '8.756817',
    lng: '12.155366',
    population: ''
  },
  {
    city: 'Rabah',
    state: 'Sokoto',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '13.122573',
    lng: '5.507616',
    population: ''
  },
  {
    city: 'Gembu',
    state: 'Taraba'
  },
  {
    city: 'Safana',
    state: 'Katsina'
  },
  {
    city: 'Dekina',
    state: 'Kogi'
  },
  {
    city: 'Ikeja',
    state: 'Lagos'
  },
  {
    city: 'Ode-Irele',
    state: 'Ondo'
  },
  {
    city: 'Urualla',
    state: 'Imo'
  },
  {
    city: 'Sokoto',
    state: 'Sokoto'
  },
  {
    city: 'Agbor',
    state: 'Delta'
  },
  {
    city: 'Kurfi',
    state: 'Katsina'
  },
  {
    city: 'Ankpa',
    state: 'Kogi'
  },
  {
    city: 'Gubio',
    state: 'Borno'
  },
  {
    city: 'Ibi',
    state: 'Taraba',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '8.181216',
    lng: '9.744305',
    population: ''
  },
  {
    city: 'Baap',
    state: 'Plateau',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '8.943205',
    lng: '9.241258',
    population: ''
  },
  {
    city: 'Ilaro',
    state: 'Ogun'
  },
  {
    city: 'Ilaje',
    state: 'Lagos'
  },
  {
    city: 'Ise-Ekiti',
    state: 'Ekiti'
  },
  {
    city: 'Burutu',
    state: 'Delta'
  },
  {
    city: 'Nasarawa Egon',
    state: 'Nasarawa'
  },
  {
    city: 'Ungogo',
    state: 'Kano'
  },
  {
    city: 'Koko',
    state: 'Delta'
  },
  {
    city: 'Oka',
    state: 'Ondo'
  },
  {
    city: 'Isele',
    state: 'Delta'
  },
  {
    city: 'Ogaminana',
    state: 'Kogi',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '7.593826',
    lng: '6.217976',
    population: ''
  },
  {
    city: 'Ilupeju',
    state: 'Lagos'
  },
  {
    city: 'Iwere-Ile',
    state: 'Oyo',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '7.999191',
    lng: '3.088266',
    population: ''
  },
  {
    city: 'Ahoada',
    state: 'Rivers',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '5.082805',
    lng: '6.649813',
    population: ''
  },
  {
    city: 'Bunkure',
    state: 'Kano',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '11.699236',
    lng: '8.541266',
    population: ''
  },
  {
    city: 'Kunchi',
    state: 'Kano',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '12.502601',
    lng: '8.27092',
    population: ''
  },
  {
    city: 'Akwanga',
    state: 'Nasarawa',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '8.910769',
    lng: '8.406552',
    population: ''
  },
  {
    city: 'Igbo-Ora',
    state: 'Oyo',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '7.433834',
    lng: '3.287879',
    population: ''
  },
  {
    city: 'Bama',
    state: 'Borno',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '11.521339',
    lng: '13.689524',
    population: ''
  },
  {
    city: 'Bajoga',
    state: 'Gombe'
  },
  {
    city: 'Ganye',
    state: 'Adamawa',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '8.434972',
    lng: '12.051073',
    population: ''
  },
  {
    city: 'Rimi',
    state: 'Katsina',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '12.850298',
    lng: '7.709745',
    population: ''
  },
  {
    city: 'Deba',
    state: 'Gombe'
  },
  {
    city: 'Efon-Alaaye',
    state: 'Ekiti',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '7.656495',
    lng: '4.922354',
    population: ''
  },
  {
    city: 'Effurun',
    state: 'Delta',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '5.556294',
    lng: '5.784591',
    population: ''
  },
  {
    city: 'Itas',
    state: 'Bauchi',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '11.857505',
    lng: '9.963943',
    population: ''
  },
  {
    city: 'Mopa',
    state: 'Kogi',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '8.103872',
    lng: '5.892798',
    population: ''
  },
  {
    city: 'Takum',
    state: 'Taraba',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '7.255323',
    lng: '9.985512',
    population: ''
  },
  {
    city: 'Aboh',
    state: 'Imo',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '5.475689',
    lng: '7.271606',
    population: ''
  },
  {
    city: 'Eruwa',
    state: 'Oyo',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '7.53365',
    lng: '3.41796',
    population: ''
  },
  {
    city: 'Aboh',
    state: 'Delta',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '5.547815',
    lng: '6.525879',
    population: ''
  },
  {
    city: 'Fufore',
    state: 'Adamawa',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '9.221748',
    lng: '12.649747',
    population: ''
  },
  {
    city: 'Fufu',
    state: 'Kwara',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '8.448382',
    lng: '4.720768',
    population: ''
  },
  {
    city: 'Adikpo',
    state: 'Benue',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '6.890017',
    lng: '9.23351',
    population: ''
  },
  {
    city: 'Mutum Biyu',
    state: 'Taraba',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '8.641381',
    lng: '10.773549',
    population: ''
  },
  {
    city: 'Odoro Ikpe',
    state: 'Akwa Ibom',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '5.358349',
    lng: '7.751844',
    population: ''
  },
  {
    city: 'Kafin Madaki',
    state: 'Bauchi',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '10.688558',
    lng: '9.760513',
    population: ''
  },
  {
    city: 'Kagara',
    state: 'Niger',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '10.186623',
    lng: '6.254852',
    population: ''
  },
  {
    city: 'Dambatta',
    state: 'Kano',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '12.434997',
    lng: '8.515314',
    population: ''
  },
  {
    city: 'Damboa',
    state: 'Borno',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '11.155338',
    lng: '12.75638',
    population: ''
  },
  {
    city: 'Omoba',
    state: 'Abia'
  },
  {
    city: 'Moba',
    state: 'Ekiti'
  },
  {
    city: 'Abi',
    state: 'Cross River'
  },
  {
    city: 'Aninri',
    state: 'Enugu'
  },
  {
    city: 'Aniri',
    state: 'Enugu'
  },
  {
    city: 'Mani',
    state: 'Katsina',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '12.854262',
    lng: '7.875261',
    population: ''
  },
  {
    city: 'Isua',
    state: 'Ondo',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '7.453609',
    lng: '5.910472',
    population: ''
  },
  {
    city: 'Babura',
    state: 'Jigawa',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '12.77256',
    lng: '9.015251',
    population: ''
  },
  {
    city: 'Ukpor',
    state: 'Anambra',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '5.942113',
    lng: '6.929313',
    population: ''
  },
  {
    city: 'Owode',
    state: 'Ogun',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '6.94851',
    lng: '3.505605',
    population: ''
  },
  {
    city: 'Mgbidi',
    state: 'Imo',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '5.732361',
    lng: '6.888693',
    population: ''
  },
  {
    city: 'Misau',
    state: 'Bauchi',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '11.313699',
    lng: '10.466637',
    population: ''
  },
  {
    city: 'Toto',
    state: 'Nasarawa',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '8.387596',
    lng: '7.077511',
    population: ''
  },
  {
    city: 'Ijero-Ekiti',
    state: 'Ekiti',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '7.815138',
    lng: '5.067162',
    population: ''
  },
  {
    city: 'Aliero',
    state: 'Kebbi',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '12.288353',
    lng: '4.471391',
    population: ''
  },
  {
    city: 'Mangu',
    state: 'Plateau',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '9.520595',
    lng: '9.097695',
    population: ''
  },
  {
    city: 'Iperindo',
    state: 'Osun',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '7.50119',
    lng: '4.824773',
    population: ''
  },
  {
    city: 'Charanchi',
    state: 'Katsina',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '12.671545',
    lng: '7.729292',
    population: ''
  },
  {
    city: 'Ndeaboh',
    state: 'Enugu'
  },
  {
    city: 'Igbekebo',
    state: 'Ondo'
  },
  {
    city: 'Gulak',
    state: 'Adamawa'
  },
  {
    city: 'Langtang',
    state: 'Plateau'
  },
  {
    city: 'Bindawa',
    state: 'Katsina'
  },
  {
    city: 'Dapchi',
    state: 'Yobe'
  },
  {
    city: 'Bekwarra',
    state: 'Cross River'
  },
  {
    city: 'Ikot Ibritam',
    state: 'Akwa Ibom'
  },
  {
    city: 'Ibrahim Bako',
    state: 'Bauchi'
  },
  {
    city: 'Shendam',
    state: 'Plateau',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '8.878659',
    lng: '9.534645',
    population: ''
  },
  {
    city: 'Iloffa',
    state: 'Kwara',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '8.093428',
    lng: '5.142327',
    population: ''
  },
  {
    city: 'Ilobu',
    state: 'Osun',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '7.84036',
    lng: '4.48557',
    population: ''
  },
  {
    city: 'Ipokia',
    state: 'Ogun'
  },
  {
    city: 'Wilberforce Island',
    state: 'Bayelsa'
  },
  {
    city: 'Gwiwa',
    state: 'Jigawa'
  },
  {
    city: 'Obagaji',
    state: 'Benue'
  },
  {
    city: 'Asaba',
    state: 'Delta'
  },
  {
    city: 'Ugwolawo',
    state: 'Kogi'
  },
  {
    city: 'Nto Edino',
    state: 'Akwa Ibom'
  },
  {
    city: 'Kura',
    state: 'Kano'
  },
  {
    city: 'Sabuwa',
    state: 'Katsina'
  },
  {
    city: 'Kankia',
    state: 'Katsina'
  },
  {
    city: 'Mkar',
    state: 'Benue'
  },
  {
    city: 'Wara',
    state: 'Kebbi',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '10.228844',
    lng: '4.623629',
    population: ''
  },
  {
    city: 'Agwara',
    state: 'Niger',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '10.706111',
    lng: '4.581254',
    population: ''
  },
  {
    city: 'Oke-Oyi',
    state: 'Kwara',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '8.582635',
    lng: '4.716223',
    population: ''
  },
  {
    city: 'Gboko',
    state: 'Benue',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '7.322755',
    lng: '9.001078',
    population: ''
  },
  {
    city: 'Apomu',
    state: 'Osun',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '7.35156',
    lng: '4.183354',
    population: ''
  },
  {
    city: 'Bagwai',
    state: 'Kano',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '12.157704',
    lng: '8.1358',
    population: ''
  },
  {
    city: 'Damagum',
    state: 'Yobe',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '11.678237',
    lng: '11.335174',
    population: ''
  },
  {
    city: 'Iresa-Adu',
    state: 'Oyo',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '8.087473',
    lng: '4.39264',
    population: ''
  },
  {
    city: 'Sankwala',
    state: 'Cross River',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '6.547535',
    lng: '9.222584',
    population: ''
  },
  {
    city: 'Ilawe-Ekiti',
    state: 'Ekiti',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '7.598812',
    lng: '5.104698',
    population: ''
  },
  {
    city: 'Bode Osi',
    state: 'Osun',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '7.751031',
    lng: '4.229796',
    population: ''
  },
  {
    city: 'Balle',
    state: 'Sokoto',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '13.470286',
    lng: '4.681189',
    population: ''
  },
  {
    city: 'Emuoha',
    state: 'Rivers',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '4.883996',
    lng: '6.860104',
    population: ''
  },
  {
    city: 'Dange',
    state: 'Sokoto',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '12.853128',
    lng: '5.345724',
    population: ''
  },
  {
    city: 'Barkin Ladi',
    state: 'Plateau',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '9.538124',
    lng: '8.892701',
    population: ''
  },
  {
    city: 'Somolu',
    state: 'Lagos',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '6.538907',
    lng: '3.374197',
    population: ''
  },
  {
    city: 'Oguta',
    state: 'Imo',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '5.710435',
    lng: '6.809365',
    population: ''
  },
  {
    city: 'Neni',
    state: 'Anambra',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '6.095105',
    lng: '7.024256',
    population: ''
  },
  {
    city: 'Ogidi',
    state: 'Anambra',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '6.152093',
    lng: '6.863435',
    population: ''
  },
  {
    city: 'Agaie',
    state: 'Niger',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '9.008498',
    lng: '6.318206',
    population: ''
  },
  {
    city: 'Otu-Jeremi',
    state: 'Delta',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '5.438183',
    lng: '5.878286',
    population: ''
  },
  {
    city: 'Otukpa',
    state: 'Benue',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '7.101675',
    lng: '7.659447',
    population: ''
  },
  {
    city: 'Oko Ita',
    state: 'Akwa Ibom',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '5.191995',
    lng: '7.895309',
    population: ''
  },
  {
    city: 'Saki',
    state: 'Oyo',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '8.667619',
    lng: '3.393929',
    population: ''
  },
  {
    city: 'Suleja',
    state: 'Niger',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '9.18059',
    lng: '7.179393',
    population: ''
  },
  {
    city: 'Kabo',
    state: 'Kano',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '11.856063',
    lng: '8.170203',
    population: ''
  },
  {
    city: 'Gella',
    state: 'Adamawa',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '10.157379',
    lng: '13.300036',
    population: ''
  },
  {
    city: 'Igbokoda',
    state: 'Ondo'
  },
  {
    city: 'Maiyama',
    state: 'Kebbi'
  },
  {
    city: 'Obarike-Ito',
    state: 'Benue'
  },
  {
    city: 'Irrua',
    state: 'Edo'
  },
  {
    city: 'Itigidi',
    state: 'Cross River'
  },
  {
    city: 'Oron',
    state: 'Akwa Ibom'
  },
  {
    city: 'Akinima',
    state: 'Rivers'
  },
  {
    city: 'Yakuur',
    state: 'Cross River'
  },
  {
    city: 'Nkwo Nike',
    state: 'Enugu',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '6.509214',
    lng: '7.510064',
    population: ''
  },
  {
    city: 'Ezeagu',
    state: 'Enugu'
  },
  {
    city: 'Gezawa',
    state: 'Kano',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '12.101573',
    lng: '8.750295',
    population: ''
  },
  {
    city: 'Dutsi',
    state: 'Katsina',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '12.828624',
    lng: '8.139804',
    population: ''
  },
  {
    city: 'Mai\u2019Adua',
    state: 'Katsina',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '13.179858',
    lng: '8.230396',
    population: ''
  },
  {
    city: 'New Bussa',
    state: 'Niger',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '9.886442',
    lng: '4.508545',
    population: ''
  },
  {
    city: 'Gwarzo',
    state: 'Kano',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '11.915973',
    lng: '7.933704',
    population: ''
  },
  {
    city: 'Bokkos',
    state: 'Plateau'
  },
  {
    city: 'Jibia',
    state: 'Katsina'
  },
  {
    city: 'Nasarawa',
    state: 'Nasarawa'
  },
  {
    city: 'Mahuta',
    state: 'Kebbi'
  },
  {
    city: 'Oguma',
    state: 'Kogi'
  },
  {
    city: 'Onuebonyi Echara',
    state: 'Ebonyi'
  },
  {
    city: 'Ikwuano',
    state: 'Abia'
  },
  {
    city: 'Biase',
    state: 'Cross River'
  },
  {
    city: 'Kujama',
    state: 'Kaduna',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '10.457665',
    lng: '7.638076',
    population: ''
  },
  {
    city: 'Ikere-Ekiti',
    state: 'Ekiti',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '7.497482',
    lng: '5.230414',
    population: ''
  },
  {
    city: 'Ayetoro',
    state: 'Ogun',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '7.242809',
    lng: '3.026386',
    population: ''
  },
  {
    city: 'Ilesa',
    state: 'Osun',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '7.627891',
    lng: '4.741609',
    population: ''
  },
  {
    city: 'Gagarawa',
    state: 'Jigawa',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '12.40848',
    lng: '9.528811',
    population: ''
  },
  {
    city: 'Sabongida-Ora',
    state: 'Edo'
  },
  {
    city: 'Gida Dubu',
    state: 'Bauchi'
  },
  {
    city: 'Zing',
    state: 'Taraba',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '8.990636',
    lng: '11.747634',
    population: ''
  },
  {
    city: 'Sandamu',
    state: 'Katsina',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '12.961627',
    lng: '8.360171',
    population: ''
  },
  {
    city: 'Shinkafi',
    state: 'Zamfara',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '13.072961',
    lng: '6.50574',
    population: ''
  },
  {
    city: 'Obubra',
    state: 'Cross River'
  },
  {
    city: 'Obudu',
    state: 'Cross River'
  },
  {
    city: 'Rimin Gado',
    state: 'Kano',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '11.967202',
    lng: '8.2476',
    population: ''
  },
  {
    city: 'Kazaure',
    state: 'Jigawa',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '12.648462',
    lng: '8.411777',
    population: ''
  },
  {
    city: 'Karim Lamido',
    state: 'Taraba',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '9.314298',
    lng: '11.18731',
    population: ''
  },
  {
    city: 'Urue Offong',
    state: 'Akwa Ibom',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '4.752747',
    lng: '8.167705',
    population: ''
  },
  {
    city: 'Egbeda',
    state: 'Oyo',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '7.3772',
    lng: '4.049754',
    population: ''
  },
  {
    city: 'Okehi',
    state: 'Rivers',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '5.138952',
    lng: '7.139154',
    population: ''
  },
  {
    city: 'Kafanchan',
    state: 'Kaduna',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '9.581262',
    lng: '8.2926',
    population: ''
  },
  {
    city: 'Kakuri',
    state: 'Kaduna'
  },
  {
    city: 'Ile-Oluji',
    state: 'Ondo',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '7.213092',
    lng: '4.869018',
    population: ''
  },
  {
    city: 'Isu',
    state: 'Ebonyi'
  },
  {
    city: 'Moniya',
    state: 'Oyo'
  },
  {
    city: 'Monguno',
    state: 'Borno'
  },
  {
    city: 'Bunza',
    state: 'Kebbi'
  },
  {
    city: 'Pantisawa',
    state: 'Taraba'
  },
  {
    city: 'Pantami',
    state: 'Gombe'
  },
  {
    city: 'Obanliku',
    state: 'Cross River'
  },
  {
    city: 'Yala',
    state: 'Cross River'
  },
  {
    city: 'Obangede',
    state: 'Kogi',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '7.620658',
    lng: '6.199285',
    population: ''
  },
  {
    city: 'Bali',
    state: 'Taraba'
  },
  {
    city: 'Abraka',
    state: 'Delta'
  },
  {
    city: 'Ovwian',
    state: 'Delta'
  },
  {
    city: 'Ugbokpo',
    state: 'Benue'
  },
  {
    city: 'Bonny',
    state: 'Rivers'
  },
  {
    city: 'Oji River',
    state: 'Enugu'
  },
  {
    city: 'Ojo',
    state: 'Lagos'
  },
  {
    city: 'Yana',
    state: 'Bauchi'
  },
  {
    city: 'Karkarna',
    state: 'Jigawa'
  },
  {
    city: 'Boki',
    state: 'Cross River'
  },
  {
    city: 'Kikinu',
    state: 'Kaduna'
  },
  {
    city: 'Okpuala-Ngwa',
    state: 'Abia',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '5.357097',
    lng: '7.387648',
    population: ''
  },
  {
    city: 'Okigwe',
    state: 'Imo'
  },
  {
    city: 'Bolorunduro',
    state: 'Ondo'
  },
  {
    city: 'Serti',
    state: 'Taraba'
  },
  {
    city: 'Akwete',
    state: 'Abia'
  },
  {
    city: 'Akwukwu-Igbo',
    state: 'Delta'
  },
  {
    city: 'Nchia',
    state: 'Rivers'
  },
  {
    city: 'Wushishi',
    state: 'Niger'
  },
  {
    city: 'Bolari',
    state: 'Gombe'
  },
  {
    city: 'Dakingari',
    state: 'Kebbi',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '11.648094',
    lng: '4.061771',
    population: ''
  },
  {
    city: 'Aramoko-Ekiti',
    state: 'Ekiti',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '7.704831',
    lng: '5.040539',
    population: ''
  },
  {
    city: 'Maradun',
    state: 'Zamfara',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '12.567038',
    lng: '6.244069',
    population: ''
  },
  {
    city: 'Agbani',
    state: 'Enugu',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '6.306687',
    lng: '7.54862',
    population: ''
  },
  {
    city: 'Birnin Gwari',
    state: 'Kaduna',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '10.663737',
    lng: '6.540028',
    population: ''
  },
  {
    city: 'Bassa',
    state: 'Plateau',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '9.942486',
    lng: '8.740421',
    population: ''
  },
  {
    city: 'Sunkani',
    state: 'Taraba',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '8.702981',
    lng: '11.257568',
    population: ''
  },
  {
    city: 'Oke-Ikpe',
    state: 'Abia',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '4.913015',
    lng: '7.319358',
    population: ''
  },
  {
    city: 'Ota',
    state: 'Ogun',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '6.688673',
    lng: '3.232015',
    population: ''
  },
  {
    city: 'Patigi',
    state: 'Kwara',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '8.72851',
    lng: '5.755615',
    population: ''
  },
  {
    city: 'Mile 12',
    state: 'Lagos'
  },
  {
    city: 'Awo-Idemili',
    state: 'Imo',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '5.826485',
    lng: '6.933742',
    population: ''
  },
  {
    city: 'Sabon Wuse',
    state: 'Niger',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '9.33424',
    lng: '7.261136',
    population: ''
  },
  {
    city: 'Mallam Sidi',
    state: 'Gombe',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '10.468303',
    lng: '11.292939',
    population: ''
  },
  {
    city: 'Gwandu',
    state: 'Kebbi',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '12.502043',
    lng: '4.642948',
    population: ''
  },
  {
    city: 'Oshodi',
    state: 'Lagos'
  },
  {
    city: 'Masaka',
    state: 'Nasarawa'
  },
  {
    city: 'New Karu',
    state: 'Lagos'
  },
  {
    city: 'Sango Ota',
    state: 'Ogun'
  },
  {
    city: 'Madala',
    state: 'Niger'
  },
  {
    city: 'Egbema',
    state: 'Imo',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '5.544346',
    lng: '6.760896',
    population: ''
  },
  {
    city: 'Tede',
    state: 'Oyo',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '8.55625',
    lng: '3.446383',
    population: ''
  },
  {
    city: 'Bagudo',
    state: 'Kebbi',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '11.403509',
    lng: '4.225712',
    population: ''
  },
  {
    city: 'Surulere',
    state: 'Lagos',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '6.501532',
    lng: '3.358076',
    population: ''
  },
  {
    city: 'Ekpoma',
    state: 'Edo'
  },
  {
    city: 'Warawa',
    state: 'Kano'
  },
  {
    city: 'Ikot Edibon',
    state: 'Akwa Ibom'
  },
  {
    city: 'Ezillo',
    state: 'Ebonyi'
  },
  {
    city: 'Dikwa',
    state: 'Borno'
  },
  {
    city: 'Ezinihitte',
    state: 'Imo'
  },
  {
    city: 'Epe',
    state: 'Lagos'
  },
  {
    city: 'Bungudu',
    state: 'Zamfara'
  },
  {
    city: 'Arawa',
    state: 'Gombe'
  },
  {
    city: 'Omoku',
    state: 'Rivers',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '5.343881',
    lng: '6.656838',
    population: ''
  },
  {
    city: 'Kukawa',
    state: 'Borno',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '12.924753',
    lng: '13.566168',
    population: ''
  },
  {
    city: 'Kaugama',
    state: 'Jigawa',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '12.474309',
    lng: '9.736707',
    population: ''
  },
  {
    city: 'Ikom',
    state: 'Cross River'
  },
  {
    city: 'Baure',
    state: 'Katsina',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '12.837716',
    lng: '8.74513',
    population: ''
  },
  {
    city: 'Paiko',
    state: 'Niger',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '9.436855',
    lng: '6.633571',
    population: ''
  },
  {
    city: 'Turunku',
    state: 'Kaduna',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '10.804326',
    lng: '7.696387',
    population: ''
  },
  {
    city: 'Okwe',
    state: 'Imo',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '5.777429',
    lng: '7.217944',
    population: ''
  },
  {
    city: 'Okpo',
    state: 'Kogi',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '7.216263',
    lng: '7.560225',
    population: ''
  },
  {
    city: 'Kuje',
    state: 'F.C.T',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '8.879523',
    lng: '7.227557',
    population: ''
  },
  {
    city: 'Auyo',
    state: 'Jigawa',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '12.333377',
    lng: '9.938905',
    population: ''
  },
  {
    city: 'Kajuru',
    state: 'Kaduna',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '10.322811',
    lng: '7.684617',
    population: ''
  },
  {
    city: 'Toro',
    state: 'Bauchi',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '10.058892',
    lng: '9.069096',
    population: ''
  },
  {
    city: 'Sabon Birni',
    state: 'Sokoto',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '13.563874',
    lng: '6.323546',
    population: ''
  },
  {
    city: 'Ikenne',
    state: 'Ogun',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '6.865789',
    lng: '3.715179',
    population: ''
  },
  {
    city: 'Gbongan',
    state: 'Osun'
  },
  {
    city: 'Gbonyin',
    state: 'Ekiti'
  },
  {
    city: 'Zuru',
    state: 'Kebbi',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '11.43522',
    lng: '5.234935',
    population: ''
  },
  {
    city: 'Alkaleri',
    state: 'Bauchi',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '10.266875',
    lng: '10.332383',
    population: ''
  },
  {
    city: 'Igbeti',
    state: 'Oyo',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '8.749207',
    lng: '4.131128',
    population: ''
  },
  {
    city: 'Ikot Abasi',
    state: 'Akwa Ibom',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '4.568507',
    lng: '7.552616',
    population: ''
  },
  {
    city: 'Eberi',
    state: 'Rivers',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '5.091167',
    lng: '7.233701',
    population: ''
  },
  {
    city: 'Gwaram',
    state: 'Jigawa',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '11.277272',
    lng: '9.883849',
    population: ''
  },
  {
    city: 'Ekeremor',
    state: 'Bayelsa',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '5.058053',
    lng: '5.780477',
    population: ''
  },
  {
    city: 'Maigatari',
    state: 'Jigawa',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '12.807831',
    lng: '9.44516',
    population: ''
  },
  {
    city: 'Mayo-Belwa',
    state: 'Adamawa'
  },
  {
    city: 'Anchau',
    state: 'Kaduna',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '10.962452',
    lng: '8.392329',
    population: ''
  },
  {
    city: 'Umulona',
    state: 'Enugu',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '6.507887',
    lng: '7.09743',
    population: ''
  },
  {
    city: 'Demsa',
    state: 'Adamawa',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '9.455665',
    lng: '12.152493',
    population: ''
  },
  {
    city: 'Lemu',
    state: 'Niger',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '9.396367',
    lng: '6.027908',
    population: ''
  },
  {
    city: 'Badagry',
    state: 'Lagos',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '6.415017',
    lng: '2.881318',
    population: ''
  },
  {
    city: 'Ejigbo',
    state: 'Lagos'
  },
  {
    city: 'Abejukolo',
    state: 'Kogi',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '7.868077',
    lng: '7.509072',
    population: ''
  },
  {
    city: 'Ayete',
    state: 'Oyo',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '7.542862',
    lng: '3.222631',
    population: ''
  },
  {
    city: 'Isara',
    state: 'Ogun',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '6.99345',
    lng: '3.681477',
    population: ''
  },
  {
    city: 'Maiha',
    state: 'Adamawa',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '9.996722',
    lng: '13.216652',
    population: ''
  },
  {
    city: 'Kangiwa',
    state: 'Kebbi',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '12.553389',
    lng: '3.818141',
    population: ''
  },
  {
    city: 'Arochukwu',
    state: 'Abia',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '5.389405',
    lng: '7.912346',
    population: ''
  },
  {
    city: 'Takai',
    state: 'Kano',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '11.575692',
    lng: '9.108804',
    population: ''
  },
  {
    city: 'Bende',
    state: 'Abia',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '5.558741',
    lng: '7.633589',
    population: ''
  },
  {
    city: 'Nzam',
    state: 'Anambra',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '6.452965',
    lng: '6.728825',
    population: ''
  },
  {
    city: 'Aguobu-Owa',
    state: 'Enugu',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '6.372286',
    lng: '7.271781',
    population: ''
  },
  {
    city: 'Gudumbali',
    state: 'Borno',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '12.942839',
    lng: '13.178313',
    population: ''
  },
  {
    city: 'Iboko',
    state: 'Ebonyi',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '6.406552',
    lng: '8.233285',
    population: ''
  },
  {
    city: 'Oju',
    state: 'Benue',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '6.845264',
    lng: '8.419135',
    population: ''
  },
  {
    city: 'Ojoto',
    state: 'Anambra',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '6.058417',
    lng: '6.861241',
    population: ''
  },
  {
    city: 'Awe',
    state: 'Nasarawa',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '8.104452',
    lng: '9.140113',
    population: ''
  },
  {
    city: 'Lafiagi',
    state: 'Kwara',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '8.852993',
    lng: '5.416413',
    population: ''
  },
  {
    city: 'Askira',
    state: 'Borno',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '10.650857',
    lng: '12.908833',
    population: ''
  },
  {
    city: 'Garko',
    state: 'Kano',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '11.649745',
    lng: '8.803281',
    population: ''
  },
  {
    city: 'Saakpenwa',
    state: 'Rivers',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '4.71677',
    lng: '7.262999',
    population: ''
  },
  {
    city: 'Bichi',
    state: 'Kano',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '12.233853',
    lng: '8.240627',
    population: ''
  },
  {
    city: 'Umuguma',
    state: 'Imo',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '5.467834',
    lng: '6.965939',
    population: ''
  },
  {
    city: 'Wase',
    state: 'Plateau',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '9.094242',
    lng: '9.956051',
    population: ''
  },
  {
    city: 'Share',
    state: 'Kwara',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '8.820865',
    lng: '4.973418',
    population: ''
  },
  {
    city: 'Kwal',
    state: 'Plateau',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '9.371275',
    lng: '9.619202',
    population: ''
  },
  {
    city: 'Igueben',
    state: 'Edo'
  },
  {
    city: 'Wannune',
    state: 'Benue',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '7.56384',
    lng: '8.885337',
    population: ''
  },
  {
    city: 'Amagunze',
    state: 'Enugu',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '6.330629',
    lng: '7.652466',
    population: ''
  },
  {
    city: 'Toungo',
    state: 'Adamawa',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '8.117331',
    lng: '12.046108',
    population: ''
  },
  {
    city: 'Baissa',
    state: 'Taraba',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '7.230866',
    lng: '10.624436',
    population: ''
  },
  {
    city: 'Oye-Ekiti',
    state: 'Ekiti',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '7.799765',
    lng: '5.332422',
    population: ''
  },
  {
    city: 'Idi-Ayunre',
    state: 'Oyo',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '7.232921',
    lng: '3.86152',
    population: ''
  },
  {
    city: 'Damasak',
    state: 'Borno',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '13.105177',
    lng: '12.50854',
    population: ''
  },
  {
    city: 'Balanga',
    state: 'Gombe'
  },
  {
    city: 'Mbalano',
    state: 'Abia',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '5.734324',
    lng: '7.502377',
    population: ''
  },
  {
    city: 'Abudu',
    state: 'Edo',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '6.294886',
    lng: '6.029947',
    population: ''
  },
  {
    city: 'Katsina-Ala',
    state: 'Benue',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '7.169378',
    lng: '9.284646',
    population: ''
  },
  {
    city: 'Ila Orangun',
    state: 'Osun',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '8.017145',
    lng: '4.904207',
    population: ''
  },
  {
    city: 'Buruku',
    state: 'Benue',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '7.459606',
    lng: '9.204549',
    population: ''
  },
  {
    city: 'Kpor',
    state: 'Rivers',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '4.652646',
    lng: '7.283968',
    population: ''
  },
  {
    city: 'Mushin',
    state: 'Lagos',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '6.527994',
    lng: '3.354114',
    population: ''
  },
  {
    city: 'Iho',
    state: 'Imo',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '5.582246',
    lng: '7.098965',
    population: ''
  },
  {
    city: 'Bori',
    state: 'Rivers',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '4.676294',
    lng: '7.36519',
    population: ''
  },
  {
    city: 'Obi',
    state: 'Nasarawa',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '8.369222',
    lng: '8.773834',
    population: ''
  },
  {
    city: 'Koton-Karfe',
    state: 'Kogi',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '8.091196',
    lng: '6.797823',
    population: ''
  },
  {
    city: 'Hadejia',
    state: 'Jigawa',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '12.453467',
    lng: '10.04115',
    population: ''
  },
  {
    city: 'Ikorodu',
    state: 'Lagos',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '6.615261',
    lng: '3.506896',
    population: ''
  },
  {
    city: 'Gummi',
    state: 'Zamfara',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '12.144843',
    lng: '5.117757',
    population: ''
  },
  {
    city: 'Gumel',
    state: 'Jigawa',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '12.626901',
    lng: '9.388069',
    population: ''
  },
  {
    city: 'Augie',
    state: 'Kebbi',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '12.890269',
    lng: '4.599649',
    population: ''
  },
  {
    city: 'Yabo',
    state: 'Sokoto',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '12.722165',
    lng: '5.013286',
    population: ''
  },
  {
    city: 'Udi',
    state: 'Enugu'
  },
  {
    city: 'Ubiaja',
    state: 'Edo'
  },
  {
    city: 'Shagari',
    state: 'Sokoto',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '12.627273',
    lng: '4.992949',
    population: ''
  },
  {
    city: 'Shagamu',
    state: 'Ogun',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '6.848498',
    lng: '3.646325',
    population: ''
  },
  {
    city: 'Ajaawa',
    state: 'Oyo',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '7.931176',
    lng: '4.126544',
    population: ''
  },
  {
    city: 'Okpoma',
    state: 'Cross River',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '6.596793',
    lng: '8.637284',
    population: ''
  },
  {
    city: 'Ago-Amodu',
    state: 'Oyo',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '8.623139',
    lng: '3.614192',
    population: ''
  },
  {
    city: 'Nnenasa',
    state: 'Imo',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '5.732621',
    lng: '7.013641',
    population: ''
  },
  {
    city: 'Isanlu',
    state: 'Kogi',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '8.288227',
    lng: '5.818365',
    population: ''
  },
  {
    city: 'Ikot Nakanda',
    state: 'Cross River',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '4.884258',
    lng: '8.483788',
    population: ''
  },
  {
    city: 'Ikota',
    state: 'Lagos'
  },
  {
    city: 'Gawu Babangida',
    state: 'Niger',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '9.278269',
    lng: '6.993352',
    population: ''
  },
  {
    city: 'Gantsa',
    state: 'Jigawa',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '11.663117',
    lng: '9.726389',
    population: ''
  },
  {
    city: 'Sarkin Pawa',
    state: 'Niger',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '10.020944',
    lng: '7.112436',
    population: ''
  },
  {
    city: 'Ningi',
    state: 'Bauchi',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '11.07837',
    lng: '9.568859',
    population: ''
  },
  {
    city: 'Bukkuyum',
    state: 'Zamfara',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '12.137201',
    lng: '5.468214',
    population: ''
  },
  {
    city: 'Rann',
    state: 'Borno',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '12.269375',
    lng: '14.465521',
    population: ''
  },
  {
    city: 'Rano',
    state: 'Kano',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '11.556838',
    lng: '8.580647',
    population: ''
  },
  {
    city: 'Yenagoa',
    state: 'Bayelsa',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'state',
    lat: '4.926746',
    lng: '6.267636',
    population: ''
  },
  {
    city: 'Binji',
    state: 'Sokoto',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '13.222944',
    lng: '4.908885',
    population: ''
  },
  {
    city: 'Briyel',
    state: 'Borno',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '10.34764',
    lng: '11.609896',
    population: ''
  },
  {
    city: 'Kamba',
    state: 'Kebbi',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '11.851721',
    lng: '3.65478',
    population: ''
  },
  {
    city: 'Ifako',
    state: 'Lagos',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '6.644229',
    lng: '3.324876',
    population: ''
  },
  {
    city: 'Ido-Ekiti',
    state: 'Ekiti',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '7.845975',
    lng: '5.183143',
    population: ''
  },
  {
    city: 'Ido',
    state: 'Oyo',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '7.471032',
    lng: '3.7574',
    population: ''
  },
  {
    city: 'Kusada',
    state: 'Katsina',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '12.465602',
    lng: '7.978478',
    population: ''
  },
  {
    city: 'Igumale',
    state: 'Benue',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '6.79792',
    lng: '7.967936',
    population: ''
  },
  {
    city: 'Degema',
    state: 'Rivers',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '4.748071',
    lng: '6.766181',
    population: ''
  },
  {
    city: 'Argungu',
    state: 'Kebbi',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '12.74482',
    lng: '4.525136',
    population: ''
  },
  {
    city: 'Iguobazuwa',
    state: 'Edo',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '6.565365',
    lng: '5.354427',
    population: ''
  },
  {
    city: 'Ajingi',
    state: 'Kano',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '11.968258',
    lng: '9.036785',
    population: ''
  },
  {
    city: 'Bakura',
    state: 'Zamfara',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '12.71141',
    lng: '5.873667',
    population: ''
  },
  {
    city: 'Girei',
    state: 'Adamawa',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '9.365259',
    lng: '12.546212',
    population: ''
  },
  {
    city: 'Babban Gida',
    state: 'Yobe',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '12.154824',
    lng: '11.770904',
    population: ''
  },
  {
    city: 'Araromi-Opin',
    state: 'Kwara',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '8.065273',
    lng: '5.253984',
    population: ''
  },
  {
    city: 'Zurmi',
    state: 'Zamfara',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '12.776748',
    lng: '6.784035',
    population: ''
  },
  {
    city: 'Uromi',
    state: 'Edo'
  },
  {
    city: 'Gidan Madi',
    state: 'Sokoto',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '13.295754',
    lng: '4.974666',
    population: ''
  },
  {
    city: 'Eket',
    state: 'Akwa Ibom',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '4.64231',
    lng: '7.924381',
    population: ''
  },
  {
    city: 'Boh',
    state: 'Gombe',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '9.781873',
    lng: '11.278816',
    population: ''
  },
  {
    city: 'Makera',
    state: 'Kaduna',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '10.471402',
    lng: '7.410261',
    population: ''
  },
  {
    city: 'Machina',
    state: 'Yobe',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '13.136389',
    lng: '10.04924',
    population: ''
  },
  {
    city: 'Ngo',
    state: 'Rivers',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '4.483885',
    lng: '7.41446',
    population: ''
  },
  {
    city: 'Tunkus',
    state: 'Plateau',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '9.021673',
    lng: '9.613845',
    population: ''
  },
  {
    city: 'Chibok',
    state: 'Borno',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '10.86949',
    lng: '12.846575',
    population: ''
  },
  {
    city: 'Abaji',
    state: 'F.C.T',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '8.47372',
    lng: '6.944532',
    population: ''
  },
  {
    city: 'Sabon Garin Nangere',
    state: 'Yobe',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '11.849454',
    lng: '11.073297',
    population: ''
  },
  {
    city: 'Sabon Gari',
    state: 'Kaduna',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '11.118385',
    lng: '7.73316',
    population: ''
  },
  {
    city: 'Isiokolo',
    state: 'Delta',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '5.595858',
    lng: '6.00028',
    population: ''
  },
  {
    city: 'Kaiama',
    state: 'Kwara',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '9.605305',
    lng: '3.941013',
    population: ''
  },
  {
    city: 'Kaiama',
    state: 'Bayelsa',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '5.119698',
    lng: '6.301015',
    population: ''
  },
  {
    city: 'Gajiram',
    state: 'Borno',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '12.491494',
    lng: '13.211907',
    population: ''
  },
  {
    city: 'Ukpo',
    state: 'Anambra',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '6.214071',
    lng: '6.96657',
    population: ''
  },
  {
    city: 'Igede-Ekiti',
    state: 'Ekiti',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '7.668501',
    lng: '5.126274',
    population: ''
  },
  {
    city: 'Iju',
    state: 'Ondo',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '7.394521',
    lng: '5.25919',
    population: ''
  },
  {
    city: 'Matazu',
    state: 'Katsina',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '12.235489',
    lng: '7.674258',
    population: ''
  },
  {
    city: 'Ikirun',
    state: 'Osun',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '7.912828',
    lng: '4.667413',
    population: ''
  },
  {
    city: 'Oporoma',
    state: 'Bayelsa'
  },
  {
    city: 'Opokuma',
    state: 'Bayelsa'
  },
  {
    city: 'Ogwashi-Uku',
    state: 'Delta'
  },
  {
    city: 'Owa-Oyibu',
    state: 'Delta'
  },
  {
    city: 'Oyi',
    state: 'Anambra'
  },
  {
    city: 'Awala',
    state: 'Bauchi'
  },
  {
    city: 'Sankera',
    state: 'Benue'
  },
  {
    city: 'Ashaka',
    state: 'Gombe'
  },
  {
    city: 'Warji',
    state: 'Bauchi',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '11.17756',
    lng: '9.752414',
    population: ''
  },
  {
    city: 'Madobi',
    state: 'Kano',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '11.777248',
    lng: '8.288012',
    population: ''
  },
  {
    city: 'Onyedega',
    state: 'Kogi',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '6.882095',
    lng: '6.675847',
    population: ''
  },
  {
    city: 'Lau',
    state: 'Taraba',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '9.208269',
    lng: '11.27541',
    population: ''
  },
  {
    city: 'Bwari',
    state: 'F.C.T',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '9.279946',
    lng: '7.380449',
    population: ''
  },
  {
    city: 'Tudun Wada',
    state: 'Kano',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '11.24848',
    lng: '8.40109',
    population: ''
  },
  {
    city: 'Zakirai',
    state: 'Kano',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '12.100326',
    lng: '8.885244',
    population: ''
  },
  {
    city: 'Enugu-Ezike',
    state: 'Enugu',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '6.982703',
    lng: '7.455343',
    population: ''
  },
  {
    city: 'Urua Inyang',
    state: 'Akwa Ibom',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '5.023089',
    lng: '7.538947',
    population: ''
  },
  {
    city: 'Ikpoba Okha',
    state: 'Edo'
  },
  {
    city: 'Afikpo',
    state: 'Ebonyi',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '5.892577',
    lng: '7.935336',
    population: ''
  },
  {
    city: 'Abua',
    state: 'Rivers',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '4.857626',
    lng: '6.645194',
    population: ''
  },
  {
    city: 'Kutigi',
    state: 'Niger',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '9.20103',
    lng: '5.594976',
    population: ''
  },
  {
    city: 'Doma',
    state: 'Nasarawa',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '8.393068',
    lng: '8.355436',
    population: ''
  },
  {
    city: 'Azare',
    state: 'Borno',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '10.52583',
    lng: '12.291145',
    population: ''
  },
  {
    city: 'Benisheikh',
    state: 'Borno',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '11.809189',
    lng: '12.491506',
    population: ''
  },
  {
    city: 'Idogbo',
    state: 'Edo',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '6.268124',
    lng: '5.71296',
    population: ''
  },
  {
    city: 'Kanamma',
    state: 'Yobe',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '13.099692',
    lng: '12.107899',
    population: ''
  },
  {
    city: 'Onueke',
    state: 'Ebonyi',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '6.155366',
    lng: '8.037351',
    population: ''
  },
  {
    city: 'Ajegunle',
    state: 'Lagos',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '6.45197',
    lng: '3.331147',
    population: ''
  },
  {
    city: 'Jakusko',
    state: 'Yobe',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '12.370934',
    lng: '10.773728',
    population: ''
  },
  {
    city: 'Igbo Etiti',
    state: 'Enugu'
  },
  {
    city: 'Isi Uzo',
    state: 'Enugu'
  },
  {
    city: 'Ituku Ozalla',
    state: 'Enugu'
  },
  {
    city: 'Igboho',
    state: 'Oyo',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '8.837838',
    lng: '3.756282',
    population: ''
  },
  {
    city: 'Ikem',
    state: 'Enugu'
  },
  {
    city: 'Ipetumodu',
    state: 'Osun'
  },
  {
    city: 'Bukuru',
    state: 'Plateau'
  },
  {
    city: 'Dawakin Tofa',
    state: 'Kano'
  },
  {
    city: 'Akko',
    state: 'Gombe'
  },
  {
    city: 'Dawakin Kudu',
    state: 'Kano'
  },
  {
    city: 'Udenu',
    state: 'Enugu'
  },
  {
    city: 'Ode-Ekiti',
    state: 'Ekiti'
  },
  {
    city: 'Abigi',
    state: 'Ogun'
  },
  {
    city: 'Upenekang',
    state: 'Akwa Ibom'
  },
  {
    city: 'Etung',
    state: 'Cross River'
  },
  {
    city: 'Guyuk',
    state: 'Adamawa',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '9.906629',
    lng: '11.927527',
    population: ''
  },
  {
    city: 'Buni Yadi',
    state: 'Yobe',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '11.274411',
    lng: '12.008517',
    population: ''
  },
  {
    city: 'Amaigbo',
    state: 'Imo',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '5.730159',
    lng: '7.115098',
    population: ''
  },
  {
    city: 'Aliade',
    state: 'Benue',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '7.296269',
    lng: '8.482775',
    population: ''
  },
  {
    city: 'Kware',
    state: 'Sokoto',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '13.219686',
    lng: '5.265963',
    population: ''
  },
  {
    city: 'Otun-Ekiti',
    state: 'Ekiti'
  },
  {
    city: 'Ihiala',
    state: 'Anambra'
  },
  {
    city: 'Ihiagwa',
    state: 'Imo'
  },
  {
    city: 'Ayamelum',
    state: 'Anambra'
  },
  {
    city: 'Dunukofia',
    state: 'Anambra'
  },
  {
    city: 'Akoko Edo',
    state: 'Edo'
  },
  {
    city: 'Egor',
    state: 'Edo'
  },
  {
    city: 'Ekiadolor',
    state: 'Edo'
  },
  {
    city: 'Ekiadoro',
    state: 'Edo'
  },
  {
    city: 'Etsako',
    state: 'Edo'
  },
  {
    city: 'Dutsin-Ma',
    state: 'Katsina',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '12.453915',
    lng: '7.497231',
    population: ''
  },
  {
    city: 'Abat',
    state: 'Akwa Ibom',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '4.61712',
    lng: '7.866395',
    population: ''
  },
  {
    city: 'Ifo',
    state: 'Ogun',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '6.814906',
    lng: '3.195182',
    population: ''
  },
  {
    city: 'Mashi',
    state: 'Katsina',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '12.980437',
    lng: '7.947029',
    population: ''
  },
  {
    city: 'Boje',
    state: 'Cross River',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '6.284278',
    lng: '8.920617',
    population: ''
  },
  {
    city: 'Danja',
    state: 'Katsina',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '11.377097',
    lng: '7.560967',
    population: ''
  },
  {
    city: 'Ogu',
    state: 'Rivers',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '4.722474',
    lng: '7.198594',
    population: ''
  },
  {
    city: 'Jega',
    state: 'Kebbi',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '12.222195',
    lng: '4.379633',
    population: ''
  },
  {
    city: 'Aguata',
    state: 'Anambra',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '6.016336',
    lng: '7.087822',
    population: ''
  },
  {
    city: 'Khaddamari',
    state: 'Borno',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '11.925894',
    lng: '13.230619',
    population: ''
  },
  {
    city: 'Gwadabawa',
    state: 'Sokoto',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '13.358187',
    lng: '5.238117',
    population: ''
  },
  {
    city: 'Ibagwa-Aka',
    state: 'Enugu',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '6.918541',
    lng: '7.398953',
    population: ''
  },
  {
    city: 'Roni',
    state: 'Jigawa',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '12.658619',
    lng: '8.265047',
    population: ''
  },
  {
    city: 'Mallam Fatori',
    state: 'Borno',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '13.674595',
    lng: '13.339517',
    population: ''
  },
  {
    city: 'Kaura',
    state: 'Kaduna',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '9.668122',
    lng: '8.458255',
    population: ''
  },
  {
    city: 'Bakori',
    state: 'Katsina'
  },
  {
    city: 'Ilemona',
    state: 'Kwara'
  },
  {
    city: 'Pankshin',
    state: 'Plateau'
  },
  {
    city: 'Ibokun',
    state: 'Osun'
  },
  {
    city: 'Kibiya',
    state: 'Kano'
  },
  {
    city: 'Ilejemeje',
    state: 'Ekiti'
  },
  {
    city: 'Dan Musa',
    state: 'Katsina'
  },
  {
    city: 'Mkpat Enin',
    state: 'Akwa Ibom'
  },
  {
    city: 'Odogbolu',
    state: 'Ogun'
  },
  {
    city: 'Otor-Udu',
    state: 'Delta'
  },
  {
    city: 'Kagarko',
    state: 'Kaduna'
  },
  {
    city: 'Uselu',
    state: 'Edo'
  },
  {
    city: 'Oluko',
    state: 'Edo'
  },
  {
    city: 'Kwali',
    state: 'F.C.T'
  },
  {
    city: 'Kirfi',
    state: 'Bauchi'
  },
  {
    city: 'Orhionmwon',
    state: 'Edo'
  },
  {
    city: 'Batagarawa',
    state: 'Katsina',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '12.906105',
    lng: '7.605856',
    population: ''
  },
  {
    city: 'Nafada',
    state: 'Gombe'
  },
  {
    city: 'Fadamar Mada',
    state: 'Bauchi'
  },
  {
    city: 'Dandume',
    state: 'Katsina',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '11.458804',
    lng: '7.126023',
    population: ''
  },
  {
    city: 'Igarra',
    state: 'Edo',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '7.293655',
    lng: '6.10432',
    population: ''
  },
  {
    city: 'Owu-Isin',
    state: 'Kwara',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '8.280898',
    lng: '5.019395',
    population: ''
  },
  {
    city: 'Apapa',
    state: 'Lagos',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '6.4488',
    lng: '3.359008',
    population: ''
  },
  {
    city: 'Ringim',
    state: 'Jigawa',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '12.151434',
    lng: '9.162161',
    population: ''
  },
  {
    city: 'Zonkwa',
    state: 'Kaduna',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '9.784534',
    lng: '8.29056',
    population: ''
  },
  {
    city: 'Ijebu-Igbo',
    state: 'Ogun',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '6.971977',
    lng: '3.999383',
    population: ''
  },
  {
    city: 'Ogoja',
    state: 'Cross River',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '6.658398',
    lng: '8.799227',
    population: ''
  },
  {
    city: 'Maigana',
    state: 'Kaduna',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '11.027074',
    lng: '7.938441',
    population: ''
  },
  {
    city: 'Ozoro',
    state: 'Delta',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '5.546917',
    lng: '6.226485',
    population: ''
  },
  {
    city: 'Osu',
    state: 'Osun',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '7.585855',
    lng: '4.6226',
    population: ''
  },
  {
    city: 'Abuochiche',
    state: 'Cross River',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '6.691323',
    lng: '8.943367',
    population: ''
  },
  {
    city: 'Awo',
    state: 'Osun',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '7.767642',
    lng: '4.395154',
    population: ''
  },
  {
    city: 'Awoyaya',
    state: 'Lagos'
  },
  {
    city: 'Ejigbo',
    state: 'Osun',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '7.902919',
    lng: '4.314192',
    population: ''
  },
  {
    city: 'Atani',
    state: 'Anambra',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '6.012772',
    lng: '6.747685',
    population: ''
  },
  {
    city: 'Afam',
    state: 'Rivers',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '4.790044',
    lng: '7.311874',
    population: ''
  },
  {
    city: 'Musawa',
    state: 'Katsina',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '12.129489',
    lng: '7.670225',
    population: ''
  },
  {
    city: 'Umuelemai',
    state: 'Imo',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '5.687856',
    lng: '7.243335',
    population: ''
  },
  {
    city: 'Isiala Oboro',
    state: 'Abia',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '5.406325',
    lng: '7.56816',
    population: ''
  },
  {
    city: 'Auchi',
    state: 'Edo',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '7.067562',
    lng: '6.263601',
    population: ''
  },
  {
    city: 'Faskari',
    state: 'Katsina',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '11.721079',
    lng: '7.029915',
    population: ''
  },
  {
    city: 'Idu',
    state: 'Akwa Ibom',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '5.030053',
    lng: '8.017156',
    population: ''
  },
  {
    city: 'Shanga',
    state: 'Kebbi',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '11.213744',
    lng: '4.579413',
    population: ''
  },
  {
    city: 'Akodo',
    state: 'Lagos',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '6.437868',
    lng: '3.9309',
    population: ''
  },
  {
    city: 'Shani',
    state: 'Borno',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '10.218239',
    lng: '12.060595',
    population: ''
  },
  {
    city: 'Akanran',
    state: 'Oyo',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '7.281239',
    lng: '4.025528',
    population: ''
  },
  {
    city: 'Akamkpa',
    state: 'Cross River'
  },
  {
    city: 'Ikara',
    state: 'Kaduna',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '11.175114',
    lng: '8.224661',
    population: ''
  },
  {
    city: 'Magumeri',
    state: 'Borno',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '12.114511',
    lng: '12.826197',
    population: ''
  },
  {
    city: 'Dambam',
    state: 'Bauchi',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '11.678929',
    lng: '10.707924',
    population: ''
  },
  {
    city: 'Isuochi',
    state: 'Imo'
  },
  {
    city: 'Nkwoagu Isuochi',
    state: 'Abia',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '5.991247',
    lng: '7.394446',
    population: ''
  },
  {
    city: 'Zango',
    state: 'Katsina',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '13.053129',
    lng: '8.485744',
    population: ''
  },
  {
    city: 'Birnin Magaji',
    state: 'Zamfara',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '12.559201',
    lng: '6.89459',
    population: ''
  },
  {
    city: 'Ajaka',
    state: 'Kogi',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '7.174156',
    lng: '6.825348',
    population: ''
  },
  {
    city: 'Dikenafai',
    state: 'Imo',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '5.770149',
    lng: '7.154735',
    population: ''
  },
  {
    city: 'Enwang',
    state: 'Akwa Ibom',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '4.656429',
    lng: '8.25206',
    population: ''
  },
  {
    city: 'Umunze',
    state: 'Anambra'
  },
  {
    city: 'Ekwulobia',
    state: 'Anambra'
  },
  {
    city: 'Bara',
    state: 'Yobe',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '10.936048',
    lng: '11.682415',
    population: ''
  },
  {
    city: 'Naka',
    state: 'Benue',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '7.583305',
    lng: '8.204399',
    population: ''
  },
  {
    city: 'Omu-Aran',
    state: 'Kwara',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '8.138568',
    lng: '5.102601',
    population: ''
  },
  {
    city: 'Tureta',
    state: 'Sokoto',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '12.593667',
    lng: '5.543906',
    population: ''
  },
  {
    city: 'Ikole-Ekiti',
    state: 'Ekiti',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '7.791481',
    lng: '5.508652',
    population: ''
  },
  {
    city: 'Rumuodomaya',
    state: 'Rivers',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '4.893332',
    lng: '7.00228',
    population: ''
  },
  {
    city: 'Maru',
    state: 'Zamfara',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '12.333595',
    lng: '6.40372',
    population: ''
  },
  {
    city: 'Miga',
    state: 'Jigawa',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '12.238798',
    lng: '9.713617',
    population: ''
  },
  {
    city: 'Adogo',
    state: 'Kogi',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '7.510043',
    lng: '6.479796',
    population: ''
  },
  {
    city: 'Patani',
    state: 'Delta',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '5.228848',
    lng: '6.191387',
    population: ''
  },
  {
    city: 'Sumaila',
    state: 'Kano',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '11.53011',
    lng: '8.955929',
    population: ''
  },
  {
    city: 'Bangi',
    state: 'Niger',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '10.83368',
    lng: '5.826883',
    population: ''
  },
  {
    city: 'Birnin Kudu',
    state: 'Jigawa',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '11.452066',
    lng: '9.478555',
    population: ''
  },
  {
    city: 'Isiokpo',
    state: 'Rivers',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '5.002434',
    lng: '6.87262',
    population: ''
  },
  {
    city: 'Oke-Agbe',
    state: 'Ondo',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '7.643141',
    lng: '5.759433',
    population: ''
  },
  {
    city: 'Iye-Ekiti',
    state: 'Ekiti',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '7.954573',
    lng: '5.233143',
    population: ''
  },
  {
    city: 'Ezzamgbo',
    state: 'Ebonyi',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '6.398949',
    lng: '7.961553',
    population: ''
  },
  {
    city: 'Ita-Ogbolu',
    state: 'Ondo',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '7.368376',
    lng: '5.246839',
    population: ''
  },
  {
    city: 'Tsanyawa',
    state: 'Kano',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '12.295591',
    lng: '7.986538',
    population: ''
  },
  {
    city: 'Ebem Ohafia',
    state: 'Abia'
  },
  {
    city: 'Umudike',
    state: 'Abia'
  },
  {
    city: 'Gwantu',
    state: 'Kaduna',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '9.228989',
    lng: '8.458075',
    population: ''
  },
  {
    city: 'Silame',
    state: 'Sokoto',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '13.039208',
    lng: '4.845932',
    population: ''
  },
  {
    city: 'Nnewi',
    state: 'Anambra',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '6.019625',
    lng: '6.917287',
    population: ''
  },
  {
    city: 'Odot',
    state: 'Akwa Ibom',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '4.830953',
    lng: '8.038395',
    population: ''
  },
  {
    city: 'Konduga',
    state: 'Borno',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '11.653312',
    lng: '13.41787',
    population: ''
  },
  {
    city: 'Atan',
    state: 'Ogun',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '6.894561',
    lng: '4.007146',
    population: ''
  },
  {
    city: 'Jajimaji',
    state: 'Yobe'
  },
  {
    city: 'Jaji',
    state: 'Kaduna'
  },
  {
    city: 'Itu',
    state: 'Akwa Ibom',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '5.201311',
    lng: '7.983728',
    population: ''
  },
  {
    city: 'Itori',
    state: 'Ogun',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '6.931231',
    lng: '3.221466',
    population: ''
  },
  {
    city: 'Dengi',
    state: 'Plateau',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '9.368723',
    lng: '9.962233',
    population: ''
  },
  {
    city: 'Akpet Central',
    state: 'Cross River',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '5.621048',
    lng: '8.101628',
    population: ''
  },
  {
    city: 'Ibiaku Ntok Okpo',
    state: 'Akwa Ibom',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '5.308572',
    lng: '7.711059',
    population: ''
  },
  {
    city: 'Ebute-Metta',
    state: 'Lagos',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '6.487988',
    lng: '3.381662',
    population: ''
  },
  {
    city: 'Ogbe-Ijoh',
    state: 'Delta',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '5.483243',
    lng: '5.734605',
    population: ''
  },
  {
    city: 'Ogbede',
    state: 'Enugu',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '6.672952',
    lng: '7.374409',
    population: ''
  },
  {
    city: 'Bodinga',
    state: 'Sokoto',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '12.84413',
    lng: '5.150007',
    population: ''
  },
  {
    city: 'Bode Saadu',
    state: 'Kwara',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '8.938996',
    lng: '4.78227',
    population: ''
  },
  {
    city: 'Ifon',
    state: 'Ondo',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '6.929729',
    lng: '5.773681',
    population: ''
  },
  {
    city: 'Obowo',
    state: 'Imo'
  },
  {
    city: 'Obollo-Afor',
    state: 'Enugu',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '6.916245',
    lng: '7.518485',
    population: ''
  },
  {
    city: 'Isiaka',
    state: 'Ebonyi',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '5.862653',
    lng: '7.546215',
    population: ''
  },
  {
    city: 'Giade',
    state: 'Bauchi',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '11.390833',
    lng: '10.199874',
    population: ''
  },
  {
    city: 'Maikunkele',
    state: 'Niger',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '9.684301',
    lng: '6.478895',
    population: ''
  },
  {
    city: 'Koguna',
    state: 'Kano',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '12.381368',
    lng: '8.457325',
    population: ''
  },
  {
    city: 'Tse-Agberagba',
    state: 'Benue',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '7.076678',
    lng: '8.665508',
    population: ''
  },
  {
    city: 'Kwoi',
    state: 'Kaduna',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '9.457447',
    lng: '8.006841',
    population: ''
  },
  {
    city: 'Mokwa',
    state: 'Niger',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '9.294818',
    lng: '5.054124',
    population: ''
  },
  {
    city: 'Tofa',
    state: 'Kano',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '12.057886',
    lng: '8.273092',
    population: ''
  },
  {
    city: 'Tafawa Balewa',
    state: 'Bauchi',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '9.760172',
    lng: '9.551724',
    population: ''
  },
  {
    city: 'Owena',
    state: 'Ondo',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '7.194135',
    lng: '5.022645',
    population: ''
  },
  {
    city: 'Ogbia',
    state: 'Bayelsa'
  },
  {
    city: 'Ajalli',
    state: 'Anambra',
    country: 'Nigeria',
    population_proper: '',
    iso2: 'NG',
    capital: 'minor',
    lat: '6.044268',
    lng: '7.208645',
    population: ''
  },
  {
    city: 'Tambuwal',
    state: 'Sokoto'
  },
  {
    city: 'Karaye',
    state: 'Kano'
  },
  {
    city: 'Buguma',
    state: 'Rivers'
  },
  {
    city: 'Makurdi',
    state: 'Benue'
  },
  {
    city: 'Nteje',
    state: 'Anambra'
  },
  {
    city: 'Wudil',
    state: 'Kano'
  },
  {
    city: 'Jahun',
    state: 'Jigawa'
  },
  {
    city: 'Offa',
    state: 'Kwara'
  },
  {
    city: 'Geidam',
    state: 'Yobe'
  },
  {
    city: 'Otan Ayegbaju',
    state: 'Osun'
  },
  {
    city: 'Taura',
    state: 'Jigawa'
  },
  {
    city: 'Dass',
    state: 'Bauchi'
  },
  {
    city: 'Malamfidi',
    state: 'Gombe'
  },
  {
    city: 'Malali',
    state: 'Kaduna'
  },
  {
    city: 'Kuta',
    state: 'Niger'
  },
  {
    city: 'Narayi',
    state: 'Kaduna'
  },
  {
    city: 'Malam Madori',
    state: 'Jigawa'
  },
  {
    city: 'Kisi',
    state: 'Oyo'
  },
  {
    city: 'Itu',
    state: 'Imo'
  },
  {
    city: 'Nayi Nawa',
    state: 'Gombe'
  },
  {
    city: 'Tudun Wada',
    state: 'Gombe'
  },
  {
    city: 'Otuocha',
    state: 'Anambra'
  },
  {
    city: 'Otuoke',
    state: 'Bayelsa'
  },
  {
    city: 'Okeho',
    state: 'Oyo'
  },
  {
    city: 'Oke-Ila',
    state: 'Osun'
  },
  {
    city: 'Michika',
    state: 'Adamawa'
  },
  {
    city: 'Amaeke',
    state: 'Abia'
  },
  {
    city: 'Ile-Ogbo',
    state: 'Osun'
  },
  {
    city: 'Katagum',
    state: 'Bauchi'
  },
  {
    city: 'Gaya',
    state: 'Kano'
  },
  {
    city: 'Afaha Ikot Ebak',
    state: 'Akwa Ibom'
  },
  {
    city: 'Kwaya Kusar',
    state: 'Borno'
  },
  {
    city: 'Kwale',
    state: 'Delta'
  },
  {
    city: 'Okada',
    state: 'Edo'
  },
  {
    city: 'Oleh',
    state: 'Delta'
  },
  {
    city: 'Gada',
    state: 'Sokoto'
  },
  {
    city: 'Emure-Ekiti',
    state: 'Ekiti'
  },
  {
    city: 'Regachuku',
    state: 'Kaduna'
  },
  {
    city: 'Tundu Wada',
    state: 'Kaduna'
  },
  {
    city: 'Enagi',
    state: 'Niger'
  },
  {
    city: 'Afon',
    state: 'Kwara'
  },
  {
    city: 'Yaba',
    state: 'Lagos'
  },
  {
    city: 'VI',
    state: 'Lagos'
  },
  {
    city: 'Somolu',
    state: 'Lagos'
  },
  {
    city: 'Abule Egba',
    state: 'Lagos'
  },
  {
    city: 'Okrika',
    state: 'Rivers'
  },
  {
    city: 'Twon-Brass',
    state: 'Bayelsa'
  },
  {
    city: 'Nembe',
    state: 'Bayelsa'
  },
  {
    city: 'Kosubosu',
    state: 'Kwara'
  },
  {
    city: 'Donga',
    state: 'Taraba'
  },
  {
    city: 'Etinan',
    state: 'Akwa Ibom'
  },
  {
    city: 'Okitipupa',
    state: 'Ondo'
  },
  {
    city: 'Ede',
    state: 'Osun'
  },
  {
    city: 'Bebeji',
    state: 'Kano'
  },
  {
    city: 'Sakaba',
    state: 'Kebbi'
  },
  {
    city: 'Kabala',
    state: 'Kaduna'
  },
  {
    city: 'Okuku',
    state: 'Osun'
  },
  {
    city: 'Rogo',
    state: 'Kano'
  },
  {
    city: 'Daura',
    state: 'Katsina'
  },
  {
    city: 'Achalla',
    state: 'Anambra'
  },
  {
    city: 'Kauru',
    state: 'Kaduna'
  },
  {
    city: 'Nwaorieubi',
    state: 'Imo'
  },
  {
    city: 'Umuneke-Ngor',
    state: 'Imo'
  },
  {
    city: 'Kiyawa',
    state: 'Jigawa'
  },
  {
    city: 'Bomadi',
    state: 'Delta'
  },
  {
    city: 'Akpabuyo',
    state: 'Cross River'
  },
  {
    city: 'Ikot Akpa Nkuk',
    state: 'Akwa Ibom'
  },
  {
    city: 'Mgboko',
    state: 'Abia'
  },
  {
    city: 'Kafur',
    state: 'Katsina'
  },
  {
    city: 'Ikire',
    state: 'Osun'
  },
  {
    city: 'Irepodun/Ifelodun',
    state: 'Ekiti'
  },
  {
    city: 'Kalgo',
    state: 'Kebbi'
  },
  {
    city: 'Wamba',
    state: 'Nasarawa'
  },
  {
    city: 'Wamako',
    state: 'Sokoto'
  },
  {
    city: 'Minjibir',
    state: 'Kano'
  }
];

const lgas = [
  {
    state: {
      name: 'Abia',
      id: 1,
      locals: [
        {
          name: 'Aba South',
          id: 1
        },
        {
          name: 'Arochukwu',
          id: 2
        },
        {
          name: 'Bende',
          id: 3
        },
        {
          name: 'Ikwuano',
          id: 4
        },
        {
          name: 'Isiala Ngwa North',
          id: 5
        },
        {
          name: 'Isiala Ngwa South',
          id: 6
        },
        {
          name: 'Isuikwuato',
          id: 7
        },
        {
          name: 'Obi Ngwa',
          id: 8
        },
        {
          name: 'Ohafia',
          id: 9
        },
        {
          name: 'Osisioma',
          id: 10
        },
        {
          name: 'Ugwunagbo',
          id: 11
        },
        {
          name: 'Ukwa East',
          id: 12
        },
        {
          name: 'Ukwa West',
          id: 13
        },
        {
          name: 'Umuahia North',
          id: 14
        },
        {
          name: 'Umuahia South',
          id: 15
        },
        {
          name: 'Umu Nneochi',
          id: 16
        }
      ]
    }
  },
  {
    state: {
      name: 'Adamawa',
      id: 2,
      locals: [
        {
          name: 'Fufure',
          id: 1
        },
        {
          name: 'Ganye',
          id: 2
        },
        {
          name: 'Gayuk',
          id: 3
        },
        {
          name: 'Gombi',
          id: 4
        },
        {
          name: 'Grie',
          id: 5
        },
        {
          name: 'Hong',
          id: 6
        },
        {
          name: 'Jada',
          id: 7
        },
        {
          name: 'Lamurde',
          id: 8
        },
        {
          name: 'Madagali',
          id: 9
        },
        {
          name: 'Maiha',
          id: 10
        },
        {
          name: 'Mayo Belwa',
          id: 11
        },
        {
          name: 'Michika',
          id: 12
        },
        {
          name: 'Mubi North',
          id: 13
        },
        {
          name: 'Mubi South',
          id: 14
        },
        {
          name: 'Numan',
          id: 15
        },
        {
          name: 'Shelleng',
          id: 16
        },
        {
          name: 'Song',
          id: 17
        },
        {
          name: 'Toungo',
          id: 18
        },
        {
          name: 'Yola North',
          id: 19
        },
        {
          name: 'Yola South',
          id: 20
        }
      ]
    }
  },
  {
    state: {
      name: 'Akwa Ibom',
      id: 3,
      locals: [
        {
          name: 'Eastern Obolo',
          id: 1
        },
        {
          name: 'Eket',
          id: 2
        },
        {
          name: 'Esit Eket',
          id: 3
        },
        {
          name: 'Essien Udim',
          id: 4
        },
        {
          name: 'Etim Ekpo',
          id: 5
        },
        {
          name: 'Etinan',
          id: 6
        },
        {
          name: 'Ibeno',
          id: 7
        },
        {
          name: 'Ibesikpo Asutan',
          id: 8
        },
        {
          name: 'Ibiono-Ibom',
          id: 9
        },
        {
          name: 'Ika',
          id: 10
        },
        {
          name: 'Ikono',
          id: 11
        },
        {
          name: 'Ikot Abasi',
          id: 12
        },
        {
          name: 'Ikot Ekpene',
          id: 13
        },
        {
          name: 'Ini',
          id: 14
        },
        {
          name: 'Itu',
          id: 15
        },
        {
          name: 'Mbo',
          id: 16
        },
        {
          name: 'Mkpat-Enin',
          id: 17
        },
        {
          name: 'Nsit-Atai',
          id: 18
        },
        {
          name: 'Nsit-Ibom',
          id: 19
        },
        {
          name: 'Nsit-Ubium',
          id: 20
        },
        {
          name: 'Obot Akara',
          id: 21
        },
        {
          name: 'Okobo',
          id: 22
        },
        {
          name: 'Onna',
          id: 23
        },
        {
          name: 'Oron',
          id: 24
        },
        {
          name: 'Oruk Anam',
          id: 25
        },
        {
          name: 'Udung-Uko',
          id: 26
        },
        {
          name: 'Ukanafun',
          id: 27
        },
        {
          name: 'Uruan',
          id: 28
        },
        {
          name: 'Urue-Offong Oruko',
          id: 29
        },
        {
          name: 'Uyo',
          id: 30
        }
      ]
    }
  },
  {
    state: {
      name: 'Anambra',
      id: 4,
      locals: [
        {
          name: 'Anambra East',
          id: 1
        },
        {
          name: 'Anambra West',
          id: 2
        },
        {
          name: 'Anaocha',
          id: 3
        },
        {
          name: 'Awka North',
          id: 4
        },
        {
          name: 'Awka South',
          id: 5
        },
        {
          name: 'Ayamelum',
          id: 6
        },
        {
          name: 'Dunukofia',
          id: 7
        },
        {
          name: 'Ekwusigo',
          id: 8
        },
        {
          name: 'Idemili North',
          id: 9
        },
        {
          name: 'Idemili South',
          id: 10
        },
        {
          name: 'Ihiala',
          id: 11
        },
        {
          name: 'Njikoka',
          id: 12
        },
        {
          name: 'Nnewi North',
          id: 13
        },
        {
          name: 'Nnewi South',
          id: 14
        },
        {
          name: 'Ogbaru',
          id: 15
        },
        {
          name: 'Onitsha North',
          id: 16
        },
        {
          name: 'Onitsha South',
          id: 17
        },
        {
          name: 'Orumba North',
          id: 18
        },
        {
          name: 'Orumba South',
          id: 19
        },
        {
          name: 'Oyi',
          id: 20
        }
      ]
    }
  },
  {
    state: {
      name: 'Bauchi',
      id: 5,
      locals: [
        {
          name: 'Bauchi',
          id: 1
        },
        {
          name: 'Bogoro',
          id: 2
        },
        {
          name: 'Damban',
          id: 3
        },
        {
          name: 'Darazo',
          id: 4
        },
        {
          name: 'Dass',
          id: 5
        },
        {
          name: 'Gamawa',
          id: 6
        },
        {
          name: 'Ganjuwa',
          id: 7
        },
        {
          name: 'Giade',
          id: 8
        },
        {
          name: 'Itas Gadau',
          id: 9
        },
        {
          name: "Jama'are",
          id: 10
        },
        {
          name: 'Katagum',
          id: 11
        },
        {
          name: 'Kirfi',
          id: 12
        },
        {
          name: 'Misau',
          id: 13
        },
        {
          name: 'Ningi',
          id: 14
        },
        {
          name: 'Shira',
          id: 15
        },
        {
          name: 'Tafawa Balewa',
          id: 16
        },
        {
          name: 'Toro',
          id: 17
        },
        {
          name: 'Warji',
          id: 18
        },
        {
          name: 'Zaki',
          id: 19
        }
      ]
    }
  },
  {
    state: {
      name: 'Bayelsa',
      id: 6,
      locals: [
        {
          name: 'Ekeremor',
          id: 1
        },
        {
          name: 'Kolokuma Opokuma',
          id: 2
        },
        {
          name: 'Nembe',
          id: 3
        },
        {
          name: 'Ogbia',
          id: 4
        },
        {
          name: 'Sagbama',
          id: 5
        },
        {
          name: 'Southern Ijaw',
          id: 6
        },
        {
          name: 'Yenagoa',
          id: 7
        }
      ]
    }
  },
  {
    state: {
      name: 'Benue',
      id: 7,
      locals: [
        {
          name: 'Apa',
          id: 1
        },
        {
          name: 'Ado',
          id: 2
        },
        {
          name: 'Buruku',
          id: 3
        },
        {
          name: 'Gboko',
          id: 4
        },
        {
          name: 'Guma',
          id: 5
        },
        {
          name: 'Gwer East',
          id: 6
        },
        {
          name: 'Gwer West',
          id: 7
        },
        {
          name: 'Katsina-Ala',
          id: 8
        },
        {
          name: 'Konshisha',
          id: 9
        },
        {
          name: 'Kwande',
          id: 10
        },
        {
          name: 'Logo',
          id: 11
        },
        {
          name: 'Makurdi',
          id: 12
        },
        {
          name: 'Obi',
          id: 13
        },
        {
          name: 'Ogbadibo',
          id: 14
        },
        {
          name: 'Ohimini',
          id: 15
        },
        {
          name: 'Oju',
          id: 16
        },
        {
          name: 'Okpokwu',
          id: 17
        },
        {
          name: 'Oturkpo',
          id: 18
        },
        {
          name: 'Tarka',
          id: 19
        },
        {
          name: 'Ukum',
          id: 20
        },
        {
          name: 'Ushongo',
          id: 21
        },
        {
          name: 'Vandeikya',
          id: 22
        }
      ]
    }
  },
  {
    state: {
      name: 'Borno',
      id: 8,
      locals: [
        {
          name: 'Askira Uba',
          id: 1
        },
        {
          name: 'Bama',
          id: 2
        },
        {
          name: 'Bayo',
          id: 3
        },
        {
          name: 'Biu',
          id: 4
        },
        {
          name: 'Chibok',
          id: 5
        },
        {
          name: 'Damboa',
          id: 6
        },
        {
          name: 'Dikwa',
          id: 7
        },
        {
          name: 'Gubio',
          id: 8
        },
        {
          name: 'Guzamala',
          id: 9
        },
        {
          name: 'Gwoza',
          id: 10
        },
        {
          name: 'Hawul',
          id: 11
        },
        {
          name: 'Jere',
          id: 12
        },
        {
          name: 'Kaga',
          id: 13
        },
        {
          name: 'Kala Balge',
          id: 14
        },
        {
          name: 'Konduga',
          id: 15
        },
        {
          name: 'Kukawa',
          id: 16
        },
        {
          name: 'Kwaya Kusar',
          id: 17
        },
        {
          name: 'Mafa',
          id: 18
        },
        {
          name: 'Magumeri',
          id: 19
        },
        {
          name: 'Maiduguri',
          id: 20
        },
        {
          name: 'Marte',
          id: 21
        },
        {
          name: 'Mobbar',
          id: 22
        },
        {
          name: 'Monguno',
          id: 23
        },
        {
          name: 'Ngala',
          id: 24
        },
        {
          name: 'Nganzai',
          id: 25
        },
        {
          name: 'Shani',
          id: 26
        }
      ]
    }
  },
  {
    state: {
      name: 'Cross River',
      id: 9,
      locals: [
        {
          name: 'Akamkpa',
          id: 1
        },
        {
          name: 'Akpabuyo',
          id: 2
        },
        {
          name: 'Bakassi',
          id: 3
        },
        {
          name: 'Bekwarra',
          id: 4
        },
        {
          name: 'Biase',
          id: 5
        },
        {
          name: 'Boki',
          id: 6
        },
        {
          name: 'Calabar Municipal',
          id: 7
        },
        {
          name: 'Calabar South',
          id: 8
        },
        {
          name: 'Etung',
          id: 9
        },
        {
          name: 'Ikom',
          id: 10
        },
        {
          name: 'Obanliku',
          id: 11
        },
        {
          name: 'Obubra',
          id: 12
        },
        {
          name: 'Obudu',
          id: 13
        },
        {
          name: 'Odukpani',
          id: 14
        },
        {
          name: 'Ogoja',
          id: 15
        },
        {
          name: 'Yakuur',
          id: 16
        },
        {
          name: 'Yala',
          id: 17
        }
      ]
    }
  },
  {
    state: {
      name: 'Delta',
      id: 10,
      locals: [
        {
          name: 'Aniocha South',
          id: 1
        },
        {
          name: 'Bomadi',
          id: 2
        },
        {
          name: 'Burutu',
          id: 3
        },
        {
          name: 'Ethiope East',
          id: 4
        },
        {
          name: 'Ethiope West',
          id: 5
        },
        {
          name: 'Ika North East',
          id: 6
        },
        {
          name: 'Ika South',
          id: 7
        },
        {
          name: 'Isoko North',
          id: 8
        },
        {
          name: 'Isoko South',
          id: 9
        },
        {
          name: 'Ndokwa East',
          id: 10
        },
        {
          name: 'Ndokwa West',
          id: 11
        },
        {
          name: 'Okpe',
          id: 12
        },
        {
          name: 'Oshimili North',
          id: 13
        },
        {
          name: 'Oshimili South',
          id: 14
        },
        {
          name: 'Patani',
          id: 15
        },
        {
          name: 'Sapele',
          id: 16
        },
        {
          name: 'Udu',
          id: 17
        },
        {
          name: 'Ughelli North',
          id: 18
        },
        {
          name: 'Ughelli South',
          id: 19
        },
        {
          name: 'Ukwuani',
          id: 20
        },
        {
          name: 'Uvwie',
          id: 21
        },
        {
          name: 'Warri North',
          id: 22
        },
        {
          name: 'Warri South',
          id: 23
        },
        {
          name: 'Warri South West',
          id: 24
        }
      ]
    }
  },
  {
    state: {
      name: 'Ebonyi',
      id: 11,
      locals: [
        {
          name: 'Afikpo North',
          id: 1
        },
        {
          name: 'Afikpo South',
          id: 2
        },
        {
          name: 'Ebonyi',
          id: 3
        },
        {
          name: 'Ezza North',
          id: 4
        },
        {
          name: 'Ezza South',
          id: 5
        },
        {
          name: 'Ikwo',
          id: 6
        },
        {
          name: 'Ishielu',
          id: 7
        },
        {
          name: 'Ivo',
          id: 8
        },
        {
          name: 'Izzi',
          id: 9
        },
        {
          name: 'Ohaozara',
          id: 10
        },
        {
          name: 'Ohaukwu',
          id: 11
        },
        {
          name: 'Onicha',
          id: 12
        }
      ]
    }
  },
  {
    state: {
      name: 'Edo',
      id: 12,
      locals: [
        {
          name: 'Egor',
          id: 1
        },
        {
          name: 'Esan Central',
          id: 2
        },
        {
          name: 'Esan North-East',
          id: 3
        },
        {
          name: 'Esan South-East',
          id: 4
        },
        {
          name: 'Esan West',
          id: 5
        },
        {
          name: 'Etsako Central',
          id: 6
        },
        {
          name: 'Etsako East',
          id: 7
        },
        {
          name: 'Etsako West',
          id: 8
        },
        {
          name: 'Igueben',
          id: 9
        },
        {
          name: 'Ikpoba Okha',
          id: 10
        },
        {
          name: 'Orhionmwon',
          id: 11
        },
        {
          name: 'Oredo',
          id: 12
        },
        {
          name: 'Ovia North-East',
          id: 13
        },
        {
          name: 'Ovia South-West',
          id: 14
        },
        {
          name: 'Owan East',
          id: 15
        },
        {
          name: 'Owan West',
          id: 16
        },
        {
          name: 'Uhunmwonde',
          id: 17
        }
      ]
    }
  },
  {
    state: {
      name: 'Ekiti',
      id: 13,
      locals: [
        {
          name: 'Efon',
          id: 1
        },
        {
          name: 'Ekiti East',
          id: 2
        },
        {
          name: 'Ekiti South-West',
          id: 3
        },
        {
          name: 'Ekiti West',
          id: 4
        },
        {
          name: 'Emure',
          id: 5
        },
        {
          name: 'Gbonyin',
          id: 6
        },
        {
          name: 'Ido Osi',
          id: 7
        },
        {
          name: 'Ijero',
          id: 8
        },
        {
          name: 'Ikere',
          id: 9
        },
        {
          name: 'Ikole',
          id: 10
        },
        {
          name: 'Ilejemeje',
          id: 11
        },
        {
          name: 'Irepodun Ifelodun',
          id: 12
        },
        {
          name: 'Ise Orun',
          id: 13
        },
        {
          name: 'Moba',
          id: 14
        },
        {
          name: 'Oye',
          id: 15
        }
      ]
    }
  },
  {
    state: {
      name: 'Enugu',
      id: 14,
      locals: [
        {
          name: 'Awgu',
          id: 1
        },
        {
          name: 'Enugu East',
          id: 2
        },
        {
          name: 'Enugu North',
          id: 3
        },
        {
          name: 'Enugu South',
          id: 4
        },
        {
          name: 'Ezeagu',
          id: 5
        },
        {
          name: 'Igbo Etiti',
          id: 6
        },
        {
          name: 'Igbo Eze North',
          id: 7
        },
        {
          name: 'Igbo Eze South',
          id: 8
        },
        {
          name: 'Isi Uzo',
          id: 9
        },
        {
          name: 'Nkanu East',
          id: 10
        },
        {
          name: 'Nkanu West',
          id: 11
        },
        {
          name: 'Nsukka',
          id: 12
        },
        {
          name: 'Oji River',
          id: 13
        },
        {
          name: 'Udenu',
          id: 14
        },
        {
          name: 'Udi',
          id: 15
        },
        {
          name: 'Uzo Uwani',
          id: 16
        }
      ]
    }
  },
  {
    state: {
      name: 'F.C.T',
      id: 15,
      locals: [
        {
          name: 'Bwari',
          id: 1
        },
        {
          name: 'Gwagwalada',
          id: 2
        },
        {
          name: 'Kuje',
          id: 3
        },
        {
          name: 'Kwali',
          id: 4
        },
        {
          name: 'Municipal Area Council',
          id: 5
        }
      ]
    }
  },
  {
    state: {
      name: 'Gombe',
      id: 16,
      locals: [
        {
          name: 'Balanga',
          id: 1
        },
        {
          name: 'Billiri',
          id: 2
        },
        {
          name: 'Dukku',
          id: 3
        },
        {
          name: 'Funakaye',
          id: 4
        },
        {
          name: 'Gombe',
          id: 5
        },
        {
          name: 'Kaltungo',
          id: 6
        },
        {
          name: 'Kwami',
          id: 7
        },
        {
          name: 'Nafada',
          id: 8
        },
        {
          name: 'Shongom',
          id: 9
        },
        {
          name: 'Yamaltu Deba',
          id: 10
        }
      ]
    }
  },
  {
    state: {
      name: 'Imo',
      id: 17,
      locals: [
        {
          name: 'Ahiazu Mbaise',
          id: 1
        },
        {
          name: 'Ehime Mbano',
          id: 2
        },
        {
          name: 'Ezinihitte',
          id: 3
        },
        {
          name: 'Ideato North',
          id: 4
        },
        {
          name: 'Ideato South',
          id: 5
        },
        {
          name: 'Ihitte Uboma',
          id: 6
        },
        {
          name: 'Ikeduru',
          id: 7
        },
        {
          name: 'Isiala Mbano',
          id: 8
        },
        {
          name: 'Isu',
          id: 9
        },
        {
          name: 'Mbaitoli',
          id: 10
        },
        {
          name: 'Ngor Okpala',
          id: 11
        },
        {
          name: 'Njaba',
          id: 12
        },
        {
          name: 'Nkwerre',
          id: 13
        },
        {
          name: 'Nwangele',
          id: 14
        },
        {
          name: 'Obowo',
          id: 15
        },
        {
          name: 'Oguta',
          id: 16
        },
        {
          name: 'Ohaji Egbema',
          id: 17
        },
        {
          name: 'Okigwe',
          id: 18
        },
        {
          name: 'Orlu',
          id: 19
        },
        {
          name: 'Orsu',
          id: 20
        },
        {
          name: 'Oru East',
          id: 21
        },
        {
          name: 'Oru West',
          id: 22
        },
        {
          name: 'Owerri Municipal',
          id: 23
        },
        {
          name: 'Owerri North',
          id: 24
        },
        {
          name: 'Owerri West',
          id: 25
        },
        {
          name: 'Unuimo',
          id: 26
        }
      ]
    }
  },
  {
    state: {
      name: 'Jigawa',
      id: 18,
      locals: [
        {
          name: 'Babura',
          id: 1
        },
        {
          name: 'Biriniwa',
          id: 2
        },
        {
          name: 'Birnin Kudu',
          id: 3
        },
        {
          name: 'Buji',
          id: 4
        },
        {
          name: 'Dutse',
          id: 5
        },
        {
          name: 'Gagarawa',
          id: 6
        },
        {
          name: 'Garki',
          id: 7
        },
        {
          name: 'Gumel',
          id: 8
        },
        {
          name: 'Guri',
          id: 9
        },
        {
          name: 'Gwaram',
          id: 10
        },
        {
          name: 'Gwiwa',
          id: 11
        },
        {
          name: 'Hadejia',
          id: 12
        },
        {
          name: 'Jahun',
          id: 13
        },
        {
          name: 'Kafin Hausa',
          id: 14
        },
        {
          name: 'Kazaure',
          id: 15
        },
        {
          name: 'Kiri Kasama',
          id: 16
        },
        {
          name: 'Kiyawa',
          id: 17
        },
        {
          name: 'Kaugama',
          id: 18
        },
        {
          name: 'Maigatari',
          id: 19
        },
        {
          name: 'Malam Madori',
          id: 20
        },
        {
          name: 'Miga',
          id: 21
        },
        {
          name: 'Ringim',
          id: 22
        },
        {
          name: 'Roni',
          id: 23
        },
        {
          name: 'Sule Tankarkar',
          id: 24
        },
        {
          name: 'Taura',
          id: 25
        },
        {
          name: 'Yankwashi',
          id: 26
        }
      ]
    }
  },
  {
    state: {
      name: 'Kaduna',
      id: 19,
      locals: [
        {
          name: 'Chikun',
          id: 1
        },
        {
          name: 'Giwa',
          id: 2
        },
        {
          name: 'Igabi',
          id: 3
        },
        {
          name: 'Ikara',
          id: 4
        },
        {
          name: 'Jaba',
          id: 5
        },
        {
          name: "Jema'a",
          id: 6
        },
        {
          name: 'Kachia',
          id: 7
        },
        {
          name: 'Kaduna North',
          id: 8
        },
        {
          name: 'Kaduna South',
          id: 9
        },
        {
          name: 'Kagarko',
          id: 10
        },
        {
          name: 'Kajuru',
          id: 11
        },
        {
          name: 'Kaura',
          id: 12
        },
        {
          name: 'Kauru',
          id: 13
        },
        {
          name: 'Kubau',
          id: 14
        },
        {
          name: 'Kudan',
          id: 15
        },
        {
          name: 'Lere',
          id: 16
        },
        {
          name: 'Makarfi',
          id: 17
        },
        {
          name: 'Sabon Gari',
          id: 18
        },
        {
          name: 'Sanga',
          id: 19
        },
        {
          name: 'Soba',
          id: 20
        },
        {
          name: 'Zangon Kataf',
          id: 21
        },
        {
          name: 'Zaria',
          id: 22
        }
      ]
    }
  },
  {
    state: {
      name: 'Kano',
      id: 20,
      locals: [
        {
          name: 'Albasu',
          id: 1
        },
        {
          name: 'Bagwai',
          id: 2
        },
        {
          name: 'Bebeji',
          id: 3
        },
        {
          name: 'Bichi',
          id: 4
        },
        {
          name: 'Bunkure',
          id: 5
        },
        {
          name: 'Dala',
          id: 6
        },
        {
          name: 'Dambatta',
          id: 7
        },
        {
          name: 'Dawakin Kudu',
          id: 8
        },
        {
          name: 'Dawakin Tofa',
          id: 9
        },
        {
          name: 'Doguwa',
          id: 10
        },
        {
          name: 'Fagge',
          id: 11
        },
        {
          name: 'Gabasawa',
          id: 12
        },
        {
          name: 'Garko',
          id: 13
        },
        {
          name: 'Garun Mallam',
          id: 14
        },
        {
          name: 'Gaya',
          id: 15
        },
        {
          name: 'Gezawa',
          id: 16
        },
        {
          name: 'Gwale',
          id: 17
        },
        {
          name: 'Gwarzo',
          id: 18
        },
        {
          name: 'Kabo',
          id: 19
        },
        {
          name: 'Kano Municipal',
          id: 20
        },
        {
          name: 'Karaye',
          id: 21
        },
        {
          name: 'Kibiya',
          id: 22
        },
        {
          name: 'Kiru',
          id: 23
        },
        {
          name: 'Kumbotso',
          id: 24
        },
        {
          name: 'Kunchi',
          id: 25
        },
        {
          name: 'Kura',
          id: 26
        },
        {
          name: 'Madobi',
          id: 27
        },
        {
          name: 'Makoda',
          id: 28
        },
        {
          name: 'Minjibir',
          id: 29
        },
        {
          name: 'Nasarawa',
          id: 30
        },
        {
          name: 'Rano',
          id: 31
        },
        {
          name: 'Rimin Gado',
          id: 32
        },
        {
          name: 'Rogo',
          id: 33
        },
        {
          name: 'Shanono',
          id: 34
        },
        {
          name: 'Sumaila',
          id: 35
        },
        {
          name: 'Takai',
          id: 36
        },
        {
          name: 'Tarauni',
          id: 37
        },
        {
          name: 'Tofa',
          id: 38
        },
        {
          name: 'Tsanyawa',
          id: 39
        },
        {
          name: 'Tudun Wada',
          id: 40
        },
        {
          name: 'Ungogo',
          id: 41
        },
        {
          name: 'Warawa',
          id: 42
        },
        {
          name: 'Wudil',
          id: 43
        }
      ]
    }
  },
  {
    state: {
      name: 'Katsina',
      id: 21,
      locals: [
        {
          name: 'Batagarawa',
          id: 1
        },
        {
          name: 'Batsari',
          id: 2
        },
        {
          name: 'Baure',
          id: 3
        },
        {
          name: 'Bindawa',
          id: 4
        },
        {
          name: 'Charanchi',
          id: 5
        },
        {
          name: 'Dandume',
          id: 6
        },
        {
          name: 'Danja',
          id: 7
        },
        {
          name: 'Dan Musa',
          id: 8
        },
        {
          name: 'Daura',
          id: 9
        },
        {
          name: 'Dutsi',
          id: 10
        },
        {
          name: 'Dutsin Ma',
          id: 11
        },
        {
          name: 'Faskari',
          id: 12
        },
        {
          name: 'Funtua',
          id: 13
        },
        {
          name: 'Ingawa',
          id: 14
        },
        {
          name: 'Jibia',
          id: 15
        },
        {
          name: 'Kafur',
          id: 16
        },
        {
          name: 'Kaita',
          id: 17
        },
        {
          name: 'Kankara',
          id: 18
        },
        {
          name: 'Kankia',
          id: 19
        },
        {
          name: 'Katsina',
          id: 20
        },
        {
          name: 'Kurfi',
          id: 21
        },
        {
          name: 'Kusada',
          id: 22
        },
        {
          name: "Mai'Adua",
          id: 23
        },
        {
          name: 'Malumfashi',
          id: 24
        },
        {
          name: 'Mani',
          id: 25
        },
        {
          name: 'Mashi',
          id: 26
        },
        {
          name: 'Matazu',
          id: 27
        },
        {
          name: 'Musawa',
          id: 28
        },
        {
          name: 'Rimi',
          id: 29
        },
        {
          name: 'Sabuwa',
          id: 30
        },
        {
          name: 'Safana',
          id: 31
        },
        {
          name: 'Sandamu',
          id: 32
        },
        {
          name: 'Zango',
          id: 33
        }
      ]
    }
  },
  {
    state: {
      name: 'Kebbi',
      id: 22,
      locals: [
        {
          name: 'Arewa Dandi',
          id: 1
        },
        {
          name: 'Argungu',
          id: 2
        },
        {
          name: 'Augie',
          id: 3
        },
        {
          name: 'Bagudo',
          id: 4
        },
        {
          name: 'Birnin Kebbi',
          id: 5
        },
        {
          name: 'Bunza',
          id: 6
        },
        {
          name: 'Dandi',
          id: 7
        },
        {
          name: 'Fakai',
          id: 8
        },
        {
          name: 'Gwandu',
          id: 9
        },
        {
          name: 'Jega',
          id: 10
        },
        {
          name: 'Kalgo',
          id: 11
        },
        {
          name: 'Koko Besse',
          id: 12
        },
        {
          name: 'Maiyama',
          id: 13
        },
        {
          name: 'Ngaski',
          id: 14
        },
        {
          name: 'Sakaba',
          id: 15
        },
        {
          name: 'Shanga',
          id: 16
        },
        {
          name: 'Suru',
          id: 17
        },
        {
          name: 'Wasagu Danko',
          id: 18
        },
        {
          name: 'Yauri',
          id: 19
        },
        {
          name: 'Zuru',
          id: 20
        }
      ]
    }
  },
  {
    state: {
      name: 'Kogi',
      id: 23,
      locals: [
        {
          name: 'Ajaokuta',
          id: 1
        },
        {
          name: 'Ankpa',
          id: 2
        },
        {
          name: 'Bassa',
          id: 3
        },
        {
          name: 'Dekina',
          id: 4
        },
        {
          name: 'Ibaji',
          id: 5
        },
        {
          name: 'Idah',
          id: 6
        },
        {
          name: 'Igalamela Odolu',
          id: 7
        },
        {
          name: 'Ijumu',
          id: 8
        },
        {
          name: 'Kabba Bunu',
          id: 9
        },
        {
          name: 'Kogi',
          id: 10
        },
        {
          name: 'Lokoja',
          id: 11
        },
        {
          name: 'Mopa Muro',
          id: 12
        },
        {
          name: 'Ofu',
          id: 13
        },
        {
          name: 'Ogori Magongo',
          id: 14
        },
        {
          name: 'Okehi',
          id: 15
        },
        {
          name: 'Okene',
          id: 16
        },
        {
          name: 'Olamaboro',
          id: 17
        },
        {
          name: 'Omala',
          id: 18
        },
        {
          name: 'Yagba East',
          id: 19
        },
        {
          name: 'Yagba West',
          id: 20
        }
      ]
    }
  },
  {
    state: {
      name: 'Kwara',
      id: 24,
      locals: [
        {
          name: 'Baruten',
          id: 1
        },
        {
          name: 'Edu',
          id: 2
        },
        {
          name: 'Ekiti',
          id: 3
        },
        {
          name: 'Ifelodun',
          id: 4
        },
        {
          name: 'Ilorin East',
          id: 5
        },
        {
          name: 'Ilorin South',
          id: 6
        },
        {
          name: 'Ilorin West',
          id: 7
        },
        {
          name: 'Irepodun',
          id: 8
        },
        {
          name: 'Isin',
          id: 9
        },
        {
          name: 'Kaiama',
          id: 10
        },
        {
          name: 'Moro',
          id: 11
        },
        {
          name: 'Offa',
          id: 12
        },
        {
          name: 'Oke Ero',
          id: 13
        },
        {
          name: 'Oyun',
          id: 14
        },
        {
          name: 'Pategi',
          id: 15
        }
      ]
    }
  },
  {
    state: {
      name: 'Lagos',
      id: 25,
      locals: [
        {
          name: 'Ajeromi-Ifelodun',
          id: 1
        },
        {
          name: 'Alimosho',
          id: 2
        },
        {
          name: 'Amuwo-Odofin',
          id: 3
        },
        {
          name: 'Agege',
          id: 4
        },
        {
          name: 'Apapa',
          id: 5
        },
        {
          name: 'Badagry',
          id: 6
        },
        {
          name: 'Epe',
          id: 7
        },
        {
          name: 'Eti-Osa',
          id: 8
        },
        {
          name: 'Ibeju-Lekki',
          id: 9
        },
        {
          name: 'Ifako-Ijaiye',
          id: 10
        },
        {
          name: 'Ikeja',
          id: 11
        },
        {
          name: 'Ikorodu',
          id: 12
        },
        {
          name: 'Kosofe',
          id: 13
        },
        {
          name: 'Lagos Island',
          id: 14
        },
        {
          name: 'Lagos Mainland',
          id: 15
        },
        {
          name: 'Mushin',
          id: 16
        },
        {
          name: 'Ojo',
          id: 17
        },
        {
          name: 'Oshodi-Isolo',
          id: 18
        },
        {
          name: 'Somolu',
          id: 19
        },
        {
          name: 'Surulere',
          id: 20
        }
      ]
    }
  },
  {
    state: {
      name: 'Nasarawa',
      id: 26,
      locals: [
        {
          name: 'Awe',
          id: 1
        },
        {
          name: 'Doma',
          id: 2
        },
        {
          name: 'Karu',
          id: 3
        },
        {
          name: 'Keana',
          id: 4
        },
        {
          name: 'Keffi',
          id: 5
        },
        {
          name: 'Kokona',
          id: 6
        },
        {
          name: 'Lafia',
          id: 7
        },
        {
          name: 'Nasarawa',
          id: 8
        },
        {
          name: 'Nasarawa Egon',
          id: 9
        },
        {
          name: 'Obi',
          id: 10
        },
        {
          name: 'Toto',
          id: 11
        },
        {
          name: 'Wamba',
          id: 12
        }
      ]
    }
  },
  {
    state: {
      name: 'Niger',
      id: 27,
      locals: [
        {
          name: 'Agwara',
          id: 1
        },
        {
          name: 'Bida',
          id: 2
        },
        {
          name: 'Borgu',
          id: 3
        },
        {
          name: 'Bosso',
          id: 4
        },
        {
          name: 'Chanchaga',
          id: 5
        },
        {
          name: 'Edati',
          id: 6
        },
        {
          name: 'Gbako',
          id: 7
        },
        {
          name: 'Gurara',
          id: 8
        },
        {
          name: 'Katcha',
          id: 9
        },
        {
          name: 'Kontagora',
          id: 10
        },
        {
          name: 'Lapai',
          id: 11
        },
        {
          name: 'Lavun',
          id: 12
        },
        {
          name: 'Magama',
          id: 13
        },
        {
          name: 'Mariga',
          id: 14
        },
        {
          name: 'Mashegu',
          id: 15
        },
        {
          name: 'Mokwa',
          id: 16
        },
        {
          name: 'Moya',
          id: 17
        },
        {
          name: 'Paikoro',
          id: 18
        },
        {
          name: 'Rafi',
          id: 19
        },
        {
          name: 'Rijau',
          id: 20
        },
        {
          name: 'Shiroro',
          id: 21
        },
        {
          name: 'Suleja',
          id: 22
        },
        {
          name: 'Tafa',
          id: 23
        },
        {
          name: 'Wushishi',
          id: 24
        }
      ]
    }
  },
  {
    state: {
      name: 'Ogun',
      id: 28,
      locals: [
        {
          name: 'Abeokuta South',
          id: 1
        },
        {
          name: 'Ado-Odo Ota',
          id: 2
        },
        {
          name: 'Egbado North',
          id: 3
        },
        {
          name: 'Egbado South',
          id: 4
        },
        {
          name: 'Ewekoro',
          id: 5
        },
        {
          name: 'Ifo',
          id: 6
        },
        {
          name: 'Ijebu East',
          id: 7
        },
        {
          name: 'Ijebu North',
          id: 8
        },
        {
          name: 'Ijebu North East',
          id: 9
        },
        {
          name: 'Ijebu Ode',
          id: 10
        },
        {
          name: 'Ikenne',
          id: 11
        },
        {
          name: 'Imeko Afon',
          id: 12
        },
        {
          name: 'Ipokia',
          id: 13
        },
        {
          name: 'Obafemi Owode',
          id: 14
        },
        {
          name: 'Odeda',
          id: 15
        },
        {
          name: 'Odogbolu',
          id: 16
        },
        {
          name: 'Ogun Waterside',
          id: 17
        },
        {
          name: 'Remo North',
          id: 18
        },
        {
          name: 'Shagamu',
          id: 19
        }
      ]
    }
  },
  {
    state: {
      name: 'Ondo',
      id: 29,
      locals: [
        {
          name: 'Akoko North-West',
          id: 1
        },
        {
          name: 'Akoko South-West',
          id: 2
        },
        {
          name: 'Akoko South-East',
          id: 3
        },
        {
          name: 'Akure North',
          id: 4
        },
        {
          name: 'Akure South',
          id: 5
        },
        {
          name: 'Ese Odo',
          id: 6
        },
        {
          name: 'Idanre',
          id: 7
        },
        {
          name: 'Ifedore',
          id: 8
        },
        {
          name: 'Ilaje',
          id: 9
        },
        {
          name: 'Ile Oluji Okeigbo',
          id: 10
        },
        {
          name: 'Irele',
          id: 11
        },
        {
          name: 'Odigbo',
          id: 12
        },
        {
          name: 'Okitipupa',
          id: 13
        },
        {
          name: 'Ondo East',
          id: 14
        },
        {
          name: 'Ondo West',
          id: 15
        },
        {
          name: 'Ose',
          id: 16
        },
        {
          name: 'Owo',
          id: 17
        }
      ]
    }
  },
  {
    state: {
      name: 'Osun',
      id: 30,
      locals: [
        {
          name: 'Atakunmosa West',
          id: 1
        },
        {
          name: 'Aiyedaade',
          id: 2
        },
        {
          name: 'Aiyedire',
          id: 3
        },
        {
          name: 'Boluwaduro',
          id: 4
        },
        {
          name: 'Boripe',
          id: 5
        },
        {
          name: 'Ede North',
          id: 6
        },
        {
          name: 'Ede South',
          id: 7
        },
        {
          name: 'Ife Central',
          id: 8
        },
        {
          name: 'Ife East',
          id: 9
        },
        {
          name: 'Ife North',
          id: 10
        },
        {
          name: 'Ife South',
          id: 11
        },
        {
          name: 'Egbedore',
          id: 12
        },
        {
          name: 'Ejigbo',
          id: 13
        },
        {
          name: 'Ifedayo',
          id: 14
        },
        {
          name: 'Ifelodun',
          id: 15
        },
        {
          name: 'Ila',
          id: 16
        },
        {
          name: 'Ilesa East',
          id: 17
        },
        {
          name: 'Ilesa West',
          id: 18
        },
        {
          name: 'Irepodun',
          id: 19
        },
        {
          name: 'Irewole',
          id: 20
        },
        {
          name: 'Isokan',
          id: 21
        },
        {
          name: 'Iwo',
          id: 22
        },
        {
          name: 'Obokun',
          id: 23
        },
        {
          name: 'Odo Otin',
          id: 24
        },
        {
          name: 'Ola Oluwa',
          id: 25
        },
        {
          name: 'Olorunda',
          id: 26
        },
        {
          name: 'Oriade',
          id: 27
        },
        {
          name: 'Orolu',
          id: 28
        },
        {
          name: 'Osogbo',
          id: 29
        }
      ]
    }
  },
  {
    state: {
      name: 'Oyo',
      id: 31,
      locals: [
        {
          name: 'Akinyele',
          id: 1
        },
        {
          name: 'Atiba',
          id: 2
        },
        {
          name: 'Atisbo',
          id: 3
        },
        {
          name: 'Egbeda',
          id: 4
        },
        {
          name: 'Ibadan North',
          id: 5
        },
        {
          name: 'Ibadan North-East',
          id: 6
        },
        {
          name: 'Ibadan North-West',
          id: 7
        },
        {
          name: 'Ibadan South-East',
          id: 8
        },
        {
          name: 'Ibadan South-West',
          id: 9
        },
        {
          name: 'Ibarapa Central',
          id: 10
        },
        {
          name: 'Ibarapa East',
          id: 11
        },
        {
          name: 'Ibarapa North',
          id: 12
        },
        {
          name: 'Ido',
          id: 13
        },
        {
          name: 'Irepo',
          id: 14
        },
        {
          name: 'Iseyin',
          id: 15
        },
        {
          name: 'Itesiwaju',
          id: 16
        },
        {
          name: 'Iwajowa',
          id: 17
        },
        {
          name: 'Kajola',
          id: 18
        },
        {
          name: 'Lagelu',
          id: 19
        },
        {
          name: 'Ogbomosho North',
          id: 20
        },
        {
          name: 'Ogbomosho South',
          id: 21
        },
        {
          name: 'Ogo Oluwa',
          id: 22
        },
        {
          name: 'Olorunsogo',
          id: 23
        },
        {
          name: 'Oluyole',
          id: 24
        },
        {
          name: 'Ona Ara',
          id: 25
        },
        {
          name: 'Orelope',
          id: 26
        },
        {
          name: 'Ori Ire',
          id: 27
        },
        {
          name: 'Oyo',
          id: 28
        },
        {
          name: 'Oyo East',
          id: 29
        },
        {
          name: 'Saki East',
          id: 30
        },
        {
          name: 'Saki West',
          id: 31
        },
        {
          name: 'Surulere',
          id: 32
        }
      ]
    }
  },
  {
    state: {
      name: 'Plateau',
      id: 32,
      locals: [
        {
          name: 'Barkin Ladi',
          id: 1
        },
        {
          name: 'Bassa',
          id: 2
        },
        {
          name: 'Jos East',
          id: 3
        },
        {
          name: 'Jos North',
          id: 4
        },
        {
          name: 'Jos South',
          id: 5
        },
        {
          name: 'Kanam',
          id: 6
        },
        {
          name: 'Kanke',
          id: 7
        },
        {
          name: 'Langtang South',
          id: 8
        },
        {
          name: 'Langtang North',
          id: 9
        },
        {
          name: 'Mangu',
          id: 10
        },
        {
          name: 'Mikang',
          id: 11
        },
        {
          name: 'Pankshin',
          id: 12
        },
        {
          name: "Qua'an Pan",
          id: 13
        },
        {
          name: 'Riyom',
          id: 14
        },
        {
          name: 'Shendam',
          id: 15
        },
        {
          name: 'Wase',
          id: 16
        }
      ]
    }
  },
  {
    state: {
      name: 'Rivers',
      id: 33,
      locals: [
        {
          name: 'Ahoada East',
          id: 1
        },
        {
          name: 'Ahoada West',
          id: 2
        },
        {
          name: 'Akuku-Toru',
          id: 3
        },
        {
          name: 'Andoni',
          id: 4
        },
        {
          name: 'Asari-Toru',
          id: 5
        },
        {
          name: 'Bonny',
          id: 6
        },
        {
          name: 'Degema',
          id: 7
        },
        {
          name: 'Eleme',
          id: 8
        },
        {
          name: 'Emuoha',
          id: 9
        },
        {
          name: 'Etche',
          id: 10
        },
        {
          name: 'Gokana',
          id: 11
        },
        {
          name: 'Ikwerre',
          id: 12
        },
        {
          name: 'Khana',
          id: 13
        },
        {
          name: 'Obio Akpor',
          id: 14
        },
        {
          name: 'Ogba Egbema Ndoni',
          id: 15
        },
        {
          name: 'Ogu Bolo',
          id: 16
        },
        {
          name: 'Okrika',
          id: 17
        },
        {
          name: 'Omuma',
          id: 18
        },
        {
          name: 'Opobo Nkoro',
          id: 19
        },
        {
          name: 'Oyigbo',
          id: 20
        },
        {
          name: 'Port Harcourt',
          id: 21
        },
        {
          name: 'Tai',
          id: 22
        }
      ]
    }
  },
  {
    state: {
      name: 'Sokoto',
      id: 34,
      locals: [
        {
          name: 'Bodinga',
          id: 1
        },
        {
          name: 'Dange Shuni',
          id: 2
        },
        {
          name: 'Gada',
          id: 3
        },
        {
          name: 'Goronyo',
          id: 4
        },
        {
          name: 'Gudu',
          id: 5
        },
        {
          name: 'Gwadabawa',
          id: 6
        },
        {
          name: 'Illela',
          id: 7
        },
        {
          name: 'Isa',
          id: 8
        },
        {
          name: 'Kebbe',
          id: 9
        },
        {
          name: 'Kware',
          id: 10
        },
        {
          name: 'Rabah',
          id: 11
        },
        {
          name: 'Sabon Birni',
          id: 12
        },
        {
          name: 'Shagari',
          id: 13
        },
        {
          name: 'Silame',
          id: 14
        },
        {
          name: 'Sokoto North',
          id: 15
        },
        {
          name: 'Sokoto South',
          id: 16
        },
        {
          name: 'Tambuwal',
          id: 17
        },
        {
          name: 'Tangaza',
          id: 18
        },
        {
          name: 'Tureta',
          id: 19
        },
        {
          name: 'Wamako',
          id: 20
        },
        {
          name: 'Wurno',
          id: 21
        },
        {
          name: 'Yabo',
          id: 22
        }
      ]
    }
  },
  {
    state: {
      name: 'Taraba',
      id: 35,
      locals: [
        {
          name: 'Bali',
          id: 1
        },
        {
          name: 'Donga',
          id: 2
        },
        {
          name: 'Gashaka',
          id: 3
        },
        {
          name: 'Gassol',
          id: 4
        },
        {
          name: 'Ibi',
          id: 5
        },
        {
          name: 'Jalingo',
          id: 6
        },
        {
          name: 'Karim Lamido',
          id: 7
        },
        {
          name: 'Kumi',
          id: 8
        },
        {
          name: 'Lau',
          id: 9
        },
        {
          name: 'Sardauna',
          id: 10
        },
        {
          name: 'Takum',
          id: 11
        },
        {
          name: 'Ussa',
          id: 12
        },
        {
          name: 'Wukari',
          id: 13
        },
        {
          name: 'Yorro',
          id: 14
        },
        {
          name: 'Zing',
          id: 15
        }
      ]
    }
  },
  {
    state: {
      name: 'Yobe',
      id: 36,
      locals: [
        {
          name: 'Bursari',
          id: 1
        },
        {
          name: 'Damaturu',
          id: 2
        },
        {
          name: 'Fika',
          id: 3
        },
        {
          name: 'Fune',
          id: 4
        },
        {
          name: 'Geidam',
          id: 5
        },
        {
          name: 'Gujba',
          id: 6
        },
        {
          name: 'Gulani',
          id: 7
        },
        {
          name: 'Jakusko',
          id: 8
        },
        {
          name: 'Karasuwa',
          id: 9
        },
        {
          name: 'Machina',
          id: 10
        },
        {
          name: 'Nangere',
          id: 11
        },
        {
          name: 'Nguru',
          id: 12
        },
        {
          name: 'Potiskum',
          id: 13
        },
        {
          name: 'Tarmuwa',
          id: 14
        },
        {
          name: 'Yunusari',
          id: 15
        },
        {
          name: 'Yusufari',
          id: 16
        }
      ]
    }
  },
  {
    state: {
      name: 'Zamfara',
      id: 37,
      locals: [
        {
          name: 'Bakura',
          id: 1
        },
        {
          name: 'Birnin Magaji Kiyaw',
          id: 2
        },
        {
          name: 'Bukkuyum',
          id: 3
        },
        {
          name: 'Bungudu',
          id: 4
        },
        {
          name: 'Gummi',
          id: 5
        },
        {
          name: 'Gusau',
          id: 6
        },
        {
          name: 'Kaura Namoda',
          id: 7
        },
        {
          name: 'Maradun',
          id: 8
        },
        {
          name: 'Maru',
          id: 9
        },
        {
          name: 'Shinkafi',
          id: 10
        },
        {
          name: 'Talata Mafara',
          id: 11
        },
        {
          name: 'Chafe',
          id: 12
        },
        {
          name: 'Zurmi',
          id: 13
        }
      ]
    }
  }
];

export const states = lgas.map((it) => it.state.name);

export const lga = (state: string) =>
  lgas
    .filter((it) => it.state.name === state)[0]
    .state.locals.map((it) => it.name);

export const city = (state: string) =>
  cities.filter((it) => it.state === state).map((it) => it.city);
