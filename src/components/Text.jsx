export default function Text({ children, addclass }) {
  return (
    <p className={`text-sm md:text-[1em] pb-2 text-pretty ${addclass}`}>
      {children}
    </p>
  );
}
