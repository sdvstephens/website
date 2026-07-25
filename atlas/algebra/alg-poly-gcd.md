Two polynomials $A = x^4 - 1$ and $B = x^3 - x^2 + x - 1$ look unrelated, yet they secretly share the
factor $x^2 + 1$ (and $x - 1$). Factoring each fully to find that overlap can be hard. Is there a way
to extract the *largest common factor* of two polynomials without ever factoring either one — the same
way Euclid found gcds of integers by pure division?

## Discovery

Recall Euclid's integer algorithm: replace the pair $(a, b)$ by $(b, a \bmod b)$ and repeat until the
second entry is $0$; the last nonzero entry is $\gcd(a, b)$. Polynomials have their own division
algorithm, producing a quotient and a remainder of strictly smaller degree.

1. Divide $A(x) = x^4 - 1$ by $B(x) = x^3 - x^2 + x - 1$, obtaining a quotient and a remainder $R_1$
   with $\deg R_1 \lt \deg B$. Then divide $B$ by $R_1$ to get a remainder $R_2$, and continue —
   always dividing the previous divisor by the previous remainder. Carry this out until you reach a
   remainder of $0$, and record the last *nonzero* remainder.
2. Argue that this process cannot run forever. Each remainder has strictly smaller degree than the one
   before; what does that force, and why does it guarantee you eventually hit remainder $0$?
3. Take any common divisor $D$ of $A$ and $B$. Look at the first division $A = BQ_1 + R_1$, i.e.
   $R_1 = A - BQ_1$. Explain why $D$ must also divide $R_1$. Iterating, what is the relationship
   between the common divisors of $(A, B)$ and the common divisors of $(B, R_1)$ — and how does that
   identify your last nonzero remainder?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Polynomial Euclidean algorithm.** For polynomials $A, B$ over a field ($\RR$ or $\CC$), not both
zero, repeatedly apply the division algorithm:
$$A = B Q_1 + R_1,\quad B = R_1 Q_2 + R_2,\quad R_1 = R_2 Q_3 + R_3,\ \dots$$
with each $\deg R_{i+1} \lt \deg R_i$. The degrees strictly decrease, so some remainder is $0$; the
**last nonzero remainder** is a **greatest common divisor** $\gcd(A, B)$ — a common divisor of $A$ and
$B$ of maximal degree, dividing every other common divisor. It is unique **up to a nonzero constant
factor**, so one normalizes to the **monic** gcd. Moreover, unwinding the algorithm expresses the gcd
as a combination
$$\gcd(A, B) = U(x)\,A(x) + V(x)\,B(x)$$
for polynomials $U, V$ (the **Bézout identity** for polynomials) — the extended Euclidean algorithm.

### Proof

*Termination.* By the division algorithm ([alg-poly-division]) each remainder satisfies $R_{i+1} = 0$
or $\deg R_{i+1} \lt \deg R_i$. The degrees $\deg R_1 \gt \deg R_2 \gt \cdots$ form a strictly
decreasing sequence of nonnegative integers, which cannot continue indefinitely; hence some $R_{n+1} =
0$, and the algorithm stops with last nonzero remainder $R_n$.

*The last remainder divides both inputs.* Reading the equations from the bottom up: $R_{n-1} = R_n
Q_{n+1}$ (since $R_{n+1} = 0$), so $R_n \mid R_{n-1}$. From $R_{n-2} = R_{n-1}Q_n + R_n$ and $R_n$
dividing both terms on the right, $R_n \mid R_{n-2}$. Inductively $R_n$ divides every earlier
remainder, then $R_n \mid B$ and $R_n \mid A$. So $R_n$ is a common divisor of $A$ and $B$.

*It is greatest.* The key lemma: $\gcd$-sets are preserved by a division step. From $A = BQ_1 + R_1$,
any common divisor $D$ of $A$ and $B$ divides $R_1 = A - BQ_1$, so $D$ is a common divisor of $(B,
R_1)$; conversely any common divisor of $(B, R_1)$ divides $A = BQ_1 + R_1$. Thus $(A, B)$ and $(B,
R_1)$ have *exactly the same* common divisors, and iterating, the common divisors of $(A, B)$ equal
those of $(R_n, 0)$ — namely the divisors of $R_n$. Since $R_n$ divides itself and every common divisor
of $A, B$ divides $R_n$, $R_n$ is a common divisor that all others divide; being of maximal degree
among them, it is a gcd.

*Uniqueness up to a constant.* If $G_1, G_2$ are both gcds, each divides the other, so $G_1 = c G_2$
for a polynomial $c$ with $\deg c = 0$, i.e. a nonzero constant. Normalizing to leading coefficient $1$
picks the unique monic gcd.

