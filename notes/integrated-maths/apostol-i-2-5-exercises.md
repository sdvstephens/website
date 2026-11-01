---
course: integrated-maths
chapter: 13
section: I 2.5
title: Exercises
source-pages: apostol-05, apostol-06, apostol-07
---

:::exercise 1
Use roster notation for the sets
$$
\begin{aligned}
A &= \{x \mid x^2 - 1 = 0\}, & C &= \{x \mid x + 8 = 9\}, & E &= \{x \mid (x + 8)^2 = 9^2\}, \\
B &= \{x \mid (x - 1)^2 = 0\}, & D &= \{x \mid x^3 - 2x^2 + x = 2\}, & F &= \{x \mid (x^2 + 16x)^2 = 17^2\}.
\end{aligned}
$$

:::solution
- $A$: $x^2 - 1 = 0 \Rightarrow x^2 = 1 \Rightarrow x = \pm 1$, so $A = \{-1, 1\}$.
- $B$: $(x - 1)^2 = 0 \Rightarrow x^2 - 2x + 1 = 0 \Rightarrow x = 1$, so $B = \{1\}$.
- $C$: $x + 8 = 9 \Rightarrow x = 1$, so $C = \{1\}$.
- $D$: $x^3 - 2x^2 + x = 2 \Rightarrow x^3 - 2x^2 + x - 2 = 0 \Rightarrow (x - 2)(x^2 + 1) = 0$. Either $x = 2$, or $x^2 = -1$, i.e. $x = \pm\sqrt{-1} \notin \RR$. So $D = \{2\}$.
- $E$: $(x + 8)^2 = 9^2 \Rightarrow x + 8 = \pm 9 \Rightarrow x = -17, 1$, so $E = \{-17, 1\}$.
- $F$: $(x^2 + 16x)^2 = 17^2 \Rightarrow x^2 + 16x = \pm 17$. The quadratic formula on $x^2 + 16x = 0$ gives $\frac{-16 \pm \sqrt{16^2 - 4(1)(0)}}{2(1)} = \frac{-16 \pm 16}{2}$, i.e. $0$ and $-16$. Then $(x + 16)(x) = \pm 17 \Rightarrow (x + 16) = \pm 17$, $x = \pm 17$, so $x = 16 + 17 = 33$ and $x = 16 - 17 = -1$, and $F = \{-17, -1, 17, 33\}$. (F, circled.)
:::
:::

:::remark Correction
The set $F$ is wrong. From $(x^2 + 16x)^2 = 17^2$ we get $x^2 + 16x = 17$ or $x^2 + 16x = -17$. The first gives $(x + 17)(x - 1) = 0$, so $x = -17$ or $x = 1$; the second gives $x = -8 \pm \sqrt{47}$. So $F = \{-17, 1, -8 - \sqrt{47}, -8 + \sqrt{47}\}$, and none of $-1, 17, 33$ lies in $F$ (for example $33^2 + 16 \cdot 33 = 1617$).
:::

:::exercise 2
List the inclusion relations among the sets of Exercise 1.

:::solution
$B \subseteq A$, $C \subseteq A$, $B = C$, $C \subseteq E$, $B \subseteq E$.
:::
:::

:::remark Correction
With the corrected $F$ from Exercise 1, three more inclusions hold: $B \subseteq F$, $C \subseteq F$ and $E \subseteq F$.
:::

:::exercise 3
Let $A = \{1\}$, $B = \{1, 2\}$. True or false?

:::solution
| | Statement | Reason | |
|---|---|---|---|
| (a) | $A \subset B$ | $1 \in \{1, 2\}$, and $A \neq B$ | ✓ |
| (b) | $A \subseteq B$ | $1 \in \{1, 2\}$ | ✓ |
| (c) | $A \in B$ | $\{1\} \in \{1, 2\}$? | ✗ |
| (d) | $1 \in A$ | $1 \in \{1\}$ | ✓ |
| (e) | $1 \subseteq A$ | is $1$ a set? No. | ✗ |
| (f) | $1 \subset B$ | $1$ is not a set. | ✗ |
:::
:::

:::exercise 4
Let $A = \{1\}$, $B = \{\{1\}, 1\}$. True or false?

:::solution
| | Statement | Reason | |
|---|---|---|---|
| (a) | $A \subset B$ | $\{1\} \in \{\{1\}, 1\}$ and $\{1\} \neq \{\{1\}, 1\}$ | ✓ |
| (b) | $A \subseteq B$ | $\{1\} \in \{\{1\}, 1\}$ | ✓ |
| (c) | $A \in B$ | $\{1\} \in \{\{1\}, 1\}$ | ✓ |
| (d) | $1 \in A$ | $1 \in \{1\}$ | ✓ |
| (e) | $1 \subseteq A$ | | ✗ |
| (f) | $1 \subset B$ | | ✗ |
:::
:::

