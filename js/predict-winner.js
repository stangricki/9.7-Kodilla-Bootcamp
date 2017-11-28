export default function predictWinner(player, cpu) {
  var order = [predictWinner.rock, predictWinner.paper, predictWinner.scissors]

  if (order[player] === order[cpu]) {
    return predictWinner.status.draw;
  }

  if (order[player] === (order[cpu + 1] || order[0])) {
    return predictWinner.status.player;
  } else {
    return predictWinner.status.computer;
  }
}

predictWinner.rock = 0
predictWinner.paper = 1
predictWinner.scissors = 2;
predictWinner.status = {
  draw: 0,
  player: 1,
  computer: 2
}