The multiples of $7$ march forward — $7, 14, 21, 28, \dots$ — but they also march backward through
$0, -7, -14, \dots$. Grab any two of them, say $21$ and $35$, add them, and you land on $56$, which
is $7 \cdot 8$ — another multiple of $7$. Coincidence, or does the whole ladder have a hidden rule
that traps sums inside it?

## Discovery

1. Build the multiples of $3$ by multiplying $3$ in turn by $0, 1, 2, 3, 4$, and then by
   $-1, -2, -3$. Place the results on a number line. What is the constant step between neighbours,
   and which number sits dead centre?
2. Pick two numbers from your list — take one from the forward side and one from the backward side
   — and add them. Then subtract one from another. Do the answers land back among the multiples of
   $3$? Try three or four different pairs before you commit to a verdict.
3. Is $0$ itself a multiple of $3$? Is $3$ a multiple of $3$? For each, try to write it as
   "$3$ times an integer," and decide whether some integer does the job.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

For an integer $a$, an integer $m$ is a **multiple** of $a$ when $m = ka$ for some integer $k$. The
set of all multiples of $a$ is
$$a\ZZ = \{\, ka : k \in \ZZ \,\} = \{\, \dots, -2a, -a, 0, a, 2a, \dots \,\},$$
an evenly spaced ladder of step $|a|$ centred on $0$. Two **closure** facts fall out: the sum and
the difference of two multiples of $a$ is again a multiple of $a$, and so is any integer multiple of
a multiple of $a$.

### Proof

Let $m$ and $n$ be multiples of $a$, so $m = ka$ and $n = la$ for integers $k, l$.

*Closure under $+$ and $-$.* By the distributive law,
$$m + n = ka + la = (k+l)a, \qquad m - n = ka - la = (k-l)a.$$
Since $k + l$ and $k - l$ are integers, both $m+n$ and $m-n$ have the form (integer)$\,\cdot a$, so
each is a multiple of $a$.

*Closure under scaling.* For any integer $t$, $tm = t(ka) = (tk)a$ by associativity, and $tk \in
\ZZ$, so $tm$ is a multiple of $a$.

*The ladder.* Consecutive entries $ka$ and $(k+1)a$ differ by $(k+1)a - ka = a$, so the step is
constant at $|a|$; and $0 = 0 \cdot a$ is on the ladder, at its centre. (Edge case: if $a = 0$ the
ladder collapses to the single point $\{0\}$, since $k \cdot 0 = 0$ for every $k$.) $\blacksquare$

### Worked Instance

The multiples of $7$ are $\dots, -14, -7, 0, 7, 14, 21, 28, 35, \dots$, each a step of $7$ from the
last. The Hook: $21 = 7 \cdot 3$ and $35 = 7 \cdot 5$, so
$$21 + 35 = 7\cdot 3 + 7 \cdot 5 = 7(3+5) = 7 \cdot 8 = 56,$$
and $35 - 21 = 7(5-3) = 7\cdot 2 = 14$ — both back on the ladder. The sum stayed a multiple of $7$
not by luck but because the shared factor $7$ could be pulled out front.

### Pitfalls

- **$0$ is a multiple of every integer.** $0 = 0 \cdot a$ for all $a$, so $0$ sits on every ladder;
  forgetting it is a classic slip.
- **"$m$ is a multiple of $a$" is directional.** It means $a$ is a factor packed inside $m$, not the
  reverse; $56$ is a multiple of $7$, but $7$ is not a multiple of $56$.
- **Negative multiples count.** $-14 = 7\cdot(-2)$ is a genuine multiple of $7$; the ladder runs
  both ways, not just forward.
- **The multiples of $0$ are just $\{0\}$.** Multiplying $0$ by anything gives $0$, so its "ladder"
  is a single rung.

:::
:::

## Connections

Built directly on multiplication: a multiple is just the product $ka$ read as "$a$ scaled by an
integer." The closure facts are the seed of divisibility (`nt-divisibility-elem`), where "$m$ is a
multiple of $a$" is rewritten as "$a$ divides $m$," and they return when common multiples are
collected to build the least common multiple (`nt-lcm-elem`). Recognition trigger: any "in steps of
$a$," "every $a$-th number," or "lands back on the same ladder" is a statement about multiples.

## History

The idea of a multiple is as old as counting itself: Babylonian and Egyptian scribes worked with "so many of a thing" millennia before any formal theory, and multiples underlie their tables of proportions and their sexagesimal reckoning. The Pythagoreans of the sixth and fifth centuries BC, who treated the whole numbers almost mystically, were the first Greeks to study multiples and their patterns systematically. Euclid gave the notion its rigorous footing in Book VII of the *Elements* (around $300$ BC), where a number is defined to "measure" another exactly when the second is a multiple of the first. That vocabulary of measuring and being measured framed all of Greek number theory and passed, through the Arabic and Latin traditions, into modern arithmetic. What began as a practical shorthand for repeated addition thus became the backbone of divisibility, primes, and everything built on them.
