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
  const TAX_RATE = 0.18

  // Calculate pay and taxes
  const grossPay = hours * rate
  const taxes = grossPay * TAX_RATE
  const takeHomePay = grossPay - taxes

  // Display the results
  document.getElementById("Answer").innerHTML = `
  Gross Pay: $${grossPay.toFixed(2)}<br>
  Taxes: $${taxes.toFixed(2)}<br>
  Take Home Pay: $${takeHomePay.toFixed(2)
  }