*Bézout.* Each remainder $R_i = R_{i-2} - R_{i-1}Q_i$ is an $A, B$-combination by induction (with
$R_{-1} = A$, $R_0 = B$); in particular $R_n = UA + VB$ for some polynomials $U, V$. $\blacksquare$

### Worked Instance

The Hook: $\gcd(x^4 - 1,\ x^3 - x^2 + x - 1)$. Since $x^3 - x^2 + x - 1 = (x - 1)(x^2 + 1)$ and
$x^4 - 1 = (x - 1)(x + 1)(x^2 + 1)$, the first division already closes:
$$x^4 - 1 = (x^3 - x^2 + x - 1)(x + 1) + 0,$$
so $B \mid A$, the last nonzero remainder is $B$ itself, and $\gcd = x^3 - x^2 + x - 1$ (already monic)
— recovering the shared $x - 1$ and $x^2 + 1$ without factoring $A$.

A genuine two-step run, $\gcd(x^3 - 1,\ x^2 + x - 2)$. Divide $A = x^3 - 1$ by $B = x^2 + x - 2$:
$$x^3 - 1 = (x^2 + x - 2)(x - 1) + (3x - 3), \qquad R_1 = 3x - 3.$$
Now divide $B$ by $R_1$:
$$x^2 + x - 2 = (3x - 3)\!\left(\tfrac13 x + \tfrac23\right) + 0, \qquad R_2 = 0.$$
The last nonzero remainder is $R_1 = 3x - 3$; normalizing to monic gives $\gcd = x - 1$. Check:
$x^3 - 1 = (x-1)(x^2+x+1)$ and $x^2 + x - 2 = (x-1)(x+2)$ indeed share exactly $x - 1$. Finally, a
coprime case: $\gcd(x^2 + 1,\ x^2 - 1)$ gives $x^2 + 1 = (x^2 - 1)\cdot 1 + 2$, then
$x^2 - 1 = 2\cdot(\tfrac12 x^2 - \tfrac12) + 0$; the last nonzero remainder is the constant $2$, monic
form $1$ — the two are **coprime**, as expected since $x^2 \pm 1$ share no root.

### Pitfalls

- **Work over a field.** The clean theory (unique monic gcd, Bézout) needs coefficients in $\RR$,
  $\QQ$, or $\CC$. Over $\ZZ$ one must track content and use Gauss's lemma; the bare algorithm can
  introduce fractions.
- **The gcd is only defined up to a constant.** A nonzero constant remainder means the inputs are
  **coprime** (monic gcd $= 1$); do not mistake a leftover constant for a nontrivial common factor.
- **Divide larger-degree by smaller.** Start with $\deg A \ge \deg B$; if not, swap, or the first
  quotient is $0$ and you simply swap anyway.
- **Keep dividing the previous divisor by the previous remainder**, not the original $A$ each time.
  The pair updates $(B, R_1) \to (R_1, R_2) \to \cdots$; reusing $A$ breaks the algorithm.
- **Normalize at the end, not midway.** Scaling remainders to monic as you go is fine and often
  cleaner, but the final gcd should be reported monic to make it unique.

:::
:::

## Connections

This transplants **Euclid's gcd algorithm** ([found-euclid-gcd]) from integers to polynomials, with
*degree* playing the role of *size*, and it runs on the **polynomial division algorithm**
([alg-poly-division]) as its single primitive step. The Bézout combination $UA + VB = \gcd$ powers
partial-fraction decompositions, modular inverses of polynomials, and Sturm's root-counting. Recognition
trigger: "the common factor of two polynomials," "are these two polynomials coprime," or any need to
simplify a ratio of polynomials without fully factoring them.

## History

Euclid's algorithm for integer gcds appears as Propositions VII.1-2 of the *Elements* (c. 300 BCE), and
its transfer to polynomials was made explicitly by Simon Stevin around 1585, who recognized that
polynomials, like integers, admit division with a remainder of smaller "size" — here degree instead of
magnitude. This analogy is the historical seed of what modern algebra calls a *Euclidean domain*, a
structure isolated in the nineteenth and twentieth centuries precisely to capture where the Euclidean
algorithm works. The polynomial gcd became indispensable through Jacques Charles François Sturm's 1829
theorem, which counts real roots in an interval using a chain of remainders built exactly this way. The
extended version, yielding the Bézout combination $UA + VB = \gcd$, underlies partial fractions and the
arithmetic of polynomials modulo a fixed polynomial, and thus quietly supports much of coding theory and
computer algebra today.
