import React, {Component} from "react";
import LangContext from "./LangContext";

class ArticleBody extends Component{
  render(){
    //console.log(this.props);
            return (
              <LangContext.Consumer>
              {
               (lang) => {
                return (
                <div className="article__body">
                 <h3 className="article__description">
                  {lang.description}
                 </h3>
                 <p className="article__description--text">
                   {lang.description_text}
                 </p>
                </div>
                )}}
              </LangContext.Consumer>)

          }
  }


export default ArticleBody;