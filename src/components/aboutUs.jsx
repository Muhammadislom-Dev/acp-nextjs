import React from "react";
import { useRouter } from "next/router";

const AboutUs = () => {
  const router = useRouter()
  const handleClick = () => {
    router.push('/company')
  }
  return (
    <section className='about-section py-4 px-12 flex justify-center'>
      <div className='container'>
        <h2 className='text-center text-aboutTitle font-semibold text-2xl'>BIZ HAQIMIZDA</h2>
        <h4 className='text-center pt-2 pb-6'>ALYUMIN KOMPOZIT PANELLARDAGI ENG ISHONCHLI NOM</h4>
        <div className='flex items-center gap-5 flex-wrap-reverse lg:flex-nowrap'>
          <div>
            <div className='flex flex-col gap-3 pb-4'>
              <p className='text-stone-500'>ALSTAR - 'GOLDEN HAPPINESS' MChJga tegishli PE, FR-B1, FR-A2 turdagi alyumin kompozit panellar (ACP) brendi. 2013 yildan beri kompaniya yiliga 2 million m2 ishlab chiqarish quvvatiga ega Markaziy Osiyodagi eng yirik ACP brendiga aylandi. Kompaniya tarkibiga “ALSTAR, DIBOND, UZBOND, ALSTAR7” kabi avtomat uzatmalar qutisi (ACP) mahsulotlari kiradi.
              </p>
              <p className='text-stone-500'>
                ALSTAR yong'inga chidamli alyumin kompozit panellarning barcha xillarini: yong'inga chidamlilik turi G1 bo'lgan, FR-B1 mineral o'zaglik, FR-A2 mineral o'zaglik, va 50 xil rang palitrasidagi 10 xil mikron qalinligida alyumin mahsulotlarini taklif qiladi.
              </p>
              <p className='text-stone-500'>
                Korxonada alyumin kompozit panellar ishlab chiqarishdan tashqari, zamonaviy binolarning tashqi va interyeri uchun zamonaviy innovatsion dizayn yechimlarini namoyish etish uchun dizayn ko‘rgazma zallari ham mavjud.
              </p>
            </div>
            <button onClick={handleClick} className='bg-aboutBtnColor text-white px-4 py-2 rounded-lg'>Batafsil ma'lumot</button>
      </div>
      <div >
        <img className='bg-white' src='http://alstar.uz/assets/company-cf3f4262.png' alt='alstar_company ' />
      </div>
    </div>
      </div >


    </section >
  );
};

export default AboutUs;
