import React, { useState } from 'react';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';

export default function MainContainer({ children }) {
  const [links] = useState([
    { name: 'о бренде', link: '/about' },
    { name: 'ответственность', link: '/responsibility' },
    { name: 'где купить', link: '/wherebuy' },
    { name: 'поддержка', link: '/support' },
    { name: 'контакты', link: '/contacts' },
    { name: 'cотрудничество', link: '/cooperation' },
  ]);
  return (
    <>
      <div>
        <div>Logo</div>
        {links.map((el) => (
          <Link href={el.link} key={uuidv4()}>
            <div>
              {el.name}
            </div>
          </Link>
        ))}
      </div>
      <div>
        {children}
      </div>
    </>
  );
}
