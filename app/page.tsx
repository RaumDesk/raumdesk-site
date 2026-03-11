export default function Home() {
  return (
    <div
      className="min-h-screen w-full flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/bg-under-construct.png')" }}
    >
      <div className="flex flex-col items-center gap-6 text-center px-6">
        <div className="bg-black/50 backdrop-blur-sm rounded-2xl px-10 py-12 flex flex-col items-center gap-6 max-w-lg w-full">
          <h1 className="text-5xl font-bold text-white tracking-tight">
            RAUMDESK
          </h1>
          <div className="w-16 h-0.5 bg-white/40" />
          <p className="text-xl text-white/80 font-light leading-relaxed">
            We are currently under construction.
            <br />
            Something great is coming soon.
          </p>
        </div>
      </div>
    </div>
  );
}
