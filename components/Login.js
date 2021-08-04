import Image from 'next/image';
import Logo from '../images/logo.png';
import { signIn } from 'next-auth/client';
const Login = () => {
  return (
    <div className='grid place-items-center'>
      <Image
        src={Logo}
        width={600}
        height={400}
        objectFit='contain'
        alt='logo login'
      />
      <h1
        onClick={signIn}
        className='p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer'
      >
        Login with Facebook
      </h1>
    </div>
  );
};

export default Login;
