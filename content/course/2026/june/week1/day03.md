---
title: "Day 3: The Ruler Trick"
type: lesson
weight: 5
---

{{< card >}}
## You have a ruler and a working set of eyes

## The building across the street is too tall to climb

## You know how far away you are from it

*That's it. Can you find its height?*
{{< /card >}}

{{< card >}}
## The setup

Hold a ruler at arm's length (~24 inches from your eye).

Align it with the building. Count how many inches the building fills on the ruler.

You need three things:

- **a** — your arm length (inches)
- **r** — how many inches the building fills on the ruler
- **d** — your distance from the building (feet)
{{< /card >}}

{{< card >}}
## Why it works

Your eye → ruler mark: a **small triangle.**

Your eye → building: a **large triangle.**

They share the same angle at your eye.

Two triangles with the same angles always have sides in the same proportion — they are **similar triangles.** You only need two matching angles (the third is forced, since all three must add to 180°).
{{< /card >}}

{{< card >}}
## See it

<svg width="600" height="305" xmlns="http://www.w3.org/2000/svg" style="font-family: sans-serif; max-width:100%;">
  <line x1="20" y1="262" x2="580" y2="262" stroke="#6272a4" stroke-width="2"/>
  <polygon points="50,150 450,50 450,250" fill="#50fa7b" fill-opacity="0.08" stroke="none"/>
  <polygon points="50,150 130,130 130,170" fill="#8be9fd" fill-opacity="0.18" stroke="none"/>
  <line x1="50" y1="150" x2="450" y2="50" stroke="#f1fa8c" stroke-width="1.5" stroke-dasharray="6,4" opacity="0.85"/>
  <line x1="50" y1="150" x2="450" y2="250" stroke="#f1fa8c" stroke-width="1.5" stroke-dasharray="6,4" opacity="0.85"/>
  <circle cx="50" cy="150" r="7" fill="#8be9fd"/>
  <text x="50" y="133" font-size="12" fill="#8be9fd" text-anchor="middle">eye</text>
  <line x1="130" y1="80" x2="130" y2="240" stroke="#44475a" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="123" y1="130" x2="137" y2="130" stroke="#ff79c6" stroke-width="2"/>
  <line x1="123" y1="170" x2="137" y2="170" stroke="#ff79c6" stroke-width="2"/>
  <line x1="130" y1="130" x2="130" y2="170" stroke="#ff79c6" stroke-width="3"/>
  <text x="112" y="155" font-size="15" fill="#ff79c6" text-anchor="middle" font-style="italic">r</text>
  <rect x="450" y="50" width="40" height="200" fill="#50fa7b" fill-opacity="0.12" stroke="#50fa7b" stroke-width="2"/>
  <line x1="502" y1="50" x2="502" y2="250" stroke="#50fa7b" stroke-width="1.5" stroke-dasharray="3,2"/>
  <line x1="497" y1="50" x2="507" y2="50" stroke="#50fa7b" stroke-width="2"/>
  <line x1="497" y1="250" x2="507" y2="250" stroke="#50fa7b" stroke-width="2"/>
  <text x="517" y="155" font-size="15" fill="#50fa7b" font-style="italic">h</text>
  <line x1="50" y1="228" x2="130" y2="228" stroke="#8be9fd" stroke-width="1.5"/>
  <line x1="50" y1="223" x2="50" y2="233" stroke="#8be9fd" stroke-width="1.5"/>
  <line x1="130" y1="223" x2="130" y2="233" stroke="#8be9fd" stroke-width="1.5"/>
  <text x="90" y="245" font-size="13" fill="#8be9fd" text-anchor="middle" font-style="italic">a</text>
  <line x1="50" y1="277" x2="450" y2="277" stroke="#ffb86c" stroke-width="1.5"/>
  <line x1="50" y1="272" x2="50" y2="282" stroke="#ffb86c" stroke-width="1.5"/>
  <line x1="450" y1="272" x2="450" y2="282" stroke="#ffb86c" stroke-width="1.5"/>
  <text x="250" y="297" font-size="13" fill="#ffb86c" text-anchor="middle" font-style="italic">d</text>
</svg>
{{< /card >}}

{{< card >}}
## The proportion

$$\frac{r}{a} = \frac{h}{d} \implies h = \frac{r \times d}{a}$$

**Example:** arm = 24 in, ruler reading = 3 in, distance = 80 ft

$$h = \frac{3 \times 80}{24} = 10 \text{ ft}$$
{{< /card >}}

{{< card >}}
## Same idea, different situation

Place a mirror flat on the ground. Back up until you can see the top of a tree reflected in it.

Your eye, the mirror, and the treetop form two similar triangles — the law of reflection guarantees the angles match.

$$\frac{\text{your height}}{\text{your distance to mirror}} = \frac{\text{tree height}}{\text{mirror's distance to tree}}$$
{{< /card >}}

{{< card >}}
## Mirror method: set it up

You are **5.5 ft** tall and standing **4 ft** from the mirror.

The mirror is **15 ft** from the tree.

$$\frac{5.5}{4} = \frac{?}{15} \implies ? = \frac{5.5 \times 15}{4} = 20.6 \text{ ft}$$

No clinometer. No tape measure up the tree. Just a mirror on the ground.
{{< /card >}}

{{< card >}}
## One more — a cosmic coincidence

The moon and the sun look almost exactly the same size in the sky.

That's why total solar eclipses happen — the moon fits almost perfectly over the sun.

- Moon: **2,159 miles** wide, **239,000 miles** away
- Sun: **865,000 miles** wide, **? miles** away

If they appear the same angular size, the proportions must be equal.
{{< /card >}}

{{< card >}}
## Moon and sun: set it up

$$\frac{2159}{239{,}000} = \frac{865{,}000}{?}$$

$$? = \frac{865{,}000 \times 239{,}000}{2159} \approx 95{,}700{,}000 \text{ miles}$$

Actual distance to the sun: **~93 million miles.**

It's not luck — it's a proportion, and it's almost exact.
{{< /card >}}

{{< card >}}
## The concept: Similar Triangles

Two triangles are **similar** if they have the same angles.

Similar triangles have sides in proportion: $\dfrac{a_1}{b_1} = \dfrac{a_2}{b_2}$

You've now seen this in three situations:

- Ruler trick → building height
- Mirror on the ground → tree height
- Moon vs. sun → same angular size explained

Any time the **same angle** appears in two different triangles, their sides are proportional.
{{< /card >}}

{{< card >}}
## Time to practice!

Rulers, mirrors, the moon — all the same proportion in disguise.

Find **Day 3 Practice** in the menu to try it yourself.
{{< /card >}}
