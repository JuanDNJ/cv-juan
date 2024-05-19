export default function UnOrderedList(props) {
  const { children, addclass } = props;
  return (
    <ul
      role="list"
      className={`${
        (addclass && addclass) ||
        "text-sm md:text-[1em] list-disc list-inside py-2"
      } `}
    >
      {children}
    </ul>
  );
}
