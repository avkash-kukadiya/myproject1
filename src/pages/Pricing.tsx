import React from 'react'
import { HOC } from '../componnets/HOC'
// import { BiCheck } from 'react-icons/bi'
// import bg from '../assets/img/bg2.png'


const plans = [
    {
        name: 'Basic',
        price: '$14.99',
        features: [
            { name: 'Free Setup', included: true },
            { name: 'Bandwidth Limit 10 GB', included: true },
            { name: '20 User Connection', included: true },
            { name: 'Analytics Report', included: false },
            { name: 'Public API Access', included: false },
            { name: 'Plugins Integration', included: false },
            { name: 'Custom Content Management', included: false }
        ],
        buttonStyle: 'border-2 border-blue-500 text-blue-500 hover:bg-blue-50'
    },
    {
        name: 'Standard',
        price: '$49.99',
        features: [
            { name: 'Free Setup', included: true },
            { name: 'Bandwidth Limit 10 GB', included: true },
            { name: '20 User Connection', included: true },
            { name: 'Analytics Report', included: true },
            { name: 'Public API Access', included: true },
            { name: 'Plugins Integration', included: false },
            { name: 'Custom Content Management', included: false }
        ],
        buttonStyle: 'border-2 border-blue-500 text-blue-500 hover:bg-blue-50'
    },
    {
        name: 'Premium',
        price: '$89.99',
        features: [
            { name: 'Free Setup', included: true },
            { name: 'Bandwidth Limit 10 GB', included: true },
            { name: '20 User Connection', included: true },
            { name: 'Analytics Report', included: true },
            { name: 'Public API Access', included: true },
            { name: 'Plugins Integration', included: true },
            { name: 'Custom Content Management', included: true }
        ],
        buttonStyle: 'bg-blue-500 text-white hover:bg-blue-600'
    }
];

const Pricing: React.FC = () => {
    return (
        <div className='w-full p-5 md:p-10 bg-[#F2F3F7]'>
            <h1 className="text-2xl font-semibold mb-6">Pricing</h1>
            <div className="min-h-screen bg-linear-to-br  px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {plans.map((plan, index) => (
                            <div
                                key={index}
                                className="bgimg rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 flex flex-col"
                            >
                                <div className="text-center mb-8">
                                    <h2 className="text-xl font-bold text-gray-900 mb-2">
                                        {plan.name}
                                    </h2>
                                    <p className="text-sm text-gray-500 mb-4">Monthly Charge</p>
                                    <p className="text-5xl font-bold text-blue-500">
                                        {plan.price}
                                    </p>
                                </div>
 <hr className='text-gray-300 mx-1 mb-6 '/>
                                <div className="grow space-y-4 mb-6 text-center">
                                    {plan.features.map((feature, featureIndex) => (
                                        <div key={featureIndex} className=" text-center gap-3">
                                           
                                            <span className={`text-sm ${feature.included ? 'text-gray-700' : 'text-gray-400'}`}>
                                                {feature.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                                    <hr className='text-gray-300 mx-1 mb-6 '/>
                                <div className="mt-auto">
                                    <button
                                        className={`w-full py-3 px-6 rounded-full font-semibold transition-all duration-200 ${plan.buttonStyle}`}
                                    >
                                        Get Started
                                    </button>
                                    <p className="text-center text-xs text-gray-500 mt-4 underline">
                                        Start Your 30 Day Free Trial
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default HOC(Pricing)
