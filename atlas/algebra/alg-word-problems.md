A mother is right now four times as old as her daughter. In twenty years she will be
only twice as old as the daughter is then. That is enough to pin both ages exactly —
no other pair of numbers fits. The hard part was never the arithmetic; it is turning
that sentence into something you can *solve*.

## Discovery

1. Everything in the puzzle is tied to one hidden number. Decide which single
   quantity, once you knew it, would let you compute all the others, and give it a
   letter. (The daughter's present age is a good candidate — why is it a better
   choice than, say, the mother's age in twenty years?)
2. With your letter chosen, write an expression for each *other* quantity the problem
   mentions: the mother's present age, the daughter's age in twenty years, and the
   mother's age in twenty years. Keep them all in terms of your one letter.
3. The sentence "she will be twice as old as the daughter is then" is an *assertion of
   equality* between two of your expressions. Locate the two expressions it compares
   and write the equation it demands.
4. Solve that equation by the inverse-operation method. Then do the step that most
   people skip: take your number back to the *original English sentences* — not to
   the equation — and check that "four times as old" and "twice as old in twenty
   years" both come out true. State the two ages the problem actually asked for.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

The technique is a fixed sequence — a **method for building the equation**, after
which solving is routine:

1. **Name the unknown.** Choose the single quantity that determines the rest, and
   assign it a variable. Write down, in words, exactly what the letter stands for
   (including units).
2. **Express every other quantity** the problem mentions as an expression in that one
   variable.
3. **Translate the asserted relationship into an equation.** Find the sentence that
   claims two quantities are equal (a total, a comparison, a "is," a rate balance) and
   set the two expressions equal.
4. **Solve** the equation for the variable.
5. **Interpret and check against the original words.** Convert the solved value back
   into the quantities the problem *asked for*, and verify it satisfies every stated
   condition in the problem's own language — not merely the equation you wrote, which
   may itself be mistranslated.

The same five steps drive age problems, mixture problems ("how much $30\%$ solution
to add"), consecutive-integer problems, distance–rate–time problems, and coin
problems; only the expressions in step 2 change.

### Proof

What must be established for a *method* is that, applied faithfully, it returns
exactly the numbers the problem describes — no valid answer missed, no invalid answer
admitted. Let the problem's conditions be a list of statements $C_1,\dots,C_k$ about
some quantities, all determined by one free quantity to which step 1 assigns the
variable $x$.

Step 2 writes each mentioned quantity as an expression $e_i(x)$; this is a faithful
naming precisely when, for the intended real-world reading, quantity $i$ equals
$e_i(x)$ for the value of $x$ in play. Step 3 selects the condition that asserts an
equality and renders it as $e_p(x) = e_q(x)$. A number $x_0$ makes this equation true
**iff** the quantities $e_p,e_q$ it encodes are actually equal at $x_0$ — that is the
meaning of a faithful translation — so the equation's solution set equals the set of
$x$ satisfying that condition. Step 4 finds that solution set exactly, by the
correctness of the [linear-equation method](alg-linear-equation-1var).

Two gaps remain, and step 5 closes both. First, a problem may impose *more* conditions
than the single translated equation (e.g. "ages are positive," or a second sentence);
substituting the candidate back into **every** original statement discards any $x_0$
that solves the equation but violates an unmodelled condition. Second, a mistranslation
in step 2 or 3 makes the equation encode the *wrong* condition; checking against the
**original words** rather than the derived equation is what detects this, because a
faithful answer must make the English true, and an unfaithful equation's solution will
not. Thus the surviving value(s) are exactly those satisfying all of
$C_1,\dots,C_k$. $\blacksquare$

### Worked Instance

Resolve the Hook. **Name:** let $d$ be the daughter's present age, in years.
**Express:** the mother is now $4d$; in twenty years the daughter is $d+20$ and the
mother is $4d+20$. **Translate:** "in twenty years the mother is twice the daughter"
becomes
$$4d + 20 = 2(d + 20).$$
**Solve:** expand the right side to $2d+40$, giving $4d+20 = 2d+40$; subtract $2d$
from both sides for $2d+20 = 40$; subtract $20$ for $2d = 20$; divide by $2$ for
$d = 10$. **Interpret and check against the words:** the daughter is $10$ and the
mother is $4d = 40$. Is the mother now four times the daughter? $40 = 4\cdot 10$, yes.
In twenty years they are $30$ and $60$; is $60$ twice $30$? Yes. Both English
sentences hold, so the daughter is $10$ and the mother is $40$.

### Pitfalls

- **Answer the question actually asked.** Solving gives $d=10$, but the problem wanted
  *both* ages; stopping at $d$ leaves the mother's $40$ unstated. Always translate the
  variable back into the requested quantities.
- **Watch the time frame (or the reference point).** "Twice as old as she *was*"
  points to a past age, "*will be*" to a future one; mixing present and shifted
  quantities in one comparison is the most common setup error.
- **Let the letter stand for a thing, and say which.** Writing $x$ with no note of
  what it measures invites using it as two different quantities midway through.
- **Check against the words, not the equation.** If step 3 was mistranslated, the
  equation will still "solve," and substituting into that same wrong equation will
  falsely confirm it. Only the original sentences are an independent test.
- **Discard answers the model allows but reality forbids.** A negative length, a
  fractional number of coins, or an age of $-3$ solves the algebra but not the
  problem; the check against the words removes it.

:::
:::

## Connections

This is where [solving a linear equation](alg-linear-equation-1var) earns its keep:
the mechanical solve is easy, but a situation described in words gives you nothing to
solve until you *manufacture* the equation. The disciplined habit — name, express,
translate, solve, check against the words — is the same craft that scales up when a
problem has two intertwined unknowns and you build a
[system of linear equations](alg-linear-systems-elem), one equation per stated
relationship. Recognition trigger: a paragraph of English ending in "how many / how
old / how much," with a relationship (a total, a comparison, a balance) you can pin to
a single letter.

## History

Translating a real situation into an equation is the original purpose of algebra, and the practice is as old as the subject. The Egyptian Rhind papyrus (around $1650$ BC) is essentially a collection of word problems about grain, bread, and shares, and Babylonian tablets pose questions about fields and inheritances. Diophantus's *Arithmetica* (around $250$ AD) is built from such problems, and al-Khwarizmi motivated his ninth-century algebra with questions of trade, inheritance, and land division, drawn from the practical demands of Islamic law and commerce. For most of history the difficulty lay in setting up the problem, since no symbolic language existed; the modern move of naming an unknown $x$ and writing an equation became routine only after Viète and Descartes. Word problems mattered, and still matter pedagogically, because they are where algebra meets the world — the skill of turning a described situation into solvable symbols.
