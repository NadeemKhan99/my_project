import React,{ Component } from 'react';
import './name_text.css';

class NamingTeacher extends Component{
    render(){
        return(
            <p className="naming_text">
                {this.props.num}
            </p>
        );
    }
}

export default NamingTeacher;