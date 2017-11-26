import test from 'ava';
import predictWinner from './predict-winner'

test('rock + paper » paper', t => {
	t.is(predictWinner(predictWinner.rock, predictWinner.paper), predictWinner.status.computer)
});

test('papper + paper » draw', t => {
	t.is(predictWinner(predictWinner.paper, predictWinner.paper), predictWinner.status.draw)
});

test('paper + scissors » scissors', t => {
	t.is(predictWinner(predictWinner.paper, predictWinner.scissors), predictWinner.status.computer)
});

test('scissors + paper » scissors', t => {
	t.is(predictWinner(predictWinner.scissors, predictWinner.paper), predictWinner.status.player)
});

test('paper + rock » paper', t => {
	t.is(predictWinner(predictWinner.paper, predictWinner.rock), predictWinner.status.player)
});