:::remark Correction
The answers are right, but the reasons given for (a) and (b) belong to (c). For (b), every element of $A$ lies in $B$: the only element of $A$ is $1$, and $1 \in B$. For (a), $A \subseteq B$ holds and $A \neq B$ because $\{1\} \in B$ while $\{1\} \notin A$. The fact $\{1\} \in B$ says that $A$ itself is an element of $B$, which is the reason for (c).
:::

:::exercise 5
List all subsets of $S = \{1, 2, 3, 4\}$.

:::solution
1. $\{1\} \subseteq S$
2. $\{2\} \subseteq S$
3. $\{3\} \subseteq S$
4. $\{4\} \subseteq S$
5. $\varnothing \subseteq S$
6. $S \subseteq S$
7. $\{1, 2\} \subseteq S$
8. $\{1, 2, 3\} \subseteq S$
9. $\{1, 2, 3, 4\} \subseteq S$
10. $\{S, 1, 2, 3, 4\} \subseteq S$
11. $\{S, 1, 2\} \subseteq S$
12. $\{S, 1\} \subseteq S$
13. $\{S, 1, 2, 3\} \subseteq S$
14. $\varnothing, \{1, 2, 3\} \subseteq S$
15. $\varnothing, \{1, 2\} \subseteq S$
16. $\varnothing, \{1, 2, 3, 4\} \subseteq S$
:::
:::

:::remark Correction
This list repeats itself and includes sets that are not subsets of $S$: item 9 is $S$ again (item 6), items 10 to 13 have $S$ as an element and so are not subsets of $S$, and items 14 to 16 each name two sets at once. The $16$ subsets of $S$ are $\varnothing$; $\{1\}, \{2\}, \{3\}, \{4\}$; $\{1,2\}, \{1,3\}, \{1,4\}, \{2,3\}, \{2,4\}, \{3,4\}$; $\{1,2,3\}, \{1,2,4\}, \{1,3,4\}, \{2,3,4\}$; and $S$.
:::

:::exercise 6
Let $A = \{1, 2\}$, $B = \{\{1\}, \{2\}\}$, $C = \{\{1\}, \{1, 2\}\}$, $D = \{\{1\}, \{2\}, \{1, 2\}\}$. True or false?

:::solution
| | Statement | Reason | |
|---|---|---|---|
| (a) | $A = B$ | $\{1, 2\} = \{\{1\}, \{2\}\}$? | ✗ |
| (b) | $A \subseteq B$ | $\{1, 2\} \subseteq \{\{1\}, \{2\}\}$? | ✗ |
| (c) | $A \subset B$ | $\{1, 2\} \subset \{\{1\}, \{2\}\}$? | ✗ |
| (d) | $A \in C$ | $\{1, 2\} \in \{\{1\}, \{1, 2\}\}$ | ✓ |
| (e) | $A \subset D$ | $\{1, 2\} \subset \{\{1\}, \{1, 2\}\}$, and $A \neq D$ | ✗ |
| (f) | $B \subset D$ | $\{\{1\}, \{2\}\} \subset \{\{1\}, \{2\}, \{1, 2\}\}$, and $B \neq D$ | ✓ |
:::
:::

:::remark Correction
The ✗ in (e) is correct, but the reason shown writes $D$ as $\{\{1\}, \{1, 2\}\}$, which is $C$. In fact $D = \{\{1\}, \{2\}, \{1, 2\}\}$, and $A \subset D$ would require the numbers $1$ and $2$ to be elements of $D$, which they are not. What is true is $A \in D$.
:::

:::exercise 7
Prove that (a) $\{a, a\} = \{a\}$, (b) $\{a, b\} = \{b, a\}$, (c) $\{a\} = \{b, c\}$ if and only if $a = b = c$.

:::solution
(a) $\{a, a\} = \{a\}$: any set $\{x, x\}$ is equal to the set $\{x\}$.

(b) $\{a, b\} = \{b, a\}$: associativity/commutativity of sets.

(c) $\{a\} = \{b, c\}$ if $a = b = c$: equivalence.
:::
:::

:::exercise 8
Commutative laws: $A \cup B = B \cup A$, $A \cap B = B \cap A$.
:::

:::exercise 9
Associative laws: $A \cup (B \cup C) = (A \cup B) \cup C$, $A \cap (B \cap C) = (A \cap B) \cap C$.
:::

:::exercise 10
Distributive laws: $A \cap (B \cup C) = (A \cap B) \cup (A \cap C)$, $A \cup (B \cap C) = (A \cup B) \cap (A \cup C)$.
:::

:::exercise 11
If $\mcF$ is a class of sets, then
$$
B - \bigcup_{A \in \mcF} A = \bigcap_{A \in \mcF} (B - A) \qquad \text{and} \qquad B - \bigcap_{A \in \mcF} A = \bigcup_{A \in \mcF} (B - A).
$$
:::
