import { useState } from 'react';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const Accordion = ({ title, children }: AccordionProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div>
        <h2>{title}</h2>
        <button onClick={() => setOpen(!open)}>
          {open ? 'Close' : 'Open'}
        </button>
      </div>
      {open && <div>{children}</div>}
    </div>
  );
};

export default Accordion;
