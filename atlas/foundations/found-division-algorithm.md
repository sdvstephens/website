Divide $17$ by $5$ and everyone agrees: quotient $3$, remainder $2$. Not quotient $2$, remainder $7$; not quotient $4$, remainder $-3$. Why is there *one* right answer? What pins down the quotient and remainder so completely?

## Discovery

1. Line up the multiples of $5$: $\dots, 5, 10, 15, 20, \dots$. Find the *largest* multiple of $5$ that does not exceed $17$. Call it $5q$. What is $q$?
2. Subtract: $17 - 5q$. What do you get, and how big can this leftover be? Could it ever be as large as $5$? Explain why the leftover must be smaller than $5$ (hint: if it were $\ge 5$, you could have used a bigger multiple).
3. Could the leftover be negative? If you had chosen $q$ too large so that $5q \gt 17$, what sign would $17 - 5q$ have — and why does that violate "$5q$ does not exceed $17$"? Pin down the exact range the remainder is allowed to occupy.
4. Now argue there is only *one* valid pair $(q, r)$. Suppose someone offers a second pair $(q', r')$ with $17 = 5q' + r'$ and $0 \le r' \lt 5$. Subtract the two equations $17 = 5q + r$ and $17 = 5q' + r'$. What must $5(q - q')$ equal, and how large can $r - r'$ be? Force a contradiction unless the pairs coincide.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Division Algorithm.** For any integer $a$ (the dividend) and any positive integer $b$ (the divisor), there exist **unique** integers $q$ (quotient) and $r$ (remainder) with
$$a = bq + r, \qquad 0 \le r \lt b.$$
Existence gives you *a* quotient and remainder; uniqueness guarantees they are the *only* ones once you insist $0 \le r \lt b$. This is the theorem underneath long division, positional numerals, and the meaning of "$a \bmod b$."

### Proof

Fix $a \in \ZZ$ and $b \in \ZZ_{\gt 0}$.

**Existence.** Consider the set of nonnegative values $a - bk$ as $k$ ranges over the integers:
$$S = \{\, a - bk : k \in \ZZ,\ a - bk \ge 0 \,\}.$$
$S$ is nonempty: taking $k$ very negative (specifically $k \le a/b$ works, and $k = -|a|$ certainly gives $a - bk = a + b|a| \ge 0$ since $b \ge 1$) produces a nonnegative element. As a nonempty set of nonnegative integers, $S$ has a least element $r = a - bq$ for some integer $q$; by construction $r \ge 0$. It remains to show $r \lt b$. If instead $r \ge b$, then $r - b = a - b(q+1) \ge 0$ would be a *smaller* nonnegative element of $S$ than $r$, contradicting minimality. Hence $0 \le r \lt b$ and $a = bq + r$.

**Uniqueness.** Suppose $a = bq + r = bq' + r'$ with $0 \le r \lt b$ and $0 \le r' \lt b$. Subtracting, $b(q - q') = r' - r$. The right side satisfies $-b \lt r' - r \lt b$ (a difference of two numbers each in $[0, b)$), so $b(q-q')$ is a multiple of $b$ lying strictly between $-b$ and $b$. The only such multiple is $0$, forcing $q = q'$ and then $r = r'$. The pair is unique. $\blacksquare$

### Worked Instance

Divide $17$ by $5$. The largest multiple of $5$ not exceeding $17$ is $5\cdot 3 = 15$, so $q = 3$ and $r = 17 - 15 = 2$, giving $17 = 5\cdot 3 + 2$ with $0 \le 2 \lt 5$. 

Now try a *negative* dividend to see the constraint bite: divide $-17$ by $5$. We need $0 \le r \lt 5$, so we cannot write $-17 = 5(-3) - 2$ (that $r = -2$ is illegal). The correct pair uses the largest multiple of $5$ not exceeding $-17$, namely $5\cdot(-4) = -20$: then $-17 = 5(-4) + 3$ with $0 \le 3 \lt 5$. So $q = -4$, $r = 3$. The insistence $0 \le r \lt b$ is exactly what makes the answer unique — resolving the Hook.

### Pitfalls

- The remainder must satisfy $0 \le r \lt b$. Allowing negative remainders (like $17 = 5\cdot 4 - 3$) destroys uniqueness.
- For negative dividends, the quotient rounds *down* (toward $-\infty$), not toward zero: $-17 \div 5$ gives $q = -4$, not $-3$. This is where floor-division and truncation disagree.
- The divisor is positive here; for negative divisors one restates the bound as $0 \le r \lt |b|$.
- "Quotient" in this theorem is the integer $q$, not the fraction $a/b$.

:::
:::

## Connections

Prereqs: place value (numbers to divide). This theorem is the quiet foundation of a huge amount: it *proves* the uniqueness of base-$b$ representation (repeatedly extract remainders), it defines the remainder used throughout `found-mod-basics`, it seeds the floor function `found-floor` (the quotient is $\lfloor a/b\rfloor$), and it is the single step iterated in the Euclidean algorithm `found-euclid-gcd`. Recognition trigger: any time you need "the remainder when $a$ is divided by $b$" — or need every integer written uniquely as multiple-plus-leftover.

## History

The division algorithm — that any integer can be written as $a=qn+r$ with a unique remainder satisfying $0\le r\lt n$ — is one of the oldest results in arithmetic, implicit in Euclid's Elements (c. 300 BC), where it underlies the algorithm for greatest common divisors. The Greeks worked with it geometrically as repeated subtraction of magnitudes. Its precise modern statement, with existence and uniqueness of quotient and remainder, is a staple of number theory formalized in the nineteenth century alongside Gauss's congruences. Despite the name it is a theorem, not merely a procedure, and it is the logical bedrock for divisibility, modular arithmetic, and the Euclidean algorithm. ANABASIS states and uses it as the foundation of integer division.
