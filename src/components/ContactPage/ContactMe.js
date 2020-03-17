import React, { Component } from 'react'; 
import Axios from 'axios'; 
import './Contact.css'; 

export default class ContactMe extends Component {

    state =  {
            name: "", 
            email: "", 
            message: "", 
            disabled: false, 
            emailSent: null,
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }


    handleSubmit = (event) => {
        event.preventDefault();

        console.log(event.target);

        this.setState({
            disabled: true
        });



        Axios.post('https://miwha-geschwind-portfolio.herokuapp.com/emails', this.state)
            .then(res => {
                if(res.data.success) {
                    this.setState({
                        disabled: false,
                        emailSent: true
                    });
                } else {
                    this.setState({
                        disabled: false,
                        emailSent: false
                    });
                }
            })
            .catch(err => {
                console.log(err);

                this.setState({
                    disabled: false,
                    emailSent: false
                });
            })

    }

    render() {
        return (
            <div className="ContactMe-container">
                <form onSubmit={this.handleSubmit} className="ContactMe-form">
                    <input 
                        className="ContactMe-form-input" 
                        name="name" 
                        type ="text"
                        placeholder="Full Name" 
                        value={this.state.name}
                        onChange={this.handleChange}>
                            
                     </input>

                    <input 
                        className="ContactMe-form-input"  
                        name="email" 
                        type ="email"
                        placeholder="Your Email Address"
                        value={this.state.email}
                        onChange={this.handleChange}> 
                    </input>

                    <textarea 
                        className="ContactMe-form-message" 
                        rows="2" 
                        cols="20" 
                        name="message" 
                        type ="text"
                        wrap="hard" 
                        placeholder="Write Your Message Here"
                        value={this.state.message}
                        onChange={this.handleChange}> 
                    </textarea>

                    <button 
                        className="ContactMe-form-submit" 
                        type="submit" 
                        disabled={this.state.disabled}
                        value="Send">
                            Send
                    </button>


                    {this.state.emailSent === true && <p className="ContactMe-form-success-message">Email Sent</p>}
                    {this.state.emailSent === false && <p className="ContactMe-form-failure-message">Email Not Sent</p>}

                </form>

                <div className="ContactMe-color">
                <h1 className="ContactMe-greeting">Nice to Meet You.</h1> 
                </div>
            </div>
        )
    }
}
