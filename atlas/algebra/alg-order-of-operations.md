Hand the string $2+3\times 4$ to a room of people and ask for the value. Some say $20$, some say
$14$. They are all doing arithmetic correctly — the disagreement is not about addition or
multiplication, it is about *which one happens first*. A pile of symbols is not yet a number until
everyone reads it the same way. So which reading wins, and why that one?

## Discovery

1. Compute $2+3\times 4$ two ways: once doing the addition before the multiplication, once doing the
   multiplication before the addition. Write down both numbers you get. (Do not yet decide which is
   "right.")
2. You want $2+3\times 4$ to name *one* number, the way $17$ does. Insert parentheses to force each
   of your two readings — write the fully-parenthesized string for the "$20$" reading and for the
   "$14$" reading. Notice that with parentheses there is no ambiguity at all; the trouble only
   appears when they are dropped.
3. Suppose you had to *always* write every parenthesis. Write out $3\times 4 + 5\times 6 + 7\times 8$
   with a parenthesis around each product. Now imagine an expression with fifteen such products
   added up. What practical problem is the fully-parenthesized style creating, and which single
   default reading — "do the multiplications first" or "do the additions first" — would let you
   erase the *most* parentheses in expressions like these?
4. Consider $2^3\times 4$. If you tried the rule "multiplication first," you would multiply $3\times
   4$ inside the exponent's neighborhood — but the $3$ is an *exponent*, tied to the $2$, not a
   standalone factor. Decide where powers must sit in the pecking order (before, between, or after
   the two arithmetic ranks) so that $2^3$ stays glued together, and test your decision on
   $2\times 3^2$: what value keeps the power attached to the $3$ alone?
5. Finally, $8\div 4\div 2$ and $8-4-2$: each uses one rank twice with no parentheses. Compute each
   both left-to-right and right-to-left. Do the two directions agree? If not, propose the tie-break
   that makes ordinary written arithmetic (like $8-4-2=2$) come out the way people expect.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

The **order of operations** is the agreed grammar for reading an unparenthesized expression as a
single number. Working from highest priority to lowest:

1. **Grouping symbols** — parentheses, brackets, and the implied grouping of a fraction bar or a
   radical — are evaluated first, innermost outward. They *override* everything below.
2. **Exponents** (powers, roots) next.
3. **Multiplication and division**, which share one rank.
4. **Addition and subtraction**, which share the lowest rank.

Within a shared rank, evaluate **left to right**. The common mnemonic **PEMDAS** (Parentheses,
Exponents, Multiplication/Division, Addition/Subtraction) encodes this, with the understanding that
M and D are one tier and A and S are one tier, resolved left to right.

This is a **convention**, not a theorem: nothing in arithmetic forces it. But it is the convention
that lets us write sums of products of powers — polynomials such as $2x^2+3x+5$ — with essentially
no parentheses at all, which is exactly why it was chosen.

### Proof

A convention has nothing to *prove* as true; what one can prove is that it is *well-posed* (it
assigns exactly one value to every expression) and that it *achieves its stated purpose* (it lets
polynomials be written parenthesis-free). Both are needed to justify adopting it.

*Well-posedness: every unparenthesized expression gets exactly one value.* Read the expression by
the ranked rules. First locate the lowest-rank operators (additions and subtractions) that are not
inside any grouping symbol; these are the last operations performed, and they split the string into
maximal chunks called **terms**. Each term contains only multiplications, divisions, exponents, and
groupings — no top-level $+$ or $-$. Within a term, the multiplications and divisions split it into
**factors**, each of which is a number, a variable, a power, or a parenthesized subexpression.
Grouping symbols are properly nested, so each parenthesized subexpression is a strictly shorter
expression of the same kind. This yields a finite parse: terms at the top, factors inside them,
powers and groups inside those, recursing into each group. At every level the "left to right" rule
picks a definite order among equal-rank operations, so no ambiguity remains. Because each operation
outputs one number from its inputs (by `alg-variable-expression`, evaluation is well-defined once
the order is fixed), evaluating the parse from the bottom up produces exactly one number. The
recursion terminates because each nested group is strictly shorter. Hence the convention assigns a
unique value.

