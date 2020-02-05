import React, {Component} from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './FooterLinks.css'

class FooterLinks extends Component {
    render(){
        return (
            <div className={"pt-3"}>
             <div className={"links-display"}>
                 <ul className={"ul-links"}>
                     <li className={"h5"}>Градови</li>
                     <li className={"li-item"}><a href="/events/Скопје">Скопје</a></li>
                     <li className={"li-item"}><a href="/events/Тетово">Тетово</a></li>
                     <li className={"li-item"}><a href="/events/Битола">Битола</a></li>
                     <li className={"li-item"}><a href="/events/Куманово">Куманово</a></li>
                     <li className={"li-item"}><a href="/events/Прилеп">Прилеп</a></li>
                 </ul>
             </div>
             <div className={"links-display"}>
                 <ul className={"ul-links"}>
                     <li className={"h5"}>Категории</li>
                     <li className={"li-item"}><a href="/details/3">Образование</a></li>
                     <li className={"li-item"}><a href="/details/2">Екологија</a></li>
                     <li className={"li-item"}><a href="/details/0">Филмски фестивали</a></li>
                     <li className={"li-item"}><a href="/details/6">Медицина</a></li>
                     <li className={"li-item"}><a href="/details/5">Правни совети</a></li>
                 </ul>
             </div>
             <div className={"links-display"}>
                 <div className={"row mb-4"}>
                     <div className={"col"}>
                         <ul className={"ul-links"}>
                             <li className={"h5"}>Инфо</li>
                             <li className={"li-item"}><a href="/details/5">За нас</a></li>
                             <li className={"li-item"}><a href="/details/5">Информации</a></li>
                             <li className={"li-item"}><a href="/details/5">Контакт</a></li>
                         </ul>
                     </div>
                 </div>
                 <div className={"row"}>
                     <div className={"col"}>
                     </div>
                 </div>
             </div>
            </div>
        );
    }
}

export default FooterLinks;