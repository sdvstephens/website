---
course: math-55a
chapter: 2
section: 2.6
title: The Order of an Element
---

# Section 2.6: The Order of an Element

We've introduced order; now we develop its theory more fully.

:::proposition
**Powers and order:** Let $a \in G$ have finite order $n$. Then:

1. $a^k = e \iff n \mid k$.
2. $a^i = a^j \iff n \mid (i - j)$.
3. The elements $e, a, a^2, \ldots, a^{n-1}$ are all distinct.

:::proof
**(1)** ($\Leftarrow$) If $k = mn$, then $a^k = (a^n)^m = e^m = e$. ($\Rightarrow$) Write $k = qn + r$ with $0 \le r < n$. Then $e = a^k = a^{qn+r} = (a^n)^q a^r = a^r$. By minimality of $n$, $r = 0$, so $n \mid k$.

**(2)** $a^i = a^j \iff a^{i-j} = e \iff n \mid (i-j)$ by (1).

**(3)** If $a^i = a^j$ for $0 \le i < j < n$, then $a^{j-i} = e$ with $0 < j - i < n$, contradicting minimality of $n$.
:::
:::

:::proposition
**Order of powers:** Let $\operatorname{ord}(a) = n$. Then $\operatorname{ord}(a^k) = \dfrac{n}{\gcd(k, n)}$.

:::proof
Let $d = \gcd(k, n)$. We show $\operatorname{ord}(a^k) = n/d$.

First, $(a^k)^{n/d} = a^{kn/d} = (a^n)^{k/d} = e$, so $\operatorname{ord}(a^k) \mid n/d$.

Conversely, let $m = \operatorname{ord}(a^k)$. Then $a^{km} = e$, so $n \mid km$. Write $k = d \cdot k'$ and $n = d \cdot n'$ where $\gcd(k', n') = 1$. Then $dn' \mid dk'm$, so $n' \mid k'm$. Since $\gcd(k', n') = 1$, we have $n' \mid m$, i.e., $n/d \mid m$. Thus $m = n/d$.
:::
:::

:::corollary
**Generators of cyclic groups:** In $\langle a \rangle$ of order $n$, the element $a^k$ is a generator iff $\gcd(k, n) = 1$.
:::

:::example
In $\mathbb{Z}/12$, the generators are $1, 5, 7, 11$ (the four elements coprime to 12). The element $4$ has order $12/\gcd(4,12) = 12/4 = 3$.
:::

:::example
**Exercises:**

1. In a group $G$, if $a^{12} = e$ and $a^8 = e$, what are the possible orders of $a$?
2. Prove: if $\operatorname{ord}(a) = n$ and $\operatorname{ord}(b) = m$ with $\gcd(n,m) = 1$ and $ab = ba$, then $\operatorname{ord}(ab) = nm$.
3. Find the order of $(2, 3)$ in $\mathbb{Z}/6 \times \mathbb{Z}/8$.

:::solution
**(1)** $\operatorname{ord}(a)$ divides both 12 and 8, so $\operatorname{ord}(a) \mid \gcd(12, 8) = 4$. Possible orders: 1, 2, 4.

**(2)** Let $k = \operatorname{ord}(ab)$. Then $e = (ab)^{nm} = a^{nm}b^{nm} = (a^n)^m (b^m)^n = e$ (using commutativity), so $k \mid nm$.

Now $e = (ab)^{kn} = a^{kn}b^{kn} = b^{kn}$ (since $a^n = e$), so $m \mid kn$. Since $\gcd(m,n) = 1$, $m \mid k$. Similarly, $n \mid k$. Since $\gcd(m,n) = 1$, $mn \mid k$. Thus $k = mn$.

**(3)** $\operatorname{ord}(2, 3) = \operatorname{lcm}(\operatorname{ord}(2), \operatorname{ord}(3)) = \operatorname{lcm}(6/\gcd(2,6), 8/\gcd(3,8)) = \operatorname{lcm}(3, 8) = 24$.
:::
:::