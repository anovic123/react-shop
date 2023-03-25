import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiFillSetting } from 'react-icons/ai';
import { FiLogOut } from 'react-icons/fi';

import { useAppSelector } from '../../../../hooks';

import s from './style.module.scss';

interface UserProps {}

export const User: FC<UserProps> = ({}) => {
  const [visible, setVisible] = useState<boolean>(false);

  const user = useAppSelector((state) => state?.auth?.user);
  // console.log('🚀 ~ file: index.tsx:8 ~ user:', user);

  const setVisibleHandler = () => setVisible(!visible);

  return (
    <div className={s.user}>
      <div className={s.avatar} style={{ backgroundImage: `url(${user.avatar})` }} />
      <div className={s.username} onClick={setVisibleHandler}>
        {user.name}
      </div>
      <div className={s.userMenu} style={{ display: visible ? 'block' : 'none' }}>
        <div className={s.userMenuEmail}>{user.email}</div>
        <ul className={s.userMenuList}>
          <li>
            <Link to="/settings">
              <AiFillSetting />
              <span>Настройки</span>
            </Link>
          </li>
          <li>
            <Link to="/login">
              <FiLogOut />
              <span>Выйти</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
