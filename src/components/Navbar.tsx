import { FC } from "react";
import { CustomConnectButton } from "./CustomConnectButton";

const Navbar: FC = () => {
  return (
    <>
      <div className={`fixed right-5 top-4 md:top-10  md:right-10 z-50`}>
        <CustomConnectButton />
      </div>
      <div className={`fixed right-10 top-4 md:top-10  md:right-10 z-10`}>
        <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-10 after:h-[180px] after:w-[240px] after:translate-x-2/6 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]"></div>
      </div>
    </>
  );
};

export default Navbar;
