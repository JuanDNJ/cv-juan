export default function LinkSkill({ data }) {
  return (
    <a
      target="_blank"
      href={data.href}
      title={data.name}
      key={data.id}
      className="skill-link"
    >
      {data.Component({
        fill: (data.fill && data.fill) || (data.stroke && data.stroke) || "",
        height: "34px",
        width: "34px",
        src: data.href,
      })}
      <small>{data.name === "Html" ? data.name + "5" : data.name}</small>
    </a>
  );
}
