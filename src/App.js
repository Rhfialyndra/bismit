import './index.css'
import Maps from './components/maps';
import Form from './components/form';
import Mascot from './components/mascot';
import Contact from './components/contact';

function App() {
  return (
    <div className="h-screen flex flex-col mt-20 items-center bg-white poppins">

      <section className='relative mx-20'>
        <div className='ml-8 absolute flex flex-row gap-2 text-sm font-bold -top-10'>
          <p>Home</p>
          <img src="../img-data/next.svg" alt="next"/>
          <p className='text-amber-500'>Kontak kami</p>
        </div>

        <h1 className='text-3xl lg:text-5xl text-gray-700 font-bold ml-8 mt-4 lg:ml-4'>Kontak Kami</h1>
        <Contact breakpoint={'flex lg:hidden'}/>
        
        
        <div className='flex flex-col lg:flex-row justify-center items-center mt-2 gap-6'>
          <Maps/>
          <Mascot breakpoint={'flex lg:hidden'}/>
          <Form/>
          <Mascot breakpoint={"hidden lg:flex"}/>
        </div>
      </section>
    </div>
  );
}

export default App;
