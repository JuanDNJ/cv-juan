export default function UserBadget() {
  return (
    <article className="col-span-10 flex items-center px-4">
      <img
        src="images/jpg/juan.jpg"
        alt="Profile photo"
        width={128}
        height={128}
        className="photo__cv z-10"
      />
      <h1>
        <div className="flex flex-col">
          <strong className="name">Juan Antonio</strong>
          <strong className="surname">Valdivia Camacho</strong>
        </div>
      </h1>
    </article>
  );
}
