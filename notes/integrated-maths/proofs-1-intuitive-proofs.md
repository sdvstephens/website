---
course: integrated-maths
chapter: 10
section: 1
title: Intuitive Proofs
source-pages: proofs-2, proofs-3, proofs-4
---

*Notes on Jay Cummings, Proofs: A Long-Form Mathematics Textbook.*

:::definition Definition 1.1
A **perfect cover** of an $m \times n$ board with $2 \times 1$ dominoes is an arrangement of those dominoes on the chessboard with no squares left uncovered, and no dominoes stacked or left hanging off the end.
:::

:::proposition Proposition 1.2
There exists a perfect cover of an $8 \times 8$ chessboard by flat $2 \times 1$ dominoes.
:::

:::remark Proof idea
The proposition is asserting that “there exists” a perfect cover. To say “there exists” something means there is at least one example of it. Therefore, any proposition like this can be proven by simply presenting an example which satisfies the statement.
:::

:::proposition Proposition 1.3
If one crosses out the top-left square of an $8 \times 8$ chessboard, the remaining board will not be perfectly covered by dominoes.
:::

Proof idea $\to$ proof. Observe:

:::remark Proof idea
Each domino covers $2$ squares, so the number of squares covered by whole dominoes must also be even. Thus it is impossible for whole dominoes to cover an odd number of squares (the dominoes covering a number of the form $2k$, where $k \in \NN$, and the odd number of squares being of the form $2k + 1$).
:::

:::proof
Since each domino covers $2$ squares and the dominoes are non-overlapping, if one places our $k$ dominoes on the board then they will cover $2k$ squares, which is always an even number. Therefore a perfect cover can only cover an even number of squares. Notice, though, that the board has $63$ remaining squares, which is an odd number. Thus, it cannot be perfectly covered.
:::

Notice that the proof idea is correct but not as formal and rigid as the real proof.

> “It is logic we prove. It is intuition we discover.” (Henri Poincaré)

:::proposition Proposition 1.4
If one crosses out the top-left and bottom-right squares of an $8 \times 8$ chessboard, the remaining squares cannot be perfectly covered by dominoes.
:::

:::proof
Observe that the chessboard has $62$ remaining squares, and since every domino covers $2$ squares, $62/2 = 31$ dominoes are required. Also observe that every domino on the chessboard covers exactly one black square and one white square. Thus $31$ dominoes on the chessboard will collectively cover $31$ white and $31$ black squares. Next observe that the $2$ crossed-out squares are both white, giving us $30$ white squares and $32$ black squares. Thus, it is impossible to have $31$ dominoes cover these $62$ squares.
:::

:::note
A proof should be 100% complete without images/pictures, but you may use some only to illustrate your words.
:::

:::question Q1
If I remove two squares of different colors from an $8 \times 8$ chessboard, must the result have a perfect cover?
:::

:::proof
If we have an $8 \times 8$ chessboard we have $32$ white and $32$ black squares. Remove one of each and we have $31$ of each. So we have $31$ dominoes, $2 \times 1$, which require precisely one black and one white square each. Notice that the number of dominoes needed equals the count of black and white squares individually. Then to place one domino means $31 - 1$ black and $31 - 1$ white. We continue this process $31$ times, resulting in $0$ black, $0$ white, and no dominoes or partial dominoes left; thus giving us a perfect cover.
:::

:::remark Correction
Equal colour counts are necessary for a perfect cover and do not suffice: the argument never shows that each domino can be placed on two adjacent uncovered squares. The answer to Q1 is still yes. To prove it, join the $64$ squares into one closed path (up the first column, then back and forth across the other seven columns one row at a time from the top down, ending next to the start), so that the squares along the path alternate in colour. Removing one black and one white square cuts the path into two pieces, each of even length because the removed squares have different colours, and each piece is covered by dominoes laid on consecutive pairs of squares.
:::

:::question Q2
If I remove four squares (two black, two white) from an $8 \times 8$ chessboard, must the result have a perfect cover?
:::

:::remark Proof idea
Notice this follows a similar format as Q1. So then if I have $30$ dominoes for $30$ black and $30$ white squares, the subtraction remains the same.
:::

:::remark Correction
Equal colour counts do not guarantee a perfect cover, and the answer to Q2 is no. Label the squares as on a standard chessboard ($a1$ is a corner and is black) and remove $b1$ and $a2$ (both white) together with $b8$ and $a7$ (both black). Then the corner square $a1$ has no uncovered neighbour, so no domino can cover it, and the same holds for $a8$.
:::

:::question Q3
For every pair of positive integers $m, n$, does there exist a perfect cover of the $m \times n$ chessboard by $2 \times 1$ dominoes? If not, for which $m$ and $n$ is there a perfect cover?
:::

:::remark Proof idea
Let’s think about this. We know that if $m \times n = \alpha$ and $\alpha$ is an integer of the form $2n + 1$, i.e. that integer is odd, then there exists no perfect cover for an $m \times n$ chessboard by $2 \times 1$ dominoes. (Perhaps this has to do with the fact that $2 \times 1$ dominoes always cover $2$ times the number of dominoes in terms of square space, that is to say they are in the form $2n$, where $n = 1$.) Then perhaps the only form of $m \times n$ where there is a perfect cover is the form $m \times n = \alpha$, where $\alpha$ is an integer of the form $2n$ (i.e. even). This is because the product $m \times n$ must be of the form $2x$ and the dominoes cover a number of the form $2y$, where $y$ is the number of dominoes.
:::

:::question CQ1
How many ways can one cover an $m \times n$ chessboard with $2 \times 1$ dominoes?
:::

:::remark Proof idea
My guess is that there are $\frac{m \times n}{2}$ ways to cover a chessboard with $2 \times 1$ dominoes if $m \times n$ is even. (Disproven by the $4 \times 3$ chessboard.) Notice some cases: $2 \times 1$ has $1 = 3^0$ way, $3 \times 2$ has $3 = 3^1$ ways, $4 \times 3$ has $9 = 3^2$ ways.

![A 4 by 3 board covered by six dominoes: three horizontal dominoes stacked in the left half, one horizontal domino across the top of the right half, and two vertical dominoes under it](/notes/integrated-maths/figures/q1-pr1-4x3-tiling.svg)
:::

:::remark Correction
The $4 \times 3$ board has $11$ domino tilings, not $9$, so the pattern $3^0, 3^1, 3^2$ does not continue (the numbers of tilings of the $3 \times n$ board for $n = 2, 4, 6$ are $3, 11, 41$). The guess $\frac{m \times n}{2}$ would give $6$ for the $4 \times 3$ board, so it is indeed disproven.
:::

:::question CQ2
What if I change the domino to be another shape and ask all the previous questions again?
:::

:::question CQ3
Can we generalize these questions/results to higher dimensions?
:::

## Naming results

- A **theorem** is an important result (a mathematical statement that is true) that has been proved.
- A **proposition** is a result that is less important than a theorem. It has also been proved.
- A **lemma** is a typically small result that is proved before a proposition or theorem, and is used to prove the following proposition or theorem.
- A **corollary** is a result that is proved after a proposition or theorem, which follows quickly from the proposition or theorem. It is often a special case of the proposition or theorem.
- A **conjecture** is a statement that someone guesses to be true, although they are not yet able to prove or disprove it.
