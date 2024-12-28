import React from 'react';
import { IconLanguage } from '@tabler/icons-react';

const LanguageSelector = ({ selectedLanguage, setSelectedLanguage, languages }) => {
  return (
    <span className='cursor-pointer rounded-full space-x-1 pl-2 black flex items-center flex-row'>
      <IconLanguage size={20} />
      <select
        name=""
        id=""
        className='bg-black flex flex-row rounded-full py-1 text-white'
        value={selectedLanguage}
        onChange={(e) => setSelectedLanguage(e.target.value)}
      >
        {languages.map((language) => (
          <option key={language} value={language}>
            {language}
          </option>
        ))}
      </select>
    </span>
  );
};

export default LanguageSelector;
