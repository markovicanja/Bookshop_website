import { Recommendations } from '../model/recommendations.model';

export var allRecommendations: Recommendations[] = [
    {
        user: "anjamarkovic", 
        recommendations: [
            {
                book: { 
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
                username: "vukzekovic"
            },
            {
                book: { 
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
                username: "vladimirnikolic"
            }
        ]
    },
]