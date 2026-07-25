What is $\displaystyle\lim_{x\to 0}\frac{\sin x}{x}$? Plug in and you get $0/0$ — meaningless.
Yet the limit is a definite number. A rule due to L'Hôpital (actually proved by Johann Bernoulli)
says: differentiate top and bottom *separately* and try again. It works like magic — until it
quietly doesn't, and then it lies to you.

## Discovery

1. Consider $\frac{f(x)}{g(x)}$ where $f(a)=g(a)=0$ and both are differentiable at $a$ with
   $g'(a)\ne 0$. Write $f(x)=f(x)-f(a)$ and $g(x)=g(x)-g(a)$ (legal since $f(a)=g(a)=0$). Divide top
   and bottom by $(x-a)$. What two difference quotients appear?
2. Let $x\to a$. Each quotient becomes a derivative. What does $\frac{f(x)}{g(x)}$ tend to, expressed
   in $f'(a),g'(a)$?
3. Test the machine on $\frac{\sin x}{x}$ at $0$: identify $f,g$, check the $0/0$ form, and apply your
   formula. What number results?
4. Now probe the fine print. Try $\frac{x}{\sin x}$ at $x=\pi$ — is it $0/0$? Apply the rule anyway
   and compare to the honest value $\pi/\sin\pi$. What goes wrong, and what precondition did you
   violate?
5. Try $\displaystyle\lim_{x\to\infty}\frac{x}{\sqrt{x^2+1}}$. It is $\infty/\infty$, so the rule is
   licensed — apply it once, then again. Does the expression get *simpler* or does it cycle back?
   What does that tell you about when the rule is *useless* even though it is *valid*?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**L'Hôpital's Rule.** Suppose $f,g$ are differentiable near $a$ (except possibly at $a$),
$g'(x)\ne 0$ nearby, and $\displaystyle\lim_{x\to a}\frac{f'(x)}{g'(x)}$ exists (finite or $\pm\infty$).
If **either**
$$\lim_{x\to a} f(x)=\lim_{x\to a} g(x)=0 \qquad\text{(the }0/0\text{ form)}$$
**or** $\displaystyle\lim_{x\to a}|g(x)|=\infty$ (the $\infty/\infty$ form), then
$$\lim_{x\to a}\frac{f(x)}{g(x)} = \lim_{x\to a}\frac{f'(x)}{g'(x)}.$$
The same holds for one-sided limits and for $a=\pm\infty$. **Failure modes:** (i) applying it when
the form is *not* $0/0$ or $\infty/\infty$ gives wrong answers; (ii) it may *cycle* forever without
simplifying; (iii) the converse is false — $\frac{f'}{g'}$ may fail to converge while $\frac{f}{g}$
converges.

### Proof

We prove the clean $0/0$ case under the mild hypothesis that $f,g$ are differentiable at $a$ with
$f(a)=g(a)=0$ and $g'(a)\ne 0$. Since $f(a)=g(a)=0$,
$$\frac{f(x)}{g(x)} = \frac{f(x)-f(a)}{g(x)-g(a)}
= \frac{\dfrac{f(x)-f(a)}{x-a}}{\dfrac{g(x)-g(a)}{x-a}} \qquad(x\ne a).$$
As $x\to a$ the numerator quotient tends to $f'(a)$ and the denominator quotient to $g'(a)\ne 0$.
By the quotient law for limits (valid since the denominator's limit is nonzero),
$$\lim_{x\to a}\frac{f(x)}{g(x)} = \frac{f'(a)}{g'(a)} = \lim_{x\to a}\frac{f'(x)}{g'(x)}$$
where the last equality uses continuity of $f',g'$ at $a$ when applicable. $\blacksquare$

The general statement (only $\lim f'/g'$ assumed to exist, $f',g'$ not assumed continuous, and the
$\infty/\infty$ case) is proved with the **Cauchy Mean Value Theorem**: for $x$ near $a$ there is
$\xi$ between them with $\frac{f(x)-f(y)}{g(x)-g(y)}=\frac{f'(\xi)}{g'(\xi)}$; letting the appropriate
endpoint tend to $a$ transfers the limit of $f'/g'$ to $f/g$.

### Worked Instance

**The Hook.** $\lim_{x\to 0}\frac{\sin x}{x}$: with $f=\sin x$, $g=x$, both $\to 0$, so the form is
$0/0$. Then $\frac{f'}{g'}=\frac{\cos x}{1}\to\cos 0 = 1$. Hence $\lim_{x\to0}\frac{\sin x}{x}=1$.

**A failure by misuse.** $\lim_{x\to\pi}\frac{x}{\sin x}$. At $x=\pi$ this is $\frac{\pi}{0}$, **not**
$0/0$ or $\infty/\infty$ — it is an ordinary (divergent) form, honestly $\to\pm\infty$. Applying
L'Hôpital blindly gives $\frac{1}{\cos x}\to\frac{1}{-1}=-1$, a completely false "answer." The rule
was never licensed.

**A failure by cycling.** $\lim_{x\to\infty}\frac{x}{\sqrt{x^2+1}}$ is $\infty/\infty$, so the rule
applies — but differentiating gives $\frac{1}{x/\sqrt{x^2+1}}=\frac{\sqrt{x^2+1}}{x}$, the
*reciprocal* of what we started with. A second application returns to the original. It loops. The
honest route (divide by $x$: $\frac{1}{\sqrt{1+1/x^2}}\to 1$) wins; L'Hôpital, though valid, is
useless here.

### Pitfalls

- **Check the form first.** Only $0/0$ and $\infty/\infty$ are licensed. Forms like $\frac{c}{0}$,
  $0\cdot\infty$, $\infty-\infty$, $1^\infty$ must be *algebraically converted* to a quotient of the
  right type before applying the rule.
- **Cycling.** If $f'/g'$ returns you to $f/g$ (common with $\sqrt{x^2+1}$-type expressions), abandon
  the rule and simplify directly.
- **The converse fails.** $\lim f/g$ can exist while $\lim f'/g'$ does not — e.g.
  $\frac{x + \sin x}{x}\to 1$ as $x\to\infty$, but $\frac{1+\cos x}{1}$ has no limit. So a
  non-convergent $f'/g'$ does **not** prove $f/g$ diverges.
- **Differentiate separately, not by the quotient rule.** You take $f'/g'$, not $(f/g)'$.

:::
:::

## Connections

Prereqs: the derivative rules; the general proof rests on the Cauchy Mean Value Theorem. L'Hôpital
often competes with — and loses to — Taylor-series substitution, which never cycles and shows *why*
a limit takes its value. Recognition trigger: a limit that evaluates to $0/0$ or $\infty/\infty$
after substitution. But always ask first: is it really that form, and will differentiating actually
*simplify*?
