export default function Footer() {
    return (
      <>
        <footer className="flex items-center justify-between flex-wrap text-white bg-zinc-800 p-2">
          <span className="font-semibold w-full text-lg text-center tracking-tight">
            Made with ❤️ by
            <a
              href="https://github.com/shashankkaran"
              target="_blank"
              rel="noreferrer"
              className="text-lime-400"
            >
              {" Shashank Karan "}
            </a>
          </span>
        </footer>
      </>
    );
  }
  