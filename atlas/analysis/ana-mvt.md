Drive from mile $0$ to mile $60$ in exactly one hour. Your average speed was $60$ mph. Could you have
avoided *ever* having your speedometer read exactly $60$? The Mean Value Theorem says no — at some
instant your instantaneous speed equalled your average, and this innocent-looking fact is a workhorse
for proving inequalities, monotonicity, and uniqueness.

## Discovery

Assume $f$ is continuous on $[a,b]$ and differentiable on $(a,b)$.

1. **Rolle's special case first.** Suppose additionally $f(a)=f(b)$. Since $f$ is continuous on a
   closed interval it attains a maximum and a minimum there. If both occur at the endpoints, what must
   $f$ be? Otherwise an extremum sits at some interior point $c$. What does the derivative do at an
   interior maximum or minimum of a differentiable function?
2. Conclude: under $f(a)=f(b)$, there is $c\in(a,b)$ with $f'(c)=0$. (This is Rolle's theorem.)
3. **Tilt it.** For general $f$ (no longer assuming equal endpoints), the chord from $(a,f(a))$ to
   $(b,f(b))$ has slope $m=\frac{f(b)-f(a)}{b-a}$. Subtract that chord: define
   $g(x)=f(x)-m(x-a)$. Compute $g(a)$ and $g(b)$ — what do you notice?
4. Apply step 2 to $g$. Translate the conclusion $g'(c)=0$ back into a statement about $f'(c)$. What
   equation results?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Mean Value Theorem.** If $f$ is continuous on $[a,b]$ and differentiable on $(a,b)$, then there
exists $c\in(a,b)$ with
$$f'(c) = \frac{f(b)-f(a)}{b-a}.$$
Equivalently $f(b)-f(a)=f'(c)(b-a)$: the average rate of change is attained as an instantaneous rate.
**Rolle's theorem** is the case $f(a)=f(b)$ (then $f'(c)=0$). Immediate consequences:
$f'\equiv 0$ on an interval $\Rightarrow f$ constant; $f'\gt 0 \Rightarrow f$ strictly increasing;
$|f'|\le M \Rightarrow |f(x)-f(y)|\le M|x-y|$ (Lipschitz bound).

### Proof

**Rolle.** Assume $f$ continuous on $[a,b]$, differentiable on $(a,b)$, $f(a)=f(b)$. By the Extreme
Value Theorem $f$ attains a max $M$ and min $m$ on $[a,b]$. If $M=m$, $f$ is constant and $f'\equiv0$,
so any interior $c$ works. Otherwise at least one of $M,m$ differs from the common endpoint value
$f(a)$, so it is attained at some interior point $c\in(a,b)$. At an interior extremum of a
differentiable function, $f'(c)=0$: indeed if $c$ is a max, then for small $h\gt0$,
$\frac{f(c+h)-f(c)}{h}\le 0$ giving $f'(c)\le 0$, and for small $h\lt0$ the quotient is $\ge 0$ giving
$f'(c)\ge 0$; hence $f'(c)=0$ (the minimum case is symmetric). $\blacksquare$

**MVT from Rolle.** Let $m=\frac{f(b)-f(a)}{b-a}$ and set $g(x)=f(x)-m(x-a)$. Then $g$ is continuous
on $[a,b]$, differentiable on $(a,b)$, and
$$g(a)=f(a),\qquad g(b)=f(b)-m(b-a)=f(b)-\big(f(b)-f(a)\big)=f(a),$$
so $g(a)=g(b)$. By Rolle there is $c\in(a,b)$ with $g'(c)=0$. But $g'(x)=f'(x)-m$, so
$f'(c)=m=\frac{f(b)-f(a)}{b-a}$. $\blacksquare$

### Worked Instance

**Bounding.** Show $|\sin x - \sin y|\le |x-y|$ for all real $x,y$. Apply the MVT to $\sin$ on the
interval between $x$ and $y$: there is $c$ with $\sin x-\sin y=\cos(c)(x-y)$. Since $|\cos c|\le 1$,
$$|\sin x-\sin y| = |\cos c|\,|x-y|\le |x-y|.$$

**Uniqueness of a root.** Show $x^3+x-1=0$ has exactly one real root. Let $f(x)=x^3+x-1$. It has *at
least* one root since $f(0)=-1\lt0$ and $f(1)=1\gt0$ (a sign change). Suppose it had two roots
$r\lt s$; then $f(r)=f(s)=0$, so by Rolle some $c$ has $f'(c)=0$. But $f'(x)=3x^2+1\ge 1\gt 0$ never
vanishes — contradiction. Hence the root is unique.

**Monotonicity.** Since $f'(x)=3x^2+1\gt0$ everywhere, the same $f$ is strictly increasing: for
$x\lt y$, $f(y)-f(x)=f'(c)(y-x)\gt0$.

### Pitfalls

- **Hypotheses matter.** Continuity on the *closed* $[a,b]$ and differentiability on the *open*
  $(a,b)$ are both needed. $f(x)=|x|$ on $[-1,1]$ has average slope $0$ but $f'$ never $0$ — because
  it is not differentiable at $0$.
- **$c$ is not constructive.** The theorem asserts *some* $c$ exists; it does not tell you which. Use
  it to *bound* $f'(c)$ (e.g. $|f'|\le M$), not to solve for $c$.
- **One derivative equals the average, not all.** There may be several such $c$, or the equation may
  pin one only after further work.
- **Rolle needs equal endpoint values**; the general MVT does not — don't demand $f(a)=f(b)$ for the
  full theorem.

:::
:::

## Connections

Prereqs: the derivative rules; the proof rests on the Extreme Value Theorem (an interior extremum has
zero derivative). The MVT is the engine behind the Fundamental Theorem's uniqueness of
antiderivatives, Taylor's remainder (via repeated Rolle), and L'Hôpital's general proof (via the
Cauchy MVT). Recognition trigger: any claim of the form "average rate is achieved," "bound a change
by a derivative bound," "$f'\gt0\Rightarrow$ increasing," or "exactly one root."
