import Header from 'components/UI/Header';
import { ThemeContext } from 'context/ThemeContext';
import React, { useContext } from 'react';

type Props = {};

const Settings = (props: Props) => {
  const themeCtx = useContext(ThemeContext);

  return (
    <div>
      <Header title="Settings" />
      <div className="p-3 flex justify-between">
        <div className="dark:text-white text-black">Dark theme</div>
        <label
          htmlFor="default-toggle"
          className="inline-flex relative items-center cursor-pointer">
          <input
            type="checkbox"
            onChange={(e) => themeCtx.toggleTheme()}
            id="default-toggle"
            className="sr-only peer"
            defaultChecked={themeCtx.dark}
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
          <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            {themeCtx.dark ? 'Dark' : 'Light'}
          </span>
        </label>
      </div>
    </div>
  );
};

export default Settings;
