$\cos 2\theta = 2\cos^2\theta - 1$ and $\cos 3\theta = 4\cos^3\theta - 3\cos\theta$: in each case $\cos n\theta$ is a polynomial in $\cos\theta$ alone — no leftover sines. Is that always true, and if so, is there a formula for that polynomial that avoids expanding a binomial every time?

## Discovery

1. Using De Moivre, $\cos n\theta + i\sin n\theta = (\cos\theta + i\sin\theta)^n$. Expand the right side by the binomial theorem and take the **real part**. Every term you keep has $i$ to an even power. What does $i^{2j}$ equal, and what does each surviving $\sin^{2j}\theta$ become when you write $\sin^2\theta = 1-\cos^2\theta$?
2. Argue from step 1 that $\cos n\theta$ is *some* polynomial in $c:=\cos\theta$. Call it $T_n(c)$, so $T_n(\cos\theta)=\cos n\theta$. Write down $T_0$, $T_1$, $T_2$, $T_3$ explicitly.
3. Now find a recurrence. Apply the product-to-sum identity to $2\cos\theta\cos n\theta$. You should be able to express $\cos(n+1)\theta$ using $\cos n\theta$ and $\cos(n-1)\theta$. Translate that into a relation among $T_{n+1}$, $T_n$, $T_{n-1}$.
4. Use your recurrence to generate $T_4$ and $T_5$ from earlier ones. What is the leading coefficient of $T_n$, and what is its degree?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

The **Chebyshev polynomials of the first kind** $T_n$ are the unique polynomials satisfying
$$T_n(\cos\theta) = \cos n\theta \quad\text{for all }\theta.$$
They are honest polynomials (so $\cos n\theta$ is always a polynomial in $\cos\theta$), given by $T_0(x)=1$, $T_1(x)=x$, and the recurrence
$$T_{n+1}(x) = 2x\,T_n(x) - T_{n-1}(x).$$
$T_n$ has degree $n$ and leading coefficient $2^{n-1}$ for $n\ge 1$. E.g. $T_2=2x^2-1$, $T_3=4x^3-3x$, $T_4=8x^4-8x^2+1$, $T_5=16x^5-20x^3+5x$.

### Proof

**$\cos n\theta$ is a polynomial in $\cos\theta$.** By De Moivre, $\cos n\theta=\operatorname{Re}\big((\cos\theta+i\sin\theta)^n\big)=\sum_{j\ge 0}\binom{n}{2j}(\cos\theta)^{n-2j}(i\sin\theta)^{2j}$, keeping only even powers of $i$ for the real part. Since $(i\sin\theta)^{2j}=(-1)^j\sin^{2j}\theta=(-1)^j(1-\cos^2\theta)^{j}$, every term is a polynomial in $\cos\theta$. Hence $\cos n\theta = T_n(\cos\theta)$ for a polynomial $T_n$.

**Recurrence.** By product-to-sum, $2\cos\theta\cos n\theta = \cos(n+1)\theta + \cos(n-1)\theta$, so
$$\cos(n+1)\theta = 2\cos\theta\cos n\theta - \cos(n-1)\theta.$$
Writing $x=\cos\theta$ and using $\cos m\theta=T_m(x)$ throughout,
$$T_{n+1}(x) = 2x\,T_n(x) - T_{n-1}(x).$$
Since $\cos\theta$ ranges over the whole interval $[-1,1]$ (infinitely many values), a polynomial identity that holds for all these $x$ holds identically, so this is a genuine polynomial recurrence.

**Degree and leading coefficient.** Induct: $T_1=x$ has degree $1$, leading coefficient $1=2^0$. If $T_n$ has degree $n$ with leading coefficient $2^{n-1}$ and $T_{n-1}$ has degree $n-1$, then $2x\,T_n$ has degree $n+1$ with leading coefficient $2\cdot 2^{n-1}=2^n$, and subtracting the lower-degree $T_{n-1}$ does not touch that top term. So $T_{n+1}$ has degree $n+1$ and leading coefficient $2^{(n+1)-1}$.

**Uniqueness.** Two polynomials agreeing at the infinitely many points $x=\cos\theta\in[-1,1]$ are equal, so $T_n$ is uniquely determined by $T_n(\cos\theta)=\cos n\theta$. $\blacksquare$

### Worked Instance

Compute $T_4$ from the recurrence and use it to find $\cos 4\theta$ in terms of $c=\cos\theta$.
$$T_4 = 2x\,T_3 - T_2 = 2x(4x^3-3x) - (2x^2-1) = 8x^4 - 6x^2 - 2x^2 + 1 = 8x^4 - 8x^2 + 1.$$
Therefore $\cos 4\theta = 8\cos^4\theta - 8\cos^2\theta + 1$. Sanity check at $\theta=0$: $T_4(1)=8-8+1=1=\cos 0$. ✓ At $\theta=\tfrac{\pi}{2}$, $c=0$: $T_4(0)=1=\cos 2\pi$. ✓

### Pitfalls

- The recurrence needs **both** seeds $T_0=1$ and $T_1=x$; starting from only one goes nowhere.
- $\cos n\theta$ is a polynomial in $\cos\theta$, but $\sin n\theta$ is *not* a polynomial in $\sin\theta$ alone for even $n$ (it carries a factor of $\cos\theta$). The clean polynomial story is the cosine one.
- Leading coefficient is $2^{n-1}$, not $2^n$ — off-by-one in the exponent is common.
- $T_n$ maps $[-1,1]$ into $[-1,1]$ (since it equals $\cos n\theta$); don't expect that on inputs outside $[-1,1]$.

:::
:::

## Connections

Prereqs: De Moivre's theorem (the source of "$\cos n\theta$ as a real part") and product-to-sum (the source of the recurrence). Chebyshev polynomials recur across the atlas: as extremal polynomials (smallest sup-norm with fixed leading coefficient), in approximation theory, and in problems asking to express $\cos n\theta$ or bound polynomials on $[-1,1]$. Recognition trigger: "write $\cos n\theta$ as a polynomial," a recurrence $a_{n+1}=2xa_n-a_{n-1}$, or a minimization of a polynomial's maximum on $[-1,1]$.
