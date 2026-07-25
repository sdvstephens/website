The greatest common divisor of $1{,}071$ and $462$ — try to find it by listing divisors and you will be there a while. Euclid found it in three lines, over two thousand years ago, using nothing but remainders. What makes replacing a hard pair by an easier one keep the answer the same?

## Discovery

1. Write $\gcd(a,b)$ for the largest positive integer dividing both $a$ and $b$. Take $a = 1071$, $b = 462$. Divide $a$ by $b$ with remainder: $1071 = 462 q + r$. Find $q$ and $r$.
2. Now the key claim to *investigate*, not assume: is a common divisor of $1071$ and $462$ automatically a divisor of that remainder $r = 1071 - 462q$? Pick any $d$ dividing both $1071$ and $462$ and check whether $d \mid r$. Conversely, if $d \mid 462$ and $d \mid r$, must $d \mid 1071$?
3. If the set of common divisors of $(1071, 462)$ is *exactly* the set of common divisors of $(462, r)$, what does that say about $\gcd(1071, 462)$ versus $\gcd(462, r)$?
4. Repeat the step: replace $(462, r)$ by $(r, r')$ where $r'$ is the remainder of $462 \div r$, and keep going. The remainders strictly shrink and stay $\ge 0$ — so the process must stop. What is the state of the pair when it stops, and how do you read off the gcd from it?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Euclidean algorithm.** For integers $a, b$ with $b \ne 0$, if $a = bq + r$ (division algorithm, $0 \le r \lt |b|$), then
$$\gcd(a, b) = \gcd(b, r) = \gcd(b, a \bmod b).$$
Iterating this replacement, the remainders strictly decrease and reach $0$ in finitely many steps; the **last nonzero remainder** is $\gcd(a,b)$. (Convention: $\gcd(n, 0) = |n|$.) The algorithm computes the gcd without factoring either number.

### Proof

**The reduction $\gcd(a,b) = \gcd(b,r)$.** Let $a = bq + r$. We show the pairs $(a,b)$ and $(b,r)$ have *exactly the same set of common divisors*; then their greatest common divisors, being the largest elements of identical sets, are equal.

Suppose $d \mid a$ and $d \mid b$. Since $r = a - bq$ is an integer combination of $a$ and $b$, and divisibility is preserved under such combinations ($d\mid a, d\mid b \Rightarrow d \mid a - bq$), we get $d \mid r$. So $d$ is a common divisor of $(b, r)$.

Conversely suppose $d \mid b$ and $d \mid r$. Since $a = bq + r$ is an integer combination of $b$ and $r$, we get $d \mid a$. So $d$ is a common divisor of $(a, b)$.

Thus $\{$common divisors of $(a,b)\} = \{$common divisors of $(b,r)\}$, and in particular the greatest of each coincide: $\gcd(a,b) = \gcd(b,r)$.

**Termination and correctness.** Starting from $(a,b)$ and repeatedly applying $(x,y) \mapsto (y,\, x \bmod y)$, the second coordinate is a remainder, so it strictly decreases: $|b| \gt r \gt r' \gt \cdots \ge 0$. A strictly decreasing sequence of nonnegative integers is finite, so after finitely many steps the remainder becomes $0$; the pair is then $(g, 0)$ for some $g \ge 0$. By the reduction, $\gcd(a,b)$ has been preserved at every step, so $\gcd(a,b) = \gcd(g, 0) = g$, the last nonzero remainder produced. $\blacksquare$

### Worked Instance

Compute $\gcd(1071, 462)$.
$$1071 = 462\cdot 2 + 147,$$
$$462 = 147\cdot 3 + 21,$$
$$147 = 21\cdot 7 + 0.$$
The last nonzero remainder is $21$, so $\gcd(1071, 462) = 21$. Three divisions, no factoring — exactly the speed the Hook promised. Check: $1071 = 21\cdot 51$ and $462 = 21\cdot 22$, and $\gcd(51,22)=1$, confirming $21$ is the full common factor.

### Pitfalls

- The gcd is the *last nonzero* remainder, not the last remainder (which is $0$). Reading off $0$ is the classic slip.
- Order does not matter at the start: $\gcd(a,b) = \gcd(b,a)$, and the first division sorts the larger into place automatically (if $a \lt b$, the first step just swaps them).
- Convention $\gcd(n,0) = |n|$: division by zero is not performed; a $0$ second coordinate is the stopping state, not a step.
- Each step's remainder must satisfy $0 \le r \lt |b|$ (from the division algorithm); using a negative or too-large remainder breaks the strict decrease.

:::
:::

## Connections

Prereqs: the division algorithm, whose remainder step is the algorithm's only move. Euclid's method is the gateway to Bézout's identity (`nt-bezout`, run the steps backwards to write $\gcd$ as $ax+by$), to modular inverses (`nt-modular-inverses`), and it underlies the Fundamental Theorem of Arithmetic (`found-fta`). Recognition trigger: any gcd to compute, any "are these coprime?" question, or any need to solve $ax + by = c$ — reach for Euclid before factoring.

## History

The Euclidean algorithm for the greatest common divisor is among the oldest algorithms still in use, appearing in Book VII of Euclid's Elements (c. 300 BC) for numbers and Book X for geometric magnitudes. It computes the gcd by repeatedly replacing the larger number with its remainder on division by the smaller, terminating quickly. The method may predate Euclid, possibly going back to earlier Greek mathematicians, and equivalent procedures appear in ancient Chinese and Indian mathematics. Its efficiency and its link to continued fractions made it foundational for number theory, and Gabriel Lamé's 1844 analysis of its running time is an early result in computational complexity. The algorithm also proves that the gcd is a linear combination of the two numbers, known as Bézout's identity. ANABASIS presents it as the canonical way to compute gcds.
