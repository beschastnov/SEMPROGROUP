/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/router';

export default function MainContainer({ children }) {
  const router = useRouter();
  const [links] = useState([
    { name: 'о бренде', link: '/about', status: 0 },
    { name: 'ответственность', link: '/responsibility', status: 0 },
    { name: 'где купить', link: '/wherebuy', status: 0 },
    { name: 'поддержка', link: '/support', status: 0 },
    { name: 'контакты', link: '/contacts', status: 0 },
    { name: 'cотрудничество', link: '/cooperation', status: 0 },
  ]);
  links.map((el) => {
    if (el.link === router.pathname) {
      el.status = 1;
    }
  });
  const [screenWidth, setScreenWidth] = useState();
  useEffect(() => {
    setScreenWidth(window.screen.width);
  }, []);
  return (
    <>
      {screenWidth > 799
        ? (
          <>
            <div className="navbar">
              <div className="navbar-logo">Logo</div>
              <div className="links">
                {links.map((el) => {
                  if (el.status === 0) {
                    return (
                      <Link href={el.link} key={uuidv4()}>
                        <div className="border-block">
                          <div className="link">
                            {el.name}
                          </div>
                        </div>
                      </Link>
                    );
                  } if (el.status === 1) {
                    return (
                      <Link href={el.link} key={uuidv4()}>
                        <div className="border-block-activ">
                          <div className="link-activ">
                            {el.name}
                          </div>
                        </div>
                      </Link>
                    );
                  }
                })}
              </div>
            </div>
            <div>
              {children}
            </div>
          </>
        ) : (
          <>
            <div className="navbar">
              <div className="navbar-logo">Logo</div>
              <div className="dropdown">
                <div className="btn-drop-menu">
                  <button type="button" className="dropbtn"> </button>
                  <button type="button" className="dropbtn"> </button>
                  <button type="button" className="dropbtn"> </button>
                </div>

                <div className="dropdown-content">
                  {links.map((el) => {
                    if (el.status === 0) {
                      return (
                        <Link href={el.link} key={uuidv4()}>
                          <div className="link">
                            {el.name}
                          </div>
                        </Link>
                      );
                    } if (el.status === 1) {
                      return (
                        <Link href={el.link} key={uuidv4()}>
                          <div className="link">
                            {el.name}
                          </div>
                        </Link>
                      );
                    }
                  })}
                </div>
              </div>
            </div>
            <div>
              {children}
            </div>
          </>
        )}
    </>
  );
}
