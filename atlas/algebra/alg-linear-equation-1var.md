I am thinking of a number. Triple it, add $4$, and the result is $19$. You could
hunt for the number by guessing, but there is a way to walk *backward* from $19$
straight to the answer with no guessing at all — every step forced, no luck
required. What is the machine that runs a puzzle in reverse?

## Discovery

1. Take the statement "triple a number and add $4$ gives $19$" and write it as
   $3x+4 = 19$, reading $x$ as the unknown number. Test two guesses by
   substituting: does $x=2$ make the two sides equal? Does $x=6$? After two misses,
   decide whether blind guessing is a method you would want to repeat with harder
   numbers.
2. The left side was *built* from $x$ by two moves in order: multiply by $3$, then
   add $4$. You want to strip those moves off. Ask first: if two quantities are
   equal and you subtract the *same* amount from each, are they still equal? Using
   that, subtract $4$ from both sides of $3x+4=19$ and write the new equation you
   are left with.
3. Your new equation says some multiple of $x$ equals a plain number. Undo the
   remaining move — the multiplication by $3$ — by dividing *both* sides by $3$.
   Write the value of $x$ this forces, then substitute it back into the *original*
   $3x+4=19$ to confirm the two sides really match.
4. Now break the machine on purpose. For which $x$ is $0\cdot x + 4 = 4$ true — one
   value, several, or all of them? And for which $x$ is $0\cdot x + 4 = 7$ true?
   Say what goes wrong with "divide by the coefficient of $x$" the moment that
   coefficient is $0$.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

An **equation** in one unknown $x$ is a constraint: it names two expressions and
demands they be equal, and to **solve** it is to find every value of $x$ that makes
the demand true (its **solution set**). A **linear equation** in $x$ has the form
$$ax + b = c,$$
with $a,b,c$ fixed numbers. Two facts drive the solution:

- **Balance is preserved by equal operations.** If $x$ satisfies an equation, it
  still satisfies the equation obtained by adding the same number to both sides, or
  by multiplying both sides by the same **nonzero** number — and each such move is
  reversible, so no solutions are gained or lost.

Applying these to $ax+b=c$: subtract $b$ from both sides to get $ax = c-b$, then, **if
$a \neq 0$**, divide both sides by $a$ to get the *unique* solution
$$x = \frac{c-b}{a}.$$
If $a = 0$ the equation collapses to $b = c$: it holds for **every** $x$ when
$b=c$, and for **no** $x$ when $b \neq c$. Finally, a candidate is confirmed by
**substitution** into the original equation.

### Proof

Call two equations *equivalent* if they have the same solution set; we show the two
allowed moves produce equivalent equations, then run them.

*Adding a constant preserves the solution set.* Fix any number $d$ and compare
$L(x) = R(x)$ with $L(x)+d = R(x)+d$. If a number $x_0$ satisfies the first, then
$L(x_0)=R(x_0)$, and adding $d$ to two equal numbers yields equal numbers, so
$L(x_0)+d = R(x_0)+d$: $x_0$ satisfies the second. Conversely, if $x_0$ satisfies the
second, add $-d$ to both sides (again equals stay equal) to recover $L(x_0)=R(x_0)$.
So the two equations have identical solution sets. Taking $d=-b$ turns $ax+b=c$ into
the equivalent
$$ax = c-b.$$

*Multiplying by a nonzero constant preserves the solution set.* Fix $m \neq 0$ and
compare $L(x)=R(x)$ with $mL(x)=mR(x)$. If $L(x_0)=R(x_0)$ then multiplying two equal
numbers by $m$ gives equal numbers, so $mL(x_0)=mR(x_0)$. Conversely, since
$m \neq 0$ it has a reciprocal $m^{-1}$, and multiplying $mL(x_0)=mR(x_0)$ by $m^{-1}$
returns $L(x_0)=R(x_0)$. Identical solution sets again.

