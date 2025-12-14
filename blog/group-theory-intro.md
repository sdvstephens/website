# An Introduction to Group Theory

Group theory is one of the most elegant branches of abstract algebra. At its core, a **group** is a set $G$ equipped with a binary operation $\cdot$ satisfying four axioms:

1. **Closure**: For all $a, b \in G$, we have $a \cdot b \in G$
2. **Associativity**: For all $a, b, c \in G$, we have $(a \cdot b) \cdot c = a \cdot (b \cdot c)$
3. **Identity**: There exists an element $e \in G$ such that $e \cdot a = a \cdot e = a$ for all $a \in G$
4. **Inverse**: For each $a \in G$, there exists $a^{-1} \in G$ such that $a \cdot a^{-1} = a^{-1} \cdot a = e$

## Why Groups Matter

Groups capture the essence of **symmetry**. The symmetries of any mathematical object form a group, and studying this group reveals deep structural properties.

Consider the integers $\mathbb{Z}$ under addition. This forms a group:
- Closure: sum of integers is an integer
- Associativity: $(a + b) + c = a + (b + c)$
- Identity: $0$
- Inverse: $-a$ for each $a$

## The Symmetric Group

The symmetric group $S_n$ consists of all permutations of $n$ elements. Its order is $|S_n| = n!$, and it plays a central role in Galois theory, representation theory, and combinatorics.

$$|S_5| = 5! = 120$$

More to come in future posts.
