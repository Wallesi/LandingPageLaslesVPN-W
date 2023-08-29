
import { useState } from "react";


const NavBar = () => {
    const [menu, setMenu] = useState(false);

    const ocultarMenu = () => {
        setMenu(!menu)
    }
    return (
        <div className="container mx-auto max-w pt-2">
            <nav className="p-4 flex flex-col md:flex-row items-center justify-between">
                <div className="flex justify-between item center w-full md:w-auto pl-3 pr-3">
                    <div className="flex items-center">
                        <svg width="35" height="37" viewBox="0 0 35 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M31.1473 13.6477L31.1255 13.626C31.1238 13.6247 31.1224 13.6231 31.1215 13.6212L17.5006 0L3.87983 13.6209C3.87826 13.6225 3.8758 13.6256 3.8758 13.6256L3.85333 13.6474C1.77053 15.7419 0.447586 18.4725 0.0948177 21.4052C-0.25795 24.3379 0.379698 27.3044 1.90639 29.8331C3.43309 32.3619 5.76122 34.3077 8.52069 35.3612C11.2802 36.4147 14.3126 36.5157 17.136 35.6477C17.3735 35.5751 17.6275 35.5751 17.8651 35.6477C20.6882 36.5153 23.7205 36.4144 26.4798 35.3607C29.2391 34.307 31.567 32.3613 33.0936 29.8328C34.6202 27.3042 35.2579 24.3379 34.9053 21.4054C34.5526 18.4728 33.2299 15.7422 31.1473 13.6477ZM8.7232 22.6298C8.65689 22.6961 8.6043 22.7749 8.56844 22.8615C8.53257 22.948 8.5141 23.0408 8.51412 23.1346C8.53835 25.5386 9.21776 27.8904 10.4792 29.9371C10.5079 29.9835 10.5211 30.0379 10.517 30.0922C10.513 30.1465 10.4918 30.1982 10.4566 30.2399C10.4213 30.2816 10.3738 30.311 10.3209 30.324C10.2679 30.337 10.2122 30.333 10.1616 30.3124C9.21332 29.9135 8.35182 29.3336 7.62531 28.6053C6.13646 27.1162 5.29946 25.097 5.2981 22.9912C5.29675 20.8855 6.13117 18.8652 7.61812 17.3743L17.5006 7.49273L27.3826 17.3743C28.8698 18.865 29.7045 20.8853 29.703 22.9912C29.7018 25.097 28.8647 27.1162 27.3757 28.6053C26.6492 29.3336 25.7877 29.9135 24.8396 30.3124C24.7889 30.333 24.7332 30.337 24.6802 30.324C24.6273 30.311 24.5798 30.2814 24.5445 30.2399C24.5093 30.1982 24.488 30.1465 24.484 30.092C24.4799 30.0377 24.4931 29.9833 24.5218 29.9369C25.7835 27.8904 26.4633 25.5386 26.4879 23.1346C26.4879 23.0408 26.4692 22.948 26.4332 22.8613C26.3971 22.7746 26.3444 22.696 26.2779 22.6296L21.6037 17.6717C21.5571 17.6329 21.4985 17.6116 21.4378 17.6116C21.3773 17.6116 21.3186 17.6329 21.2721 17.6717C21.2255 17.7104 21.1942 17.7644 21.1833 17.824C21.1724 17.8837 21.1828 17.945 21.2127 17.9978C23.0281 21.283 21.467 26.0017 18.8637 28.6053L18.85 28.6191C18.4907 28.9745 18.0056 29.1738 17.5002 29.1736C16.9948 29.1734 16.5098 28.9738 16.1508 28.6182L16.1382 28.6053C13.5339 26.0017 11.9736 21.2835 13.7893 17.9985C13.8192 17.9457 13.8296 17.8844 13.8187 17.8247C13.8079 17.7651 13.7764 17.7111 13.7299 17.6724C13.6834 17.6336 13.6247 17.6123 13.5642 17.6123C13.5036 17.6123 13.4449 17.6336 13.3984 17.6724L8.7232 22.6298Z" fill="#F53838" />
                        </svg>
                        <h2 className=" text-xl ml-2 font-bold">
                            Lasles<span className="font-extrabold">VPN</span>
                        </h2>
                    </div>

                    <div className="flex items-center">
                        <span onClick={ocultarMenu} className="md:hidden ">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAExJREFUSEtjZKAxYKSx+QyjFhAM4QEJov8EnYVfAYqjsfmA5hZQ6AFU7QMSBzT3Ac3jgOYW0DyIhr4FNI8Dmlsw9ONg1AcoIUDz0hQAbegGGXzv/l0AAAAASUVORK5CYII="/>
                        </span>
                    </div>
                </div>

                <ul className={`flex ${menu ? "block" : "hidden"} md:flex flex-col md:flex-row items-center space-x-0 md:space-x-4 space-y-2 md:space-y-0 text-[#4F5665] mb-2 `}>
                    <li className="text-base cursor-pointer md:last-child:mb-0">About</li>
                    <li className="text-base cursor-pointer md:last-child:mb-0">Features</li>
                    <li className="text-base cursor-pointer md:last-child:mb-0">Pricing</li>
                    <li className="text-base cursor-pointer md:last-child:mb-0">Testimonials</li>
                    <li className="text-base cursor-pointer md:last-child:mb-0">Help</li>
                </ul>

                <div className={`flex ${menu ? "block" : "hidden"} md:flex flex-col md:flex-row items-center space-x-0 md:space-x-4 space-y-2 md:space-y-0 `}>
                    <a href="" className="text-base font-semibold">Sign In</a>
                    <button className="text-base button-color-basic font-semibold border border-[#F53855] px-4 py-2 rounded-full cursor-pointer pl-5 pr-5 hover-[#F53855] boton-fondo">
                        Sign Up
                    </button>
                </div>
            </nav>
        </div>
    );
}
export default NavBar;


