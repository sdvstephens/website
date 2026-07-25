You have $9$ dollars and spend $4$; you have $5$ left. "Take away" feels like its own basic act — the
opposite of piling on. But once every number owns an opposite, subtraction quietly stops being a
new operation at all. What is it, really, in disguise?

## Discovery

1. Start at $9$ on the number line and "take away $4$": step *left* four times. Which point do you
   land on? Now instead *add* the opposite of $4$ to $9$ — combine $9$ with $-4$. Where does that
   land you? Compare.
2. Push past zero. Try "$4$ take away $9$" by stepping left from $4$, and separately compute
   $4 + (-9)$. Does the "adding the opposite" recipe still return an answer when "take away" would
   run off the bottom of $\NN$?
3. Test order. Compute $9 + (-4)$ and $4 + (-9)$. Are they equal? What does this reveal about
   whether "$a$ take away $b$" and "$b$ take away $a$" can be swapped?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

For any numbers $a,b$, the **difference** $a - b$ is *defined* to be $a$ plus the opposite of $b$:
$$a - b := a + (-b).$$
Subtraction is not a separate primitive; it is addition of the additive inverse. Consequently it
inherits exactly the structure that inverse gives it — and *fails* to inherit what it doesn't.
In particular $a-b$ always exists in $\ZZ$ (even when $a\lt b$), $a-a=0$, $a-0=a$, and, since the
inverse of a sum is the sum of the inverses, $a-(b+c)=a-b-c$ and $a-(b-c)=a-b+c$.

### Proof

As a concept, we verify the definition is **sound** — it agrees with "take away" where the latter
makes sense — and extract the algebra that "adding the opposite" forces.

*Agreement with "take away."* On the number line "$a$ take away $b$" means step left $b$ times
from $a$; one left step subtracts a unit, i.e. adds $-1$. Stepping left $b$ times therefore adds
$-b$ (the opposite of $b$, since $b$ right-steps and $b$ left-steps cancel to $0$). So the
geometric "take away" equals $a+(-b)$ — the definition — and where $a\ge b$ this is the usual
whole-number remainder.

*It always exists and undoes addition.* $a+(-b)$ is defined for all $a,b\in\ZZ$ because every $b$
has an opposite (negation node); no "$a\ge b$" is needed. It genuinely inverts adding $b$:
$$(a - b) + b = \big(a + (-b)\big) + b = a + \big((-b) + b\big) = a + 0 = a,$$
using associativity and the defining property of the inverse. So subtracting $b$ then adding $b$
returns $a$.

*Sign bookkeeping.* Since $-(b+c) = (-b)+(-c)$ (the opposite of a sum) and $-(-c)=c$,
$$a-(b+c) = a+\big((-b)+(-c)\big) = (a-b)-c,\qquad a-(b-c) = a+(-b)+c = (a-b)+c.$$
These are theorems about $+$ and $-$, read straight off the inverse. $\blacksquare$

### Worked Instance

The Hook: $9 - 4 = 9 + (-4) = 5$, the five dollars left. Below zero, $4 - 9 = 4 + (-9) = -5$ — a
a $5$-dollar overdraft — where plain "take away" inside $\NN$ had no answer. And order matters:
$9-4 = 5$ but $4-9 = -5$, so $a-b\ne b-a$ in general (they are opposites, $b-a = -(a-b)$).
Finally a bracket: $10 - (3+2) = 10 - 3 - 2 = 5$, the minus distributing onto *both* $3$ and $2$
because $-(3+2) = -3 + -2$.

### Pitfalls

- **Subtraction is not commutative and not associative.** $a-b\ne b-a$ and $(a-b)-c\ne a-(b-c)$;
  these fail precisely because subtraction is disguised addition-of-an-inverse, and the inverse
  sits on one operand only.
- **The minus sign in front of a bracket hits every term.** $a-(b+c)=a-b-c$ and $a-(b-c)=a-b+c$;
  the single most common error is $a-(b-c)=a-b-c$.
- **"$a-b$" versus "$-b$".** The first is an operation (a difference); the second is a number (an
  opposite). $5-3$ subtracts; $-3$ is a point on the line.
- **Do not require $a\ge b$.** Inside $\ZZ$ every difference exists; insisting the bigger go first
  is a $\NN$-only habit.

:::
:::

## Connections

Rests entirely on the additive inverse (negation) plus addition: subtraction is a *defined* move,
not a fifth primitive. This viewpoint — "subtract = add the opposite" — is what makes signed
arithmetic in $\ZZ$ uniform, and it is the model for division ("divide = multiply by the
reciprocal") one level up. Recognition trigger: any "difference," "how much more," "take away," or
"change from … to …" is $a+(-b)$.

## History

Taking away has always been the natural companion of combining, and every ancient arithmetic — Egyptian, Babylonian, Chinese, Greek — handled subtraction of smaller from larger quantities. The conceptual leap was recognizing subtraction as *adding the negative*, which required negative numbers to be legitimate; that acceptance came slowly, through Brahmagupta's rules for debts (628 CE) and only much later in Europe. Merchants' bookkeeping, especially the double-entry system codified by Luca Pacioli in 1494, made the idea of credits and debits — signed subtraction — an everyday tool. The modern view, in which $a-b$ is simply $a+(-b)$ and subtraction is not a new primitive at all, crystallized with the nineteenth-century arithmetization of the integers by Hankel, Dedekind, and Peano. This reframing mattered because it dissolved the asymmetry between addition and subtraction, revealing both as motion within the single additive group $\ZZ$.
