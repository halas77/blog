import Image from "next/image";
import React from "react";

export default function MyPic() {
  return (
    <section>
      <Image
        className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
        src="/images/me.jpg"
        alt="Dawit Mellese"
        width={200}
        height={200}
        priority={true}
      />
    </section>
  );
}
