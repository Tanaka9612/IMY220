import React from "react";

class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          username: "",
          password: "",
        };
      }
    
      handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
      };
    
      handleSubmit = (e) => {
        e.preventDefault();
        
        const { username, password } = this.state;
    
        // Simulate a login process (In a real app, validate the user with an API)
        if (username === "user" && password === "password") {
          this.props.onLoginSuccess();
        } else {
          alert("Invalid login credentials"); 
        }
      };

    render(){
        return(
            <div className="form">
                 <form method="POST" onSubmit={this.handleSubmit}>
          <label>Username</label><br/>
          <input 
            type="text" 
            name="username" 
            value={this.state.username} 
            onChange={this.handleChange} 
          /><br/>
          
          <label>Password</label><br/>
          <input 
            type="password" 
            name="password" 
            value={this.state.password} 
            onChange={this.handleChange} 
          /><br/>

          <button type="submit">Login</button><br/>
        </form>
            </div>
            
        )
    }
}

export default Login;