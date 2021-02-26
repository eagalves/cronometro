import React, {Component} from 'react';
import cronometro from './assets/cronometro.png'
import estilo from './estilo.css'

class App extends Component{

constructor(props){
  super(props);
  this.state = {
    numero: 0,
    botao: 'VAI'
     }
      this.timer = null;
      this.BotaoLimpar = this.BotaoLimpar.bind(this);
      this.BotaoVai = this.BotaoVai.bind(this);
  }

   BotaoVai(){
    let state = this.state
    if(this.timer !== null){
      clearInterval(this.timer);
      this.timer = null;
      state.botao = 'VAI';
    }else{
      this.timer = setInterval(()=>{
        state.numero += 0.1;
        state.botao = 'PAUSA'
        this.setState(state);
      
      },100);
   
    } 
    this.setState(state)
  }
   BotaoLimpar(){
      clearInterval(this.timer);
      this.timer = null;
      this.setState({numero: 0})
   }
    render(){
      return(
        <div className = 'container' > 
          <img src={cronometro} className='IMG_cronometro'></img>
          <a className="timer">{this.state.numero.toFixed(1)}</a>
          <div className="areaBtn">
           <a className="botao" onClick={this.BotaoVai}>{this.state.botao}</a>
           <a className="botao" onClick={this.BotaoLimpar}>LIMPAR</a>
         </div>
        </div>
      )
    }
    
}

export default App;