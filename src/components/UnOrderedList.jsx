export default function UnOrderedList(props) {
  const { children, addclass } = props;
  return (
    <ul
      role="list"
      className={`${(addclass && addclass) || "list-disc list-inside py-2"} `}
    >
      {children}
    </ul>
  );
}
