A cashier notices something. Take any number, add $5$, double the result, subtract $10$, then halve
it — and you always land back on the number you started with. Try $3$: $3\to 8\to 16\to 6\to 3$. Try
$100$: $100\to 105\to 210\to 200\to 100$. Fifty tries, fifty returns home. One line of writing could
prove all of them at once — but only if we had a way to write "any number" down.

## Discovery

1. Run the cashier's procedure on three starting numbers of your choice — say a small one, a large
   one, and $0$. Record each of the four steps and the final answer. What is the same about all
   three runs?
2. You cannot run the procedure on *every* number, one at a time — there are too many. Suppose you
   write a single letter, $n$, to stand in for whichever number you began with, and you promise
   nothing about $n$ except that it is a number. Carry $n$ through the four steps, writing what each
   step produces as a piece of arithmetic with the letter $n$ still in it. (Step one turns $n$ into
   "$n$ plus $5$.") What do you have after all four steps?
3. Your answer to step 2 is a recipe with a letter in it. Now substitute $n=3$ into that recipe:
   replace every $n$ by $3$ and do the arithmetic. Then substitute $n=100$. Compare with the runs
   you did by hand in step 1 — do the recipe's outputs match?
4. Here are two recipes: $2\cdot(n+1)$ and $2n+2$. Substitute three different values of $n$ into
   each. Do they ever disagree? Formulate carefully what it would take to be *sure* they never
   disagree, for *any* $n$ at all — not just the three you tried.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

A **variable** is a letter used as a placeholder for a number: it names an unspecified member of
some set of numbers, so that one line of writing can speak about all of them at once. An
**algebraic expression** is any legal combination of numbers, variables, and operations
($+,-,\times,\div$, powers), such as $2n+2$ or $\dfrac{x+5}{3}$. An expression is not a statement;
it is a *recipe* that produces a number once you supply values for its variables.

To **evaluate** (or **substitute into**) an expression, replace each variable by a chosen number and
carry out the arithmetic; the result is the **value** of the expression at that input. Two
expressions $E$ and $F$ in the same variables are called **(identically) equal**, written $E=F$,
when they produce the same value for *every* allowed choice of the variables — not merely for a few
sampled inputs. Thus $2(n+1)=2n+2$ is a claim about infinitely many numbers, compressed into one
line.

### Proof

The one thing needing proof is that substitution is *legitimate*: that replacing a variable by a
number in a valid expression yields a well-defined value, and that identically-equal expressions may
be swapped for each other wherever they appear. Both rest on the substitution principle behind
equality (see `prim-equality`): equals may replace equals.

*Substitution is well-defined.* An algebraic expression is built up in finitely many steps, each
combining already-built pieces by one arithmetic operation. Fix a number for each variable. At the
bottom level, every symbol is either a specific number (which already denotes a value) or a variable
(which, once a number is assigned to it, denotes that number). Proceed upward: whenever a piece is
formed as, say, $P + Q$ from subpieces $P$ and $Q$ that already denote definite numbers $p$ and $q$,
the piece denotes the definite number $p+q$, since addition assigns one output to the pair $(p,q)$.
The same holds for each operation used. As there are finitely many building steps, after the last
one the whole expression denotes a single definite number. So evaluation is unambiguous.

*Identical equality lets you substitute expressions.* Suppose $E=F$ identically, i.e. for every
choice of the variables the two evaluate to equal numbers. Let $G$ be any expression containing $E$
as a sub-piece, and let $G'$ be $G$ with that occurrence of $E$ replaced by $F$. Fix values for all
variables. Evaluating $G$ passes through the value $e$ of $E$; evaluating $G'$ passes identically
through the value $f$ of $F$; but $e=f$ by hypothesis, and equals may replace equals inside the
remaining arithmetic (the substitution primitive of `prim-equality`), so $G$ and $G'$ evaluate to
the same number. As the values were arbitrary, $G=G'$ identically. Hence identically-equal
expressions are interchangeable everywhere. $\blacksquare$

