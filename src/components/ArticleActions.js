import React, {Children, Component} from "react";
import LangContext from "./LangContext";

class ArticleActions extends Component{

  render(){
    return (
      <LangContext.Consumer>
        {lang => (
          <div className="article__actions">
            <button className="article__btn">{lang.article__btn}</button>
          </div>
        )}
      </LangContext.Consumer>
      // <div className="article__actions">
      //   <button className="article__btn">Read</button>
      //   {/* <button className="article__btn">{this.props.lang.article__btn}</button> */}
      // </div>
    );
  }
}

export default ArticleActions;

