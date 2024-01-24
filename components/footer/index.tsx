const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="flex flex-col items-center justify-center gap-2 bg-gray-900 py-4 sm:flex-row sm:gap-7 sm:py-7 md:gap-12">
      <p className="text-sm text-gray-500 sm:text-base md:text-lg">
        Centrum Kangurek © 2017-{currentYear}
      </p>
      <p className="text-sm text-gray-500  sm:text-base md:text-lg">
        Powered by{" "}
        <a
          href="https://www.facebook.com/profile.php?id=100001098131095"
          target="_blank"
          rel="noreferrer"
        >
          Rafał Prokopiak
        </a>
      </p>
    </footer>
  );
};

export default Footer;
