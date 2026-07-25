How many multiples of $7$ are there between $1$ and $100$? You do not list them — you compute $\lfloor 100/7 \rfloor = 14$. That single bracket, "round down to an integer," turns counting problems into arithmetic. What are its rules?

## Discovery

1. For a real number $x$, the floor $\lfloor x \rfloor$ is the greatest integer that is not larger than $x$. Evaluate $\lfloor 3.7 \rfloor$, $\lfloor 5 \rfloor$, and $\lfloor -2.3 \rfloor$. (The last one is the trap: which integers are $\le -2.3$, and which is the greatest?)
2. Write $x = \lfloor x \rfloor + \{x\}$, defining the "fractional part" $\{x\} = x - \lfloor x\rfloor$. From the definition of floor, what range must $\{x\}$ lie in? Is it always nonnegative, even when $x$ is negative?
3. Count the positive multiples of $d$ that are $\le n$ (with $n, d$ positive integers). A multiple $kd \le n$ means $k \le n/d$; the valid $k$ are $1, 2, \dots$ up to the largest integer $\le n/d$. How many are there, as a floor expression? Tie this to the division algorithm: if $n = dq + r$ with $0 \le r \lt d$, what is $\lfloor n/d \rfloor$ in terms of $q$?
4. Consider $\lfloor x \rfloor + \lfloor x + \tfrac12 \rfloor$ for various $x$ (try $x = 1.2, 1.6, 2.0$). It always equals some familiar floor of a scaled input. Guess which — and test your guess on the values you computed. (State it as a conjecture; do not assume it yet.)

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

For a real number $x$, the **floor** $\lfloor x \rfloor$ is the unique integer $m$ with $m \le x \lt m+1$; equivalently the greatest integer not exceeding $x$. Writing $\{x\} = x - \lfloor x \rfloor$ (the fractional part), we always have $0 \le \{x\} \lt 1$. Two workhorse facts:
- **Counting multiples.** The number of positive multiples of $d$ that are $\le n$ (for positive integers $n,d$) is exactly $\lfloor n/d \rfloor$; and if $n = dq + r$ with $0 \le r \lt d$ then $\lfloor n/d\rfloor = q$.
- **Hermite's doubling identity** (simplest case): $\lfloor x \rfloor + \left\lfloor x + \tfrac12 \right\rfloor = \lfloor 2x \rfloor$ for every real $x$.

### Proof

**Well-definedness and the fractional-part range.** For any real $x$ the integers $\le x$ form a set bounded above with a greatest element (the integers are spread one apart), so $\lfloor x\rfloor$ exists and is unique; by definition $\lfloor x\rfloor \le x \lt \lfloor x\rfloor + 1$. Subtracting $\lfloor x\rfloor$ gives $0 \le \{x\} \lt 1$.

**Counting multiples.** The positive multiples of $d$ that are $\le n$ are $d\cdot 1, d\cdot 2, \dots, d\cdot k$ where $k$ is the largest integer with $dk \le n$, i.e. $k \le n/d$. That largest integer is precisely $\lfloor n/d\rfloor$, so there are $\lfloor n/d\rfloor$ of them. For the division-algorithm identity, write $n = dq + r$, $0 \le r \lt d$. Then $n/d = q + r/d$ with $0 \le r/d \lt 1$, so $q \le n/d \lt q+1$, whence $\lfloor n/d\rfloor = q$.

**Doubling identity.** Fix $x$ and write $x = m + f$ with $m = \lfloor x\rfloor$ and $f = \{x\} \in [0,1)$. Split on whether $f \lt \tfrac12$.
- If $0 \le f \lt \tfrac12$: then $x + \tfrac12 = m + (f + \tfrac12)$ with $\tfrac12 \le f+\tfrac12 \lt 1$, so $\lfloor x+\tfrac12\rfloor = m$. Also $2x = 2m + 2f$ with $0 \le 2f \lt 1$, so $\lfloor 2x\rfloor = 2m$. Left side $m + m = 2m = $ right side. ✓
- If $\tfrac12 \le f \lt 1$: then $x + \tfrac12 = m + (f+\tfrac12)$ with $1 \le f + \tfrac12 \lt \tfrac32$, so $\lfloor x + \tfrac12\rfloor = m+1$. And $2x = 2m + 2f$ with $1 \le 2f \lt 2$, so $\lfloor 2x\rfloor = 2m + 1$. Left side $m + (m+1) = 2m+1 = $ right side. ✓

Both cases give $\lfloor x\rfloor + \lfloor x + \tfrac12\rfloor = \lfloor 2x\rfloor$. $\blacksquare$

### Worked Instance

How many multiples of $7$ lie in $\{1, 2, \dots, 100\}$? By the counting rule, $\lfloor 100/7\rfloor$. Since $100 = 7\cdot 14 + 2$ with $0 \le 2 \lt 7$, the quotient is $14$, so $\lfloor 100/7\rfloor = 14$ — the multiples $7, 14, \dots, 98$. And a quick check of the doubling identity at $x = 1.6$: $\lfloor 1.6\rfloor + \lfloor 2.1\rfloor = 1 + 2 = 3$, while $\lfloor 3.2\rfloor = 3$. They agree, as proved.

### Pitfalls

- Floor of a negative number rounds *down*, away from zero: $\lfloor -2.3\rfloor = -3$, not $-2$. Truncation ("drop the decimals") is different and wrong for negatives.
- $\{x\}$ is always in $[0,1)$; for $x = -2.3$, $\{x\} = -2.3 - (-3) = 0.7$, not $-0.3$.
- $\lfloor n/d\rfloor$ counts multiples $\le n$; whether to include $0$ or overshoot with $n$ itself is an off-by-one trap — the count of positive multiples up to and including $n$ is exactly $\lfloor n/d\rfloor$.
- $\lfloor x + y\rfloor \ne \lfloor x\rfloor + \lfloor y\rfloor$ in general (try $x = y = 0.6$); floors do not distribute over addition.

:::
:::

## Connections

Prereqs: the division algorithm (which is where $\lfloor n/d\rfloor = q$ comes from). The floor's counting identity is the engine of Legendre's formula `nt-legendre` (counting multiples of $p^k$ in $n!$) and appears throughout number theory and analysis whenever "how many $\le n$" is asked. Recognition trigger: "count the integers up to $n$ divisible by $d$," or any need for the integer part of a ratio.

## History

The floor function, giving the greatest integer not exceeding a number, has been used implicitly since antiquity whenever remainders and quotients were computed. Carl Friedrich Gauss introduced the bracket notation $[x]$ for it in 1808 in his work on number theory, and it appears throughout classical results such as Legendre's formula for the power of a prime dividing a factorial. The now-common notation $\lfloor x\rfloor$, with a matching ceiling $\lceil x\rceil$, was introduced by Kenneth Iverson around 1962 in the context of computer science and the APL language. The floor function bridges the continuous and the discrete, which is why it pervades number theory and algorithms. ANABASIS defines it and uses it to make the division algorithm and modular ideas precise.
