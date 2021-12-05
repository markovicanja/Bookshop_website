import { Book } from '../model/book.model';

export var allBooks: Book[] = [
    { 
        title: "Zlatni leptir",
        author: "Desanka Maksimović",
        pages: 120,
        year: 2021,
        description: `Najlepše pesme za decu. Životinjski i biljni svet je veoma raznovrstan i živ u pesmama Desanke Maksimović, a veoma duhovita i vedra atmosfera prati svet odraslih posmatran dečjim očima. 
        „Sve čega se dotaknemo i što pogledamo, donosi nam znanja“, kaže pesnikinja pokazajući nam da je priroda put do avanture, ali istovremeno i put do osećanja.
        Upoznajte se sa hvalisavim zečevima, saznajte otkud mače u džepu, izvolite na izložbu dece slikara, rešavajte zagonetke i uživajte u bajkovitoj poemi o zlatnom leptiru.
        Ovo nisu samo pesme namenjene deci već i svima koji se iskreno raduju životu.`,
        image: "zlatni_leptir_vv.jpg",
        promotion: false,
        rating: 4,
        comments: [
            {
                name: "Aleksa Janković",
                comment: "„Zlatni leptir“ je zbirka najlepših pesama, poema i zagonetki za najmlađe čitaoce iz pera čuvene pesnikinje Desanke Maksimović."
            }
        ] 
    },
    { 
        title: "Zanimljiva istorija Srba",
        author: "Momčilo Petrović",
        pages: 448,
        year: 2021,
        description: `Istoriju jedne nacije ne čine samo sećanja na sudbonosne bitke i velike heroje. Zanimljiva istorija Srba u 147 priča beleži i osvetljava one događaje i pojedince za koje u zvaničnim hronikama često neopravdano nije bilo mesta.
        Kratke i upečatljive priče iz ovog svojevrsnog istorijskog zabavnika dopašće se čitaocima različitih generacija i sigurno će iznenaditi nepoznatim detaljima i interesantnim činjenicama mnoge koji smatraju da dobro poznaju nacionalnu istoriju, književnost i društveno-političke prilike.`,
        image: "zanimljiva_istorija_srba_vv.jpg",
        promotion: true,
        rating: 3,
        comments: []
    },
    { 
        title: "Mi protiv vas",
        author: "Fredrik Bakman",
        pages: 488,
        year: 2021,
        description: `Roman je posvećen svim mukama i radostima, malim i velikim pričama koje sačinjavaju naše zajednice. Uz ogromnu saosećajnost i razumevanje, Bakman nam otkriva kako nas odanost, prijateljstvo i ljubaznost mogu provesti kroz najteže trenutke.`,
        image: "mi_protiv_vas_vv.jpg",
        promotion: true,
        rating: 3,
        comments: []
    },
    { 
        title: "Dajana: Njena ispovest",
        author: "Endru Morton",
        pages: 416,
        year: 2021,
        description: `Iznenadna i tragična smrt princeze Dajane navela je svet da se zapita koliko je ova jedinstvena žena značila svima nama. Ovo novo izdanje njene životne priče – koje uključuje i Dajanina sećanja, kao i nove detalje o događajima povezanim sa njenom smrću – dirljivo pojačava utisak koji je ostavila u našim srcima. Nikada ranije nijedan član najužeg kruga kraljevske porodice nije govorio tako iskreno i surovo o svom nesrećnom braku, odnosu sa kraljicom, neverovatnom životu u kući Vindzora, svojim nadama, strahovima i snovima.`,
        image: "dajana_njena_ispovest_vv.jpg",
        promotion: true,
        rating: 4,
        comments: []
    },
    { 
        title: "Izgubljena sestra",
        author: "Lusinda Rajli",
        pages: 704,
        year: 2021,
        description: `Svaka od šest sestara D’Aplijez prešla je neverovatan put da bi otkrila svoje poreklo, ali na ova pitanja i dalje nemaju odgovor: ko je i gde je sedma sestra?
        Imaju samo jedan trag – sliku smaragdnog prstena u obliku zvezde. Potraga za izgubljenom sestrom vodiće ih širom zemaljske kugle – od Novog Zelanda do Kanade, preko Engleske, Francuske i Irske – ujedinjujući ih u misiji da konačno upotpune svoju porodicu.
        U tom njihovom nastojanju, polako izlazi na svetlost dana priča o ljubavi, snazi i žrtvovanju, koja je počela pre gotovo sto godina, kad su hrabre mlade žene rizikovale sve da bi promenile svet.`,
        image: "izgubljena_sestra_vv.jpg",
        promotion: false,
        rating: 5,
        comments: []
    },
    { 
        title: "Moj deka je bio trešnja",
        author: "Anđela Naneti",
        pages: 140,
        year: 2005,
        description: `Kada je imao četiri godine, Tonino je imao njih četvoro: baku i deku u gradu, i baku i deku na selu. Oni iz grada zvali su se Luiđi i Antonijeta i sasvim su ličili na sve ljude iz grada. Oni sa sela zvali su se Otavijano i Teodolinda i nisu ličili ni na koga, čak ni na svoje komšije... Kroz priču o osećajnom i pametnom dečaku Toninu saznajemo mnogo o lepoti trenutaka provedenih sa bakama i dekama, o tome koliko je važno čuvati uspomene, o prirodi i povezanosti čoveka s njom. Za ovu knjigu su članovi jednog dečjeg žirija rekli da "nije kao druge - to je posebna knjiga..."`,
        image: "moj_deka_je_bio_tresnja_andjela_naneti.jpg",
        promotion: true,
        rating: 3,
        comments: []
    },
    { 
        title: "Čovek po imenu Uve",
        author: "Fredrik Bakman",
        pages: 360,
        year: 2017,
        description: `Upoznajte Uvea. On je džangrizalo – jedan od onih koji upiru prstom u ljude koji mu se ne dopadaju kao da su provalnici zatečeni pod njegovim prozorom. Svakog jutra Uve ide u inspekciju po naselju u kom živi. Premešta bicikle i proverava da li je đubre pravilno razvrstano – iako je već nekoliko godina prošlo otkako je razrešen dužnosti predsednika kućnog saveta. Ili otkako je „izvršen prevrat“, kako Uve govori o tome. Ljudi ga zovu „ogorčenim komšijom iz pakla“. Ali zar Uve mora da bude ogorčen samo zbog toga što ne šeta okolo sa osmehom zalepljenim na lice?`,
        image: "covek_po_imenu_uve_vv.jpg",
        promotion: false,
        rating: 5,
        comments: []
    },
    { 
        title: "Forest Gamp",
        author: "Vinston Grum",
        pages: 240,
        year: 2021,
        description: `Forest Gamp je sa šesnaest godina bio visok metar i devedeset osam santimetara, težio je sto deset kilograma, imao je koeficijent inteligencije 70 i ne baš prijatno detinjstvo. Ali je umeo da trči. I to veoma brzo. A onda ga je otkrio Univerzitet Alabame i od njega stvorio mladu zvezdu američkog fudbala. Tada je počela neverovatna avantura našeg komičnog junaka. Od vijetnamskog heroja do igrača ping-ponga svetskog ranga, od rvača u nameštenim mečevima do uspešnog preduzetnika, naredne tri decenije sudbina je sa Forestom zbijala šale.`,
        image: "forest_gamp_vv.jpg",
        promotion: false,
        rating: 4,
        comments: []
    },
    { 
        title: "E, zabole me",
        author: "Mark Manson",
        pages: 212,
        year: 2018,
        description: `Decenijama nam govore kako je pozitivno razmišljanje ključ srećnog, ispunjenog i bogatog života. „E, zabole me za pozitivno razmišljanje“, kaže Mark Manson, superstar blogerske scene. „Da budemo iskreni to tupljenje je neopevana budalaština i to mora da bude jasno“, kaže autor. On nam bez pardona predstavlja osvežavajuću, jednostavnu istinu koja nam danas svima tako nedostaje. E, zabole me je njegov protivotrov za sva ona zašećerena budi-pozitivan-dobro-se-osećaj učenja koja su inficirala moderno društvo i pokvarila čitave generacije.`,
        image: "e_zabole_me_vv.jpg",
        promotion: true,
        rating: 3,
        comments: []
    },
    { 
        title: "Zanimljiva istorija Srba",
        author: "Petrović",
        pages: 448,
        year: 2021,
        description: ``,
        image: "zanimljiva_istorija_srba_vv.jpg",
        promotion: true,
        rating: 3,
        comments: []
    },
    { 
        title: "Nisam kriva",
        author: "Jelena Bačić Alimpić",
        pages: 304,
        year: 2021,
        description: `Bile su saučesnice u bolu, u životu koji je bio težak i nepravedan, ali od koga se nije smelo odustati. Jer život je dar koji se ne može tek tako odbaciti, pokloniti drugome ili sakriti u kutiju uspomena. Uprkos svemu, za njega se vredi boriti.`,
        image: "nisam_kriva_vv.jpg",
        promotion: true,
        rating: 3,
        comments: []
    },
    { 
        title: "Đubre",
        author: "Marko Vidojković",
        pages: 216,
        year: 2020,
        description: `„Vidojković ponire duboko u psihopatologiju neimenovanih likova koji su iz sjene u velikoj mjeri preoblikovali posttranzicijska društva na ovim prostorima. Posebna vrijednost ovog romana je lik Dragiše, pripovjedača romana, sive eminencije predsjednika Srbije, ’srpskog Psiha’, u kojega je Vidojković ugradio sve negativne stereotipe o Srbima, one koje drugi gaje o njima, ali i one koje oni sami stvaraju o sebi.“ Josip Mlakić`,
        image: "djubre_vv.jpg",
        promotion: true,
        rating: 5,
        comments: []
    },
    { 
        title: "Zanimljiva istorija Srba",
        author: "Petrović",
        pages: 448,
        year: 2021,
        description: ``,
        image: "zanimljiva_istorija_srba_vv.jpg",
        promotion: true,
        rating: 3,
        comments: []
    },
    { 
        title: "Deca zla",
        author: "Miodrag Majić",
        pages: 357,
        year: 2019,
        description: `U središtu romana Deca zla nalazi se dramatično ubistvo, a potraga za počiniocem biće samo okidač za niz drugih događaja koji će otkriti da je reč o zločinu strasti, osvete, opomene i simbolike.
        Kako pronaći krivca u svetu u kom je istina izobličena, a prošlost junaka utkana u njihovu sadašnjost neraskidivim nitima zla? Nikola Bobić, beogradski advokat, pokušaće da pronađe odgovor na to pitanje, ni ne sluteći da će ga odgovor zauvek promeniti.`,
        image: "deca_zla_vv.jpg",
        promotion: true,
        rating: 3,
        comments: []
    },
    { 
        title: "Bajni svete, gde si ti",
        author: "Sali Runi",
        pages: 304,
        year: 2021,
        description: `U fokusu trećeg romana irskog književnog čuda Sali Runi je prijateljstvo između Alis, mlade književnice, koja se nakon sloma kome je u velikoj meri doprineo njen iznenadni i veliki uspeh povukla da živi u malo mesto na obali, i Ajlin, urednice u književnom magazinu iz Dablina. Njihove ljubavne veze – Alis sa Feliksom, radnikom u lokalnom skladištu, i Ajlin sa Sajmonom, prijateljem od detinjstva – sasvim svojstveno Sali Runi, prepune su uspona i padova, strasti i očaja, nežnosti i uvreda, potpune bliskosti i nerazumevanja.`,
        image: "bajni_svete_gde_si_ti_vv.jpg",
        promotion: true,
        rating: 3,
        comments: []
    },
    { 
        title: "Neki drugi život",
        author: "Jelena Bačić Alimpić",
        pages: 328,
        year: 2020,
        description: `Bliznakinje Irene i Marta van der Linden bezbrižno provode detinjstvo i mladost u živopisnom gradiću Harlemu, nadomak Amsterdama. Izgledom skoro identične ali po karakteru nepomirljivo različite, neraskidivo su vezane jedna za drugu.`,
        image: "neki_drugi_zivot_vv.jpg",
        promotion: true,
        rating: 5,
        comments: []
    },
    { 
        title: "Reka sa četiri ušća",
        author: "Siniša Kovačević",
        pages: 341,
        year: 2020,
        description: `Kada posle dvadeset godina boravka u Kanadi, doktor Vojin Stojanović odluči, neočekivano i odjednom, da se vrati u Srbiju i pozvoni na nekoliko vratiju u Zemunu, Somboru, Beogradu... Da skokne do Zagreba, neće znati u šta se upušta. Razumevaće postepeno u kakvu političku kaljugu se pretvorila njegova Prva Otadžbina i u kakav mulj kriminala, podlosti i beščašća je potonuo njegov rodni grad. Kada mu, u jednom trenutku, život bude ozbiljno ugrožen, odlučiće da se vrati u Drugu Otadzbinu, u Toronto... A onda će se, opet hirovito i nenadano, predomisliti i odlučiti da ostane i da se bori...`,
        image: "reka_sa_cetiri_usca_vv.jpg",
        promotion: true,
        rating: 2,
        comments: []
    },
    { 
        title: "Semper idem",
        author: "Đorđe Lebović",
        pages: 552,
        year: 2016,
        description: `Premda za života poznat prevashodno kao dramaturg i scenarista (Nebeski odred, Haleluja, Viktorija, Traganje po pepelu, Ravangrad 1900, Valter brani Sarajevo i dr.), Lebović je pisao i novele i objavljivao ih u časopisima 60-ih i 70-ih godina XX veka. Ipak, opus magnum Đorđa Lebovića, po jedinstvenoj oceni kritike, predstavlja upravo ovo njegovo testamentarno delo, roman-hronika o detinjstvu u Kraljevini Jugoslaviji uoči II svetskog rata, koja je i zbog osobenog piščevog stila i originalnog postupka, kao i zbog teme i njene književne transpozicije, prepoznata kao kanonsko delo savremene srpske književnosti.`,
        image: "semper_idem_vv.jpg",
        promotion: true,
        rating: 3,
        comments: []
    },
    { 
        title: "Žena bližnjega tvoga",
        author: "Toni Parsons",
        pages: 320,
        year: 2021,
        description: `Jednim nepromišljenim flertom na poslovnom putu daleko od kuće Tara sve stavlja na kocku. Iznenada njen život iz snova postaje košmar na javi kada joj oženjeni muškarac s kojim je provela noć kaže da želi ozbiljnu vezu. I da neće ostaviti na miru njenu dragocenu porodicu dok na to ne pristane.`,
        image: "zena_bliznjega_tvoga_vv.jpg",
        promotion: true,
        rating: 3,
        comments: []
    },
    { 
        title: "Una",
        author: "Momo Kapor",
        pages: 216,
        year: 2021,
        description: `Roman Una, koji je nastao 1981. godine, spada u red najčitanijih dela Mome Kapora, ne samo zbog intrigantne ljubavne priče oko koje se radnja odvija već i zbog načina na koji je autor uspeo da dočara duh jednog vremena i tako ga zauvek sačuvao od zaborava.`,
        image: "una_vv.jpg",
        promotion: true,
        rating: 5,
        comments: []
    },
    { 
        title: "Zamalek",
        author: "Dejan Tiago-Stanković",
        pages: 352,
        year: 2020,
        description: `U srcu Kaira, na ostrvu usred Nila, decenijama je postojala antikvarnica krcata svakojakim blagom kao Ali-babina pećina. Radnju, najčuveniju u tom delu sveta, vodili su Kosta, glasoviti egiptolog, i njegova poćerka Arna sve dok kismet, zbog nekih Kostinih misterioznih greha, nije odlučio drugačije. Ova priča u kojoj se mešaju ovozemaljski i zagrobni život nije mogla da se dogodi nigde osim u Kairu, pa su taj pustinjski megalopolis, njegova tiha mahala Zamalek, ljudi, običaji i vrelina grada jednako važni junaci romana kao i Kosta antikvar i pripovedačica Arna, prašina koja stalno pada i Nil koji teče kao život.`,
        image: "zamalek_vv.jpg",
        promotion: true,
        rating: 5,
        comments: []
    },
]
