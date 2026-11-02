---
course: integrated-maths
chapter: 7
section: 7.1
title: Sets: Notation, Subsets and Operations
---

We begin with an introduction to sets. (Despite conventional wisdom, I will not start with the Peano axioms.)

## Sets and their elements

:::definition
A **set** is a collection of objects, its **elements** (or **members**).
:::

Sets can be of names, dogs, cats, numbers, curves, geometric figures, and more. When nothing special is assumed about a set, it is known as an **abstract set**. Abstract set theory is a subfield of set theory.

:::example
$\{\text{dog}, \text{cat}, \text{bear}\}$, $\{\text{orange}, \text{bathroom}\}$, $\{\text{parrot}, 2765\}$.
:::

![A set drawn as a circle holding a cat, a fork, a watermelon and a chair; a circle holding all numbers; two overlapping circles; two separate circles](/notes/integrated-maths/figures/q1-im1-sets-pictures.svg)

## Notation

Sets are commonly denoted by capital letters: $A, B, C, D, \dots, X, Y, Z$. Elements are commonly denoted by lower-case letters: $a, b, c, \dots, x, y, z$.

- “$x \in S$” means “$x$ belongs to $S$”.
- “$x \notin S$” means “$x$ does not belong to $S$”.

:::example
The set of all positive even integers less than $10$:
$$
S = \{2, 4, 6, 8\}.
$$
The set of all positive even integers:
$$
S = \{2, 4, 6, 8, 10, \dots\},
$$
where “$\dots$” means “and so on”.
:::

Listing out the elements/members of a set within braces is referred to as **roster notation**.

$A = B$ when all elements are the same, and $A \neq B$ when the sets are unequal (non-identical).

:::example
$A = \{2, 4, 6, 8\}$ and $B = \{6, 4, 8, 2\}$, thus $A = B$.

$C = \{2, 4, 6, 8\}$ and $D = \{2, 2, 4, 4, 6, 6, 8, 8\}$, thus $C = D$.
:::

## Subsets

The set $A = \{4, 8\}$ is a **subset** of $B = \{2, 4, 6, 8\}$. We write $A$ being a subset of $B$ as $A \subseteq B$.

Note that $A \subseteq B$ and $B \subseteq A$ can hold simultaneously. In such a case we would say that if $A \subseteq B$ and $B \subseteq A$, then $A = B$.

If $A \subseteq B$ but $A \neq B$, this is known as a **proper subset** and is written as $A \subset B$.

## Set-builder notation

The main or fixed set we are concerned with at any given time is known as the **universal set**.
$$
\{x \mid x \in S \text{ and } x \text{ satisfies } P\}
$$
means “all of the elements $x$ that are in $S$ and satisfy condition $P$.”

Sometimes the universal set is understood by implication, and then $\{x \mid x \text{ satisfies } P\}$ is sufficient. Additionally, the set of all positive real numbers can be written as $\{x \mid x > 0\}$, where we assume $x \in \RR$. Reminder that $x$ is a placeholder, and thus $\{x \mid x > 0\} = \{y \mid y > 0\} = \{t \mid t > 0\}$, etc.

### Special sets

$$
\NN = \{0, 1, \dots\}, \qquad \ZZ = \{\dots, -1, 0, 1, \dots\}, \qquad \QQ = \left\{ \tfrac{a}{b} \;\middle|\; a, b \in \ZZ,\ b \neq 0 \right\}.
$$

:::note
The **cardinality** or size of a set is written $|A|$. For example, if $P = \{p \mid p \text{ is a prime number}\}$, then $|P| = \infty$; and if $A = \{1, 2, 3\}$, then $|A| = 3$.
:::

## The empty set

At times, a set will contain no elements. This set is a special set known as the **empty set**, denoted by $\varnothing$. $\varnothing$ is a subset of *every* set.

If a set is a box, then the empty set $\varnothing$ is an empty box. Side note: $\varnothing$ is a Norwegian symbol and was made the notation for the empty set by the secret society known as “Nicolas Bourbaki.”

Note that $x \neq \{x\}$, as a hat is not the same as a box with a hat in it. Similarly, $\varnothing \neq \{\varnothing\}$: $\varnothing$ has no elements, while $\{\varnothing\}$ has one element (the empty set). (Damn, I really ate with that explanation.)