### Worked Instance

Resolve the Hook. Let $n$ be the starting number and carry it through the four steps as an
expression:
$$n \;\xrightarrow{+5}\; n+5 \;\xrightarrow{\times 2}\; 2(n+5) \;\xrightarrow{-10}\; 2(n+5)-10
\;\xrightarrow{\div 2}\; \frac{2(n+5)-10}{2}.$$
Now simplify the final recipe using the arithmetic laws. First $2(n+5)=2n+10$, so the numerator is
$2n+10-10 = 2n$, and halving gives $\dfrac{2n}{2}=n$. The whole procedure is the expression $n$
itself: it returns every starting number unchanged, which is exactly the pattern the cashier saw —
now proved for *all* numbers in one line, not checked case by case.

Evaluate to confirm: at $n=3$, the recipe reads $\frac{2(3+5)-10}{2}=\frac{16-10}{2}=3$; at
$n=100$, $\frac{2(105)-10}{2}=\frac{200}{2}=100$. Both return home, as the simplified expression $n$
guarantees.

### Pitfalls

- **An expression is a recipe, not an equation.** $2n+2$ has no "solution"; it is a machine awaiting
  an input. Only when two expressions are set equal, or one is set equal to a number, do you have
  something to *solve*.
- **Matching a few inputs is not identical equality.** $n^2$ and $2n$ agree at $n=0$ and $n=2$, yet
  they are not equal — they disagree at $n=1$ ($1\ne 2$). Sampling can *disprove* an identity but
  never *prove* one; a proof must cover every allowed value.
- **A variable holds one value at a time within a single evaluation.** If $x$ appears twice in an
  expression, both occurrences take the *same* number when you substitute; you may not use $3$ for
  one $x$ and $5$ for the other.
- **Implicit multiplication is still multiplication.** $2n$ means $2\times n$, and $ab$ means
  $a\times b$; the missing sign is a convention, not a different operation. But $23$ is the number
  twenty-three, not $2\times 3$ — juxtaposition means product only when a letter is involved.
- **Substitute the whole value, parentheses included.** Evaluating $-x^2$ at $x=-3$ is
  $-(-3)^2=-9$, not $(-3)^2=9$: replace $x$ by $(-3)$ and keep the surrounding structure intact.

:::
:::

## Connections

This is the doorway from arithmetic into algebra: a variable lets one statement stand for an entire
family of arithmetic facts, and an expression packages a computation before its inputs arrive. It
rests directly on `ari-addition` and `ari-multiplication` (the operations expressions are built
from) and on `prim-equality` (which licenses substitution and defines identical equality). It
unlocks `alg-order-of-operations` (the grammar that makes an expression unambiguous),
`alg-distribution-factoring` (rewriting expressions while preserving value),
`alg-linear-equation-1var` (setting expressions equal and solving), and `alg-function-intro` (an
expression with a named input becomes a function). Recognition trigger: whenever you catch yourself
saying "this works for any number" or "let $x$ be the unknown," you have reached for a variable.

## History

The idea of a letter standing for an unknown or a general quantity took a very long time to reach its modern form. Diophantus of Alexandria (around $250$ AD) used abbreviations for the unknown in his *Arithmetica*, a halfway "syncopated" algebra, while al-Khwarizmi's foundational ninth-century treatise was entirely rhetorical, spelling everything out in words. The decisive breakthrough came with François Viète, whose *In artem analyticem isagoge* ($1591$) used letters not just for unknowns but for known coefficients too, making it possible to state general methods symbolically. René Descartes, in *La Géométrie* ($1637$), fixed the conventions we still use — $x, y, z$ for unknowns, $a, b, c$ for constants, and exponent notation for powers. This symbolic revolution mattered because it turned algebra from a collection of verbal recipes into a manipulable language, the precondition for every general formula that followed.
