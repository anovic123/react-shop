import { FC, useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { AiFillSetting } from 'react-icons/ai';
import { FiLogOut } from 'react-icons/fi';

import { useAppSelector } from '../../../../hooks';

import s from './style.module.scss';

interface UserProps {}

export const User: FC<UserProps> = ({}) => {
  const navigate = useNavigate();

  const [visible, setVisible] = useState<boolean>(false);
  const userMenuRef = useRef<HTMLDivElement>(null);

  const user = useAppSelector((state) => state?.auth?.user);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setVisible(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [userMenuRef]);

  const handleLogout = () => {
    localStorage.removeItem('persist:root');
    navigate('/login');
  };

  return (
    <div className={s.user}>
      <div className={s.userAvatar} style={{ backgroundImage: `url(${user.avatar})` }} />
      <div className={s.userUsername} onClick={() => setVisible(!visible)}>
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
            <a onClick={() => handleLogout()}>
              <FiLogOut />
              <span>Exit</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
