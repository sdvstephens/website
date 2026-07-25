Add two cubics and the result might be a cubic — but it can also collapse to a quadratic, a line,
even a single constant. Multiply those same two cubics and the answer is *always* degree exactly
six, never anything else. Why is multiplication so much more predictable than addition?

## Discovery

Work with polynomials in one variable $x$ with real coefficients, each written in **standard form**:
powers of $x$ in decreasing order, e.g. $f(x) = 3x^2 - 5x + 4$.

1. Let $f(x) = 3x^2 - 5x + 4$ and $g(x) = x^3 + 2x^2 - 1$. Compute $f + g$ and record the highest
   power of $x$ that survives. Now let $h(x) = -3x^2 + x$ and compute $f + h$; watch the top terms.
   Across both examples, propose a bound on the highest surviving power of a sum in terms of the
   highest powers of the two addends, and pin down the *one* circumstance in which that bound is not
   reached.
2. Multiply $f(x)\,g(x)$ by full distribution. Before expanding everything, isolate just the
   single highest-power term contributed by $f$ and the single highest-power term contributed by
   $g$; form their product. Ask whether any *other* pairing of a term from $f$ with a term from $g$
   can reach that same power. From this, state the highest power appearing in $f\,g$ and the number
   multiplying it, in terms of the corresponding data for $f$ and $g$.
3. In step 1 the top power could drop, because two coefficients cancelled. In step 2 could the top
   coefficient of the product ever cancel to $0$? For real numbers, when is a product of two numbers
   equal to $0$? Use your answer to explain why the rule you found in step 2 has no exceptions.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

Write a nonzero polynomial in standard form as
$$P(x) = a_n x^n + a_{n-1}x^{n-1} + \cdots + a_1 x + a_0, \qquad a_n \ne 0.$$
Its **degree** is $\deg P = n$ (the highest power with nonzero coefficient), and its **leading
coefficient** is $a_n$. A polynomial is **monic** when $a_n = 1$. By convention the zero polynomial
has degree $-\infty$.

For nonzero real polynomials $f, g$:

- **Addition.** $\deg(f + g) \le \max(\deg f, \deg g)$, with equality *unless* $\deg f = \deg g$ and
  the two leading coefficients are negatives of one another — the only way the top terms can cancel.
- **Multiplication.** $\deg(fg) = \deg f + \deg g$ exactly, with **no** exceptions, and the leading
  coefficient of $fg$ is the product of the leading coefficients of $f$ and $g$.

Multiplication is rigid because $\RR$ has no *zero divisors*: a product of nonzero reals is nonzero,
so the top coefficient can never vanish. Addition is loose because unequal terms can cancel.

### Proof

Write $f = a_m x^m + (\text{lower})$ with $a_m \ne 0$ and $g = b_n x^n + (\text{lower})$ with
$b_n \ne 0$, so $\deg f = m$, $\deg g = n$.

*Multiplication.* Distributing, every term of $fg$ is a product $a_i x^i \cdot b_j x^j = a_i b_j
x^{i+j}$ with $i \le m$ and $j \le n$, so $i + j \le m + n$, and $i + j = m + n$ forces $i = m$ and
$j = n$. Hence the coefficient of $x^{m+n}$ is exactly $a_m b_n$, and no term of higher degree
exists. Since $a_m \ne 0$ and $b_n \ne 0$ are real, $a_m b_n \ne 0$ (the reals have no zero
divisors). Therefore $x^{m+n}$ genuinely appears, $\deg(fg) = m + n$, and its leading coefficient is
$a_m b_n$.

*Addition.* For $k \gt \max(m, n)$ the coefficient of $x^k$ in both $f$ and $g$ is $0$, so it is $0$
in $f + g$; thus $\deg(f + g) \le \max(m, n)$. If $m \ne n$, say $m \gt n$, then the coefficient of
$x^m$ in $f + g$ is $a_m + 0 = a_m \ne 0$, so equality holds. If $m = n$, the coefficient of $x^m$ in
$f + g$ is $a_m + b_m$, which is nonzero (equality) unless $b_m = -a_m$, in which case the top terms
cancel and the degree drops. $\blacksquare$

### Worked Instance

Multiply $(x^2 + 1)(x^3 - 2)$:
$$(x^2 + 1)(x^3 - 2) = x^5 - 2x^2 + x^3 - 2 = x^5 + x^3 - 2x^2 - 2.$$
Degree $5 = 2 + 3$, leading coefficient $1 = 1 \cdot 1$, exactly as predicted. Now the Hook: any two
cubics have degrees $3$ and $3$, so their product has degree $3 + 3 = 6$ with leading coefficient the
product of the two (nonzero) leading coefficients — never anything but degree $6$. Their *sum*,
however, has two degree-$3$ leading terms that may cancel: $(x^3 + x) + (-x^3 + 1) = x + 1$, degree
$1$. That single cancellation is the whole difference between the loose sum rule and the rigid
product rule.

### Pitfalls

- **Degree of a sum is a bound, not a value.** Writing $\deg(f+g) = \max(\deg f, \deg g)$ as an
  equality ignores the cancellation case; it is only $\le$ in general.
- **Cancellation needs equal degrees.** Top terms can only cancel when $\deg f = \deg g$; if the
  degrees differ, the higher leading term always survives.
- **The zero polynomial has no degree $0$.** A nonzero constant like $7$ has degree $0$; the zero
  polynomial is assigned $-\infty$ so that $\deg(fg) = \deg f + \deg g$ keeps working.
- **"Leading" means highest power, not first written.** Always put the polynomial in standard form
  first; the leading coefficient belongs to the largest exponent, wherever it sits on the page.
- **The product rule can fail over the wrong number system.** Over $\ZZ/6\ZZ$, $2 \cdot 3 = 0$, so
  degrees need not add; the proof genuinely uses that $\RR$ has no zero divisors.

:::
:::

## Connections

This node fixes the vocabulary — degree, leading coefficient, standard form — that every later
polynomial result quietly assumes. The additive-vs-multiplicative contrast is exactly what makes
**polynomial division** ([alg-poly-division]) terminate: each subtraction cancels the top term and
strictly lowers the degree. The degree-of-a-product law underlies counting roots in the
**Fundamental Theorem of Algebra** ([alg-fta-algebra]) and controls **end behavior** when
**graphing polynomials** ([alg-graphing-polynomials]). Recognition trigger: any question that hinges
on "how big is this polynomial" — degree of a product, whether a sum can cancel down, or which term
dominates for large $x$.

## History

Polynomials were manipulated long before they were named: al-Khwarizmi and later Islamic algebraists
handled quadratic and cubic expressions verbally around the ninth to twelfth centuries. The modern
symbolic form crystallized with François Viète in the 1590s, who used letters for both knowns and
unknowns, and with René Descartes, whose *La Géométrie* (1637) introduced the superscript exponent
notation $x^n$ and effectively the notion of degree that lets us rank polynomials by their highest
power. Treating polynomials as objects with an arithmetic of their own — a ring in which degree adds
under multiplication — became explicit only in the nineteenth and early twentieth centuries through
the structural work of Richard Dedekind and Emmy Noether. The clean statement "degree adds because
$\RR$ has no zero divisors" is a modern integral-domain insight, not something the founders would
have phrased that way, even though they used the fact freely.
