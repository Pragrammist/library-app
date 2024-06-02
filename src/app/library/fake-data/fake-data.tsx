import { CardImgSize } from "../card-project/get-size";
import CardProjectHorizontalModel from "../card-project/horizontal/card-project-horizontal.model";
import CardProjectVerticalModel from "../card-project/vertical/card-project-vertical.model";
import { Link } from "@mui/material";

export const promotions : CardProjectVerticalModel[] = [ 
    {
        date: "10.01.2022-28.12.2024",
        imgUrl: "main1-1.jpg",
        title: "Книга с автографом",
        imgSize: "43x48"
    },
    {
        date: "09.01.2024-28.12.2024",
        imgUrl: "main1-2.jpg",
        title: "Отдел «Центр краеведческой информации» приглашает в гости",
        imgSize: "43x48"
    },
    {
        date: "09.01.2024-28.12.2024",
        imgUrl: "main1-3.jpg",
        title: "Экскурсии по историческому  зданию и новому корпусу библиотеки",
        imgSize: "43x48"
    },
    {
        date: "09.01.2024-28.12.2024",
        imgUrl: "main1-4.jpg",
        title: "Акция «День прощения должника» в отделе «Городской абонемент»",
        imgSize: "43x48"
    }

];

export const promotionsDetails = [
    
    `В год 300-летнего юбилея город Таганрог встречал тысячи гостей, 
    среди которых писатели и поэты. В библиотеке прошло много 
    литературных встреч и мероприятий. 
    Ярким и запоминающимся стал творческий вечер Сергея Алексеева. 
    В память об этом сохранились книги с автографами писателя – 
    романы «Слово», «Сокровища Валькирии», «Пришельцы».`,

    `Центральная городская публичная библиотека имени А.П. Чехова 
    приглашает Вас посетить музейную экспозицию «Открытая коллекция» 
    в отделе «Центр краеведческой информации». На выставке воспроизведена 
    атмосфера быта старого Таганрога.  Здесь представлены старинные предметы 
    домашнего обихода, мебель, посуда второй половины XIX – начала XX века, 
    семейные  фотографии. Многие предметы подарены библиотеке жителями города, 
    некоторые переданы из частных коллекций.`,

    `Каждую среду в 13.00 и 17.00 Центральная городская публичная библиотека 
    имени А. П. Чехова приглашает Вас на экскурсию по историческому зданию 
    и новому корпусу библиотеки.`,


    `Уважаемые задолжники!
    Если Вы по каким-либо причинам не смогли вовремя сдать книги, 
    то Дни Прощения - Ваш шанс.
    20-го числа каждого месяца в отделе "Городской абонемент" 
    ЦГПБ имени А.П. Чехова Вы можете вернуть давно прочитанные книги.
    Ждем Вас!`,
]

export const posters : CardProjectVerticalModel[] = [ 
    {
        date: "05.05.2024-30.05.2024",
        imgUrl: "main2-1.jpg",
        title: "«Красота Севера» – первая персональная выставка самобытной художницы Светланы Черноиван",
        imgSize: "73x62"
    },
    {
        date: "18.05.2024",
        imgUrl: "main2-2.jpg",
        title: "Литературно-музыкальный вечер «Приглашение в оперу» - поют студенты Таганрогского музыкального колледжа",
        imgSize: "73x62"
    },
    {
        date: "23.05.2024",
        imgUrl: "main2-3.jpg",
        title: `Ко Дню славянской письменности 
        и культуры «Песни славянского сердца» -
        литературно-музыкальная гостиная. 
        Принимают участие учащиеся 
        вокального и хорового отделений 
        Таганрогской детской музыкальной 
        школы. Вход свободный.`,
        imgSize: "73x62"
    }
];


export const events : CardProjectVerticalModel[] = [ 
    {
        date: "08.05.2024",
        imgUrl: "main3-1.jpg",
        title: "Милосердие и сострадание в произведениях зарубежных писателей",
        imgSize: "43x48"
    },
    {
        date: "20.05.2024",
        imgUrl: "main3-2.jpg",
        title: "Чеховский книжный фестиваль: культурное достояние Таганрога",
        imgSize: "43x48"
    },
    {
        date: "17.05.2024",
        imgUrl: "main3-3.jpg",
        title: "Выставка «Лучшие книги России – Таганрогу» – важное культурное событие города",
        imgSize: "43x48"
    },
    {
        date: "23.05.2024",
        imgUrl: "main3-4.jpg",
        title: "Праздник библиотекарей Таганрога",
        imgSize: "43x48"
    },
]

