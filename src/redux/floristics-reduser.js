const SET_ROSE_CARDS = "SET_ROSE_CARDS";
const SET_SPRING_CARDS = "SET_SPRING_CARDS";
const SET_SUMMER_CARDS = "SET_SUMMER_CARDS";
const SET_WINTER_CARDS = "SET_WINTER_CARDS";
const SET_AUTUMN_CARDS = "SET_AUTUMN_CARDS";
const SET_TOGGLE_ROSE = "SET_TOGGLE_ROSE";
const SET_TOGGLE_SPRING = "SET_TOGGLE_SPRING";
const SET_TOGGLE_SUMMER = "SET_TOGGLE_SUMMER";
const SET_TOGGLE_WINTER = "SET_TOGGLE_WINTER";
const SET_TOGGLE_AUTUMN = "SET_TOGGLE_AUTUMN";
const SET_TOGGLE_BRIDE_BOUQUETE = "SET_TOGGLE_BRIDE_BOUQUETE";
const SET_TOGGLE_BOUTONNIERE = "SET_TOGGLE_BOUTONNIERE";
const SET_TOGGLE_DECORATION = "SET_TOGGLE_DECORATION";
const SET_TOGGLE_CEREMONY = "SET_TOGGLE_CEREMONY";
const SET_TOGGLE_WEDDING_ARCH = "SET_TOGGLE_WEDDING_ARCH";

