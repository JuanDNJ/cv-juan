export default function LinkSkill({ data }) {
    return (
        <a
            target="_blank"
            href={data.href}
            title={data.name}
            key={data.id}
            className="hover:scale-110 active:scale-95 transition-transform duration-300"
        >
            {data.Component({
                fill:
                    (data.fill && data.fill) ||
                    (data.stroke && data.stroke) ||
                    "",
                height: "100%",
                width: "100%",
                src: data.href
            })}
        </a>
    )
}