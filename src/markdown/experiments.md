---
title: "Experiments"
slug: "/experiments"
id: 4
---
# Experiments

## Segformer Evaluation on MRI
<table style="border-collapse: collapse; width: 35%;">
  <tr>
    <th style="border-right: 1px solid black; border-bottom: 1px solid black; text-align: center;">Comparison Metric</th>
    <th style="border-right: 1px solid black; border-bottom: 1px solid black; text-align: center;">Segformer</th>
    <th style="border-bottom: 1px solid black; text-align: center;">Freesurfer</th>
  </tr>
  <tr>
    <td style="border-right: 1px solid black; text-align: center;">Run Time (Minutes)</td>
    <td style="border-right: 1px solid black; text-align: center;">∼12</td>
    <td style="text-align: center;">∼330</td>
  </tr>
</table>

## Analysis of Extracted SBR ratios

This is the experimental results using the SBR data from Segformer. The
data was the SBR values for the left/right putamen and caudate regions.
They data was classified into control and PD patients by the following
classification methods.  

<table style="border-collapse: collapse; width: 35%;">
  <tr>
    <th style="text-align: center; border-bottom: 1px solid black;">Method</th>
    <th style="text-align: center; border-left: 1px solid black; border-bottom: 1px solid black;">F1-Score</th>
    <th style="text-align: center; border-left: 1px solid black; border-bottom: 1px solid black;">ROC/AUC</th>
  </tr>
  <tr>
    <td style="text-align: center;">Nearest Neighbors</td>
    <td style="text-align: center; border-left: 1px solid black;">0.960</td>
    <td style="text-align: center; border-left: 1px solid black;">0.8996</td>
  </tr>
  <tr>
    <td style="text-align: center;">Linear SVM</td>
    <td style="text-align: center; border-left: 1px solid black;">0.897</td>
    <td style="text-align: center; border-left: 1px solid black;">0.598</td>
  </tr>
  <tr>
    <td style="text-align: center;">RBF SVM</td>
    <td style="text-align: center; border-left: 1px solid black;">0.950</td>
    <td style="text-align: center; border-left: 1px solid black;">0.843</td>
  </tr>
  <tr>
    <td style="text-align: center;">Gaussian Process</td>
    <td style="text-align: center; border-left: 1px solid black;">0.944</td>
    <td style="text-align: center; border-left: 1px solid black;">0.837</td>
  </tr>
  <tr>
    <td style="text-align: center;">Decision Tree</td>
    <td style="text-align: center; border-left: 1px solid black;">0.939</td>
    <td style="text-align: center; border-left: 1px solid black;">0.816</td>
  </tr>
  <tr>
    <td style="text-align: center;">Random Forest</td>
    <td style="text-align: center; border-left: 1px solid black;">0.950</td>
    <td style="text-align: center; border-left: 1px solid black;">0.858</td>
  </tr>
  <tr>
    <td style="text-align: center;">Neural Net</td>
    <td style="text-align: center; border-left: 1px solid black;">0.950</td>
    <td style="text-align: center; border-left: 1px solid black;">0.843</td>
  </tr>
  <tr>
    <td style="text-align: center;">AdaBoost</td>
    <td style="text-align: center; border-left: 1px solid black;">0.923</td>
    <td style="text-align: center; border-left: 1px solid black;">0.769</td>
  </tr>
  <tr>
    <td style="text-align: center;">Naive Bayes</td>
    <td style="text-align: center; border-left: 1px solid black;">0.935</td>
    <td style="text-align: center; border-left: 1px solid black;">0.907</td>
  </tr>
  <tr>
    <td style="text-align: center;">QDA</td>
    <td style="text-align: center; border-left: 1px solid black;">0.926</td>
    <td style="text-align: center; border-left: 1px solid black;">0.723</td>
  </tr>
</table>
