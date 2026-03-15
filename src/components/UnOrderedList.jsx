export default function UnOrderedList(props) {
  const { children, addclass } = props;
  return (
    <ul
      role="list"
      className={`${
        (addclass && addclass) || "list-stack text-sm md:text-[1em] py-1"
      } `}
    >
      {children}
    </ul>
  );
}
