import { useState } from "react";
import { labels } from "../../services/toy.service";
import ComboBox from "../ui/ComboBox";

const ToyEditForm = ({ toy: initialToy, onSubmit }) => {
    const [toy, setToy] = useState(initialToy)
    const [selectedLabels] = useState(initialToy.labels)

    const handleChange = (e) => {
        console.log("🚀 ~ handleChange ~ e:", e)
        const field = e.target.name
        const value = e.target.value
        if (field === 'labels') {
            const newLabels = selectedLabels.includes(value) ? selectedLabels.filter(label => label !== value) : [...selectedLabels, value]
            setToy(toy => ({ ...toy, [field]: newLabels }))
        } else {
            setToy(toy => ({ ...toy, [e.target.name]: e.target.value }))
        }
    }

    return (
        <form className="toy-edit-form" onSubmit={onSubmit}>
            <input className="input" type="text" placeholder="Enter toy name" value={toy.name} onChange={e => toy.name = e.target.value} />
            <input className="input" type="number" placeholder="Enter toy price" value={toy.price} onChange={e => toy.price = e.target.value} />
            <ComboBox onValueChange={e => handleChange({ target: { ...e.target, name: 'labels' } })} options={labels} selected={selectedLabels} />
        </form>
    )
}

export default ToyEditForm;