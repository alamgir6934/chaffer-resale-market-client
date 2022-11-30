import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import Loading from '../../../Shared/Loading/Loading';


const Addproduct = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbb_key
    const { data: products, isLoading } = useQuery({
        queryKey: ['product'],
        queryFn: async () => {
            const res = await fetch('https://chaffer-resale-server.vercel.app/productSpecialty');
            const data = await res.json();
            return data;
        }
    })

    const handleAddProduct = data => {
        //console.log(data.image[0])
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })

            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData);
                    const saller = {
                        title: data.title,
                        email: data.email,
                        product: data.product,
                        location: data.location,
                        condition: data.condition,
                        price: data.price,
                        year: data.year,
                        image: imgData.data.url
                    }
                    //save doctor information to the data base
                    fetch('https://chaffer-resale-server.vercel.app/newProducts', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(saller)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success(`${data.title} is added successfully`);
                            // navigate('/dashboard/managedoctors')
                        })
                }
            })


    }
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='w-96 p-7'>
            <h2 className="text-4xl">Add a product</h2>
            <form onSubmit={handleSubmit(handleAddProduct)}>

                <div>

                    <select {...register("condition")} className="select w-full max-w-xs">
                        <option disabled selected>select your product condition</option>
                        <option>Excellent</option>
                        <option>Good</option>
                        <option>Fair</option>

                    </select>
                </div>
                <div>

                    <select {...register("location")} className="select w-full max-w-xs">
                        <option disabled selected>select your location</option>
                        <option>Dhaka</option>
                        <option>chittagong</option>

                    </select>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Product Name</span>
                    </label>
                    <input type="text" {...register("title", { required: "Name is required" })} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">price</span>
                    </label>
                    <input type="text" {...register("price", { required: "Name is required" })} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="text" {...register("email", { required: "Email Address is required" })} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Category</span></label>
                    <select {...register('product')}

                        className="select input-bordered w-full max-w-xs text-black">

                        {
                            products?.map(product => <option
                                key={product._id}
                                value={product.title}

                            >{product.title}</option>)
                        }



                    </select>

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Year of purches</span>
                    </label>
                    <input type="text" {...register("year", { required: "Name is required" })} placeholder="Type here" className="input input-bordered w-full max-w-xs" />

                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input type="file" {...register("image", { required: "photo is required" })} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    {errors.image && <p className='text-red-600'>{errors.image?.message}</p>}
                </div>
                <input className='btn btn-accent w-full' value='Add Doctor' type="submit" />
                {/* {signUpError && <p className='text-red-600'>{signUpError}</p>} */}


            </form>
        </div>
    );
};

export default Addproduct;