let initialState = {
    isInitial: false,
    initialTitle: "",
    initialCards: [],
    roseCards: [
        {
            id: 1,
            title: "Букет із 141 троянди Пенні Лейн",
            article: "561_im",
            description: "Букет із 141 жовтої троянди Пенні Лейн порадує своїм насиченим сонячним кольором",
            imgSrc: [
                "https://shop.camellia.ua/upload/kamelia_flora/photos/a2/fa/1200x1200/7db1658f_5ef1ced5634f0.JPG",
                "https://mulrosas.com/wp-content/uploads/2023/06/BRIGHTON-1-scaled.jpg",
                "https://gorodprizrak.com/wp-content/uploads/2023/06/e7c31fa430640966925a273fab0a166f.jpg"
            ]
        },
        {
            id: 2,
            title: "Букет із 101 троянди Гран Прі",
            article: "658_im",
            description: "Великий букет з 101 червоної троянди Гран Прі",
            imgSrc: [
                "https://lorashen.ua/static/media/uploads/product/Rose/img_8547_sq.jpg",
                "https://img.freepik.com/premium-photo/red-roses-bouquet_932514-17364.jpg"
            ]
        },
        {
            id: 3,
            title: "Букет із півонієподібних троянд Місті Бабблз",
            article: "",
            description: "Букет із півонієподібних троянд спрей Місті Бабблз. Висота від 50 см.",
            imgSrc: [
                "https://camellia.ua/upload/kamelia_flora/photos/d6/32/545x545/ccc92332_617856accd1cd.jpeg",
                "https://aventuramall.com/wp-content/uploads/2020/08/emotion-growers.jpg",
                "https://camellia.ua/upload/kamelia_flora/photos/42/28/545x545/d4829e0_6178569096d68.jpeg"
            ]
        },
        {
            id: 4,
            title: "Букет із півонієподібних троянд Річ Бабблз",
            article: "",
            description: "Букет із півонієподібних троянд спрей Річ Бабблз. Висота від 50 см.",
            imgSrc: [
                "https://camellia.ua/upload/kamelia_flora/photos/b6/54/545x545/f457d0c6_61780a564b546.jpeg",
                "https://camellia.ua/upload/kamelia_flora/photos/83/98/545x545/9d05ed2_61780a5b6b71a.jpeg"
            ]
        },
        {
            id: 5,
            title: "Букет мікс із 55 троянд спрей",
            article: "573-1_im",
            description: "Букет із 55 троянд спрей Крем Грація і Лавлі Лідія.",
            imgSrc: [
                "https://camellia.ua/upload/kamelia_flora/photos/1c/d1/545x545/a171ed01_5d4abe0e87619.JPG",
                "https://camellia.ua/upload/kamelia_flora/photos/c0/2f/545x545/71475049_5d4abe1d54ef8.JPG",
                "https://camellia.ua/upload/kamelia_flora/photos/62/46/545x545/d49f9fe4_5d4abe207d9b1.JPG"
            ]
        },
        {
            id: 6,
            title: "Композиція в коробці Сноу Ворлд",
            article: "567_im",
            description: "Велика біла коробка з трояндою спрей Сноу Ворлд і зеленню",
            imgSrc: [
                "https://camellia.ua/upload/kamelia_flora/photos/e5/75/545x545/698bd1ab_5d4abc7029b1b.JPG",
                "https://camellia.ua/upload/kamelia_flora/photos/0e/73/545x545/d4bc6033_5d4abc7467609.JPG",
                "https://camellia.ua/upload/kamelia_flora/photos/a7/18/545x545/1af75f28_5d4abc77b19bf.JPG",
                "https://camellia.ua/upload/kamelia_flora/photos/66/20/545x545/c6213933_5d4abc7dee1c9.JPG"
            ]
        },
        {
            id: 7,
            title: "Букет мікс із 51 троянди спрей",
            article: "666_im",
            description: "Букет мікс із 51 троянди спрей Ванесса і Сноу Флейк",
            imgSrc: [
                "https://camellia.ua/upload/kamelia_flora/photos/ed/bb/545x545/87d06dd7_5d4ab3aaa55ef.JPG",
                "https://camellia.ua/upload/kamelia_flora/photos/03/d8/545x545/148b7c30_5d4ab3af0984b.JPG"
            ]
        },
        {
            id: 8,
            title: "Композиція в коробці «Бабблз»",
            article: "558_im",
            description: "Мікс троянди спрей Місті Бабблз і Річ Бабблз, оформлений у світлу капелюшну коробку",
            imgSrc: [
                "https://camellia.ua/upload/kamelia_flora/photos/ca/4a/545x545/d45d202b_5d4aab4a0f618.JPG",
                "https://camellia.ua/upload/kamelia_flora/photos/bf/79/545x545/8b78ee6d_5d4aab458310a.JPG",
                "https://camellia.ua/upload/kamelia_flora/photos/11/65/545x545/5b11f9a9_5d4aab412bc5c.JPG",
                "https://camellia.ua/upload/kamelia_flora/photos/e6/f1/545x545/e6827171_5d4aab3cd29e5.JPG"
            ]
        },
        {
            id: 9,
            title: "Букет із 35 троянд спрей Хеппі Йо-йо",
            article: "667_im",
            description: "Ніжні бузкові троянди спрей Хеппі Йо-йо. " +
                "Букет із таких троянд підкреслить ваше відчуття стилю, а назва скаже сама за себе: " +
                "одержувачу букета бажають веселощів і благополуччя.",
            imgSrc: [
                "https://camellia.ua/upload/kamelia_flora/photos/4d/43/545x545/af16e348_5d4aa9e67439b.JPG",
                "https://camellia.ua/upload/kamelia_flora/photos/b5/84/545x545/2dccb9e7_5d4aa9e9e15f1.JPG",
                "https://camellia.ua/upload/kamelia_flora/photos/d9/c3/545x545/c6842a_5d4aa9ed23992.JPG",
                "https://camellia.ua/upload/kamelia_flora/photos/e3/d1/545x545/f01925fe_5d4aa9f0a56b2.JPG"
            ]
        },
        {
            id: 10,
            title: "Композиція в коробці Білий танець",
            article: "579_im",
            description: "Елегантна композиція в сірій шляпной коробці з піоновідние трояндою спрей Сноу Ворл",
            imgSrc: [
                "https://camellia.ua/upload/kamelia_flora/photos/1d/53/545x545/648e0387_5d4aa8483fab8.JPG",
                "https://camellia.ua/upload/kamelia_flora/photos/24/2c/545x545/2bf1d56e_5d4aa85e4ee95.JPG",
                "https://camellia.ua/upload/kamelia_flora/photos/42/f0/545x545/2470d94d_5d4aa865a86fc.JPG"
            ]
        },
        {
            id: 11,
            title: "Букет із 21 троянди спрей",
            article: "",
            description: "Букет з троянд Крем Грація, Ред Ванесса, Хеппі Йо-йо, Лакі Йо-йо",
            imgSrc: [
                "https://camellia.ua/upload/kamelia_flora/photos/be/f5/545x545/d50d2b62_5f8cb6b658695.jpeg",
                "https://camellia.ua/upload/kamelia_flora/photos/c2/74/545x545/95a25347_5f8cb6bf8c5ee.jpeg"
            ]
        },
        {
            id: 12,
            title: "Букет із троянд Сноу Ворлд",
            article: "",
            description: "Букет iз пiоноподiбних троянд спрей Сноу Ворлд",
            imgSrc: [
                "https://camellia.ua/upload/kamelia_flora/photos/c6/0b/545x545/9e91568f_6177f2fa45f74.jpeg",
                "https://camellia.ua/upload/kamelia_flora/photos/34/ea/545x545/9db58098_6177f302e9119.jpeg",
                "https://camellia.ua/upload/kamelia_flora/photos/fc/7a/545x545/96c8ca2b_6177f314735b1.jpeg",
                "https://camellia.ua/upload/kamelia_flora/photos/89/f6/545x545/68988a86_61829e7872e7e.jpeg"
            ]
        }
    ],
    springCards: [
        {
            id: 21,
            title: "Букет № 1541 з анемонами",
            article: "1541",
            description: "Анемона, імпортна троянда, тюльпан, гвоздика, еустома, евкаліпт",
            imgSrc: [
                "https://camellia.ua/upload/kamelia_flora/photos/cf/bc/545x545/1cf40fac_5e5cd6fb45ac5.JPG",
                "https://camellia.ua/upload/kamelia_flora/photos/a0/f7/545x545/7800d9ae_5e5cd6f96b823.JPG",
                "https://camellia.ua/upload/kamelia_flora/photos/dd/ee/545x545/f007f685_5e5cd7055504d.JPG"
            ]
        },
        {
            id: 22,
            title: "Букет № 1539 з анемонами",
            article: "1539",
            description: "Анемона, тюльпан, імпортна троянда, троянда спрей Ванесса, гвоздика," +
                " матіола, дженестра, астільба, вібурнум, незабудка, евкаліпт",
            imgSrc: [
                "https://camellia.ua/upload/kamelia_flora/photos/27/c5/545x545/c80fe390_5e5ec0268b311.JPG",
                "https://camellia.ua/upload/kamelia_flora/photos/3a/d2/545x545/e631e1e8_5e5ec025809e4.JPG"
            ]
        },
        {
            id: 23,
            title: "Букет № 1538 з альстромеріями",
            article: "1538",
            description: "Амариліс, тюльпан, ранункулюс, імпортна троянда, троянда Ель Торо, троянда спрей, ськими",
            imgSrc: [
                "https://camellia.ua/upload/kamelia_flora/photos/54/28/545x545/ee3cbef4_5e5c26510765a.JPG",
                "https://camellia.ua/upload/kamelia_flora/photos/fc/f8/545x545/7e051def_5e5c2651f40a2.JPG",
                "https://camellia.ua/upload/kamelia_flora/photos/d5/03/545x545/42cc882c_5e5c26536cc73.JPG"
            ]
        },
        {
            id: 24,
            title: "Букет № 1522 з ранункулюсами",
            article: "1522",
            description: "Тюльпан Брауні, ранункулюс, троянда, брунія, еустома",
            imgSrc: [
                "https://camellia.ua/upload/kamelia_flora/photos/c9/d5/545x545/8f7b948a_5e5eb1eb2ae43.JPG"
            ]
        },
        {
            id: 25,
            title: "Букет № 1503 з тюльпанами і гортензією",
            article: "1503",
            description: "Гортензія, троянда спрей Сноу Ворлд, тюльпан, брунія, імпортна троянда",
            imgSrc: [
                "https://camellia.ua/upload/kamelia_flora/photos/07/a6/545x545/b254f5ac_5e5ebe453c007.JPG",
                "https://camellia.ua/upload/kamelia_flora/photos/0c/ee/545x545/6f3cdc77_5e5ebe4336787.JPG",
                "https://camellia.ua/upload/kamelia_flora/photos/60/ac/545x545/af8f732b_5e5ebe422f401.JPG"
            ]
        },
        {
            id: 26,
            title: "Букет № 1500 з тюльпанами",
            article: "1500",
            description: "Тюльпан Брауні, троянда Меморі Лейн, хамелаціум, евкаліпт",
            imgSrc: [
                "https://camellia.ua/upload/kamelia_flora/photos/ce/c6/545x545/1383986c_5e5eb0fa04ee0.JPG",
                "https://camellia.ua/upload/kamelia_flora/photos/c5/6d/545x545/78dea9c9_5e5eb0fc1efee.JPG",
                "https://camellia.ua/upload/kamelia_flora/photos/a4/0b/545x545/d9ce3e93_5e5eb0fb09b7b.JPG"
            ]
        },
        {
            id: 27,
            title: "Букет з тюльпаном Springfield",
            article: "1228",
            description: "Тюльпан Springfield, гіацинт, нарцис, троянда Піч Аваланч, троянда Пенні Лейн",
            imgSrc: [
                "https://camellia.ua/upload/kamelia_flora/photos/1b/9d/545x545/a8df194_5e5c289f31a3c.JPG",
                "https://camellia.ua/upload/kamelia_flora/photos/40/65/545x545/fa32bf03_5e5c289c74e30.JPG",
                "https://camellia.ua/upload/kamelia_flora/photos/00/23/545x545/7bf00651_5e5c289d40c8d.JPG"
            ]
        },
        {
            id: 28,
            title: "Букет № 709 з тюльпанами",
            article: "709",
            description: "Букет із білих і ніжно-лимонних тюльпанів і еустоми",
            imgSrc: [
                "https://camellia.ua/upload/kamelia_flora/photos/7b/fb/545x545/370896a8_5e5d37b2cfa54.JPG",
                "https://camellia.ua/upload/kamelia_flora/photos/6b/03/545x545/68580cdd_5e5d37b1c56f8.JPG"
            ]
        }
    ],
    summerCards: [
        {
            id: 31,
            title: "Композиція Інь-ян",
            article: "486",
            description: "Гортензія, еустома, півонія, фрезія, вероніка, троянда Талея, евкаліпт",
            imgSrc: [
                "https://camellia.ua/upload/kamelia_flora/photos/ed/96/545x545/491761a8_5f8ca58c2f097.jpeg",
                "https://camellia.ua/upload/kamelia_flora/photos/f3/7b/545x545/ce00427c_5f8ca59509cb0.jpeg",
                "https://camellia.ua/upload/kamelia_flora/photos/83/e6/545x545/43089760_5f8ca59dc888f.jpeg"
            ]
        },
        {
            id: 32,
            title: "Букет із 51 півонії Дюшес",
            article: "413",
            description: "Букет із 51 голландского піона Дюшес",
            imgSrc: [
                "https://camellia.ua/upload/kamelia_flora/photos/a9/2b/545x545/36fd1bd2_5f8cb2f8469fb.jpeg",
                "https://camellia.ua/upload/kamelia_flora/photos/a2/9f/545x545/f7ac4f81_5f8cb300b3089.jpeg"
            ]
        },
        {
            id: 33,
            title: "Букет з орхідеєю Фаленопсис",
            article: "411",
            description: "Орхідея Фаленопсис, троянда Аваланч, троянда спрей Місті Бабблз, еустома, солідаго, гиперикум, евкаліпт",
            imgSrc: [
                "https://camellia.ua/upload/kamelia_flora/photos/15/20/545x545/8549ec5e_5f8c9eb4e44dd.jpeg",
                "https://camellia.ua/upload/kamelia_flora/photos/0d/25/545x545/cc8f5f4e_5f8c9ebff200f.jpeg"
            ]
        },
        {
            id: 34,
            title: "Букет з півоніями і трояндами Меморі Лейн",
            article: "253",
            description: "Півонії, троянда Меморі Лейн, хамелаціум, статиця, vатіола, еустома",
            imgSrc: [
                "https://camellia.ua/upload/kamelia_flora/photos/33/00/545x545/9fab5498_5f8cb4547f0a4.jpeg"
            ]
        },
        {
            id: 35,
            title: "Букет з півоніями Сара Бернар",
            article: "362",
            description: "Півонії Сара Бернар, троянда спрей Сноу Ворлд, еустома, гвоздика, матіола",
            imgSrc: [
                "https://camellia.ua/upload/kamelia_flora/photos/9a/30/545x545/d9de7be8_5f8cb32ab5629.jpeg",
                "https://camellia.ua/upload/kamelia_flora/photos/a9/9b/545x545/5e4bb5d0_5f8cb334c3ae5.jpeg"
            ]
        },
        {
            id: 36,
            title: "Букет Тоффі",
            article: "346",
            description: "Гортензія, троянда спрей Сноу Ворлд, еустома, гвоздика спрей, лагурус, евкаліпт",
            imgSrc: [
                "https://camellia.ua/upload/kamelia_flora/photos/cc/ea/545x545/1ebbb47e_5f8ca46d53b7d.jpeg",
                "https://camellia.ua/upload/kamelia_flora/photos/40/e4/545x545/819f2139_5f8ca47a1894e.jpeg"
            ]
        },
    ],
    winterCards: [
        {
            id: 41,
            title: "Зимовий букет мікс",
            article: "1590",
            description: "",
            imgSrc: [
                "https://camellia.ua/upload/kamelia_flora/photos/62/08/545x545/40409d24_5f8c35a128b08.jpeg",
                "https://camellia.ua/upload/kamelia_flora/photos/d6/cd/545x545/ccb93ea2_5f8c35aa73df8.jpeg",
                "https://camellia.ua/upload/kamelia_flora/photos/1c/bb/545x545/d399109c_5f8c35b3e7510.jpeg"
            ]
        },
        {
            id: 42,
            title: "Букет з малиновими півоніями",
            article: "1592",
            description: "",
            imgSrc: [
                "https://camellia.ua/upload/kamelia_flora/photos/17/37/545x545/ce80ecce_5f8c3800d3a2c.jpeg",
                "https://camellia.ua/upload/kamelia_flora/photos/41/58/545x545/ce54817a_5f8c38085f267.jpeg"
            ]
        },
        {
            id: 43,
            title: "Букет з тюльпанами Royal blue",
            article: "",
            description: "Тюльпан Royal blue, троянда спрей Сноу Ворлд, гвоздика, дженестра, астрантія, стіфа",
            imgSrc: [
                "https://camellia.ua/upload/kamelia_flora/photos/0b/f6/545x545/e0fce990_5e5ec27f943f2.JPG",
                "https://camellia.ua/upload/kamelia_flora/photos/50/e3/545x545/7804deac_5e5ec28095b53.JPG"
            ]
        },
        {
            id: 44,
            title: "Букет Зимова мелодія",
            article: "354",
            description: "",
            imgSrc: [
                "https://camellia.ua/upload/kamelia_flora/photos/cc/66/545x545/8cdf6957_5f8c3d32e4985.jpeg",
                "https://camellia.ua/upload/kamelia_flora/photos/f1/97/545x545/b2436371_5f8c3d3b80e22.jpeg",
                "https://camellia.ua/upload/kamelia_flora/photos/21/8f/545x545/f2dda62b_5f8c3d542c689.jpeg"
            ]
        },
        {
            id: 45,
            title: "Букет Фенікс",
            article: "374",
            description: "Ранункулюс, леукадендрон, блакитний тюльпан, кала, троянда Меморі Лейн, гвоздика, брасіка, евкаліпт",
            imgSrc: [
                "https://camellia.ua/upload/kamelia_flora/photos/9f/de/545x545/732583d0_5f8c48bf4a48b.jpeg",
                "https://camellia.ua/upload/kamelia_flora/photos/06/a3/545x545/672a4706_5f8c48c7eb27f.jpeg",
                "https://camellia.ua/upload/kamelia_flora/photos/36/c3/545x545/7b3a9610_5f8c48d1cab1b.jpeg"
            ]
        },
        {
            id: 46,
            title: "Букет Мурсія",
            article: "1565",
            description: "Троянда Пенні Лейн, нарцис, брасіка, кала, троянда спрей Оранж Фаєр, еустома, леукадендрон, евкаліпт",
            imgSrc: [
                "https://camellia.ua/upload/kamelia_flora/photos/d3/fa/545x545/e2b1b98b_5f8c48fd48d43.jpeg",
                "https://camellia.ua/upload/kamelia_flora/photos/cf/cd/545x545/d0a86f46_5f8c4904c273d.jpeg"
            ]
        },
        {
            id: 47,
            title: "Букет Шампань",
            article: "1564",
            description: "Гортензія, троянда Місті Бабблз, анемона, троянда Меморі Лейн, тюльпан, еустома, евкаліпт",
            imgSrc: [
                "https://camellia.ua/upload/kamelia_flora/photos/91/02/545x545/a5ffc3a5_5f8c494324b48.jpeg",
                "https://camellia.ua/upload/kamelia_flora/photos/c9/34/545x545/3a3245e2_5f8c494abc7bb.jpeg"
            ]
        },
        {
            id: 48,
            title: "Букет з протеєю",
            article: "1591",
            description: "",
            imgSrc: [
                "https://camellia.ua/upload/kamelia_flora/photos/35/07/545x545/eff0f07b_5f8c372bbb1ab.jpeg",
                "https://camellia.ua/upload/kamelia_flora/photos/69/ce/545x545/30b6febb_5f8c3732b8c4a.jpeg"
            ]
        },
        {
            id: 49,
            title: "Композиція № 1134 з трояндами Меморі Лейн",
            article: "1134",
            description: "",
            imgSrc: [
                "https://camellia.ua/upload/kamelia_flora/photos/71/2a/545x545/4e00fb89_5f8c37c131399.jpeg",
                "https://camellia.ua/upload/kamelia_flora/photos/79/5b/545x545/510d42a8_5f8c37c987031.jpeg",
                "https://camellia.ua/upload/kamelia_flora/photos/a0/36/545x545/58538914_5f8c37d316afa.jpeg",
                "https://camellia.ua/upload/kamelia_flora/photos/a9/ee/545x545/189d8d3c_5f8c37d9bb77f.jpeg"
            ]
        },
        {
            id: 50,
            title: "Букет з еквадорською трояндою",
            article: "",
            description: "",
            imgSrc: [
                "https://camellia.ua/upload/kamelia_flora/photos/e7/a2/545x545/c3d61a01_5f8c383517d7f.jpeg",
                "https://camellia.ua/upload/kamelia_flora/photos/23/79/545x545/82b09372_5f8c383c9343e.jpeg"
            ]
        },
    ],
    autumnCards: [
        {
            id: 51,
            title: "Букет з амарилісом і трояндою Пенні Лейн",
            article: "924",
            description: "Амариліс, троянда Пенні Лейн, троянда спрей Оранж Фаєр, гвоздика, еустома, леукоспермум, декоративне листя дуба",
            imgSrc: [
                "https://camellia.ua/upload/kamelia_flora/photos/fd/09/545x545/ce42051e_5f72e9bd94eed.jpeg",
                "https://camellia.ua/upload/kamelia_flora/photos/9b/9c/545x545/472eeeff_5f72e9b56cd03.jpeg"
            ]
        },
        {
            id: 52,
            title: "Букет з антуріумом і декоративним ананасом",
            article: "1600",
            description: "Антуріум, гортензія, троянда Кенді Аваланч, троянда спрей Грація, хелеборус, піоноподібна троянда Піано, еустома",
            imgSrc: [
                "https://camellia.ua/upload/kamelia_flora/photos/bd/12/545x545/e2fde1ae_5f72ef5a46f7c.jpeg",
                "https://camellia.ua/upload/kamelia_flora/photos/06/a3/545x545/323bb6e2_5f72efa08997d.jpeg",
                "https://camellia.ua/upload/kamelia_flora/photos/1d/32/545x545/f966dbae_5f72efb9293e6.jpeg"
            ]
        },
        {
            id: 53,
            title: "Композиція з гортензією і півонією",
            article: "1978",
            description: "Гортензія, піоноподібна троянда Місті Бабблз, півонія, еустома, солідаго",
            imgSrc: [
                "https://camellia.ua/upload/kamelia_flora/photos/5c/a4/545x545/e54d352f_5f72f55da1319.jpeg",
                "https://camellia.ua/upload/kamelia_flora/photos/63/51/545x545/390631b7_5f72f54d3425a.jpeg",
                "https://camellia.ua/upload/kamelia_flora/photos/d5/02/545x545/2a3be400_5f72f555c7fe4.jpeg"
            ]
        },
        {
            id: 54,
            title: "Композиція з гортензією і орхідеєю",
            article: "925",
            description: "Гортензія, півонії, орхідея Фаленопсис, еустома, піоноподібні троянда Місті Бабблз, солідаго, хелеборус",
            imgSrc: [
                "https://camellia.ua/upload/kamelia_flora/photos/69/c3/545x545/943f2023_5f72f17d0d41e.jpeg",
                "https://camellia.ua/upload/kamelia_flora/photos/a8/a0/545x545/fc18f0f3_5f72f166420d6.jpeg",
                "https://camellia.ua/upload/kamelia_flora/photos/32/b2/545x545/cacc848d_5f72f15d0f286.jpeg",
                "https://camellia.ua/upload/kamelia_flora/photos/39/91/545x545/ec3bd4ea_5f72f1745201c.jpeg"
            ]
        },
        {
            id: 55,
            title: "Букет з артишоком",
            article: "1583",
            description: "Артишок, хризантема, піоноподібна троянда Девіда Остіна, троянда Шарман, леукоспермум, кала, еустома",
            imgSrc: [
                "https://camellia.ua/upload/kamelia_flora/photos/c7/de/545x545/777d706b_5f7ae74429582.jpeg",
                "https://camellia.ua/upload/kamelia_flora/photos/4d/24/545x545/6f478398_5f7ae74ec329a.jpeg"
            ]
        },
        {
            id: 56,
            title: "Букет з лотосом",
            article: "421",
            description: "Гортензія, піоноподібна троянда Сноу Ворлд, лотос, гвоздика, амарантус, хамелаціум, декоративне листя дуба",
            imgSrc: [
                "https://camellia.ua/upload/kamelia_flora/photos/05/04/545x545/b84e286c_5f8bfa7a1b1de.jpeg",
                "https://camellia.ua/upload/kamelia_flora/photos/12/ab/545x545/29f78fa8_5f8bfa846211d.jpeg"
            ]
        },
        {
            id: 57,
            title: "Букет Шоколад",
            article: "428",
            description: "Гортензія, хризантема, гвоздика, декоративні ананаси, гіпсофіла, кала, декоративне листя дуба",
            imgSrc: [
                "https://camellia.ua/upload/kamelia_flora/photos/a3/de/545x545/929393a7_5fc61f4936de8.jpeg",
                "https://camellia.ua/upload/kamelia_flora/photos/b9/40/545x545/82a0cc51_5fc61f5109720.jpeg"
            ]
        },
        {
            id: 58,
            title: "Букет Бузкова фантазія",
            article: "До складу букета входить гортензія, жоржини, однобутонная гвоздика і гвоздика спрей, піоноподібна троянда, " +
                "антуріум, брунія, еустома, брассіка, евкаліпт, декоративне листя дуба",
            description: "1568",
            imgSrc: [
                "https://camellia.ua/upload/kamelia_flora/photos/ca/6b/545x545/cc23316a_5f7add7f0dfac.jpeg",
                "https://camellia.ua/upload/kamelia_flora/photos/2c/85/545x545/4177a70_5f7add949a475.jpeg"
            ]
        },
        {
            id: 59,
            title: "Букет з трояндами Девіда Остіна",
            article: "1571",
            description: "Гортензія, троянда Девіда Остіна, піоноподібні троянди Сноу Ворлд, еустома, " +
                "скімія, хамелаціум",
            imgSrc: [
                "https://camellia.ua/upload/kamelia_flora/photos/0d/b5/545x545/f568a5cf_5f8c1d903c2a0.jpeg",
                "https://camellia.ua/upload/kamelia_flora/photos/70/6e/545x545/d75055b9_5f8c1d9a98a25.jpeg",
                "https://camellia.ua/upload/kamelia_flora/photos/27/e0/545x545/57afd785_5f8c1da26c150.jpeg",
                "https://camellia.ua/upload/kamelia_flora/photos/64/4b/545x545/83713c1f_5f8c1daaa8ea1.jpeg"
            ]
        }
    ],
    brideBouquete: [
        {
            id: 61,
            title: "Букет нареченої №3",
            article: "003",
            description: "Склад: Роза Аваланч, троянда Піч Аваланч, троянда Грація спрей, півонії",
            imgSrc: ["https://camellia.ua/upload/kamelia_flora/photos/0d/26/545x545/fefd9c26_57174221c0fd5.jpg",
                "https://camellia.ua/upload/kamelia_flora/photos/29/eb/545x545/39db6915_5718c52f10ef7.jpg"]
        },
        {
            id: 62,
            title: "Букет нареченої №23",
            article: "023",
            description: "Склад Гортензія, брассіка, орхідея Ванда, лімоніум, ерінгіум",
            imgSrc: ["https://camellia.ua/upload/kamelia_flora/photos/25/f3/545x545/dd701f2c_5718bf1b9a720.jpg",
                "https://camellia.ua/upload/kamelia_flora/photos/d0/0a/545x545/e590ae07_5718bf1ad49e9.jpg",
                "https://camellia.ua/upload/kamelia_flora/photos/6c/b1/545x545/597f932e_5718bf1cb6178.jpg",
                "https://camellia.ua/upload/kamelia_flora/photos/ed/03/545x545/9101b73f_5718bf1e1bc40.jpg"]
        },
        {
            id: 63,
            title: "Букет нареченої з піонами",
            article: "022",
            description: "Склад Фрезія, еустома, півонія",
            imgSrc: ["https://camellia.ua/upload/kamelia_flora/photos/ff/b6/545x545/9667f070_5718c73785932.jpg",
                "https://camellia.ua/upload/kamelia_flora/photos/f0/30/545x545/f1ba11f0_5718c7386e0b7.jpg"]
        },
        {
            id: 64,
            title: "Букет нареченої з півоніями і фрезією",
            article: "004",
            description: "Склад Півонія, фрезія, гортензія",
            imgSrc: ["https://camellia.ua/upload/kamelia_flora/photos/bc/98/545x545/c53e373e_5718c56d4ad15.jpg",
                "https://camellia.ua/upload/kamelia_flora/photos/19/6a/545x545/ab21d4ec_5718c56f0c260.jpg"]
        },
        {
            id: 65,
            title: "Букет нареченої Rustik",
            article: "011",
            description: "Склад Гіперикум, Фрезія, Брунія, Гвоздика, Мак, Агапантус, Евкаліпт, Сукк",
            imgSrc: ["https://camellia.ua/upload/kamelia_flora/photos/66/46/545x545/fbc71093_5718c6e949785.jpg",
                "https://camellia.ua/upload/kamelia_flora/photos/c5/9b/545x545/edd60c94_5718c6ea093e0.jpg",
                "https://camellia.ua/upload/kamelia_flora/photos/27/8f/545x545/6fc02a64_5718c6eb0d1d5.jpg",
                "https://camellia.ua/upload/kamelia_flora/photos/fe/66/545x545/4d0c3c13_5718c6ec2745b.jpg"]
        },
        {
            id: 66,
            title: "Букет нареченої №8",
            article: "008",
            description: "Склад Орхідея Ванда, троянда Талея, Брунії, еустома, троянда Девіда Остіна, евкаліпт",
            imgSrc: ["https://camellia.ua/upload/kamelia_flora/photos/a3/9a/545x545/236bdb85_571745b59a76b.jpg"]
        },
        {
            id: 67,
            title: "Букет нареченої з Гвоздик",
            article: "001",
            description: "Склад Гвоздика",
            imgSrc: ["https://camellia.ua/upload/kamelia_flora/photos/23/69/545x545/adc8f403_57174022a2f2f.jpg"]
        },
        {
            id: 68,
            title: "Букет нареченої із голландських півоній",
            article: "068",
            description: "Весільний букет з голландських півоній з приємним і тонким ароматом уособлює саму віддану " +
                "і чисту любов. Квіти білого кольору особливим чином підкреслюють вірність, скромність і чистоту. Вони " +
                "ідеально підходять для весіль, які заплановані в кінці весни або літа.",
            imgSrc: ["https://camellia.ua/upload/kamelia_flora/photos/a5/ea/545x545/6a587d1e_605b7d0cabe15.jpeg",
                "https://camellia.ua/upload/kamelia_flora/photos/a6/a0/545x545/c07f36fb_605b7819b2dba.jpeg",
                "https://camellia.ua/upload/kamelia_flora/photos/ce/44/545x545/fa0b78ed_605b78222c5b9.jpeg"]
        },
        {
            id: 69,
            title: "Букет нареченої з Фрезій",
            article: "069",
            description: "Склад Фрезія",
            imgSrc: ["https://camellia.ua/upload/kamelia_flora/photos/b2/ae/545x545/b9e41817_571f768a38a96.jpg",
                "https://camellia.ua/upload/kamelia_flora/photos/82/c1/545x545/d795fe3d_571f768c1f319.jpg"]
        }
    ],
    boutonniere: [
        {
            id: 71,
            title: "Бутоньєрка-39",
            article: "039",
            description: "Склад Троянда голландська, гіперікум",
            imgSrc: ["https://camellia.ua/upload/kamelia_flora/photos/75/f4/545x545/b003183c_5731a5ae5bf5b.JPG"]},
        {
            id: 72,
            title: "Бутоньєрка-38",
            article: "038",
            description: "Склад Фрезія, еустома",
            imgSrc: ["https://camellia.ua/upload/kamelia_flora/photos/1f/c6/545x545/93047e_5731a4a363cbb.JPG"]},
        {
            id: 73,
            title: "Бутоньєрка-37",
            article: "037",
            description: "Склад Фрезія, троянда спрей Олена, троянда спрей Грація",
            imgSrc: ["https://camellia.ua/upload/kamelia_flora/photos/9f/b9/545x545/60693092_5731a0e6372a0.JPG"]},
        {
            id: 74,
            title: "Бутоньєрка-3",
            article: "003",
            description: "Троянда Девіда Остіна, гіперікум, астільба",
            imgSrc: ["https://camellia.ua/upload/kamelia_flora/photos/54/6d/545x545/bff8f3dc_572c9c4cbf2aa.JPG"]},
        {
            id: 75,
            title: "Бутоньєрка-28",
            article: "028",
            description: "Склад Мімоза, хризантема",
            imgSrc: ["https://camellia.ua/upload/kamelia_flora/photos/f9/d1/545x545/d77fee3a_5731a000692fe.JPG"]},
        {
            id: 76,
            title: "Бутоньєрка-27",
            article: "027",
            description: "Склад Мімоза, троянда голландська",
            imgSrc: ["https://camellia.ua/upload/kamelia_flora/photos/0b/ab/545x545/90338d53_57319bae8ea7a.JPG"]},
        {
            id: 77,
            title: "Бутоньєрка-26",
            article: "026",
            description: "Склад Гвоздика, ерінгіум",
            imgSrc: ["https://camellia.ua/upload/kamelia_flora/photos/e3/02/545x545/73991329_573199a558780.JPG"]},
        {
            id: 78,
            title: "Бутоньєрка-25",
            article: "025",
            description: "Склад Калина, троянда голландська",
            imgSrc: ["https://camellia.ua/upload/kamelia_flora/photos/46/e4/545x545/fe4e6f09_573197b913745.JPG"]},
        {
            id: 79,
            title: "Бутоньєрка-23",
            article: "023",
            description: "Склад Фрезія, еустома, троянда Аваланч",
            imgSrc: ["https://camellia.ua/upload/kamelia_flora/photos/ca/34/545x545/e0fb829_57319681ab23d.JPG"]},
        ],
    decoration: [
        {
            id: 81,
            title: "Весільне оформлення в готелі \"Воздвиженський\"",
            article: "",
            description: "В оформленні були використані: гортензія, троянда Аваланч, троянда Піч Аваланч, " +
                "троянда спрей Крем Грація, лімоніум, евкаліпт, зелень.",
            imgSrc: ["https://camellia.ua/upload/kamelia_flora/photos/fe/83/545x545/9931f497_57fa27bdcf3f1.jpg",
            "https://camellia.ua/upload/kamelia_flora/photos/49/8c/545x545/370f70d4_57fa23a8eb724.jpg",
            "https://camellia.ua/upload/kamelia_flora/photos/b1/50/545x545/fe605e3d_57fa27bcdda08.jpg",
            "https://camellia.ua/upload/kamelia_flora/photos/f9/46/545x545/ab9b7ef3_57fa2870d4ae5.jpg"]},
            {
                id: 82,
                title: "Морське весілля",
                article: "",
                description: "У оформленні були використані: троянди Аваланч, троянди спрей Крем Грація, " +
                    "орхідея Фаленопсис, Еустома, Гіацинт, зелень, тематичний декор.",
                imgSrc: ["https://camellia.ua/upload/kamelia_flora/photos/38/8c/545x545/db3ee7fc_57fa1fa34493c.jpg",
                "https://camellia.ua/upload/kamelia_flora/photos/10/6d/545x545/8d591e7_57fa205c309ca.jpg",
                "https://camellia.ua/upload/kamelia_flora/photos/8d/29/545x545/9f43aa1f_5795f45fe61d5.jpg",
                "https://camellia.ua/upload/kamelia_flora/photos/55/d8/545x545/2dfd6a52_5795f4a28740d.jpg"]},
            {
                id: 83,
                title: "Оформлення залу 17",
                article: "",
                description: "",
                imgSrc: ["https://camellia.ua/upload/kamelia_flora/photos/95/db/545x545/1cd22fab_574bff2a9f699.jpg",
                "https://camellia.ua/upload/kamelia_flora/photos/42/64/545x545/48bbfb16_574bff16b9a9c.jpg",
                "https://camellia.ua/upload/kamelia_flora/photos/5d/f0/545x545/3ce75e7b_574bff27d7636.jpg"]},
            {
                id: 84,
                title: "Оформлення залу 15",
                article: "",
                description: "",
                imgSrc: ["https://camellia.ua/upload/kamelia_flora/photos/2a/31/545x545/778acac4_574c0162ca64b.JPG",
                "https://camellia.ua/upload/kamelia_flora/photos/18/8a/545x545/efa5ddfd_574c016d6711a.JPG",
                "https://camellia.ua/upload/kamelia_flora/photos/85/85/545x545/a65c0685_574c016e3e7c0.JPG"]},
            {
                id: 85,
                title: "Біле золото",
                article: "",
                description: "",
                imgSrc: ["https://camellia.ua/upload/kamelia_flora/photos/1f/e9/545x545/1f44f70d_573da325604ea.jpg",
                "https://camellia.ua/upload/kamelia_flora/photos/ff/63/545x545/52a650c1_573dab54417a5.jpg",
                "https://camellia.ua/upload/kamelia_flora/photos/c0/b6/545x545/be0bbf08_573dab560af8b.jpg",
                "https://camellia.ua/upload/kamelia_flora/photos/ba/21/545x545/7a4643c0_573dab56e88d6.jpg"]},
            {
                id: 86,
                title: "Біла ніжність",
                article: "004",
                description: "",
                imgSrc: ["https://camellia.ua/upload/kamelia_flora/photos/9b/56/545x545/94a293ba_573c58718d979.JPG",
                "https://camellia.ua/upload/kamelia_flora/photos/8b/b8/545x545/af4a85c1_573c58726218e.JPG",
                "https://camellia.ua/upload/kamelia_flora/photos/d6/93/545x545/6e906832_573c58735b136.JPG"]},
            {
                id: 87,
                title: "Оформлення залу 19",
                article: "",
                description: "",
                imgSrc: ["https://camellia.ua/upload/kamelia_flora/photos/88/47/545x545/6f4cf239_574bfd1e87472.jpg",
                "https://camellia.ua/upload/kamelia_flora/photos/97/7b/545x545/13358157_574bfd2e5c5a9.jpg",
                "https://camellia.ua/upload/kamelia_flora/photos/48/64/545x545/8a59cfd4_574bfd2eed55d.jpg"]}
        ],
    ceremony: [
        {
            id: 91,
            title: "Біла вишуканість",
            article: "",
            description: "",
            imgSrc: ["https://camellia.ua/upload/kamelia_flora/photos/89/eb/545x545/a939ba44_573b18b05885b.jpg",
            "https://camellia.ua/upload/kamelia_flora/photos/18/45/545x545/ec93e9d_573b18af62398.JPG",
            "https://camellia.ua/upload/kamelia_flora/photos/1f/42/545x545/c29421d2_573b18aeaa501.JPG"]},
        {
            id: 92,
            title: "Рожева фантазія",
            article: "006",
            description: "",
            imgSrc: ["https://camellia.ua/upload/kamelia_flora/photos/c7/78/545x545/a47281c1_573b180910d59.jpg",
            "https://camellia.ua/upload/kamelia_flora/photos/bb/a6/545x545/4c630812_573b180aede6d.jpg",
            "https://camellia.ua/upload/kamelia_flora/photos/c1/ed/545x545/90144c75_573b1809e6f34.jpg"]},
        {
            id: 93,
            title: "Бірюзове весілля",
            article: "005",
            description: "",
            imgSrc: ["https://camellia.ua/upload/kamelia_flora/photos/84/81/545x545/db6a689c_573b179e14110.jpg",
            "https://camellia.ua/upload/kamelia_flora/photos/b5/0e/545x545/54f0b493_573b179ed56ac.jpg"]},
        {
            id: 94,
            title: "Краплі роси",
            article: "004",
            description: "",
            imgSrc: ["https://camellia.ua/upload/kamelia_flora/photos/ff/c3/545x545/e5ae7691_573b1744d3423.jpg",
            "https://camellia.ua/upload/kamelia_flora/photos/4f/c6/545x545/b6a640c0_573b1c363f622.jpg"]},
        {
            id: 95,
            title: "Українські мотиви",
            article: "003",
            description: "",
            imgSrc: ["https://camellia.ua/upload/kamelia_flora/photos/ab/62/545x545/d38af206_573b16ebf3e34.JPG",
            "https://camellia.ua/upload/kamelia_flora/photos/32/b9/545x545/8977af6_573b16ecb8b7e.JPG",
            "https://camellia.ua/upload/kamelia_flora/photos/b0/9d/545x545/3f123716_573b16ede3ece.JPG"]}
    ],
    weddingArch: [
        {
            id: 101,
            title: "Весільна арка Рожева фантазія",
            article: "",
            description: "",
            imgSrc: ["https://camellia.ua/upload/kamelia_flora/photos/56/dc/545x545/9e528b45_573c66bc864ce.jpg",
            "https://camellia.ua/upload/kamelia_flora/photos/4b/5d/545x545/1f1a26ac_573c66bd54ac3.jpg",
            "https://camellia.ua/upload/kamelia_flora/photos/cf/5b/545x545/1dcf9f4c_573c66be44d99.jpg"]},
        {
            id: 102,
            title: "Весільна арка Український стиль",
            article: "",
            description: "",
            imgSrc: ["https://camellia.ua/upload/kamelia_flora/photos/40/0c/545x545/1a0f557b_573c64d9501be.jpg",
            "https://camellia.ua/upload/kamelia_flora/photos/99/db/545x545/e056f85a_573c64db166a6.jpg",
            "https://camellia.ua/upload/kamelia_flora/photos/79/07/545x545/e8223f65_573c64da1aba3.jpg"]},
        {
            id: 103,
            title: "Весільна арка в стилі Rustik",
            article: "",
            description: "",
            imgSrc: ["https://camellia.ua/upload/kamelia_flora/photos/92/41/545x545/60e4e120_573c63ec41172.jpg",
            "https://camellia.ua/upload/kamelia_flora/photos/a9/29/545x545/4192af9c_573c63ece97d5.jpg"]},
        {
            id: 104,
            title: "Весільна арка буяння квітів",
            article: "",
            description: "",
            imgSrc: ["https://camellia.ua/upload/kamelia_flora/photos/1b/86/545x545/801d0139_573c636ce4ee6.jpg",
            "https://camellia.ua/upload/kamelia_flora/photos/3b/dc/545x545/eefd0c9c_573c636c06f5c.jpg",
            "https://camellia.ua/upload/kamelia_flora/photos/3c/04/545x545/bf45a36b_573c636b3bee2.jpg"]},
        {
            id: 105,
            title: "Весільна арка Барокко",
            article: "",
            description: "",
            imgSrc: ["https://camellia.ua/upload/kamelia_flora/photos/57/54/545x545/5af0ca0e_573c622502d76.jpg"]},
        {
            id: 106,
            title: "Весільна арка Краплі роси",
            article: "",
            description: "",
            imgSrc: ["https://camellia.ua/upload/kamelia_flora/photos/9f/71/545x545/68adc699_573c6193c522e.jpg",
            "https://camellia.ua/upload/kamelia_flora/photos/9b/bd/545x545/bc870843_573c619189ce9.jpg",
            "https://camellia.ua/upload/kamelia_flora/photos/12/34/545x545/d9c11106_573c61926b256.jpg"]},
        {
            id: 107,
            title: "Весільна арка Білосніжна арка",
            article: "",
            description: "",
            imgSrc: ["https://camellia.ua/upload/kamelia_flora/photos/48/69/545x545/2b6b4c6_573c6119ddd3f.jpg",
            "https://camellia.ua/upload/kamelia_flora/photos/0e/66/545x545/db548e10_573c611ac0e72.jpg"]},
        {
            id: 108,
            title: "Весільна арка Бірюзове весілля",
            article: "",
            description: "",
            imgSrc: ["https://camellia.ua/upload/kamelia_flora/photos/f7/88/545x545/9d4457ea_573c609accea1.jpg"]},
        {
            id: 109,
            title: "Весільна арка Українські мотиви",
            article: "",
            description: "",
            imgSrc: ["https://camellia.ua/upload/kamelia_flora/photos/46/2c/545x545/190140af_573c5f6493a84.JPG",
            "https://camellia.ua/upload/kamelia_flora/photos/99/f6/545x545/c6db858a_573c5f6566297.JPG"]},
    ]
}


const floristicsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TOGGLE_ROSE:
            return {
                ...state, isInitial: true,
                initialCards: [...state.roseCards],
                initialTitle: "Букети із троянд"
            }
        case SET_TOGGLE_SPRING:
            return {
                ...state, isInitial: true,
                initialCards: state.springCards,
                initialTitle: "Весняні букети та композиції"
            }
        case SET_TOGGLE_SUMMER:
            return {
                ...state, isInitial: true,
                initialCards: state.summerCards,
                initialTitle: "Літні букети"
            }
        case SET_TOGGLE_WINTER:
            return {
                ...state, isInitial: true,
                initialCards: state.winterCards,
                initialTitle: "Зимова флористика"
            }
        case SET_TOGGLE_AUTUMN:
            return {
                ...state, isInitial: true,
                initialCards: state.autumnCards,
                initialTitle: "Осінні букети"
            }
        case SET_TOGGLE_BRIDE_BOUQUETE:
            return  {
                ...state, isInitial: true,
                initialCards: state.brideBouquete,
                initialTitle: "Букети нареченої"
            }
        case SET_TOGGLE_BOUTONNIERE:
            return  {
                ...state, isInitial: true,
                initialCards: state.boutonniere,
                initialTitle: "Бутоньєрки"
            }
        case SET_TOGGLE_DECORATION:
            return  {
                ...state, isInitial: true,
                initialCards: state.decoration,
                initialTitle: "Оформлення залу та столів"
            }
        case SET_TOGGLE_CEREMONY:
            return  {
                ...state, isInitial: true,
                initialCards: state.ceremony,
                initialTitle: "Виїзна церемонія"
            }
        case SET_TOGGLE_WEDDING_ARCH:
            return  {
                ...state, isInitial: true,
                initialCards: state.weddingArch,
                initialTitle: "Весільні арки"
            }
        default:
            return state;
    }
}

