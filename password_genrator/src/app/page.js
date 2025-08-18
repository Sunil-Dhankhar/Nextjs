import Image from "next/image";
import Passgen from "../../pages/pass_gen.jsx";
export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_10px] items-center justify-items-center min-h-screen   ">
          <Passgen />
    </div>
  );
}
