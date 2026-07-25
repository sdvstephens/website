Add the odd numbers in order and watch the running totals: $1$, then $1+3 = 4$, then $1+3+5 = 9$, then $1+3+5+7 = 16$. Squares, every time. Does this really continue forever, or does it break at some point?

## Discovery

1. Compute the running sums of odds a few more steps: $1+3+5+7+9$ and $1+3+5+7+9+11$. Write each result and, beside it, note which perfect square it equals. What is the pattern relating the *number of terms* to the square?
2. To *prove* it, first write the $n$-th odd number in closed form. The odds are $1, 3, 5, 7, \dots$; the $k$-th one is $2k - 1$. Check: does $k = 1$ give $1$, and $k = 4$ give $7$?
3. Now sum $\sum_{k=1}^{n} (2k - 1)$ by splitting it into $2\sum_{k=1}^{n} k \;-\; \sum_{k=1}^{n} 1$. You already know $\sum k = \tfrac{n(n+1)}{2}$ from Gauss pairing, and $\sum_{k=1}^{n} 1 = n$. Substitute and simplify. What do you get?
4. For a *visual* proof: picture an $n \times n$ square of dots built up in L-shaped layers (gnomons). The first layer (a single corner dot) has $1$ dot; the next L wrapping it has $3$; the next $5$. How many dots does the $k$-th L-shaped layer add, and why does stacking $n$ of them fill an $n \times n$ square?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

For every positive integer $n$, the sum of the first $n$ odd numbers is a perfect square:
$$1 + 3 + 5 + \cdots + (2n - 1) = \sum_{k=1}^{n} (2k - 1) = n^2.$$
Equivalently, the odd numbers are exactly the successive differences of the squares: $(k)^2 - (k-1)^2 = 2k - 1$.

### Proof

**Algebraic.** The $k$-th odd number is $2k - 1$. Sum from $k = 1$ to $n$ and split the sum:
$$\sum_{k=1}^{n} (2k - 1) = 2\sum_{k=1}^{n} k - \sum_{k=1}^{n} 1 = 2\cdot \frac{n(n+1)}{2} - n = n(n+1) - n = n^2,$$
using Gauss's formula $\sum_{k=1}^n k = \tfrac{n(n+1)}{2}$ and $\sum_{k=1}^n 1 = n$. Hence the total is $n^2$.

**Visual / telescoping.** Note $(k)^2 - (k-1)^2 = 2k - 1$, so each odd number is the gap between consecutive squares. Summing these gaps telescopes:
$$\sum_{k=1}^{n} (2k-1) = \sum_{k=1}^{n} \big(k^2 - (k-1)^2\big) = n^2 - 0^2 = n^2,$$
the interior terms cancelling in pairs. Geometrically this is the L-shaped-layer ("gnomon") picture: an $n\times n$ dot square is built from $n$ nested L's, the $k$-th L adding $2k - 1$ dots (a row of $k$ plus a column of $k$ minus the shared corner, $k + k - 1 = 2k-1$); stacking all $n$ fills the square, so the odd-number total is $n^2$. $\blacksquare$

### Worked Instance

Take $n = 4$: $1 + 3 + 5 + 7 = 16 = 4^2$. Pushing to $n = 6$ to test the Hook's "forever": $1+3+5+7+9+11 = 36 = 6^2$. The pattern holds because each new odd number $2n - 1$ is precisely the difference $n^2 - (n-1)^2$, so adding it upgrades the running square $(n-1)^2$ to $n^2$. It never breaks. As a sanity check on the closed form, $n = 100$ gives $1 + 3 + \cdots + 199 = 100^2 = 10{,}000$.

### Pitfalls

- The last term is $2n - 1$, not $2n + 1$ or $n$. For $n$ terms the largest odd number is $2n - 1$ (e.g. $n = 4 \Rightarrow$ last term $7$).
- The result counts *how many odds*, not how large: it is $n^2$ where $n$ is the number of terms. Summing odds up to $199$ gives $100^2$ because there are $100$ odds, not $199^2$.
- Do not confuse with $\sum k = \tfrac{n(n+1)}{2}$ (all integers) — this is the odds-only sum, which is cleaner: exactly $n^2$.
- The telescoping identity is $k^2 - (k-1)^2 = 2k-1$; getting the index shifted gives $2k+1$ and an off-by-one.

:::
:::

## Connections

Prereqs: Gauss's pairing (supplies $\sum k$, used in the algebraic proof). This identity is a first taste of telescoping (differences of squares canceling) and of *figurate* reasoning with dot pictures. It launches the sums of squares and cubes (`ser-sum-squares-cubes`), where the same "difference of consecutive powers" trick reappears. Recognition trigger: consecutive odd numbers, or a running total that "looks like squares" — suspect $n^2$ and prove it by telescoping $k^2 - (k-1)^2$.

## History

The fact that the sum of the first $n$ odd numbers equals $n^2$ was known to the Pythagoreans, who saw it geometrically: adding an L-shaped "gnomon" of $2k-1$ dots to a $k\times k$ square produces the next square. This appears in the work reported by Nicomachus of Gerasa (c. 100 AD) and in the broader Greek theory of figurate numbers. The identity is one of the earliest examples of a pattern later proved by what we would now call mathematical induction. Its visual, almost tactile proof made it a favorite for illustrating how arithmetic and geometry illuminate each other. ANABASIS presents it both as a summation identity and as a gateway to inductive proof.
