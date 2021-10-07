import React from "react";

function Contact() {

    return(
        <section>
            <div>
                <header className="comp-header">
                    <h1>Contact</h1>
                    <div className='ContactForm'>
                        <div className='container'>
                            <div className='row'>
                            <div className='col-12 text-center'>
                                <div className='contactForm'>
                                <form id='contact-form' noValidate>
                                    {/* Row 1 of form */}
                                    <div className='row formRow'>
                                    <div className='col-6'>
                                        <input
                                        type='text'
                                        name='name'
                                        className='form-control formInput'
                                        placeholder='Name'
                                        ></input>
                                    </div>
                                    <div className='col-6'>
                                        <input
                                        type='email'
                                        name='email'
                                        className='form-control formInput'
                                        placeholder='Email address'
                                        ></input>
                                    </div>
                                    </div>
                                    {/* Row 2 of form */}
                                    <div className='row formRow'>
                                    <div className='col'>
                                        <input
                                        type='text'
                                        name='subject'
                                        className='form-control formInput'
                                        placeholder='Subject'
                                        ></input>
                                    </div>
                                    </div>
                                    {/* Row 3 of form */}
                                    <div className='row formRow'>
                                    <div className='col'>
                                        <textarea
                                        rows={3}
                                        name='message'
                                        className='form-control formInput'
                                        placeholder='Message'
                                        ></textarea>
                                    </div>
                                    </div>
                                    <button className='submit-btn' type='submit'>
                                    Submit
                                    </button>
                                </form>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </section>
    )
};

export default Contact;