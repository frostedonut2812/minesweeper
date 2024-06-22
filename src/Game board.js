import Tile from "./tile";
import "./game_board.scss"
function GameBoard(){
    const Height = 10
    const Width = 10
    const Board = []
    const row = []
    for(let i = 0; i < Height; i++){
        row.push(<Tile></Tile>)
    }
    for(let i = 0; i < Width; i++){
        Board.push(<div key={i}>{row}</div>)
    }
    console.log(Board)
    return(<div className="board">{Board}</div>)



}
export default GameBoard;

