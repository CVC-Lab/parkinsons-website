---
title: "Preliminaries and Related Work"
slug: "/preliminaries"
id: 2
---

# Preliminaries and Related Work

The regions of interest include the caudates, putamens, and whole
striatums. There are two main methods for metric extraction. The ROI
extraction makes a 2D representation from the 3D image for simplified
extraction. VOI extraction takes advantage of full 3D DaTSCAN image and
structural images (MRI).

1.  **Manual ROI extraction** The ROI is manually deliniated by an
    expert

2.  **Template ROI extraction**

    (a)&nbsp; The first involves placing preconstructed-trapezoidal ROIs over the striatal compartment of the 2D image.
    
    (b)&nbsp; The second involves taking the DaTSCAN image and nomalizing it to a space where pre constructed ROI are known and can be placed over the modified image.

3.  **VOI MRI extraction** This method involves the use of complimentary
    structural imaging to determine the volume of interest in the
    DaTSCAN. The VOIs are segmented out of structural images such as MRI
    manually through segmentation software (ITK-snap). Then the DaTSCAN
    and MRI are coregistered using rigid body transformation into the
    same space.
