$12$ and $18$ share the divisors $1, 2, 3, 6$, and the biggest of them, $6$, is their **greatest
common divisor**. Two numbers, one shared largest factor. Strip that factor out — $12/6 = 2$,
$18/6 = 3$ — and the leftovers $2$ and $3$ share nothing but $1$. Is that emptiness an accident, or
does taking out the *greatest* common factor always leave nothing behind?

## Discovery

1. List every positive divisor of $12$ and every positive divisor of $18$. Circle the numbers that
   appear on *both* lists. Which circled number is the largest?
2. Do the same for $12$ and $35$. What is their greatest common divisor? When two numbers share only
   the divisor $1$, what name would you give that relationship?
3. Return to $12$ and $18$ with greatest common divisor $6$. Divide each by $6$ to get $2$ and $3$,
   and find the greatest common divisor of *those*. Then try it on $12$ and $35$. Form a guess about
   $a/d$ and $b/d$ whenever $d$ is the greatest common divisor of $a$ and $b$.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

A **common divisor** of integers $a, b$ is an integer dividing both. Their **greatest common
divisor** $\gcd(a, b)$ is the largest positive common divisor (with the convention $\gcd(a, 0) =
|a|$ for $a \ne 0$). When $\gcd(a, b) = 1$, the numbers are **coprime** (or **relatively prime**).
Key fact: if $d = \gcd(a, b)$ then
$$\gcd\!\left(\frac a d, \frac b d\right) = 1$$
— dividing out the greatest common divisor leaves coprime quotients.

### Proof

*The greatest common divisor exists.* Take $a, b$ not both $0$; say $a \ne 0$. The number $1$
divides both, so the set of positive common divisors is nonempty. Any divisor of $a$ is at most
$|a|$ (if $e \mid a$ with $a \ne 0$ then $|e| \le |a|$), so this set is bounded above by $|a|$. A
nonempty set of positive integers with an upper bound has a largest element, which is $\gcd(a, b)$.

*The quotients are coprime.* Let $d = \gcd(a, b)$, and write $a = d a'$, $b = d b'$ (possible since
$d \mid a$ and $d \mid b$), so $a' = a/d$ and $b' = b/d$. Suppose some integer $e \gt 1$ were a
common divisor of $a'$ and $b'$, say $a' = e a''$ and $b' = e b''$. Then
$$a = d a' = (de)a'', \qquad b = d b' = (de)b'',$$
so $de$ is a common divisor of $a$ and $b$. But $de \gt d$ (as $e \gt 1$), contradicting that $d$ is
the *greatest* common divisor. Hence no such $e$ exists, and the only positive common divisor of
$a'$ and $b'$ is $1$: $\gcd(a/d, b/d) = 1$. $\blacksquare$

### Worked Instance

$\gcd(12, 18)$: common divisors $1, 2, 3, 6$, greatest is $6$. Dividing out, $12/6 = 2$ and
$18/6 = 3$, and indeed $\gcd(2, 3) = 1$ — coprime, as the theorem promises. By contrast $\gcd(12,
35) = 1$ already: the divisors of $12$ are $1, 2, 3, 4, 6, 12$ and of $35$ are $1, 5, 7, 35$, sharing
only $1$, so $12$ and $35$ are coprime even though neither is prime.

### Pitfalls

- **Greatest *common* divisor: it must divide both.** The largest divisor of one number is itself;
  the gcd is the largest number sitting in *both* divisor lists.
- **Coprime does not mean prime.** $8$ and $9$ are coprime ($\gcd = 1$) yet both are composite;
  coprimality is a relationship between two numbers, not a property of one.
- **$1$ is always a common divisor,** so the greatest common divisor is at least $1$ and never $0$
  (unless both inputs are $0$, which is excluded).
- **Convention at $0$: $\gcd(a, 0) = |a|$.** Every integer divides $0$, so the common divisors of
  $a$ and $0$ are exactly the divisors of $a$, the greatest being $|a|$.

:::
:::

## Connections

The greatest common divisor collects the common divisors from `nt-divisibility-elem` and picks the
largest. It pairs with the least common multiple (`nt-lcm-elem`), where the identity $\gcd(a,b) \cdot
\lcm(a,b) = ab$ ties the two together, and it reappears whenever a fraction is put in lowest terms
(divide numerator and denominator by their gcd to reach coprime form). The fast way to compute it is
the Euclidean algorithm. Recognition trigger: any "largest factor shared by," "reduce to lowest
terms," or "are these coprime?" is a gcd question.

## History

The greatest common divisor is inseparable from one of the oldest algorithms known: the "Euclidean algorithm," laid out by Euclid in Propositions $1$ and $2$ of Book VII of the *Elements* (about $300$ BC), though it was likely known to earlier Greek geometers studying commensurable lengths. Euclid framed it geometrically as repeatedly subtracting the smaller measure from the larger until one measure divides the other exactly. The method is strikingly efficient and needs no factorization, which is why it survives unchanged in modern computing. Later mathematicians, from the Islamic Golden Age through Gauss, recognized that the same process yields not just the gcd but a way to express it as a combination of the two numbers — the identity later associated with Bézout. It mattered as the practical engine behind reducing fractions, solving linear Diophantine equations, and, much later, modular inverses and cryptographic key computation.