export const eventsDetails = [
    
    `Отдел литературы на иностранных языках организовал библиотечный урок 
    по книгам из своего фонда. Все мы знаем, что сказки учат добру, и уверены, 
    что читать их надо только в детстве. Но ведь хорошему учиться никогда не поздно. 
    В любом возрасте можно вспомнить любимых персонажей детских книг, и не только детских. `,

    `XVII Чеховский книжный фестиваль стал еще одной яркой страницей 
    культурной жизни нашего города. По сложившейся доброй традиции 
    он объединил литераторов, издателей, авторов, книголюбов, 
    семьи таганрожцев - всех, кто любит творчество писателя, нашего земляка А. П. Чехова.
    Нужно отметить, что в этом году праздник ознаменовался ещё несколькими 
    знаменательными датами: 225-летием А. С. Пушкина, 100-летием журнала «Мурзилка», 
    100-летием поэтессы Юлии Друниной и был приурочен к Году семьи`,

    `В библиотеке имени А. П. Чехова состоялось торжественное открытие 
    выставки «Лучшие книги России – Таганрогу» - важное культурное событие 
    в рамках XVII Чеховского книжного фестиваля, объединившее книголюбов, 
    писателей, литераторов, деятелей культуры и искусства, почитателей 
    творчества писателя, нашего земляка А. П. Чехова.`,

    `Цветущим солнечным майским днём в конференц-зале библиотеки 
    имени А. П. Чехова состоялось торжественное мероприятие, посвященное 
    Общероссийскому дню библиотек. 
    Поздравления с профессиональным праздником принимали хранители книжной мудрости – 
    библиотекари Централизованной библиотечной системы города Таганрога. 
    Символично, что это событие совпало с днем рождения Чеховской библиотеки, 
    одной из старейших на Донской земле: в этом году ей исполнилось 148 лет`

]


interface ConcatDetailsInput 
{
    dataArray:CardProjectVerticalModel[], 
    paragraphs?: string[], 
    imgSizeToSwitch?: CardImgSize,
    imgSize : CardImgSize
}

function concatDetails (input : ConcatDetailsInput) : CardProjectHorizontalModel[] {
    
    return input.dataArray.map((data, i) : CardProjectHorizontalModel => {
        const isEven = ((i + 1) % 2 === 0);
        const isSwitchableDesign = input.imgSizeToSwitch ? true : false;
        const isSwitchDesign = isSwitchableDesign && isEven;
        const imgSize = isSwitchDesign ? input.imgSizeToSwitch! : input.imgSize;
        const paragraph = input.paragraphs ? input.paragraphs[i] : "";
        return {
            ...data,
            imgSize: imgSize,
            paragraph: paragraph,
            isReverse: isSwitchDesign,
            isInfoBg: isSwitchDesign
        }
    })
}

export type CatalogType = {
    title: string,
    dataDetails: CardProjectHorizontalModel[],
    shortData: CardProjectVerticalModel[],
    redirectTo: string,
};

export const catalogData = {
    "promotions" : {
        title: "Конкурсы, акции, проекты",
        dataDetails: concatDetails({
            dataArray: promotions, 
            paragraphs: promotionsDetails,
            imgSize: "41x46"
        }),
        redirectTo: "/catalog?point=promotions",
        shortData: promotions,
    } as CatalogType,
    "posters" : {
        title: "Афиша",
        dataDetails: concatDetails({
            dataArray: posters,
            imgSize: "89x62",
            imgSizeToSwitch: "99x75"
        }),
        redirectTo: "/catalog?point=posters",
        shortData: posters,
        
    } as CatalogType,
    "events" : {
        title: "События",
        dataDetails: concatDetails({
            dataArray: events, 
            paragraphs: eventsDetails,
            imgSize: "41x46"
        }),
        redirectTo: "/catalog?point=events",
        shortData: events,
        
    } as CatalogType,
}

export function getCatalogDataByPropName(name: string){
    const catalogDataProps = Object.getOwnPropertyNames(catalogData);

    if(!catalogDataProps.includes(name))
        return null;

    const catalogInnerData = Reflect.get(catalogData, name) as CatalogType;

    
    return catalogInnerData;
}

const buttonTextMainPage = "Показать ещё";

export const mainPage : {
    title: string,
    buttonText: string,
    projects: CardProjectVerticalModel[],
    redirectTo: string,
}[] = [
    {
        buttonText: buttonTextMainPage,
        title: catalogData.promotions.title,
        projects: catalogData.promotions.shortData,
        redirectTo: catalogData.promotions.redirectTo
    },

    {
        buttonText: buttonTextMainPage,
        title: catalogData.posters.title,
        projects: catalogData.posters.shortData.slice(0,2),
        redirectTo: catalogData.posters.redirectTo
    },

    {
        buttonText: buttonTextMainPage,
        title: catalogData.events.title,
        projects: catalogData.events.shortData,
        redirectTo: catalogData.events.redirectTo
    },
]

export const mainPageData : TextListProps[] = [
    {
        title : "Режим работы",
        textArray:[
            "10:00 - 19:00",
            "Понедельник - Пятница",
            "10:00 - 18:00",
            "Суббота - Воскресенье"
        ]
    },

    {
        title : "Мы находимся",
        textArray:[
            "Таганрог, Греческая, 105, 2 этаж",
            "Район Центральный",
        ]
    },

    {
        title : "Связь с нами",
        textArray:[
            "+7 (8634) 34-03-21",
            "+7 (8634) 34-03-22",
            <Link>Telegram</Link>,
            <Link>VK</Link>
        ]
    },
]

export const mainPageLinks : LinkListProps = {
    textArray: [
        {
            link: "/question",
            linkText:"Электронная справка",
            text:"задайте свой вопрос специалисту онлайн"
        },

        {
            link: "/document-extension",
            linkText:"Продление документов",
            text:"продлите книгу не выходя из дома"
        },

        {
            link: "/document-delivery",
            linkText:"Электронная доставка документов",
            text:"получите документы дома"
        },
    ],
    title: "Электронные услуги"
}

