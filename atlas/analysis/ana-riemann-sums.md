Evaluate $\displaystyle\lim_{n\to\infty}\left(\frac{1}{n+1}+\frac{1}{n+2}+\cdots+\frac{1}{2n}\right)$.
Each term shrinks to $0$, but there are $n$ of them, so the sum could do anything. It converges — to
$\ln 2 = 0.6931\ldots$ Where does a logarithm come from, when nothing in the sum mentions one?

## Discovery

Recall $\int_a^b f = \lim$ of sums $\sum f(x_i^\ast)\,\Delta x$ over finer and finer partitions, and
that $\int \frac{1}{x}\,dx = \ln|x|$.

1. Look at $S_n=\sum_{k=1}^{n}\frac{1}{n+k}$. Factor an $\frac1n$ out of each term so that the term
   depends on $k$ only through the ratio $\frac{k}{n}$. Write $S_n=\frac1n\sum_{k=1}^n g\!\left(\frac
   kn\right)$ and identify the function $g$.
2. Partition $[0,1]$ into $n$ equal pieces of width $\frac1n$, with right endpoints $x_k=\frac kn$.
   What is the Riemann sum $\sum_{k=1}^n g(x_k)\,\Delta x$ for your $g$? Compare it to $S_n$.
3. As $n\to\infty$ the mesh $\frac1n\to0$ and the Riemann sum converges to a definite integral (for
   continuous $g$). Which integral $\int_0^1 g(x)\,dx$?
4. Evaluate that integral to get the limit. Reflect: the general recipe is to spot $\frac1n$ (the
   width) times a sample of $g$ at $\frac kn$ (the height). Where does the interval $[0,1]$ come from,
   and what would change if the index ran $k=1,\dots,2n$ instead?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Riemann-sum limit.** If $g$ is continuous on $[a,b]$, then with $\Delta x=\frac{b-a}{n}$ and
sample points $x_k=a+k\,\Delta x$,
$$\lim_{n\to\infty}\sum_{k=1}^{n} g(x_k)\,\Delta x = \int_a^b g(x)\,dx.$$
The workhorse special case ($a=0,b=1$, right endpoints):
$$\lim_{n\to\infty}\frac{1}{n}\sum_{k=1}^{n} g\!\left(\frac{k}{n}\right) = \int_0^1 g(x)\,dx.$$
**Recognition recipe:** a limit of a sum with a factor $\frac1n$ (or $\frac{b-a}{n}$) and a summand
depending on $k$ only through $\frac kn$ *is* an integral in disguise. The endpoints come from the
range of $\frac kn$; the sample-point choice (left/right/midpoint) does not affect the limit for
continuous $g$.

### Proof

Let $g$ be continuous on $[a,b]$, hence integrable and uniformly continuous. Fix $\varepsilon\gt0$.
By uniform continuity there is $\delta\gt0$ with $|g(s)-g(t)|\lt\frac{\varepsilon}{b-a}$ whenever
$|s-t|\lt\delta$. Take $n$ large enough that the mesh $\Delta x=\frac{b-a}{n}\lt\delta$. On the
$k$-th subinterval $[x_{k-1},x_k]$ of width $\Delta x$, the integral contributes
$\int_{x_{k-1}}^{x_k} g(x)\,dx$, while the Riemann sum contributes $g(x_k)\,\Delta x$. Their
difference on that piece is
$$\left|\int_{x_{k-1}}^{x_k}\!\!\big(g(x)-g(x_k)\big)\,dx\right|
\le \int_{x_{k-1}}^{x_k}\!\! |g(x)-g(x_k)|\,dx \lt \frac{\varepsilon}{b-a}\,\Delta x,$$
since every $x$ in the piece is within $\Delta x\lt\delta$ of $x_k$. Summing over the $n$ pieces,
$$\left|\int_a^b g\,dx - \sum_{k=1}^n g(x_k)\Delta x\right|
\lt \frac{\varepsilon}{b-a}\sum_{k=1}^n \Delta x = \frac{\varepsilon}{b-a}\,(b-a)=\varepsilon.$$
As $\varepsilon$ was arbitrary, the sums converge to the integral. $\blacksquare$

### Worked Instance

Resolve the Hook. $S_n=\sum_{k=1}^{n}\frac{1}{n+k}$. Factor out $\frac1n$:
$$S_n=\sum_{k=1}^n\frac{1}{n(1+k/n)}=\frac1n\sum_{k=1}^n\frac{1}{1+k/n}.$$
This is the right-endpoint Riemann sum for $g(x)=\frac{1}{1+x}$ on $[0,1]$. Therefore
$$\lim_{n\to\infty}S_n=\int_0^1\frac{dx}{1+x}=\big[\ln(1+x)\big]_0^1=\ln 2.$$
The logarithm appears because $\frac1{1+x}$ integrates to $\ln(1+x)$ — invisible in the sum, forced
by the integral.

**A second one.** $\lim_{n\to\infty}\frac1n\sum_{k=1}^n \sqrt{\frac kn}=\int_0^1\sqrt x\,dx
=\big[\tfrac23 x^{3/2}\big]_0^1=\tfrac23$.

### Pitfalls

- **You must extract the width factor.** The $\frac1n$ (or $\frac{b-a}{n}$) is the $\Delta x$; without
  isolating it you cannot read off $g$ or the interval.
- **The summand must depend on $k$ only via $\frac kn$.** If a stray $n$ survives inside $g$ (not as
  $\frac kn$), it is *not* a plain Riemann sum — algebra first.
- **Endpoints follow the index range.** $k=1,\dots,n$ with $x_k=\frac kn$ covers $(0,1]$; a range like
  $k=n,\dots,2n$ shifts the interval to $[1,2]$.
- **Continuity is enough.** Left, right, or midpoint samples all give the same limit for continuous
  $g$; the endpoint contributions vanish as $n\to\infty$.

:::
:::

## Connections

Prereqs: the definition of the definite integral as a limit of sums (limits), and the integration
techniques used to *evaluate* the resulting integral. This is a Putnam and AIME staple for taming
sums that resist closed form. Recognition trigger: a limit of a sum whose terms carry a $\frac1n$
factor and depend on the index only through $\frac kn$ — reach for "this is $\int_0^1 g$."
