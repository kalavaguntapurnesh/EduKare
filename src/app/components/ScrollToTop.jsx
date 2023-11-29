import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { IoMdArrowRoundUp } from "react-icons/io";
import {classNames} from "@/app/components/classNames"


const ScrollToTop = () => {

    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
          setIsVisible(true)
        } else {
          setIsVisible(false)
        }
      }

    const scrollToTop = () => {
        window.scrollTo({
            top : 0,
            behavior : 'smooth'
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility)

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        }
    }, [])


  return (
    <div className="fixed md:bottom-2 bottom-4 md:right-4 right-3 z-10">
    <button
      type="button"
      onClick={scrollToTop}
      className={classNames(
        isVisible ? 'opacity-100' : 'opacity-0',
        'bg-primaryColor hover:bg-primaryColor inline-flex items-center rounded-md md:p-3 p-2 text-white shadow-sm transition-opacity ',
      )}
    >
      <IoMdArrowRoundUp className="h-6 w-6" aria-hidden="true" />
    </button>
  </div>

  )
}

export default ScrollToTop
