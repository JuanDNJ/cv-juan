export default function Text({ children, addclass }) {
  return (
    <p className={`text-sm md:text-lg py-2 text-pretty ${addclass}`}>
      {children}
    </p>
  );
}
