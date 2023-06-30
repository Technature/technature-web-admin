import Header from "./Header";
import Footer from "./Footer";
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const RootLayout = ({ children }) => {


      
    return (
    
<>
              <div className="min-h-full">
   
            <Header></Header>
                <header className="bg-white shadow">
                  <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
                  </div>
                </header>
                <main>
                  <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">{children}</div>
                </main>
                <Footer></Footer>
              </div>
            </>
          )
        }

  export default RootLayout;