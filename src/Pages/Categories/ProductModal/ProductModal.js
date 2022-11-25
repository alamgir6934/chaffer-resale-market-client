import React from 'react';

const ProductModal = ({ book }) => {
    const { title, odprice, rsprice, product } = book;
    return (
        <>
            <input type="checkbox" id="Booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="Booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Book title:{title}</h3>
                    <p><small>Old Price:${odprice}</small></p>
                    <br />
                    <p><small>new Price:${rsprice}</small></p>
                    <form className=' grid grid-cols-1 gap-3 mt-10'>

                        <select name='pro' className="select select-bordered w-full">

                            {
                                product.map((pro, i) => <option
                                    value={pro}
                                    key={i}
                                >{pro}</option>)
                            }
                        </select>
                        <input name='name' type="text" disabled placeholder="your name" className="input w-full input-bordered" />
                        <input name='email' type="email" disabled placeholder="Email Address" className="input w-full input-bordered" />
                        <input name='phone' type="text" placeholder="phone number" className="input w-full input-bordered" />
                        <br />
                        <input className=' btn btn-accent w-full mx-w-xs' type="submit" value='Submit' />
                    </form>
                </div>
            </div>
        </>
    );
};

export default ProductModal;