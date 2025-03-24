// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Devin Boucher
// Created on: Mar 2025
// This file contains the JS functions for index.html

"use strict"

/**
 * Calculate take-home pay and taxes
 */
function CalculatePay() {
  // Get input values
  const hours = parseFloat(document.getElementById("hours-worked").value)
  const rate = parseFloat(document.getElementById("hourly-rate").value)
  const resultDisplay = document.getElementById("Answer")

  // Validate inputs
  if (isNaN(hours) || isNaN(rate)) {
    resultDisplay.innerHTML = "Please enter valid numbers for hours and rate."
    resultDisplay.style.color = "Black"
    return
  }

  // Calculate pay and taxes
  const grossPay = hours * rate
  const taxes = grossPay * 0.18
  const takeHomePay = grossPay - taxes

  // Display the results
  resultDisplay.innerHTML = `Gross Pay: $${grossPay.toFixed(2)}<br>Taxes: $${taxes.toFixed(2)}<br>Take Home Pay: $${takeHomePay.toFixed(2)}`
  resultDisplay.style.color = "Black"
}
