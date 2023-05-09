import './card.css'

const Card = ({children, classname, onClick}) => {
    return (
        <article className={'card ${className}'} onClick={onClick}>
            {children}
        </article>
    )
}

export default Card