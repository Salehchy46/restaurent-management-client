import axios from 'axios';
import React from 'react';
import Swal from 'sweetalert2';

const ContactUs = () => {

    const handleObjection = e => {
        e.preventDefault();
        const form = new FormData(e.target);
        const initialData = Object.fromEntries(form.entries());
        console.log(initialData);

        axios.post('//contactus', initialData,
            Swal.fire({
                title: "Message is sent successfully",
                icon: "success",
            })
        )
    }

return (
    <div className="card py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-orange-500 text-center mb-10">Contact Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Contact Info */}
            <div className="space-y-6">
                <div>
                    <h4 className="text-xl font-semibold">📍 Address</h4>
                    <p className="">123 Flavor Street, Dhaka, Bangladesh</p>
                </div>
                <div>
                    <h4 className="text-xl font-semibold">📞 Phone</h4>
                    <p className="">+880 1234 567890</p>
                </div>
                <div>
                    <h4 className="text-xl font-semibold">📧 Email</h4>
                    <p className="">support@flavorfusion.com</p>
                </div>
                <div>
                    <h4 className="text-xl font-semibold">🕒 Opening Hours</h4>
                    <p className="">Mon - Sun: 10:00 AM - 10:00 PM</p>
                </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleObjection} className="space-y-4 p-6 rounded-lg shadow-md">
                <input
                    name='name'
                    type="text"
                    placeholder="Your Name"
                    className="w-full border p-3 rounded"
                    required
                />
                <input
                    name='email'
                    type="email"
                    placeholder="Your Email"
                    className="w-full border p-3 rounded"
                    required
                />
                <input
                    name='subject'
                    type="text"
                    placeholder="Subject"
                    className="w-full border p-3 rounded"
                />
                <textarea
                    name='message'
                    rows="5"
                    placeholder="Your Message"
                    className="w-full border p-3 rounded"
                    required
                ></textarea>
                <button
                    type="submit"
                    className="bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600 transition"
                >
                    Send Message
                </button>
            </form>
        </div>
    </div>

);
};

export default ContactUs;