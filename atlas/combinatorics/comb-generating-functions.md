You want the number of ways to make change for $n$ cents using pennies, nickels, and dimes.
Casework is a nightmare. But the single expression
$$\frac{1}{(1-x)(1-x^5)(1-x^{10})}$$
secretly stores *all* the answers at once — the coefficient of $x^n$ is exactly the number of ways
to make $n$ cents. A counting problem has become an algebra problem.

## Discovery

1. Recall the geometric series $\dfrac{1}{1-x} = 1 + x + x^2 + x^3 + \dots$ as a formal power
   series (from `ser-generating-functions`). Read each term $x^k$ as "use $k$ copies of some
   item." What choice does the whole series $\frac{1}{1-x}$ represent for a *single* item type
   available in unlimited supply?
2. Suppose you have two item types, one contributing a factor $(1 + x + x^2 + \cdots)$ and another
   contributing $(1 + x + x^2 + \cdots)$. Multiply the two series and look at the coefficient of
   $x^n$. Which counting problem does that coefficient solve, and why does multiplying the series
   correspond to combining the two independent choices?
3. Now restrict an item to nickels only: it can contribute $0, 5, 10, \dots$ cents. What single
   power series in $x$ encodes that item's allowed contributions, and what closed form does it
   sum to?
4. Assemble the change-making generating function as a **product** of one factor per coin type.
   Explain, using (2), why the coefficient of $x^n$ in the product counts the ways to make $n$
   cents.
5. Separately, expand $\dfrac{1}{(1-x)^k}$ and read off the coefficient of $x^n$. Which earlier
   counting result (identical items into $k$ boxes) does that coefficient reproduce?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

The **ordinary generating function** (OGF) of a counting sequence $a_0, a_1, a_2, \dots$ is the
formal power series $A(x) = \sum_{n\ge 0} a_n x^n$. Two core principles turn counting into algebra:
- **Product rule for OGFs.** If choices for two independent parts are encoded by $A(x)$ and $B(x)$
  (with $x^k$ tracking "total size $k$"), then $A(x)B(x)$ encodes the combined choice, and
  $[x^n]\,A(x)B(x) = \sum_{i} a_i\,b_{n-i}$ counts the ways to split size $n$ between the parts.
- **Dictionary.** A single unlimited item of size $s$ contributes the factor
  $\dfrac{1}{1-x^{s}} = 1 + x^{s} + x^{2s} + \cdots$; an item used *at most once* contributes
  $(1 + x^{s})$. In particular
  $$\frac{1}{(1-x)^k} = \sum_{n\ge 0}\binom{n+k-1}{n}x^n,$$
  recovering stars and bars as the coefficient extraction. The number of ways to make $n$ cents
  with pennies/nickels/dimes is $[x^n]\dfrac{1}{(1-x)(1-x^5)(1-x^{10})}$.

### Proof

**Product rule.** Let $A(x)=\sum_i a_i x^i$ count configurations of part one by size ($a_i$
configurations of size $i$) and $B(x)=\sum_j b_j x^j$ do the same for part two. A combined
configuration of total size $n$ is an *independent* choice of a size-$i$ part-one configuration and
a size-$(n-i)$ part-two configuration for some $0\le i\le n$; by the addition and multiplication
principles the number of these is $\sum_{i=0}^{n} a_i b_{n-i}$. By the definition of formal power
series multiplication, that is precisely $[x^n]\,A(x)B(x)$. Iterating over several independent
parts gives a product of their generating functions, and the coefficient of $x^n$ counts total-size-$n$
combined configurations.

**The identity $\frac{1}{(1-x)^k}=\sum_n\binom{n+k-1}{n}x^n$.** Write
$\frac{1}{(1-x)^k}=\big(\sum_{i\ge0}x^i\big)^k$, the product of $k$ copies of $\frac{1}{1-x}$. By
the product rule, $[x^n]$ counts the ways to choose exponents $e_1,\dots,e_k\ge0$ with
$e_1+\dots+e_k=n$ — one from each factor — which is the stars-and-bars count $\binom{n+k-1}{n}$.
Applying the product rule to the coin factors $\frac1{1-x},\frac1{1-x^5},\frac1{1-x^{10}}$, the
coefficient of $x^n$ counts triples (pennies, nickels, dimes) whose values sum to $n$, i.e. the
ways to make $n$ cents. $\blacksquare$

### Worked Instance

Make $12$ cents with pennies, nickels, dimes: extract $[x^{12}]\frac{1}{(1-x)(1-x^5)(1-x^{10})}$.
Enumerate dime count $d$, then nickel count $k$, pennies fill the rest:
$d=1$: remaining $2$ → $k=0$ ($1$ way); $d=0$: remaining $12$ → $k\in\{0,1,2\}$ ($3$ ways).
Total $[x^{12}] = 4$. So there are $4$ ways: $(12,0,0),\,(7,1,0),\,(2,2,0),\,(2,0,1)$ as
(pennies, nickels, dimes) — matching the generating-function coefficient.

### Pitfalls

- These are **formal** power series: $x$ is a bookkeeping marker, not a number, so questions of
  convergence do not arise. Do not plug in values expecting the coin count.
- Track **what the exponent means** (here, total cents). Using an unlimited item gives
  $\frac{1}{1-x^s}$; using it at most once gives $(1+x^s)$ — mixing these up changes the problem.
- The product rule needs the parts to be **independent**; if a constraint links two coin counts,
  you cannot just multiply their factors.
- Extracting $[x^n]$ still requires work (partial fractions, known expansions, or the
  $\frac{1}{(1-x)^k}$ dictionary). The generating function organizes the count; it does not
  evaluate itself.

:::
:::

## Connections

Prereqs: ordinary generating functions as formal series (`ser-generating-functions`) and the
binomial machinery (`comb-binomial-pascal`), including $(1-x)^{-k}$ via the generalized binomial
series. This viewpoint re-derives stars and bars (`comb-stars-bars`) as a coefficient, packages
structural recurrences (`comb-tilings-recurrences`) into rational functions, and cracks the
Catalan recurrence (`comb-catalan`) through a quadratic equation for its series. It is the concrete
face of the broader `meta-generating-function-mindset`. Recognition trigger: "count integer
solutions / distributions / partitions with per-item restrictions," especially when direct
casework explodes but each choice is independent.
