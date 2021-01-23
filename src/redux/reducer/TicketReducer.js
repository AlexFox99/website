const selectDirectTicActionType = 'SELECT-DIRECT-TIC';
const ClickDirectInfoActionType = 'CLICK-DIRECT-INFO';
let InitialState = {
    TicketsDirect: [
            {
                id: 0, name: "1 заявка Железнодорожный",
                Direct:"Железнодорожный",
                StatusEnrolled: true,
                StatusProcessing: false,
                StatusCompleted: false,
                TypeDescription:[
                    {id:0,Type:"Имя заявки:",Description:"Я имя заявки"},
                    {id:0,Type:"Тег:",Description:"Я тег"},
                    {id:0,Type:"Состояние:",Description:"Я состояние заявки"},
                    {id:0,Type:"Дата прихода:",Description:"66.66.6666"},
                    {id:0,Type:"От кого:",Description:"Я пользователь"},
                ]
            },
            {
                id: 1, name: "2 заявка Железнодорожный",
                Direct:"Железнодорожный",
                StatusEnrolled: false,
                StatusProcessing: false,
                StatusCompleted: true,
                TypeDescription:[
                    {id:0,Type:"Имя заявки:",Description:"Я имя заявки"},
                    {id:0,Type:"Тег:",Description:"Я тег"},
                    {id:0,Type:"Состояние:",Description:"Я состояние заявки"},
                    {id:0,Type:"Дата прихода:",Description:"66.66.6666"},
                    {id:0,Type:"От кого:",Description:"Я пользователь"},
                ]
            },
            {
                id: 2, name: "3 заявка Железнодорожный",
                Direct:"Железнодорожный",
                StatusEnrolled: false,
                StatusProcessing: true,
                StatusCompleted: false,
                TypeDescription:[
                    {id:0,Type:"Имя заявки:",Description:"Я имя заявки"},
                    {id:0,Type:"Тег:",Description:"Я тег"},
                    {id:0,Type:"Состояние:",Description:"Я состояние заявки"},
                    {id:0,Type:"Дата прихода:",Description:"66.66.6666"},
                    {id:0,Type:"От кого:",Description:"Я пользователь"},
                ]
            },
            {
                id: 3, name: "4 заявка Железнодорожный",
                Direct:"Железнодорожный",
                StatusEnrolled: false,
                StatusProcessing: true,
                StatusCompleted: false,
                TypeDescription:[
                    {id:0,Type:"Имя заявки:",Description:"рельно приколист"},
                    {id:0,Type:"Тег:",Description:"Я тег"},
                    {id:0,Type:"Состояние:",Description:"Я состояние заявки"},
                    {id:0,Type:"Дата прихода:",Description:"66.66.6666"},
                    {id:0,Type:"От кого:",Description:"Я пользователь"},
                ]
            },
            {
                id: 4, name: "5 заявка Железнодорожный",
                Direct:"Железнодорожный",
                StatusEnrolled: false,
                StatusProcessing: false,
                StatusCompleted: true,
                TypeDescription:[
                    {id:0,Type:"Имя заявки:",Description:"Мне нравится Аниме"},
                    {id:0,Type:"Тег:",Description:"Я тег"},
                    {id:0,Type:"Состояние:",Description:"Я состояние заявки"},
                    {id:0,Type:"Дата прихода:",Description:"66.66.6666"},
                    {id:0,Type:"От кого:",Description:"Я пользователь"},
                ]
            },
            {
                id: 5, name: "6 заявка Железнодорожный",
                Direct:"Железнодорожный",
                StatusEnrolled: true,
                StatusProcessing: false,
                StatusCompleted: false,
                TypeDescription:[
                    {id:0,Type:"Имя заявки:",Description:"Циганские"},
                    {id:0,Type:"Тег:",Description:"Фокусы"},
                    {id:0,Type:"Состояние:",Description:"Прикольно работает"},
                    {id:0,Type:"Дата прихода:",Description:"66.66.6666"},
                    {id:0,Type:"От кого:",Description:"Приколист"},
                ]
            },
            {
                id: 6, name: "1 заявка Кировский",
                Direct:"Кировский",
                StatusEnrolled: false,
                StatusProcessing: true,
                StatusCompleted: false,
                TypeDescription:[
                    {id:0,Type:"Имя заявки:",Description:"Я имя заявки"},
                    {id:0,Type:"Тег:",Description:"Я тег"},
                    {id:0,Type:"Состояние:",Description:"Я состояние заявки"},
                    {id:0,Type:"Дата прихода:",Description:"66.66.6666"},
                    {id:0,Type:"От кого:",Description:"Я пользователь"},
                ]
            },
            {
                id: 7, name: "2 заявка Кировский",
                Direct:"Кировский",
                StatusEnrolled: true,
                StatusProcessing: false,
                StatusCompleted: false,
                TypeDescription:[
                    {id:0,Type:"Имя заявки:",Description:"Вот"},
                    {id:0,Type:"Тег:",Description:"Четко"},
                    {id:0,Type:"Состояние:",Description:"Классно"},
                    {id:0,Type:"Дата прихода:",Description:"66.66.6666"},
                    {id:0,Type:"От кого:",Description:"ЗШБС"},
                ]
            },
            {
                id: 8, name: "3 заявка Кировский",
                Direct:"Кировский",
                StatusEnrolled: true,
                StatusProcessing: false,
                StatusCompleted: false,
                TypeDescription:[
                    {id:0,Type:"Имя заявки:",Description:"Я имя заявки"},
                    {id:0,Type:"Тег:",Description:"Я тег"},
                    {id:0,Type:"Состояние:",Description:"Я состояние заявки"},
                    {id:0,Type:"Дата прихода:",Description:"66.66.6666"},
                    {id:0,Type:"От кого:",Description:"Я пользователь"},
                ]
            },
            {
                id: 9, name: "4 заявка Кировский",
                Direct:"Кировский",
                StatusEnrolled: true,
                StatusProcessing: false,
                StatusCompleted: false,
                TypeDescription:[
                    {id:0,Type:"Имя заявки:",Description:"Я имя заявки"},
                    {id:0,Type:"Тег:",Description:"Я тег"},
                    {id:0,Type:"Состояние:",Description:"Я состояние заявки"},
                    {id:0,Type:"Дата прихода:",Description:"66.66.6666"},
                    {id:0,Type:"От кого:",Description:"Я пользователь"},
                ]
            },
            {
                id: 10, name: "5 заявка Кировский",
                Direct:"Кировский",
                StatusEnrolled: true,
                StatusProcessing: false,
                StatusCompleted: false,
                TypeDescription:[
                    {id:0,Type:"Имя заявки:",Description:"Я имя заявки"},
                    {id:0,Type:"Тег:",Description:"Я тег"},
                    {id:0,Type:"Состояние:",Description:"Я состояние заявки"},
                    {id:0,Type:"Дата прихода:",Description:"66.66.6666"},
                    {id:0,Type:"От кого:",Description:"Я пользователь"},
                ]
            },
            {
                id: 11, name: "6 заявка Кировский",
                Direct:"Кировский",
                StatusEnrolled: true,
                StatusProcessing: false,
                StatusCompleted: false,
                TypeDescription:[
                    {id:0,Type:"Имя заявки:",Description:"Я имя заявки"},
                    {id:0,Type:"Тег:",Description:"Я тег"},
                    {id:0,Type:"Состояние:",Description:"Я состояние заявки"},
                    {id:0,Type:"Дата прихода:",Description:"66.66.6666"},
                    {id:0,Type:"От кого:",Description:"Я пользователь"},
                ]
            },
            {
                id: 12, name: "1 заявка Ленинский",
                Direct:"Ленинский",
                StatusEnrolled: false,
                StatusProcessing: false,
                StatusCompleted: true,
                TypeDescription:[
                    {id:0,Type:"Имя заявки:",Description:"Я имя заявки"},
                    {id:0,Type:"Тег:",Description:"Я тег"},
                    {id:0,Type:"Состояние:",Description:"Я состояние заявки"},
                    {id:0,Type:"Дата прихода:",Description:"66.66.6666"},
                    {id:0,Type:"От кого:",Description:"Я пользователь"},
                ]
            },
            {
                id: 13, name: "2 заявка Ленинский",
                Direct:"Ленинский",
                StatusEnrolled: true,
                StatusProcessing: false,
                StatusCompleted: false,
                TypeDescription:[
                    {id:0,Type:"Имя заявки:",Description:"Я имя заявки"},
                    {id:0,Type:"Тег:",Description:"Я тег"},
                    {id:0,Type:"Состояние:",Description:"Я состояние заявки"},
                    {id:0,Type:"Дата прихода:",Description:"66.66.6666"},
                    {id:0,Type:"От кого:",Description:"Я пользователь"},
                ]
            },
            {
                id: 14, name: "3 заявка Ленинский",
                Direct:"Ленинский",
                StatusEnrolled: true,
                StatusProcessing: false,
                StatusCompleted: false,
                TypeDescription:[
                    {id:0,Type:"Имя заявки:",Description:"Я имя заявки"},
                    {id:0,Type:"Тег:",Description:"Я тег"},
                    {id:0,Type:"Состояние:",Description:"Я состояние заявки"},
                    {id:0,Type:"Дата прихода:",Description:"66.66.6666"},
                    {id:0,Type:"От кого:",Description:"Я пользователь"},
                ]
            },
            {
                id: 15, name: "4 заявка Ленинский",
                Direct:"Ленинский",
                StatusEnrolled: true,
                StatusProcessing: false,
                StatusCompleted: false,
                TypeDescription:[
                    {id:0,Type:"Имя заявки:",Description:"Я имя заявки"},
                    {id:0,Type:"Тег:",Description:"Я тег"},
                    {id:0,Type:"Состояние:",Description:"Я состояние заявки"},
                    {id:0,Type:"Дата прихода:",Description:"66.66.6666"},
                    {id:0,Type:"От кого:",Description:"Я пользователь"},
                ]
            },
            {
                id: 16, name: "5 заявка Ленинский",
                Direct:"Ленинский",
                StatusEnrolled: true,
                StatusProcessing: false,
                StatusCompleted: false,
                TypeDescription:[
                    {id:0,Type:"Имя заявки:",Description:"Я имя заявки"},
                    {id:0,Type:"Тег:",Description:"Я тег"},
                    {id:0,Type:"Состояние:",Description:"Я состояние заявки"},
                    {id:0,Type:"Дата прихода:",Description:"66.66.6666"},
                    {id:0,Type:"От кого:",Description:"Я пользователь"},
                ]
            },
            {
                id: 17, name: "6 заявка Ленинский",
                Direct:"Ленинский",
                StatusEnrolled: true,
                StatusProcessing: false,
                StatusCompleted: false,
                TypeDescription:[
                    {id:0,Type:"Имя заявки:",Description:"Я имя заявки"},
                    {id:0,Type:"Тег:",Description:"Я тег"},
                    {id:0,Type:"Состояние:",Description:"Я состояние заявки"},
                    {id:0,Type:"Дата прихода:",Description:"66.66.6666"},
                    {id:0,Type:"От кого:",Description:"Я пользователь"},
                ]
            },
            {
                id: 18, name: "1 заявка Октябрьский",
                Direct:"Октябрьский",
                StatusEnrolled: true,
                StatusProcessing: false,
                StatusCompleted: false,
                TypeDescription:[
                    {id:0,Type:"Имя заявки:",Description:"Я имя заявки"},
                    {id:0,Type:"Тег:",Description:"Я тег"},
                    {id:0,Type:"Состояние:",Description:"Я состояние заявки"},
                    {id:0,Type:"Дата прихода:",Description:"66.66.6666"},
                    {id:0,Type:"От кого:",Description:"Я пользователь"},
                ]
            },
            {
                id: 19, name: "2 заявка Октябрьский",
                Direct:"Октябрьский",
                StatusEnrolled: true,
                StatusProcessing: false,
                StatusCompleted: false,
                TypeDescription:[
                    {id:0,Type:"Имя заявки:",Description:"Я имя заявки"},
                    {id:0,Type:"Тег:",Description:"Я тег"},
                    {id:0,Type:"Состояние:",Description:"Я состояние заявки"},
                    {id:0,Type:"Дата прихода:",Description:"66.66.6666"},
                    {id:0,Type:"От кого:",Description:"Я пользователь"},
                ]
            },
            {
                id: 20, name: "3 заявка Октябрьский",
                Direct:"Октябрьский",
                StatusEnrolled: true,
                StatusProcessing: false,
                StatusCompleted: false,
                TypeDescription:[
                    {id:0,Type:"Имя заявки:",Description:"Я имя заявки"},
                    {id:0,Type:"Тег:",Description:"Я тег"},
                    {id:0,Type:"Состояние:",Description:"Я состояние заявки"},
                    {id:0,Type:"Дата прихода:",Description:"66.66.6666"},
                    {id:0,Type:"От кого:",Description:"Я пользователь"},
                ]
            },
            {
                id: 21, name: "4 заявка Октябрьский",
                Direct:"Октябрьский",
                StatusEnrolled: true,
                StatusProcessing: false,
                StatusCompleted: false,
                TypeDescription:[
                    {id:0,Type:"Имя заявки:",Description:"Я имя заявки"},
                    {id:0,Type:"Тег:",Description:"Я тег"},
                    {id:0,Type:"Состояние:",Description:"Я состояние заявки"},
                    {id:0,Type:"Дата прихода:",Description:"66.66.6666"},
                    {id:0,Type:"От кого:",Description:"Я пользователь"},
                ]
            },
            {
                id: 22, name: "5 заявка Октябрьский",
                Direct:"Октябрьский",
                StatusEnrolled: true,
                StatusProcessing: false,
                StatusCompleted: false,
                TypeDescription:[
                    {id:0,Type:"Имя заявки:",Description:"Я имя заявки"},
                    {id:0,Type:"Тег:",Description:"Я тег"},
                    {id:0,Type:"Состояние:",Description:"Я состояние заявки"},
                    {id:0,Type:"Дата прихода:",Description:"66.66.6666"},
                    {id:0,Type:"От кого:",Description:"Я пользователь"},
                ]
            },
            {
                id: 23, name: "6 заявка Октябрьский",
                Direct:"Октябрьский",
                StatusEnrolled: true,
                StatusProcessing: false,
                StatusCompleted: false,
                TypeDescription:[
                    {id:0,Type:"Имя заявки:",Description:"Я имя заявки"},
                    {id:0,Type:"Тег:",Description:"Я тег"},
                    {id:0,Type:"Состояние:",Description:"Я состояние заявки"},
                    {id:0,Type:"Дата прихода:",Description:"66.66.6666"},
                    {id:0,Type:"От кого:",Description:"Я пользователь"},
                ]
            },
            {
                id: 24, name: "1 заявка Свердловский",
                Direct:"Свердловский",
                StatusEnrolled: true,
                StatusProcessing: false,
                StatusCompleted: false,
                TypeDescription:[
                    {id:0,Type:"Имя заявки:",Description:"Я имя заявки"},
                    {id:0,Type:"Тег:",Description:"Я тег"},
                    {id:0,Type:"Состояние:",Description:"Я состояние заявки"},
                    {id:0,Type:"Дата прихода:",Description:"66.66.6666"},
                    {id:0,Type:"От кого:",Description:"Я пользователь"},
                ]
            },
            {
                id: 25, name: "2 заявка Свердловский",
                Direct:"Свердловский",
                StatusEnrolled: true,
                StatusProcessing: false,
                StatusCompleted: false,
                TypeDescription:[
                    {id:0,Type:"Имя заявки:",Description:"Я имя заявки"},
                    {id:0,Type:"Тег:",Description:"Я тег"},
                    {id:0,Type:"Состояние:",Description:"Я состояние заявки"},
                    {id:0,Type:"Дата прихода:",Description:"66.66.6666"},
                    {id:0,Type:"От кого:",Description:"Я пользователь"},
                ]
            },
            {
                id: 26, name: "3 заявка Свердловский",
                Direct:"Свердловский",
                StatusEnrolled: true,
                StatusProcessing: false,
                StatusCompleted: false,
                TypeDescription:[
                    {id:0,Type:"Имя заявки:",Description:"Я имя заявки"},
                    {id:0,Type:"Тег:",Description:"Я тег"},
                    {id:0,Type:"Состояние:",Description:"Я состояние заявки"},
                    {id:0,Type:"Дата прихода:",Description:"66.66.6666"},
                    {id:0,Type:"От кого:",Description:"Я пользователь"},
                ]
            },
            {
                id: 27, name: "4 заявка Свердловский",
                Direct:"Свердловский",
                StatusEnrolled: true,
                StatusProcessing: false,
                StatusCompleted: false,
                TypeDescription:[
                    {id:0,Type:"Имя заявки:",Description:"Я имя заявки"},
                    {id:0,Type:"Тег:",Description:"Я тег"},
                    {id:0,Type:"Состояние:",Description:"Я состояние заявки"},
                    {id:0,Type:"Дата прихода:",Description:"66.66.6666"},
                    {id:0,Type:"От кого:",Description:"Я пользователь"},
                ]
            },
            {
                id: 28, name: "5 заявка Свердловский",
                Direct:"Свердловский",
                StatusEnrolled: true,
                StatusProcessing: false,
                StatusCompleted: false,
                TypeDescription:[
                    {id:0,Type:"Имя заявки:",Description:"Я имя заявки"},
                    {id:0,Type:"Тег:",Description:"Я тег"},
                    {id:0,Type:"Состояние:",Description:"Я состояние заявки"},
                    {id:0,Type:"Дата прихода:",Description:"66.66.6666"},
                    {id:0,Type:"От кого:",Description:"Я пользователь"},
                ]
            },
            {
                id: 29, name: "6 заявка Свердловский",
                Direct:"Свердловский",
                StatusEnrolled: true,
                StatusProcessing: false,
                StatusCompleted: false,
                TypeDescription:[
                    {id:0,Type:"Имя заявки:",Description:"Я имя заявки"},
                    {id:0,Type:"Тег:",Description:"Я тег"},
                    {id:0,Type:"Состояние:",Description:"Я состояние заявки"},
                    {id:0,Type:"Дата прихода:",Description:"66.66.6666"},
                    {id:0,Type:"От кого:",Description:"Я пользователь"},
                ]
            },
            {
                id: 30, name: "1 заявка Советский",
                Direct:"Советский",
                StatusEnrolled: true,
                StatusProcessing: false,
                StatusCompleted: false,
                TypeDescription:[
                    {id:0,Type:"Имя заявки:",Description:"Я имя заявки"},
                    {id:0,Type:"Тег:",Description:"Я тег"},
                    {id:0,Type:"Состояние:",Description:"Я состояние заявки"},
                    {id:0,Type:"Дата прихода:",Description:"66.66.6666"},
                    {id:0,Type:"От кого:",Description:"Я пользователь"},
                ]
            },
            {
                id: 31, name: "2 заявка Советский",
                Direct:"Советский",
                StatusEnrolled: true,
                StatusProcessing: false,
                StatusCompleted: false,
                TypeDescription:[
                    {id:0,Type:"Имя заявки:",Description:"Я имя заявки"},
                    {id:0,Type:"Тег:",Description:"Я тег"},
                    {id:0,Type:"Состояние:",Description:"Я состояние заявки"},
                    {id:0,Type:"Дата прихода:",Description:"66.66.6666"},
                    {id:0,Type:"От кого:",Description:"Я пользователь"},
                ]
            },
            {
                id: 32, name: "3 заявка Советский",
                Direct:"Советский",
                StatusEnrolled: true,
                StatusProcessing: false,
                StatusCompleted: false,
                TypeDescription:[
                    {id:0,Type:"Имя заявки:",Description:"Я имя заявки"},
                    {id:0,Type:"Тег:",Description:"Я тег"},
                    {id:0,Type:"Состояние:",Description:"Я состояние заявки"},
                    {id:0,Type:"Дата прихода:",Description:"66.66.6666"},
                    {id:0,Type:"От кого:",Description:"Я пользователь"},
                ]
            },
            {
                id: 33, name: "4 заявка Советский",
                Direct:"Советский",
                StatusEnrolled: true,
                StatusProcessing: false,
                StatusCompleted: false,
                TypeDescription:[
                    {id:0,Type:"Имя заявки:",Description:"Я имя заявки"},
                    {id:0,Type:"Тег:",Description:"Я тег"},
                    {id:0,Type:"Состояние:",Description:"Я состояние заявки"},
                    {id:0,Type:"Дата прихода:",Description:"66.66.6666"},
                    {id:0,Type:"От кого:",Description:"Я пользователь"},
                ]
            },
            {
                id: 34, name: "5 заявка Советский",
                Direct:"Советский",
                StatusEnrolled: true,
                StatusProcessing: false,
                StatusCompleted: false,
                TypeDescription:[
                    {id:0,Type:"Имя заявки:",Description:"Я имя заявки"},
                    {id:0,Type:"Тег:",Description:"Я тег"},
                    {id:0,Type:"Состояние:",Description:"Я состояние заявки"},
                    {id:0,Type:"Дата прихода:",Description:"66.66.6666"},
                    {id:0,Type:"От кого:",Description:"Я пользователь"},
                ]
            },
            {
                id: 35, name: "6 заявка Советский",
                Direct:"Советский",
                StatusEnrolled: true,
                StatusProcessing: false,
                StatusCompleted: false,
                TypeDescription:[
                    {id:0,Type:"Имя заявки:",Description:"Я имя заявки"},
                    {id:0,Type:"Тег:",Description:"Я тег"},
                    {id:0,Type:"Состояние:",Description:"Я состояние заявки"},
                    {id:0,Type:"Дата прихода:",Description:"66.66.6666"},
                    {id:0,Type:"От кого:",Description:"Я пользователь"},
                ]
            },
            {
                id: 36, name: "1 заявка Центральный",
                Direct:"Центральный",
                StatusEnrolled: true,
                StatusProcessing: false,
                StatusCompleted: false,
                TypeDescription:[
                    {id:0,Type:"Имя заявки:",Description:"Я имя заявки"},
                    {id:0,Type:"Тег:",Description:"Я тег"},
                    {id:0,Type:"Состояние:",Description:"Я состояние заявки"},
                    {id:0,Type:"Дата прихода:",Description:"66.66.6666"},
                    {id:0,Type:"От кого:",Description:"Я пользователь"},
                ]
            },
            {
                id: 37, name: "2 заявка Центральный",
                Direct:"Центральный",
                StatusEnrolled: true,
                StatusProcessing: false,
                StatusCompleted: false,
                TypeDescription:[
                    {id:0,Type:"Имя заявки:",Description:"Я имя заявки"},
                    {id:0,Type:"Тег:",Description:"Я тег"},
                    {id:0,Type:"Состояние:",Description:"Я состояние заявки"},
                    {id:0,Type:"Дата прихода:",Description:"66.66.6666"},
                    {id:0,Type:"От кого:",Description:"Я пользователь"},
                ]
            },
            {
                id: 38, name: "3 заявка Центральный",
                Direct:"Центральный",
                StatusEnrolled: true,
                StatusProcessing: false,
                StatusCompleted: false,
                TypeDescription:[
                    {id:0,Type:"Имя заявки:",Description:"Я имя заявки"},
                    {id:0,Type:"Тег:",Description:"Я тег"},
                    {id:0,Type:"Состояние:",Description:"Я состояние заявки"},
                    {id:0,Type:"Дата прихода:",Description:"66.66.6666"},
                    {id:0,Type:"От кого:",Description:"Я пользователь"},
                ]
            },
            {
                id: 39, name: "4 заявка Центральный",
                Direct:"Центральный",
                StatusEnrolled: true,
                StatusProcessing: false,
                StatusCompleted: false,
                TypeDescription:[
                    {id:0,Type:"Имя заявки:",Description:"Я имя заявки"},
                    {id:0,Type:"Тег:",Description:"Я тег"},
                    {id:0,Type:"Состояние:",Description:"Я состояние заявки"},
                    {id:0,Type:"Дата прихода:",Description:"66.66.6666"},
                    {id:0,Type:"От кого:",Description:"Я пользователь"},
                ]
            },
            {
                id: 40, name: "5 заявка Центральный",
                Direct:"Центральный",
                StatusEnrolled: true,
                StatusProcessing: false,
                StatusCompleted: false,
                TypeDescription:[
                    {id:0,Type:"Имя заявки:",Description:"Я имя заявки"},
                    {id:0,Type:"Тег:",Description:"Я тег"},
                    {id:0,Type:"Состояние:",Description:"Я состояние заявки"},
                    {id:0,Type:"Дата прихода:",Description:"66.66.6666"},
                    {id:0,Type:"От кого:",Description:"Я пользователь"},
                ]
            },
            {
                id: 41, name: "6 заявка Центральный",
                Direct:"Центральный",
                StatusEnrolled: true,
                StatusProcessing: false,
                StatusCompleted: false,
                TypeDescription:[
                    {id:0,Type:"Имя заявки:",Description:"Я имя заявки"},
                    {id:0,Type:"Тег:",Description:"Я тег"},
                    {id:0,Type:"Состояние:",Description:"Я состояние заявки"},
                    {id:0,Type:"Дата прихода:",Description:"66.66.6666"},
                    {id:0,Type:"От кого:",Description:"Я пользователь"},
                ]
            }],
    id: "0",
    NamesTickets: [
        {id: 0, name: "Сортировка по району:"},
        {id: 1, name: "Заявок: "}
    ],
    optionValue: [
        {id: 0, value: 0, name: "Все"},
        {id: 1, value: 1, name: "Железнодорожный"},
        {id: 2, value: 2, name: "Кировский"},
        {id: 3, value: 3, name: "Ленинский"},
        {id: 4, value: 4, name: "Октябрьский"},
        {id: 5, value: 5, name: "Свердловский"},
        {id: 6, value: 6, name: "Советский"},
        {id: 7, value: 7, name: "Центральный"}
    ],
    TypeTicket:[{id:0,TypeName:"Светофор",disable:false,src:"http://84.22.135.132:5000/Image/test.jpg"},
        {id:1,TypeName:"Знаки",disable:true,src:""},
        {id:2,TypeName:"Графити",disable:true,src:""},
        {id:3,TypeName:"Кнопки",disable:true,src:""}],
    StatusTicket:[{id:0,status:"Поступила"},{id:1,status:"В работе"},{id:2,status:"Решено"}],
    TicketInfo: [
        {
            id: 0, name: "1 заявка Железнодорожный",
            Direct:"Железнодорожный",
            StatusEnrolled: true,
            StatusProcessing: false,
            StatusCompleted: false,
            TypeDescription:[
                {id:0,Type:"Имя заявки:",Description:"Я имя заявки"},
                {id:0,Type:"Тег:",Description:"Я тег"},
                {id:0,Type:"Состояние:",Description:"Я состояние заявки"},
                {id:0,Type:"Дата прихода:",Description:"66.66.6666"},
                {id:0,Type:"От кого:",Description:"Я пользователь"},
            ]
        }],
    NamesTicketInfo: [
        {id:0,name:"Имя заявки"},
        {id:1,name:"Панель состояний"},
        {id:2,name:"Детали заявки"},
        {id:3,name:"История заявки"},
        {id:4,name:"Изображения прикреплены:"}
    ],
    src:"http://avanpress.ru/wp-content/uploads/2017/03/Светофор.jpg",
    HistoryText:"Пришла от пользователя В 66.66.6666"

}
const TicketReducer = (state = InitialState, action) => {
    switch (action.type) {
        case selectDirectTicActionType: {
            let stateCopy = {...state};
            stateCopy.id = action.id;
            return stateCopy;
        }
        case ClickDirectInfoActionType: {
            let stateCopy = {...state};
            stateCopy.TicketInfo=stateCopy.TicketsDirect[action.id];
            debugger
            return stateCopy;
        }
        default:
            return state;
    }
}
export const selectChangeActionCreator = (id) => ({type: selectDirectTicActionType, id: id});
export const ClickDirectInfoActionCreator = (id) => ({type: ClickDirectInfoActionType, id: id});
export default TicketReducer;