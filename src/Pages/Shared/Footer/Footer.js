import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className=''>
            <footer
                style={{ backgroundImage: `url("https://i.ibb.co/CKVdzS7/dark-skin-leather-texture-background-76539-341.jpg")` }}
                className="p-10">
                <div className='footer text-white'>
                    <div>
                        <span className="footer-title italic">NEWSLATTER</span>
                        <div className='flex'>
                            <input type="text" placeholder="Your email address" className="input input-bordered w-full max-w-xs" />
                            <button className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                    <div>
                        <span className="footer-title">Company</span>
                        <Link to='/' className="link link-hover">Adventure</Link>
                        <Link to='/' className="link link-hover">Mistery</Link>
                        <Link to='/' className="link link-hover">Romance</Link>
                        <Link to='/' className="link link-hover">Young Adult</Link>
                    </div>
                    <div>
                        <span className="footer-title">Legal</span>
                        <Link to='/' className="link link-hover">Terms of use</Link>
                        <Link to='/' className="link link-hover">Privacy policy</Link>
                        <Link to='/' className="link link-hover">Cookie policy</Link>
                    </div>
                </div>
                <div className='text-center mt-32 text-white'>
                    <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
                </div>

            </footer>
        </div>
    );
};

export default Footer;