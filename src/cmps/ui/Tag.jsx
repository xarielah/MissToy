const Tag = ({ children, variant = 'ghost' }) => {
    return (
        <div className={`tag tag-${variant}`}>{children}</div>
    )
}

export default Tag;