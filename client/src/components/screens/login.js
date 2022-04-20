import axios from "axios"

const Login = () => {

  const handleSubmit = (e) => {
      e.preventDefault();
      const [username, email, password] = e.target.elements;

      

      console.log({
        username: username.value,
        email: email.value,
        password: password.value
      }, "e")

      axios.post('http://localhost:27657/api/auth/forgotpassword', {email: email.value})
      .then((data) => console.log(data.data, "success"))
    
      // let { username,email,password } = e.target.value
      // console.log({username,email,password},"console");
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" name="username" placeholder="username"/>
        </div>
        <div>
          <input type="email" name="email" placeholder="email"/>
        </div>
        <div>
          <input type="password" name="password" placeholder="password"/>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Login;
