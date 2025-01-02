import Tag from "../ui/Tag";

const ToyDetailsInformation = ({ toy }) => {
    return (
        <section className="toy-details-information">
            <h1>{toy.name}</h1>
            {toy.labels.length > 0 && <section className="toy-details-labels">
                {toy.labels.map(tag => <Tag variant="primary" key={tag}>{tag}</Tag>)}
            </section>}
        </section>
    )
}

export default ToyDetailsInformation;