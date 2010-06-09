// Divergence catamorphism library | Spencer Tipping <spencer@spencertipping.com>
// Licensed under the terms of the MIT source code license

// Catamorphisms.
// A catamorphism, roughly speaking, is a function that takes an A and a B and returns an A. That is, it somehow folds the B into the A to "collapse" its two parameters into one final value. The
// important thing about it is the recursion; when you think of it as a repeated process, then you have a function which consumes elements:

//   | [a, [b, c]] --> f (a, [b, c]) --> f (a, f (b, c))

// Similarly, an anamorphism produces elements (represented as arrays in JavaScript as an approximation to multiple-value return):

//   | f (x) --> [a, x']
//   | [a, f(x')] = [a, [b, x'']]
//   | ...

// If you flat_compose a catamorphism and an anamorphism, like this:

//   | some_catamorphism.flat_compose (some_anamorphism)

// You end up with what is referred to as a /hylomorphism/. The gratuitous complexity embodied in this jargon defies reason and betrays the inner elitism of the dark side of academia. :)

d.rebase (function () {
  d.functions ({array_left_anamorphism: predicate >$> ((this.fn(), predicate.fn()) |$> ((f, p) >$> (g >$> (x >$> (p(x) ? f(x) |$> (y >$> [y[0]] + g(y[1])) : []))).fix())),
               array_left_catamorphism:      last >$> (xs >$> xs.fold (this, last)).bind (this)});
}) ();