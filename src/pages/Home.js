import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { XL, XXXL } from '../config/breakpoint';
import useMediaQuery from '../hooks/useMediaQuery';
import LOGO from '../assets/images/logo.png';
import StoreButton from "./StoreButton/StoreButton";

const Home = () => {
  const { t, i18n } = useTranslation();
  const { isDesiredWidth: isXL, windowWidth } = useMediaQuery(XL);
  const [open, setOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [isJoined, setIsJoined] = useState(false);
  const [loading, setLoading] = useState(false);
  const [language, setLanguage] = useState('BR');
  const xlmxImage = windowWidth < XXXL ? `${Math.round((windowWidth - XL) * 0.45 - 300)}px` : "-66px";
  const mainGap = windowWidth < XXXL ? "gap-[32px]" : "gap-[80px]";
  const customLabels = {
    US: 'US',
    BR: 'BR',
  };

  const selectLanguage = (code) => {
    setLanguage(code);
    i18n.changeLanguage(code);
  }

  return (
    <div class="bg-gradient-to-b from-[#0A5050] to-[#0B7D70] flex flex-col items-center justify-center h-screen">
      <img src={LOGO} alt="" className="w-auto h-[30%]" />
      <div className='flex flex-col md:flex-row mt-[20%] md:mt-[6%]'>
        <StoreButton
          store="android"
          url={'https://play.google.com/store/apps/details?id=com.vodeus&pli=1'}
          title='Android Store Button'
        />
        <StoreButton
          store="ios"
          url={'https://apps.apple.com/app/id1636479516'}
          title='iOS Store Button'
        />
      </div>
    </div>
  );
}

export default Home;
