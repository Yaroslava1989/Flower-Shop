const SET_CARDS = "SET_CARDS";

let initialState = {
    cards: [
        {
            id: 1,
            status: false,
            title: "Акції на троянди з 9 до 22 квітня",
            imgSrc: "https://florina.kh.ua/image/cache/catalog/kategorii/cvety/rozy/51-roza-gran-pri-01-1000x1000.jpg",
            datePublication: "26.03.2024",
            promotionEndDate: "09.04.2024",
            promotionStartDate: "22.04.2024",

        },
        {
            id: 2,
            status: true,
            title: "Акція на троянди з 28 травня до 3 червня",
            imgSrc: "https://elitbuket.com/wp-content/uploads/2021/04/361245982_125423060_2826161714332600_1655191036417103899_n.jpg",
            datePublication: "26.04.2024",
            promotionEndDate: "28.05.2024",
            promotionStartDate: "03.06.2024"
        },

        {
            id: 3,
            status: false,
            title: "Акції на троянди з 16 до 25 березня",
            imgSrc: "https://kartinki.pics/pics/uploads/posts/2022-09/1663232320_2-kartinkin-net-p-rozi-malenkie-kustovie-tsveti-2.jpg",
            datePublication: "26.02.2024",
            promotionEndDate: "16.03.2024",
            promotionStartDate: "25.03.2024"
            },
    ]
}

const salesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CARDS:
            return {...state, cards: action.cards}  // стейт перезатирается карточками приходящими из экшена
        default:
            return state;
    }
}
export const setCardsAC = (cards) => ({type: SET_CARDS, cards})
export default salesReducer;