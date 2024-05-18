export default function UserBadget() {
  return (
    <article className="col-span-10 flex items-center gap-2 px-4">
      <img
        src="images/jpg/juan.jpg"
        alt="Profile photo"
        width={128}
        height={128}
        className="photo__cv z-10"
      />
      <h1 className="flex flex-col p-4 font-title text-xl md:text-3xl text-white">
        <span>Juan Antonio</span> <span>Valdivia Camacho</span>
      </h1>
    </article>
  );
}
