'use client';
import { useState } from 'react';
import { Icon } from "@iconify/react/dist/iconify.js";

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const data = { name, email, subject, message };

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                alert('Email sent successfully!');
            } else {
                alert('Failed to send email. Please try again later.');
            }
        } catch (error) {
            console.error('Error sending email:', error);
            alert('An error occurred while sending the email.');
        } finally {
            setLoading(false);
            setName('');
            setEmail('');
            setSubject('');
            setMessage('');
        }
    };

    return (
        <div id='contact-section' className="w-screen relative bg-transparent overflow-hidden">
            <div data-aos="zoom-in" data-aos-duration="1000" data-aos-easing="ease-in-out" className="relative w-full min-h-[70vh] z-20 flex flex-col items-center justify-start">
                <div className="w-full px-6 py-2 font-bold md:mt-[15vh] text-center uppercase overflow-hidden max-md:mt-2">
                    <div className="relative dark:text-white text-[8vh] text-center z-40 max-md:text-[2rem]">
                        get in touch - let's work together - contact me
                    </div>
                </div>

                <div className="w-full flex max-md:flex-col md:flex-row justify-between px-8 py-10">
                    {/* Contact Form */}
                    <div className="md:w-1/2 max-md:w-full max-md:mb-10">
                        <h2 className="dark:text-white text-4xl max-md:text-3xl uppercase mb-6">Send Me a Message</h2>
                        <form className="w-full" onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full bg-transparent border-2 dark:border-white dark:text-white py-3 px-4 ibm-plex-mono-regular focus:outline-none focus:border-[#F89245]"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full bg-transparent border-2 dark:border-white dark:text-white py-3 px-4 ibm-plex-mono-regular focus:outline-none focus:border-[#F89245]"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    placeholder="Subject"
                                    className="w-full bg-transparent border-2 dark:border-white dark:text-white py-3 px-4 ibm-plex-mono-regular focus:outline-none focus:border-[#F89245]"
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <textarea
                                    placeholder="Your Message"
                                    rows={5}
                                    className="w-full bg-transparent border-2 dark:border-white dark:text-white py-3 px-4 ibm-plex-mono-regular focus:outline-none focus:border-[#F89245]"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                ></textarea>
                            </div>
                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    className="bg-white dark:text-[#1E1E1E] text-white py-3 px-8 text-xl font-bold rounded-full animate-pulse hover:animate-none transition-all duration-300 ease-in-out hover:scale-105"
                                    disabled={loading}
                                >
                                    {loading ? 'Sending...' : 'SUBMIT'}
                                </button>
                            </div>
                        </form>
                    </div>
                     {/* Contact Information */}
                     <div className="md:w-2/5 max-md:w-full dark:text-white">
                        <h2 className="dark:text-white text-4xl max-md:text-3xl uppercase mb-6">Contact Info</h2>

                        <div className="mb-8">
                            <div className="flex items-center mb-3">
                                <Icon icon="mdi:email" className="text-3xl mr-4 dark:text-white" />
                                <p className="ibm-plex-mono-regular text-xl">pantudit007@gmail.com</p>
                            </div>
                            <div className="flex items-center mb-3">
                                <Icon icon="mdi:phone" className="text-3xl mr-4 dark:text-white" />
                                <p className="ibm-plex-mono-regular text-xl">+91 76781 34962</p>
                            </div>
                            <div className="flex items-center">
                                <Icon icon="mdi:map-marker" className="text-3xl mr-4 dark:text-white" />
                                <p className="ibm-plex-mono-regular text-xl">Delhi, India</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-between">
                            <h3 className="dark:text-white text-2xl ibm-plex-mono-regular uppercase mb-4">Connect With Me</h3>
                            <div className="flex space-x-4">
                                <a href="https://github.com/Uscout07" className="dark:text-white hover:text-[#F89245] transition-colors">
                                    <Icon icon="mdi:github" className="text-4xl" />
                                </a>
                                <a href="https://www.linkedin.com/in/udit-pant-20869318b/" className="dark:text-white hover:text-[#F89245] transition-colors">
                                    <Icon icon="mdi:linkedin" className="text-4xl" />
                                </a>
                                <a href="https://www.instagram.com/pantudit007/" className="dark:text-white hover:text-[#F89245] transition-colors">
                                    <Icon icon="mdi:instagram" className="text-4xl" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full px-8 py-6 mt-6 border-t dark:border-white/20 dark:text-white flex max-md:flex-col md:flex-row justify-between items-center">
                    <p className="ibm-plex-mono-regular">© 2025 Udit Pant. All Rights Reserved.</p>
                    <p className="ibm-plex-mono-regular max-md:mt-4">PARIKALPANA IO</p>
                </div>
            </div>
        </div>
    )
}
