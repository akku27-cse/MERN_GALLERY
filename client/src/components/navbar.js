import React, { Component } from 'react';
import axios from 'axios';

class AppNavbar extends Component{

    state = {
        length : 0,
    }

    handleUploadFile = e => {

        this.setState({
            length : e.target.files.length
        })

        const data = new FormData();
    
        data.append('file', e.target.files[0]);
        data.append('name', null);
        data.append('description', null);
    
        axios
          .post('http://localhost:8000/api/upload', data)
          .then((res) => {
            console.log(res)
            if(!res.data.success){
                console.log(res)
            }

        window.location.reload()

        });
    }

    render(){
        return(
            <nav className="indigo">
                <div className="nav-wrapper container">
                <a href="/" className="brand-logo">MERN Gallery</a>
                <ul id="nav-mobile" className="right">

                    <input type="file" name="file" id="file" onChange={this.handleUploadFile} 
                     className="inputfile"/>

                    <label htmlFor="file" id="label">
                        {this.state.length > 0 ? ('File uploaded') : ('Choose File')}
                    </label>

                </ul>
                </div>
            </nav>
        )
    }
}

export default AppNavbar;