*It achieves its purpose.* A polynomial is a sum of terms, each term a coefficient times a power of
the variable, e.g. $a x^k$. Under the ranking, addition sits below multiplication which sits below
exponentiation, so in $a x^{k}$ the power $x^{k}$ forms first, then multiplies $a$, and only then do
the terms add — precisely the intended meaning, with **no parenthesis required** around any term or
power. Had addition outranked multiplication, every product $ax^k$ would need its own parentheses
to avoid being torn apart by neighbouring $+$ signs, and a degree-$d$ polynomial would carry $d$
extra bracket pairs. The chosen ranking is exactly the one minimizing brackets for these
sum-of-products-of-powers forms, which dominate algebra. $\blacksquare$

### Worked Instance

Settle the Hook and stretch it. Read $2+3\times 4$ by the rules: the only top-level $+$ splits it
into terms $2$ and $3\times 4$; multiplication lives *inside* the second term and so happens first,
giving $12$; then the terms add: $2+12=14$. The value is $14$, and the "$20$" reading corresponds to
the *parenthesized* expression $(2+3)\times 4$, a different string.

A fuller example: evaluate $2+3\times 4^2-(1+1)^3\div 4$.
- Grouping first: $(1+1)=2$.
- Exponents next: $4^2=16$ and $2^3=8$.
- The string now reads $2+3\times 16-8\div 4$. Multiplication and division (one rank, left to
  right): $3\times 16=48$ and $8\div 4=2$.
- Now $2+48-2$. Addition and subtraction (one rank, left to right): $2+48=50$, then $50-2=48$.

So the value is $48$ — a single, unambiguous number, reached by the same ranked reading everyone
agrees on.

### Pitfalls

- **"PEMDAS" wrongly suggests multiplication beats division and addition beats subtraction.** They
  do not: M/D tie and A/S tie, each broken *left to right*. So $8\div 4\times 2 = (8\div 4)\times
  2=4$, not $8\div(4\times 2)=1$; and $10-3+2 = 9$, not $10-(3+2)=5$.
- **Subtraction and division are not associative, so direction matters.** $8-4-2=(8-4)-2=2$, never
  $8-(4-2)=6$; $16\div 4\div 2 = 2$, never $16\div(4\div 2)=8$. Read left to right within the rank.
- **A minus sign in front of a power binds after the power.** $-3^2 = -(3^2)=-9$, because
  exponentiation outranks the negation; you square first, then negate. Only $(-3)^2=9$ negates
  first, and that needs the parentheses.
- **Implicit multiplication has the same rank as explicit multiplication.** $2n$ does not outrank a
  written $\times$; in $8\div 2n$ the safest move is to restore brackets, because sloppy notation,
  not the rule, is the source of "viral" ambiguities. The convention resolves *written* precedence;
  it does not rescue genuinely ambiguous typography — add parentheses when in doubt.
- **The fraction bar groups.** $\dfrac{a+b}{c}$ means $(a+b)\div c$: the bar acts as invisible
  parentheses around the entire numerator and denominator, so it is *not* $a+\dfrac{b}{c}$.

:::
:::

## Connections

This is the grammar that makes `alg-variable-expression` unambiguous: an expression only names a
number once a reading order is fixed, and this is that order. It leans on `ari-exponent-laws` for
the meaning of the powers it ranks at the top. It unlocks `alg-distribution-factoring` (you cannot
safely expand $2(x+3)$ or collect like terms until you can parse where each term begins and ends)
and `alg-quadratic-intro` (the form $ax^2+bx+c$ is legible only because powers, then products, then
sums is the default). Recognition trigger: any time a written string of operations must become a
single number — or any time you are tempted to ask "which do I do first?" — you are invoking the
order of operations.

## History

Unlike most mathematical ideas, the order of operations has no single inventor; it is a convention that grew up with symbolic notation itself. As Viète and Descartes established letter-algebra in the late sixteenth and seventeenth centuries, the need to read expressions like $a + b \cdot c$ unambiguously became pressing, and the priority of multiplication over addition emerged as natural because it matches the distributive structure of arithmetic. The superscript notation for exponents, introduced by Descartes in $1637$, implicitly placed powers above multiplication. The explicit "rules" and mnemonics familiar from schoolrooms are a product of nineteenth- and twentieth-century textbook standardization, sharpened further when programming languages forced machines to parse expressions unambiguously. The convention matters not because nature demands it but because a shared reading of expressions is what lets mathematicians and computers communicate without parenthesizing everything.
