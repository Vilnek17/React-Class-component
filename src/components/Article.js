import React, {Component} from "react";
import ArticleActions from "./ArticleActions";
import ArticleBody from "./ArticleBody";
import LangContext from "./LangContext";

class Article extends Component {

    render (){
      
        return (
            <LangContext.Consumer>
        {lang => (
          <div className="article">
            <div className="article__title">
              <h2>{lang.article__title}</h2>
            </div>
            <ArticleBody />
            <ArticleActions />
          </div>
        )}
      </LangContext.Consumer>
            );
    }
}
export default Article;


