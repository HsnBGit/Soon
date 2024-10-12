import { TypeAnimation } from 'react-type-animation';

const Type = () => {
  return (
    <div className='flex flex-col text-center items-center justify-center'>
      <TypeAnimation
        sequence={[
          'My Portfolio Soon....',
          1000,
          'My Portfolio Coming Soon...',
          1000,
        ]}
        wrapper="span"
        speed={50}
        style={{ fontSize: '2em', display: 'inline-block' }}
        repeat={Infinity}
      />
    </div>
  );
};
export default Type;