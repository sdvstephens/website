Legend says a young Gauss was told to add $1 + 2 + 3 + \cdots + 100$ and answered $5050$ almost at once, while classmates ground through the additions. He saw a shortcut. What did he pair up?

## Discovery

1. Write the sum $S = 1 + 2 + 3 + \cdots + 100$. Now write the very same sum *backwards* underneath it: $100 + 99 + 98 + \cdots + 1$. Add the two rows *column by column*: what is $1 + 100$? What is $2 + 99$? What is $3 + 98$? Do these column totals stay the same?
2. How many columns are there? Since every column sums to the same value from step 1, what is the grand total of both rows together (all columns added)?
3. That grand total counts the sum $S$ *twice* (once forwards, once backwards). Recover $S$ itself. What number do you get for $1 + \cdots + 100$?
4. Now redo the whole argument with $n$ in place of $100$: a general last term. What is each column total, how many columns, and hence a formula for $1 + 2 + \cdots + n$? (Handle the "how many columns" honestly — it is $n$, but check the pairing still works when $n$ is odd, where a middle term pairs with itself.)

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

For every positive integer $n$,
$$1 + 2 + 3 + \cdots + n = \sum_{k=1}^{n} k = \frac{n(n+1)}{2}.$$
These values $\tfrac{n(n+1)}{2}$ are the **triangular numbers** $1, 3, 6, 10, 15, \dots$. The proof is Gauss's pairing: add the sum to its own reversal, so each of the $n$ columns totals $n+1$, giving $2S = n(n+1)$.

### Proof

Let $S = \sum_{k=1}^{n} k$. Write it forwards and backwards and add termwise:
$$
\begin{aligned}
S &= 1 + 2 + \cdots + (n-1) + n,\\
S &= n + (n-1) + \cdots + 2 + 1.
\end{aligned}
$$
Adding the two lines column by column, the $k$-th column is $k + (n+1-k) = n+1$, *independent of $k$*. There are exactly $n$ columns, so the total of both lines is
$$2S = \underbrace{(n+1) + (n+1) + \cdots + (n+1)}_{n \text{ terms}} = n(n+1).$$
Therefore $S = \dfrac{n(n+1)}{2}$. Since $n$ and $n+1$ are consecutive integers, exactly one is even, so $n(n+1)$ is even and $S$ is a genuine integer. (When $n$ is odd the "middle" term $\tfrac{n+1}{2}$ pairs with itself, contributing $n+1$ to the doubled sum just like every other column — the count of $n$ columns is unaffected.) $\blacksquare$

### Worked Instance

Gauss's task, $n = 100$: each of the $100$ columns totals $100 + 1 = 101$, so $2S = 100\cdot 101 = 10{,}100$ and
$$S = \frac{100\cdot 101}{2} = \frac{10{,}100}{2} = 5050.$$
That is the $5050$ of the legend — obtained not by $99$ additions but by one multiplication and a halving, resolving the Hook. As a second check, $n = 4$: $\tfrac{4\cdot 5}{2} = 10 = 1+2+3+4$. ✓

### Pitfalls

- The formula is $\tfrac{n(n+1)}{2}$, not $\tfrac{n^2}{2}$ or $\tfrac{n(n-1)}{2}$. Off-by-one in the last factor is the standard error; $\tfrac{n(n-1)}{2}$ is the sum $1 + \cdots + (n-1)$ instead.
- Watch the endpoints: $\sum_{k=1}^{n}$ starts at $1$. To sum from $a$ to $n$, subtract: $\tfrac{n(n+1)}{2} - \tfrac{(a-1)a}{2}$.
- $n(n+1)$ is always even, so the halving is exact — the answer is always a whole number; a fractional result signals an arithmetic slip.
- The pairing works for odd $n$ too; the self-paired middle term is not a special case to fear.

:::
:::

## Connections

Prereqs: place value / basic arithmetic. Gauss pairing is the archetype of *reindexing a sum to expose symmetry*, and its answer $\tfrac{n(n+1)}{2}$ is the base case for arithmetic series (`ser-arith-geom`), the sum of odd numbers (`found-sum-odds`), and telescoping (`found-telescoping-intro`). Recognition trigger: a sum whose terms are symmetric around a center — pair the ends inward. It is the first "closed form for a sum" a problem-solver should reach for.

## History

The pairing trick for summing $1+2+\cdots+n$ is famously attached to Carl Friedrich Gauss, who as a schoolboy — the usual telling puts him around age seven or eight, near 1785 — is said to have instantly summed the integers from 1 to 100 by pairing terms from the ends into fifty pairs each totaling 101. The anecdote comes from Gauss's own later recollections and his biographers, so its details are somewhat embellished, but the method itself is much older, essentially known to the Pythagoreans through the triangular numbers. The formula $\frac{n(n+1)}{2}$ appears in ancient Greek and Indian sources. What the story dramatizes is the power of reorganizing a sum to exploit a clever pairing. ANABASIS uses Gauss's pairing as the model example of summing an arithmetic series.
