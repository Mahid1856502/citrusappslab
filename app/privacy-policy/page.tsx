"use client"
import { useTheme } from '@/context/themeContext'
import React from 'react'

const Privacy = () => {
    const { theme } = useTheme(); // Access theme from context
  return (
    <div className={`gen-p bg-background py-36 ${theme}`}>
        <div>
            <h1 className="text-3xl md:text-7xl font-bold text-center mb-4">Privacy Policy</h1>
            <p className="text-sm md:text-lg text-center text-heading border-lightGray border-b-2 pb-7">Last updated 08-08-2024</p>

            <section className="mt-8">
                <h2 className="text-xl md:text-4xl font-semibold mb-2">Introduction</h2>
                <p className="text-heading">
                Welcome to Net Nexus Global Ltd, company registered in England and Wales. Net Nexus Global
                (“Company”, “We”, “Our”, “Us”) is committed to protecting and respecting your privacy...
                </p>
            </section>

            <section className="mt-8">
                <h2 className="text-xl md:text-4xl font-semibold mb-2">Information We Collect</h2>
                <h3 className="text-lg font-medium mb-1">Personal Information</h3>
                <ul className="list-disc pl-5 text-heading">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Company name</li>
                <li>Job title</li>
                </ul>
                
                <h3 className="text-lg font-medium mt-4 mb-1">Non-Personal Information</h3>
                <ul className="list-disc pl-5 text-heading">
                <li>IP address</li>
                <li>Browser type</li>
                <li>Operating system</li>
                <li>Access times and dates</li>
                <li>Referring website addresses</li>
                <li>Pages you visit on our Website</li>
                </ul>
            </section>

            <section className="mt-8">
                <h2 className="text-xl md:text-4xl font-semibold mb-2">Cookies and Tracking Technologies</h2>
                <p className="text-heading">
                Our Website may use cookies to enhance your experience...
                </p>
            </section>

            <section className="mt-8">
                <h2 className="text-xl md:text-4xl font-semibold mb-2">How We Use Your Information</h2>
                <p className="text-heading">
                We use the information we collect to:
                </p>
                <ul className="list-disc pl-5 text-heading">
                <li>Provide, operate, and maintain our services</li>
                <li>Improve, personalize, and expand our services</li>
                <li>Process transactions...</li>
                </ul>
            </section>

            <section className="mt-8">
                <h2 className="text-xl md:text-4xl font-semibold mb-2">Sharing Your Information</h2>
                <p className="text-heading">
                We do not sell, trade, or otherwise transfer your personal identification information...
                </p>
            </section>

            <section className="mt-8">
                <h2 className="text-xl md:text-4xl font-semibold mb-2">Contact Us</h2>
                <p className="text-heading">
                If you have any questions about this Privacy Policy, please contact us:
                </p>
                <ul className="list-none text-heading">
                <li>Registered address: 13-17 High Beech Road, Loughton, England, IG10 4BN</li>
                <li>Operation address: Station road, Cambridge, United Kingdom</li>
                <li>Email: info@netnexus.co.uk</li>
                <li>Phone: +44 7362424565</li>
                </ul>
            </section>
        </div>
    </div>
  )
}

export default Privacy
