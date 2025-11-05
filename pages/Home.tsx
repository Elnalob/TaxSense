import React from 'react';
import { Link } from 'react-router-dom';
import CalculatorIcon from '../components/icons/CalculatorIcon';
import BookOpenIcon from '../components/icons/BookOpenIcon';
import GiftIcon from '../components/icons/GiftIcon';
import MailIcon from '../components/icons/MailIcon';
import CheckCircleIcon from '../components/icons/CheckCircleIcon';
import ArrowRightIcon from '../components/icons/ArrowRightIcon';


/**
 * The landing page of the application.
 * It provides a comprehensive overview of the app's features and purpose.
 */
const Home: React.FC = () => {
  return (
    <div className="bg-white">
      {/* SECTION: Hero */}
      {/* This section provides a strong opening statement and primary calls-to-action. */}
      <section className="relative text-center py-20 md:py-32 bg-primary-light">
         <div 
            className="absolute inset-0 bg-cover bg-center opacity-10" 
            style={{backgroundImage: "url('https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"}}
          ></div>
          <div className="relative container mx-auto px-4">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
                Understand Nigeria’s New Tax Reform in Minutes.
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                TaxSense helps you see what the 2025 tax reform means for your income, spending, and future.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <Link
                  to="/calculator"
                  className="w-full sm:w-auto bg-primary text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-green-800 transition-transform transform hover:scale-105"
                >
                  Calculate My Tax Impact
                </Link>
                <Link
                  to="/explainer"
                  className="w-full sm:w-auto bg-white text-gray-800 font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-200 transition-transform transform hover:scale-105"
                >
                  Learn About the Reform
                </Link>
              </div>
          </div>
      </section>

      {/* SECTION: How It Works */}
      {/* A simple 3-step guide to how the app functions. */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">How It Works</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">Get clarity on your taxes in three simple steps.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <CheckCircleIcon className="w-12 h-12 text-primary mb-4"/>
              <h3 className="text-xl font-bold mb-2">1. Enter Your Info</h3>
              <p className="text-gray-600">Provide basic, anonymous details about your income and lifestyle.</p>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircleIcon className="w-12 h-12 text-primary mb-4"/>
              <h3 className="text-xl font-bold mb-2">2. See Your Tax Breakdown</h3>
              <p className="text-gray-600">Instantly see an estimate of your old vs. new tax obligations.</p>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircleIcon className="w-12 h-12 text-primary mb-4"/>
              <h3 className="text-xl font-bold mb-2">3. Discover Benefits</h3>
              <p className="text-gray-600">Find incentives and reliefs you may be eligible for under the new reform.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* SECTION: Core Features */}
      {/* Highlights the main tools available in the app using feature cards. */}
      <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-12">Everything You Need to Be Tax-Smart</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* Feature Card */}
                  <Link to="/calculator" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow text-left flex flex-col">
                      <CalculatorIcon className="w-10 h-10 text-primary mb-4"/>
                      <h3 className="text-lg font-bold text-gray-800 mb-2">Tax Impact Calculator</h3>
                      <p className="text-gray-600 flex-grow">Understand your income after reform.</p>
                      <span className="mt-4 font-semibold text-primary flex items-center">Try it now <ArrowRightIcon className="w-4 h-4 ml-1" /></span>
                  </Link>
                  {/* Feature Card */}
                   <Link to="/explainer" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow text-left flex flex-col">
                      <BookOpenIcon className="w-10 h-10 text-primary mb-4"/>
                      <h3 className="text-lg font-bold text-gray-800 mb-2">Reform Explainers</h3>
                      <p className="text-gray-600 flex-grow">Clear, localized summaries in plain English.</p>
                       <span className="mt-4 font-semibold text-primary flex items-center">Read more <ArrowRightIcon className="w-4 h-4 ml-1" /></span>
                  </Link>
                  {/* Feature Card */}
                   <Link to="/benefits" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow text-left flex flex-col">
                      <GiftIcon className="w-10 h-10 text-primary mb-4"/>
                      <h3 className="text-lg font-bold text-gray-800 mb-2">Benefit Finder</h3>
                      <p className="text-gray-600 flex-grow">Discover available tax reliefs and grants.</p>
                      <span className="mt-4 font-semibold text-primary flex items-center">Find benefits <ArrowRightIcon className="w-4 h-4 ml-1" /></span>
                  </Link>
                  {/* Feature Card */}
                   <Link to="/feedback" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow text-left flex flex-col">
                      <MailIcon className="w-10 h-10 text-primary mb-4"/>
                      <h3 className="text-lg font-bold text-gray-800 mb-2">Feedback Channel</h3>
                      <p className="text-gray-600 flex-grow">Ask questions or send concerns to your state.</p>
                      <span className="mt-4 font-semibold text-primary flex items-center">Get in touch <ArrowRightIcon className="w-4 h-4 ml-1" /></span>
                  </Link>
              </div>
          </div>
      </section>

       {/* SECTION: Visual Stats */}
      {/* A visually engaging section to present a compelling statistic. */}
      <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
              <div className="text-center md:text-left">
                  <h2 className="text-3xl font-bold mb-4">Bridging the Information Gap</h2>
                  <p className="text-lg opacity-90">
                      Over 80% of Nigerians find new tax laws confusing. TaxSense aims to change that by providing accessible, easy-to-understand information for everyone.
                  </p>
              </div>
               <div className="flex justify-center">
                   <img src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="People in a meeting" className="rounded-lg shadow-xl h-64 object-cover"/>
               </div>
          </div>
      </section>

      {/* SECTION: Why TaxSense Exists */}
      {/* Explains the mission and purpose of the application. */}
      <section className="py-16 bg-white">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center">
                  <img src="https://images.pexels.com/photos/164593/pexels-photo-164593.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Busy street in Lagos" className="rounded-lg shadow-xl h-80 object-cover w-full"/>
              </div>
              <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">Why TaxSense Exists</h2>
                  <p className="text-gray-600 leading-relaxed">
                      The 2025 Nigerian tax reform changes how individuals and businesses are taxed. Staying uninformed can lead to penalties and missed opportunities. TaxSense was built to empower every Nigerian with the knowledge to navigate these changes confidently. We believe that by simplifying tax information, we can help citizens make better financial decisions, avoid penalties, and benefit from new government incentives.
                  </p>
              </div>
          </div>
      </section>

       {/* SECTION: Call-to-Action */}
      {/* A final, clear prompt for the user to engage with the app's main feature. */}
      <section className="bg-primary-light py-16">
          <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Start Making Sense of Your Taxes Today</h2>
              <p className="text-gray-600 mb-8">Free to use. Works offline. Built for Nigerians.</p>
              <Link
                to="/calculator"
                className="bg-primary text-white font-bold py-3 px-10 rounded-lg shadow-lg hover:bg-green-800 transition-transform transform hover:scale-105 inline-block"
              >
                Open Calculator
              </Link>
          </div>
      </section>
    </div>
  );
};

export default Home;