export const setRoseCardsAC = (roseCards) => ({type: SET_ROSE_CARDS, roseCards})
export const setSpringCardsAC = (springCards) => ({type: SET_SPRING_CARDS, springCards})
export const setSummerCardsAC = (summerCards) => ({type: SET_SUMMER_CARDS, summerCards})
export const setWinterCardsAC = (winterCards) => ({type: SET_WINTER_CARDS, winterCards})
export const setAutumnCardsAC = (autumnCards) => ({type: SET_AUTUMN_CARDS, autumnCards})

export const setToggleRoseAC = () => ({type: SET_TOGGLE_ROSE})

export const setToggleSpringAC = () => ({type: SET_TOGGLE_SPRING})

export const setToggleSummerAC = () => ({type: SET_TOGGLE_SUMMER})

export const setToggleWinterAC = () => ({type: SET_TOGGLE_WINTER})

export const setToggleAutumnAC = () => ({type: SET_TOGGLE_AUTUMN})
export const setTogglebrideBouqueteAC = () => ({type: SET_TOGGLE_BRIDE_BOUQUETE})
export const setToggleBoutonniereAC = () => ({type: SET_TOGGLE_BOUTONNIERE})
export const setToggleDecorationAC = () => ({type: SET_TOGGLE_DECORATION})
export const setToggleCeremonyAC= () => ({type: SET_TOGGLE_CEREMONY})
export const setToggleWeddingArchAC = () => ({type: SET_TOGGLE_WEDDING_ARCH})

export default floristicsReducer;