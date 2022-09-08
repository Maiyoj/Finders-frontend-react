function Footer(){
    return(
        <>

<footer className="p-4 bg-blue-800 rounded-lg shadow md:flex mt-16 h-40 md:items-center md:justify-between md:p-6 dark:bg-gray-800">
    <span className="text-md  text-white sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com/" className="hover:underline">GameFinders</a>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-md text-white dark:text-gray-400 sm:mt-0">
        <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">Home</a>
        </li>
        <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">About</a>
        </li>
        <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">Games</a>
        </li>
        <li>
            <a href="#" className="hover:underline">Contact</a>
        </li>
    </ul>
</footer>

        </>
    )

}
export default Footer