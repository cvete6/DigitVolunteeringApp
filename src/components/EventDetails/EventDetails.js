import React, {Component} from 'react';
import Menu from "../Menu/Menu";
import EventsList from "../EventsList/EventsList";
import Footer from "../Footer";
import SectionComponent from "../SectionComponent/SectionComponent";
import "./EventDetails.css"

class EventDetails extends Component{

    state={
        events:[
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
            },
            {
                redenBroj:4,
                naslov:"Два лабрадори имаат потреба да бидат чувани во периодот од 23.11 до 4.12.2019",
                sodrzina:"Поради службено патување, имаме потреба од некој кој ќе ни ги чува кучињата. Имаме обезбедено храна и хигиенски производи" +
                    "за негување на милениците. Питоми се и многу дружељубиви.",
                lokacija: "Тетово"
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
                    "финансиска состојба. Дополнителни информации на меил advocateLaw@gmail.com или телефон 078 996 991.",

                lokacija: "Битола"
            },
            {
                redenBroj:15,
                naslov:"Pro bonо - работа на судски случаи за клиенти кои не можат да си дозволат плаќање на адвокатските услуги",
                sodrzina:"За детални информации околу условите и тежината" +
                    "на случајот на меил advocateLaw@gmail.com или телефон 078 996 991.",
                lokacija:"Скопје"
            },
            {
                redenBroj:16,
                naslov:"Потребни се волонтери на Маратонот Женска трка одржан од WizzAir",
                sodrzina:"Доколку имате волонтирано во Црвен Крст или пожелно е да имате основни медицински знаења, " +
                    "пријавете се како волонтер на Маратонот Женска трка одржан од WizzAir. За пријавување, пополнете ја" +
                    "формата за пријавување на веб сајтот на WizzAir.",
                lokacija: "Скопје"

            },
            {
                redenBroj:17,
                naslov:"Волонтери од Црвен Крст се потребни за на концертот на Стинг на 13ти Ноември",
                sodrzina:"На 13ти Ноември ќе се одржи концертот на Стинг, во арена Борис Трајковски." +
                    "Потребни се волонтери кои имаат солидни практични знаења од областа на медицината." +
                    "за Пријавување пријавете се на 078 654 339 или на medvolon@gmail.com.",
                lokacija:"Скопје"
            }
        ]
    }

    render() {
        const location=this.props.match.params.location;
        const locEvents=this.state.events.filter((e)=>e.lokacija==location)
        console.log(locEvents);
        return(
        <div>
            <Menu/>
            <SectionComponent>
                <h2 className={"text-center"}>Волонтерски настани во {location}</h2>
                <hr className={"content-hr"}/>
            </SectionComponent>
            <EventsList events={locEvents}/>
            <Footer/>
        </div>
        );
    }
}

export default EventDetails;