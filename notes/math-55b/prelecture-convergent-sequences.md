---
course: math-55b
chapter: 1
section: P2
title: Convergent Sequences
source-pages: 12-16
---

:::definition
A sequence $\{p_n\}$ in a metric space $X$ is said to **converge** if there is a point $p\in X$ with the following property: for every $\eps>0$ there is an integer $N$ such that $n\geq N$ implies that $d(p_n,p)<\eps$. In this case we also say that $\{p_n\}$ **converges to** $p$, or that $p$ is the **limit** of $\{p_n\}$, and we write $p_n\to p$, or $\lim_{n\to\infty}p_n=p$. If $\{p_n\}$ does not converge, it is said to **diverge**.
:::

:::note
The sequence $\{1/n\}$ converges to $0$ in $\RR$, but in $\RR_{>0}$, $\{1/n\}$ does not converge. Thus it is important to specify that “$\{p_n\}$ is convergent in $X$.”
:::

If the range of a sequence is bounded, we say $\{p_n\}$ is **bounded**. The range of a sequence, bounded or unbounded, may be infinite or finite.

## Examples

Assume all the following are in $\CC$.

:::example
If $s_n=1/n$, then $\lim_{n\to\infty}s_n=0$. So $\{s_n\}$ is bounded and has an infinite range.
:::

:::example
If $s_n=n^2$, then $\{s_n\}$ is divergent, unbounded, and has infinite range.
:::

:::example
If $s_n=i^n$, then $\{s_n\}$ is divergent, bounded, and has finite range.
:::

## Basic properties of convergence

:::theorem
**(a)** $\{p_n\}$ converges to $p\in X$ if and only if every neighborhood of $p$ contains $p_n$ for all but finitely many $n$. *”There are infinitely many points arbitrarily close to $p$ and only finitely many points outside of any radius $\eps$ around $p$ iff $\{p_n\}$ converges to $p\in X$.”*

**(b)** If $p\in X$, $p'\in X$, and $\{p_n\}$ converges to $p$ and to $p'$, then $p'=p$. *”If a sequence converges to two limits, then those limits are the same limit.”*

**(c)** If $\{p_n\}$ converges, then $\{p_n\}$ is bounded. *”If $\{p_n\}$ converges then its range $\in\RR$.”* (Shorthand; technically untrue.)

**(d)** If $E\subset X$ and if $p$ is a limit point of $E$, then there is a sequence $\{p_n\}$ in $E$ such that $p=\lim_{n\to\infty}p_n$. *”Duh.”*
:::

:::proof
**(a), $\Rightarrow$:** Suppose $p_n\to p$ and let $V$ be a neighborhood of $p$. For some $\eps>0$, the conditions $d(q,p)<\eps$, $q\in X$ imply $q\in V$. Then, corresponding to this $\eps$, there exists $N$ such that $n\geq N$ implies $d(p_n,p)<\eps$. Thus $n\geq N$ implies $p_n\in V$.

**(a), $\Leftarrow$:** Suppose every neighborhood of $p$ contains all but finitely many of the $p_n$. Fix $\eps>0$, and let $V$ be the set of all $q\in X$ such that $d(p,q)<\eps$. By assumption, there exists $N$ (corresponding to this $V$) such that $p_n\in V$ if $n\geq N$. Thus $d(p_n,p)<\eps$ if $n\geq N$; hence $p_n\to p$.

**(b)** Suppose $p_n\to a$ and $p_n\to b$, and let $\eps>0$ be given. There exist $N_1,N_2\in\NN$ such that
$$n\geq N_1\implies d(p_n,a)<\frac{\eps}{2},\qquad n\geq N_2\implies d(p_n,b)<\frac{\eps}{2}.$$
Hence for $n\geq\max(N_1,N_2)$ we have
$$d(a,b)\leq d(a,p_n)+d(b,p_n)<\eps,$$
and since $\eps$ is arbitrary, $d(a,b)=0\implies a=b$.

**(c)** Let $p_n\to p$. There exists $N\in\ZZ$ such that $n>N\implies d(p_n,p)<1$. Put
$$r=\max\big(1,d(p_1,p),\dots,d(p_N,p)\big).$$
Then $d(p_n,p)\leq r$ for $n=1,2,3,\dots$.

**(d)** For each positive integer $n$, there is a point $p_n\in E$ such that $d(p_n,p)<1/n$. Given $\eps>0$, choose $N$ so that $N\eps>1$. If $n>N$, it follows that $d(p_n,p)<\eps$. Hence $p_n\to p$.
:::

:::note
Return to Rudin p. 49.
:::
