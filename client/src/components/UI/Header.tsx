import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { useAppDispatch, useAppSelector } from 'store';
import { toggle } from 'store/slices/menuSlice';

type Props = {
  title: string;
};

const Header = (props: Props) => {
  const { title } = props;
  const dispatch = useAppDispatch();

  return (
    <div className="text-xl font-bold p-3 sticky top-0 bg-white/95 dark:bg-black text-black dark:text-white flex gap-2 z-[98]">
      <button type="button" className={`block lg:hidden `} onClick={() => dispatch(toggle())}>
        <AiOutlineMenu className="inline-block" />
      </button>
      <div>{title}</div>
    </div>
  );
};

export default Header;
