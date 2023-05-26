import './card.css'

const Card = ({children, classname}) => {
    return (
        <article className={'card ${className}'}>
            {children}
        </article>
    )
}

export default Card