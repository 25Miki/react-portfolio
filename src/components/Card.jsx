import './card.css'

const Card = ({children, classname, HandleClick}) => {
    return (
        <article className={'card ${className}'} onClick={HandleClick}>
            {children}
        </article>
    )
}

export default Card