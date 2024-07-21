export default function LinkSkill({ data }) {
    return (
        <a
            target="_blank"
            href={data.href}
            title={data.name}
            key={data.id}
            className="hover:scale-110 hover:underline active:scale-95 transition-transform duration-300 flex items-center gap-4 max-w-52"
        >

            {data.Component({
                fill:
                    (data.fill && data.fill) ||
                    (data.stroke && data.stroke) ||
                    "",
                height: "34px",
                width: "34px",
                src: data.href
            })}
            {data.name === 'Html' ? data.name + '5' : data.name}
        </a>
    )
}