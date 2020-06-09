import React, { Component } from 'react';
import CardColor from './card_color';
import NamingTeacher from './name_text';
import './HelloWorld.css';

//-------------class square----------

class HelloWorld extends Component{
    render()
    {
        return(

            <div>
                <ul className="list_card">
                    <li className="box">
                       <CardColor {...this.props}/>
                       <NamingTeacher num={this.props.teacher_aamir}/>
                    </li>
                    <li className="box"> 
                       <CardColor {...this.props}/>
                       <NamingTeacher num={this.props.teacher_mohsin}/>
                    </li>
                    <li className="box"> 
                       <CardColor {...this.props}/>
                       <NamingTeacher num={this.props.teacher_bashir}/>
                    </li>
                    <li className="box"> 
                       <CardColor {...this.props}/>
                       <NamingTeacher num={this.props.teacher_ameen}/>
                    </li>
                </ul>

                {/* THIS IS INSIDE THE PARENT COMPONENT COMMENT */}
                <br/>
                <h3>Assignment from Nadeem Khan</h3>

                
            </div>
            
            
        );
    }
    
    
}

export default HelloWorld;