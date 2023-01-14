const TodoCard = ({children, todo}) => {
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure>
                <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
            </figure>
            <div className="card-body p-4">
                <h2 className="card-title">Shoes!</h2>
                <p>{todo.title}</p>
                {children}
            </div>
        </div>
    )
} 

export default TodoCard;