## Unions, intersections and differences

![Four diagrams of two sets A and B: overlapping circles with both shaded for the union, overlapping circles with only the overlap shaded for the intersection, two separate circles for disjoint sets, and two separate shaded circles showing a union can also look like this](/notes/integrated-maths/figures/q1-ap-venn.svg)

- $A \cup B$: the **union**.
- $A \cap B$: the **intersection**.
- $A \cap B = \varnothing$: $A$ and $B$ are **disjoint**.

If $A = \{1, 2, 3\}$ and $B = \{4, 5, 6\}$, then the union is $\{1, 2, 3, 4, 5, 6\}$, or $A \cup B$.

The set of elements of $A$ that are not in $B$ is
$$
A - B = \{x \mid x \in A \text{ and } x \notin B\}.
$$

Unions and intersections are similar to addition and multiplication in that they are both commutative and associative:
$$
(A \cup B) \cup C = A \cup (B \cup C) \qquad \text{and} \qquad (A \cap B) \cap C = A \cap (B \cap C).
$$

## Classes of sets

A collection of sets is known as a **class**. Cursive capital letters $\mcA, \mcB, \mcC, \mcD, \dots$ are used to denote classes.

The union of all the sets in the class $\mcF$ (meaning $A + B + \cdots$, or $A \cup B \cup C \cup D \cup \cdots$) is written
$$
\bigcup_{A \in \mcF} A = \bigcup_{k=1}^{n} A_k = A_1 \cup A_2 \cup A_3 \cup \dots \cup A_n,
$$
the second form only if $\mcF$ is finite and $\mcF = \{A_1, A_2, \dots, A_n\}$.

(Okay, what if we said $\mathcal{R} = \{\ZZ, \PP, \QQ\} = \RR$??)

:::remark Correction
The class $\mathcal{R} = \{\ZZ, \PP, \QQ\}$ (with $\PP$ the irrationals) has three members, each a set of numbers, so it does not equal $\RR$. What is true is that the union of its members is $\RR$: $\ZZ \cup \PP \cup \QQ = \QQ \cup \PP = \RR$, since $\ZZ \subseteq \QQ$.
:::

The exact same type of “summation” works for intersections:
$$
\bigcap_{A \in \mcF} A = \bigcap_{k=1}^{n} A_k = A_1 \cap A_2 \cap \dots \cap A_n.
$$

## Exercises

:::exercise
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

:::exercise
List the inclusion relations among the sets of the previous exercise.

:::solution
$B \subseteq A$, $C \subseteq A$, $B = C$, $C \subseteq E$, $B \subseteq E$.
:::
:::

:::remark Correction
With the corrected $F$ from the previous exercise, three more inclusions hold: $B \subseteq F$, $C \subseteq F$ and $E \subseteq F$.
:::

:::exercise
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

:::exercise
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

:::exercise
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

:::exercise
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

:::exercise
Prove that (a) $\{a, a\} = \{a\}$, (b) $\{a, b\} = \{b, a\}$, (c) $\{a\} = \{b, c\}$ if and only if $a = b = c$.

:::solution
(a) $\{a, a\} = \{a\}$: any set $\{x, x\}$ is equal to the set $\{x\}$.

(b) $\{a, b\} = \{b, a\}$: associativity/commutativity of sets.

(c) $\{a\} = \{b, c\}$ if $a = b = c$: equivalence.
:::
:::

:::exercise
Commutative laws: $A \cup B = B \cup A$, $A \cap B = B \cap A$.
:::

:::exercise
Associative laws: $A \cup (B \cup C) = (A \cup B) \cup C$, $A \cap (B \cap C) = (A \cap B) \cap C$.
:::

:::exercise
Distributive laws: $A \cap (B \cup C) = (A \cap B) \cup (A \cap C)$, $A \cup (B \cap C) = (A \cup B) \cap (A \cup C)$.
:::

:::exercise
If $\mcF$ is a class of sets, then
$$
B - \bigcup_{A \in \mcF} A = \bigcap_{A \in \mcF} (B - A) \qquad \text{and} \qquad B - \bigcap_{A \in \mcF} A = \bigcup_{A \in \mcF} (B - A).
$$
:::
