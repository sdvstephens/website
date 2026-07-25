What is the last digit of $7^{100}$? The powers of $7$ end in $7, 9, 3, 1, 7, 9, 3, 1, \dots$ — a
loop of length four that never breaks. If you know the loop, you can name the last digit of a power
with a hundred digits without ever writing it out. Why do the last digits of successive powers march
in a repeating cycle?

## Discovery

1. In base $10$, how do you read the units digit of a number $n$ straight off its expansion, and
   which multiple of $10$ must you subtract from $n$ to be left with just that digit? Phrase "the
   units digit of $n$" as a statement about $n$ and $10$.
2. Compute the units digits of $7^1, 7^2, 7^3, 7^4, 7^5$. To get the units digit of $7^{k+1}$ from
   $7^k$, do you need the whole value of $7^k$, or only its units digit? Explain, using how the last
   digit of a product depends on its factors.
3. Look at the list of units digits from step 2 — does it repeat, and after how many steps? Call
   that length $L$. Now, to pin down the units digit of $7^{100}$, which small exponent lands at the
   same spot in the cycle (reduce $100$ using $L$)?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

The units digit of a natural number $n$ is $n \bmod 10$, i.e. the remainder $d_0$ with
$n = 10q + d_0$ and $0 \le d_0 \le 9$. The units digit of a product depends **only** on the units
digits of the factors. Consequently the units digits of $n^1, n^2, n^3, \dots$ are **eventually
periodic**, and in fact purely periodic with a period dividing $4$. For example the cycles in base
$10$ are: $2\!:(2,4,8,6)$, $3\!:(3,9,7,1)$, $7\!:(7,9,3,1)$, $8\!:(8,4,2,6)$ of length $4$;
$4\!:(4,6)$, $9\!:(9,1)$ of length $2$; and $0,1,5,6$ each fixed.

### Proof

*Units digit is the remainder.* From the base-$10$ expansion $n = \sum_i d_i 10^i = d_0 + 10\cdot
(\text{rest})$, so $n - d_0 = 10\cdot(\text{rest})$ is a multiple of $10$ with $0 \le d_0 \le 9$;
thus $d_0$ is the remainder of $n$ modulo $10$ (`nt-base-representation`).

*Product depends only on units digits.* Let $n = 10q + d$ and $m = 10q' + e$ with $d, e$ the units
digits. Then
$$nm = 10\,(10 q q' + q e + q' d) + de,$$
so $nm - de = 10\cdot(\text{integer})$ is a multiple of $10$: by the previous paragraph $nm$ and
$de$ have the *same* units digit (`nt-divisibility-elem` — a difference divisible by $10$ leaves the
last digit unchanged). Hence the last digit of a product is the last digit of the product of the
last digits.

*Powers cycle.* Define $f(d) = (\text{units digit of } d\cdot n)$, a function from the ten digits
$\{0,\dots,9\}$ to itself. By the product rule, the units digit of $n^{k+1}$ is $f$ applied to the
units digit of $n^{k}$. Iterating a function on a finite $10$-element set must eventually revisit a
value; from the first repeat onward the sequence loops, so the units digits are eventually periodic.
Direct computation of each starting digit gives the cycles listed above; every cycle length divides
$4$. $\blacksquare$

### Worked Instance

Resolve the Hook. The units digits of powers of $7$ cycle as $7, 9, 3, 1$ with length $L = 4$
(indeed $7^4$ ends in $1$, after which it restarts). Since $100 = 4\cdot 25$ is a multiple of $4$,
the exponent $100$ lands where $7^4$ does — units digit $\mathbf{1}$. Another: $2^{2024}$. Powers of
$2$ end in $2, 4, 8, 6$ (length $4$); $2024 = 4\cdot 506$ is a multiple of $4$, so $2^{2024}$ ends
where $2^4 = 16$ does — units digit $\mathbf{6}$.

### Pitfalls

- **Mind the cycle indexing.** With a length-$4$ cycle, an exponent that is a multiple of $4$ lands
  on the *fourth* (last) entry, not the first. Off-by-one here is the standard error.
- **The cycle depends on the base's units digit.** Only the last digit of the *base* matters, and
  different last digits cycle differently ($2$ has period $4$, $6$ is constant, $5$ is constant).
- **Only the units digit carries forward.** You never need the full power — just feed the previous
  last digit through the "multiply and take last digit" step.
- **This is a base-$10$ phenomenon.** "Units digit" means remainder mod $10$; in another base you
  would track the remainder mod that base instead.

:::
:::

## Connections

Units digits are base representation (`nt-base-representation`) read at the ones place, and the
"difference divisible by $10$" reasoning is straight divisibility (`nt-divisibility-elem`). This is
the concrete, base-$10$ shadow of a deeper fact: last digits *are* residues mod $10$, cycles *are*
the multiplicative order, and the whole picture is systematized by congruences and power cycles at
the competition level (`nt-mod-arithmetic`, `nt-power-cycles`). Recognition trigger: "last digit,"
"units digit," or "what does $\dots$ end in" — build the short cycle and reduce the exponent.

## History

Watching the last digit of a number, and of its powers, cycle predictably is an ancient observation that anticipates modular arithmetic by centuries. Merchants and astronomers used the pattern for quick checks long before it had a theory, since the units digit is just the remainder on division by $10$. The systematic explanation arrived with Carl Friedrich Gauss, whose *Disquisitiones Arithmeticae* ($1801$) introduced congruences and made "the last digit" simply the value modulo $10$. From that vantage the periodicity of units digits — powers of $2$ cycling $2,4,8,6$, and so on — is an instance of the order of an element, connected to Fermat's and Euler's theorems on powers in modular arithmetic. It mattered pedagogically as an accessible first glimpse of cyclic structure, and practically in casting-out checks and any computation where only a final digit is wanted.
