import React, { useState } from "react";
import { contactState } from "../store/contact";



export const Contact = () => {

    const [reason, setReason] = useState<string>('general');
    const [fName, setFName] = useState<string>('');
    const [lName, setLName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [sent, setSent] = useState<boolean>(false);

    const handleSubmit = async () =>{
        const data = {
            'reason': reason,
            'fName': fName,
            'lName': lName,
            'email': email,
            'phone': phone,
            'message': message
        };
        contactState.ContactSubmit(data)
        .then( (res)=> setSent(true))
        .catch( (error) => console.log(error));
    }

    return (
        <div className="container-fluid contact">
          <div className="row">
              <div className="col-md-6 ">
                    <div className="intro">

                        {sent &&(
                            <>
                            <h2 className="text-center mt-5"> Thank you for your reaching out. I will be in touch shortly!</h2>
                            </>
                        )}
                        {!sent && (
                            <>
                            <h1>Reach out to me!</h1>
                            <hr />
                                <div className="mb-3 form" >
                                    <label>
                                    Reason for reaching out:
                                    <select className="form-select" value={reason} onChange={(e) =>
                                                    setReason(e.target.value)
                                                }>
                                        <option value="general">General Inquiry</option>
                                        <option value="website">Need a website</option>
                                        <option value="code">Request an authorization code</option>
                                        <option value="other">Other</option>
                                    </select>
                                    </label>
                                </div>
                                <div className="mb-3">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label 
                                                className="form-label"
                                            >
                                                First Name
                                            </label>
                                            <input 
                                                type="text"
                                                className="form-control"
                                                id="Fname"
                                                placeholder="Johnny B."
                                                value={fName}
                                                onChange={(e) => setFName(e.target.value)}
                                            ></input>
                                        </div>

                                        <div className="col-md-6">
                                            <label className="form-label">Last Name</label>
                                            <input type="text"
                                                className="form-control"
                                                id="Fname"
                                                placeholder="Goode"
                                                value={lName}
                                                onChange={(e) => setLName(e.target.value)}
                                            ></input>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label className="form-label">Email address</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="email"
                                                placeholder="name@example.com"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            ></input>
                                        </div>

                                        <div className="col-md-6">
                                            <label className="form-label">Phone Number</label>
                                            <input
                                                type="phone"
                                                className="form-control"
                                                id="phone"
                                                placeholder="(123) 456-7890"
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                            ></input>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Message:</label>
                                    <textarea
                                        className="form-control"
                                        id="message"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                    ></textarea>
                                </div>
                                <input type="submit" className="btn btn-primary mb-3" onClick={handleSubmit} />
                            </>
                        )}
                        
                    </div>
              </div>
          </div>
        </div>
    )
};