What is $\binom{100}{0} + \binom{100}{3} + \binom{100}{6} + \cdots$ — the sum of every third
binomial coefficient? Adding a few dozen large numbers is hopeless; but averaging the same
polynomial evaluated at three cleverly chosen points sieves out exactly the terms you want.

## Discovery

1. Let $\omega = e^{2\pi i/n}$, a primitive $n$-th root of unity. Compute the sum
   $1 + \omega^j + \omega^{2j} + \cdots + \omega^{(n-1)j}$ for an integer $j$. Split into two
   cases: when $n \mid j$, and when $n \nmid j$ (use the geometric-series sum and
   $\omega^{nj} = 1$). What are the two possible values?
2. Take a polynomial or power series $f(x) = \sum_{k} c_k x^k$. Form the average
   $\dfrac{1}{n}\sum_{t=0}^{n-1} f(\omega^t x)$. Substitute the series and swap the order of
   summation. Using step 1 on the inner sum $\sum_t \omega^{tk}$, which coefficients $c_k$ survive?
3. Now set $x = 1$ (or $x = $ your favorite value) after filtering. What sum of coefficients have
   you isolated, and how does the choice of residue class enter (i.e. how do you pick out
   $k \equiv r \pmod n$ instead of $k \equiv 0$)?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

Let $f(x) = \sum_{k \ge 0} c_k x^k$ and let $\omega = e^{2\pi i / n}$. Then for any residue
$r \in \{0, 1, \dots, n-1\}$,
$$\sum_{k \equiv r \ (\mathrm{mod}\ n)} c_k\, x^k = \frac{1}{n}\sum_{t=0}^{n-1} \omega^{-tr} f(\omega^t x).$$
In particular, setting $x = 1$,
$$\sum_{k \equiv r \ (\mathrm{mod}\ n)} c_k = \frac{1}{n}\sum_{t=0}^{n-1} \omega^{-tr} f(\omega^t).$$
This "roots-of-unity filter" extracts every $n$-th coefficient of a generating function by
averaging its values at the $n$-th roots of unity. The engine is the orthogonality relation
$\frac1n\sum_{t=0}^{n-1}\omega^{t j} = [\,n \mid j\,]$.

### Proof

First the orthogonality relation. Fix an integer $j$. If $n \mid j$ then $\omega^j = 1$, so each of
the $n$ terms is $1$ and $\sum_{t=0}^{n-1}\omega^{tj} = n$. If $n \nmid j$ then $\omega^j \ne 1$,
and by the finite geometric sum
$$\sum_{t=0}^{n-1}\omega^{tj} = \frac{\omega^{nj} - 1}{\omega^j - 1} = \frac{(\omega^n)^j - 1}{\omega^j - 1} = \frac{1 - 1}{\omega^j - 1} = 0,$$
since $\omega^n = 1$. Thus $\frac1n\sum_{t=0}^{n-1}\omega^{tj} = [\,n \mid j\,]$.

Now compute the filter. Substitute the series and exchange the (finite, or absolutely convergent)
sums:
$$\frac1n\sum_{t=0}^{n-1}\omega^{-tr} f(\omega^t x) = \frac1n\sum_{t=0}^{n-1}\omega^{-tr}\sum_{k\ge 0} c_k \omega^{tk} x^k = \sum_{k\ge 0} c_k x^k \left(\frac1n\sum_{t=0}^{n-1}\omega^{t(k-r)}\right).$$
By orthogonality the inner average is $[\,n \mid (k - r)\,] = [\,k \equiv r \pmod n\,]$. So only the
terms with $k \equiv r \pmod n$ survive, giving exactly $\sum_{k \equiv r} c_k x^k$. $\blacksquare$

### Worked Instance

Sum every third binomial coefficient of $(1+x)^{100}$: take $f(x) = (1+x)^{100}$, so $c_k =
\binom{100}{k}$, with $n = 3$, $r = 0$, and $\omega = e^{2\pi i/3}$. Then
$$\sum_{k \equiv 0\,(3)} \binom{100}{k} = \frac{1}{3}\Big[f(1) + f(\omega) + f(\omega^2)\Big] = \frac{1}{3}\Big[2^{100} + (1+\omega)^{100} + (1+\omega^2)^{100}\Big].$$
Since $1 + \omega = -\omega^2$ and $1 + \omega^2 = -\omega$ (because $1 + \omega + \omega^2 = 0$),
and $100 = 3\cdot 33 + 1$:
$$(1+\omega)^{100} = (-\omega^2)^{100} = \omega^{200} = \omega^{2}, \qquad (1+\omega^2)^{100} = (-\omega)^{100} = \omega^{100} = \omega.$$
So the bracket is $2^{100} + \omega + \omega^2 = 2^{100} - 1$, giving
$$\sum_{k \equiv 0\,(3)} \binom{100}{k} = \frac{2^{100} - 1}{3}.$$

### Pitfalls

- Use the $\omega^{-tr}$ phase to target residue $r$; for $r = 0$ it is just a plain average, but
  forgetting it for $r \ne 0$ extracts the wrong class.
- $\omega$ must be a **primitive** $n$-th root; a non-primitive choice breaks orthogonality.
- Simplify $(1 + \omega^t)$ powers using $1 + \omega + \cdots + \omega^{n-1} = 0$ and reduce
  exponents mod $n$ — don't try to expand numerically.

:::
:::

## Connections

Prereqs: roots of unity and their geometry (their vanishing sum $\sum \omega^t = 0$). The filter is
the discrete Fourier projection onto a residue class and is the standard finisher for
generating-function problems, digit/counting problems mod $n$, and "sum every $k$-th term"
identities. Recognition trigger: a sum over an arithmetic progression of indices ($k \equiv r
\bmod n$) of coefficients you can package into a polynomial or power series.
