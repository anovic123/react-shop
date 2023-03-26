import { FC, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiFillSetting } from 'react-icons/ai';
import { FiLogOut } from 'react-icons/fi';

import { useAppSelector } from '../../../../hooks';

import s from './style.module.scss';

interface UserProps {}

export const User: FC<UserProps> = ({}) => {
  const [visible, setVisible] = useState<boolean>(false);
  const userMenuRef = useRef<HTMLDivElement>(null);

  const user = useAppSelector((state) => state?.auth?.user);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setVisible(false);
      }
    }

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    }
  }, [userMenuRef])
s
  return (
    <div className={s.user}>
      <div className={s.avatar} style={{ backgroundImage: `url(${user.avatar})` }} />
      <div className={s.username} onClick={() => setVisible(!visible)}>
        {user.name}
      </div>
      <div className={s.userMenu} ref={userMenuRef} style={{ display: visible ? 'block' : 'none' }}>
        <div className={s.userMenuEmail}>{user.email}</div>
        <ul className={s.userMenuList}>
          <li>
            <Link to="/settings">
              <AiFillSetting />
              <span>Settings</span>
            </Link>
          </li>
          <li>
            <Link to="/login">
              <FiLogOut />
              <span>Exit</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
