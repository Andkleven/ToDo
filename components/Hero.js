import Image from "next/image";

export default function Hero({ children }) {
  return (
    <div
      style={{
        minHeight: 175,
        height: "calc(75vw)",
        width: "100%",
      }}
    >
      <h1 className="text-center">Ola</h1>

      <div
        style={{
          zIndex: 0,
          height: "100%",
          width: "100%",
          position: "relative",
          textAlign: "center",
        }}
      >
        <Image
          className="not-selectable"
          alt="Background"
          src="/images/download.jpg"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        {children}
      </div>
    </div>
  );
}
