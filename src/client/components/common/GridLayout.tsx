import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  columns?: 1 | 2 | 3;
}

export default function GridLayout({ children, columns = 3 }: Props) {
  return (
    <div className={`grid grid-cols-1 ${
      columns >= 2 ? 'md:grid-cols-2' : ''
    } ${
      columns >= 3 ? 'lg:grid-cols-3' : ''
    } gap-8`}>
      {children}
    </div>
  );
}