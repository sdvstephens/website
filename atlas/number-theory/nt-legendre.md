$100!$ is a number with $158$ digits. Without computing it, what is the largest power of $2$
that divides it? The answer is $2^{97}$ — and you can get there by counting, not multiplying.

## Discovery

1. Among $1,\dots,100$, how many are divisible by $2$? Each contributes at least one factor of
   $2$ to $100!$.
2. But $4 = 2^2$ contributes a *second* factor of $2$, which step 1 missed. How many multiples
   of $4$ are in $1,\dots,100$?
3. Likewise $8$ contributes a third factor. Multiples of $8$? Of $16$? Of $32$? Of $64$?
4. Add up all these counts. A number like $8$ is a multiple of $2$, $4$, and $8$, so it lands in
   three of your rows at once. Is that triple-counting an error you must correct for — or is it
   exactly what you want? Decide before trusting the total.
5. Generalize: for a prime $p$, write the exponent of $p$ in $n!$ as a single sum.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

For a prime $p$, the exponent of $p$ in the factorization of $n!$ is
$$v_p(n!) = \sum_{k\ge 1} \left\lfloor \frac{n}{p^k} \right\rfloor$$
(a finite sum, since $\lfloor n/p^k \rfloor = 0$ once $p^k > n$). Also called de Polignac's
formula.

### Proof

Count the total number of factors of $p$ among $1,\dots,n$. A given $m$ in that range
contributes exactly $v_p(m)$ factors of $p$. Group the count by "how many": the number of $m$
with at least one factor of $p$ is $\lfloor n/p \rfloor$; with at least two is
$\lfloor n/p^2 \rfloor$; and so on. Each $m$ is counted once for each factor of $p$ it actually
has (an $m$ with $v_p(m) = j$ appears in exactly the first $j$ rows), so summing the row counts
gives $\sum_m v_p(m) = v_p(n!)$. $\blacksquare$

### Worked Instance

$$v_2(100!) = \left\lfloor\tfrac{100}{2}\right\rfloor + \left\lfloor\tfrac{100}{4}\right\rfloor
+ \left\lfloor\tfrac{100}{8}\right\rfloor + \left\lfloor\tfrac{100}{16}\right\rfloor
+ \left\lfloor\tfrac{100}{32}\right\rfloor + \left\lfloor\tfrac{100}{64}\right\rfloor
= 50 + 25 + 12 + 6 + 3 + 1 = 97.$$

### Pitfalls

- It's a sum over powers $p^k$, not a single $\lfloor n/p \rfloor$.
- Do NOT stop after one term; continue until $p^k > n$.
- Trailing zeros of $n!$ in base $10$ equal $\min(v_2, v_5) = v_5$ (since $2$s are always more
  plentiful).

:::
:::

## Connections

Prereqs: floor function, unique factorization. Unlocks Kummer's theorem (the number of carries
when adding in base $p$) and any "$n!$ divisible by / trailing zeros" problem. Recognition
trigger: any question about primes dividing a factorial or binomial coefficient. Appears on the
Putnam and constantly on the AMC/AIME.
