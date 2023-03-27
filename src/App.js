import React, {Component} from "react";
import ArticleBody from "./components/ArticleBody";
import ArticleActions from "./components/ArticleActions";
import Article from "./components/Article";
import LangContext from "./components/LangContext"

let EN = {
  title:'NVIDIA NEWS',
  article__title:'NVIDIA Accelerated AI on Azure',
  article__btn:'Read',
  description: 'Article description:',
  description_text: 'NVIDIA on Azure is bringing AI, networking, and high-performance computing to the enterprise.',
  current_lang: 'EN'
}
let UA = {
  title:'НОВИНИ NVIDIA',
  article__title:'Прискорений штучний інтелект NVIDIA в Azure',
  article__btn:'Читати',
  description: 'Опис статті:',
  description_text: 'NVIDIA на Azure надає підприємствам можливості штучного інтелекту, мереж та високопродуктивних обчислень.',
  current_lang: 'UA'
}

let langBtns;
class App extends Component{
  constructor(props){
    super(props)
    const storedLang = localStorage.getItem('lang');
    this.state = {
      lang: storedLang === 'UA' ? UA : EN,
    };
  }

  componentDidMount(){
  langBtns = document.querySelectorAll('.lang-btn');
  langBtns[1].classList.add('active');
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.lang !== this.state.lang){
    langBtns.forEach(btn => btn.classList.remove('active'));
    this.state.lang.current_lang === 'UA' ? langBtns[0].classList.add('active')
                                          : langBtns[1].classList.add('active') 
    }
  } 

  SetLangEN(){
    this.setState({lang: EN});
    localStorage.setItem('lang', 'EN');
  }

  SetLangUA(){
    this.setState({lang: UA});
    localStorage.setItem('lang', 'UA');
  }

  render(){
    return (
      <div className="wrapper">
<LangContext.Provider value={this.state.lang}>

<h1 className="title">{this.state.lang.title}</h1>
  <Article>
  <div className="article__title">
    <h2>NVIDIA Accelerated AI on Azure</h2>
  </div> 
  </Article>
<div className="lang">
  <button onClick={this.SetLangUA.bind(this)} 
  className="lang-btn">UA</button>
  <button onClick={this.SetLangEN.bind(this)}
  className="lang-btn">EN</button>
</div>

</LangContext.Provider>

        
      </div> )}}

export default App;