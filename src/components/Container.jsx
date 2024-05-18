export default function Container(props) {
  const { children, addclass } = props;
  return (
    <section className={`max-w-5xl mx-auto ${addclass}`} {...props}>
      {children}
    </section>
  );
}
