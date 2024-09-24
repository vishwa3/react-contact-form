import "./App.css";

function App() {
  return (
    <form
      action="https://www.greatfrontend.com/api/questions/contact-form"
      method="post"
      className="form"
    >
      <div className="field">
        <label for="name">Name</label>
        <input type="text" name="name" required />
      </div>
      <div className="field">
        <label for="name">Email</label>
        <input type="email" name="email" required />
      </div>
      <div className="field">
        <label for="message">Message</label>
        <textarea name="message" rows="3"></textarea>
      </div>
      <input type="submit" value="Send" />
    </form>
  );
}

export default App;
