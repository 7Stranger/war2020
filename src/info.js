const contacts = [
    {
        name: " Азизов",
        family: "Азизов",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(961) 303 - 27 - 65",
            },
        ],
    },
    {
        name: "Акишина Наташа",
        family: "Акишина Наташа",
        telNumbers: [
            {
                typeOther: true,
                typeVoice: true,
                data: "+79043455532",
            }
        ],
    },
    {
        name: " Курдюмов;Александр Борисович",
        family: "Александр Борисович Курдюмов",
        emails: [
            {
                typeInternet: true,
                typeHome: true,
                typePref: true,
                data: "kurdyumov@duma.gov.ru",
            },
        ],
        telNumbers: [
            {
                typeWork: true,
                typeVoice: true,
                typePref: true,
                data: "+7(495) 692 - 39 - 30",
            },
            {
                typeWork: true,
                typeFax: true,
                data: "+7(495) 692 - 91 - 85",
            },
            {
                typeCell: true,
                typeVoice: true,
                data: "+7(985) 764 - 75 - 29",
            },
            {
                typeCell: true,
                typeVoice: true,
                data: "+7(908) 764 - 75 - 29",
            },
        ],
    },
    {
        name: " Бородай; Александр",
        family: "Александр Бородай",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(905) 788 - 85 - 60",
            },
            {
                typeCell: true,
                typeVoice: true,
                data: "+7(495) 694 - 32 - 89",
            },
            {
                typeHome: true,
                typeVoice: true,
                data: "+7(926) 531 - 85 - 14",
            },
        ],
    },
    {
        name: " Малахов;Александр Владимирович",
        family: "Александр Владимирович Малахов",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7 903 136 - 35 - 53",
            },
            {
                typeCell: true,
                typeVoice: true,
                data: "+7 916 850 - 02 - 96",
            },
            {
                typeCell: true,
                typeVoice: true,
                data: "+7(966) 086 - 10 - 76",
            },
            {
                typeVoice: true,
                data: "+7(925) 887 - 74 - 43",
            },
        ],
    },
    {
        name: " Дугин;Александр Гельевич",
        family: "Александр Гельевич Дугин",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(916) 857 - 84 - 26",
            },
        ],
    },
    {
        name: " Гришин; Александр",
        family: "Александр Гришин",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(964) 783 - 39 - 99",
            },
        ],
    },
    {
        name: "Зинченко Народный Фронт; Александр",
        family: "Александр Зинченко Народный Фронт",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(916) 571 - 55 - 54",
            },
        ],
    },
    {
        name: "Александр Коробко",
        family: "Александр Коробко",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(985) 290 - 56 - 40",
            },
        ],
    },
    {
        name: " Кропачев; Александр",
        family: "Александр Кропачев",
        telNumbers: [
            {
                typeOther: true,
                typeVoice: true,
                typePref: true,
                data: "+7(985) 764 - 71 - 19",
            },
        ],
    },
    {
        name: " Лаврентьев; Александр",
        family: "Александр Лаврентьев",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(916) 121 - 30 - 91",
            },
            {
                typeCell: true,
                typeVoice: true,
                data: "+7 701 1288899",
            },
            {
                typeCell: true,
                typeVoice: true,
                data: "+7(938) 161 - 78 - 98",
            },
            {
                typeCell: true,
                typeVoice: true,
                data: "+7(903) 430 - 22 - 62",
            },
        ],
    },
    {
        name: "Павлов Суркова; Александр",
        family: "Александр Павлов Суркова",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(915) 065 - 82 - 88",
            },
        ],
    },
    {
        name: "Чайхана Хаям; Александр",
        family: "Александр Чайхана Хаям",
        telNumbers: [
            {
                typeHome: true,
                typeVoice: true,
                typePref: true,
                data: "+79265739247",
            },
        ],
    },
    {
        name: " Чаленко; Александр",
        family: "Александр Чаленко",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(925) 468 - 47 - 59",
            },
            {
                typeHome: true,
                typeVoice: true,
                data: "+7 916 169 08 78",
            },
            {
                typeCell: true,
                typeVoice: true,
                data: "+7(968) 766 - 28 - 16",
            },
        ],
    },
    {
        name: "Александр Чех ДНР",
        family: "Александр Чех ДНР",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(915) 012 - 54 - 22",
            },
        ],
    },
    {
        name: "Алексей Георгиевич; Александров",
        family: "Александров Алексей Георгиевич",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                data: "+7(965) 201 - 04 - 16",
            },
        ],
    },
    {
        name: " Чегевара;Алексей Александрович",
        family: "Алексей Александрович Чегевара",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(925) 452 - 80 - 45",
            },
        ],
    },
    {
        name: "Алексей Анпилог От Проханова",
        family: "Алексей Анпилог От Проханова",
        emails: [
            {
                typeInternet: true,
                typeHome: true,
                typePref: true,
                data: "alexey.anpilogov1974@gmail.com",
            },
            {
                typeHome: true,
                typeVoice: true,
                typePref: true,
                data: "+7(915) 100 - 18 - 65",
            },
            {
                typeWork: true,
                typeVoice: true,
                data: "+7(915) 440 - 53 - 80",
            },
        ],
    },
    {
        name: "Алексей Горбачев",
        family: "Алексей Горбачев",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(916) 053 - 53 - 52",
            },
        ],
    },
    {
        name: " Кобелев; Алексей",
        family: "Алексей Кобелев",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+79202678635",
            },
        ],
    },
    {
        name: "Алексей Леонидович",
        family: "Алексей Леонидович",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(985) 767 - 26 - 38",
            },
        ],
    },
    {
        name: " Майборода; Алексей",
        family: "Алексей Майборода",
        telNumbers: [
            {
                typeHome: true,
                typeVoice: true,
                typePref: true,
                data: "+79266315270",
            },
        ],
    },
    {
        name: " Худяков; Алексей",
        family: "Алексей Худяков",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(925) 581 - 07 - 50",
            },
            {
                typeCell: true,
                typeVoice: true,
                data: "+7(968) 666 - 36 - 65",
            },
        ],
    },
    {
        name: " Чесноков; Алексей",
        family: "Алексей Чесноков",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(925) 733 - 29 - 44",
            },
            {
                typeCell: true,
                typeVoice: true,
                data: "+7(925) 074 - 00 - 20",
            },
            {
                typeOther: true,
                typeVoice: true,
                data: "+7(926) 095 - 32 - 45",
            },
        ],
    },
    {
        name: "Алексей Штабскапитан",
        family: "Алексей Штабскапитан",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(964) 595 - 86 - 89",
            },
        ],
    },
    {
        name: " Щукин; Алексей",
        family: "Алексей Щукин",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(937) 797 - 49 - 99",
            },
        ],
    },
    {
        name: "Алена Гюрза Одесса",
        family: "Алена Гюрза Одесса",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(925) 704 - 70 - 25",
            },
        ],
    },
    {
        name: "Алена Днепр ополчение",
        family: "Алена Днепр ополчение",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7 926 750 - 77 - 63",
            },
        ],
    },
    {
        name: "Алена Кочкина",
        family: "Алена Кочкина",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(928) 757 - 75 - 32",
            },
        ],
    },
    {
        name: "Алеся Дениса Новинского",
        family: "Алеся Дениса Новинского",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(929) 963 - 52 - 59",
            },
        ],
    },
    {
        name: " Натальченко; Алиса",
        family: "Алиса Натальченко",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(916) 873 - 14 - 87",
            },
            {
                typeHome: true,
                typeVoice: true,
                data: "+7(978) 821 - 57 - 58",
            },
        ],
    },
    {
        name: " Питер; Алия",
        family: "Алия Питер",
        telNumbers: [
            {
                typeHome: true,
                typeVoice: true,
                typePref: true,
                data: "+79215920462",
            },
            {
                typeCell: true,
                typeVoice: true,
                data: "+79119234077",
            },
        ],
    },
    {
        name: " Карабань; Альберт",
        family: "Альберт Карабань",
        emails: [
            {
                typeInternet: true,
                typePref: true,
                data: "ideolog.mmm@gmail.com",
            },
            {
                typeInternet: true,
                typeHome: true,
                data: "djbertinyo@gmail.com",
            },
        ],
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                data: "+79061179479",
            },
        ],
    },
    {
        name: " Карабань; Альберт",
        family: "Альберт Карабань",
        emails: [
            {
                typeInternet: true,
                typePref: true,
                data: "ideolog.mmm@gmail.com",
            },
            {
                typeInternet: true,
                typeHome: true,
                data: "djbertinyo@gmail.com",
            },
        ],
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                data: "+79061179479",
            },
        ],
    },
    {
        name: " Белгород; Аля",
        family: "Аля Белгород",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(951) 138 - 90 - 51",
            },
            {
                typeIphone: true,
                typeCell: true,
                typeVoice: true,
                data: "+7(910) 745 - 12 - 17",
            },
        ],
    },
    {
        name: " Барадай; Андрей; Советник",
        family: "Андрей Советник Барадай",
        emails: [
            {
                typeInternet: true,
                typeHome: true,
                typePref: true,
                data: "ppmmm2010@gmail.com",
            },
        ],
        telNumbers: [
            {
                typeWork: true,
                typeVoice: true,
                data: "+7 985 634 - 37 - 59",
            },
        ],
    },

    /////////////////////
    {
        name: "Андрей Иванович",
        family: "Андрей Иванович",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(938) 130 - 82 - 95",
            },
        ],
    },
    {
        name: " Ким; Андрей",
        family: "Андрей Ким",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(915) 422 - 91 - 94",
            },
        ],
    },
    {
        name: " Коваленко; Андрей",
        family: "Андрей  Коваленко",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(909) 679 - 43 - 16",
            },
        ],
    },
    {
        name: " Коваленко; Андрей",
        family: "Андрей Коваленко",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(909) 679 - 43 - 16",
            },
        ],
    },
    {
        name: " Крамар; Андрей",
        family: "Андрей Крамар",
        emails: [
            {
                typeInternet: true,
                typePref: true,
                data: "kramar67@gmail.com",
            },
            {
                typeInternet: true,
                typeHome: true,
                data: "kpamap@inbox.ru",
            },
        ],
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+79156386763",
            },
        ],
    },
    {
        name: " Мирошин; Андрей",
        family: "Андрей Мирошин",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(900) 526 - 36 - 66",
            },
        ],
    },
    {
        name: " Атрохов;Андрей Михайлович",
        family: "Андрей Михайлович Атрохов",
        emails: [
            {
                typeInternet: true,
                typeHome: true,
                typePref: true,
                data: "ama2005@yandex.ru",
            },
        ],
        telNumbers: [
            {
                typeHome: true,
                typeVoice: true,
                typePref: true,
                data: "+7(985) 763 - 03 - 90",
            },
        ],
    },
    {
        name: "Андрей Саныч Ржавый",
        family: "Андрей Саныч Ржавый",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(910) 111 - 33 - 88",
            },
        ],
    },
    {
        name: "РТР Россия;Андрей Сапигин",
        family: "Андрей Сапигин РТР Россия",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(951) 530 - 93 - 09",
            },
        ],
    },
    {
        name: " Родкин;Андрей Советник Бородая",
        family: "Андрей Советник Бородая Родкин",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(985) 634 - 37 - 59",
            },
            {
                typeCell: true,
                typeVoice: true,
                data: "+7(903) 578 - 30 - 31",
            },
        ],
    },
    {
        name: " Питер; Антон",
        family: "Антон Питер",
        telNumbers: [
            {
                typeHome: true,
                typeVoice: true,
                typePref: true,
                data: "+79219465110",
            },
        ],
    },
    {
        name: "Аня Лайньюз Москва",
        family: "Аня Лайньюз Москва",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(968) 712 - 64 - 79",
            },
        ],
    },
    {
        name: "Зам Губернатора Ростова; Артемов",
        family: "Артемов Зам Губернатора Ростова",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(928) 270 - 28 - 01",
            },
        ],
    },
    {
        name: "Батя Козак",
        family: "Батя Козак",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                data: "+7(954) 101 - 38 - 06",
            },
        ],
    },
    {
        name: "Белгород Анна Николаевна",
        family: "Белгород Анна Николаевна",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(915) 569 - 91 - 17",
            },
        ],
    },
    {
        name: "Бельянинов Андрей Юрьевич",
        family: "Бельянинов Андрей Юрьевич",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(495) 922 - 08 - 80",
            },
        ],
    },
    {
        name: "Блашкевич Андрей",
        family: "Блашкевич Андрей",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(903) 284 - 25 - 73",
            },
        ],
    },
    {
        name: "Богдан Безпалько",
        family: "Богдан Безпалько",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(926) 523 - 27 - 38",
            },
        ],
    },
    {
        name: "Борис АП по Ростову",
        family: "Борис АП по Ростову",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(920) 671 - 03 - 20",
            },
        ],
    },
    {
        name: "Россрезерв Зам Ростов;Бутенко Алексей Викторович",
        family: "Бутенко Алексей Викторович Россрезерв Зам Ростов",
        telNumbers: [
            {
                typeHome: true,
                typeVoice: true,
                typePref: true,
                data: "+7(904) 506 - 30 - 04",
            },
        ],
    },
    {
        name: "Валентин",
        family: "Валентин",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(916) 548 - 15 - 29",
            },
        ],
    },
    {
        name: " Скороходов; Валера",
        family: "Валера Скороходов",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                data: "+7(910) 465 - 19 - 40",
            },
        ],
    },
    {
        name: " Солянин;Валерий Владимирович",
        family: "Валерий Владимирович Солянин",
        emails: [
            {
                typeInternet: true,
                typeHome: true,
                typePref: true,
                data: "solyanin@msmoscow.ru",
            },
        ],

        telNumbers: [
            {
                typeHome: true,
                typeVoice: true,
                typePref: true,
                data: "+7(495) 748 - 97 - 51",
            },
        ],
    },
    {
        name: "Ванечка Амвросиевка",
        family: "Ванечка Амвросиевка",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(961) 277 - 44 - 03",
            },
        ],
    },
    {
        name: "Василий от Новинского",
        family: "Василий от Новинского",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(967) 157 - 16 - 10",
            },
        ],
    },
    {
        name: "Вера Лайфньюс",
        family: "Вера Лайфньюс",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(916) 142 - 62 - 32",
            },
        ],
    },
    {
        name: "Вероника Квартира Ростов",
        family: "Вероника Квартира Ростов",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(928) 279 - 14 - 90",
            },
        ],
    },
    {
        name: "Взгляд",
        family: "Взгляд",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(495) 660 - 04 - 64",
            },
        ],
    },
    {
        name: "Виктор\, Днепр Активист",
        family: "Виктор\, Днепр Активист",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(917) 562 - 32 - 35",
            },
        ],
    },
    {
        name: "Южная Осетия Помощник;Виктор Анатольевич Бунин",
        family: "Виктор Анатольевич Бунин Южная Осетия Помощник",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(903) 720 - 38 - 05",
            },
        ],
    },
    {
        name: " Медведчук;Виктор Владимирович",
        family: "Виктор Владимирович Медведчук",
        emails: [
            {
                typeInternet: true,
                typeHome: true,
                typePref: true,
                data: "arbalet2014@mail.ua",
            },
        ],

        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(925) 214 - 98 - 34",
            },
        ],
    },
    {
        name: "Виктория Каск",
        family: "Виктория Каск",
        telNumbers: [
            {
                typeHome: true,
                typeVoice: true,
                typePref: true,
                data: "+7(926) 257 - 41 - 91",
            },
        ],
    },
    {
        name: "Первый Канал; Виола",
        family: "Виола Первый Канал",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(495) 617 - 85 - 54",
            },
        ],
    },
    {
        name: "Виола Первый Канал",
        family: "Виола Первый Канал",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(903) 507 - 30 - 65",
            },
        ],
    },
    {
        name: "Виталий Военторг Ростов",
        family: "Виталий Военторг Ростов",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(918) 854 - 03 - 87",
            },
        ],
    },
    {
        name: "Виталий Тихонов",
        family: "Виталий Тихонов",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(968) 492 - 59 - 52",
            },
        ],
    },
    {
        name: "Экономист Суркова;Владимир Авдеенко",
        family: "Владимир Авдеенко Экономист Суркова",
        emails: [
            {
                typeInternet: true,
                typePref: true,
                data: "rusbio@gmail.com",
            },
        ],

        telNumbers: [
            {
                typeOther: true,
                typeVoice: true,
                typePref: true,
                data: "+7(903) 967 - 48 - 54",
            },
        ],
    },
    {
        name: "Владимир",
        family: "Владимир",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(925) 867 - 37 - 23",
            },
            {
                typeCell: true,
                typeVoice: true,
                data: "+7(926) 293 - 50 - 44",
            },
        ],
    },
    {
        name: " Демкин; Владимир",
        family: "Владимир Демкин",
        telNumbers: [
            {
                typeHome: true,
                typeVoice: true,
                typePref: true,
                data: "+79164816146",
            },
        ],
    },
    {
        name: " Дергачев; Владимир",
        family: "Владимир Дергачев",
        emails: [
            {
                typeInternet: true,
                typeWork: true,
                typePref: true,
                data: "vdergachoff@gmail.com",
            },
            {
                typeInternet: true,
                typeWork: true,
                data: "vladimir.dergachev@gazeta.ru",
            },
        ],
        telNumbers: [
            {
                typeWork: true,
                typeVoice: true,
                typePref: true,
                data: "+7(964)630 - 2010",
            },
        ],
    },
    {
        name: " Дергачев; Владимир",
        family: "Владимир Дергачев",
        emails: [
            {
                typeInternet: true,
                typeWork: true,
                typePref: true,
                data: "vdergachoff@gmail.com",
            },
            {
                typeInternet: true,
                typeWork: true,
                data: "vladimir.dergachev@gazeta.ru",
            },
        ],
        telNumbers: [
            {
                typeWork: true,
                typeVoice: true,
                typePref: true,
                data: "+7(964)630 - 2010",
            },
        ],
    },
    {
        name: "Владимир Иванович",
        family: "Владимир Иванович",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(964) 501 - 87 - 74",
            },
            {
                typeHome: true,
                typeVoice: true,
                data: "+7(495) 626 - 74 - 53",
            },
            {
                typeWork: true,
                typeVoice: true,
                data: "+7(928) 774 - 61 - 32",
            },
            {
                typeIphone: true,
                typeCell: true,
                typeVoice: true,
                data: "+7(926) 531 - 85 - 63",
            },
        ],
    },
    {
        name: " Петров; Владимир",
        family: "Владимир Петров",
        telNumbers: [
            {
                typeHome: true,
                typeVoice: true,
                typePref: true,
                data: "+79045203759",
            },
        ],
    },
    {
        name: " Петров;Владимир Петрович",
        family: "Владимир Петрович Петров",
        emails: [
            {
                typeInternet: true,
                typeWork: true,
                typePref: true,
                data: "petrov@eurasec.com",
            },
        ],
        telNumbers: [
            {
                typeWork: true,
                typeVoice: true,
                typePref: true,
                data: "+7(985)999 - 9001",
            },
            {
                typeWork: true,
                typeVoice: true,
                data: "+7(963)991 - 9990",
            },
        ],
    },
    {
        name: " Прокопенко; Владимир",
        family: "Владимир Прокопенко",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(950) 843 - 38 - 07",
            },
            {
                typeCell: true,
                typeVoice: true,
                data: "+7(909) 648 - 93 - 97",
            },
        ],
    },
    {
        name: " Лукьян; Владислав",
        family: "Владислав  Лукьян",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                data: "+7(985) 696 - 19 - 18",
            },
        ],
    },
    {
        name: "Владислав Николаевич Дейнего",
        family: "Владислав Николаевич Дейнего",
        emails: [
            {
                typeInternet: true,
                typeHome: true,
                typePref: true,
                data: "d5927439@ya.ru",
            },
        ],
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
            },
            {
                typeHome: true,
                typeVoice: true,
                data: "+7 905 452 - 02 - 49",
            },
            {
                typeCell: true,
                typeVoice: true,
                data: "+7 962 936 - 71 - 19",
            },
        ],
    },
    {
        name: "Вова Таможня",
        family: "Вова Таможня",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(952) 604 - 18 - 59",
            },
        ],
    },
    {
        name: "Водолазк Игорь МЧС",
        family: "Водолазк Игорь МЧС",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(929) 627 - 57 - 43",
            },
        ],
    },
    {
        name: "Мед Башкирия; Володя",
        family: "Володя Мед Башкирия",
        telNumbers: [
            {
                typePref: true,
                data: "+79183837205",
            },
        ],
    },
    {
        name: "Воран",
        family: "Воран",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                data: "+7(915) 024 - 60 - 34",
            },
        ],
    },
    {
        name: "Газета Комерсант",
        family: "Газета Комерсант",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(968) 081 - 04 - 57",
            },
        ],
    },
    {
        name: "Галина ДАН",
        family: "Галина ДАН",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7 978 069 - 37 - 44",
            },
        ],
    },
    {
        name: "Жукова ДАН; Галина",
        family: "Галина Жукова ДАН",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7 978 750 - 52 - 77",
            },
        ],
    },
    {
        name: " Лавров; Генадий",
        family: "Генадий Лавров",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(985) 760 - 04 - 67",
            },
        ],
    },
    {
        name: " ЩЕРБИНА;Геннадий Валентинович",
        family: "Геннадий Валентинович ЩЕРБИНА",
        emails: [
            {
                typeInternet: true,
                typeWork: true,
                typePref: true,
                data: "info@altek.su",
            },
        ],
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(910)741 - 0174",
            },
        ],
    },
    {
        name: " ЩЕРБИНА;Геннадий Валентинович",
        family: "Геннадий Валентинович ЩЕРБИНА",
        emails: [
            {
                typeInternet: true,
                typeWork: true,
                typePref: true,
                data: "info@altek.su",
            },
        ],
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(910)741 - 0174",
            },
        ],
    },
    {
        name: "Геннадий Литовченко",
        family: "Геннадий Литовченко",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(926) 875 - 59 - 90",
            },
        ],
    },
    {
        name: "Геннадий Рации Москва Донецк",
        family: "Геннадий Рации Москва Донецк",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(968) 532 - 70 - 53",
            },
        ],
    },
    {
        name: "Логист Фонда; Глеб",
        family: "Глеб Логист Фонда",
        telNumbers: [
            {
                typeOther: true,
                typeVoice: true,
                data: "+79192680271",
            },
            {
                typeCell: true,
                typeVoice: true,
                data: "+7(911) 489 - 23 - 35",
            },
        ],
    },
    {
        name: " Москва; Говорит",
        family: "Говорит Москва",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7 499 579 - 77 - 91",
            },
        ],
    },
    {
        name: "Гор",
        family: "Гор",
        emails: [
            {
                typeInternet: true,
                typeHome: true,
                typePref: true,
                data: "gor87@list.ru",
            },
        ],
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(926) 368 - 94 - 73",
            },
        ],
    },
    {
        name: " Хачетурян; Гор",
        family: "Гор Хачетурян",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7 968 847 - 40 - 06",
            },
        ],
    },
    {
        name: "Горсвет",
        family: "Горсвет",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                data: "+7(960) 452 - 06 - 37",
            },
        ],
    },
    {
        name: " Степан; Грицьков",
        family: "Грицьков Степан",
        emails: [
            {
                typeInternet: true,
                typeHome: true,
                typePref: true,
                data: "2012pirammmida@gmail.com",
            },
        ],
        telNumbers: [
            {
                typeHome: true,
                typeVoice: true,
                typePref: true,
                data: "+79117901482",
            },
        ],
    },
    {
        name: "Губарева Катя",
        family: "Губарева Катя",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(903) 473 - 40 - 64",
            },
        ],
    },
    {
        name: "Манюков Борис;Гурин Григорий",
        family: "Гурин Григорий Манюков Борис",
        telNumbers: [
            {
                typeHome: true,
                typeVoice: true,
                typePref: true,
                data: "+7(926) 642 - 83 - 19",
            },
        ],
    },
    {
        name: " Землячество;Гусяков Максим",
        family: "Гусяков Максим Землячество",
        telNumbers: [
            {
                typeHome: true,
                typeVoice: true,
                data: "+7(909) 660 - 51 - 22",
            },
            {
                typeCell: true,
                typeVoice: true,
                data: "+7(926) 678 - 75 - 44",
            },
            {
                typeCell: true,
                typeVoice: true,
                data: "+7(978) 020 - 96 - 77",
            },
        ],
    },
    {
        name: " Россия; Гюрза",
        family: "Гюрза Россия",
        telNumbers: [
            {
                typeHome: true,
                typeVoice: true,
                typePref: true,
                data: "+7(905) 431 - 06 - 49",
            },
            {
                typeCell: true,
                typeVoice: true,
                data: "+7(968) 598 - 26 - 28",
            },
            {
                typeCell: true,
                typeVoice: true,
                data: "+7(978) 821 - 57 - 67",
            },
        ],
    },
    {
        name: "Давидченко Антон Одесса",
        family: "Давидченко Антон Одесса",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(978) 889 - 77 - 31",
            },
        ],
    },
    {
        name: "ДАН Виталий",
        family: "ДАН Виталий",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(965) 510 - 11 - 84",
            },
        ],
    },
    {
        name: "Данеэль Вехлин",
        family: "Данеэль Вехлин",
        telNumbers: [
            {
                typeWork: true,
                typeVoice: true,
                typePref: true,
                data: "+749593730361",
            },
            {
                typeWork: true,
                typeVoice: true,
                data: "+790672396991d.wechlin@nzz.ch",
            },
            {
                typeWork: true,
                typeFax: true,
                data: "+7(499)243 - 0951",
            },
        ],
    },
    {
        name: "Данеэль Вехлин",
        family: "Данеэль Вехлин",
        telNumbers: [
            {
                typeWork: true,
                typeVoice: true,
                typePref: true,
                data: "+749593730361",
            },
            {
                typeWork: true,
                typeVoice: true,
                data: "+790672396991d.wechlin@nzz.ch",
            },
            {
                typeWork: true,
                typeFax: true,
                data: "+7(499)243 - 0951",
            },
        ],
    },
    {
        name: "Дарья Андреева",
        family: "Дарья Андреева",
        telNumbers: [
            {
                typeHome: true,
                typeVoice: true,
                typePref: true,
                data: "+74956252110",
            },
        ],
    },
    {
        name: "Дарья Андреева",
        family: "Дарья Андреева",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(925) 421 - 11 - 35",
            },
        ],
    },
    {
        name: "Дарья Дождь",
        family: "Дарья Дождь",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(985) 780 - 83 - 04",
            },
        ],
    },
    {
        name: "Дарья Лайфньюс",
        family: "Дарья Лайфньюс",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(985) 213 - 29 - 49",
            },
        ],
    },
    {
        name: "ПЦ Новороссия;Дарья Мазаева",
        family: "Дарья Мазаева ПЦ Новороссия",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(916) 525 - 34 - 67",
            },
        ],
    },
    {
        name: " Сорокина; Дарья",
        family: "Дарья  Сорокина",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(963) 715 - 12 - 80",
            },
        ],
    },
    {
        name: " Сорокина; Дарья",
        family: "Дарья Сорокина",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(963) 715 - 12 - 80",
            },
        ],
    },
    {
        name: "Деденко Алексей",
        family: "Деденко Алексей",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(985) 764 - 43 - 40",
            },
        ],
    },
    {
        name: "Луганск С Реф;Демидова Марина",
        family: "Демидова Марина Луганск С Реф",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(909) 741 - 20 - 91",
            },
        ],
    },
    {
        name: " Пушилин;Денис Владимирович",
        family: "Денис Владимирович Пушилин",
        emails: [
            {
                typeInternet: true,
                typeWork: true,
                typePref: true,
                data: "dnrpdv@mail.ru",
            },
        ],
        telNumbers: [
            {
                typeWork: true,
                typeVoice: true,
                typePref: true,
                data: "+7(910)414 - 8926",
            },
        ],
    },
    {
        name: "Денис Дон",
        family: "Денис Дон",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                data: "+7(989) 904 - 35 - 61",
            },
        ],
    },
    {
        name: " Лоторев; Денис",
        family: "Денис Лоторев",
        telNumbers: [
            {
                typePref: true,
                data: "+79191701777",
            },
        ],
    },
    {
        name: "Денис От Новинского",
        family: "Денис От Новинского",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(903) 007 - 22 - 99",
            },
        ],
    },
    {
        name: " Побилат;Денис Петрович",
        family: "Денис Петрович Побилат",
        emails: [
            {
                typeInternet: true,
                typeWork: true,
                typePref: true,
                data: "2787707@mail.ru",
            },
            {
                typeInternet: true,
                typeWork: true,
                data: "pobilat.ru",
            },
            {
                typeInternet: true,
                typeWork: true,
                data: "sobranie.info",
            },
        ],
        telNumbers: [
            {
                typeWork: true,
                typeVoice: true,
                typePref: true,
                data: "+7(3912) 49 - 39 - 28",
            },
            {
                typeWork: true,
                typeVoice: true,
                data: "+7(3912) 66 - 70 - 31",
            },
        ],
    },
    {
        name: "Пом Федорова; Денис",
        family: "Денис Пом Федорова",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(926) 911 - 62 - 64",
            },
        ],
    },
    {
        name: "РБК Ростов;Денис Третьяков",
        family: "Денис Третьяков РБК Ростов",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(961) 284 - 65 - 43",
            },
        ],
    },
    {
        name: "Дина Шеф Редактор Соловьева",
        family: "Дина Шеф Редактор Соловьева",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(903) 244 - 82 - 59",
            },
        ],
    },
    {
        name: " Контрразведка;Дмитрий Иванович",
        family: "Дмитрий Иванович Контрразведка",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(925) 411 - 30 - 63",
            },
        ],
    },
    {
        name: " Кукушкин; дмитрий",
        family: "дмитрий Кукушкин",
        emails: [
            {
                typeInternet: true,
                typeWork: true,
                typePref: true,
                data: "dakukushkinюrttv.ru",
            },
        ],
        telNumbers: [
            {
                typeWork: true,
                typeVoice: true,
                typePref: true,
                data: "+7(499)750 - 00751926",
            },
        ],
    },
    {
        name: " Любченко; Дмитрий",
        family: "Дмитрий Любченко",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(926) 882 - 24 - 85",
            },
        ],
    },
    {
        name: "Дмитрий мавроновости",
        family: "Дмитрий мавроновости",
        telNumbers: [
            {
                typeHome: true,
                typeVoice: true,
                typePref: true,
                data: "+79033480400",
            },
        ],
    },
    {
        name: " Антон;Днепр ополчение",
        family: "Днепр ополчение Антон",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                data: "+7(978) 859 - 60 - 32",
            },
            {
                typeCell: true,
                typeVoice: true,
                data: "+7(978) 006 - 27 - 76",
            },
        ],
    },
    {
        name: "Дождь",
        family: "Дождь",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(985) 198 - 97 - 60",
            },
        ],
    },
    {
        name: "Дождь Канал",
        family: "Дождь Канал",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(495) 744 - 01 - 77",
            },
        ],
    },
    {
        name: "Доллар",
        family: "Доллар",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+79885483812",
            },
        ],
    },
    {
        name: "СК России;Дрыманов Александр Александрович",
        family: "Дрыманов Александр Александрович СК России",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(985) 770 - 84 - 74",
            },
        ],
    },
    {
        name: "Дьяченко Славик",
        family: "Дьяченко Славик",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(918) 206 - 79 - 79",
            },
            {
                typeCell: true,
                typeVoice: true,
                data: "+7(967) 321 - 20 - 96",
            },
        ],
    },
    {
        name: "Евгений Новорос Активист Днепр",
        family: "Евгений Новорос Активист Днепр",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(989) 234 - 27 - 93",
            },
        ],
    },
    {
        name: "Евгений Оник",
        family: "Евгений Оник",
        emails: [
            {
                typeInternet: true,
                typeHome: true,
                typePref: true,
                data: "info - daily@yandex.ru",
            },
        ],
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(966) 355 - 61 - 15",
            },
        ],
    },
    {
        name: "Евгений Поддубный",
        family: "Евгений Поддубный",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(906) 071 - 21 - 06",
            },
        ],
    },
    {
        name: " Транспорт; Евгений; Тамплиер",
        family: "Евгений Тамплиер Транспорт",
        telNumbers: [
            {
                typeHome: true,
                typeVoice: true,
                data: "+7(926) 179 - 04 - 21",
            },
            {
                typeCell: true,
                typeVoice: true,
                data: "+7(926) 154 - 76 - 39",
            },
        ],
    },
    {
        name: "Евгений",
        family: "Евгений",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(928) 778 - 76 - 64",
            },
        ],
    },
    {
        name: "Егор Джокер",
        family: "Егор Джокер",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(961) 286 - 31 - 83",
            },
        ],
    },
    {
        name: " Лымарь; Егор",
        family: "Егор  Лымарь",
        telNumbers: [
            {
                typeHome: true,
                typeVoice: true,
                typePref: true,
                data: "+7(926) 760 - 30 - 83",
            },
        ],
    },
    {
        name: " Виноградова; Екатерина",
        family: "Екатерина Виноградова",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(920) 982 - 09 - 32",
            },
        ],
    },
    {
        name: " Виноградова; Екатерина",
        family: "Екатерина  Виноградова",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(920) 982 - 09 - 32",
            },
        ],
    },
    {
        name: " Кравченко; Елена",
        family: "Елена  Кравченко",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(903) 405 - 26 - 06",
            },
        ],
    },
    {
        name: " Кузнецова; Елена",
        family: "Елена Кузнецова",
        emails: [
            {
                typeInternet: true,
                typeHome: true,
                typePref: true,
                data: "obnimash9@gmail.com",
            },
        ],
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(964) 501 - 77 - 71",
            },
        ],
    },
    {
        name: "Епифан",
        family: "Епифан",
        telNumbers: [
            {
                typeHome: true,
                typeVoice: true,
                typePref: true,
                data: "+7(968) 870 - 98 - 77",
            },
        ],
    },
    {
        name: "Жена Россия",
        family: "Жена Россия",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(908) 186 - 58 - 73",
            },
        ],
    },
    {
        name: "Женя Будник",
        family: "Женя Будник",
        telNumbers: [
            {
                typeHome: true,
                typeVoice: true,
                typePref: true,
                data: "+7(926) 702 - 98 - 49",
            },
        ],
    },
    {
        name: "Заря",
        family: "Заря",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(903) 772 - 61 - 88",
            },
        ],
    },
    {
        name: "Заур",
        family: "Заур",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(928) 957 - 51 - 11",
            },
        ],
    },
    {
        name: "Захарченко Александр",
        family: "Захарченко Александр",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                data: "+7(961) 294 - 97 - 85",
            },
        ],
    },
    {
        name: "Зосимов Александр",
        family: "Зосимов Александр",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                data: "+7(961) 307 - 30 - 83",
            },
        ],
    },
    {
        name: "Иван 24 Канал",
        family: "Иван 24 Канал",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(925) 071 - 01 - 30",
            },
        ],
    },
    {
        name: "RenTV Москва; Иван",
        family: "Иван RenTV Москва",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(926) 475 - 14 - 48",
            },
        ],
    },
    {
        name: " МАКУШОК;Иван Викторович",
        family: "Иван Викторович МАКУШОК",
        emails: [
            {
                typeInternet: true,
                typeWork: true,
                typePref: true,
                data: "imak@gov.ru",
            },
        ],
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(903)960 - 7700",
            },
            {
                typeWork: true,
                typeVoice: true,
                data: "+7(495)606 - 3165",
            },
        ],
    },
    {
        name: " МАКУШОК;Иван Викторович",
        family: "Иван Викторович МАКУШОК",
        emails: [
            {
                typeInternet: true,
                typeWork: true,
                typePref: true,
                data: "imak@gov.ru",
            },
        ],
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(903)960 - 7700",
            },
            {
                typeWork: true,
                typeVoice: true,
                data: "+7(495)606 - 3165",
            },
        ],
    },
    {
        name: "Иван",
        family: "Иван",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(926) 674 - 50 - 27",
            },
        ],
    },
    {
        name: " Панарин;Игорь Владимирович",
        family: "Игорь Владимирович Панарин",
        emails: [
            {
                typeInternet: true,
                typeHome: true,
                typePref: true,
                data: "ipan1966@mail.ru",
            },
            {
                typeInternet: true,
                typeWork: true,
                data: "ecogradmoscow.ru",
            },
        ],
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(985) 126 - 64 - 31",
            },
            {
                typeWork: true,
                typeVoice: true,
                data: "+7(495) 485 - 85 - 89",
            },
        ],
    },
    {
        name: " Перков;Игорь Владимирович",
        family: "Игорь Владимирович Перков",
        emails: [
            {
                typeInternet: true,
                typeHome: true,
                typePref: true,
                data: "bratchina@gmail.com",
            },
        ],
        telNumbers: [
            {
                typeHome: true,
                typeVoice: true,
                typePref: true,
                data: "+7(916) 490 - 74 - 12",
            },
        ],
    },
    {
        name: " Дроздов; Игорь",
        family: "Игорь Дроздов",
        telNumbers: [
            {
                typeHome: true,
                typeVoice: true,
                typePref: true,
                data: "+79082813747",
            },
        ],
    },
    {
        name: "Игорь Марков Одесса",
        family: "Игорь Марков Одесса",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(925) 772 - 35 - 72",
            },
        ],
    },
    {
        name: "Солон...; Игорь",
        family: "Игорь Солон...",
        emails: [
            {
                typeInternet: true,
                typeHome: true,
                typePref: true,
                data: "twenty20@zoho.com",
            },
        ],
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(926) 202 - 91 - 72",
            },
        ],
    },
    {
        name: "Игорь Старков фотограф Родина",
        family: "Игорь Старков фотограф Родина",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(985) 436 - 31 - 64",
            },
        ],
    },
    {
        name: "Ильин Виктор Анатольевич БФ Донбасс",
        family: "Ильин Виктор Анатольевич БФ Донбасс",
        telNumbers: [
            {
                typeOther: true,
                typeVoice: true,
                typePref: true,
                data: "+79381184702",
            },
        ],
    },
    {
        name: "Инал Батувич",
        family: "Инал Батувич",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(926) 912 - 09 - 93",
            },
        ],
    },
    {
        name: "Инна по жд",
        family: "Инна по жд",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7 926 636 - 98 - 82",
            },
        ],
    },
    {
        name: "Инна Попова Старый Оскол",
        family: "Инна Попова Старый Оскол",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(980) 522 - 11 - 58",
            },
        ],
    },
    {
        name: "Интерфакс Дмитрий",
        family: "Интерфакс Дмитрий",
        emails: [
            {
                typeInternet: true,
                typePref: true,
                data: "dmitry.veklich@gmail.com",
            },
            {
                typeInternet: true,
                data: "opi@interfax.ru",
            },
        ],
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(910) 420 - 06 - 71",
            },
        ],
    },
    {
        name: " Заборская; Ирина",
        family: "Ирина Заборская",
        emails: [
            {
                typeInternet: true,
                typeWork: true,
                typePref: true,
                data: "i.zaborskaya@gazeta.ru",
            },
        ],
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(926)525 - 1648",
            },
            {
                typeWork: true,
                typeVoice: true,
                data: "+7(495)980 - 8028",
            },
            {
                typeWork: true,
                typeFax: true,
                data: "+7(495)980 - 9075",
            },
        ],
    },
    {
        name: " Заборская; Ирина",
        family: "Ирина Заборская",
        emails: [
            {
                typeInternet: true,
                typeWork: true,
                typePref: true,
                data: "i.zaborskaya@gazeta.ru",
            },
        ],
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(926)525 - 1648",
            },
            {
                typeWork: true,
                typeVoice: true,
                data: "+7(495)980 - 8028",
            },
            {
                typeWork: true,
                typeFax: true,
                data: "+7(495)980 - 9075",
            },
        ],
    },
    {
        name: " Путинцева; Ирина",
        family: "Ирина Путинцева",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+77051061511",
            },
            {
                typeIphone: true,
                typeCell: true,
                typeVoice: true,
                data: "+7 705 4053105",
            },
        ],
    },
    {
        name: "Исаева",
        family: "Исаева",
        telNumbers: [
            {
                typeHome: true,
                typeVoice: true,
                typePref: true,
                data: "+79154229194",
            },
        ],
    },
    {
        name: "Итар - Тасс",
        family: "Итар - Тасс",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(499) 791 - 04 - 44",
            },
        ],
    },
    {
        name: "Итар Тасс",
        family: "Итар Тасс",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(499) 791 - 04 - 01",
            },
        ],
    },
    {
        name: " Борис; Кагарлицкий",
        family: "Кагарлицкий Борис",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(903) 745 - 51 - 06",
            },
        ],
    },
    {
        name: "Казаков Александр",
        family: "Казаков Александр",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(915) 154 - 31 - 07",
            },
        ],
    },
    {
        name: "Каранай",
        family: "Каранай",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(963) 427 - 88 - 00",
            },
        ],
    },
    {
        name: "Карасев Владимир",
        family: "Карасев Владимир",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(919) 761 - 08 - 03",
            },
        ],
    },
    {
        name: "Карякин Алексей",
        family: "Карякин Алексей",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(915) 391 - 86 - 18",
            },
        ],
    },
    {
        name: "Катасонов Валентин Юрьевич",
        family: "Катасонов Валентин Юрьевич",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(926) 885 - 50 - 73",
            },
        ],
    },
    {
        name: "Катя АИФ",
        family: "Катя АИФ",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(926) 211 - 45 - 17",
            },
        ],
    },
    {
        name: "Анохина 5 Корпус 3;Квартира Москва",
        family: "Квартира Москва Анохина 5 Корпус 3",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(965) 151 - 19 - 57",
            },
        ],
    },
    {
        name: " Кеп",
        family: "Кеп",
        telNumbers: [
            {
                typeIphone: true,
                typeCell: true,
                typeVoice: true,
                data: "+79163040250",
            },
            {
                typeHome: true,
                typeVoice: true,
                data: "+79807221174",
            },
        ],
    },
    {
        name: "Кирилл Белошицкий",
        family: "Кирилл Белошицкий",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(925) 621 - 06 - 70",
            },
        ],
    },
    {
        name: "КИТ Иван(Гюрзы)",
        family: "КИТ Иван(Гюрзы)",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(928) 240 - 61 - 71",
            },
        ],
    },
    {
        name: " Викторович; Кобелев; Алексей",
        family: "Кобелев Алексей Викторович",
        emails: [
            {
                typeInternet: true,
                typePref: true,
                data: "kurskmmm@gmail.com",
            },
        ],
        telNumbers: [
            {
                typeHome: true,
                typeVoice: true,
                typePref: true,
                data: "+79202678635",
            },
        ],
    },
    {
        name: "Не Давать Интервью; Комерсант",
        family: "Комерсант Не Давать Интервью",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(495) 627 - 10 - 27",
            },
        ],
    },
    {
        name: "КОНСТАНТИН",
        family: "КОНСТАНТИН",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(903) 721 - 76 - 96",
            },
        ],
    },
    {
        name: "Константин Белов",
        family: "Константин Белов",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(903) 724 - 82 - 63",
            },
        ],
    },
    {
        name: " Долгов;Константин Константинович",
        family: "Константин Константинович  Долгов",
        emails: [
            {
                typeInternet: true,
                typeWork: true,
                typePref: true,
                data: "kdolgov@mid.ru",
            },
        ],
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(915) 304 - 78 - 28",
            },
            {
                typeWork: true,
                typeVoice: true,
                data: "+7(499) 244 - 14 - 86",
            },
            {
                typeWork: true,
                typeVoice: true,
                data: "+7(499) 244 - 31 - 78",
            },
            {
                typeWork: true,
                typeFax: true,
                data: "+7(499) 244 - 15 - 71",
            },
        ],
    },
    {
        name: "Коровин",
        family: "Коровин",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(916) 580 - 18 - 36",
            },
        ],
    },
    {
        name: "Костя Долгов",
        family: "Костя Долгов",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(967) 263 - 32 - 15",
            },
        ],
    },
    {
        name: " Долгов; Костя",
        family: "Костя Долгов",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(967) 263 - 32 - 15",
            },
        ],
    },
    {
        name: "Костя Шахтер",
        family: "Костя Шахтер",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                data: "+7(916) 137 - 61 - 90",
            },
            {
                typeHome: true,
                typeVoice: true,
                data: "+7(978) 059 - 27 - 39",
            },
        ],
    },
    {
        name: "Крамар",
        family: "Крамар",
        telNumbers: [
            {
                typeHome: true,
                typeVoice: true,
                typePref: true,
                data: "+79107897577",
            },
            {
                typeCell: true,
                typeVoice: true,
                data: "+79156386763",
            },
            {
                typeCell: true,
                typeVoice: true,
                data: "+7(985) 695 - 25 - 92",
            },
        ],
    },
    {
        name: "Краснодон Склад Киса",
        family: "Краснодон Склад Киса",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                data: "+7(903) 460 - 60 - 86",
            },
            {
                typeCell: true,
                typeVoice: true,
                data: "+7(928) 100 - 25 - 76",
            },
        ],
    },
    {
        name: "Крым Друг Коробки",
        family: "Крым Друг Коробки",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(978) 781 - 14 - 08",
            },
        ],
    },
    {
        name: "Ксения Лайфньюс",
        family: "Ксения Лайфньюс",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(495) 663 - 38 - 11",
            },
            {
                typeCell: true,
                typeVoice: true,
                data: "+7(916) 355 - 47 - 79",
            },
        ],
    },
    {
        name: "Ксения Россия - 24",
        family: "Ксения Россия - 24",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(903) 747 - 01 - 35",
            },
        ],
    },
    {
        name: "Ксюша Актуальные Комментарии!!!",
        family: "Ксюша Актуальные Комментарии!!!",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(916) 416 - 88 - 74",
            },
        ],
    },
    {
        name: "Кум Доброволец",
        family: "Кум Доброволец",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(928) 318 - 39 - 01",
            },
        ],
    },
    {
        name: "ЛайфНьюз",
        family: "ЛайфНьюз",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+74956633811",
            },
        ],
    },
    {
        name: "Лайфньюс",
        family: "Лайфньюс",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(964) 520 - 78 - 23",
            },
        ],
    },
    {
        name: "Лайфньюс Марина",
        family: "Лайфньюс Марина",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(926) 855 - 12 - 45",
            },
        ],
    },
    {
        name: "Лариса\, Программа Соловьева",
        family: "Лариса\, Программа Соловьева",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(925) 502 - 42 - 55",
            },
        ],
    },
    {
        name: " Индонезия; Лариса",
        family: "Лариса Индонезия",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(923) 363 - 24 - 23",
            },
        ],
    },
    {
        name: " Алина;ЛДПР Тв",
        family: "ЛДПР Тв Алина",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(495) 628 - 06 - 20",
            },
            {
                typeCell: true,
                typeVoice: true,
                data: "+7(967) 246 - 76 - 30",
            },
        ],
    },
    {
        name: "Легкоступ Анатолий Михайлович",
        family: "Легкоступ Анатолий Михайлович",
        telNumbers: [
            {
                typeWork: true,
                typeVoice: true,
                typePref: true,
                data: "+7(910) 368 - 72 - 32",
            },
        ],
    },
    {
        name: "Легкоступ Анатолий Михайлович",
        family: "Легкоступ Анатолий Михайлович",
        telNumbers: [
            {
                typeWork: true,
                typeVoice: true,
                typePref: true,
                data: "+7(910) 368 - 72 - 32",
            },
        ],
    },
    {
        name: " Загурская; Лена",
        family: "Лена Загурская",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(950) 878 - 66 - 66",
            },
        ],
    },
    {
        name: " Муратова; Лена",
        family: "Лена Муратова",
        nickName: " kursk33",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(915) 519 - 41 - 01",
            },
        ],
    },
    {
        name: " Сивущенков;Леонид Викторович",
        family: "Леонид Викторович Сивущенков",
        emails: [
            {
                typeInternet: true,
                typeHome: true,
                typePref: true,
                data: "alfa - foton2006@mail.ru",
            },
        ],
        telNumbers: [
            {
                typeWork: true,
                typeVoice: true,
                typePref: true,
                data: "+7(499) 728 - 04 - 08",
            },
            {
                typeCell: true,
                typeVoice: true,
                data: "+7(926) 691 - 61 - 19",
            },
        ],
    },
    {
        name: " Решетников;Леонид Петрович",
        family: "Леонид Петрович Решетников",
        telNumbers: [
            {
                typeHome: true,
                typeVoice: true,
                typePref: true,
                data: "+7(495) 454 - 92 - 64",
            },
            {
                typeWork: true,
                typeVoice: true,
                data: "+7(985) 766 - 11 - 23",
            },
        ],
    },
    {
        name: " Финансы; Леонид",
        family: "Леонид Финансы",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                data: "+7(926) 937 - 25 - 76",
            },
        ],
    },
    {
        name: " Финансы1; Леонид",
        family: "Леонид Финансы1",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7 926 937 - 25 - 76",
            },
        ],
    },
    {
        name: "Леха Через Границу",
        family: "Леха Через Границу",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                data: "+7(909) 440 - 57 - 69",
            },
        ],
    },
    {
        name: "Лещенко Максим Иванович",
        family: "Лещенко Максим Иванович",
        telNumbers: [
            {
                typeHome: true,
                typeVoice: true,
                data: "+7(988) 990 - 30 - 69",
            },
        ],
    },
    {
        name: "Лия Коваленко",
        family: "Лия Коваленко",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(989) 726 - 87 - 57",
            },
        ],
    },
    {
        name: " Премьер;ЛНР Цепкалов Геннадий Николаевич",
        family: "ЛНР Цепкалов Геннадий Николаевич Премьер",
        telNumbers: [
            {
                typeHome: true,
                typeVoice: true,
                data: "+7(926) 531 - 17 - 52",
            },
        ],
    },
    {
        name: "Логачев Виталик",
        family: "Логачев Виталик",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                data: "+7(928) 189 - 21 - 96",
            },
        ],
    },
    {
        name: " Ибрагимов; Магомед",
        family: "Магомед Ибрагимов",
        telNumbers: [
            {
                typeHome: true,
                typeVoice: true,
                typePref: true,
                data: "+79031208346",
            },
        ],
    },
    {
        name: "Владимир Иванович; Макович",
        family: "Макович Владимир Иванович",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                data: "+7(928) 605 - 87 - 01",
            },
        ],
    },
    {
        name: "Финанс Пургина;Максим Иванов",
        family: "Максим Иванов Финанс Пургина",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(908) 570 - 21 - 43",
            },
            {
                typeCell: true,
                typeVoice: true,
                data: "+7(985) 756 - 21 - 15",
            },
            {
                typeCell: true,
                typeVoice: true,
                data: "+7(903) 719 - 75 - 70",
            },
        ],
    },
    {
        name: "Максим Кисилев",
        family: "Максим Кисилев",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(903) 245 - 65 - 37",
            },
        ],
    },
    {
        name: "По Правам Человека;Максим Леонардович Шевченко",
        family: "Максим Леонардович Шевченко По Правам Человека",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(903) 726 - 08 - 82",
            },
        ],
    },
    {
        name: "Траст Металл;Максим Майкоп",
        family: "Максим Майкоп Траст Металл",
        telNumbers: [
            {
                typeHome: true,
                typeVoice: true,
                typePref: true,
                data: "+7(911) 700 - 76 - 76",
            },
        ],
    },
    {
        name: "Максим Сергеевич Григорьев",
        family: "Максим Сергеевич Григорьев",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(964) 648 - 67 - 01",
            },
        ],
    },
    {
        name: "Изварино Комендант;Максим Стопятый",
        family: "Максим Стопятый Изварино Комендант",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(928) 625 - 80 - 32",
            },
        ],
    },
    {
        name: "Мама",
        family: "Мама",
        telNumbers: [
            {
                typeOther: true,
                typeVoice: true,
                data: "+79081865873",
            },
        ],
    },
    {
        name: "Мама Россия",
        family: "Мама Россия",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(908) 186 - 45 - 95",
            },
        ],
    },
    {
        name: " Дождь;Мария Ноэль",
        family: "Мария Ноэль Дождь",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(916) 029 - 91 - 33",
            },
        ],
    },
    {
        name: "Мария Рен Тв Москва",
        family: "Мария Рен Тв Москва",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(910) 400 - 01 - 64",
            },
            {
                typeCell: true,
                typeVoice: true,
                data: "+7(925) 175 - 73 - 40",
            },
        ],
    },
    {
        name: "Мария Россия - 24",
        family: "Мария Россия - 24",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(903) 969 - 53 - 67",
            },
        ],
    },
    {
        name: " Вассен; Марсель",
        family: "Марсель Вассен",
        emails: [
            {
                typeInternet: true,
                typeWork: true,
                typePref: true,
                data: "vaessen@un.org",
            },
        ],
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+77777809071",
            },
            {
                typeWork: true,
                typeVoice: true,
                data: "+77273122643#1511",
            },
            {
                typeWork: true,
                typeFax: true,
                data: "+77273123148",
            },
        ],
    },
    {
        name: " Вассен; Марсель",
        family: "Марсель Вассен",
        emails: [
            {
                typeInternet: true,
                typeWork: true,
                typePref: true,
                data: "vaessen@un.org",
            },
        ],
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+77777809071",
            },
            {
                typeWork: true,
                typeVoice: true,
                data: "+77273122643#1511",
            },
            {
                typeWork: true,
                typeFax: true,
                data: "+77273123148",
            },
        ],
    },
    {
        name: "Марченко Оскол",
        family: "Марченко Оскол",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(910) 320 - 45 - 82",
            },
        ],
    },
    {
        name: "Маша",
        family: "Маша",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(919) 107 - 77 - 07",
            },
        ],
    },
    {
        name: "Мила Политика",
        family: "Мила Политика",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(903) 541 - 10 - 55",
            },
        ],
    },
    {
        name: "Миха Гриль",
        family: "Миха Гриль",
        telNumbers: [
            {
                typeIphone: true,
                typeCell: true,
                typeVoice: true,
                data: "+7(917) 511 - 11 - 07",
            },
        ],
    },
    {
        name: "Михаил Бизнесмен Долгова",
        family: "Михаил Бизнесмен Долгова",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(985) 921 - 84 - 59",
            },
        ],
    },
    {
        name: " БРЯЧАК;Михаил Васильевич",
        family: "Михаил Васильевич БРЯЧАК",
        emails: [
            {
                typeInternet: true,
                typeWork: true,
                typePref: true,
                data: "bryachak@duma.gov.ru",
            },
        ],
        telNumbers: [
            {
                typeWork: true,
                typeVoice: true,
                typePref: true,
                data: "+7(495)692 - 8400",
            },
            {
                typeWork: true,
                typeVoice: true,
                data: "+7(495)692 - 7650",
            },
            {
                typeHome: true,
                typeVoice: true,
                data: "+7(985) 764 - 29 - 94",
            },
            {
                typeWork: true,
                typeFax: true,
                data: "+7(495)692 - 2816",
            },
        ],
    },
    {
        name: " Емельянов;Михаил Васильевич",
        family: "Михаил Васильевич  Емельянов",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(985) 766 - 93 - 25",
            },
        ],
    },
    {
        name: " Дегтярев; Михаил",
        family: "Михаил Дегтярев",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(985) 764 - 43 - 14",
            },
        ],
    },
    {
        name: "Михаил Оника",
        family: "Михаил Оника",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(968) 570 - 34 - 10",
            },
        ],
    },
    {
        name: " НТВ;Миша Ракицкий",
        family: "Миша Ракицкий НТВ",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(968) 354 - 18 - 28",
            },
        ],
    },
    {
        name: "мой абхазия",
        family: "мой абхазия",
        telNumbers: [
            {
                typeHome: true,
                typeVoice: true,
                typePref: true,
                data: "+79407147723",
            },
        ],
    },
    {
        name: "Мой Билайн 2",
        family: "Мой Билайн 2",
        telNumbers: [
            {
                typeHome: true,
                typeVoice: true,
                typePref: true,
                data: "+7(962) 949 - 71 - 03",
            },
        ],
    },
    {
        name: "Мой Билайн Москва",
        family: "Мой Билайн Москва",
        telNumbers: [
            {
                typeHome: true,
                typeVoice: true,
                typePref: true,
                data: "+7(968) 664 - 26 - 51",
            },
        ],
    },
    {
        name: "Мой Курск",
        family: "Мой Курск",
        telNumbers: [
            {
                typePref: true,
                data: "+79202609589",
            },
        ],
    },
    {
        name: "Мой Мегафон",
        family: "Мой Мегафон",
        telNumbers: [
            {
                typeHome: true,
                typeVoice: true,
                typePref: true,
                data: "+7(928) 149 - 11 - 36",
            },
        ],
    },

    {
        name: "Мой Сочи",
        family: "Мой Сочи",
        telNumbers: [
            {
                typePref: true,
                data: "+79649491296",
            },
        ],
    },
    {
        name: "Москва Быстрое Такси",
        family: "Москва Быстрое Такси",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(495) 514 - 01 - 01",
            },
        ],
    },
    {
        name: "МТС Менеджер Россия",
        family: "МТС Менеджер Россия",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(985) 268 - 49 - 44",
            },
        ],
    },
    {
        name: " Алексей; Муратов",
        family: "Муратов Алексей",
        emails: [
            {
                typeInternet: true,
                typeHome: true,
                typePref: true,
                data: "kursk18@gmail.com",
            },
        ],
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                data: "+79102111030",
            },
        ],
    },
    {
        name: "Наталья Захарова",
        family: "Наталья Захарова",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(925) 828 - 44 - 72",
            },
        ],
    },
    {
        name: "Журналист Муратова;Наталья Литвиненко",
        family: "Наталья Литвиненко  Журналист Муратова",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(928) 967 - 71 - 59",
            },
        ],
    },
    {
        name: "Национальная Служба Новостей(прессконференции)",
        family: "Национальная Служба Новостей(прессконференции)",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(916) 107 - 77 - 34",
            },
        ],
    },
    {
        name: "некипелов сергей",
        family: "некипелов сергей",
        telNumbers: [
            {
                typeHome: true,
                typeVoice: true,
                typePref: true,
                data: "+79265563720",
            },
        ],
    },
    {
        name: "Викторович Стариков; Николай",
        family: "Николай Викторович Стариков",
        emails: [
            {
                typeInternet: true,
                typeHome: true,
                typePref: true,
                data: "mail@nstarikov.ru",
            },
        ],
        telNumbers: [
            {
                typeHome: true,
                typeVoice: true,
                typePref: true,
                data: "+7(921) 957 - 09 - 50",
            },
        ],
    },
    {
        name: " Гончаров; Николай",
        family: "Николай Гончаров",
        emails: [
            {
                typeInternet: true,
                typeWork: true,
                typePref: true,
                data: "nik12343@yandex.ru",
            },
        ],
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(926)910 - 4595",
            },
            {
                typeWork: true,
                typeVoice: true,
                data: "+7(499)791 - 0035",
            },
        ],
    },
    {
        name: " Гончаров; Николай",
        family: "Николай Гончаров",
        emails: [
            {
                typeInternet: true,
                typeWork: true,
                typePref: true,
                data: "nik12343@yandex.ru",
            },
        ],
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(926)910 - 4595",
            },
            {
                typeWork: true,
                typeVoice: true,
                data: "+7(499)791 - 0035",
            },
        ],
    },
    {
        name: " Дроздов; Николай",
        family: "Николай Дроздов",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7 967 148 - 49 - 55",
            },
        ],
    },
    {
        name: " ВИЛЯНСКИИ;Николай Константинович",
        family: "Николай Константинович ВИЛЯНСКИИ",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(903)960 - 8798",
            },
        ],
    },
    {
        name: " МАРЧЕНКО;Николай Михаилович",
        family: "Николай Михаилович МАРЧЕНКО",
        emails: [
            {
                typeInternet: true,
                typeWork: true,
                typePref: true,
                data: "russiahotel_70@mail.ru",
            },
        ],
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(910) 320 - 45 - 82",
            },
        ],
    },
    {
        name: " МАРЧЕНКО;Николай Михаилович",
        family: "Николай Михаилович МАРЧЕНКО",
        emails: [
            {
                typeInternet: true,
                typeWork: true,
                typePref: true,
                data: "russiahotel_70@mail.ru",
            },
        ],
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(910) 320 - 45 - 82",
            },
        ],
    },
    {
        name: "Николай Побилата",
        family: "Николай Побилата",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(962) 066 - 76 - 79",
            },
        ],
    },
    {
        name: " Чирко; Николай",
        family: "Николай Чирко",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                data: "+79787228542",
            },
        ],
    },
    {
        name: "Новиков Владимир",
        family: "Новиков Владимир",
        telNumbers: [
            {
                typeHome: true,
                typeVoice: true,
                data: "+7(925) 057 - 53 - 51",
            },
        ],
    },
    {
        name: " Финансы;Ногинский Олег Владимирович",
        family: "Ногинский Олег Владимирович Финансы",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(916) 215 - 99 - 27",
            },
        ],
    },
    {
        name: "НСН++",
        family: "НСН++",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(495) 925 - 04 - 49",
            },
        ],
    },
    {
        name: "НСН Алина",
        family: "НСН Алина",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(926) 678 - 71 - 02",
            },
        ],
    },
    {
        name: "Оксана Гюрзы",
        family: "Оксана Гюрзы",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(903) 630 - 88 - 32",
            },
        ],
    },
    {
        name: " НИЛОВ;Олег Анатольевич",
        family: "Олег Анатольевич НИЛОВ",
        emails: [
            {
                typeInternet: true,
                typeWork: true,
                typePref: true,
                data: "nilovoa@duma.gov.ru",
            },
        ],
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(985)765 - 2850",
            },
        ],
    },
    {
        name: " Бондаренко; Олег",
        family: "Олег Бондаренко",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(925) 517 - 82 - 25",
            },
            {
                typeHome: true,
                typeVoice: true,
                data: "+7(925) 919 - 76 - 50",
            },
        ],
    },
    {
        name: " Бондаренко; Олег",
        family: "Олег Бондаренко",
        emails: [
            {
                typeInternet: true,
                typeWork: true,
                typePref: true,
                data: "rosukrinform@gmail.com",
            },
        ],
        telNumbers: [
            {
                typeWork: true,
                typeVoice: true,
                typePref: true,
                data: "+7(925)517 - 8225",
            },
        ],
    },
    {
        name: " Бондаренко; Олег",
        family: "Олег Бондаренко",
        emails: [
            {
                typeInternet: true,
                typeWork: true,
                typePref: true,
                data: "rosukrinform@gmail.com",
            },
        ],
        telNumbers: [
            {
                typeWork: true,
                typeVoice: true,
                typePref: true,
                data: "+7(925)517 - 8225",
            },
        ],
    },
    {
        name: "Олег Вести Россия 1",
        family: "Олег Вести Россия 1",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(495) 225 - 68 - 00",
            },
        ],
    },
    {
        name: "Олег Вести Россия 1",
        family: "Олег Вести Россия 1",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(903) 660 - 83 - 38",
            },
        ],
    },
    {
        name: " Нобитский;Олег Владимирович",
        family: "Олег Владимирович Нобитский",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(926) 652 - 77 - 05",
            },
        ],
    },
    {
        name: " Новинский;Олег Владимирович",
        family: "Олег Владимирович Новинский",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(926) 652 - 77 - 05",
            },
        ],
    },
    {
        name: " Гуманитарка; Олег; Ростов",
        family: "Олег Ростов Гуманитарка",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7 928 774 - 04 - 54",
            },
        ],
    },
    {
        name: "Олег Дубинин Россия 1",
        family: "Олег Дубинин Россия 1",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(903) 960 - 79 - 87",
            },
        ],
    },
    {
        name: "Олег Касавченко Ростов Шахты",
        family: "Олег Касавченко Ростов Шахты",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(928) 774 - 04 - 54",
            },
        ],
    },
    {
        name: "Олег Лондон Ялта",
        family: "Олег Лондон Ялта",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(985) 972 - 97 - 64",
            },
        ],
    },
    {
        name: " Говорун;Олег Маркович",
        family: "Олег Маркович Говорун",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(985) 991 - 85 - 81",
            },
            {
                typeCell: true,
                typeVoice: true,
                data: "+7(925) 710 - 03 - 44",
            },
        ],
    },
    {
        name: "Олег Николаевич Кравченко Амвей Платина",
        family: "Олег Николаевич Кравченко Амвей Платина",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(937) 709 - 99 - 21",
            },
        ],
    },
    {
        name: " Царев; Олег",
        family: "Олег Царев",
        telNumbers: [
            {
                typeHome: true,
                typeVoice: true,
                data: "+7(925) 020 - 24 - 35",
            },
        ],
    },
    {
        name: "Олеся АИФ",
        family: "Олеся АИФ",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(903) 792 - 08 - 53",
            },
        ],
    },
    {
        name: "Ольга Павелко",
        family: "Ольга Павелко",
        emails: [
            {
                typeInternet: true,
                typeHome: true,
                typePref: true,
                data: "kukolkavip@mail.ru",
            },
        ],
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(980) 322 - 01 - 45",
            },
        ],
    },
    {
        name: " Позднякова; Ольга",
        family: "Ольга  Позднякова",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(928) 107 - 14 - 13",
            },
        ],
    },
    {
        name: " Рожкова; Ольга",
        family: "Ольга Рожкова",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(926) 000 - 11 - 49",
            },
        ],
    },
    {
        name: "Оля Кепа",
        family: "Оля Кепа",
        telNumbers: [
            {
                typeWork: true,
                typeVoice: true,
                data: "+79807221427",
            },
        ],
    },
    {
        name: " Ковригина; Оля",
        family: "Оля Ковригина",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(964) 774 - 74 - 19",
            },
        ],
    },
    {
        name: " Ковригина; Оля",
        family: "Оля  Ковригина",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(964) 774 - 74 - 19",
            },
        ],
    },
    {
        name: "Охр Павел Крым",
        family: "Охр Павел Крым",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(906) 033 - 90 - 83",
            },
        ],
    },
    {
        name: " Гузев; Павел",
        family: "Павел Гузев",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(929) 524 - 10 - 85",
            },
        ],
    },
    {
        name: "Павел Карпов",
        family: "Павел Карпов",
        telNumbers: [
            {
                typeHome: true,
                typeVoice: true,
                typePref: true,
                data: "+7(985) 991 - 00 - 78",
            },
        ],
    },
    {
        name: "Палестинец",
        family: "Палестинец",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(916) 547 - 77 - 32",
            },
        ],
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                data: "+7(913) 330 - 00 - 08",
            },
        ],
    },
    {
        name: "Палестинец Новый",
        family: "Палестинец Новый",
        telNumbers: [
            {
                typeHome: true,
                typeVoice: true,
                typePref: true,
                data: "+7(916) 547 - 77 - 32",
            },
        ],
    },
    {
        name: "Партизан Евгений Судибор",
        family: "Партизан Евгений Судибор",
        telNumbers: [
            {
                typeHome: true,
                typeVoice: true,
                typePref: true,
                data: "+7(925) 722 - 52 - 49",
            },
            {
                typeWork: true,
                typeVoice: true,
                data: "+7(985) 235 - 28 - 51",
            },
            {
                typeCell: true,
                typeVoice: true,
                data: "+7(968) 594 - 98 - 76",
            },
        ],
    },
    {
        name: " Яна;Первый Канал Прямой Эфир",
        family: "Первый Канал Прямой Эфир Яна",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(495) 617 - 72 - 98",
            },
            {
                typeCell: true,
                typeVoice: true,
                data: "+7(903) 277 - 71 - 62",
            },
        ],
    },
    {
        name: "Петр Яблоновский",
        family: "Петр Яблоновский",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(919) 167 - 79 - 65",
            },
        ],
    },
    {
        name: "Матеря России;Петренко Валентина Александровна",
        family: "Петренко Валентина Александровна Матеря России",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(985) 999 - 28 - 09",
            },
        ],
    },
    {
        name: "Плахин Юрий",
        family: "Плахин Юрий",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(925) 359 - 85 - 31",
            },
        ],
    },
    {
        name: "Племянница",
        family: "Племянница",
        telNumbers: [
            {
                typeHome: true,
                typeVoice: true,
                data: "+79183510086",
            },
        ],
    },
    {
        name: " Полярник;Поляков Максим Борисович",
        family: "Поляков Максим Борисович Полярник",
        telNumbers: [
            {
                typeHome: true,
                typeVoice: true,
                typePref: true,
                data: "+7(909) 950 - 46 - 44",
            },
            {
                typeCell: true,
                typeVoice: true,
                data: "+7(968) 711 - 85 - 74",
            },
            {
                typeCell: true,
                typeVoice: true,
                data: "+79295345230",
            },
        ],
    },
    {
        name: "Пресс Центр Новороссии",
        family: "Пресс Центр Новороссии",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(495) 625 - 21 - 10",
            },
        ],
    },
    {
        name: " Суркова; Приемна",
        family: "Приемна Суркова",
        emails: [
            {
                typeInternet: true,
                typePref: true,
                data: "prm_Surkova@gov.ru",
            },
            {
                typeInternet: true,
                typeHome: true,
                data: "mariya777_2000@mail.ru",
            },
        ],
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(495) 606 - 07 - 34",
            },
            {
                typeCell: true,
                typeVoice: true,
                data: "+7(910) 413 - 88 - 47",
            },
            {
                typeCell: true,
                typeVoice: true,
                data: "+7(985) 765 - 28 - 29",
            },
        ],
    },
    {
        name: "Приемная Говоруна Олега Марковича",
        family: "Приемная Говоруна Олега Марковича",
        telNumbers: [
            {
                typeWork: true,
                typeVoice: true,
                typePref: true,
                data: "+7(495) 606 - 43 - 65",
            },
            {
                typeCell: true,
                typeVoice: true,
                data: "+7(916) 696 - 97 - 58",
            },
        ],
    },
    {
        name: "Пургин",
        family: "Пургин",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                data: "+7(964) 701 - 24 - 82",
            },
        ],
    },
    {
        name: "Пушилина",
        family: "Пушилина",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                data: "+7(978) 871 - 31 - 44",
            },
        ],
    },
    {
        name: " Приемная; Рапапорт",
        family: "Рапапорт Приемная",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(495) 606 - 28 - 65",
            },
        ],
    },
    {
        name: "Рапопорт Борис Яковлевич",
        family: "Рапопорт Борис Яковлевич",
        emails: [
            {
                typeInternet: true,
                typeHome: true,
                typePref: true,
                data: "krotoff7@yandex.ry",
            },
        ],
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                data: "+7(964) 728 - 13 - 00",
            },
        ],
    },
    {
        name: "Рапопорт вайбер",
        family: "Рапопорт вайбер",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7 926 254 - 38 - 79",
            },
        ],
    },
    {
        name: "Рафаэль",
        family: "Рафаэль",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                data: "+7(962) 949 - 57 - 66",
            },
        ],
    },
    {
        name: "Раша Тудей Москва",
        family: "Раша Тудей Москва",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(499) 750 - 00 - 75",
            },
        ],
    },
    {
        name: "РБК",
        family: "РБК",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(925) 789 - 80 - 67",
            },
        ],
    },
    {
        name: "РБК к Томанцеву",
        family: "РБК к Томанцеву",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(926) 762 - 61 - 15",
            },
        ],
    },
    {
        name: "Ремезов Александр",
        family: "Ремезов Александр",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(903) 503 - 73 - 18",
            },
        ],
    },
    {
        name: "Риа Дмитрий",
        family: "Риа Дмитрий",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(968) 766 - 54 - 89",
            },
        ],
    },
    {
        name: "Риановости",
        family: "Риановости",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(495) 645 - 66 - 01",
            },
        ],
    },
    {
        name: " Доброволец; Рома",
        family: "Рома Доброволец",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7 989 168 - 20 - 54",
            },
        ],
    },
    {
        name: "Рома Новый",
        family: "Рома Новый",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(965) 328 - 86 - 98",
            },
        ],
    },
    {
        name: " Поздняков; Рома",
        family: "Рома Поздняков",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7 938 114 - 04 - 77",
            },
        ],
    },
    {
        name: " Поздняков; Рома",
        family: "Рома  Поздняков",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7 938 114 - 04 - 77",
            },
        ],
    },
    {
        name: "Рома",
        family: "Рома",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(966) 080 - 84 - 65",
            },
        ],
    },
    {
        name: " Чирик;Рома Черкашин",
        family: "Рома Черкашин Чирик",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(919) 765 - 24 - 81",
            },
        ],
    },
    {
        name: "Роман Викторович",
        family: "Роман Викторович",
        telNumbers: [
            {
                typeOther: true,
                typeVoice: true,
                typePref: true,
                data: "+79629502074",
            },
        ],
    },
    {
        name: "Роман Казаки Россия",
        family: "Роман Казаки Россия",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(903) 591 - 59 - 16",
            },
        ],
    },
    {
        name: " Лягин; Роман",
        family: "Роман Лягин",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                data: "+7(925) 830 - 07 - 92",
            },
        ],
    },
    {
        name: "Роман Разум",
        family: "Роман Разум",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(925) 518 - 00 - 73",
            },
        ],
    },
    {
        name: "Ратнер Алия; Роман",
        family: "Роман Ратнер Алия",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(985) 220 - 17 - 93",
            },
        ],
    },
    {
        name: "Ратнер Алия; Роман",
        family: "Роман Ратнер Алия",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(985) 220 - 17 - 93",
            },
        ],
    },
    {
        name: "Российская Газета",
        family: "Российская Газета",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(495) 775 - 31 - 18",
            },
        ],
    },
    {
        name: "Россия - 1\, Юля Специальный Кореспондент",
        family: "Россия - 1\, Юля Специальный Кореспондент",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(905) 747 - 09 - 55",
            },
        ],
    },
    {
        name: "Россия - 24 Москва новости",
        family: "Россия - 24 Москва новости",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(495) 728 - 73 - 00",
            },
        ],
    },
    {
        name: "Россия 1",
        family: "Россия 1",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(499) 995 - 23 - 35",
            },
        ],
    },
    {
        name: "Россия 1 Олег",
        family: "Россия 1 Олег",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(903) 617 - 98 - 59",
            },
        ],
    },
    {
        name: " 24; Россия",
        family: "Россия 24",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7 495 000 - 70 - 49",
            },
        ],
    },
    {
        name: "Россия 24 Алексей Казаков",
        family: "Россия 24 Алексей Казаков",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(903) 798 - 11 - 71",
            },
        ],
    },
    {
        name: "Россия 24 Вести",
        family: "Россия 24 Вести",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(903) 724 - 81 - 95",
            },
        ],
    },
    {
        name: "Россия 24 Ильина Ирина",
        family: "Россия 24 Ильина Ирина",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(903) 725 - 96 - 43",
            },
        ],
    },
    {
        name: "Россия1 Ростов Денис",
        family: "Россия1 Ростов Денис",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(903) 406 - 15 - 16",
            },
        ],
    },
    {
        name: "Ростов База Поз Москва",
        family: "Ростов База Поз Москва",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(960) 453 - 75 - 19",
            },
        ],
    },
    {
        name: "Ростов Юрий От Мурванидзе",
        family: "Ростов Юрий От Мурванидзе",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(909) 407 - 98 - 33",
            },
        ],
    },
    {
        name: "РСН",
        family: "РСН",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(495) 230 - 04 - 30",
            },
        ],
    },
    {
        name: "РТ Лида",
        family: "РТ Лида",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(916) 803 - 36 - 69",
            },
        ],
    },
    {
        name: "Русск Предст БиБиСи",
        family: "Русск Предст БиБиСи",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(916) 185 - 70 - 13",
            },
        ],
    },
    {
        name: "Рухлядин Виктор Иванович",
        family: "Рухлядин Виктор Иванович",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(985) 390 - 59 - 60",
            },
        ],
    },
    {
        name: "Рыжков Шувалова Помощник",
        family: "Рыжков Шувалова Помощник",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(916) 800 - 15 - 18",
            },
        ],
    },
    {
        name: "Саша Бовдунов Новоросинформ",
        family: "Саша Бовдунов Новоросинформ",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(915) 225 - 96 - 65",
            },
        ],
    },
    {
        name: " Гундерич; Саша",
        family: "Саша Гундерич",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                data: "+7(978) 751 - 21 - 51",
            },
        ],
    },
    {
        name: " Броневик;Саша ЛДПР",
        family: "Саша ЛДПР Броневик",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(926) 364 - 94 - 90",
            },
        ],
    },
    {
        name: "Саша Мунтяну",
        family: "Саша Мунтяну",
        telNumbers: [
            {
                typeHome: true,
                typeVoice: true,
                typePref: true,
                data: "+7(960) 262 - 06 - 87",
            },
        ],
    },
    {
        name: "Саша Павлов",
        family: "Саша Павлов",
        telNumbers: [
            {
                typeHome: true,
                typeVoice: true,
                typePref: true,
                data: "+7(964) 592 - 36 - 52",
            },
        ],
    },
    {
        name: " Смирнов; Саша",
        family: "Саша Смирнов",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                data: "+7(961) 311 - 79 - 93",
            },
        ],
    },
    {
        name: "С.Б. ",
        family: "С.Б.",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(917) 551 - 36 - 92",
            },
        ],
    },
    {
        name: " Кукол; Семен",
        family: "Семен Кукол",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(926) 461 - 10 - 50",
            },
        ],
    },
    {
        name: "Сеня",
        family: "Сеня",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                data: "+7(989) 701 - 67 - 27",
            },
            {
                typeCell: true,
                typeVoice: true,
                data: "+7(926) 363 - 34 - 23",
            },
            {
                typeCell: true,
                typeVoice: true,
                data: "+7(954) 101 - 38 - 07",
            },
        ],
    },
    {
        name: "Серб",
        family: "Серб",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(968) 951 - 30 - 87",
            },
        ],
    },
    {
        name: " Иващенко;Сергей Александрович",
        family: "Сергей Александрович Иващенко",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(928) 965 - 49 - 61",
            },
        ],
    },
    {
        name: " МАРКОВ;Сергей Александрович",
        family: "Сергей Александрович МАРКОВ",
        emails: [
            {
                typeInternet: true,
                typeWork: true,
                typePref: true,
                data: "duma.gov@gmail.com",
            },
        ],
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(985)999 - 0502",
            },
            {
                typeWork: true,
                typeVoice: true,
                data: "+7(926)539 - 8658",
            },
            {
                typeWork: true,
                typeFax: true,
                data: "+7(499)764 - 5524",
            },
        ],
    },
    {
        name: " Бородая; Сергей",
        family: "Сергей Бородая",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(903) 775 - 13 - 89",
            },
            {
                typeCell: true,
                typeVoice: true,
                data: "+7(938) 133 - 45 - 19",
            },
            {
                typeCell: true,
                typeVoice: true,
                data: "+7(918) 518 - 02 - 70",
            },
        ],
    },
    {
        name: " Шишкин;Сергей Владимирович",
        family: "Сергей Владимирович Шишкин",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(926) 042 - 31 - 66",
            },
            {
                typeCell: true,
                typeVoice: true,
                data: "+7(916) 958 - 88 - 99",
            },
        ],
    },
    {
        name: " Глазьев; Сергей",
        family: "Сергей Глазьев",
        emails: [
            {
                typeInternet: true,
                typeHome: true,
                typePref: true,
                data: "prm_glazyev@gov.ru",
            },
        ],
        telNumbers: [
            {
                typeWork: true,
                typeVoice: true,
                typePref: true,
                data: "+7(495) 606 - 43 - 02",
            },
            {
                typeWork: true,
                typeFax: true,
                data: "+7(495) 606 - 79 - 10",
            },
        ],
    },
    {
        name: " ГЕРАЙМОВИЧ;Сергей Леонидович",
        family: "Сергей Леонидович ГЕРАЙМОВИЧ",
        emails: [
            {
                typeInternet: true,
                typeWork: true,
                typePref: true,
                data: "geraimovich@yandex.ru",
            },
        ],
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(915) 570 - 40 - 45",
            },
        ],
    },
    {
        name: " ГЕРАЙМОВИЧ;Сергей Леонидович",
        family: "Сергей Леонидович ГЕРАЙМОВИЧ",
        emails: [
            {
                typeInternet: true,
                typeWork: true,
                typePref: true,
                data: "geraimovich@yandex.ru",
            },
        ],
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(915) 570 - 40 - 45",
            },
        ],
    },
    {
        name: " Никешин; Сергей",
        family: "Сергей Никешин",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(964) 337 - 66 - 30",
            },
        ],
    },
    {
        name: " Бабурин;Сергей Николаевич",
        family: "Сергей Николаевич Бабурин",
        emails: [
            {
                typeInternet: true,
                typeWork: true,
                typePref: true,
                data: "rcjer@mail.ru",
            },
        ],
        telNumbers: [
            {
                typeWork: true,
                typeVoice: true,
                typePref: true,
                data: "+7(903)725 - 1227",
            },
        ],
    },
    {
        name: " Бабурин;Сергей Николаевич",
        family: "Сергей Николаевич Бабурин",
        emails: [
            {
                typeInternet: true,
                typeWork: true,
                typePref: true,
                data: "rcjer@mail.ru",
            },
        ],
        telNumbers: [
            {
                typeWork: true,
                typeVoice: true,
                typePref: true,
                data: "+7(903)725 - 1227",
            },
        ],
    },
    {
        name: " Ткачук;Сергей Петрович",
        family: "Сергей Петрович Ткачук",
        emails: [
            {
                typeInternet: true,
                typeHome: true,
                typePref: true,
                data: "serg1784@mail.ru",
            },
        ],
        telNumbers: [
            {
                typeWork: true,
                typeVoice: true,
                typePref: true,
                data: "+7(495) 606 - 43 - 02",
            },
            {
                typeCell: true,
                typeVoice: true,
                data: "+7(903) 960 - 39 - 10",
            },
        ],
    },
    {
        name: "Сергей Сергеевич",
        family: "Сергей Сергеевич",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(915) 640 - 30 - 00",
            },
        ],
    },
    {
        name: "Сергей Стрелка",
        family: "Сергей Стрелка",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(929) 636 - 73 - 16",
            },
        ],
    },
    {
        name: "Ткачук от Глазьева; Сергей",
        family: "Сергей Ткачук от Глазьева",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(903) 960 - 39 - 10",
            },
        ],
    },
    {
        name: " Филькин; Сергей",
        family: "Сергей Филькин",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7 96224709714",
            },
            {
                typeCell: true,
                typeVoice: true,
                data: "+79624709714",
            },
        ],
    },
    {
        name: " Филькин; Сергей",
        family: "Сергей Филькин",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+79624709714",
            },
            {
                typeCell: true,
                typeVoice: true,
                data: "+7 96224709714",
            },
        ],
    },
    {
        name: "Сердар Дмитрий Олегович",
        family: "Сердар Дмитрий Олегович",
        emails: [
            {
                typeInternet: true,
                typeHome: true,
                typePref: true,
                data: "serdar.alimov@yandex.ru",
            },
        ],
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(985) 840 - 79 - 96",
            },
            {
                typeCell: true,
                typeVoice: true,
                data: "+7(968) 847 - 40 - 04",
            },
        ],
    },
    {
        name: "Соловьев Владимир",
        family: "Соловьев Владимир",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(929) 970 - 33 - 33",
            },
        ],
    },
    {
        name: "Сорокин",
        family: "Сорокин",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(985) 763 - 90 - 81",
            },
        ],
    },
    {
        name: "Спец Кореспондент",
        family: "Спец Кореспондент",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(916) 079 - 88 - 00",
            },
        ],
    },
    {
        name: "Станислав Полосков",
        family: "Станислав Полосков",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(926) 668 - 78 - 01",
            },
            {
                typeCell: true,
                typeVoice: true,
                data: "+7(985) 136 - 13 - 30",
            },
        ],
    },
    {
        name: " Макоев; Стас",
        family: "Стас Макоев",
        emails: [
            {
                typeInternet: true,
                typePref: true,
                data: "mmm.miting@gmail.com",
            },
        ],
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                data: "+7(985) 759 - 10 - 58",
            },
        ],
    },
    {
        name: "Степан НТВ",
        family: "Степан НТВ",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(964) 537 - 38 - 37",
            },
        ],
    },
    {
        name: "Стрелков Николай Владимирович",
        family: "Стрелков Николай Владимирович",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                data: "+7(926) 870 - 22 - 92",
            },
        ],
    },
    {
        name: "Стрелок",
        family: "Стрелок",
        telNumbers: [
            {
                typeHome: true,
                typeVoice: true,
                typePref: true,
                data: "+7(926) 531 - 03 - 00",
            },
        ],
    },

    {
        name: "Сурков В.Ю.",
        family: "Сурков В.Ю.",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(985) 272 - 52 - 26",
            }],
    },
    {
        name: "Сытов НИКОЛАЙ Олегович",
        family: "Сытов НИКОЛАЙ Олегович",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(928) 966 - 68 - 76",
            },
        ],
    },
    {
        name: " Москов;Таня Мальцева",
        family: "Таня Мальцева Москов",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(968) 374 - 11 - 16",
            },
        ],
    },
    {
        name: "Таня Поп",
        family: "Таня Поп",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(968) 535 - 96 - 07",
            },
            {
                typeWork: true,
                typeVoice: true,
                data: "+7(916) 738 - 36 - 85",
            },
        ],
    },
    {
        name: "Татаринов Руслан Владимирович",
        family: "Татаринов Руслан Владимирович",
        emails: [
            {
                typeInternet: true,
                typeHome: true,
                typePref: true,
                data: "tatrus.01@mail.ru",
            },
        ],
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(985) 997 - 01 - 69",
            },
        ],
    },
    {
        name: " Елена;ТВ Центр\, Итоги",
        family: "ТВ Центр\, Итоги Елена",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(916) 673 - 11 - 35",
            },
        ],
    },
    {
        name: "Терещенко Кандидат На Министра",
        family: "Терещенко Кандидат На Министра",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(928) 130 - 96 - 99",
            },
        ],
    },
    {
        name: " Тазиев; Тимур",
        family: "Тимур Тазиев",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(920) 266 - 26 - 66",
            },
        ],
    },
    {
        name: "Федор Лайф Ньюс",
        family: "Федор Лайф Ньюс",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(925) 156 - 38 - 55",
            },
        ],
    },
    {
        name: " Иконников; Феликс",
        family: "Феликс Иконников",
        emails: [
            {
                typeInternet: true,
                typePref: true,
                data: "mmm2011.rodaslav@gmail.com",
            },
        ],
        telNumbers: [
            {
                typeHome: true,
                typeVoice: true,
                typePref: true,
                data: "+7967829762933",
            },
            {
                typeHome: true,
                typeVoice: true,
                data: "+7(967) 829 - 76 - 33",
            },
        ],
    },
    {
        name: " Иконников; Феликс",
        family: "Феликс Иконников",
        emails: [
            {
                typeInternet: true,
                typePref: true,
                data: "mmm2011.rodaslav@gmail.com",
            },
        ],
        telNumbers: [
            {
                typeHome: true,
                typeVoice: true,
                typePref: true,
                data: "+7(967) 829 - 76 - 33",
            },
            {
                typeCell: true,
                typeVoice: true,
                data: "+7967829812990",
            },
        ],
    },
    {
        name: "Ферберт Александр Александрович",
        family: "Ферберт Александр Александрович",
        emails: [
            {
                typeInternet: true,
                typeHome: true,
                typePref: true,
                data: "msk.student@yandex.ru",
            },
        ],
        telNumbers: [
            {
                typeHome: true,
                typeVoice: true,
                typePref: true,
                data: "+7(910) 985 - 49 - 50",
            },
            {
                typeCell: true,
                typeVoice: true,
                data: "+7(915) 424 - 39 - 64",
            },
            {
                typeCell: true,
                typeVoice: true,
                data: "+79621609686",
            },
        ],
    },
    {
        name: " Прешерен; Франце",
        family: "Франце Прешерен",
        telNumbers: [
            {
                typeWork: true,
                typeVoice: true,
                typePref: true,
                data: "+7(926)566 - 4239",
            },
        ],
    },
    {
        name: " Прешерен; Франце",
        family: "Франце Прешерен",
        telNumbers: [
            {
                typeWork: true,
                typeVoice: true,
                typePref: true,
                data: "+7(926)566 - 4239",
            },
        ],
    },
    {
        name: "Чайка",
        family: "Чайка",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7 964 582 - 90 - 23",
            },
        ],
    },
    {
        name: " Владимирович;Шахты Вельмицкий",
        family: "Шахты Вельмицкий Владимирович",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(985) 227 - 19 - 62",
            },
            {
                typeHome: true,
                typeVoice: true,
                data: "+7(928) 126 - 66 - 66",
            },
        ],
    },
    {
        name: "Шишкин Александр Тамбов",
        family: "Шишкин Александр Тамбов",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7 910 752 2264",
            },
        ],
    },
    {
        name: "Атаман Казачий Полковник;Шишкин Сергей Владимирович",
        family: "Шишкин Сергей Владимирович Атаман Казачий Полковник",
        emails: [
            {
                typeInternet: true,
                typeHome: true,
                typePref: true,
                data: "rar177@mail.ru",
            },
            {
                typeInternet: true,
                typeWork: true,
                data: "nato177@mail.ru",
            },
        ],
        telNumbers: [
            {
                typeHome: true,
                typeVoice: true,
                typePref: true,
                data: "+7(926) 042 - 31 - 66",
            },
            {
                typeWork: true,
                typeVoice: true,
                data: "+7(499) 784 - 01 - 18",
            },
            {
                typeWork: true,
                typeFax: true,
                data: "+7(499) 784 - 05 - 10",
            },
        ],
    },
    {
        name: " Борис; Шмидт",
        family: "Шмидт Борис",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7 921 967 - 37 - 49",
            },
        ],
    },
    {
        name: "Шувалова",
        family: "Шувалова",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(964) 641 - 50 - 28",
            },
        ],
    },
    {
        name: "Щедрин Александр Владимирович",
        family: "Щедрин Александр Владимирович",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(916) 051 - 74 - 34",
            },
        ],
    },
    {
        name: "РИСИ Ростов;Эдуард Анатольевич Попов",
        family: "Эдуард Анатольевич Попов РИСИ Ростов",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(928) 954 - 80 - 68",
            },
        ],
    },
    {
        name: "Эльбрус",
        family: "Эльбрус",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(938) 105 - 64 - 83",
            },
        ],
    },
    {
        name: "Юлия Жена Вадима",
        family: "Юлия Жена Вадима",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(961) 273 - 94 - 80",
            },
        ],
    },
    {
        name: " Никитина; Юля",
        family: "Юля Никитина",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(925) 708 - 87 - 91",
            },
        ],
    },
    {
        name: "Юля Свичкарь Москва",
        family: "Юля Свичкарь Москва",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(915) 515 - 20 - 95",
            },
        ],
    },
    {
        name: "Юля сестра",
        family: "Юля сестра",
        emails: [
            {
                typeInternet: true,
                typeHome: true,
                typePref: true,
                data: "4488771@gmail.com",
            },
        ],
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                data: "+7(904) 345 - 57 - 52",
            },
        ],
    },
    {
        name: " ТЕПЛОВ;Юрий Алексеевич",
        family: "Юрий Алексеевич ТЕПЛОВ",
        emails: [
            {
                typeInternet: true,
                typeWork: true,
                typePref: true,
                data: "ok428745@mail.ru",
            },
        ],
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(910)328 - 1283",
            },
        ],
    },
    {
        name: " ТЕПЛОВ;Юрий Алексеевич",
        family: "Юрий Алексеевич ТЕПЛОВ",
        emails: [
            {
                typeInternet: true,
                typeWork: true,
                typePref: true,
                data: "ok428745@mail.ru",
            },
        ],
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(910)328 - 1283",
            },
        ],
    },
    {
        name: "Сидоров Ген.Директор;Юрий Владимирович",
        family: "Юрий Владимирович Сидоров Ген.Директор",
        emails: [
            {
                typeInternet: true,
                typeWork: true,
                typePref: true,
                data: "alfa - foton2006@mail.ru",
            },
        ],
        telNumbers: [
            {
                typeWork: true,
                typeVoice: true,
                typePref: true,
                data: "+7(499) 728 - 04 - 08",
            },
            {
                typeCell: true,
                typeVoice: true,
                data: "+7(903) 138 - 56 - 80",
            },
        ],
    },
    {
        name: "Юрий Кот",
        family: "Юрий Кот",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(968) 766 - 28 - 22",
            },
        ],
    },
    {
        name: "Курносов Охр; Юрий",
        family: "Юрий Курносов Охр",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(916) 308 - 69 - 89",
            },
        ],
    },
    {
        name: "Я Ростов",
        family: "Я Ростов",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(918) 543 - 56 - 82",
            },
        ],
    },
    {
        name: "Ярослав японское ТВ",
        family: "Ярослав японское ТВ",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(985) 226 - 57 - 81",
            },
        ],
    },
    {
        name: "",
        family: "",
        telNumbers: [
            {
                typeWork: true,
                typeVoice: true,
                typePref: true,
                data: "+749593730361",
            },
            {
                typeWork: true,
                typeVoice: true,
                data: "+790672396991d.wechlin@nzz.ch",
            },
            {
                typeWork: true,
                typeFax: true,
                data: "+7(499)243 - 0951",
            },
            {
                typeMain: true,
                data: " +7 495 961 - 24 - 26",
            },
            {
                typeWork: true,
                typeFax: true,
                data: "+7 495 961 - 24 - 27",
            },
        ],
    },
    {
        name: "",
        family: "Apple",
        emails: [
            {
                typeInternet: true,
                typePref: true,
                data: "6203091@gmail.com",
            },
        ],
        telNumbers: [
            {
                typeMain: true,
                typePref: true,
                data: "+7 495 961 - 24 - 26",
            },
            {
                typeWork: true,
                typeFax: true,
                data: "+7 495 961 - 24 - 27",
            },
        ],
    },
    {
        name: "Ka3axc",
        family: "Ka3axc",
        emails: [
            {
                typeInternet: true,
                typeWork: true,
                typePref: true,
                data: "vaessen@un.org",
            },
        ],
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+77777809071",
            },
            {
                typeWork: true,
                typeVoice: true,
                data: "+77273122643 / 266.1511",
            },
            {
                typeWork: true,
                typeVoice: true,
                data: "+77273123148",
            },
        ],
    },
    {
        name: "KOCTEHKO Борис Игоревич",
        family: "KOCTEHKO Борис Игоревич",
        telNumbers: [
            {
                typeWork: true,
                typeVoice: true,
                typePref: true,
                data: "+74991363601",
            },
        ],
    },
    {
        name: "KOCTEHKO Борис Игоревич",
        family: "KOCTEHKO Борис Игоревич",
        telNumbers: [
            {
                typeWork: true,
                typeVoice: true,
                typePref: true,
                data: "+74991363601",
            },
        ],
    },
    {
        name: "Семен Риси; Thoeodourooth",
        family: "Thoeodourooth Семен Риси",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7 925 608 - 97 - 21",
            },
        ],
    },
    {
        name: " Koln;Westdeutscher Rundfunk",
        family: "Westdeutscher Rundfunk Koln",
        emails: [
            {
                typeInternet: true,
                typeWork: true,
                typePref: true,
                data: "ard - moskau.tv@wdr.de",
            },
        ],
        telNumbers: [
            {
                typeWork: true,
                typeVoice: true,
                typePref: true,
                data: "+7 / 495 / 7835998",
            },
            {
                typeWork: true,
                typeFax: true,
                data: "+7 / 495 / 7835999",
            },
        ],
    },
    {
        name: "",
        family: "",
        telNumbers: [
            {
                typeCell: true,
                typeVoice: true,
                typePref: true,
                data: "+7(926) 195 - 90 - 38",
            },
        ],
    },
    {
        name: "",
        family: "9621804@gmail.com",
        emails: [
            {
                typeInternet: true,
                typeHome: true,
                typePref: true,
                data: "9621804@gmail.com",
            },
        ],
    },
];
