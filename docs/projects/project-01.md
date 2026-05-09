<!-- Parallax hero banner — replace hero.jpg with your own image -->
<div class="parallax-hero parallax-hero--project" style="--hero-image: url('../../assets/images/project-01/hero.jpg')">
  <div class="parallax-hero__content">
    <h1>Project 01 — Robot Arm</h1>
    <p>6-DOF robotic manipulator · SolidWorks · Arduino · 2024</p>
  </div>
</div>

!!! abstract "At a Glance"
    **Timeline:** Jan 2024 – May 2024 &nbsp;|&nbsp;
    **Role:** Lead Mechanical Designer &nbsp;|&nbsp;
    **Tools:** SolidWorks, MATLAB, Arduino &nbsp;|&nbsp;
    **Status:** :material-check-circle:{ style="color: #4caf50" } Complete

---

## Overview

Write 2–3 sentences here about what this project is, what problem it solved, and what your specific contribution was.

---

=== ":material-pencil-ruler: Design"

    ## Design Process

    <div class="img-row" markdown>
    <div class="img-row__image" markdown>
    ![CAD overview](../../assets/images/project-01/cad-overview.png)
    <p class="img-caption">Figure 1 — Full assembly CAD model</p>
    </div>
    <div class="img-row__text" markdown>

    ### Concept & Requirements

    Describe your design approach here — what constraints did you start with, what concepts did you consider, and why did you land on this design?

    | Requirement | Target | Achieved |
    |---|---|---|
    | Payload | 5 kg | 5.2 kg |
    | Reach | 600 mm | 620 mm |
    | Repeatability | ±1 mm | ±0.8 mm |

    </div>
    </div>

    ---

    <div class="img-row" markdown>
    <div class="img-row__image" markdown>
    ![Joint detail](../../assets/images/project-01/joint-detail.png)
    <p class="img-caption">Figure 2 — Wrist joint assembly detail</p>
    </div>
    <div class="img-row__text" markdown>

    ### Joint Design

    Describe the key design decisions for this specific sub-assembly. What tradeoffs were made? What alternatives were considered?

    - **Decision 1** — Reasoning
    - **Decision 2** — Reasoning
    - **Decision 3** — Reasoning

    </div>
    </div>

=== ":material-calculator: Analysis"

    ## Engineering Analysis

    <div class="img-row" markdown>
    <div class="img-row__image" markdown>
    ![FEA result](../../assets/images/project-01/fea-result.png)
    <p class="img-caption">Figure 3 — Von Mises stress contour, primary link</p>
    </div>
    <div class="img-row__text" markdown>

    ### Structural Analysis

    Describe the FEA setup — loads, constraints, material properties. What did the results tell you and how did it inform the design?

    !!! note "Key Result"
        Peak stress of X MPa at the wrist joint gives a safety factor of Y against yield.

    </div>
    </div>

    ---

    <div class="img-row" markdown>
    <div class="img-row__image" markdown>
    ![Workspace plot](../../assets/images/project-01/workspace.png)
    <p class="img-caption">Figure 4 — Reachable workspace envelope</p>
    </div>
    <div class="img-row__text" markdown>

    ### Kinematics

    Describe the kinematic analysis — forward/inverse kinematics approach, workspace calculation, and any singularity considerations.

    </div>
    </div>

=== ":material-hammer-wrench: Fabrication"

    ## Fabrication

    <div class="img-row" markdown>
    <div class="img-row__image" markdown>
    ![In-progress machining](../../assets/images/project-01/fab-01.png)
    <p class="img-caption">Figure 5 — Machining the primary link</p>
    </div>
    <div class="img-row__text" markdown>

    ### Manufacturing Process

    Describe how parts were made — what operations, machines, and materials were used. What tolerances were critical?

    1. **Machining** — Lathe and mill operations on primary links
    2. **3D Printing** — Bracket and housing components in PETG
    3. **Assembly** — Alignment procedure and torque spec for fasteners

    </div>
    </div>

    ---

    <div class="img-row" markdown>
    <div class="img-row__image" markdown>
    ![Completed assembly](../../assets/images/project-01/fab-02.png)
    <p class="img-caption">Figure 6 — Completed arm assembly</p>
    </div>
    <div class="img-row__text" markdown>

    ### Assembly Notes

    Describe any challenges during assembly — fit issues, alignment procedures, or changes made during build that deviated from the CAD model.

    </div>
    </div>

=== ":material-chart-bar: Results"

    ## Testing & Results

    <div class="img-row" markdown>
    <div class="img-row__image" markdown>
    ![Test setup](../../assets/images/project-01/test-setup.png)
    <p class="img-caption">Figure 7 — Repeatability test configuration</p>
    </div>
    <div class="img-row__text" markdown>

    ### Test Methodology

    Describe how you set up and ran your tests. What equipment was used? How many trials?

    | Metric | Target | Result | Status |
    |---|---|---|---|
    | Payload | 5 kg | 5.2 kg | :material-check: Pass |
    | Reach | 600 mm | 620 mm | :material-check: Pass |
    | Repeatability | ±1 mm | ±0.8 mm | :material-check: Pass |
    | Cycle Time | < 3 s | 2.7 s | :material-check: Pass |

    !!! success "Outcome"
        All requirements met. Describe the final demo or validation result here.

    </div>
    </div>

=== ":material-lightbulb: Lessons Learned"

    ## Reflections

    <div class="img-row" markdown>
    <div class="img-row__image" markdown>
    ![Final product](../../assets/images/project-01/final.png)
    <p class="img-caption">Figure 8 — Final assembled and tested system</p>
    </div>
    <div class="img-row__text" markdown>

    ### What I'd Do Differently

    - **Lesson 1** — What you learned and why it matters
    - **Lesson 2** — What you'd change in a future iteration
    - **Lesson 3** — Something that surprised you during the project

    ### Future Work

    1. **Improvement 1** — Description of what you'd add or change
    2. **Improvement 2** — Description of next steps

    </div>
    </div>

---

## Gallery

<div class="gallery" markdown>

![Gallery 1](../../assets/images/project-01/gallery-01.png)
![Gallery 2](../../assets/images/project-01/gallery-02.png)
![Gallery 3](../../assets/images/project-01/gallery-03.png)
![Gallery 4](../../assets/images/project-01/gallery-04.png)

</div>