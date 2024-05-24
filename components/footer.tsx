import Image from 'next/image';

const Footer = () => {
    return (
<footer className="bg-white">
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <a href="/" className="flex items-center">
              <Image
                alt="Norsk Tipping"
                src="https://www.norsk-tipping.no/staticimages/ntds/logos/norsktipping/norsktipping-full-color.svg"
                className="h-9 transition duration-300"
                width={200} 
                height={50}
            />
              </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Ressurser</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="https://nextjs.org" className="hover:underline">NextJS</a>
                      </li>
                      <li>
                          <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Kontakt</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="/" className="hover:underline ">Kontakt oss</a>
                      </li>
                      <li>
                          <a href="https://discord.gg/4eeurUVvTy" className="hover:underline"></a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="#" className="hover:underline">Privacy Policy</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024   <a href="/" className="hover:underline">Norsk Tipping AS</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
    <a href="https://twitter.com/NorskTippingAS" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
            <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd"/>
        </svg>
        <span className="sr-only">Twitter page</span>
    </a>
    <a href="https://www.youtube.com/user/NorskTipping1947" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15.14V7.86l6.5 3.64-6.5 3.64z"></path>
        </svg>
        <span className="sr-only">YouTube</span>
    </a>
    <a href="https://www.facebook.com/NorskTipping" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22.675 0h-21.35c-.731 0-1.325.594-1.325 1.325v21.351c0 .73.594 1.324 1.325 1.324h11.495v-9.282h-3.127v-3.622h3.127v-2.671c0-3.1 1.894-4.788 4.662-4.788 1.325 0 2.462.099 2.794.142v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.764v2.312h3.587l-.467 3.622h-3.12v9.282h6.116c.73 0 1.324-.594 1.324-1.324v-21.351c0-.731-.594-1.325-1.325-1.325z"/>
        </svg>
        <span className="sr-only">Facebook</span>
    </a>
    <a href="https://www.instagram.com/NorskTippingAS" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.056 1.967.24 2.432.41.61.23 1.054.511 1.511.969.456.456.737.9.968 1.51.171.465.355 1.262.411 2.432.059 1.267.071 1.647.071 4.851s-.012 3.584-.07 4.851c-.057 1.17-.241 1.967-.411 2.432-.231.61-.512 1.054-.968 1.511-.457.456-.9.737-1.51.968-.465.171-1.262.355-2.432.411-1.267.059-1.647.071-4.851.071s-3.584-.012-4.851-.07c-1.17-.057-1.967-.241-2.432-.411-.61-.231-1.054-.512-1.511-.968-.456-.457-.737-.9-.968-1.51-.171-.465-.355-1.262-.411-2.432-.059-1.267-.071-1.647-.071-4.851s.012-3.584.07-4.851c.057-1.17.241-1.967.411-2.432.231-.61.512-1.054.968-1.511.457-.456.9-.737 1.51-.968.465-.171 1.262-.355 2.432-.411 1.267-.059 1.647-.071 4.851-.071zm0-2.163c-3.262 0-3.667.014-4.947.072-1.281.059-2.153.25-2.911.532-.801.297-1.479.698-2.153 1.372-.674.674-1.075 1.352-1.372 2.153-.282.758-.473 1.63-.532 2.911-.058 1.28-.072 1.685-.072 4.947s.014 3.667.072 4.947c.059 1.281.25 2.153.532 2.911.297.801.698 1.479 1.372 2.153.674.674 1.352 1.075 2.153 1.372.758.282 1.63.473 2.911.532 1.28.058 1.685.072 4.947.072s3.667-.014 4.947-.072c1.281-.059 2.153-.25 2.911-.532.801-.297 1.479-.698 2.153-1.372.674-.674 1.075-1.352 1.372-2.153.282-.758.473-1.63.532-2.911.058-1.28.072-1.685.072-4.947s-.014-3.667-.072-4.947c-.059-1.281-.25-2.153-.532-2.911-.297-.801-.698-1.479-1.372-2.153-.674-.674-1.352-1.075-2.153-1.372-.758-.282-1.63-.473-2.911-.532-1.28-.058-1.685-.072-4.947-.072zM12 5.838c-3.402 0-6.162 2.76-6.162 6.162s2.76 6.162 6.162 6.162 6.162-2.76 6.162-6.162-2.76-6.162-6.162-6.162zm0 10.144c-2.193 0-3.982-1.789-3.982-3.982s1.789-3.982 3.982-3.982 3.982 1.789 3.982 3.982-1.789 3.982-3.982 3.982zm6.406-11.845c-.796 0-1.441.645-1.441 1.441s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.441-1.441-1.441z"/>
        </svg>
        <span className="sr-only">Instagram</span>
    </a>
</div>

      </div>
    </div>
</footer>
    );
}
export default Footer;
