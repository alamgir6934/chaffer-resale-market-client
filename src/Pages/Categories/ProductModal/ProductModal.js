import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';

const ProductModal = ({ book, setBook, selectedDate, refetch }) => {
    const { title, odprice, rsprice, product, seller, location } = book;
    const date = format(selectedDate, 'PP')
    const { user } = useContext(AuthContext);

    const handleProduct = event => {
        event.preventDefault();
        const form = event.target;
        const pro = form.pro.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value
        // const phone = form.phone.value;

        const booking = {
            OrderDate: date,
            category: title,
            buyerName: name,
            order: pro,
            email,
            phone,
            location,
            odprice,
            rsprice

        }

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setBook(null);
                    toast.success('order confirmed')
                    refetch();
                }
                else {
                    toast.error(data.message);
                }
            })


    }


    return (
        <>
            <input type="checkbox" id="Booking-modal" className="modal-toggle" />
            <div className="modal mx-auto">
                <div className="modal-box relative">
                    <label htmlFor="Booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Book title:{title}</h3>
                    <p><small>Old Price:${odprice}</small></p>
                    <br />
                    <p><small>new Price:${rsprice}</small></p>
                    <form onSubmit={handleProduct} className=' grid grid-cols-1 gap-3 mt-10'>

                        <select name='pro' className="select select-bordered w-full">

                            {
                                product.map((pro, i) => <option
                                    value={pro}
                                    key={i}
                                >{pro}</option>)
                            }
                        </select>
                        <input name='name' type="text" defaultValue={user?.displayName} disabled placeholder="your name" className="input w-full input-bordered" />
                        <input name='email' type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered" />
                        <input name='phone' type="text" placeholder="phone number" className="input w-full input-bordered" />
                        <br />
                        <input className=' btn btn-accent w-full mx-w-xs' type="submit" value='order' />
                    </form>
                </div>
            </div>
        </>
    );
};

export default ProductModal;