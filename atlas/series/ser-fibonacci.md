Pick any Fibonacci number, say $F_6 = 8$. Its neighbours are $F_5 = 5$ and $F_7 = 13$, and
$5\cdot 13 = 65 = 8^2 + 1$. Try $F_5 = 5$: $F_4 F_6 = 3\cdot 8 = 24 = 5^2 - 1$. The product of a
Fibonacci number's neighbours misses its square by exactly $1$, with the sign flipping each step.
What forces that razor-thin, alternating gap?

## Discovery

Let $F_0 = 0, F_1 = 1, F_{n} = F_{n-1} + F_{n-2}$ throughout.
1. Compute the running sums $F_1, F_1+F_2, F_1+F_2+F_3, \dots$ and compare each to a *single*
   Fibonacci number (shifted). Conjecture a closed form for $\sum_{k=1}^{n} F_k$.
2. To prove it, use the recurrence in reverse: $F_k = F_{k+2} - F_{k+1}$. Sum this over $k$ and
   watch it telescope.
3. Now the neighbour puzzle. Define $D_n = F_{n-1}F_{n+1} - F_n^2$. Compute $D_1, D_2, D_3, D_4$.
   What is the pattern?
4. Prove your $D_n$ pattern by finding how $D_{n+1}$ relates to $D_n$: substitute
   $F_{n+2} = F_{n+1} + F_n$ into $D_{n+1} = F_n F_{n+2} - F_{n+1}^2$ and simplify until you see
   $\pm D_n$.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

With $F_0 = 0$, $F_1 = 1$:
$$\sum_{k=1}^{n} F_k = F_{n+2} - 1 \quad\text{(sum identity)},$$
$$F_{n-1}F_{n+1} - F_n^2 = (-1)^n \quad\text{(Cassini's identity)},$$
$$F_{m+n} = F_m F_{n+1} + F_{m-1} F_n \quad\text{(addition / d'Ocagne-type identity)}.$$

### Proof

**Sum identity (telescoping).** From the recurrence, $F_k = F_{k+2} - F_{k+1}$. Summing over
$k = 1,\dots,n$, the right side telescopes:
$$\sum_{k=1}^n F_k = \sum_{k=1}^n (F_{k+2} - F_{k+1}) = F_{n+2} - F_2 = F_{n+2} - 1,$$
since $F_2 = 1$.

**Cassini (induction).** Let $D_n = F_{n-1}F_{n+1} - F_n^2$. Base: $D_1 = F_0 F_2 - F_1^2
= 0 - 1 = -1 = (-1)^1$. Step: using $F_{n+2} = F_{n+1} + F_n$,
$$D_{n+1} = F_n F_{n+2} - F_{n+1}^2 = F_n(F_{n+1} + F_n) - F_{n+1}^2
= F_n F_{n+1} + F_n^2 - F_{n+1}^2.$$
Now use $F_{n+1} = F_n + F_{n-1}$ to rewrite $F_{n+1}^2 = F_{n+1}(F_n + F_{n-1})
= F_n F_{n+1} + F_{n-1}F_{n+1}$. Substituting,
$$D_{n+1} = F_n F_{n+1} + F_n^2 - \bigl(F_n F_{n+1} + F_{n-1}F_{n+1}\bigr)
= F_n^2 - F_{n-1}F_{n+1} = -\bigl(F_{n-1}F_{n+1} - F_n^2\bigr) = -D_n.$$
Thus $D_{n+1} = -D_n$, and with $D_1 = -1$ we get $D_n = (-1)^n$.

**Addition identity (induction on $n$).** Fix $m$ and induct on $n$. For $n = 1$:
$F_{m+1} = F_m F_2 + F_{m-1}F_1 = F_m + F_{m-1}$, true. For $n=2$:
$F_{m+2} = F_m F_3 + F_{m-1}F_2 = 2F_m + F_{m-1} = F_{m+1} + F_m$, true. Assuming the identity for
$n-1$ and $n$, add the two instances:
$$F_{m+(n+1)} = F_{m+n} + F_{m+(n-1)} = F_m(F_{n+1}+F_n) + F_{m-1}(F_n + F_{n-1})
= F_m F_{n+2} + F_{m-1}F_{n+1},$$
which is the identity for $n+1$. By induction it holds for all $n\ge 1$. $\blacksquare$

### Worked Instance

Cassini at $n = 6$: $F_5 F_7 - F_6^2 = 5\cdot 13 - 8^2 = 65 - 64 = 1 = (-1)^6$, and at $n=5$:
$F_4 F_6 - F_5^2 = 3\cdot 8 - 25 = -1 = (-1)^5$ — exactly the alternating $\pm 1$ gap of the Hook.
The recurrence forces $D_{n+1} = -D_n$, so the gap can only ever be $\pm 1$ and must flip sign
each step. And $\sum_{k=1}^{6}F_k = 1+1+2+3+5+8 = 20 = F_8 - 1 = 21 - 1$.

### Pitfalls

- Indexing conventions differ ($F_0 = 0$ vs. $F_1 = 1$ as the start). Cassini's sign depends on
  it — with $F_0 = 0$ here, $F_{n-1}F_{n+1} - F_n^2 = (-1)^n$.
- Cassini is $F_{n-1}F_{n+1} - F_n^2$, an alternating $\pm1$ — not always $+1$. The sign is the
  whole point.
- In the sum identity the answer is $F_{n+2} - 1$ (shift by **two**, minus one), not $F_{n+1}$ or
  $F_n$.
- The addition identity mixes $F_m, F_{m-1}, F_n, F_{n+1}$; keep the index offsets straight or it
  collapses to nonsense.

:::
:::

## Connections

Prereqs: `ser-linear-recurrences` — Fibonacci is *the* model second-order recurrence, and Binet's
formula there is the analytic companion to these combinatorial identities. Telescoping (the sum
identity) and induction (Cassini) are the two proof engines. This unlocks
`comb-tilings-recurrences`, where $F_n$ counts domino tilings and the identities become bijective
statements. Recognition trigger: any additive two-back recurrence, or a problem where products of
"neighbouring" recurrence terms nearly equal a square. Frequent on the AIME and Putnam.
