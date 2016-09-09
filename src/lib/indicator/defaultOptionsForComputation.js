"use strict";

export const BollingerBand = {
	windowSize: 20,
	// source: d => d.close, // "high", "low", "open", "close"
	sourcePath: "close",
	multiplier: 2,
	movingAverageType: "sma"
};

export const ATR = {
	windowSize: 14,
};

export const ForceIndex = {
	sourcePath: "close", // "high", "low", "open", "close"
};

export const ElderRay = {
	windowSize: 13,
	// source: d => d.close, // "high", "low", "open", "close"
	sourcePath: "close", // "high", "low", "open", "close"
	movingAverageType: "sma",
};

export const ElderImpulse = {
	sourcePath: "close", // "high", "low", "open", "close"
};

export const MACD = {
	fast: 12,
	slow: 26,
	signal: 9,
	// source: d => d.close, // "high", "low", "open", "close"
	sourcePath: "close",
};

export const FullStochasticOscillator = {
	windowSize: 12,
	kWindowSize: 3,
	dWindowSize: 3,
};

export const RSI = {
	windowSize: 14,
	// source: d => d.close, // "high", "low", "open", "close"
	sourcePath: "close", // "high", "low", "open", "close"
};

export const EMA = {
	// source: d => d.close, // "high", "low", "open", "close"
	sourcePath: "close",
	windowSize: 10,
};

export const SMA = {
	// source: d => d.close, // "high", "low", "open", "close"
	sourcePath: "close",
	windowSize: 10,
};

export const Kagi = {
	reversalType: "ATR", // "ATR", "FIXED"
	windowSize: 14,
	reversal: 2,
	sourcePath: "close", // "high", "low", "open", "close"
	dateAccessor: d => d.date,
	dateMutator: (d, date) => { d.date = date; },
	indexMutator: (d, idx) => { d.idx = idx; },
};

export const Renko = {
	reversalType: "ATR", // "ATR", "FIXED"
	windowSize: 14,
	fixedBrickSize: 2,
	source: d => ({ high: d.high, low: d.low }), // "close", "hi/lo"
	dateAccessor: d => d.date,
	dateMutator: (d, date) => { d.date = date; },
	indexMutator: (d, idx) => { d.idx = idx; },
	indexAccessor: d => d.idx,
};

export const PointAndFigure = {
	boxSize: 0.5,
	reversal: 3,
	source: d => ({ high: d.high, low: d.low }), // "close", "hi/lo"
	dateAccessor: d => d.date,
	dateMutator: (d, date) => { d.date = date; },
	indexMutator: (d, idx) => { d.idx = idx; },
	indexAccessor: d => d.idx,
};