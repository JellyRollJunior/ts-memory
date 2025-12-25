import github from '@/assets/icons/github.png';
import instagram from '@/assets/icons/instagram.png';
import linkedin from '@/assets/icons/linkedin.png';

type iconButtonProps = {
  src: string;
  size: number;
  link: string;
  alt: string;
};

const IconButton = ({ src, size = 20, link, alt }: iconButtonProps) => {
  return (
    <a href={link} target="”_blank”" rel="noopener noreferrer nofollow">
      <img style={{ height: size, width: size }} src={src} alt={alt} />
    </a>
  );
};

const Footer = () => {
  return (
    <footer className="mt-auto pt-12 text-white md:pt-16">
      <div className="h-9 w-full bg-[url(../assets/footer-bg.png)] bg-contain bg-center" />
      <div className="bg-sand-beige pt-3 pb-2 md:pt-6 md:pb-3">
        <div className="mx-auto flex justify-center gap-5">
          <IconButton
            src={github}
            size={36}
            link="https://github.com/jellyrolljunior"
            alt="JellyRollJunior Github Link"
          />
          <IconButton
            src={linkedin}
            size={36}
            link="https://www.linkedin.com/in/jellyrolljunior/"
            alt="Brandon Lin LinkedIn Link"
          />
          <IconButton
            src={instagram}
            size={36}
            link="https://www.instagram.com/river.flows__"
            alt="river.flows__ Instagram Link"
          />
        </div>
        <h3 className="mt-3 text-center">
          Created in TypeScript by JellyRollJunior
        </h3>
      </div>
    </footer>
  );
};

export { Footer };
