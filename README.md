# End-to-End Test Automation – OrangeHRM  
### Cypress + JavaScript

---

## Overview

This project demonstrates End-to-End (E2E) test automation using **Cypress** with **JavaScript**, validating core user workflows in the OrangeHRM demo application.

The goal is to simulate real user interactions, verify UI behavior, and ensure application stability through automated assertions.

**Application Under Test:**  
https://opensource-demo.orangehrmlive.com

---

## Tech Stack

- Cypress
- JavaScript
- Node.js
- Mocha (Test Runner – built-in)
- Chai Assertions (built-in)

---

## Automated Test Scenarios

### 1. Authentication Flow
- Accessed login page
- Entered valid credentials
- Submitted login form
- Validated successful redirection to Dashboard
- Verified page title after authentication

---

### 2. My Info Module
- Navigated to the "My Info" section
- Interacted with form fields
- Cleared and updated First Name field
- Validated navigation and UI behavior

---

### 3. Assertion Strategies
Implemented multiple validation approaches:

- Element existence validation (`should('exist')`)
- Visibility checks (`should('be.visible')`)
- Content validation (`should('contain')`)
- URL validation (`cy.url().should(...)`)
- Page title validation

---

### 4. CSS & UI Validation
- Validated CSS properties (color, font-size, font-family)
- Asserted image source attribute
- Verified UI styling consistency on Dashboard

---

## Testing Strategy

- End-to-End testing focused on real user behavior simulation
- Assertion-driven validation
- Structured test organization using `describe()` and `it()`
- Functional + UI validation combined

---


---

## Project Structure

cypress/
e2e/
fixtures/
support/
cypress.config.js
package.json


---

## 💡 Skills Demonstrated

- Web Test Automation
- Functional Testing
- UI Validation
- Assertion Strategies
- DOM Interaction
- Form Handling
- CSS Validation
- Structured Test Design

---





