import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../../Shared/ConfirmationModal/ConfirmationModal';
import Loading from '../../../Shared/Loading/Loading';

const ManageProducts = () => {
    const [deletingProduct, setDeletingProduct] = useState(null);

    const closeModal = () => {
        setDeletingProduct(null);
    }



    const { data: saller, isLoading, refetch } = useQuery({

        queryKey: ['saller'],
        queryFn: async () => {
            try {
                const res = await fetch('https://chaffer-resale-server.vercel.app/newProducts', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`

                    }
                })
                const data = await res.json();
                console.log(data)
                return data;
            }
            catch (error) {

            }
        }
    })

    console.log(saller)

    const handleDeleteProduct = sell => {
        fetch(`https://chaffer-resale-server.vercel.app/newProducts/${sell._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`saller ${sell.title} deleted successfully`)
                }

            })
    }
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className="text-3xl">manage Saller:{saller?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>product</th>
                            <th>Location</th>
                            <th>Condition</th>
                            <th>price</th>
                            <th>year</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            saller?.map((sell, i) => <tr key={sell._id}>
                                <th>{i + 1}</th>
                                <td><div className="avatar">
                                    <div className="w-24 rounded-full">
                                        <img src={sell.image} alt='' />
                                    </div>
                                </div></td>
                                <td>{sell.title}</td>
                                <td>{sell.email}</td>
                                <td>{sell.product}</td>
                                <td>{sell.location}</td>
                                <td>{sell.condition}</td>
                                <td>{sell.price}</td>
                                <td>{sell.year}</td>
                                <td>
                                    <label onClick={() => setDeletingProduct(sell)} htmlFor="confirmation-modal" className="btn  btn-sm btn-error">Delete</label>

                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
            {
                deletingProduct && <ConfirmationModal
                    name={`Are you sure want to delete`}
                    message={`If you delete ${deletingProduct.title}.It connot be undone`}
                    successAction={handleDeleteProduct}
                    successButtonName='Delete'
                    modalData={deletingProduct}
                    closeModal={closeModal}

                >

                </ConfirmationModal>
            }
        </div>
    );
};

export default ManageProducts;