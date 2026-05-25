---
marp: true
theme: dracula
paginate: true
header: "← [Week 1: Shadows & Similar Triangles](../../../../course/2026/june/week1/)"
---

# A telephone pole casts a 20-foot shadow.
# You cast a 5-foot shadow.
# How tall is the pole?

*You don't have a ladder. You can't climb it. Figure it out.*

---

## Here's what you know

- You are **5 ft tall**
- Your shadow right now: **4 ft**
- The pole's shadow right now: **20 ft**

At the exact same moment, the sun hits you and the pole at the same angle.

Does that give you enough to find the pole's height?

---

## See it

<svg width="660" height="310" xmlns="http://www.w3.org/2000/svg" style="font-family: 'IBM Plex Sans', sans-serif;">
  <!-- Ground -->
  <line x1="20" y1="280" x2="640" y2="280" stroke="#6272a4" stroke-width="2"/>
  <!-- Sun -->
  <circle cx="28" cy="168" r="13" fill="#f1fa8c"/>
  <text x="28" y="152" font-size="10" fill="#f1fa8c" text-anchor="middle">sun</text>
  <!-- Sun rays (parallel, dashed) -->
  <line x1="40" y1="180" x2="120" y2="280" stroke="#f1fa8c" stroke-width="1.5" stroke-dasharray="6,4" opacity="0.9"/>
  <line x1="360" y1="30" x2="560" y2="280" stroke="#f1fa8c" stroke-width="1.5" stroke-dasharray="6,4" opacity="0.9"/>
  <!-- Person triangle (cyan) -->
  <polygon points="80,230 80,280 120,280" fill="#8be9fd" fill-opacity="0.15" stroke="#8be9fd" stroke-width="2"/>
  <!-- Person head -->
  <circle cx="80" cy="225" r="5" fill="#8be9fd"/>
  <!-- Right angle - person -->
  <polyline points="80,269 91,269 91,280" fill="none" stroke="#6272a4" stroke-width="1.5"/>
  <!-- Angle θ at person shadow tip -->
  <text x="107" y="274" font-size="13" fill="#ff79c6">θ</text>
  <!-- Labels person -->
  <text x="62" y="259" font-size="13" fill="#8be9fd" text-anchor="middle">5 ft</text>
  <text x="100" y="296" font-size="13" fill="#ffb86c" text-anchor="middle">4 ft</text>
  <!-- Pole triangle (green) -->
  <polygon points="360,30 360,280 560,280" fill="#50fa7b" fill-opacity="0.15" stroke="#50fa7b" stroke-width="2"/>
  <!-- Right angle - pole -->
  <polyline points="360,269 371,269 371,280" fill="none" stroke="#6272a4" stroke-width="1.5"/>
  <!-- Angle θ at pole shadow tip -->
  <text x="547" y="274" font-size="13" fill="#ff79c6">θ</text>
  <!-- Labels pole -->
  <text x="352" y="158" font-size="13" fill="#50fa7b" text-anchor="end">? ft</text>
  <text x="460" y="296" font-size="13" fill="#ffb86c" text-anchor="middle">20 ft</text>
</svg>

---

## The key insight

Because the sun angle is the same for everything at the same moment:

$$\frac{\text{your height}}{\text{your shadow}} = \frac{\text{pole's height}}{\text{pole's shadow}}$$

This is a **proportion** — two ratios that are equal.

---

## Solve it

$$\frac{5}{4} = \frac{?}{20}$$

Cross-multiply:

$$5 \times 20 = 4 \times ? \implies ? = \frac{100}{4} = 25 \text{ ft}$$

The pole is **25 feet tall.**

No ladder required.

---

## Try these

1. A tree casts a 15 ft shadow. You're 5 ft tall, your shadow is 3 ft. How tall is the tree?
2. A flagpole casts a 12 ft shadow. A 6 ft fence post nearby casts a 2 ft shadow. How tall is the flagpole?
3. You're 4.5 ft tall, shadow is 6 ft. A building's shadow is 80 ft. How tall is the building?

---

## The general rule

Any time you have two similar situations with an unknown, set up a proportion:

$$\frac{a}{b} = \frac{c}{d}$$

Solve by cross-multiplying: $a \times d = b \times c$

This works for shadows, maps, blueprints, photos — anything scaled uniformly.

---

## Want to try it for real? *(optional)*

On a sunny day:
1. Measure your height and your shadow length
2. Find something tall nearby — a tree, a fence, a flagpole
3. Measure its shadow
4. Calculate its height and check if you can verify it any other way

---

## Puzzle for next time

Same pole. Same location.

**9am shadow:** 40 feet long  
**Noon shadow:** 8 feet long

The pole didn't move. The pole didn't shrink.

*What changed — and why?*
