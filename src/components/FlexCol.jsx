export default function FlexCol(props) {
  const { children, addclass } = props;
  return <div className={`flex flex-col ${addclass}`}>{children}</div>;
}
