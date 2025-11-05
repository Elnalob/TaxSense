
import { Benefit } from '../types';

export const benefits: Benefit[] = [
  {
    id: 1,
    title: "SME Tax Exemption",
    description: "Newly registered businesses with a turnover under ₦25 million are exempt from CIT for the first three years of operation, subject to timely filing of returns.",
    criteria: {
      isBusinessRegistered: true,
    }
  },
  {
    id: 2,
    title: "Self-Employed Pension Contribution Relief",
    description: "Self-employed individuals can claim tax relief on contributions made to a registered private pension fund, up to 20% of their total income.",
    criteria: {
      isSelfEmployed: true,
    }
  },
  {
    id: 3,
    title: "Agricultural Production Incentive",
    description: "Registered companies engaged in agricultural production can benefit from a 5-year tax holiday and access to subsidized loans.",
    criteria: {
      isBusinessRegistered: true
    }
  },
  {
    id: 4,
    title: "Tech Startup Incentive",
    description: "Registered tech startups are eligible for a reduced CIT of 10% for their first five years and may receive tax credits for hiring local developers.",
    criteria: {
      isBusinessRegistered: true,
    }
  },
  {
    id: 5,
    title: "Informal Trader Tax Credit",
    description: "Self-employed traders in the informal sector who voluntarily register for a Tax Identification Number (TIN) and file returns receive a one-time tax credit of ₦10,000.",
    criteria: {
      isSelfEmployed: true
    }
  }
];
