import { useEffect, useState } from "react";
import { labels } from "../../services/toy.service";
import ComboBox from "../ui/ComboBox";

const ToyFilterLabel = ({ onFilterChange }) => {
    const [pickedLabels, setPickedLabels] = useState([]);
    const [lastPicked, setLastPicked] = useState('');

    useEffect(() => {
        onFilterChange({ name: 'labels', value: pickedLabels });
    }, [pickedLabels])

    const handleLabelPick = (event) => {
        const label = event.target.value;
        setLastPicked(label);
        if (pickedLabels.includes(label)) {
            setPickedLabels(pickedLabels => pickedLabels.filter(pickedLabel => pickedLabel !== label));
        } else {
            setPickedLabels(pickedLabels => [...pickedLabels, label]);
        }
    }

    return (
        <label className="toy-filter-label">
            <span>Labels</span>
            <ComboBox options={labels} selected={pickedLabels} onValueChange={handleLabelPick} />
        </label>
    )
}

export default ToyFilterLabel;