*The case $a \neq 0$.* Multiply $ax = c-b$ by $m = a^{-1}$ (legal since $a\neq 0$):
the equivalent equation is $x = (c-b)/a$. This last equation is satisfied by exactly
one number, namely $(c-b)/a$, and by no other. Since equivalence was preserved at
every step, that single number is the entire solution set of $ax+b=c$.

*The case $a = 0$.* Here the left side is $0\cdot x + b = b$ for every $x$, so the
equation reads $b = c$, a statement with no $x$ in it. If $b=c$ it is true regardless
of $x$, so the solution set is all numbers; if $b \neq c$ it is false regardless of
$x$, so the solution set is empty. In neither sub-case may one "divide by $a$," and
indeed $(c-b)/a$ is undefined — which is exactly why the division step carries the
hypothesis $a\neq 0$.

*Substitution check.* Because each move was an equivalence, plugging the candidate
into the *original* equation must produce a true numerical statement; if it does not,
an arithmetic slip occurred, not a failure of the method. $\blacksquare$

### Worked Instance

The Hook is $3x+4 = 19$, so $a=3,\ b=4,\ c=19$. Subtract $4$ from both sides:
$$3x = 15.$$
Divide both sides by $3$ (allowed, since $3 \neq 0$):
$$x = \frac{15}{3} = 5.$$
Check in the original: $3(5)+4 = 15+4 = 19$, matching the right side, so $x=5$ is the
number — triple it to $15$, add $4$, land on $19$. The general formula agrees:
$x=(c-b)/a = (19-4)/3 = 15/3 = 5$. No guessing was needed; each step was the forced
inverse of a step that built the left side.

### Pitfalls

- **Operate on *both* sides, fully.** Subtracting $4$ from only the left turns a true
  equation false. Whatever you do, do it to each side in its entirety.
- **A term "moved across" keeps its inverse sign.** Going from $3x+4=19$ to
  $3x = 19-4$ is subtraction of $4$ from both sides; writing $3x = 19+4$ is the
  classic sign slip.
- **Never divide by something that might be $0$.** If the coefficient of $x$ is a
  letter or expression that could vanish, the step $x=(c-b)/a$ is invalid there, and
  the $a=0$ case (all solutions, or none) must be handled separately.
- **Check in the *original* equation.** Substituting into a line you already
  transformed will "confirm" an error you made earlier; only the untouched original
  is a real test.
- **"Solution set," not "the solution."** Linear equations usually have one solution,
  but the $a=0$ cases show the answer can be *every* number or *no* number — report
  which.

:::
:::

## Connections

This is the first place the raw machinery of arithmetic — negation to undo addition,
division to undo multiplication — is aimed at a *goal*: isolating an unknown inside a
variable expression. The single idea "equals operated on equally stay equal" is the
engine, and it returns, sharpened, when order enters the picture: for
[linear inequalities](alg-linear-inequality-elem) the same moves are allowed except
that multiplying by a negative *reverses* the relation. Setting up the equation in the
first place, from a situation described in words, is the craft of
[word problems](alg-word-problems); allowing a second unknown opens
[two-variable linear equations](alg-linear-2var). Recognition trigger: any single
unknown wrapped in a chain of additions and multiplications, with a stated value on
the other side — peel the chain off in reverse.

## History

Solving for a single unknown is among the oldest mathematical tasks on record. The Egyptian Rhind papyrus (around $1650$ BC) tackles such "aha" (quantity) problems by the method of false position — guessing, then scaling the guess — and Babylonian scribes solved linear problems on clay tablets even earlier. The subject was given its name and systematic method by al-Khwarizmi, whose *al-Kitab al-mukhtasar fi hisab al-jabr wa'l-muqabala* (around $820$) taught the balancing operations, *al-jabr* and *al-muqabala*, that let one isolate the unknown. These were still verbal procedures; the compact symbolic form, where one simply performs the same operation on both sides, awaited the notation of Viète and Descartes. It mattered as the simplest case of the central algebraic act — undoing operations to reveal an unknown — and as the model on which every harder equation-solving technique is patterned.
