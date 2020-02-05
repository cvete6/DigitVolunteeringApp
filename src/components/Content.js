import React, {Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Categories from '../components/Kategorii/Categories.js'
import SectionComponent from "./SectionComponent/SectionComponent";
import SitePost from "./SitePost/SitePost";
import './Kategorii/CategoriesHomePage.css'
import './Content.css'


class Content extends Component {
    render(){
        return (
            <div>
            <SectionComponent>
                <h2 className={"h2 text-center mt-4 mb-3 h-content-color font-weight-bold"}>Волонтерски категории</h2>
                <hr className={"content-hr"}/>
                <Categories  categories={this.props.categories} chooseCategory={this.props.chooseCategory}  />
            </SectionComponent>
            <SectionComponent>
                <hr className={"content-hr"}/>
                <SitePost/>
            </SectionComponent>
            </div>
        );
    }
}

export default Content;