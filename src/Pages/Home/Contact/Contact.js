import React from 'react';

const Contact = () => {
    return (
        <section
            className='mt-32'

            style={{ backgroundImage: `url("https://i.ibb.co/vBrYgkg/appointment.png")` }}

        >
            <form>
                <h2 className="text-xl text-center">Contact us</h2>
                <h4 className="text-4xl text-center">Stay connected with us</h4>
                <div className='grid grid-cols-1 lg:grid-cols-1 gap-4 w-1/2 mx-auto py-12'>
                    <input name='email' type="text" placeholder="Your email" className="input input-bordered w-full" readOnly />
                    <input name='firstName' type="text" placeholder="First Name" className="input input-bordered w-full" />
                    <textarea name='message' className="textarea textarea-bordered h-24" placeholder="Your message" required></textarea>
                    <input className='btn mx-auto' type='submit' value='place your message'></input>

                </div>

            </form>
        </section>
    );
};

export default Contact;