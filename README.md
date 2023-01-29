# ZWEGAT Stock Predictions 💸

ZWEGAT is my learning project for financial data analysis and "Long short-term Memory predictions" based off historical stock data. It's named after the famous German debt counselor [Peter Zwegat](https://de.wikipedia.org/wiki/Peter_Zwegat).



<p align="center">
  <img src="https://media.tenor.com/ng0mwYEEpNMAAAAd/hasbulla-money.gif" alt="Hasbulla counting money" width="200"/>
</p>
<p align="center">
  Approved by Hasbulla™️
</p>

## Important note 📝

This project should not be used in any production environment as my knowledge of machine learning and financial advisory is not good enough to actually produce usable results. However, if you're also trying to learn about these topics, feel free to adapt this project and play around with it's results.

## Packages

You can find the workspace packages being used in this projects in the [packages](packages/) folder. Each package has some use-cases which should later be of use for this project.

### bank

The [bank package](packages/bank/) is providing a [tRPC](https://trpc.io) API for data access by the other packages.

### collector

The [collector package](packages/collector/) is collecting data from Alphavantage (and some more providers in the future), normalizes and writes it to our bank.

### predictor

The [predictor package](packages/predictor/) provides a [tRPC](https://trpc.io) API for data inputs to our model which should output predictions.

### teacher

The [teacher package](packages/teacher/) is used for model training.