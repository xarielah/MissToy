import { useEffect, useState } from "react";

const ComboBox = ({ options, onValueChange, selected, className }) => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (open) {
            document.addEventListener('click', toggleOpen);
            document.addEventListener('keydown', handleEscape);
        }
        return () => {
            document.removeEventListener('click', toggleOpen);
            document.removeEventListener('keydown', handleEscape);
        };
    }, [open])

    const handleEscape = (e) => {
        if (e.key === 'Escape') {
            setOpen(false);
        }
    }

    const toggleOpen = (e) => {
        e.stopPropagation();
        setOpen(open => !open);
    }

    const handleClick = (value) => {
        onValueChange({ target: { value: value } });
    }

    return (
        <div className="combobox-container">
            <div className="combobox" onClick={toggleOpen}>
                <input readOnly className={"combobox-input" + (className ? " " + className : "")} value={selected.join(', ')} />
            </div>
            <div className="combobox-options" style={{ display: open ? 'block' : 'none' }}>
                {options.map(option => (
                    <div key={option} onClick={() => handleClick(option)} className={"combobox-option" + (className ? " " + className : "")}>
                        <input type="checkbox" onChange={(e) => { e.stopPropagation(); handleClick(option) }} checked={selected.includes(option)} />
                        {option}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ComboBox;