Ten identical candies, four kids. With no rules there are $\binom{13}{3}=286$ ways to hand them out.
Insist every kid gets at least one and the count drops; cap every kid at four and it drops again — to
$68$. The bare stars-and-bars count is only the starting line; conditions reshape it, and two moves
handle almost all of them.

## Discovery

1. Count the nonnegative integer solutions of $x_1+x_2+x_3+x_4=10$ — the plain distribution of $10$
   identical candies into $4$ distinct kids. (This is stars and bars.)
2. Now demand each kid gets at least one: $x_i\ge1$. Substitute $y_i=x_i-1$. What equation do the
   $y_i$ satisfy, what range do they live in, and how many solutions does that give?
3. Generalize the substitution to arbitrary lower bounds $x_i\ge c_i$. After shifting each variable
   down by its floor, what single stars-and-bars count remains, in terms of $n=\sum x_i$, the $c_i$,
   and the number of boxes?
4. Upper bounds resist a clean substitution. To count solutions with every $x_i\le 4$, instead count
   the "bad" solutions where a *specific* $x_i\ge5$ by writing $x_i=z_i+5$. How would you assemble the
   final count from the all-solutions total and these bad sets — and what must you do about solutions
   that are bad in two variables at once?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

Distributing $n$ identical objects into $k$ distinct boxes is governed by stars and bars, then
adjusted for conditions:

- **No condition** (each $x_i\ge0$): the number of solutions of $x_1+\cdots+x_k=n$ is
  $\dbinom{n+k-1}{k-1}$.
- **Lower bounds** $x_i\ge c_i$: substitute $y_i=x_i-c_i\ge0$; the count becomes
  $\dbinom{(n-\sum c_i)+k-1}{k-1}$ (zero if $\sum c_i \gt n$).
- **Upper bounds** $x_i\le b_i$: subtract, by inclusion–exclusion, the solutions where one or more
  variables *exceed* their cap, each excess enforced by a shift $x_i=z_i+(b_i+1)$.

Distinct objects into distinct boxes with no cap is instead $k^n$ (each object chooses a box); this
node is about the *identical*-object regime where order inside a box is invisible.

### Proof

**Lower bounds are a bijection.** The map $(x_1,\dots,x_k)\mapsto(x_1-c_1,\dots,x_k-c_k)$ sends
solutions of $\sum x_i=n$ with $x_i\ge c_i$ bijectively to nonnegative solutions of
$\sum y_i=n-\sum c_i$ (its inverse adds the $c_i$ back). By stars and bars the target set has
$\binom{n-\sum c_i+k-1}{k-1}$ elements, so the source does too. $\blacksquare$

**Upper bounds by inclusion–exclusion.** Let $U$ be all nonnegative solutions of $\sum x_i=n$ and let
$B_i\subseteq U$ be those with $x_i\ge b_i+1$. The wanted set is $U\setminus\bigcup_i B_i$. For a set
$S$ of indices, $\bigcap_{i\in S}B_i$ is counted by shifting each $x_i$ ($i\in S$) down by $b_i+1$,
a bijection onto nonnegative solutions of $\sum x_i = n-\sum_{i\in S}(b_i+1)$, of which there are
$\binom{n-\sum_{i\in S}(b_i+1)+k-1}{k-1}$ (zero when the top is negative). Inclusion–exclusion gives
$$\#\{x:\ x_i\le b_i\}=\sum_{S\subseteq\{1,\dots,k\}}(-1)^{|S|}\binom{n-\sum_{i\in S}(b_i+1)+k-1}{k-1}.
\qquad\blacksquare$$

### Worked Instance

Ten candies, four kids, each between $0$ and $4$. Total solutions $U$: $\binom{10+3}{3}=\binom{13}{3}=286$.
Bad sets $B_i$ ($x_i\ge5$): shift by $5$, leaving $\sum=5$, so $\binom{5+3}{3}=\binom83=56$ each, and
there are $4$ of them: $4\cdot56=224$. Pairs $B_i\cap B_j$ ($x_i,x_j\ge5$): shift by $10$, leaving
$\sum=0$, one solution each, and $\binom42=6$ pairs: $6$. Triples need $\sum\ge15\gt10$, impossible.
So
$$286-224+6=68.$$
And "each kid at least one": shift down by $1$ each, $\sum y=6$, giving $\binom{6+3}{3}=\binom93=84$.

### Pitfalls

- **Lower bounds shift the total, not the box count.** After $y_i=x_i-c_i$ you solve
  $\sum y_i=n-\sum c_i$ into the *same* $k$ boxes; the "$k-1$" bars stay put.
- **Upper bounds are not a simple substitution.** You cannot cap by subtracting once; you must
  inclusion–exclude over which variables blow the cap, shifting by $b_i+1$ (not $b_i$).
- **Watch for negative tops.** A binomial $\binom{m}{k-1}$ with $m \lt k-1$ counts $0$ solutions;
  drop those terms rather than evaluating the symbol formally.
- **Identical vs. distinct objects.** Stars and bars is for *identical* objects into distinct boxes.
  Distinct objects into distinct boxes is $k^n$; do not mix the two models.

:::
:::

## Connections

This is stars and bars (`comb-stars-bars`) armed with two levers: substitution for floors and
inclusion–exclusion for ceilings. The upper-bound computation is the same alternating correction that
drives derangements and the sieve, so the technique bridges into inclusion–exclusion proper. Bounded
distributions also reappear as coefficient extraction in generating functions, where a capped box is
the factor $1+x+\cdots+x^{b}$. Recognition trigger: "identical items into labeled boxes with at-least
/ at-most rules" — shift for the floors, sieve for the ceilings.
