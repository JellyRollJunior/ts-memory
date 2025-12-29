import prettyGuardian from '@/assets/pretty-guardian-logo.png';

const Header = () => {
  return (
    <header className="w-full bg-[url(@/assets/header-bg.png)] bg-contain bg-no-repeat px-1.5">
      <img className="mx-auto max-w-32" src={prettyGuardian} />
      <h1 className="font-junge text-pink -mt-3 text-center text-3xl font-bold">
        Sailor Moon Memory
      </h1>
      <p className="text-blooming-dahlia mt-1.5 text-center">
        Get points by clicking on an image but don't click on any more than
        once!
      </p>
    </header>
  );
};

export { Header };
