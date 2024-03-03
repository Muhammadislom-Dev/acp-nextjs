import React from 'react'
const Company = () => {
    return (
        <section className='company-section py-6 '>
            <div className='flex justify-center bg-companyCeo py-10'>
                <div className='container'>
                    <div className='flex flex-wrap-reverse justify-center gap-4 md:grid grid-cols-2 items-center md:justify-between gap-x-16 '>
                        <div>
                            <h2 className='text-aboutTitle font-semibold text-base sm:text-lg md:text-2xl text-center pb-2'>COMPANY CEO</h2>
                            <p className='text-xs md:text-sm text-zinc-600'>We, the ALSTAR team, are pleased to welcome you and share important news. We have taken a new course of development, striving to reach new heights and exceed the expectations of our customers. Our company has always set itself the task of being innovative and advanced in the automatic transmission industry. Today we present to you a new milestone in our journey to success. We not only update our product range, but also invest significant resources in research and development of new technologies. This allows us to offer you products that combine the highest quality, innovative design and environmental sustainability. Thank you for your support and trust. We invite you to join our journey and work together to create a better future for our customers.</p>
                        </div>
                        <div>
                            <img className='rounded-lg' width={"500px"} height={'100px'} src='http://alstar.uz/assets/ceo1-095f2e63.jpg' alt='' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='company-strategic'>
                <div className='container'>
                    <div className='flex flex-col justify-start w-8/12 pt-14 gap-4'>
                        <div className='bg-black py-1 px-2 md:py-3 md:px-4 rounded-md font-semibold text-3xl'>
                            <h3 className='text-white text-lg sm:text-xl md:text-3xl'>
                                Strategic directions of the company.
                            </h3>
                        </div>
                        <div className='bg-companyStrategyBg py-1 px-2 md:py-3 md:px-4 rounded-md'>
                            <p className='text-white text-xs md:text-base'>Based on the context and mission of the company, the management and staff of OOO 'GOLDEN HAPPINESS' sets the main goal in the field of quality - ensuring and maintaining consumer confidence in OOO 'GOLDEN HAPPINESS' as a Company that comprehensively meets the needs of consumers in the production of fire-resistant aluminum composite panels. To achieve and implement this goal, the company has identified the main strategic directions: increasing the competitiveness of the company, increasing production capacity and quality of products, developing foreign markets.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='company-vision'>
                <div className='container'>
                    <div className='flex flex-col justify-start w-8/12 pt-14 gap-4'>
                        <div className='bg-black py-1 px-2 md:py-3 md:px-4 rounded-md font-semibold text-3xl'>
                            <h3 className='text-white text-lg sm:text-xl md:text-3xl'>
                                Company vision.
                            </h3>
                        </div>
                        <div className='bg-companyStrategyBg py-1 px-2 md:py-3 md:px-4 rounded-md'>
                            <p className='text-white text-xs md:text-base'>The company OOO 'GOLDEN HAPPINESS' is one of the leading companies in Uzbekistan engaged in the production of fire-resistant aluminum composite panels. Having highly qualified specialists and modern production and technological equipment, the Company strives to expand its position in the domestic and foreign markets by producing fire-resistant high quality aluminum composite panels that meet the requirements of consumers and stakeholders. The most efficient and balanced supply of high-quality fire-resistant aluminum composite panels in the territory of the Republic of Uzbekistan and neighboring countries.</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Company