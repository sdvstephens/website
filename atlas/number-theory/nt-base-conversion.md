Going *from* base $7$ *to* base $10$ is easy: $(65)_7$ just means $6\cdot 7 + 5 = 47$. The other
direction looks harder — to write $47$ in base $7$ you seem to need to hunt for the right powers.
Yet there is a mechanical trick: divide by $7$ over and over, and the remainders hand you the
digits. Why do leftover remainders spell out the base-$7$ digits?

## Discovery

1. Take $n = 47$ and divide it by $7$ with the division algorithm: find the quotient and the
   remainder $r$ with $0 \le r \lt 7$. Compare that remainder to the *units* (rightmost) digit of
   $47$ in base $7$ — what is the relationship?
2. Take the quotient from step 1 and divide *it* by $7$, recording the new remainder. Repeat until
   the quotient becomes $0$. Collect the remainders you produced, in order. To read off the base-$7$
   digits of $47$, in which direction must you read that list?
3. Justify the machine. Write $n = d_0 + b(d_1 + b(d_2 + \cdots))$ by factoring $b$ out of the
   base-$b$ expansion. When you divide this by $b$, why is the remainder exactly $d_0$, and why is
   the quotient the same nested expression with $d_0$ stripped off?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

To convert an integer $n \ge 1$ **into** base $b$: repeatedly divide by $b$, at each step recording
the remainder $r \in \{0,\dots,b-1\}$ and passing the quotient on; stop when the quotient is $0$.
The remainders, read **from last to first**, are the base-$b$ digits $d_k \cdots d_1 d_0$. To
convert **out of** base $b$ into base $10$, expand $\sum d_i b^i$ directly. The remainder trick
works because the first division by $b$ peels off the units digit $d_0$ and leaves
$\sum_{i \ge 1} d_i b^{\,i-1}$ as the quotient.

### Proof

Write $n$ in base $b$ (guaranteed and unique by `nt-base-representation`) and group by Horner
nesting:
$$n = d_0 + d_1 b + d_2 b^2 + \cdots + d_k b^k = d_0 + b\big(d_1 + d_2 b + \cdots + d_k b^{k-1}\big).$$
The bracket is an integer, call it $q_1$, so $n = q_1 b + d_0$ with $0 \le d_0 \le b-1$. By the
division algorithm (`ari-division`) the pair (quotient, remainder) with remainder in $[0,b)$ is
**unique**, so dividing $n$ by $b$ returns exactly $q_1$ and $d_0$: the first remainder *is* the
units digit. Moreover
$$q_1 = d_1 + d_2 b + \cdots + d_k b^{k-1}$$
is precisely $n$ with its units digit removed — its own base-$b$ digit string is $d_k \cdots d_1$.
Applying the same step to $q_1$ extracts $d_1$ as the next remainder, and so on. The quotients
strictly decrease ($q_1 \lt n$ whenever $n \ge b$, and $q_1 = 0$ once $n \lt b$), so the process
halts after finitely many steps, having emitted $d_0, d_1, \dots, d_k$ in that order. Reversing the
list gives $d_k \cdots d_0$. $\blacksquare$

### Worked Instance

Resolve the Hook: convert $47$ to base $7$.
$$47 = 6\cdot 7 + 5,\qquad 6 = 0\cdot 7 + 6.$$
Remainders bottom-up: $6, 5$, so $47 = (65)_7$ — and back-checking, $6\cdot 7 + 5 = 47$. In base
$2$:
$$47 = 23\cdot 2 + 1,\ \ 23 = 11\cdot 2 + 1,\ \ 11 = 5\cdot 2 + 1,\ \ 5 = 2\cdot 2 + 1,\ \
2 = 1\cdot 2 + 0,\ \ 1 = 0\cdot 2 + 1,$$
giving remainders $1,1,1,1,0,1$ read upward as $(101111)_2$. Converting out is a plain expansion:
$(1202)_3 = 27 + 18 + 0 + 2 = 47$.

### Pitfalls

- **Read the remainders backward.** The *first* remainder is the units digit; the *last* is the
  leading digit. Reading top-to-bottom reverses the number.
- **The remainder is a digit only because $0 \le r \lt b$.** That is exactly why you divide by the
  target base $b$; dividing by the wrong number gives remainders outside the digit range.
- **Do not forget the final step.** Keep dividing until the quotient is $0$; the last nonzero
  quotient still yields a remainder that is the leading digit.
- **Two conversions, two directions.** Repeated division is for going *into* base $b$; going *out*
  of base $b$ (to base $10$) is a straight $\sum d_i b^i$ evaluation, not more division.

:::
:::

## Connections

Base conversion is base representation (`nt-base-representation`) made algorithmic, powered by the
division algorithm (`ari-division`), whose unique remainder is what turns "leftover" into "digit."
The very same repeated-division idea, run with $b$ replaced by a general modulus, is how one reads
a residue, and the Horner nesting reappears in fast exponentiation and polynomial evaluation. It
feeds directly into arithmetic performed within a base (`nt-base-arithmetic`). Recognition trigger:
"write $n$ in base $b$" means repeated division; "evaluate $(\cdots)_b$" means expand the powers.

## History

Translating a number between bases became a live question the moment more than one positional system was in use. The Babylonians already juggled base $60$ against everyday base $10$, and medieval reckoners moving Hindu-Arabic numerals into European commerce, following Fibonacci's *Liber Abaci* ($1202$), had to reconcile competing notations. The conceptual clarity of arbitrary bases came with Gottfried Wilhelm Leibniz, who around $1679$ worked out binary arithmetic and understood explicitly how the same quantity wears different digit-strings in different bases. Simon Stevin's advocacy of decimal fractions ($1585$) had meanwhile fixed the base-$10$ conventions that conversions start from. The repeated-division and repeated-multiplication procedures taught today are direct expressions of the positional definition. Base conversion mattered enormously in the twentieth century, when computing forced fluent movement among binary, octal, decimal, and hexadecimal.
