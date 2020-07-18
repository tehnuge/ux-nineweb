import React, { useState, useEffect } from 'react';



const Contact = props => {
  async function postData(event, data = { email, name, phone, info }) {
    // Default options are marked with *
    console.log('e',data)
    const response = await fetch('/server', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error 
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    }).then(response => {
      console.log("eyh",submitted)
      if (!response.ok) {
        throw new Error("Network response not ok")
      }
      setSubmitted(true)
      return response

    }).then(res => res.json())
      .catch(err =>
        setError(err));

    return response; // parses JSON response into native JavaScript objects
  }

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [info, setInfo] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');


  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    switch (name) {
      case "email":
        setEmail(value)
        break;
      case "name":
        setName(value);
        break;
      case "phone":
        setPhone(value);
        break;
      case "info":
        setInfo(value);
        break;
      default:
        break;
    }
  }


  return (
    <div className="d-flex justify-content-center">
      {submitted ? <h2>Thank you.</h2> :
        <form>
          <h2>
            Learn More
          </h2>
          <div className="form-group">
            <label>
              Email
            </label>
            <input type="text" className="form-control" name="email" onChange={handleChange} />
          </div>
          <label>
            Name
          </label>
          <input type="text" className="form-control" name="name" onChange={handleChange} />
          <label>
            Phone number
          </label>
          <input type="tel" className="form-control" maxLength='10' name="phone" onChange={handleChange}></input>
          <h2>Optional</h2>
          <div>
            Please let us know why you're interested or any other information you'd like us to know
        <div>
              <textarea name='info' onChange={handleChange} />
            </div>
          </div>
          <input type="button" value="Submit" onClick={postData} />
        </form>
      }



    </div>
  )
}

export default Contact;