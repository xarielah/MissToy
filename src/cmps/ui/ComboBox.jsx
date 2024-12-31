import { useEffect, useState } from "react";

const ComboBox = ({ options, onValueChange, selected }) => {
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
                <input readOnly className="combobox-input" value={selected.join(', ')} />
            </div>
            <div className="combobox-options" style={{ display: open ? 'block' : 'none' }}>
                {options.map(option => (
                    <div key={option} onClick={() => handleClick(option)} className="combobox-option">
                        <input type="checkbox" checked={selected.includes(option)} readOnly />
                        {option}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ComboBox;