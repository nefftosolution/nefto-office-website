const Loader = () => {
  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center overflow-hidden bg-main-bg">
      {/* Background Glow */}
      <div className="absolute h-80 w-80 rounded-full bg-primary/20 blur-[120px]" />

      {/* Spinner */}
      <div className="relative flex items-center justify-center">
        {/* Outer Ring */}
        <div className="h-44 w-44 animate-spin rounded-full border-[3px] border-white/10 border-t-primary border-r-primary" />

        {/* Inner Ring */}
        <div className="absolute h-32 w-32 animate-spin rounded-full border-2 border-white/10 border-b-white border-l-white [animation-direction:reverse] [animation-duration:2s]" />

        {/* Logo */}
        <img src="/logo.png"
          alt="Neffto Solution software development and digital marketing agency official company logo"
          className="absolute h-20 w-20 animate-pulse object-contain" title="Neffto Solution software development and digital marketing agency official company logo" />
      </div>
    </div>
  );
};

export default Loader;
