A single sheet of paper is thin, but fold it in half again and again and the thickness explodes:
$2, 4, 8, 16, 32, 64,\dots$ After just $10$ folds you have $1024$ layers. Multiplication piled a
fixed number onto itself; here we pile *multiplication itself*. How do we write "multiply $a$ by
itself $n$ times" compactly, and pin down what it means when $n$ is small?

## Discovery

1. Squaring took a number times itself once: $a^2 = a\cdot a$. Push it: write "$a$ times itself
   *three* times" as a product, and "$a$ times itself *four* times." What is varying as you go from
   three to four factors?
2. Suppose you already have the product of $n$ copies of $a$ and you want the product of $n+1$
   copies. What one operation turns the first into the second? Write it as a rule relating the two.
3. Run that rule *downward*. If "$n+1$ copies" $=$ "$n$ copies" $\times\,a$, then "$1$ copy" should
   be "$0$ copies" $\times\,a$. For the pattern to hold, what must "the product of $0$ copies of
   $a$" be? (Do not appeal to any outside rule — let the pattern dictate.)

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

For a number $a$ and a natural number $n$, the **$n$-th power** $a^n$ is the product of $n$ copies
of $a$:
$$a^n = \underbrace{a\cdot a\cdots a}_{n\ \text{factors}}.$$
Here $a$ is the **base** and $n$ is the **exponent** (or **power**). Made precise by recursion on
the exponent:
$$a^0 = 1, \qquad a^{n+1} = a^n\cdot a.$$
So $a^1 = a$, $a^2 = a\cdot a$ (the square), $a^3 = a\cdot a\cdot a$, and so on. The base case
$a^0=1$ is the **empty product**: multiplying no factors leaves the multiplicative identity
untouched. (For now we take $a\ne0$ when $n=0$; the case $0^0$ is discussed in the zero-exponent
node.)

### Proof

Being a definition, we show it is **well-posed** — $a^n$ is a single definite number for each
$n$ — and that it **extends** squaring seamlessly.

*Well-defined and closed.* Fix $a$. The recursion $a^0=1$, $a^{n+1}=a^n\cdot a$ determines $a^n$
for every $n$ by induction: $a^0=1$ is given, and if $a^n$ is a definite number then $a^{n+1}=
a^n\cdot a$ is one too (a product of numbers). So $a^n$ exists and is unique; if $a\in\NN$ then
$a^n\in\NN$ (products of naturals are naturals).

*Consistency with the informal "$n$ factors" and with squaring.* Unfolding the recursion,
$$a^{n} = a^{n-1}\cdot a = (a^{n-2}\cdot a)\cdot a = \cdots = \underbrace{a\cdot a\cdots a}_{n},$$
each step appending one factor, so the recursion really does produce $n$ copies of $a$
(associativity lets us drop brackets). At $n=2$ this is $a^2 = a^1\cdot a = (a^0\cdot a)\cdot a =
(1\cdot a)\cdot a = a\cdot a$, exactly the square. So higher exponents are the honest continuation
of squaring, and the base case $a^0=1$ is *forced* by demanding $a^{1}=a^0\cdot a$ equal $a$, which
needs $a^0=1$ (for $a\ne0$). $\blacksquare$

### Worked Instance

The folding paper: each fold doubles the layer count, so $n$ folds give $2^n$ layers —
$2^1=2$, $2^2=4$, $2^3=8$, up to $2^{10}=1024$, the thousand-plus layers of the Hook. Unfold the
recursion for $2^4$: $2^4 = 2^3\cdot2 = (2^2\cdot2)\cdot2 = ((2^1\cdot2)\cdot2)\cdot2 =
((2\cdot2)\cdot2)\cdot2 = 16$. And $a^0=1$ earns its keep: $2^0 = 1$ is "zero folds, one layer,"
the flat sheet you started with.

### Pitfalls

- **$a^n$ is repeated *multiplication*, not multiplication by $n$.** $2^5 = 32$, not $2\cdot5=10$.
  Confusing $a^n$ with $an$ is the signature beginner error.
- **Base vs. exponent are not interchangeable.** $2^3 = 8$ but $3^2 = 9$; the tower is not
  symmetric, so read which number is on top.
- **$a^0 = 1$ is the empty product, not "nothing."** Multiplying zero factors returns the identity
  $1$, just as adding zero addends returns $0$; it is forced by the recursion, not arbitrary.
- **$a^1 = a$, and don't skip it.** A lone base *is* a first power; every $a^n$ bottoms out through
  $a^1$ on the way to $a^0$.

:::
:::

## Connections

Generalizes squaring to any number of factors, resting on multiplication (repeated) and its
identity $1$. Its recursive shape is the launchpad for the exponent laws ($a^ma^n=a^{m+n}$, etc.),
and demanding those laws hold *forces* the meanings of $a^0$ and $a^{-n}$ downstream. Recognition
trigger: any "doubling/tripling repeatedly," "compound growth," "volume of a cube ($a^3$)," or
"$a$ multiplied by itself $n$ times" is an exponent.

## History

Powers beyond the square were understood geometrically by the Greeks as the "cube" ($x^3$, a solid) but higher powers had no natural figure and so were long viewed with unease. Medieval and Renaissance algebraists wrestled with naming and manipulating them: the French physician Nicolas Chuquet, in his *Triparty* (1484), used exponential notation and even negative and zero exponents, while others wrote out "cube," "square-square," and so on. The compact modern superscript $x^n$ was introduced by René Descartes in *La Géométrie* (1637), a notational leap that made the pattern of repeated multiplication visible at a glance. Descartes' notation, building on earlier hints from Chuquet and Nicole Oresme, freed mathematicians from clumsy verbal names and let exponents be treated as objects in their own right. This mattered because clean notation for $x^n$ was the precondition for the laws of exponents, for polynomials, and eventually for the extension to fractional and irrational powers.
