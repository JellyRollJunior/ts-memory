import prettyGuardian from '../assets/pretty-guardian-logo.png'

const Header = () => {
  return (
    <header className="w-full bg-[url(../assets/header-bg.png)] bg-contain bg-no-repeat">
      <img className='max-w-32 mx-auto' src={prettyGuardian} />
      <h1 className="-mt-3 font-junge text-sand-beige text-center text-3xl font-bold ">
        Sailor Moon Memory
      </h1>
    </header>
  );
};

export { Header };
