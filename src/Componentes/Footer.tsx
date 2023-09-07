import insta from "../assets/footer/instagram.svg";
import face from "../assets/footer/facebook.svg";
import twitter from "../assets/footer/twitter.svg";

import useSendMessage from "../Hooks/sendEmail";


const Footer = () => {
    
    const {
        aux,
        onSubmit,
        errors,
        register,
        handleSubmit,
      }=useSendMessage();
      console.log(aux);

    return (                                                 
        <div className="flex flex-col pb-10 bg-gradient-to-t from-gray-200 via-transparent to-transparent dark:from-slate-800 dark:via-transparent dark:to-transparent" >
            <div className="container mx-auto max-w-8 footer-fondo" >

                {/* Formulario */}
                <div className="m-10 dark:bg-slate-800 dark:border-slate-800 bg-white p-10 border rounded-2xl">
                    <h1 className="text-center text-2xl md:text-4xl font-medium pb-10">Contact Us</h1>
                    
                
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="col-span-2">
                            <div className="flex gap-4 ">
                                <div className="w-1/2">
                                    <label htmlFor="first-name">First Name</label>
                                    <input type="text" id="first-name" placeholder="Phil" className="w-full border text-sm rounded-md px-2 py-1  text-slate-900" {...register("firstName")} />
                                    <p>{errors.firstName?.message}</p>
                                </div>
                                <div className="w-1/2">
                                    <label htmlFor="last-name">Last Name</label>
                                    <input type="text" id="last-name" placeholder="Collins" className="w-full border text-sm rounded-md px-2 py-1 text-slate-900"  {...register("lastName")} />
                                    <p>{errors.lastName?.message}</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-2">
                            <div className="flex gap-4 ">
                                <div className="w-1/2">
                                    <label htmlFor="from">Email</label>
                                    <input type="email" id="from" placeholder="philcollins@gmail.com" className="w-full text-sm border rounded-md px-2 py-1  text-slate-900" {...register("email")} />
                                    <p className="font-red">{errors.email?.message}</p>
                                </div>
                                <div className="w-1/2">
                                    <label htmlFor="from">Cell Phone</label>
                                    <input type="number" id="from" placeholder="+54 342 5990801" className="w-full text-sm border rounded-md px-2 py-1  text-slate-900"  {...register("phone")} />
                                    <p>{errors.phone?.message}</p>
                                </div>
                            </div>
                            <div className="mt-4">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" placeholder="Message" className="w-full text-sm border rounded-md px-2 py-1 resize-y min-h-[3rem]  text-slate-900"  {...register("message")} />
                                <p>{errors.message?.message}</p>
                            </div>
                        </div>
                    </div>
                

                <div className="flex justify-center mt-8">
                    <button className="bg-[#F53838] border w-1/2 pt-3 pb-3 pl-10 pr-10 rounded-xl text-white font-semibold text-sm boton-fondo2 " type="submit" value="Send">Submit</button>
                </div>
                {aux && <div className="text-center mt-5">Thank for contact us!<h1></h1></div>}
                </form>
                </div>
                
            </div>


            {/*Footer*/}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 pl-10 pr-10">
                <div className="col-span-2  p-4">

                    <div className="flex items-center">
                        <svg width="35" height="37" viewBox="0 0 35 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M31.1473 13.6477L31.1255 13.626C31.1238 13.6247 31.1224 13.6231 31.1215 13.6212L17.5006 0L3.87983 13.6209C3.87826 13.6225 3.8758 13.6256 3.8758 13.6256L3.85333 13.6474C1.77053 15.7419 0.447586 18.4725 0.0948177 21.4052C-0.25795 24.3379 0.379698 27.3044 1.90639 29.8331C3.43309 32.3619 5.76122 34.3077 8.52069 35.3612C11.2802 36.4147 14.3126 36.5157 17.136 35.6477C17.3735 35.5751 17.6275 35.5751 17.8651 35.6477C20.6882 36.5153 23.7205 36.4144 26.4798 35.3607C29.2391 34.307 31.567 32.3613 33.0936 29.8328C34.6202 27.3042 35.2579 24.3379 34.9053 21.4054C34.5526 18.4728 33.2299 15.7422 31.1473 13.6477ZM8.7232 22.6298C8.65689 22.6961 8.6043 22.7749 8.56844 22.8615C8.53257 22.948 8.5141 23.0408 8.51412 23.1346C8.53835 25.5386 9.21776 27.8904 10.4792 29.9371C10.5079 29.9835 10.5211 30.0379 10.517 30.0922C10.513 30.1465 10.4918 30.1982 10.4566 30.2399C10.4213 30.2816 10.3738 30.311 10.3209 30.324C10.2679 30.337 10.2122 30.333 10.1616 30.3124C9.21332 29.9135 8.35182 29.3336 7.62531 28.6053C6.13646 27.1162 5.29946 25.097 5.2981 22.9912C5.29675 20.8855 6.13117 18.8652 7.61812 17.3743L17.5006 7.49273L27.3826 17.3743C28.8698 18.865 29.7045 20.8853 29.703 22.9912C29.7018 25.097 28.8647 27.1162 27.3757 28.6053C26.6492 29.3336 25.7877 29.9135 24.8396 30.3124C24.7889 30.333 24.7332 30.337 24.6802 30.324C24.6273 30.311 24.5798 30.2814 24.5445 30.2399C24.5093 30.1982 24.488 30.1465 24.484 30.092C24.4799 30.0377 24.4931 29.9833 24.5218 29.9369C25.7835 27.8904 26.4633 25.5386 26.4879 23.1346C26.4879 23.0408 26.4692 22.948 26.4332 22.8613C26.3971 22.7746 26.3444 22.696 26.2779 22.6296L21.6037 17.6717C21.5571 17.6329 21.4985 17.6116 21.4378 17.6116C21.3773 17.6116 21.3186 17.6329 21.2721 17.6717C21.2255 17.7104 21.1942 17.7644 21.1833 17.824C21.1724 17.8837 21.1828 17.945 21.2127 17.9978C23.0281 21.283 21.467 26.0017 18.8637 28.6053L18.85 28.6191C18.4907 28.9745 18.0056 29.1738 17.5002 29.1736C16.9948 29.1734 16.5098 28.9738 16.1508 28.6182L16.1382 28.6053C13.5339 26.0017 11.9736 21.2835 13.7893 17.9985C13.8192 17.9457 13.8296 17.8844 13.8187 17.8247C13.8079 17.7651 13.7764 17.7111 13.7299 17.6724C13.6834 17.6336 13.6247 17.6123 13.5642 17.6123C13.5036 17.6123 13.4449 17.6336 13.3984 17.6724L8.7232 22.6298Z" fill="#F53838" />
                        </svg>
                        <h2 className="dark:text-white text-black font-semibold text-xl ml-2">Lasles<span className="font-bold">VPN</span></h2>
                    </div>

                    <p className="dark:text-slate-400 mt-5 text-[#4F5665] text-base">
                        SmartVPN is a private virtual network that
                        has unique features and has high security.
                    </p>
                    <div className="flex mt-5">
                        <img src={face} alt="" />

                        <img src={twitter} alt="" />

                        <img src={insta} alt="" />

                    </div>
                    <p className="text-sm text-slate-500">©Waldemar Galizzi</p>


                </div>

                <div className="col-span-1 p-4">
                    <h5 className="text-xl font-semibold">Product</h5>
                    <ul className="dark:text-slate-400 text-base text-[#4F5665] mt-5">
                        <li className="mb-2">Download</li>
                        <li className="mb-2">Pricing</li>
                        <li className="mb-2">Location</li>
                        <li className="mb-2">Server</li>
                        <li className="mb-2">Countries</li>
                        <li className="mb-2">Blog</li>
                    </ul>
                </div>
                <div className="col-span-1 p-4">
                    <h5 className="text-xl font-semibold">Engage</h5>
                    <ul className="dark:text-slate-400 text-base text-[#4F5665] mt-5">
                        <li className="mb-2">SmartVPN?</li>
                        <li className="mb-2">FAQ</li>
                        <li className="mb-2">Tutorials</li>
                        <li className="mb-2">About Us</li>
                        <li className="mb-2">Privacy Policy</li>
                        <li className="mb-2">Terms of Service</li>
                    </ul>
                </div>
                <div className="col-span-1 p-4">
                    <h5 className="text-xl font-semibold">Ear money</h5>

                    <ul className="dark:text-slate-400 text-base text-[#4F5665] mt-5">
                        <li className="mb-2">Afiliate</li>
                        <li className="mb-2">Become Partner</li>
                    </ul>
                </div>



            </div>

        </div>
        

    )
}
export default Footer;