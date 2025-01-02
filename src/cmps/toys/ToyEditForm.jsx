import { useState } from "react";
import { labels } from "../../services/toy.service";
import ComboBox from "../ui/ComboBox";

const ToyEditForm = ({ toy: initialToy, onSubmit }) => {
    const [toy, setToy] = useState(initialToy)
    const [selectedLabels, setSelectedLabels] = useState(initialToy.labels)

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ ...toy, labels: selectedLabels, price: +toy.price })
    }

    const handleChange = (e) => {
        const field = e.target.name
        const value = e.target.value
        if (field === 'labels') {
            const newLabels = selectedLabels.includes(value) ? selectedLabels.filter(label => label !== value) : [...selectedLabels, value]
            setToy(toy => ({ ...toy, [field]: newLabels }))
            setSelectedLabels(newLabels)
        } else {
            setToy(toy => ({ ...toy, [e.target.name]: e.target.value }))
        }
    }

    return (
        <form className="toy-edit-form" onSubmit={handleSubmit}>
            <label>
                <span>Product Name <RedAstrix /></span>
                <input className="input" required name="name" type="text" placeholder="Enter toy name" value={toy.name} onChange={handleChange} />
            </label>
            <label>
                <span>Product Price <RedAstrix /></span>
                <input
                    required
                    className="input"
                    name="price"
                    type="number"
                    pattern="[0-9]+"
                    placeholder="Enter toy price"
                    value={toy.price}
                    onChange={(e) => {
                        if (e.target.validity.valid || e.target.validity.valueMissing) {
                            handleChange(e)
                        }
                    }}
                    onKeyDown={(e) => {
                        if (e.key === 'e') {
                            e.preventDefault();
                        }
                    }}
                />
            </label>
            <label>
                <span>Labels <RedAstrix /></span>
                <ComboBox className="input" onValueChange={e => handleChange({ target: { ...e.target, name: 'labels' } })} options={labels} selected={selectedLabels} />
            </label>
            <div>
                <label>
                    <input type="checkbox" checked={toy.inStock} onChange={e => setToy(toy => ({ ...toy, inStock: e.target.checked }))} />
                    In Stock?
                </label>
            </div>
            <button className="btn" type="submit">Save</button>
        </form>
    )
}

const RedAstrix = () => {
    return <span style={{ color: 'red' }}>*</span>
}

export default ToyEditForm;