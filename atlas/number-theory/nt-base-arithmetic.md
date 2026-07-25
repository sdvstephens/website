In base $10$, $7 + 5 = 12$: you write $2$ and carry $1$. The grade-school algorithm feels tied to
the number ten — but do the identical column rules work in base $7$, where $4 + 5$ comes out as
$(12)_7$? They do, carries and all. Why is "carry when the column reaches the base" a law of *every*
base, not a quirk of ten?

## Discovery

1. Add $(25)_7$ and $(34)_7$ the schoolbook way: add the units column, then the sevens column. When
   a column total reaches $7$ or more, decide what to leave in the column and what to push left, and
   say *why* pushing one unit left is legal in base $7$.
2. Multiply the single digits $(6)_7$ and $(5)_7$ (that is, $6\times 5 = 30$ in ordinary counting)
   and express the answer in base $7$. Then multiply $(13)_7$ by $(2)_7$ digit by digit. How many
   carries did each need?
3. Justify the carry rule in general. In an addition column, each digit is at most $b-1$, so a
   column sum $s$ (with an incoming carry) is bounded. Apply the division algorithm to write
   $s = c\cdot b + r$: identify what $r$ and $c$ mean for this column and the next. For plain
   addition of two numbers, why is the carry $c$ never more than $1$?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

Fix a base $b \ge 2$. Numbers written in base $b$ add and multiply by the same column algorithms as
in base $10$, with one change: a carry happens when a column value reaches $b$ (not $10$).
Concretely, in each column form the value $s$ (digit sum, or partial product, plus incoming carry),
then split $s = c\cdot b + r$ with $0 \le r \lt b$: the digit written is $r$ and the carry to the
next column is $c$. For adding two base-$b$ numerals the carry is always $0$ or $1$. The algorithms
are correct because place value plus the distributive law reduce every operation to per-column sums
of powers of $b$.

### Proof

Write $n = \sum_i a_i b^i$ and $m = \sum_i c_i b^i$ with digits in $\{0,\dots,b-1\}$
(`nt-base-representation`).

*Addition.* By regrouping, $n + m = \sum_i (a_i + c_i) b^i$. Process columns left to right starting
with carry $0$. At column $i$ let $s_i = a_i + c_i + (\text{carry in})$. By the division algorithm
write $s_i = c\cdot b + r$ with $0 \le r \lt b$; set the digit to $r$ and pass carry $c$ to column
$i+1$. Replacing $(a_i + c_i + \text{carry})b^i$ by $r\, b^i + c\, b^{i+1}$ changes nothing, since
$c\cdot b + r = s_i$ and $b^{i+1} = b\cdot b^i$; so the running value is preserved and the final
digit string is a valid base-$b$ expansion, hence *the* one for $n+m$ by uniqueness. The carry is
small: each $a_i, c_i \le b-1$ and the incoming carry is $\le 1$ (inductively), so
$s_i \le 2(b-1) + 1 = 2b - 1 \lt 2b$, forcing $c = \lfloor s_i / b\rfloor \le 1$.

*Multiplication.* Using the distributive law repeatedly (`ari-multiplication`, `ari-addition`),
$$nm = \Big(\sum_i a_i b^i\Big)\Big(\sum_j c_j b^j\Big) = \sum_{i,j} a_i c_j\, b^{\,i+j}.$$
Grouping terms by the exponent $i+j$ gives, for each power, a coefficient that may exceed $b-1$;
applying the same $s = c\cdot b + r$ split column by column (carrying the overflow into higher
powers) reduces every coefficient into $\{0,\dots,b-1\}$ without changing the value. The result is
the unique base-$b$ expansion of $nm$. $\blacksquare$

### Worked Instance

Resolve the Hook. Add $(25)_7 + (34)_7$: units column $5 + 4 = 9 = 1\cdot 7 + 2$, so write $2$, carry
$1$; sevens column $2 + 3 + 1 = 6$, no carry. Answer $(62)_7$. Check in base $10$:
$(25)_7 = 19$, $(34)_7 = 25$, and $19 + 25 = 44 = 6\cdot 7 + 2 = (62)_7$. For multiplication,
$(6)_7 \times (5)_7$: the product is $30 = 4\cdot 7 + 2 = (42)_7$. And $(13)_7 \times (2)_7$: units
$3\cdot 2 = 6$ (no carry), sevens $1\cdot 2 = 2$, giving $(26)_7 = 20$, matching $10\times 2$.

### Pitfalls

- **Carry at the base, not at ten.** In base $7$ you carry once a column hits $7$; writing "carry at
  $10$" out of habit is the classic base-arithmetic slip.
- **Multiplication carries can exceed $1$.** The two-numeral *addition* carry is $0$ or $1$, but a
  multiplication column (a partial product plus carry) can throw a larger carry into the next place.
- **Subtraction borrows a whole base.** A borrow in base $b$ moves $b$ (not $10$) from the next
  column down.
- **Align by place value.** Columns must line up by power of $b$; misaligning digits corrupts every
  carry downstream.

:::
:::

## Connections

Arithmetic in base $b$ shows the schoolbook algorithms were never about ten — they ride on base
representation (`nt-base-representation`), the distributive law behind multiplication
(`ari-multiplication`), and column sums (`ari-addition`), with the division algorithm supplying each
digit-and-carry split. This is exactly how binary adders and multipliers work inside a computer, and
the carry structure is what Kummer's theorem later reads to count prime powers in binomial
coefficients. Recognition trigger: any "compute in base $b$" or "how many carries" problem is column
arithmetic with the base as the carry threshold.

## History

The familiar column algorithms — carrying in addition, borrowing in subtraction — were developed for base $10$ by mathematicians of the Islamic Golden Age, above all al-Khwarizmi in the ninth century, whose name gives us the word "algorithm." These methods were carried into Europe by Fibonacci's *Liber Abaci* ($1202$) and gradually replaced counting boards and Roman numerals. What the pioneers grasped, and what positional notation makes transparent, is that the same carry-and-borrow logic works in any base once "ten" is replaced by the base itself. Leibniz made this explicit for base $2$ around $1679$, performing binary addition and multiplication by exactly the schoolroom rules. Base arithmetic mattered because it turned calculation into a mechanical procedure, and its base-$2$ form is precisely how digital circuits add and multiply today.
