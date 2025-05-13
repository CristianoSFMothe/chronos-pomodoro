import './Heading.css';

type HeadingProps = {
  children: React.ReactNode;
};

export const Heading = ({ children }: HeadingProps) => {
  return <h1 className='heading'>{children}</h1>;
};
