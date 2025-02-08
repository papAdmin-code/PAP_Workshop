import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddtoCart = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        country: 'United States',
        city: 'Chennai',
        productName: '',
        phone: '',
      });
      const[loading, setLoading] = useState(false);
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post('http://127.0.0.1:5000/add-to-cart', formData);
            console.log('Item added');
        } catch (error) {
            console.error('Error adding to cart:', error.response?.data?.error || error.message);
        }
        alert("Purchased Successfully!");
        console.log(formData);
        setLoading(false);
        navigate("/login");
      };
  return (
    <div>
    <section class="bg-white py-8 antialiased md:py-16">
        <form onSubmit={handleSubmit} class="mx-auto max-w-screen-xl px-4 2xl:px-0">
            <ol class="items-center flex w-full max-w-2xl text-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:text-base">
            <li class="after:border-1 flex items-center text-primary-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-primary-500 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
                <span class="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden">
                <svg class="me-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                Cart
                </span>
            </li>

            <li class="after:border-1 flex items-center text-primary-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-primary-500 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
                <span class="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden">
                <svg class="me-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                Checkout
                </span>
            </li>

            <li class="flex shrink-0 items-center">
                <svg class="me-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                Order summary
            </li>
            </ol>

            <div class="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12 xl:gap-16">
            <div class="min-w-0 flex-1 space-y-8">
                <div class="space-y-4">
                <h2 class="text-xl font-semibold text-gray-900 dark:text-white">Payment Details</h2>

                 <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Name</label>
                            <input 
                                type="text" 
                                name="name" 
                                value={formData.name} 
                                onChange={handleChange} 
                                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" 
                                placeholder="Enter your name" 
                                required 
                            />
                        </div>
                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Email Address</label>
                            <input 
                                type="email" 
                                name="email" 
                                value={formData.email} 
                                onChange={handleChange} 
                                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" 
                                placeholder="name@gmail.com" 
                                required 
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Country</label>
                            <select 
                                name="country" 
                                value={formData.country} 
                                onChange={handleChange} 
                                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                            >
                                <option value="United States">United States</option>
                                <option value="Australia">Australia</option>
                                <option value="India">India</option>
                                <option value="United Kingdom">United Kingdom</option>
                            </select>
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">City</label>
                            <select 
                                name="city" 
                                value={formData.city} 
                                onChange={handleChange} 
                                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                            >
                                <option value="Chennai">Chennai</option>
                                <option value="Coimbatore">Coimbatore</option>
                                <option value="Salem">Salem</option>
                            </select>
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Product Name</label>
                            <input 
                                type="text" 
                                name="productName" 
                                value={formData.productName} 
                                onChange={handleChange} 
                                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" 
                                placeholder="Enter Product Name" 
                                required 
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
                            <input 
                                type="text" 
                                name="phone" 
                                value={formData.phone} 
                                onChange={handleChange} 
                                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" 
                                placeholder="99xxx xxx00" 
                                required 
                            />
                        </div>
                    </div>

                </div>

            <div class="mt-6 w-full space-y-6 sm:mt-8 lg:mt-0 lg:max-w-xs xl:max-w-md">
                <div class="flow-root">
                <h2 class="font-extrabold text-1xl">Checkout Section</h2>
                <div class="-my-3 divide-y divide-gray-200 dark:divide-gray-800">
                    <dl class="flex items-center justify-between gap-4 py-3">
                    <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Total</dt>
                    <dd class="text-base font-medium text-gray-900 dark:text-white">₹800</dd>
                    </dl>

                    <dl class="flex items-center justify-between gap-4 py-3">
                    <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Discount</dt>
                    <dd class="text-base font-medium text-green-500">₹10</dd>
                    </dl>

                    <dl class="flex items-center justify-between gap-4 py-3">
                    <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Tax/GST</dt>
                    <dd class="text-base font-medium text-gray-900 dark:text-white">₹10</dd>
                    </dl>

                    <dl class="flex items-center justify-between gap-4 py-3">
                    <dt class="text-base font-bold text-gray-900 dark:text-white">Total</dt>
                    <dd class="text-base font-bold text-gray-900 dark:text-white">₹800</dd>
                    </dl>
                </div>
                </div>

                <div class="space-y-3">
                <button type="submit" disabled = {loading} class="flex w-full items-center justify-center rounded-4xl bg-blue-300 px-5 py-2.5 text-sm font-medium text-black hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300">
                    
                {loading ? (
                    <>
                        <svg
                            aria-hidden="true"
                            className="mr-2 h-5 w-5 animate-spin text-white"
                            viewBox="0 0 100 101"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M50 10a40 40 0 1 1-40 40"
                                stroke="currentColor"
                                strokeWidth="10"
                            ></path>
                        </svg>
                        Processing...
                    </>
                ) : (
                    'Proceed to Payment'
                )}
                </button>
                </div>
            </div>
            </div>
            </div>
        </form>
        </section>
      </div>
  )
}

export default AddtoCart
