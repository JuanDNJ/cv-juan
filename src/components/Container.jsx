export default function Container(props) {
  const { children, addclass } = props;
  return (
    <section className={`max-w-6xl mx-auto px-4 ${addclass}`} {...props}>
      {children}
    </section>
  );
}
