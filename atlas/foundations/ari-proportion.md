If $3$ apples cost $2$ dollars, what do $12$ apples cost? Most people instantly say $8$ — they sense
that price scales with quantity in lockstep. That instinct is a **proportion**: two ratios held
equal. How does setting $\tfrac{3}{2} = \tfrac{12}{x}$ let a single cross-multiplication find the
unknown?

## Discovery

1. At $3$ apples for $2$ dollars, the ratio apples$:$dollars is fixed. Write the apples-to-dollars
   ratio for the $3$-apple deal, and the apples-to-dollars ratio for buying $12$ apples at unknown
   cost $x$. Set them equal as two fractions.
2. Recall the equality test for two fractions from comparison: $\tfrac ab = \tfrac cd$ exactly when
   $ad = bc$. Apply it to your step-$1$ equation. What single equation in $x$ (no fractions) does it
   give?
3. Solve the equation from step $2$ for $x$ by dividing. What is the cost of $12$ apples?
4. Sanity-check with the *scale factor*: $12$ apples is how many times $3$ apples? Multiply the
   original cost by that same factor and compare to your step-$3$ answer. Why must the two methods
   agree?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Proportions.** A **proportion** is a statement that two ratios are equal:
$$\frac ab = \frac cd .$$
By the fraction-equality test, this holds **iff** the **cross-products** match:
$$\frac ab = \frac cd \iff ad = bc .$$
So a proportion with one unknown is solved by cross-multiplying to clear fractions, then dividing.
Equivalently, equal ratios mean one is a fixed **scale factor** times the other: $\tfrac cd=\tfrac
ab$ says $c$ and $d$ are both the same multiple of $a$ and $b$. Proportional reasoning is the tool
for "scale this recipe / map / rate," and cross-multiplication is its one-line engine.

### Proof

The heart is that $\tfrac ab=\tfrac cd\iff ad=bc$, which we established for comparison; here we use
it to *solve* and connect it to scaling.

*Solving.* Given $\tfrac ab=\tfrac cx$ with $x$ unknown ($b,x\ne 0$), the equality test gives
$ax = bc$ directly (cross-products equal). Since $a\ne 0$, divide by $a$:
$$x = \frac{bc}{a}.$$
This is the unique solution: cross-multiplication is reversible (divide back by the appropriate
factor), so no other $x$ satisfies the proportion.

*Why it equals scaling.* Write the scale factor $s=\tfrac cd\div\tfrac ab$... more directly: if
$c = s\,a$ and $d = s\,b$ for one common multiplier $s$, then $\tfrac cd=\tfrac{sa}{sb}=\tfrac ab$ by
equivalent fractions, so equal ratios *are* a common scaling. Conversely $\tfrac ab=\tfrac cd$ with
$ad=bc$ forces $\tfrac cd$ to be $\tfrac ab$ enlarged by $s=\tfrac ca=\tfrac db$ (equal, since
$ad=bc\Rightarrow \tfrac ca=\tfrac db$). So "cross-multiply" and "multiply by the scale factor" are
the same computation, and must give the same $x$. $\blacksquare$

### Worked Instance

The Hook: $3$ apples cost $2$ dollars, so apples$:$dollars is $\tfrac32$. For $12$ apples at cost
$x$, set $\tfrac{3}{2}=\tfrac{12}{x}$. Cross-multiply: $3x = 2\cdot 12 = 24$, so $x = 8$ dollars.
The scale-factor check agrees: $12$ apples is $\tfrac{12}{3}=4$ times as many as $3$ apples, so the
cost is $4$ times $2$ dollars, again $8$ dollars. Same answer, because equal ratios are exactly a
common scaling.

### Pitfalls

- **Keep the two ratios in the *same* order.** $\tfrac{\text{apples}}{\text{dollars}} =
  \tfrac{\text{apples}}{\text{dollars}}$; mixing apples-over-dollars with dollars-over-apples inverts
  one side and gives the wrong equation.
- **Cross-multiply, don't cross-add.** From $\tfrac ab=\tfrac cd$ you get $ad=bc$, never $a+d=b+c$.
- **Units must line up.** Both ratios must compare the same kinds of things in the same units before
  you equate them.
- **Not everything is proportional.** Doubling a square's side does *not* double its area; only
  quantities in a fixed ratio may be scaled this way.

:::
:::

## Connections

A proportion is two ratios locked equal, solved by the cross-multiplication equality test from
fraction comparison. It formalizes "scaling up/down" and underlies unit conversion, similar-figure
geometry, map scales, mixture problems, and percents (a proportion out of $100$). Recognition
trigger: "if ___ then how much ___," "at this rate," or any equal-ratio setup with one unknown wants
a proportion and one cross-multiplication.

## History

The statement that two ratios are equal — a proportion, $a:b = c:d$ — was the workhorse of ancient mathematics, and its rigorous theory is one of Greek mathematics' crowning achievements. Eudoxus of Cnidus (c. 350 BCE), whose work fills Book V of Euclid's *Elements*, gave a definition of proportional magnitudes that handled irrational ratios without flinching. The practical "rule of three" for solving proportions ($a:b=c:x$) was a staple of Indian, Arabic, and medieval European commercial arithmetic, prominent in Fibonacci's *Liber Abaci* (1202) and every reckoning manual thereafter. Cross-multiplication turned proportions into solvable equations. This mattered because proportional reasoning underlies similarity in geometry, scaling and unit conversion, the trigonometric ratios, and the concept of linear relationship — making it, in the words of many historians, the single most useful piece of elementary mathematics before algebra.
