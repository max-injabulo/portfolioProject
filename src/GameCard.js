function GameCard(props) {

    return (
        <div className="bg-light border p-4 m-2">
          <h4>{props.game.name}</h4>
          <p>{props.game.category}</p>
          <p>{props.game.rating}</p>
        </div>
    )
}

export default GameCard