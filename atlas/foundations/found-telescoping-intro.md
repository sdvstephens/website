Add up $\dfrac{1}{1\cdot 2} + \dfrac{1}{2\cdot 3} + \dfrac{1}{3\cdot 4} + \cdots + \dfrac{1}{99\cdot 100}$.
That's ninety-nine fractions. The answer is a clean $\dfrac{99}{100}$ — and you can get it without
adding a single pair. What's the trick that makes almost every term evaporate?

## Discovery

1. Look at one term, $\dfrac{1}{k(k+1)}$. Find numbers $A$ and $B$ so that
   $\dfrac{1}{k(k+1)} = \dfrac{A}{k} + \dfrac{B}{k+1}$. (Clear denominators and match.)
2. Rewrite the whole sum $\displaystyle\sum_{k=1}^{99}\dfrac{1}{k(k+1)}$ using the two-piece form
   from step 1. Write out the first three and last two terms in full, keeping the pieces unpaired.
3. Scan the written-out list for cancellation. Which pieces cancel against which neighbors? After
   the dust settles, which pieces have *no* partner and survive?
4. Now abstract it. Suppose a sum has the shape $\displaystyle\sum_{k=1}^{n}\bigl(a_k - a_{k+1}\bigr)$
   for some sequence $a_k$. Without computing individual terms, what does the whole sum equal, and
   why?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

If a summand is the difference of consecutive terms of some sequence $(a_k)$, the sum **telescopes**:
$$\sum_{k=1}^{n} \bigl(a_{k+1} - a_k\bigr) = a_{n+1} - a_1,$$
and equivalently $\displaystyle\sum_{k=1}^{n}\bigl(a_k - a_{k+1}\bigr) = a_1 - a_{n+1}$. Every
interior term is cancelled by its neighbor; only the two endpoints survive. The prototype is
$\dfrac{1}{k(k+1)} = \dfrac{1}{k} - \dfrac{1}{k+1}$, giving
$\displaystyle\sum_{k=1}^{n}\frac{1}{k(k+1)} = 1 - \frac{1}{n+1} = \frac{n}{n+1}.$

### Proof

Write out the sum term by term:
$$\sum_{k=1}^{n}(a_{k+1}-a_k) = (a_2 - a_1) + (a_3 - a_2) + (a_4 - a_3) + \cdots + (a_{n+1} - a_n).$$
Group by which $a_j$ appears. For each index $j$ with $2 \le j \le n$, the term $a_j$ shows up once
with a $+$ sign (from the summand $a_j - a_{j-1}$) and once with a $-$ sign (from the summand
$a_{j+1} - a_j$); these cancel. The only survivors are $-a_1$ (from the first summand, never
cancelled on the left) and $+a_{n+1}$ (from the last summand, never cancelled on the right). Hence
the total is $a_{n+1} - a_1$.

For the prototype, set $a_k = -\dfrac{1}{k}$, so $a_{k+1} - a_k = \dfrac{1}{k} - \dfrac{1}{k+1} = \dfrac{1}{k(k+1)}$.
Then $\displaystyle\sum_{k=1}^{n}\frac{1}{k(k+1)} = a_{n+1} - a_1 = -\frac{1}{n+1} + 1 = \frac{n}{n+1}.$
$\blacksquare$

### Worked Instance

The Hook is the case $n = 99$. Since $\dfrac{1}{k(k+1)} = \dfrac{1}{k} - \dfrac{1}{k+1}$,
$$\sum_{k=1}^{99}\frac{1}{k(k+1)} = \left(1 - \tfrac12\right) + \left(\tfrac12 - \tfrac13\right)
+ \cdots + \left(\tfrac{1}{99} - \tfrac{1}{100}\right) = 1 - \frac{1}{100} = \frac{99}{100}.$$
Ninety-nine additions collapse to a single subtraction, exactly as promised.

### Pitfalls

- Get the **direction of the difference** right. $\sum(a_{k+1}-a_k) = a_{n+1}-a_1$, but
  $\sum(a_k - a_{k+1}) = a_1 - a_{n+1}$ — the opposite sign. Mixing these up is the classic error.
- Watch the **index bounds**. The surviving endpoints are the very first lower term and the very
  last upper term; an off-by-one in the range shifts which endpoints remain.
- Telescoping needs the summand to *actually be* a difference of consecutive terms. If your split
  is $\dfrac{A}{k} + \dfrac{B}{k+2}$ (gap of $2$), terms don't cancel in a single chain — you get a
  telescoping with a two-term overhang at each end, not a clean $a_{n+1}-a_1$.
- Don't discard the endpoints. The whole point is that they, and only they, survive.

:::
:::

## Connections

Prereqs: Gauss pairing, another way to make a long sum collapse to a short expression. Telescoping
is the workhorse behind closed forms for many series; it unlocks the general telescoping-products
and partial-fractions techniques, and it's how sums of squares and cubes get proved cleanly.
Recognition trigger: a summand that factors so that it can be written as a *difference of consecutive
terms* — especially $\dfrac{1}{k(k+1)}$-shaped fractions or anything begging for partial fractions.

## History

A telescoping sum is one in which each term cancels part of the next, collapsing a long sum to just its endpoints. The technique was used effectively in the seventeenth century by Pietro Mengoli, who summed series such as $\sum \frac{1}{n(n+1)}$ by writing each term as a difference, and by Gottfried Wilhelm Leibniz in his early work on series in the 1670s, famously summing the reciprocals of the triangular numbers. The idea is the discrete counterpart of the fundamental theorem of calculus, where an integral is evaluated from an antiderivative at the endpoints. The vivid name "telescoping," evoking a collapsing spyglass, is a modern pedagogical coinage rather than a historical term. The method remains a first, powerful tool for evaluating sums in closed form. ANABASIS introduces it as a technique for collapsing sums via cancellation.
