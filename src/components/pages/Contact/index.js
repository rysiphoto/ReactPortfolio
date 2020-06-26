import React, { Component } from "react";
import axios from 'axios';
import "./style.css";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }
  handleSubmit(e) {
    e.preventDefault();
    axios({
      method: "POST",
      url: "mailto:rcsskier@mac.com",
      data: this.state
    }).then((response) => {
      if (response.data.status === 'success') {
        alert("Message Sent.");
        this.resetForm()
      } else if (response.data.status === 'fail') {
        alert("Message failed to send.")
      }
    })
  }

  resetForm() {

    this.setState({ name: "", email: "", message: "" })
  }
  render() {
    return (
      <div>

        <div className="container" id="portBox">
          <div className="row">
            <div className="col-md-8">
              <h2>Contact Me</h2>
              <ul>
                <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" aria-describedby="emailHelp" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea className="form-control" rows="5"></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                {/* <li><a href="mailto:rcsskier@mac.com?Subject=Hello%20Ryan" target="_top">Email</a></li> */}
                <p></p>
                <li><a href="https://www.linkedin.com/in/ryan-siverson-695b5a32/" target="new">LinkedIn</a></li>

              </ul>
            </div>

          </div>

        </div>

      </div >
    );
  }

  onNameChange(event) {
    this.setState({ name: event.target.value })
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value })
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value })
  }
}

export default Contact;