import React, {Component} from 'react';
import Header from './components/Header/Header';
import Content from './components/Content'
import './App.css';
import Footer from "./components/Footer";
import Sections from "./components/Sections/Sections";
import Menu from "./components/Menu/Menu";
import DetailsPage from "./components/DetailsPage/DetailsPage";

class App extends Component {
    state={
        categories:[
            {
                id:0,
                title:'Волонтирање на филмски фестивали',
                backgroundUrl:'data:image/jpeg;base64,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',
                content:"Во оваа категорија можете да најдете настани од типот на филмски фестивали, на кои потребни се волонтери." +
                    " Нивната работа вклучува регулирање на билтетите, влезот, седиштата, грижа за редот за време на проекциите.",
                nastani:[
                    {
                        redenBroj:1,
                        naslov:"Giffoni - Филмски фестивал, има потреба од млади волонтери",
                        sodrzina:"Giffoni е филмски фестивал кој ќе се одржува во перидот од 25.11-1.12.2019 година.За негова комплетна реализација имаме потреба" +
                            "од млади волонтери кои ќе помогнат во одржување на редот за време на проекциите и ќе овозможат логистички услуги.",
                        lokacija: "Скопје"
                    },
                    {
                        redenBroj:2,
                        naslov:"Браќа Манаки- Филмски фестивал",
                        sodrzina:"Браќа Манаки е филмски фестивал кој ќе се одржува во перидот од 15.11-15.12.2019 година, во Битола." +
                            "Имаме потреба од волонтери полни со ентузијазам и желба за стекнување нови знаења." +
                            "Обезбедени се храна, превоз и сместување за време на волонтирањето.",
                        lokacija: "Битола"
                    },
                    {
                        redenBroj:3,
                        naslov:"МакеДокс- Филмски фестивал",
                        sodrzina:"МакеДокс е филмски фестивал кој ќе се одржува во перидот од 2.11-30.11.2019 година, во Скопје." +
                            "Потребни се волонтери кои ќе овозможат техничко-логистичка поддршка, како и помош при спроведување на глеадчите кон проекцијата." +
                            "Исто така, потребни се лица кои ќе даваат информации за филмовите на штандовите за промоција.",
                        lokacija: "Скопје"
                    }


                ]

            },
            {
                id:1,
                title:'Доброволно чување на миленици или грижа/вдомување на истите',
                backgroundUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWklV6ZICu_ryQtj-cA8_ZOm-xAXLsnxgSvkLDjo9mnCWSqXsz&s',
                content:"Иницијатива за чување на миленици, волонтирање во центри за згрижување на кучиња и помош при вдомување.",
                nastani:[
                    {
                        redenBroj:1,
                        naslov:"Два лабрадори имаат потреба да бидат чувани во периодот од 23.11 до 4.12.2019",
                        sodrzina:"Поради службено патување, имаме потреба од некој кој ќе ни ги чува кучињата. Имаме обезбедено храна и хигиенски производи" +
                            "за негување на милениците. Питоми се и многу дружељубиви.",
                        lokacija: "Тетово"
                    },
                    {
                        redenBroj:2,
                        naslov:"Најдена е Персиска мачка во близината на СитиМол",
                        sodrzina:"На 11.10.2019г. најдена е Персиска мачка, која е питома и плашлива." +
                            "Се бара човек кој ќе обезбеди постојано живеалиште и топол дом. Дополнително доколку некој ја препознава нека ја пријави информацијава кај" +
                            "сопственикот.",
                        lokacija:"Скопје"
                    },
                    {
                        redenBroj:3,
                        naslov:"Се вдомуваат златни ретривери на возрасни 3 недели",
                        sodrzina:"Се вдомуваат три златни ретривери кои се стари 3 недели. Мајката и таткото се златен ретривер.Поради" +
                            "олеснување на нивното чување имаме потреба од некој кој ќ може да ги вдоми или чува на одреден период. Прочистени" +
                            "се од паразити и вакцинирани.",
                        lokacija: "Куманово"
                    }


                ]
            },
            {
                id:2,
                title:'Еколошки акции за пошумување, чистење или подигање на еколошката свест кај граѓаните',
                backgroundUrl:'data:image/jpeg;base64,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',
                content:"Учество на настани посветени на засадување, чистење на околината или пак организирање на настани за подигање на свестта кај граѓаните" +
                    "за одржување на животната околина чиста и наоѓање на ефикасни начини за рециклирање.",
                nastani:[
                    {
                        redenBroj:1,
                        naslov:"Еколошка акција - чистење на отпадоците на врв Водно",
                        sodrzina:"Проблемот за чиста околина е распространет насекаде во светот. Потребата од луѓе кои ја делат" +
                            "истата иницијатива за собирање на отпадот ја имаме и ние." +
                            "Доколку си ентузијаст и ти е развиена еколошката цел, придружи ни се во недела на 03.11.2019г. од 11 часот. Почнуваме од средно Водно.",
                        lokacija: "Скопје"
                    },
                    {
                        redenBroj:2,
                        naslov:"Пошумување на подножјето на Скопска Црна Гора",
                        sodrzina:"Поради сушните денови во летото потребна е акција од пошумувње на нови насади. Овој предел е меѓу поранливите" +
                            "во Скопската околина поради изложеноста на одредени пожари. Настанот ќе се одвиве од 3.11до 6.11.2019г. За детални информации" +
                            "јавете се на 070 576 765.",
                        lokacija:"Скопје"
                    },
                    {
                        redenBroj:3,
                        naslov:"Бесплатно предавање за рециклирање и начини за подобрување на животната околина",
                        sodrzina:"Студенти од Машински факултет од смерот за екологија, ќе одржуваат бесплатно предавање за начините на кои може да се подигне еколошката свест." +
                            "Ќе предложат одредени современи методи за рециклирање и одредени едноставни чекори со кои ќе дојдат ефиксни еколошки решенија." +
                            "Предавањето ќе се одржи во амфитеатарот на Машинскиот Факултет при Уким, на 27.11.2019г. во 20часот.",

                        lokacija:"Скопје"
                    }


                ]
            },
            {
                id:3,
                title:'Едукатвни часови за лица со понизок степен на образование или од ранливи категории',
                backgroundUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3L8has8RYlqkBsLYwd-1OlUs90sWeFafWBWQS_KIr0l2Wexmq5w&s',
                content:"Одржување на едукативни часови на лица со понизок степен на образование или оние кои не се здобиле со никакво.",
                nastani:[
                    {
                        redenBroj:1,
                        naslov:"Образование за сите",
                        sodrzina:"Во просториите на МКЦ ќе се одржат повеќе-неделни работилници од едукативен карактер поделени во 3 групи според возраст." +
                            "Групите се однесуваат на возрасти од 3 до 7 години, од 8 до 14 години и од 15 до 20 години. Доколку познавате некој кој припаѓа" +
                            "на соодветната целна група или пак има потреба од овие предавања известете го или пријавете го на astavaRadost@education.edu." +
                            "Настанот започнува од 5.11.2019г.",

                        lokacija:"Скопје"
                    },
                    {
                        redenBroj:2,
                        naslov:"Како да аплицирам за работно место",
                        sodrzina:"Дводневна работилница во просториите на Канцеларија 19 со цел стекнување на вештини за деловно изразување при работно интервју." +
                            "Почеток на 2.11.2019г. во 10 часот.",
                        lokacija:"Скопје"
                    },
                    {
                        redenBroj:3,
                        naslov:"Како да аплицирам за работно место",
                        sodrzina:"Дводневна работилница во просториите на Канцеларија 19 со цел стекнување на вештини за деловно изразување при работно интервју." +
                            "Почеток на 2.11.2019г. во 10 часот.",
                        lokacija:"Скопје"
                    }


                ]
            },
            {
                id:4,
                title:'Креативни и инклузивни работилници за лица со одредена попреченост',
                backgroundUrl:'data:image/jpeg;base64,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' ,
                content:"Креативни културни работилници за инклузија на лица со посебни потреби или дреден инвалидитет, со цел израз на емпатија и нивнот мотивирање. ",
                nastani:[
                    {
                        redenBroj:1,
                        naslov:"Од попреченост, до поврзанст",
                        sodrzina:"Да покажеме дека недостатоците не се причина за стекнување на нов пријател, дека од секого може да се научи нешто ново и" +
                            "дека пријателствата не познаваат граници. Настанот ќе се одржи на 12.11.2019г. во ресторанот МКЦ Клуб со почеток во 18часот. Можете" +
                            "да донесете и пријатели.  ",
                        lokacija:"Скопје"
                    },
                    {
                        redenBroj:2,
                        naslov:"Волонтерско предавање за Аутизмот, Даунов Синдром и Дислексијата",
                        sodrzina:"Тридневна работилница со бесплатни предавања од дипломирани психолози и стручни лица од областа на психологијата и невронауката." +
                            "За сите заинтересирани, настанот ќе се одржи во амфитеатарот на правниот факултет при УКИМ на 16.11.2019г. со почеток во 17 часот.",
                        lokacija:"Скопје"
                    },
                    {
                        redenBroj:3,
                        naslov:"Волонтерско предавање за Аутизмот, Даунов Синдром и Дислексијата",
                        sodrzina:"Тридневна работилница со бесплатни предавања од дипломирани психолози и стручни лица од областа на психологијата и невронауката." +
                            "За сите заинтересирани, настанот ќе се одржи во амфитеатарот на правниот факултет при УКИМ на 16.11.2019г. со почеток во 17 часот.",
                        lokacija:"Скопје"
                    }


                ]
            },
            {
                id:5,
                title:'Волонтерски часови за човековите права',
                backgroundUrl:'data:image/jpeg;base64,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',

                content:"Образложување на одредени правни регулативи на лица кои не можат да си овозможат правен совет, работилници за човековите права.",
                nastani:[
                    {
                        redenBroj:1,
                        naslov:"Кои се моите старателски права врз децата по разводот",
                        sodrzina:"Бесплатно советување од страна на успешно адвокатско друштво, за граѓани кои не можат да си дозволат целосно латени правни услуги." +
                            "За отстварување на услугата, при вашата посета на нашите канцеларии потребно е да доставите потврден документ за вашата " +
                            "финансиска состојба. Дополнителни информации на меил advocateLaw@gmail.com или телефон 078 996 991."


                    },
                    {
                        redenBroj:2,
                        naslov:"Pro bonо - работа на судски случаи за клиенти кои не можат да си дозволат плаќање на адвокатските услуги",
                        sodrzina:"За детални информации околу условите и тежината" +
                            "на случајот на меил advocateLaw@gmail.com или телефон 078 996 991."

                    },
                    {
                        redenBroj:3,
                        naslov:"Pro bonо - работа на судски случаи за клиенти кои не можат да си дозволат плаќање на адвокатските услуги",
                        sodrzina:"За детални информации околу условите и тежината" +
                            "на случајот на меил advocateLaw@gmail.com или телефон 078 996 991."
                    }
                ]
            },
            {
                id:6,
                title:'Волонтирање во прва помош и достава на медицински услуги',
                backgroundUrl:'https://webstockreview.net/images/medicine-clipart-medicine-label-8.png',
                content:"Волонтирање на настани каде што е потребна прва помош, медицински совети и услуги.",
                nastani:[
                    {
                        redenBroj:1,
                        naslov:"Потребни се волонтери на Маратонот Женска трка одржан од WizzAir",
                        sodrzina:"Доколку имате волонтирано во Црвен Крст или пожелно е да имате основни медицински знаења, " +
                            "пријавете се како волонтер на Маратонот Женска трка одржан од WizzAir. За пријавување, пополнете ја" +
                            "формата за пријавување на веб сајтот на WizzAir."


                    },
                    {
                        redenBroj:2,
                        naslov:"Волонтери од Црвен Крст се потребни за на концертот на Стинг на 13ти Ноември",
                        sodrzina:"На 13ти Ноември ќе се одржи концертот на Стинг, во арена Борис Трајковски." +
                            "Потребни се волонтери кои имаат солидни практични знаења од областа на медицината." +
                            "за Пријавување пријавете се на 078 654 339 или на medvolon@gmail.com."

                    },
                    {
                        redenBroj:3,
                        naslov:"Pro bonо - работа на судски случаи за клиенти кои не можат да си дозволат плаќање на адвокатските услуги",
                        sodrzina:"За детални информации околу условите и тежината" +
                            "на случајот на меил advocateLaw@gmail.com или телефон 078 996 991."

                    }


                ]

            }
        ],
        events:[
            {
                redenBroj:1,
                naslov:"Giffoni - Филмски фестивал, има потреба од млади волонтери",
                sodrzina:"Giffoni е филмски фестивал кој ќе се одржува во перидот од 25.11-1.12.2019 година.За негова комплетна реализација имаме потреба" +
                    "од млади волонтери кои ќе помогнат во одржување на редот за време на проекциите и ќе овозможат логистички услуги.",
                lokacija: "Skopje"
            },
            {
                redenBroj:2,
                naslov:"Браќа Манаки- Филмски фестивал",
                sodrzina:"Браќа Манаки е филмски фестивал кој ќе се одржува во перидот од 15.11-15.12.2019 година, во Битола." +
                    "Имаме потреба од волонтери полни со ентузијазам и желба за стекнување нови знаења." +
                    "Обезбедени се храна, превоз и сместување за време на волонтирањето.",
                lokacija: "Skopje"
            },
            {
                redenBroj:3,
                naslov:"МакеДокс- Филмски фестивал",
                sodrzina:"МакеДокс е филмски фестивал кој ќе се одржува во перидот од 2.11-30.11.2019 година, во Скопје." +
                    "Потребни се волонтери кои ќе овозможат техничко-логистичка поддршка, како и помош при спроведување на глеадчите кон проекцијата." +
                    "Исто така, потребни се лица кои ќе даваат информации за филмовите на штандовите за промоција.",
                lokacija: "Skopje"
            },
            {
                redenBroj:4,
                naslov:"Два лабрадори имаат потреба да бидат чувани во периодот од 23.11 до 4.12.2019",
                sodrzina:"Поради службено патување, имаме потреба од некој кој ќе ни ги чува кучињата. Имаме обезбедено храна и хигиенски производи" +
                    "за негување на милениците. Питоми се и многу дружељубиви.",
                lokacija: "Tetovo"
            },
            {
                redenBroj:5,
                naslov:"Најдена е Персиска мачка во близината на СитиМол",
                sodrzina:"На 11.10.2019г. најдена е Персиска мачка, која е питома и плашлива." +
                    "Се бара човек кој ќе обезбеди постојано живеалиште и топол дом. Дополнително доколку некој ја препознава нека ја пријави информацијава кај" +
                    "сопственикот.",
                lokacija:"Скопје"
            },
            {
                redenBroj:6,
                naslov:"Се вдомуваат златни ретривери на возрасни 3 недели",
                sodrzina:"Се вдомуваат три златни ретривери кои се стари 3 недели. Мајката и таткото се златен ретривер.Поради" +
                    "олеснување на нивното чување имаме потреба од некој кој ќ може да ги вдоми или чува на одреден период. Прочистени" +
                    "се од паразити и вакцинирани.",
                lokacija: "Куманово"
            },
            {
                redenBroj:7,
                naslov:"Еколошка акција - чистење на отпадоците на врв Водно",
                sodrzina:"Проблемот за чиста околина е распространет насекаде во светот. Потребата од луѓе кои ја делат" +
                    "истата иницијатива за собирање на отпадот ја имаме и ние." +
                    "Доколку си ентузијаст и ти е развиена еколошката цел, придружи ни се во недела на 03.11.2019г. од 11 часот. Почнуваме од средно Водно.",
                lokacija: "Скопје"
            },
            {
                redenBroj:8,
                naslov:"Пошумување на подножјето на Скопска Црна Гора",
                sodrzina:"Поради сушните денови во летото потребна е акција од пошумувње на нови насади. Овој предел е меѓу поранливите" +
                    "во Скопската околина поради изложеноста на одредени пожари. Настанот ќе се одвиве од 3.11до 6.11.2019г. За детални информации" +
                    "јавете се на 070 576 765.",
                lokacija:"Скопје"
            },
            {
                redenBroj:9,
                naslov:"Бесплатно предавање за рециклирање и начини за подобрување на животната околина",
                sodrzina:"Студенти од Машински факултет од смерот за екологија, ќе одржуваат бесплатно предавање за начините на кои може да се подигне еколошката свест." +
                    "Ќе предложат одредени современи методи за рециклирање и одредени едноставни чекори со кои ќе дојдат ефиксни еколошки решенија." +
                    "Предавањето ќе се одржи во амфитеатарот на Машинскиот Факултет при Уким, на 27.11.2019г. во 20часот.",

                lokacija:"Скопје"
            },
            {
                redenBroj:10,
                naslov:"Образование за сите",
                sodrzina:"Во просториите на МКЦ ќе се одржат повеќе-неделни работилници од едукативен карактер поделени во 3 групи според возраст." +
                    "Групите се однесуваат на возрасти од 3 до 7 години, од 8 до 14 години и од 15 до 20 години. Доколку познавате некој кој припаѓа" +
                    "на соодветната целна група или пак има потреба од овие предавања известете го или пријавете го на astavaRadost@education.edu." +
                    "Настанот започнува од 5.11.2019г.",

                lokacija:"Скопје"
            },
            {
                redenBroj:11,
                naslov:"Како да аплицирам за работно место",
                sodrzina:"Дводневна работилница во просториите на Канцеларија 19 со цел стекнување на вештини за деловно изразување при работно интервју." +
                    "Почеток на 2.11.2019г. во 10 часот.",
                lokacija:"Скопје"
            },
            {
                redenBroj:12,
                naslov:"Од попреченост, до поврзанст",
                sodrzina:"Да покажеме дека недостатоците не се причина за стекнување на нов пријател, дека од секого може да се научи нешто ново и" +
                    "дека пријателствата не познаваат граници. Настанот ќе се одржи на 12.11.2019г. во ресторанот МКЦ Клуб со почеток во 18часот. Можете" +
                    "да донесете и пријатели.  ",
                lokacija:"Скопје"
            },
            {
                redenBroj:13,
                naslov:"Волонтерско предавање за Аутизмот, Даунов Синдром и Дислексијата",
                sodrzina:"Тридневна работилница со бесплатни предавања од дипломирани психолози и стручни лица од областа на психологијата и невронауката." +
                    "За сите заинтересирани, настанот ќе се одржи во амфитеатарот на правниот факултет при УКИМ на 16.11.2019г. со почеток во 17 часот.",
                lokacija:"Скопје"
            },
            {
                redenBroj:14,
                naslov:"Кои се моите старателски права врз децата по разводот",
                sodrzina:"Бесплатно советување од страна на успешно адвокатско друштво, за граѓани кои не можат да си дозволат целосно латени правни услуги." +
                    "За отстварување на услугата, при вашата посета на нашите канцеларии потребно е да доставите потврден документ за вашата " +
                    "финансиска состојба. Дополнителни информации на меил advocateLaw@gmail.com или телефон 078 996 991."


            },
            {
                redenBroj:15,
                naslov:"Pro bonо - работа на судски случаи за клиенти кои не можат да си дозволат плаќање на адвокатските услуги",
                sodrzina:"За детални информации околу условите и тежината" +
                    "на случајот на меил advocateLaw@gmail.com или телефон 078 996 991."

            },
            {
                redenBroj:16,
                naslov:"Потребни се волонтери на Маратонот Женска трка одржан од WizzAir",
                sodrzina:"Доколку имате волонтирано во Црвен Крст или пожелно е да имате основни медицински знаења, " +
                    "пријавете се како волонтер на Маратонот Женска трка одржан од WizzAir. За пријавување, пополнете ја" +
                    "формата за пријавување на веб сајтот на WizzAir."


            },
            {
                redenBroj:17,
                naslov:"Волонтери од Црвен Крст се потребни за на концертот на Стинг на 13ти Ноември",
                sodrzina:"На 13ти Ноември ќе се одржи концертот на Стинг, во арена Борис Трајковски." +
                    "Потребни се волонтери кои имаат солидни практични знаења од областа на медицината." +
                    "за Пријавување пријавете се на 078 654 339 или на medvolon@gmail.com."

            }
        ]

    }

    chooseCategory = (id) =>{
        console.log(id);
        let path = `/details/`+id;
        this.props.history.push(path);
    }

    searchByLocation=(location)=> {
        console.log(location);
        let path = '/events/' + location;
        this.props.history.push(path);
    }
    render(){
    return (

             <div className="App">
                          <Header searchByLocation={this.searchByLocation}/>
                          <Content categories={this.state.categories} chooseCategory={this.chooseCategory}/>
                          <Footer/>
             </div>

    );
  }
}

export default App;
