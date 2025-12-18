import prettyGuardian from '../assets/pretty-guardian-logo.png'

const Header = () => {
  return (
    <header className="w-full bg-[url(../assets/header-bg.png)] bg-contain bg-no-repeat">
      <img className='max-w-24 mx-auto' src={prettyGuardian} />
      <h1 className="text-center text-3xl font-bold text-slate-700">
        Typescript Memory
      </h1>
    </header>
  );
};

export { Header };
