You can tell instantly that $8{,}461{,}930$ is divisible by $10$, by $5$, and by $2$ — without dividing. You looked at one digit and knew. What is special about the last digit that lets a single symbol decide these three tests?

## Discovery

1. Write $8{,}461{,}930$ in expanded form using powers of $10$: $8\cdot 10^6 + 4\cdot 10^5 + \cdots + 3\cdot 10 + 0$. Every term except the last has a factor of $10$ in it. What does that tell you about whether $10$ divides the whole number, given the last digit is $0$?
2. Now think about a general number $n = 10q + d$, where $d$ is its last (units) digit and $10q$ is everything else. Since $10 = 2\cdot 5$, the block $10q$ is divisible by $2$ and by $5$. So whether $2 \mid n$ depends only on... what? And whether $5 \mid n$?
3. Which single-digit values of $d$ make $10q + d$ divisible by $2$? By $5$? By $10$? List them.
4. Try the same reasoning for divisibility by $4$. Is it still true that only the last digit matters? Split $n = 100q' + (\text{last two digits})$ and explain what goes wrong (or right).

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

Write a base-ten integer as $n = 10q + d$, where $d \in \{0,1,\dots,9\}$ is its units digit. Then:
- $2 \mid n \iff d \in \{0,2,4,6,8\}$ (the last digit is even);
- $5 \mid n \iff d \in \{0,5\}$;
- $10 \mid n \iff d = 0$.
In every case the divisibility of $n$ is decided entirely by its last digit, because the rest of the number is a multiple of $10$, hence of both $2$ and $5$.

### Proof

Split off the units digit: any integer $n$ can be written $n = 10q + d$ with $d$ its last digit, $0 \le d \le 9$, and $q$ the number formed by the remaining digits (this is the place-value expansion with all but the units term collected: $\sum_{i\ge 1} d_i 10^i = 10\sum_{i\ge 1}d_i 10^{i-1} = 10q$).

For a divisor $m \in \{2,5,10\}$ we have $m \mid 10$: indeed $10 = 2\cdot 5 = 5\cdot 2 = 10\cdot 1$. Hence $m \mid 10q$, so $10q \equiv 0 \pmod m$ and therefore
$$n = 10q + d \equiv d \pmod m.$$
Thus $m \mid n \iff m \mid d$, a condition on the single digit $d$:
- $m = 2$: $2 \mid d$ for $d \in \{0,2,4,6,8\}$.
- $m = 5$: $5 \mid d$ for $d \in \{0,5\}$.
- $m = 10$: $10 \mid d$ with $0 \le d \le 9$ forces $d = 0$.

For $m = 4$ this argument breaks: $4 \nmid 10$, so $10q$ is not automatically a multiple of $4$ and the last digit alone is not enough. (One must instead split $n = 100q' + (\text{last two digits})$, since $4 \mid 100$.) $\blacksquare$

### Worked Instance

$8{,}461{,}930$ has units digit $d = 0$.
- $2 \mid n$? $0$ is even — yes.
- $5 \mid n$? $d \in \{0,5\}$ — yes.
- $10 \mid n$? $d = 0$ — yes.
Contrast $8{,}461{,}935$, last digit $5$: divisible by $5$ (since $d=5$) but not by $2$ (since $5$ is odd) and not by $10$ (since $d \ne 0$). One glance at the final symbol settles all three questions — resolving the Hook.

### Pitfalls

- These rules are base-ten facts, resting on $2 \mid 10$ and $5 \mid 10$. In another base $b$ they become rules about the divisors of $b$.
- The rule uses only the *last* digit precisely because $10$ (not $100$ or $1000$) is divisible by $2$ and $5$. For $4$ or $8$ you need the last two or three digits, because $4 \mid 100$ and $8 \mid 1000$.
- "Even" means last digit in $\{0,2,4,6,8\}$ — do not forget $0$, which is even.

:::
:::

## Connections

Prereqs: place value (the split $n = 10q + d$). This is the simplest family of divisibility rules — the ones needing only the units digit — and it complements the digit-*sum* rules for $3$ and $9$ (`found-digitsum-3-9`), which arise instead from $10 \equiv 1$. Together they cover the small divisors: last-digit rules come from divisors *of* the base, digit-sum rules from the base being $\equiv 1$. Recognition trigger: "is this number even / a multiple of $5$?" — look only at the end.

## History

The rules for divisibility by 2, 5, and 10 are direct consequences of the decimal place-value system, and they were understood as soon as that system spread. Because 10 factors as $2\times 5$, only the last digit of a number affects divisibility by 2, 5, or 10 — a fact implicitly used by Indian and Islamic arithmeticians and transmitted to Europe via Fibonacci's Liber Abaci (1202). Such shortcuts were prized in an era of hand computation and commercial arithmetic. They are the simplest instances of the general principle that divisibility can be tested by looking at a number's written representation rather than the whole number. No single discoverer is named; the rules are folklore riding on the place-value system. ANABASIS presents them as the first divisibility tests.
