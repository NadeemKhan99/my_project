import React,{ Component } from 'react';
import './card_color.css';

class CardColor extends Component{
    render(){
        return(
            <div className="color_card">
                {this.props.text_up}
                
            </div>
        );
    }
} 

export default CardColor;